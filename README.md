# KUMO 蜘蛛 - Consultant SEO & Creation Web

Site vitrine de KUMO, consultant SEO independant base a Neuchatel (Suisse romande).
Audit SEO technique, accompagnement SEO continu et creation de sites web sur-mesure pour PME.

**URL :** [https://kumo-seo.ch](https://kumo-seo.ch)

---

## Stack technique

| Technologie | Usage |
|-------------|-------|
| **React 18** | Framework UI |
| **TypeScript** | Typage statique |
| **Vite 5** | Bundler & dev server |
| **Tailwind CSS** | Styling utilitaire |
| **shadcn/ui** | Composants UI (Radix UI) |
| **Framer Motion** | Animations |
| **OGL** | Aurora WebGL background |
| **GSAP** | Parallax & scroll animations |
| **React Router** | Routing SPA |
| **React Hook Form + Zod** | Formulaire de contact |
| **Puppeteer** | Prerendering + Lighthouse audit |

## Installation

```bash
git clone https://github.com/kidame/seo-magic-design.git
cd seo-magic-design
npm install
npm run dev
```

Le site tourne sur `http://localhost:8080`.

## Scripts

| Commande | Description |
|----------|-------------|
| `npm run dev` | Serveur de developpement |
| `npm run build` | Build production (Vite) |
| `npm run build:prerender` | Build + sitemap + prerendering de toutes les routes |
| `npm run preview` | Preview du build local |
| `npm run test` | Tests unitaires (Vitest) |
| `npm run lighthouse` | Audit Lighthouse mobile + desktop (build + serve + audit) |
| `npm run lighthouse:no-build` | Audit Lighthouse sans rebuild |
| `npm run lint` | ESLint |

## Build production

```bash
npm run build:prerender
```

Ce script enchaine :
1. `vite build` - build optimise dans `dist/`
2. `node scripts/generate-sitemap.mjs` - genere `dist/sitemap.xml` (22 URLs)
3. `node scripts/prerender.mjs` - prerendering HTML de toutes les routes via Puppeteer

## Deploiement (Infomaniak)

1. `npm run build:prerender`
2. Uploader le **contenu** du dossier `dist/` a la racine web de l'hebergement
3. Le `.htaccess` gere le routing SPA, le cache, la compression gzip et les headers de securite

Fichiers critiques dans `dist/` :
- `.htaccess` - routing SPA + cache 1 an + gzip + headers securite (CSP, HSTS, X-Frame-Options)
- `robots.txt` - directives crawlers + lien sitemap
- `sitemap.xml` - genere au build (22 URLs, `/rapport` exclue)
- `index.html` - point d'entree avec meta SEO + JSON-LD ProfessionalService

## Variables d'environnement

Copier `.env.example` vers `.env` :

```bash
cp .env.example .env
```

| Variable | Description | Requis |
|----------|-------------|--------|
| `VITE_GTM_ID` | ID Google Tag Manager (ex: `GTM-XXXXXXX`) | Non (vide = pas de tracking) |

Le GTM ne se charge qu'apres consentement cookies de l'utilisateur (banniere LPD).

## Structure du projet

```
src/
├── pages/                          # Pages (23 routes)
│   ├── Index.tsx                   # /
│   ├── AuditSeo.tsx                # /services/audit-seo
│   ├── AccompagnementSeo.tsx       # /services/accompagnement-seo
│   ├── CreationSiteWeb.tsx         # /services/creation-site-web
│   ├── APropos.tsx                 # /a-propos
│   ├── Contact.tsx                 # /contact
│   ├── FAQ.tsx                     # /faq
│   ├── Rapport.tsx                 # /rapport (noIndex)
│   ├── Resultats.tsx               # /resultats
│   ├── Blog.tsx                    # /blog
│   ├── BlogPost.tsx                # /blog/:slug (5 articles)
│   ├── ConsultantSeoSuisseRomande  # /consultant-seo-suisse-romande
│   ├── ConsultantSeoNeuchatel      # /consultant-seo-neuchatel
│   ├── ConsultantSeoLausanne       # /consultant-seo-lausanne
│   ├── ConsultantSeoGeneve         # /consultant-seo-geneve
│   ├── ConsultantSeoLaChaux        # /consultant-seo-la-chaux-de-fonds
│   ├── MentionsLegales.tsx         # /mentions-legales
│   ├── CGV.tsx                     # /cgv
│   ├── PolitiqueConfidentialite    # /politique-de-confidentialite
│   └── NotFound.tsx                # 404
├── content/blog/                   # Contenu des articles de blog
│   ├── SiteInvisibleGoogle.tsx
│   ├── MiseAJourGoogle2026.tsx
│   ├── CreerSiteInternet2026.tsx
│   ├── FreelanceSeoVsAgence.tsx
│   └── AuditSeoPourquoiIndispensable.tsx
├── data/
│   └── blogPosts.ts                # Metadata SEO des articles
├── components/
│   ├── Navbar.tsx                  # Navigation glass surface
│   ├── SeoHead.tsx                 # Meta tags, canonical, hreflang, JSON-LD
│   ├── BlogCard.tsx                # Carte article blog
│   ├── CookieConsent.tsx           # Banniere consentement cookies LPD
│   ├── GtmScript.tsx               # Injection GTM conditionnelle
│   ├── Footer.tsx
│   └── ui/                         # Composants UI (shadcn + custom)
├── hooks/
│   └── useCookieConsent.ts         # Hook consentement localStorage
└── App.tsx                         # Routes + Aurora + GTM + Cookie consent

scripts/
├── routes.mjs                      # Source unique des routes (path, priority, changefreq)
├── generate-sitemap.mjs            # Genere dist/sitemap.xml depuis routes.mjs
├── prerender.mjs                   # Prerendering Puppeteer de toutes les routes
└── lighthouse-audit.mjs            # Audit Lighthouse mobile + desktop

public/
├── .htaccess                       # Routing SPA + cache + gzip + headers securite
└── robots.txt                      # Directives crawlers
```

## SEO

### Schemas JSON-LD par type de page

| Page | Schemas |
|------|---------|
| Homepage | ProfessionalService (statique), WebSite, HowTo, FAQPage |
| Services | Service, BreadcrumbList |
| Pages locales | ProfessionalService + areaServed, BreadcrumbList |
| Blog articles | BlogPosting, BreadcrumbList, FAQPage |
| A propos | AboutPage, Person, BreadcrumbList |
| FAQ | FAQPage, BreadcrumbList |

### Optimisations SEO
- Meta title/description uniques par page
- Open Graph + Twitter Cards
- Canonical URLs sur toutes les pages
- hreflang fr + x-default
- Sitemap XML genere au build (22 URLs)
- robots.txt (Disallow: /rapport, /api/)
- Prerendering HTML (contenu visible sans JS)
- Fonts async non render-blocking (display=swap)
- Code splitting (manualChunks Vite)
- Lazy loading des routes (React.lazy)
- Maillage interne (blog <-> services <-> pages locales)

### Headers de securite (.htaccess)
- `Content-Security-Policy` (script-src, style-src, connect-src, font-src, img-src)
- `Strict-Transport-Security` (HSTS 1 an)
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` (camera, microphone, geolocation desactives)

### Analytics
- Google Tag Manager via `VITE_GTM_ID` (variable d'environnement)
- Charge uniquement apres consentement cookies (conforme nLPD)
- Pas de tracking en mode dev (VITE_GTM_ID vide)

### Formulaire de contact
Le formulaire utilise [FormSubmit.co](https://formsubmit.co/) (gratuit, sans backend).
Les messages arrivent a `thomas.puglisi@kumo-seo.ch`.

## Design

- **Theme :** Dark mode, palette violet/blanc
- **Typographie :** Sora (body), JetBrains Mono (code/mono)
- **Animations :** BlurText (titres), Aurora WebGL (fond), ShineBorder (cartes prix), GradualBlur (bas de page)
- **Navbar :** Glass surface (backdrop-blur + saturation)

## Auteur

**Thomas Puglisi** - KUMO
Consultant SEO & Developpeur Web
Val-de-Travers, Neuchatel, Suisse romande
thomas.puglisi@kumo-seo.ch
