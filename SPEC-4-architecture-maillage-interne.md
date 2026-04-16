# SPEC 4 - Architecture du Site & Maillage Interne

## Contexte
Le site KUMO est actuellement un one-page. Pour dominer en SEO, il doit devenir un site multi-pages avec une architecture en silo et un maillage interne strategique. Cette spec definit l'architecture cible complete du site.

## Architecture cible du site

### Arborescence complete

```
kumo-seo.ch/
|
|-- / (homepage)
|
|-- /services/
|   |-- /services/audit-seo
|   |-- /services/creation-site-web
|   |-- /services/accompagnement-seo
|
|-- /consultant-seo-neuchatel
|-- /consultant-seo-lausanne
|-- /consultant-seo-geneve
|-- /consultant-seo-la-chaux-de-fonds
|-- /consultant-seo-bienne
|-- /consultant-seo-yverdon
|-- /consultant-seo-fribourg
|-- /consultant-seo-suisse-romande
|
|-- /creation-site-web-neuchatel
|-- /audit-seo-suisse-romande
|-- /referencement-local-suisse
|
|-- /blog/
|   |-- /blog/site-invisible-google-pme-suisse
|   |-- /blog/mise-a-jour-google-mars-2026-pme-suisse
|   |-- /blog/creer-site-internet-pme-suisse-2026
|   |-- /blog/freelance-seo-vs-agence-suisse
|   |-- /blog/audit-seo-pourquoi-indispensable
|   |-- /blog/referencement-local-suisse-guide
|   |-- /blog/combien-coute-site-internet-suisse
|   |-- /blog/seo-vs-sea-difference
|   |-- /blog/erreurs-seo-pme-suisse
|   |-- /blog/google-business-profile-optimisation
|
|-- /a-propos
|-- /contact
|-- /faq
|-- /resultats
|
|-- /mentions-legales
|-- /cgv
|-- /politique-de-confidentialite
```

### Total : ~30 pages (vs 1 aujourd'hui)

---

## Structure en silos thematiques

### Silo 1 : Services
**Page pilier** : / (homepage avec section services)
**Pages enfants** :
- /services/audit-seo
- /services/creation-site-web
- /services/accompagnement-seo

**Maillage interne du silo** :
- La homepage lie vers chaque page service
- Chaque page service lie vers les 2 autres pages service
- Chaque page service lie vers la homepage
- Chaque page service lie vers 1-2 articles de blog pertinents

### Silo 2 : Pages locales
**Page pilier** : /consultant-seo-suisse-romande
**Pages enfants** :
- /consultant-seo-neuchatel
- /consultant-seo-lausanne
- /consultant-seo-geneve
- /consultant-seo-la-chaux-de-fonds
- /consultant-seo-bienne
- /consultant-seo-yverdon
- /consultant-seo-fribourg

**Pages service + geo** (sous-silo) :
- /creation-site-web-neuchatel
- /audit-seo-suisse-romande
- /referencement-local-suisse

**Maillage interne du silo** :
- La page pilier /consultant-seo-suisse-romande lie vers CHAQUE page ville
- Chaque page ville lie vers la page pilier
- Chaque page ville lie vers 2-3 pages villes voisines geographiquement
- Chaque page ville lie vers les 3 pages services
- Les pages service+geo lient vers la page ville correspondante et la page service correspondante

### Silo 3 : Blog
**Page pilier** : /blog
**Pages enfants** : tous les articles

**Maillage interne du silo** :
- La page /blog lie vers tous les articles (listing)
- Chaque article lie vers 2-3 autres articles
- Chaque article lie vers 1-2 pages services pertinentes
- Chaque article lie vers 1 page locale pertinente

---

## Matrice de maillage interne detaillee

### Depuis la HOMEPAGE (/)
Liens sortants obligatoires :
```
-> /services/audit-seo
-> /services/creation-site-web
-> /services/accompagnement-seo
-> /consultant-seo-neuchatel (ou /consultant-seo-suisse-romande)
-> /blog (section derniers articles)
-> /a-propos
-> /contact
-> /faq
```

### Depuis chaque PAGE SERVICE (/services/*)
```
-> / (homepage)
-> les 2 autres pages services
-> /consultant-seo-suisse-romande
-> 2 articles de blog lies au service
-> /contact
```

Liens entrants requis de :
```
<- / (homepage)
<- toutes les pages locales
<- articles de blog pertinents
```

### Depuis chaque PAGE LOCALE (/consultant-seo-*)
```
-> / (homepage)
-> /consultant-seo-suisse-romande (page pilier)
-> 2-3 pages villes voisines
-> /services/audit-seo
-> /services/creation-site-web
-> /services/accompagnement-seo
-> /contact
-> 1 article de blog pertinent
```

### Depuis chaque ARTICLE DE BLOG (/blog/*)
```
-> / (homepage) via breadcrumb
-> /blog (page listing) via breadcrumb
-> 2-3 autres articles
-> 1-2 pages services
-> 1 page locale (si pertinent)
-> /contact (CTA en fin d'article)
```

### Depuis la page A PROPOS (/a-propos)
```
-> / (homepage)
-> /services/audit-seo
-> /consultant-seo-neuchatel
-> /contact
-> /blog
```

### Depuis la page CONTACT (/contact)
```
-> / (homepage)
-> /services/audit-seo (CTA secondaire)
```

---

## Navigation du site

### Header (navigation principale)
```
Logo KUMO (lien vers /)
Services (dropdown) :
  - Audit SEO
  - Creation de site web
  - Accompagnement SEO
Blog
A propos
Contact
```

### Footer
```
Colonne 1 : KUMO SEO
  - Logo
  - Email : contact@kumo-seo.ch
  - Val-de-Travers, Neuchatel

Colonne 2 : Services
  - Audit SEO (/services/audit-seo)
  - Creation de site web (/services/creation-site-web)
  - Accompagnement SEO (/services/accompagnement-seo)

Colonne 3 : Zones couvertes
  - Neuchatel (/consultant-seo-neuchatel)
  - Lausanne (/consultant-seo-lausanne)
  - Geneve (/consultant-seo-geneve)
  - Suisse romande (/consultant-seo-suisse-romande)

Colonne 4 : Ressources
  - Blog (/blog)
  - FAQ (/faq)
  - Resultats (/resultats)

Ligne du bas :
  - Mentions legales (/mentions-legales)
  - CGV (/cgv)
  - Politique de confidentialite (/politique-de-confidentialite)
  - "KUMO SEO - Consultant SEO a Neuchatel, Suisse romande"
```

---

## Breadcrumbs

Chaque page doit avoir un fil d'Ariane avec schema BreadcrumbList.

### Exemples
```
Accueil > Services > Audit SEO
Accueil > Consultant SEO > Neuchatel
Accueil > Blog > Votre site est invisible sur Google
Accueil > A propos
```

### Schema BreadcrumbList
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Accueil",
      "item": "https://kumo-seo.ch/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://kumo-seo.ch/services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Audit SEO",
      "item": "https://kumo-seo.ch/services/audit-seo"
    }
  ]
}
```

---

## Pages service detaillees

### /services/audit-seo

**Title** : `Audit SEO complet - 31 points de controle | KUMO Neuchatel`
**Meta** : `Audit SEO technique a Neuchatel. 31 points de controle, rapport interactif, plan d'action 90 jours. CHF 1'200 forfait fixe. Pour PME de Suisse romande.`
**H1** : `Audit SEO : 31 points de controle pour votre site`

**Contenu obligatoire** :
- Description detaillee de l'audit
- Les 31 points (lister les categories : technique, contenu, concurrence, autorite)
- Ce que le client recoit (rapport, plan 90j, appel)
- Prix : CHF 1'200
- FAQ specifique a l'audit
- CTA vers /contact
- Schema Service

### /services/creation-site-web

**Title** : `Creation de site web sur-mesure - des CHF 3'900 | KUMO`
**Meta** : `Site web sur-mesure code en React pour PME suisses. Optimise SEO, rapide, securise, heberge en Suisse. 3 formules des CHF 3'900.`
**H1** : `Creation de site web sur-mesure pour PME suisses`

**Contenu obligatoire** :
- Pourquoi sur-mesure (vs WordPress/Wix)
- Les 3 formules (Essentiel, Pro, Premium) avec details
- Stack technique (React, TypeScript, Tailwind)
- Processus de creation
- Delais (3-5 semaines)
- FAQ specifique
- CTA

### /services/accompagnement-seo

**Title** : `Accompagnement SEO mensuel - des CHF 250/mois | KUMO`
**Meta** : `Suivi SEO mensuel pour PME suisses. 3 formules : Maintenance (250/mois), Suivi Visibilite (590/mois), Croissance (1'490/mois). Consultant SEO a Neuchatel.`
**H1** : `Accompagnement SEO mensuel : gardez votre avance sur Google`

**Contenu obligatoire** :
- Pourquoi le suivi est essentiel
- Les 3 formules (Maintenance, Suivi, Croissance) avec details
- Ce qui est inclus dans chaque formule
- FAQ specifique
- CTA

---

## Pages institutionnelles

### /a-propos
**Title** : `A propos de KUMO - Consultant SEO a Neuchatel | Thomas Puglisi`
**Meta** : `Decouvrez KUMO SEO et Thomas Puglisi, consultant SEO independant base a Neuchatel. Parcours, valeurs et approche.`
**H1** : `Thomas Puglisi - Consultant SEO independant a Neuchatel`

**Contenu** :
- Parcours professionnel (CFC informatique, background technique)
- Pourquoi KUMO existe
- Valeurs : transparence, resultats mesurables, forfait fixe
- Photo (si disponible)
- Schema Person

### /contact
**Title** : `Contact - KUMO SEO Neuchatel`
**Meta** : `Contactez KUMO pour discuter de votre projet SEO. Premier echange gratuit et sans engagement. Email : contact@kumo-seo.ch`
**H1** : `Parlons de votre projet`

**Contenu** :
- Formulaire de contact (nom, email, message, type de projet)
- Email : contact@kumo-seo.ch
- Adresse : Val-de-Travers, Neuchatel
- Horaires
- Mention "Premier echange gratuit et sans engagement"

### /faq
**Title** : `FAQ - Questions frequentes sur le SEO et nos services | KUMO`
**Meta** : `Reponses a vos questions sur le SEO, nos tarifs, nos delais et notre methode. Consultant SEO a Neuchatel pour PME suisses.`
**H1** : `Questions frequentes`

**Contenu** : reprendre les FAQ de la homepage + ajouter des questions supplementaires
**Schema** : FAQPage

### /mentions-legales, /cgv, /politique-de-confidentialite
- Pages obligatoires en Suisse
- Contenu juridique standard adapte au droit suisse (LPD)
- NE PAS INVENTER de texte juridique - utiliser des templates standards suisses

---

## Regles pour Claude Code

- Creer le routeur React avec TOUTES les routes listees ci-dessus
- Implementer les breadcrumbs sur chaque page avec le schema BreadcrumbList
- Implementer la navigation header et footer exactement comme decrit
- Chaque nouvelle page doit etre ajoutee au sitemap.xml
- Ne JAMAIS inventer de contenu non prevu dans cette spec
- Ne JAMAIS utiliser le caractere em dash. Utiliser - a la place
- Un commit par section d'architecture implementee
- Messages de commit : "feat(arch): description courte"
