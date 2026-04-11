# SPEC 1 - Quick Wins SEO On-Page

## Contexte
KUMO SEO (kumo-seo.ch) - Consultant SEO freelance a Neuchatel, Suisse romande.
Le site est code en React 18 + TypeScript + Vite + Tailwind.
Repo GitHub : github.com/kidame/seo-magic-design
Preview : seo-magic-design.vercel.app
Deploiement futur : Infomaniak vers kumo-seo.ch

## Etat actuel du site
- Le site est un ONE-PAGE : seule la homepage (/) fonctionne
- 15 liens internes pointes vers des pages 404
- Title tag : OK (70 caracteres)
- Meta description : TROP LONGUE (205 caracteres, max recommande 155)
- H1 unique : OK
- 7 H2, 18 H3 : hierarchie coherente
- 4 schemas JSON-LD : ProfessionalService, WebSite, HowTo, FAQPage
- OG tags complets
- Canonical pointe vers kumo-seo.ch (correct pour la prod)
- 0 images <img> (tout en SVG inline)
- Contenu riche : 14 221 caracteres

## Objectif de cette spec
Corriger les problemes SEO on-page IMMEDIATEMENT sur les fichiers existants, sans creer de nouvelles pages (les nouvelles pages sont dans les specs 2, 3 et 4).

---

## CORRECTION 1 - Meta description trop longue

### Probleme
La meta description actuelle fait 205 caracteres. Google tronque a ~155-160 caracteres.

### Meta description actuelle
"Audit SEO technique a Neuchatel : 31 points de controle, rapport interactif, plan d'action 90 jours. Creation de sites web sur-mesure et accompagnement SEO continu. Forfait fixe pour PME de Suisse romande."

### Nouvelle meta description (155 caracteres max)
"Consultant SEO a Neuchatel. Audit 31 points, creation web sur-mesure, accompagnement SEO continu. Forfait fixe pour PME de Suisse romande."

### Instructions Claude Code
- Trouve le fichier ou la meta description est definie (probablement index.html ou un composant Head/SEO)
- Remplace l'ancienne meta description par la nouvelle
- Verifie que la meta OG description est aussi mise a jour

---

## CORRECTION 2 - Liens internes brises (404)

### Probleme
15 liens internes sur la homepage pointent vers des pages qui n'existent pas encore.

### Liste des liens brises
```
/services/audit-seo
/services/accompagnement-seo
/services/creation-site-web
/a-propos
/resultats
/faq
/blog
/contact
/rapport
/mentions-legales
/cgv
/politique-de-confidentialite
/blog/site-invisible-google-pme-suisse
/blog/mise-a-jour-google-mars-2026-pme-suisse
/blog/creer-site-internet-pme-suisse-2026
```

### Instructions Claude Code
DEUX OPTIONS (a choisir) :

**Option A (recommandee) - Creer les routes avec du contenu minimal :**
Pour chaque lien brise, creer une page React avec :
- Un composant de page fonctionnel
- Le title tag et la meta description corrects (voir les specs 2, 3, 4 pour le contenu complet)
- Un H1 pertinent
- Un texte placeholder indiquant "Page en construction" si le contenu n'est pas encore pret
- Un lien retour vers la homepage

**Option B - Transformer en ancres internes :**
Remplacer les liens /services/audit-seo par /#audit-seo (ancres vers les sections de la homepage)
Cette option est temporaire et moins bonne pour le SEO long terme.

### Priorite des pages a creer EN PREMIER (Option A)
1. /services/audit-seo - page service principale
2. /services/creation-site-web - page service principale
3. /services/accompagnement-seo - page service principale
4. /contact - page essentielle
5. /a-propos - page confiance
6. /blog - page listing
7. /mentions-legales - obligation legale Suisse
8. /politique-de-confidentialite - obligation legale
9. /cgv - obligation legale

---

## CORRECTION 3 - Ajouter des images indexables

### Probleme
Le site a 0 balises <img>. Tout est en SVG inline. Google Images ne peut pas indexer le contenu visuel.

### Instructions Claude Code
- Ajouter au minimum 3-5 images <img> optimisees sur la homepage :
  - Photo de profil / avatar du consultant (section a-propos ou hero)
  - Capture d'ecran d'un rapport d'audit (section audit, anonymisee)
  - Illustration de la methode de travail
  - Logo KUMO en format PNG/WebP en plus du SVG

- Pour chaque image :
  - Format : WebP avec fallback JPG
  - Attribut alt descriptif et keyword-riche
  - Attribut width et height definis
  - Loading="lazy" sauf pour la premiere image above the fold

### Exemples d'alt tags
```html
<img src="/images/audit-seo-kumo-neuchatel.webp" alt="Rapport d'audit SEO KUMO avec score de sante et plan d'action 90 jours" width="800" height="500" loading="lazy" />
<img src="/images/consultant-seo-neuchatel.webp" alt="Thomas Puglisi, consultant SEO independant a Neuchatel" width="400" height="400" />
<img src="/images/creation-site-web-suisse.webp" alt="Site web sur-mesure cree par KUMO pour une PME de Suisse romande" width="800" height="500" loading="lazy" />
```

---

## CORRECTION 4 - Optimiser les H2 pour le SEO

### Probleme
Les H2 actuels sont orientes copywriting mais pas SEO. Ils ne contiennent aucun mot-cle recherche.

### H2 actuels vs. H2 optimises

| H2 actuel | H2 optimise | Raison |
|-----------|-------------|--------|
| Des forfaits clairs, des resultats mesurables. | Nos forfaits SEO : audit, creation web et accompagnement | Ajoute les keywords "forfaits SEO", "audit", "creation web" |
| Pas de magie. De la methode. | Notre methode SEO en 4 etapes | Ajoute "methode SEO" |
| Ce qui me distingue d'une agence classique. | Freelance SEO vs agence : pourquoi choisir KUMO | Ajoute "freelance SEO vs agence" - requete recherchee |
| Extrait anonymise d'un audit reel | Exemple de rapport d'audit SEO | Ajoute "rapport audit SEO" |
| Nos derniers articles | Blog SEO : conseils pour PME en Suisse romande | Ajoute "blog SEO", "PME", "Suisse romande" |
| Questions frequentes | FAQ : audit SEO, creation de site et referencement | Ajoute les keywords dans la FAQ |
| Parlons de votre site. | Contactez votre consultant SEO a Neuchatel | Ajoute "consultant SEO Neuchatel" |

### Instructions Claude Code
- Remplacer chaque H2 par sa version optimisee
- ATTENTION : ne pas casser le design ou les animations liees a ces elements
- Verifier que les ancres internes (/#services, /#methode) fonctionnent toujours apres modification

---

## CORRECTION 5 - Ajouter le schema LocalBusiness

### Probleme
Le schema ProfessionalService est present mais il manque des informations locales.

### Instructions Claude Code
Ajouter ou completer le schema JSON-LD avec ces informations :

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "KUMO SEO",
  "url": "https://kumo-seo.ch",
  "telephone": "",
  "email": "contact@kumo-seo.ch",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Val-de-Travers",
    "addressRegion": "Neuchatel",
    "addressCountry": "CH"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "46.9333",
    "longitude": "6.5833"
  },
  "areaServed": [
    {
      "@type": "State",
      "name": "Neuchatel"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Suisse romande"
    }
  ],
  "priceRange": "CHF 250 - CHF 6500",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "09:00",
    "closes": "18:00"
  },
  "sameAs": [],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services SEO KUMO",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Audit SEO",
          "description": "Analyse complete en 31 points avec rapport interactif et plan d'action 90 jours",
          "offers": {
            "@type": "Offer",
            "price": "1200",
            "priceCurrency": "CHF"
          }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Creation de site web sur-mesure",
          "description": "Site web optimise SEO code sur-mesure pour PME",
          "offers": {
            "@type": "Offer",
            "priceSpecification": {
              "@type": "PriceSpecification",
              "minPrice": "3900",
              "maxPrice": "6500",
              "priceCurrency": "CHF"
            }
          }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Accompagnement SEO mensuel",
          "description": "Suivi mensuel avec rapports, optimisations et support prioritaire",
          "offers": {
            "@type": "Offer",
            "price": "490",
            "priceCurrency": "CHF",
            "billingDuration": "P1M"
          }
        }
      }
    ]
  }
}
```

### Note
- Verifier que les coordonnees geo sont correctes pour Val-de-Travers
- Ajouter le telephone si disponible
- Ajouter les liens reseaux sociaux dans sameAs quand ils existent

---

## CORRECTION 6 - Ajouter le sitemap.xml dynamique

### Probleme
Verifier si un sitemap.xml existe et est accessible. Le repo mentionne 12 URLs dans le sitemap mais si les pages sont en 404, le sitemap declare des URLs inexistantes.

### Instructions Claude Code
- Verifier que le fichier sitemap.xml existe dans le dossier public/
- S'assurer que le sitemap ne contient QUE les URLs qui fonctionnent (pas les 404)
- Mettre a jour le sitemap au fur et a mesure que les nouvelles pages sont creees
- Format correct :

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://kumo-seo.ch/</loc>
    <lastmod>2026-04-11</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <!-- Ajouter chaque nouvelle page au fur et a mesure -->
</urlset>
```

---

## CORRECTION 7 - Verifier le robots.txt

### Instructions Claude Code
- Verifier que le fichier robots.txt existe dans public/
- S'assurer qu'il ne bloque PAS les pages importantes
- Contenu recommande :

```
User-agent: *
Allow: /
Disallow: /rapport
Sitemap: https://kumo-seo.ch/sitemap.xml
```

---

## Resume des priorites

| # | Correction | Impact SEO | Effort |
|---|-----------|------------|--------|
| 1 | Meta description | Moyen | 5 min |
| 2 | Liens internes 404 | CRITIQUE | 2-4h |
| 3 | Images indexables | Moyen | 1h |
| 4 | H2 optimises | Moyen | 30 min |
| 5 | Schema LocalBusiness | Moyen | 30 min |
| 6 | Sitemap.xml | Important | 15 min |
| 7 | Robots.txt | Important | 5 min |

## Regles pour Claude Code
- Ne JAMAIS inventer de contenu textuel non fourni dans cette spec
- Ne JAMAIS utiliser le caractere em dash (le long tiret). Utiliser - a la place
- Tester chaque modification localement avant de commit
- Un commit par correction (pas un commit massif)
- Messages de commit en francais, format : "fix(seo): description courte"
