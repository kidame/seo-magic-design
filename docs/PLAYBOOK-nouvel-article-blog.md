# Playbook — Ajouter un nouvel article de blog (pattern "planche documentaire")

## Contexte

Le blog KUMO utilise depuis le 2026-04-16 (merge `feat/blog-planche-documentaire` sur `main`) un pattern éditorial fixe : grille 12 colonnes, TOC sticky desktop, `ArticleSection` numérotées, Marginalia dans le flux, PullQuote, drop-cap sur le premier paragraphe, hero 16:9, ReadingProgress bar, JSON-LD BlogPosting + BreadcrumbList + FAQPage.

Ce playbook fige la procédure reproductible pour qu'un nouvel article respecte le pattern sans régression de câblage ni de SEO. Aucune improvisation : 5 fichiers à toucher, 1 template TSX à dupliquer, 1 checklist de validation.

Dernier état vérifié : 5 articles en ligne (`site-invisible-google-pme-suisse`, `mise-a-jour-google-mars-2026-pme-suisse`, `creer-site-internet-pme-suisse-2026`, `freelance-seo-vs-agence-suisse`, `audit-seo-pourquoi-indispensable`).

---

## Pré-requis (à fournir AVANT de lancer Claude Code)

L'utilisateur doit réunir ces éléments. Claude ne les invente JAMAIS :

1. **Slug** en kebab-case, stable, unique. Ex : `checklist-referencement-local-geneve`.
2. **Mot-clé principal** et 3-5 mots-clés secondaires (recherche réelle, pas hallucinés).
3. **Titre éditorial** (H1) + `seo_title` (≤ 60 car.) + `seo_description` (≤ 160 car.) + `og_title` + `og_description`.
4. **Corps de l'article** en texte brut ou markdown : intro (2-3 paragraphes lead) + 4 à 9 sections avec H2, chacune avec ses paragraphes. Optionnel : sous-H3 à l'intérieur d'une section.
5. **FAQ** : 3 à 6 couples question/réponse (sert au JSON-LD FAQPage).
6. **Assets visuels** déposés dans `public/images/blog/` :
   - `thumb-<slug>.svg` (thumbnail grille blog, 16:9)
   - `<slug>.svg` ou `.jpg` (hero 1920×1080, affiché par `ArticleHero`)
   - `og_image` (1200×630 recommandé, utilisé par OG + JSON-LD `image`)
7. **Meta éditoriales** : `author` (défaut "Thomas Puglisi"), `category`, `tags[]`, `reading_time` (ex. "8 min"), `word_count` (approx.), `date` (YYYY-MM-DD).

Si l'un de ces 7 points manque : **STOP, demander** — ne jamais en inventer.

---

## Les 5 fichiers à toucher (ordre strict)

### 1. `src/content/blog/<PascalCaseName>.tsx` — CRÉER

Fichier de contenu éditorial. Duplique le template ci-dessous. Aucun élément racine, juste un fragment.

### 2. `src/data/blogPosts.ts` — AJOUTER une entrée dans le tableau

Type `BlogPost` (interface existante, ligne 1) : tous les champs requis sauf `hero_alt` (optionnel). Position dans le tableau = ordre d'affichage grille `/blog` + calcul `prevPost`/`nextPost`. Nouvel article → fin du tableau par convention (devient "suivant" du précédent).

Template d'entrée à copier (remplacer les `<...>`) :
```ts
{
  title: "<H1 complet>",
  slug: "<slug>",
  description: "<description courte grille blog>",
  date: "<YYYY-MM-DD>",
  author: "Thomas Puglisi",
  category: "<catégorie>",
  tags: ["<tag1>", "<tag2>", "<tag3>"],
  reading_time: "<X min>",
  word_count: <int>,
  seo_title: "<≤ 60 car.>",
  seo_description: "<≤ 160 car.>",
  canonical: "https://kumo-seo.ch/blog/<slug>",
  og_title: "<titre OG>",
  og_description: "<description OG courte>",
  og_image: "/images/blog/<asset>.svg",
  cover_image: "/images/blog/thumb-<slug>.svg",
  cover_alt: "<alt thumbnail>",
  hero_image: "/images/blog/<slug>.svg",
  hero_alt: "<alt hero éditorial>",
  primary_keyword: "<mot-clé principal>",
  secondary_keywords: ["<kw2>", "<kw3>", "<kw4>"],
},
```

### 3. `src/pages/BlogPost.tsx` — 2 ajouts

**a.** Ajouter une ligne dans `articleComponents` (ligne 15-21) :
```ts
"<slug>": lazy(() => import("@/content/blog/<PascalCaseName>")),
```

**b.** Ajouter une clé dans `faqMap` (ligne 286-377) pour générer le JSON-LD FAQPage :
```ts
"<slug>": [
  { question: "<Q1>", answer: "<R1>" },
  { question: "<Q2>", answer: "<R2>" },
  // ... 3 à 6 items
],
```
Sans cette entrée : le FAQPage JSON-LD n'est pas émis (perte du rich result "Questions fréquentes" dans Google). Si l'article n'a volontairement pas de FAQ : laisser la section FAQ absente du TSX ET `faqMap` sans entrée — c'est géré (`faqItems.length > 0` avant push).

### 4. `scripts/routes.mjs` — AJOUTER 1 ligne

Section `// Blog` (lignes ~29-35), ajouter :
```js
{ path: "/blog/<slug>", priority: 0.7, changefreq: "monthly" },
```
Obligatoire sinon : absent du sitemap, absent du prerender Puppeteer, Google ne l'indexera pas en SSR.

### 5. Assets — DÉPOSER dans `public/images/blog/`

- `thumb-<slug>.svg`
- `<slug>.svg` (hero)
- `og-<slug>.jpg` ou `.png` (1200×630)

**Ne JAMAIS toucher** : `src/App.tsx` (route paramétrique), `scripts/prerender.mjs` (lit automatiquement `ROUTES`), `vite.config.ts`, `vercel.json`, `.htaccess`, `Navbar`, `Footer`, `Aurora`, `tailwind.config.ts`, `src/index.css`, `index.html`.

---

## Template TSX canonique

Fichier `src/content/blog/<PascalCaseName>.tsx` — dupliquer en remplaçant les `<...>` :

```tsx
import { Link } from "react-router-dom";
import ArticleSection from "@/components/blog/ArticleSection";
import Marginalia from "@/components/blog/Marginalia";
import PullQuote from "@/components/blog/PullQuote";
// import KeyTakeaway from "@/components/blog/KeyTakeaway"; // optionnel, décommenter si utilisé

const <PascalCaseName> = () => (
  <>
    {/* LEAD — 2 à 3 paragraphes d'intro, drop-cap sur le 1er */}
    <div className="lead mb-12 space-y-5 article-prose">
      <p className="text-muted-foreground leading-relaxed drop-cap">
        <Accroche concrète : ville, situation, problème>. <suite>.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        <2e paragraphe intro : angle de l'article>.
      </p>
    </div>

    {/* SECTION 01 */}
    <ArticleSection number="01" title="<Titre H2 sans préfixe numérique>">
      <p className="text-muted-foreground leading-relaxed">
        <paragraphe>
      </p>

      <Marginalia label="DÉFINITION">
        <définition courte strictement déductible du texte>
      </Marginalia>

      <p className="text-muted-foreground leading-relaxed">
        <paragraphe>. Lien interne : <Link to="/services/<service>" className="text-primary-light hover:text-primary/80 underline underline-offset-4 transition-colors">ancre naturelle</Link>.
      </p>
    </ArticleSection>

    {/* SECTION 02 */}
    <ArticleSection number="02" title="<H2>">
      <p className="text-muted-foreground leading-relaxed"><paragraphe></p>
      <p className="text-muted-foreground leading-relaxed"><paragraphe></p>
      <Marginalia label="REPÈRE">
        <fait chiffré présent dans le texte source, jamais inventé>
      </Marginalia>
    </ArticleSection>

    {/* PULLQUOTE — ENTRE deux sections, jamais dedans */}
    <PullQuote>
      <citation courte ≤ 36 caractères par ligne, extraite de l'article>
    </PullQuote>

    {/* SECTION 03 */}
    <ArticleSection number="03" title="<H2>">
      <p className="text-muted-foreground leading-relaxed"><paragraphe></p>
      {/* Sous-titre H3 si pertinent */}
      <h3 className="text-lg font-semibold mt-8 mb-3"><sous-titre></h3>
      <p className="text-muted-foreground leading-relaxed"><paragraphe></p>
    </ArticleSection>

    {/* ... répéter jusqu'à N sections (04, 05, ...) ... */}

    {/* FAQ — bloc terminal, hors ArticleSection */}
    <div className="article-prose space-y-6">
      <hr className="border-border/50 my-12" />
      <h2 className="text-xl md:text-2xl font-bold mt-12 mb-4">Questions fréquentes</h2>

      <h3 className="text-lg font-semibold mt-8 mb-3"><Q1 identique à faqMap></h3>
      <p className="text-muted-foreground leading-relaxed"><R1 identique à faqMap></p>

      <h3 className="text-lg font-semibold mt-8 mb-3"><Q2></h3>
      <p className="text-muted-foreground leading-relaxed"><R2></p>

      {/* ... */}

      <hr className="border-border/50 my-12" />
      <p className="text-muted-foreground leading-relaxed italic">
        Pour un audit ou un accompagnement, <Link to="/contact" className="text-primary-light hover:text-primary/80 underline underline-offset-4 transition-colors">contactez KUMO</Link>.
      </p>
    </div>
  </>
);

export default <PascalCaseName>;
```

### Règles de composition (non négociables)

- **Fragment racine `<>`** — jamais de `<div>` ou `<article>` englobant. La page parente fournit `<article id="article-content">`.
- **Lead** : classe `lead mb-12 space-y-5 article-prose`, premier `<p>` avec `drop-cap`.
- **ArticleSection** : `number` est une chaîne zero-padded (`"01"`, `"02"`, ...), `title` sans préfixe numérique. Le composant injecte `data-article-section` / `data-section-number` / `data-section-title` (lus par `ArticleToc`) + numéro filigrane + `<div className="space-y-5 article-prose">` autour des children. **Ne jamais wrapper soi-même les children dans un autre `article-prose`**.
- **Paragraphes** : tous `className="text-muted-foreground leading-relaxed"`.
- **Marginalia** : labels autorisés uniquement `DÉFINITION`, `REPÈRE`, `VOIR AUSSI`, `NOTE`. Contenu STRICTEMENT déductible du texte source (anti-hallucination §5.5). Placée APRÈS le paragraphe qu'elle commente, jamais avant.
- **PullQuote** : ENTRE deux `ArticleSection`, jamais à l'intérieur. Attribution optionnelle via prop `attribution`.
- **KeyTakeaway** : optionnel, en FIN de section, jamais en début ni dans le lead.
- **FAQ** : H2 "Questions fréquentes" + H3/P par Q/R. Les textes H3/P doivent être IDENTIQUES aux `question`/`answer` de `faqMap` (cohérence JSON-LD ↔ DOM).
- **Liens internes** : au moins 2 par article, dont 1 vers `/contact` ou une page service. Classe standard : `text-primary-light hover:text-primary/80 underline underline-offset-4 transition-colors`.
- **Code inline** : `<code className="bg-card px-1.5 py-0.5 rounded text-sm font-mono text-primary-light">...</code>`.

---

## Règles de contenu (LOI N°1 anti AI-like + §5.5 anti-hallucination)

Avant chaque bloc, tester :
1. Un concurrent direct pourrait écrire exactement ça ? → réécrire.
2. Y a-t-il un fait concret (chiffre, ville, quartier, outil, durée) ? → sinon, réécrire.
3. 1000 autres PME pourraient publier ça ? → supprimer.

Interdits : "nous vous accompagnons", "solution sur-mesure", "à votre écoute", "passionné par", "dans un monde où", "il est important de noter", "en conclusion", adjectifs génériques ("innovant", "de qualité") sans preuve.

Marginalia : jamais de chiffre/citation/outil/date non présents dans le texte source de l'article. En cas de doute : marqueur `{/* TODO:MARGINALIA */}` + question à l'utilisateur.

Aucun em-dash dans le code ni le contenu. Aucun emoji dans contenu/commits.

---

## Validation finale (avant commit)

Séquence à exécuter dans l'ordre :

1. **`npm run lint`** — 0 erreur TypeScript.
2. **`npm run build:prerender`** — succès complet (vite build + sitemap + Puppeteer prerender). Vérifier que `dist/blog/<slug>/index.html` existe et contient : H1, texte complet de l'article, `<script type="application/ld+json">` avec BlogPosting + BreadcrumbList (+ FAQPage si faqMap alimenté).
3. **`npm run preview`** puis ouvrir `http://localhost:4173/blog/<slug>` :
   - TOC sticky desktop affiche les N sections avec numéros et titres corrects.
   - Clic sur un item du TOC : la section visée n'est pas masquée sous le Navbar (si chevauchement : remonter à l'équipe, nécessite passage à `scroll-mt-32` dans `ArticleSection.tsx`).
   - Drop-cap visible desktop, désactivé mobile (< 768px).
   - ReadingProgress bar progresse en scrollant.
   - Hero 16:9 chargé, pas de CLS.
4. **`MSYS_NO_PATHCONV=1 node scripts/lighthouse-single.mjs "/blog/<slug>"`** — rapporter LCP, CLS, INP, TBT, FCP + scores (Perf mobile ≥ 55, a11y 100, BP ≥ 90, SEO 100). Budget CWV (référence Palier D) :
   - LCP mobile > 2,8 s → STOP, investiguer hero/font.
   - CLS > 0,15 → STOP, vérifier images sans `width`/`height`.
   - INP > 250 ms → STOP.
5. **Cohérence JSON-LD ↔ DOM FAQ** : les H3/P de la section FAQ doivent correspondre mot pour mot aux entrées de `faqMap[slug]`.
6. **Sitemap** : vérifier `dist/sitemap.xml` contient `<loc>https://kumo-seo.ch/blog/<slug></loc>`.
7. **LOI N°5 standard de livraison** :
   - [ ] title + meta sur chaque page (via SeoHead, automatique)
   - [ ] canonical cohérent
   - [ ] JSON-LD valide
   - [ ] H1 unique
   - [ ] 2+ liens internes contextuels
   - [ ] 0 lien cassé interne
   - [ ] CTA mobile visible
   - [ ] test anti-AI passé

---

## Livraison — commit + push

Convention commit (français, scope kebab) :
```
feat(blog/<slug>): nouvel article <titre court>
```

Push direct sur `main` (branche de déploiement Vercel). Si l'article est sensible ou expérimental : créer une branche dédiée, valider en preview Vercel, puis merger.

Vercel redéploie automatiquement depuis `main` (≈ 2-3 min pour le build Puppeteer + prerender).

---

## Fichiers de référence (ne pas modifier, à consulter)

| Rôle | Chemin |
|---|---|
| Type BlogPost | `src/data/blogPosts.ts:1-27` |
| Map slug → composant | `src/pages/BlogPost.tsx:15-21` |
| faqMap | `src/pages/BlogPost.tsx:286-377` |
| SeoHead alimentation | `src/pages/BlogPost.tsx:124-132` |
| JSON-LD BlogPosting | `src/pages/BlogPost.tsx:51-80` |
| Liste routes (sitemap + prerender) | `scripts/routes.mjs:29-35` |
| Composant ArticleSection | `src/components/blog/ArticleSection.tsx` |
| Composant Marginalia | `src/components/blog/Marginalia.tsx` |
| Composant PullQuote | `src/components/blog/PullQuote.tsx` |
| Composant KeyTakeaway | `src/components/blog/KeyTakeaway.tsx` |
| Composant ArticleHero | `src/components/blog/ArticleHero.tsx` |
| Composant ArticleToc | `src/components/blog/ArticleToc.tsx` |
| Composant ReadingProgress | `src/components/blog/ReadingProgress.tsx` |
| CSS tokens (.lead, .drop-cap, .article-prose) | `src/index.css:173-216` |
| Font face Instrument Serif | `src/index.css:6-13` |
| Preload WOFF2 | `index.html:49-56` |

---

## Anti-exemples (erreurs à ne pas commettre)

- **Oublier l'entrée dans `articleComponents`** (BlogPost.tsx) → page blanche sous le header/footer, pas d'erreur claire.
- **Oublier l'entrée dans `scripts/routes.mjs`** → article absent du sitemap, Google ne le découvre pas, pas de prerender donc SPA shell vide pour le crawler.
- **Oublier `faqMap`** → FAQPage JSON-LD manquant, perte rich result.
- **Wrapper le contenu dans un `<article>` ou un `<div className="article-prose">`** racine → double classe, conflits CSS, pattern cassé.
- **H2 "maison"** (non-ArticleSection) → invisible du TOC (pas de `data-article-section`).
- **Marginalia avec chiffre inventé** → viole §5.5, brise la confiance éditoriale.
- **Inventer une FAQ non cohérente avec le DOM** → divergence JSON-LD ↔ DOM, pénalité potentielle Google.
- **Modifier App.tsx** pour "ajouter la route" → inutile, la route est paramétrique. Modifier App.tsx pour ça casse l'existant.

---

## Quickstart prompt type (à donner à Claude Code la prochaine fois)

> Crée un nouvel article de blog en suivant strictement `docs/PLAYBOOK-nouvel-article-blog.md`. Slug : `<slug>`. Voici les 7 éléments pré-requis : [titre, seo_title, seo_description, og_*, corps avec N sections, FAQ Q/R, assets déjà dans `public/images/blog/`, meta éditoriales]. Applique LOI N°1 (zéro contenu AI-like), §5.5 anti-hallucination marginalia, 5 fichiers à toucher, validation finale complète (lint + build:prerender + preview + lighthouse-single), commit `feat(blog/<slug>): ...`, push sur main. STOP si un des 7 pré-requis manque ou si un seuil CWV est franchi.
