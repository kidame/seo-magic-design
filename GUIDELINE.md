# GUIDELINE — Créer un site web professionnel SEO-optimisé

Ce document décrit la méthode complète utilisée pour créer le site KUMO (kumo-seo.ch).
Il sert de référence pour reproduire cette approche sur les futurs projets clients.

---

## Table des matières

1. [Stack technique](#1-stack-technique)
2. [Structure du projet](#2-structure-du-projet)
3. [Design & UI](#3-design--ui)
4. [Composants & animations](#4-composants--animations)
5. [SEO technique](#5-seo-technique)
6. [Maillage interne](#6-maillage-interne)
7. [Performance](#7-performance)
8. [Prerendering](#8-prerendering)
9. [Accessibilité](#9-accessibilité)
10. [Formulaire de contact](#10-formulaire-de-contact)
11. [Déploiement](#11-déploiement)
12. [Checklist finale](#12-checklist-finale)

---

## 1. Stack technique

### Fondation
| Lib | Version | Rôle |
|-----|---------|------|
| React | 18 | Framework UI |
| TypeScript | 5.x | Typage statique |
| Vite | 5.x | Bundler & dev server |
| Tailwind CSS | 3.x | Styling utilitaire |

### UI & composants
| Lib | Rôle |
|-----|------|
| shadcn/ui | Composants pré-stylés (Radix UI + Tailwind) |
| Lucide React | Icônes |
| class-variance-authority | Variantes de composants |
| clsx + tailwind-merge | Fusion de classes CSS |

### Animations
| Lib | Rôle |
|-----|------|
| Framer Motion | Animations déclaratives (fade, slide, viewport) |
| GSAP + ScrollTrigger | Parallax, scroll animations |
| OGL | WebGL (Aurora background) |

### Formulaire
| Lib | Rôle |
|-----|------|
| React Hook Form | Gestion de formulaire |
| Zod | Validation de schéma |
| FormSubmit.co | Backend email gratuit (zero serveur) |

### Routing & données
| Lib | Rôle |
|-----|------|
| React Router DOM v6 | Routing SPA |
| TanStack React Query | State management async |

### Prerendering
| Lib | Rôle |
|-----|------|
| Puppeteer | Génération HTML statique post-build |

---

## 2. Structure du projet

```
src/
├── pages/                    # 1 fichier = 1 route
│   ├── Index.tsx             # / (home)
│   ├── [Service]Seo.tsx      # /services/[slug]
│   ├── Contact.tsx           # /contact (formulaire)
│   ├── FAQ.tsx               # /faq
│   ├── APropos.tsx           # /a-propos
│   └── [Legal].tsx           # mentions-legales, cgv, etc.
├── components/
│   ├── Navbar.tsx            # Navigation globale
│   ├── Footer.tsx            # Pied de page global
│   ├── SeoHead.tsx           # Meta tags dynamiques par page
│   ├── [Section]Section.tsx  # Sections de la home page
│   └── ui/                   # Composants réutilisables
│       ├── aurora.tsx        # Background WebGL
│       ├── blur-text.tsx     # Animation texte
│       ├── shine-border.tsx  # Bordure animée
│       ├── gradual-blur.tsx  # Blur graduel
│       ├── button.tsx        # Bouton (shadcn)
│       ├── input.tsx         # Input (shadcn)
│       ├── textarea.tsx      # Textarea (shadcn)
│       └── ...               # Autres composants shadcn
├── hooks/                    # Hooks custom
├── lib/                      # Utilitaires (cn, etc.)
├── App.tsx                   # Routes + layout global
└── index.css                 # Variables CSS + Tailwind
```

### Principes de structure
- **1 page = 1 composant** dans `src/pages/`
- **Sections home page** = composants séparés dans `src/components/`
- **Composants UI** réutilisables dans `src/components/ui/`
- **SeoHead** sur CHAQUE page pour les meta tags dynamiques
- **Navbar + Footer** sur chaque page (pas de layout wrapper)
- **Lazy loading** des pages via `React.lazy()` dans App.tsx

---

## 3. Design & UI

### Thème
Le thème est défini dans `src/index.css` via des variables CSS HSL :

```css
:root {
  --background: 240 7% 4%;        /* Fond très sombre */
  --foreground: 30 6% 90%;        /* Texte clair */
  --primary: 270 60% 55%;         /* Couleur accent (violet) */
  --muted-foreground: 240 3% 68%; /* Texte secondaire */
  --gold: 0 0% 95%;               /* Prix/métriques (blanc) */
  --card: 240 5% 7%;              /* Fond des cartes */
  --border: 240 5% 18%;           /* Bordures */
}
```

### Typographie
- **Sora** : Titres et corps de texte
- **JetBrains Mono** : Labels, prix, éléments techniques
- **Noto Sans JP** : Kanji japonais (élément de branding)

### Chargement des fonts
Les fonts Google sont chargées en **async** (non render-blocking) :
```html
<link rel="stylesheet" href="...fonts..." media="print" onload="this.media='all'" />
```

### Palette de couleurs
Adapter les variables `--primary` et `--gold` pour chaque client.
Le reste (background, foreground, card, border) fonctionne pour tout dark theme.

---

## 4. Composants & animations

### Composants custom créés pour ce projet

#### BlurText (`ui/blur-text.tsx`)
Animation de texte mot par mot avec blur. Utilise Framer Motion + IntersectionObserver.
```tsx
<BlurText
  text="Votre titre ici."
  as="h1"
  className="text-4xl font-bold justify-center"
  delay={120}
  animateBy="words"
  direction="top"
/>
```
**Usage :** Titres h1 de toutes les pages pour une animation homogène.

#### Aurora (`ui/aurora.tsx`)
Background WebGL animé (dégradé aurore boréale). Utilise OGL.
```tsx
<Aurora
  colorStops={["#8B5CF6", "#A78BFA", "#C4B5FD"]}
  speed={0.6}
  blend={0.5}
  amplitude={1.2}
/>
```
**Usage :** Background global dans App.tsx, en `fixed` avec `-z-10` et `opacity-60`.

#### ShineBorder (`ui/shine-border.tsx`)
Bordure animée avec dégradé rotatif. CSS pur (conic-gradient + mask).
```tsx
<ShineBorder
  shineColor={["#8B5CF6", "#A78BFA", "#FFFFFF"]}
  duration={6}
  borderWidth={2}
>
  {/* contenu */}
</ShineBorder>
```
**Usage :** Cartes de prix, surtout les plans "recommandés".

#### GradualBlur (`ui/gradual-blur.tsx`)
Blur progressif en bas de page. Divs empilées avec backdrop-blur croissant.
```tsx
<GradualBlur position="bottom" strength={1.5} height="6rem" target="page" />
```

### Animations Framer Motion (pattern standard)
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.1 }}
>
```
**Utilisé sur :** Chaque section, chaque carte, chaque élément qui apparaît au scroll.

### Navbar Glass Surface
```css
bg-background/[0.13] backdrop-blur-xl backdrop-saturate-[2.8] backdrop-brightness-[0.81]
```

---

## 5. SEO technique

### Meta tags dynamiques — SeoHead
Composant `src/components/SeoHead.tsx` à placer sur CHAQUE page :
```tsx
<SeoHead
  title="Titre unique — Marque"
  description="Description unique de 150-160 caractères."
  canonical="https://domaine.ch/route"
  jsonLd={schemaObject}
  ogImage="https://domaine.ch/og-image.jpg"
/>
```

Il met à jour dynamiquement via `useEffect` :
- `document.title`
- `<meta name="description">`
- `<meta property="og:title/description/url/type/image">`
- `<meta name="twitter:image">`
- `<link rel="canonical">`
- `<script type="application/ld+json">`

### Données structurées JSON-LD

#### Page d'accueil — WebSite + ProfessionalService
```json
{
  "@type": "WebSite",
  "name": "KUMO",
  "url": "https://kumo-seo.ch",
  "publisher": { "@type": "ProfessionalService", ... }
}
```

#### Pages service — Service
```json
{
  "@type": "Service",
  "name": "Audit SEO complet",
  "provider": { "@type": "ProfessionalService", ... }
}
```

#### FAQ — FAQPage
```json
{
  "@type": "FAQPage",
  "mainEntity": [{ "@type": "Question", ... }]
}
```

#### Contact — ContactPage
#### À propos — AboutPage
#### Breadcrumbs — BreadcrumbList (sur les pages service)

### index.html statique
Le fichier `index.html` contient les meta tags de la home en dur :
- `<title>`
- `<meta name="description">`
- `<meta property="og:*">`
- `<meta name="twitter:*">`
- `<link rel="canonical">`
- JSON-LD ProfessionalService avec OfferCatalog

### Fichiers techniques
- `public/robots.txt` — Directives crawlers + lien Sitemap
- `public/sitemap.xml` — Toutes les URLs avec lastmod et priority
- `public/.htaccess` — Routing SPA + cache + gzip + headers sécurité

---

## 6. Maillage interne

### Principes
- **Chaque page service** doit linker vers les 2 autres services
- **Les FAQ** doivent linker vers les services mentionnés
- **À propos** doit linker vers les services
- **Contact** doit linker vers les services
- **Résultats/Case studies** doivent linker vers Audit + Rapport
- **Le footer** couvre toutes les pages (filet de sécurité)

### Pattern de section "Services complémentaires"
Ajouté en bas de chaque page service, avant le CTA final :
```tsx
<section className="container max-w-4xl mx-auto px-4 mb-24">
  <div className="grid md:grid-cols-2 gap-px bg-border/50 rounded-lg overflow-hidden">
    <Link to="/services/audit-seo" className="bg-card p-6 hover:bg-card/80 transition-colors">
      <h3 className="font-bold mb-2">Audit SEO</h3>
      <p className="text-sm text-muted-foreground">Description courte.</p>
    </Link>
    {/* autres services */}
  </div>
</section>
```

### Pattern de liens en bas de section
```tsx
<div className="flex flex-wrap justify-center gap-4">
  <Link to="/services/audit-seo" className="text-sm text-primary inline-flex items-center gap-1">
    Audit SEO <ArrowRight size={14} />
  </Link>
  {/* autres liens */}
</div>
```

### Carte du maillage cible
```
Home ──> Services (ancre #services)
Home ──> Méthode (ancre #methode)
Home ──> Contact (ancre #contact)

Audit SEO ──> Accompagnement, Création web, Rapport, Contact
Accompagnement ──> Audit, Création web, Contact
Création web ──> Audit, Accompagnement, Contact

FAQ ──> Audit, Création, Accompagnement, page FAQ complète
À propos ──> Audit, Accompagnement, Création, Contact
Résultats ──> Audit, Accompagnement, Rapport
Contact ──> Audit, Création, Accompagnement

Footer ──> Toutes les pages (filet de sécurité)
```

---

## 7. Performance

### Code splitting (Vite manualChunks)
Dans `vite.config.ts` :
```ts
build: {
  rollupOptions: {
    output: {
      manualChunks: {
        'vendor-react': ['react', 'react-dom', 'react-router-dom'],
        'vendor-motion': ['framer-motion'],
        'vendor-ogl': ['ogl'],
        'vendor-gsap': ['gsap'],
        'vendor-icons': ['lucide-react'],
        'vendor-radix': ['@radix-ui/react-tooltip', '@radix-ui/react-toast', '@radix-ui/react-slot'],
        'vendor-query': ['@tanstack/react-query'],
      },
    },
  },
},
```
**Résultat :** Le plus gros chunk passe de 530KB à ~162KB.

### Lazy loading
- **Routes** : `React.lazy(() => import("./pages/..."))` dans App.tsx
- **Aurora** : Lazy loadée car OGL est lourd (~246KB)
- **Page Index** : Importée directement (pas lazy) car c'est la landing page

### Fonts async
```html
<link rel="stylesheet" href="...fonts..." media="print" onload="this.media='all'" />
```
Les fonts ne bloquent pas le rendu. Le contenu s'affiche avec la font system, puis swap.

### Contrastes WCAG AA
- `--muted-foreground` minimum `68%` de lightness sur fond `4%`
- Vérifier chaque `text-primary/XX` — minimum ratio 4.5:1

---

## 8. Prerendering

### Pourquoi
Une SPA React ne rend que `<div id="root"></div>` côté serveur.
Le prerendering génère du HTML statique pour chaque page au build.

### Script `scripts/prerender.mjs`
1. Lance un serveur local sur le dossier `dist/`
2. Ouvre chaque route avec Puppeteer (navigateur headless)
3. Attend que React rende le contenu
4. Sauvegarde le HTML dans `dist/[route]/index.html`

### Commande
```bash
npm run build:prerender
```
Cela exécute `vite build` puis `node scripts/prerender.mjs`.

### Résultat
```
dist/
├── index.html                          # Home (prerendered)
├── services/
│   ├── audit-seo/index.html            # Audit (prerendered)
│   ├── accompagnement-seo/index.html
│   └── creation-site-web/index.html
├── contact/index.html
├── faq/index.html
├── a-propos/index.html
├── rapport/index.html
├── resultats/index.html
├── mentions-legales/index.html
├── cgv/index.html
├── politique-de-confidentialite/index.html
├── .htaccess
├── robots.txt
├── sitemap.xml
└── assets/                             # JS, CSS, fonts
```

Chaque `index.html` contient le **vrai contenu HTML** :
- `<title>` unique
- `<meta>` tags corrects
- `<h1>`, `<p>`, formulaires, liens
- Les crawlers voient tout sans JavaScript

---

## 9. Accessibilité

### Objectif : Score 100/100 Lighthouse

#### Checklist
- [ ] `<html lang="fr">` sur la page
- [ ] Skip link vers `#main-content`
- [ ] `<main id="main-content">` sur chaque page
- [ ] `<nav role="navigation" aria-label="Navigation principale">`
- [ ] `<footer role="contentinfo">`
- [ ] Boutons : `aria-label` si le texte visible ne suffit pas
- [ ] `aria-expanded` sur les boutons toggle (FAQ, menu mobile)
- [ ] `aria-hidden="true"` sur les icônes décoratives
- [ ] Pas de `<h4>` dans le footer (utiliser `<p>` pour les labels de nav)
- [ ] Hiérarchie h1 > h2 > h3 séquentielle (pas de saut)
- [ ] Contraste : `--muted-foreground` au minimum `68%` lightness
- [ ] Pas de `text-*/10` ou `text-*/20` (trop faible contraste)
- [ ] `aria-label` correspondant au texte visible (label-content-name-mismatch)

---

## 10. Formulaire de contact

### Architecture
- **Frontend :** React Hook Form + validation Zod (composants shadcn/ui)
- **Backend :** FormSubmit.co (gratuit, zero serveur)
- **Anti-spam :** Honeypot field (`name="_honey"`)

### Champs
1. Nom (requis)
2. Email (requis, type email)
3. URL du site (optionnel, type url)
4. Message (requis, minLength 10)

### Configuration FormSubmit.co
```html
<input type="hidden" name="_captcha" value="false" />
<input type="hidden" name="_subject" value="Nouveau message depuis site.ch" />
<input type="hidden" name="_template" value="table" />
<input type="text" name="_honey" className="hidden" />
```

Soumission via `fetch` vers `https://formsubmit.co/ajax/email@domaine.ch`.

**Important :** La première soumission nécessite une confirmation email.

---

## 11. Déploiement

### Build
```bash
npm run build:prerender
```

### Upload sur Infomaniak (ou autre hébergement Apache)
1. Uploader tout le contenu de `dist/` à la racine web
2. Vérifier que `.htaccess` est bien uploadé (fichier caché)
3. Activer SSL (Let's Encrypt)

### .htaccess inclus
- **Routing SPA** : Toutes les routes redirigent vers `index.html`
- **Cache 1 an** sur les assets statiques (CSS, JS, fonts, images)
- **Gzip** sur HTML, CSS, JS, JSON, SVG
- **Headers sécurité** : X-Content-Type-Options, X-Frame-Options, Referrer-Policy

### Vérifications post-déploiement
- [ ] `https://domaine.ch` charge le site
- [ ] `https://domaine.ch/contact` fonctionne (pas de 404)
- [ ] `https://domaine.ch/sitemap.xml` est accessible
- [ ] `https://domaine.ch/robots.txt` est accessible
- [ ] SSL actif (cadenas vert)
- [ ] Formulaire de contact envoie les emails

---

## 12. Checklist finale

### SEO
- [ ] Meta title unique par page (< 60 caractères)
- [ ] Meta description unique par page (150-160 caractères)
- [ ] Canonical URL sur chaque page
- [ ] Open Graph (og:title, og:description, og:image, og:url)
- [ ] Twitter Cards (twitter:card, twitter:image)
- [ ] JSON-LD sur chaque page (type adapté)
- [ ] Sitemap XML avec toutes les URLs
- [ ] robots.txt avec lien Sitemap
- [ ] og-image.jpg (1200x630px) dans public/
- [ ] Prerendering actif (`npm run build:prerender`)

### Performance
- [ ] Code splitting (manualChunks)
- [ ] Lazy loading des routes
- [ ] Fonts async (non render-blocking)
- [ ] Images optimisées (WebP, lazy loading)
- [ ] .htaccess avec cache + gzip

### Accessibilité
- [ ] Score 100/100 Lighthouse
- [ ] Skip link
- [ ] Aria-labels sur les éléments interactifs
- [ ] Contrastes WCAG AA
- [ ] Hiérarchie headings correcte

### Maillage interne
- [ ] Pages service linkent entre elles
- [ ] FAQ linke vers les services
- [ ] À propos linke vers les services
- [ ] Contact linke vers les services
- [ ] Footer couvre toutes les pages

### Formulaire
- [ ] Validation frontend (Zod)
- [ ] Anti-spam (honeypot)
- [ ] Feedback utilisateur (toast)
- [ ] Email de confirmation FormSubmit activé

---

*Document créé pour KUMO SEO — Thomas Puglisi*
*Dernière mise à jour : 30 mars 2026*
