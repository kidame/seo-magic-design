# Lighthouse Audit — Production Vercel

Date : 2026-04-14
Cible : `https://seo-magic-design.vercel.app/`
Outil : Lighthouse 13.1.0 via Chrome 146 (desktop + mobile émulé, throttling Slow 4G + CPU 4x).
Script : [scripts/lighthouse-vercel.mjs](scripts/lighthouse-vercel.mjs) — `node scripts/lighthouse-vercel.mjs`
Rapports HTML : [lighthouse-reports-vercel/](lighthouse-reports-vercel/) + [summary.json](lighthouse-reports-vercel/summary.json).

---

## TL;DR

Le déploiement Vercel est **en très bonne forme**. Tous les P0/P1 du rapport précédent ([LIGHTHOUSE-AUDIT-REPORT.md](LIGHTHOUSE-AUDIT-REPORT.md)) sont corrigés : le `<main>` est présent, l'exception WebGL Aurora est éteinte, les scores Performance N/A ont disparu, et la perf mobile est passée de 59 à 93 sur la home.

### Scores — 8 pages × 2 form factors

| Page | Mobile | Desktop |
|---|---|---|
| / | **93** / 100 / 100 / 100 | **100** / 100 / 100 / 100 |
| /services/audit-seo | **93** / 100 / 100 / 100 | **100** / 100 / 100 / 100 |
| /services/creation-site-web | **94** / 100 / 100 / 100 | **100** / 100 / 100 / 100 |
| /blog | **93** / 100 / 100 / 100 | **100** / 100 / 100 / 100 |
| /blog/site-invisible-google-pme-suisse | **93** / 100 / 100 / 100 | **100** / 100 / 100 / 100 |
| /consultant-seo-suisse-romande | **93** / 100 / 100 / 100 | **100** / 100 / 100 / 100 |
| /contact | **93** / 100 / 100 / 100 | **100** / 100 / 100 / 100 |
| /mentions-legales | **93** / 100 / 100 / **66** | **100** / 100 / 100 / **66** |

Format des colonnes : Performance / Accessibility / Best Practices / SEO.

### Core Web Vitals (moyenne 8 pages)

| Métrique | Mobile | Desktop | Seuil "bon" |
|---|---|---|---|
| FCP | 2.4–2.5 s | 0.6 s | < 1.8 s |
| LCP | 2.6–2.8 s | 0.6–0.7 s | < 2.5 s |
| TBT | 0 ms | 0 ms | < 200 ms |
| CLS | 0 | 0 | < 0.1 |
| Speed Index | ~2.5 s | ~0.6 s | < 3.4 s |

Mobile FCP/LCP sont juste au-dessus du seuil "bon" (2.5 s au lieu de 1.8 s pour FCP, 2.6 s au lieu de 2.5 s pour LCP). C'est la seule vraie marge de progression.

---

## P1 — Régression prerender : stylesheet Google Fonts devenu render-blocking

**Audit** : `render-blocking-insight` — ~600 ms économisables en mobile, ~120 ms en desktop. Source : `https://fonts.googleapis.com/css2?family=Sora...&family=JetBrains+Mono...`.

**Root cause**. Dans [index.html:36-41](index.html), le link est correctement configuré en non-blocking :
```html
<link rel="preload" as="style" href="…fonts.googleapis.com/css2…"
      onload="this.onload=null;this.rel='stylesheet'" />
```
Mais [scripts/prerender.mjs:90](scripts/prerender.mjs) fait `page.content()` **après** que l'`onload` a été déclenché dans Puppeteer. Le `rel="preload"` a donc été muté en `rel="stylesheet"` dans le DOM live, et cet état est sérialisé dans le HTML publié sur Vercel :
```html
<!-- HTML servi par Vercel -->
<link rel="stylesheet" as="style" href="…fonts.googleapis.com/css2…"
      onload="this.onload=null;this.rel='stylesheet'">
```
Résultat : la feuille bloque le rendu au lieu d'être chargée en async.

**Vérif** :
```bash
curl -s https://seo-magic-design.vercel.app/ | grep "fonts.googleapis.com/css2"
```
→ confirme `rel="stylesheet"` (pas `rel="preload"`).

**Fix** (~10 min). Dans [scripts/prerender.mjs](scripts/prerender.mjs), avant `page.content()`, restaurer le rel :
```js
await page.evaluate(() => {
  document.querySelectorAll('link[as="style"][rel="stylesheet"]').forEach((l) => {
    l.setAttribute('rel', 'preload');
  });
});
const html = await page.content();
```
Ou, plus robuste, post-traiter la string HTML :
```js
const html = (await page.content()).replace(
  /<link rel="stylesheet" as="style"/g,
  '<link rel="preload" as="style"'
);
```

**Gain attendu** : FCP mobile 2.5 s → ~1.9 s ; Performance mobile 93 → ~96–97. Aucun gain desktop visible (déjà 100). Côté qualité des Core Web Vitals "good" à l'échelle du field report (CrUX), tous les utilisateurs gagnent les 600 ms.

---

## P2 — Unused JavaScript : vendor-motion + vendor-gsap

**Audit** : `unused-javascript` — 26–49 KiB économisables.

| Chunk | Size brut | Wasted | % |
|---|---|---|---|
| `vendor-motion-*.js` (framer-motion) | 45 KiB | 27 KiB | 59 % |
| `vendor-gsap-*.js` | 47 KiB | 24 KiB | 50 % |

Nettement mieux qu'auparavant (le rapport précédent voyait ~260 KiB wasted côté local), donc un premier round de splitting est en place. Il reste du gras dans motion et gsap chargés eagerly. Pistes :

1. **Identifier l'usage** : avec `grep -r "from \"framer-motion\"" src/ | wc -l` et idem pour `gsap`. Si utilisés only dans des sections en dessous du fold, les passer en `React.lazy` ou dynamic `import()` déclenché par `IntersectionObserver` / `requestIdleCallback`.
2. **Tree-shaking gsap** : importer uniquement les plugins utilisés (`import gsap from "gsap/dist/gsap"` + `ScrollTrigger` ciblé), surtout si `TextPlugin`/`CSSRulePlugin` sont embarqués inutilement.
3. **Alternative motion** : pour des animations simples, `framer-motion/m` (variante allégée) ou les primitives CSS via Tailwind suffisent souvent.

**Gain attendu** : -50 KiB au download + parsing économisé sur mobile = ~200 ms de main-thread en moins → Perf mobile 93 → 95.

---

## P2 — Main-thread work on Home mobile

**Audit** : `mainthread-work-breakdown` score 50 (2.2 s) sur `/` mobile uniquement.

Cause probable : hydratation React + init GSAP/Aurora au-dessus du fold. Corrélé à P2 (unused JS). Aucun autre page ne tombe sous ce seuil — c'est spécifique à la home.

**Action** : après les optimisations P2 ci-dessus, ré-auditer. Si toujours rouge, profiler via `chrome://tracing` ou `npm run lighthouse` en local avec l'option `--view` pour cliquer sur le flamegraph.

---

## P3 — Network dependency tree (informatif)

**Audit** : `network-dependency-tree-insight` score 0 sur toutes les pages. C'est **un insight**, pas un échec fonctionnel. Chaîne la plus longue :

```
/ → fonts.googleapis.com/css2 → fonts.gstatic.com/woff2
```

Conséquence de P1 : une fois la feuille Google Fonts redevenue `preload`, l'arborescence raccourcit et cet insight se détendra.

---

## P3 — `is-crawlable` sur `/mentions-legales` (faux positif)

SEO 66 attendu : la page légale renvoie `<meta name="robots" content="noindex, follow">` volontairement. **Rien à corriger.** Même remarque que dans le rapport précédent — les trois pages légales (`/mentions-legales`, `/cgv`, `/politique-de-confidentialite`) sont dans ce cas.

---

## Ce qui a été corrigé depuis le dernier audit

| Bug P0/P1 précédent | Statut Vercel |
|---|---|
| Exception WebGL Aurora (Best Practices) | ✅ résolu (BP=100 partout) |
| `<main>` landmark manquant (A11y 93) | ✅ résolu (A11y=100 partout) |
| `NO_LCP` runtime errors sur la plupart des pages | ✅ résolu (LCP mesuré partout) |
| Perf mobile home 59 | ✅ 93 |
| 57 KiB CSS non utilisé (Tailwind + sonner) | ✅ non détecté (purge OK) |
| 300 KiB JS non utilisé | 🔶 partiellement — reste ~50 KiB sur motion + gsap |
| Cache lifetimes | ✅ non remonté |

---

## Quick wins restants (ordre recommandé)

1. **Corriger `prerender.mjs`** pour préserver `rel="preload"` sur la feuille Google Fonts (10 min, **P1**, ~600 ms FCP mobile).
2. **Lazy-load framer-motion / gsap** dans les composants below-the-fold (30–60 min, P2, ~200 ms TBT mobile + -50 KiB).
3. Ré-auditer après P1+P2 → cible **Perf mobile 96–98**, **FCP mobile < 1.8 s**, **LCP mobile < 2.5 s**.

---

## Annexe — Lancer l'audit localement

```bash
npm install
node scripts/lighthouse-vercel.mjs                 # 8 pages clés
node scripts/lighthouse-vercel.mjs /                # une seule page
LH_BASE_URL=https://preview-xyz.vercel.app node scripts/lighthouse-vercel.mjs
```

Reports écrits dans [lighthouse-reports-vercel/](lighthouse-reports-vercel/). Le script gère automatiquement le proxy d'egress authentifié (sandbox Anthropic) via `proxy-chain` et ignore les erreurs de certificat pour permettre à Chrome de sortir.
