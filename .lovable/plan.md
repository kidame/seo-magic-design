

## Plan : Créer les 5 pages manquantes avec SEO complet

### Pages à créer

| Page | Route | Contenu source |
|------|-------|----------------|
| Accompagnement SEO | `/services/accompagnement-seo` | Mission 90 jours, 2 paliers retainer (490/1290), livrables mensuels |
| Création de site web | `/services/creation-site-web` | Pourquoi le sur-mesure, technologies, prix grille tarifaire |
| FAQ (dédiée) | `/faq` | 6 questions complètes du repo GitHub (coût audit, différence audit/accompagnement, WordPress, zone, rapport, forfait vs horaire) |
| Rapport | `/rapport` | 4 blocs de livrables (31 contrôles, Performance/GSC, Concurrents, Mots-clés) |
| Résultats | `/resultats` | Page "à venir" avec CTA diagnostic gratuit |

### SEO pour chaque page

Chaque page utilisera le composant `SeoHead` existant avec :
- **Title** et **meta description** repris du fichier `seo-pages.ts` du repo GitHub
- **Canonical** vers `https://kumo-seo.ch/[path]`
- **JSON-LD** adapté : `Service` pour les pages services, `FAQPage` pour la FAQ, `WebPage` pour rapport/résultats
- **Breadcrumbs JSON-LD** (`BreadcrumbList`) sur chaque page pour Lighthouse et Google

### Design

Même structure que les pages existantes (`AuditSeo.tsx`, `APropos.tsx`) :
- `Navbar` + `Footer` + `<main>` sémantique
- Section hero avec `section-label` kanji + titre `text-gradient`
- Cartes `bg-card` dans grilles `gap-px bg-border/50`
- Animations `framer-motion` avec `whileInView`
- Prix en `font-mono text-gold`
- Kanji au lieu d'emojis dans les labels

### Fichiers modifiés

1. **Créer** `src/pages/AccompagnementSeo.tsx` — mission 90 jours + 2 paliers retainer
2. **Créer** `src/pages/CreationSiteWeb.tsx` — sur-mesure, technos, prix
3. **Créer** `src/pages/FAQ.tsx` — page dédiée avec toutes les FAQ + JSON-LD FAQPage
4. **Créer** `src/pages/Rapport.tsx` — 4 blocs livrables du rapport interactif
5. **Créer** `src/pages/Resultats.tsx` — page placeholder + CTA
6. **Modifier** `src/App.tsx` — ajouter les 5 routes
7. **Modifier** `src/components/Footer.tsx` — liens vers les nouvelles pages
8. **Modifier** `src/components/Navbar.tsx` — ajouter les liens services dans la navigation

### Détail technique SEO / Lighthouse

- Sémantique HTML : `<main>`, `<section>`, `<nav>`, headings hiérarchiques (h1 unique par page)
- `aria-label` sur les sections de navigation
- Breadcrumbs JSON-LD + Schema.org `Service` / `FAQPage` / `WebPage`
- `will-change` sur les animations hero
- Pas de `filter: blur` sur les animations initiales
- Images : aucune image ajoutée (pas de LCP impacté)

