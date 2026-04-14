# Lighthouse Audit Report — seo-magic-design

Date d'analyse : 2026-04-14
Données sources : `lighthouse-reports/*.html` (Lighthouse 13.1.0, mobile + desktop) et [summary.json](lighthouse-reports/summary.json).

---

## TL;DR — Priorités

| Priorité | Problème | Impact | Effort |
|---|---|---|---|
| **P0** | Erreur JS `Cannot set properties of null (setting 'renderer')` + `unable to create webgl context` dans `Aurora` (OGL/WebGL) — visible **sur toutes les pages** | Pollue Best Practices partout, casse un effet visuel, probablement la cause des flakes de perf | Moyen |
| **P0** | LCP/FCP mobile catastrophiques sur Home : **FCP 6.3 s / LCP 7.2 s** (score perf 59) | -35 pts perf mobile sur la home | Moyen |
| **P0** | `Document does not have a main landmark` — manque `<main>` dans `App.tsx` / layout — **pénalise l'a11y de 7 pts sur 100 % des pages** | Fix 1 ligne, gain 7 pts a11y partout | Trivial |
| **P1** | 57 KiB de CSS non utilisé (95 % de `index-BeDwLbD4.css`) — tout Tailwind non purgé + `sonner` non utilisé | ~300 ms d'économie mobile | Faible |
| **P1** | 300+ KiB de JS non utilisé (motion, gsap, ogl, radix) chargés eagerly | 1.5–1.8 s d'économie mobile | Moyen |
| **P2** | Cache lifetimes inefficaces pour les assets statiques | LCP aux repeat visits | Faible (headers Vercel) |
| **P2** | Forced reflow + render blocking insights | TBT + LCP | Moyen |
| **P3** | Legal pages score SEO 66 (`is-crawlable` fail) — **comportement voulu** (`noindex`), pas un bug | N/A | Aucun (documenter) |

---

## Pourquoi tant de scores "N/A" dans [summary.json](lighthouse-reports/summary.json) ?

**Ce n'est PAS un timeout d'audit** — tous les rapports HTML sont présents et complets (~400 KB chacun). Le problème est dans la catégorie Performance :

Sur la majorité des pages *autres que la home*, Lighthouse émet une `runtimeError: NO_LCP` (ex : [services-audit-seo-mobile.html](lighthouse-reports/services-audit-seo-mobile.html), [mentions-legales-mobile.html](lighthouse-reports/mentions-legales-mobile.html)). Lorsque LCP n'est pas mesurable :
- `largest-contentful-paint.score = null`
- `total-blocking-time.score = null`
- `interactive.score = null`
- Par ricochet, **Lighthouse refuse de calculer un score Performance agrégé** → `categories.performance.score = null`, que [scripts/lighthouse-audit.mjs](scripts/lighthouse-audit.mjs) sérialise en `"N/A"` ([ligne 106](scripts/lighthouse-audit.mjs)).

**Cause probable du NO_LCP** : Aurora/OGL plante immédiatement (voir P0 ci-dessous) et aucun élément n'est peint comme "largest". Les pages où WebGL se charge différemment (Home, /services/creation-site-web, /faq, /contact desktop, /consultant-seo-la-chaux-de-fonds desktop) exposent un LCP valide — les autres non. Le FCP reste mesurable (entre 5.3 s et 6.0 s), donc la page s'affiche bien, mais aucun élément "assez grand" n'est détecté comme candidat LCP — probablement parce que le rendu Aurora couvre le viewport puis est démonté après l'exception.

**=> Corriger l'exception Aurora (P0.1) devrait faire réapparaître TOUS les scores Performance.**

Le script `lighthouse-audit.mjs` en soi est fonctionnel ; pas de bug à y corriger, sauf éventuellement :
- Logger `runnerResult.lhr.runtimeError` quand présent pour clarifier les N/A dans la console.
- Capturer `runWarnings`.

---

## P0 — Critique

### P0.1 — Exception WebGL Aurora sur toutes les pages
**Audit** : `errors-in-console` (Best Practices) — score 0 sur toutes les pages, pèse 1 pt → plafonne Best Practices à 96.

**Erreur captée** :
```
TypeError: Cannot set properties of null (setting 'renderer')
  at new Te (vendor-ogl.js:7:1160)
  at aurora-*.js:103:312
console.error: unable to create webgl context
```

**Root cause probable** : dans [src/components/ui/aurora.tsx](src/components/ui/aurora.tsx), le `Renderer` OGL est instancié avant que le `<canvas>` n'ait été monté (ref null) ou dans un environnement headless où `getContext('webgl')` renvoie null. La création du `Renderer` dans `useEffect` suppose que `ref.current` existe, mais n'a pas de guard, et ne gère pas l'échec de la création du contexte WebGL.

**Effet cascade** : plante le premier paint, probablement à l'origine des `NO_LCP` (voir section N/A).

**Fix** :
- Dans [src/components/ui/aurora.tsx](src/components/ui/aurora.tsx), guarder `if (!canvasRef.current) return;` au début du useEffect.
- Wrapper `new Renderer({ canvas: ref.current })` dans un `try/catch` et **retourner silencieusement** si `gl === null`.
- Bonus : charger le composant en `React.lazy` + `<Suspense fallback={null}>` pour ne pas le mettre dans le chunk critique (il pèse 45 KB dans `vendor-ogl`).

### P0.2 — Performance mobile catastrophique sur la Home
**Page** : `/` mobile — score perf **59** ([-mobile.html](lighthouse-reports/-mobile.html))

| Métrique | Valeur | Score | Seuil "bon" |
|---|---|---|---|
| FCP | 6.3 s | 0.03 | < 1.8 s |
| LCP | 7.2 s | 0.05 | < 2.5 s |
| Speed Index | 6.3 s | 0.41 | < 3.4 s |
| TBT | 130 ms | 0.96 | < 200 ms (OK) |
| CLS | 0 | 1 | OK |
| TTI | 7.3 s | 0.49 | < 3.8 s |

Desktop = 94, donc le prerender HTML est correct — le problème est la **hydration mobile lente** sous throttling simulé (Slow 4G + CPU 4x).

**Fixes à empiler** (dans l'ordre d'impact) :
1. Fix P0.1 (Aurora plante → rerender et retry coûteux).
2. Réduire le JS initial — voir P1.2.
3. Le LCP candidat est probablement un élément texte en dessous de l'animation Aurora. **Préloader la/les fonts critiques** (`<link rel="preload" as="font" crossorigin>`) dans `index.html`.
4. Vérifier que les images hero utilisent `fetchpriority="high"` et `loading="eager"` (seulement pour le LCP), avec `<picture>` WebP/AVIF.
5. Retarder Aurora derrière un `IntersectionObserver` ou après `requestIdleCallback`.

### P0.3 — `<main>` landmark manquant (a11y)
**Audit** : `landmark-one-main` — score 0 sur **toutes les pages** → a11y plafonne à 93.

**Détail** : `<html lang="fr">` détecté, mais aucun `<main>` / `role="main"` dans l'arbre. [src/App.tsx](src/App.tsx) et les pages utilisent seulement des `<div>`.

**Fix 1 ligne** : dans [src/App.tsx](src/App.tsx), enrober les `<Routes>` par un `<main>` :
```tsx
<main id="main-content">
  <Routes>...</Routes>
</main>
```
(ou rajouter `<main>` à l'intérieur de chaque page, mais le faire dans App est plus DRY.)

**Impact attendu** : a11y 93 → 100 sur les 22 pages (+7 pts). **Quick win absolu**.

---

## P1 — Fort impact, effort raisonnable

### P1.1 — CSS non utilisé : 57 KiB (95 %) de `index-*.css`
**Audit** : `unused-css-rules` — Est savings 56–70 KiB, ~300 ms mobile.

**Détail** :
- `assets/index-BeDwLbD4.css` : 60 346 B → 57 547 B wasted (95.4 %).
- Sur desktop home : 14 625 B de CSS `sonner` (toaster) injectés mais 100 % wasted.

**Actions** :
- Vérifier le `content` de `tailwind.config.ts` — probablement trop large ou inclut des fichiers non utilisés.
- Auditer si `sonner` est réellement utilisé ; si oui, le lazy-loader uniquement où nécessaire. Chercher `from "sonner"` ou `<Toaster`.
- Activer `build.cssCodeSplit: true` dans [vite.config.ts](vite.config.ts) (activé par défaut — mais vérifier).
- Envisager `@unocss/postcss` / `cssnano` + `purgecss` si Tailwind ne purge pas assez.

### P1.2 — JS non utilisé : 260–317 KiB
**Audit** : `unused-javascript` — Est savings 1.5–1.85 s mobile, 280 ms desktop.

**Top contrevenants** (home mobile) :
| Chunk | Size | Wasted | % |
|---|---|---|---|
| `vendor-motion` (framer-motion) | 130 KB | 75 KB | 58 % |
| `vendor-gsap` | 115 KB | 57 KB | 50 % |
| `vendor-react` | 162 KB | 44 KB | 27 % |
| `vendor-radix` | 56 KB | 43 KB | 77 % |
| `vendor-ogl` | 45 KB | 41 KB | 91 % |

**Problème de fond** : le `manualChunks` de [vite.config.ts](vite.config.ts) **groupe** par vendor mais ne **déclenche pas le lazy-load**. Les chunks sont tous chargés dès l'HTML initial via les `modulepreload` générés.

**Actions** :
1. **Lazy-loader Aurora/OGL** : `const Aurora = React.lazy(() => import("@/components/ui/aurora"));` → supprime ~45 KB du critical path.
2. **Lazy-loader GSAP/ScrollTrigger** : n'utiliser qu'en-dessous du fold, via `useEffect + dynamic import`. Économise 115 KB.
3. **Code splitter par route** — pages légales (`MentionsLegales`, `CGV`, `Politique`) n'ont pas besoin de framer-motion ni gsap. Utiliser `React.lazy` dans les routes de [src/App.tsx](src/App.tsx).
4. **Radix** : si `@radix-ui/react-tooltip`/`toast`/`slot` n'est pas utilisé au-dessus du fold, lazy-load aussi.

### P1.3 — Cache lifetimes inefficaces
**Audit** : `cache-insight` — score 0.

Vérifier [vercel.json](vercel.json) : les assets hashés (`/assets/*-[hash].{js,css}`) doivent être en `Cache-Control: public, max-age=31536000, immutable`. Les HTML (prerenderés) doivent être en `max-age=0, must-revalidate` ou `s-maxage` seulement (edge cache).

---

## P2 — Moyen impact

### P2.1 — Forced reflow
**Audit** : `forced-reflow-insight` — score 0. Lighthouse détecte des layout thrashes synchrones pendant l'hydration. Candidats : mesures DOM dans `useLayoutEffect` avant le paint (GSAP ScrollTrigger, Aurora resize listener). Profiler `Performance` trace via DevTools.

### P2.2 — Render blocking requests
**Audit** : `render-blocking-insight` — score 0. Typiquement le CSS critique. Voir P1.1 + envisager un CSS critical extraction (ex : `vite-plugin-critical`) pour les pages prerenderées.

### P2.3 — Network dependency tree trop profond
**Audit** : `network-dependency-tree-insight` — score 0. Chaîne entry HTML → `index.js` → `vendor-*.js` → sous-chunks. Aplatir via `modulepreload` des chunks les plus critiques + éventuellement `103 Early Hints` via Vercel.

### P2.4 — Main thread work
**Audit** : `mainthread-work-breakdown` — score 0 mobile. Corollaire du P1.2 : parser+compiler 500 KB de JS sur CPU mobile throttlé 4x est cher (~2 s). Réduit en réduisant le JS.

---

## P3 — Nice-to-have / non-bugs

### P3.1 — Legal pages score SEO 66 — **faux positif**
Pages : [mentions-legales](lighthouse-reports/mentions-legales-mobile.html), [cgv](lighthouse-reports/cgv-mobile.html), [politique-de-confidentialite](lighthouse-reports/politique-de-confidentialite-mobile.html) — toutes en SEO 66.

**Cause** : audit `is-crawlable` échoue à cause de `<meta name="robots" content="noindex, follow">` injecté par [src/components/SeoHead.tsx:33](src/components/SeoHead.tsx) via le prop `noIndex` (par exemple dans [src/pages/MentionsLegales.tsx:27](src/pages/MentionsLegales.tsx)).

**Verdict** : **comportement voulu** (on ne veut pas indexer les pages légales). Rien à corriger. Documenter dans le README pour éviter les faux débats.

### P3.2 — Amélioration script lighthouse-audit
Dans [scripts/lighthouse-audit.mjs](scripts/lighthouse-audit.mjs) ligne 105, logger `runnerResult.lhr.runtimeError` et `runWarnings` pour rendre les N/A moins mystérieux :
```js
if (runnerResult.lhr.runtimeError) {
  console.warn(`  runtime error: ${runnerResult.lhr.runtimeError.code} — ${runnerResult.lhr.runtimeError.message}`);
}
```

---

## Quick wins (ordre recommandé)

1. **Ajouter `<main>` dans [src/App.tsx](src/App.tsx)** → +7 pts a11y partout (5 min).
2. **Guarder Aurora WebGL + try/catch** dans [src/components/ui/aurora.tsx](src/components/ui/aurora.tsx) → fait sauter l'erreur console, devrait restaurer tous les scores Performance N/A, +4 pts Best Practices partout (15 min).
3. **Lazy-load Aurora** → -45 KB JS critique, -0.5 s LCP mobile (10 min).
4. **Purger Tailwind + retirer `sonner` inutilisé** → -57 KB CSS, -300 ms (30 min).
5. **Route-level `React.lazy`** dans [src/App.tsx](src/App.tsx) pour les pages blog/légales/consultant → -200 KB JS initial sur la home (1 h).
6. **Preload fonts** dans `index.html` → -500 ms FCP mobile (10 min).

Après ces 6 étapes, cible réaliste :
- Home mobile : 59 → **85–90**
- Autres pages mobile : N/A → **80–90**
- A11y : 93 → **100**
- Best Practices : 96 → **100**
- SEO : 100 (sauf pages `noindex` volontaires)

---

## Annexe — fichiers scannés

- [lighthouse-reports/-mobile.html](lighthouse-reports/-mobile.html) — Home mobile (perf 59)
- [lighthouse-reports/-desktop.html](lighthouse-reports/-desktop.html) — Home desktop (perf 94)
- [lighthouse-reports/services-creation-site-web-mobile.html](lighthouse-reports/services-creation-site-web-mobile.html) — perf 64
- [lighthouse-reports/services-audit-seo-mobile.html](lighthouse-reports/services-audit-seo-mobile.html) — perf N/A (NO_LCP)
- [lighthouse-reports/mentions-legales-mobile.html](lighthouse-reports/mentions-legales-mobile.html) — perf N/A, SEO 66 (noindex voulu)
- Dumps intermédiaires : [lighthouse-reports/_extract.json](lighthouse-reports/_extract.json), [lighthouse-reports/_legal_extract.json](lighthouse-reports/_legal_extract.json)
- Scripts d'extraction ad hoc : [scripts/extract-lh.mjs](scripts/extract-lh.mjs), [scripts/a11y-dump.mjs](scripts/a11y-dump.mjs)
