# KUMO 蜘蛛 — Consultant SEO & Création Web

Site vitrine de KUMO, consultant SEO indépendant basé à Neuchâtel (Suisse romande).
Audit SEO technique, accompagnement SEO continu et création de sites web sur-mesure pour PME.

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

## Installation

```bash
# Cloner le repo
git clone https://github.com/kidame/seo-magic-design.git
cd seo-magic-design

# Installer les dépendances
npm install

# Lancer en développement
npm run dev
```

Le site tourne sur `http://localhost:8080`.

## Build production

```bash
npm run build
```

Les fichiers optimisés sont générés dans le dossier `dist/`.

## Déploiement (Infomaniak)

1. `npm run build`
2. Uploader le **contenu** du dossier `dist/` à la racine web de l'hébergement
3. Le `.htaccess` gère le routing SPA, le cache, la compression gzip et les headers de sécurité

Fichiers critiques dans `dist/` :
- `.htaccess` — routing SPA + cache + gzip + sécurité
- `robots.txt` — directives crawlers + lien sitemap
- `sitemap.xml` — 12 URLs indexées
- `index.html` — point d'entrée avec meta SEO + JSON-LD

## Structure du projet

```
src/
├── pages/                  # Pages (12 routes)
│   ├── Index.tsx           # Home
│   ├── AuditSeo.tsx        # /services/audit-seo
│   ├── AccompagnementSeo.tsx # /services/accompagnement-seo
│   ├── CreationSiteWeb.tsx # /services/creation-site-web
│   ├── APropos.tsx         # /a-propos
│   ├── Contact.tsx         # /contact (formulaire)
│   ├── FAQ.tsx             # /faq
│   ├── Rapport.tsx         # /rapport
│   ├── Resultats.tsx       # /resultats
│   ├── MentionsLegales.tsx # /mentions-legales
│   ├── CGV.tsx             # /cgv
│   └── PolitiqueConfidentialite.tsx # /politique-de-confidentialite
├── components/
│   ├── Navbar.tsx          # Navigation glass surface
│   ├── HeroSection.tsx     # Hero avec BlurText
│   ├── ServicesSection.tsx  # Grilles de prix + ShineBorder
│   ├── ProcessSection.tsx  # Méthode en 4 étapes
│   ├── DifferentiatorSection.tsx # Agence vs KUMO
│   ├── CaseStudySection.tsx
│   ├── FAQSection.tsx
│   ├── ContactSection.tsx
│   ├── Footer.tsx
│   ├── LogoTicker.tsx      # Marquee technos
│   ├── ReassuranceBar.tsx
│   ├── SeoHead.tsx         # Meta tags dynamiques
│   ├── ParallaxLayer.tsx
│   └── ui/                 # Composants UI
│       ├── aurora.tsx      # Aurora WebGL (OGL)
│       ├── blur-text.tsx   # Animation texte blur
│       ├── shine-border.tsx # Bordure animée
│       ├── gradual-blur.tsx # Blur graduel
│       ├── button.tsx, input.tsx, textarea.tsx...
└── App.tsx                 # Routes + Aurora global
```

## SEO

### Scores Lighthouse (production)
- **Accessibilité : 100/100**
- **Best Practices : 100/100**
- **SEO : 100/100**
- **Performance : ~72/100** (local, ~90+ sur CDN)

### Optimisations SEO
- Meta title/description uniques par page
- Open Graph + Twitter Cards
- JSON-LD : ProfessionalService, WebSite, FAQPage, Service, ContactPage, AboutPage, BreadcrumbList
- Sitemap XML (12 URLs)
- robots.txt avec Sitemap
- Canonical URLs
- Fonts async (non render-blocking)
- Code splitting (manualChunks)
- Lazy loading des routes
- Maillage interne optimisé (liens croisés entre services)
- Accessibilité WCAG AA (contrastes, aria-labels, hiérarchie headings)

### Formulaire de contact
Le formulaire utilise [FormSubmit.co](https://formsubmit.co/) (gratuit, sans backend).
Les messages arrivent à `thomas.puglisi@kumo-seo.ch`.

## Design

- **Thème :** Dark mode, palette violet/blanc
- **Typographie :** Sora (body), JetBrains Mono (code/mono), Noto Sans JP (kanji)
- **Animations :** BlurText (titres), Aurora WebGL (fond), ShineBorder (cartes prix), GradualBlur (bas de page)
- **Navbar :** Glass surface (backdrop-blur + saturation)

## Auteur

**Thomas Puglisi** — KUMO
Consultant SEO & Développeur Web
Val-de-Travers, Neuchâtel, Suisse romande
thomas.puglisi@kumo-seo.ch
