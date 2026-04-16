# SPEC 2 - Pages Locales Geo-Ciblees

## Contexte
KUMO SEO est base a Val-de-Travers (canton de Neuchatel) et cible les PME de Suisse romande.
Aucun concurrent ne domine les requetes "consultant SEO + ville" sur toutes les villes romandes.
C'est une opportunite massive : creer des pages locales pour chaque ville AVANT les concurrents.

## Donnees de recherche (source : DataForSEO, avril 2026)

### Keywords locaux identifies avec volume
| Keyword | Volume/mois (CH) | CPC CHF | Competition |
|---------|-----------------|---------|-------------|
| referencement local | 40 | 23.83 | MEDIUM |
| consultant SEO | 260 | - | - |
| creation site internet | 90+ | 9.67 | HIGH |
| agence SEO [ville] | 20-50 | 15-30 | HIGH |
| freelance SEO [ville] | 10-20 | - | LOW |

### Strategie
Creer une page dediee pour chaque ville cible de Suisse romande.
Chaque page aura un contenu UNIQUE (pas du copier-coller avec la ville qui change).
L'objectif est de ranker sur "[service] + [ville]" et "[service] + [region]".

---

## Pages a creer

### PRIORITE 1 - Villes principales (creer en premier)

#### Page 1 : /consultant-seo-neuchatel

**Title tag** (max 60 car.) :
`Consultant SEO a Neuchatel - Audit & Creation Web | KUMO`

**Meta description** (max 155 car.) :
`Consultant SEO independant a Neuchatel. Audit SEO 31 points, creation de site web sur-mesure, accompagnement mensuel. Forfait fixe pour PME neuchateloises.`

**H1** : `Consultant SEO a Neuchatel : plus de visibilite pour votre entreprise`

**Structure de contenu** :
```
H1: Consultant SEO a Neuchatel : plus de visibilite pour votre entreprise
  
  Paragraphe intro (150-200 mots) :
  - Presentation de KUMO comme consultant SEO base dans le canton de Neuchatel
  - Mention de Val-de-Travers comme base, intervention sur tout le canton
  - Probleme client : les PME neuchateloises sont peu visibles sur Google face aux entreprises lausannoises/genevoises
  
H2: Pourquoi les PME de Neuchatel ont besoin d'un consultant SEO local
  - Paragraphe (200 mots) sur le contexte economique local
  - Le marche neuchatelois est plus petit, donc chaque position Google compte plus
  - Avantage d'un consultant local vs une agence a Lausanne ou Geneve
  
H2: Nos services SEO pour les entreprises neuchateloises
  H3: Audit SEO - CHF 1'200
    - Description courte + lien vers /services/audit-seo
  H3: Creation de site web sur-mesure - des CHF 3'900
    - Description courte + lien vers /services/creation-site-web
  H3: Accompagnement SEO mensuel - des CHF 250/mois
    - Description courte + lien vers /services/accompagnement-seo
    
H2: Secteurs d'activite a Neuchatel
  - Liste des secteurs cles du canton : horlogerie, microtechnique, artisans, commerces, restauration, sante
  - Pour chaque secteur, une phrase sur comment le SEO les aide
  
H2: Zones couvertes dans le canton de Neuchatel
  - Val-de-Travers, La Chaux-de-Fonds, Le Locle, Neuchatel ville, Boudry, Colombier, Peseux, Cortaillod
  
H2: Contactez votre consultant SEO a Neuchatel
  - CTA avec lien vers /contact
  - Email : contact@kumo-seo.ch
```

**Schema JSON-LD** :
```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "KUMO SEO - Consultant SEO Neuchatel",
  "url": "https://kumo-seo.ch/consultant-seo-neuchatel",
  "areaServed": {
    "@type": "State",
    "name": "Neuchatel",
    "containedInPlace": {
      "@type": "Country",
      "name": "Suisse"
    }
  },
  "provider": {
    "@type": "Person",
    "name": "Thomas Puglisi",
    "jobTitle": "Consultant SEO"
  }
}
```

**Maillage interne** :
- Lien vers la homepage (/)
- Lien vers /services/audit-seo
- Lien vers /services/creation-site-web
- Lien vers /services/accompagnement-seo
- Lien vers /contact
- Lien vers les articles blog pertinents

---

#### Page 2 : /consultant-seo-lausanne

**Title tag** :
`Consultant SEO a Lausanne - Audit & Referencement | KUMO`

**Meta description** :
`Consultant SEO pour entreprises lausannoises. Audit SEO complet, creation web sur-mesure, suivi mensuel. Intervention a distance ou sur place. Forfait fixe.`

**H1** : `Consultant SEO a Lausanne : boostez la visibilite de votre entreprise`

**Structure de contenu** :
```
H1: Consultant SEO a Lausanne : boostez la visibilite de votre entreprise

  Paragraphe intro (150-200 mots) :
  - Lausanne = marche competitif avec beaucoup d'agences SEO
  - KUMO offre une alternative : un consultant independant, forfait fixe, sans equipe intermediaire
  - Intervention a distance (visio, email) + possibilite de rendez-vous sur place
  
H2: Le marche SEO a Lausanne : pourquoi un freelance peut faire la difference
  - Beaucoup d'agences lausannoises facturent au temps, pas au resultat
  - Un freelance = un interlocuteur unique, reactivite, prix maitrise
  - Mention des concurrents sans les nommer : "Contrairement aux agences avec 5+ chefs de projet"
  
H2: Services SEO disponibles a Lausanne
  H3: Audit SEO complet - CHF 1'200
  H3: Creation de site web performant - des CHF 3'900
  H3: Suivi et accompagnement SEO - des CHF 250/mois

H2: Industries lausannoises que nous accompagnons
  - Tech/startups, hotellerie/tourisme, sante, formation, commerce de detail, services B2B
  
H2: Comment travailler avec KUMO depuis Lausanne
  - Fonctionnement a distance : visio, rapport mensuel, espace demandes
  - Possibilite de rendez-vous en personne
  
H2: Demandez un devis gratuit
  - CTA + email
```

---

#### Page 3 : /consultant-seo-geneve

**Title tag** :
`Consultant SEO a Geneve - Audit & Referencement naturel | KUMO`

**Meta description** :
`Consultant SEO independant pour entreprises genevoises. Audit technique, creation de site, accompagnement mensuel. Sans engagement longue duree. Forfait fixe CHF.`

**H1** : `Consultant SEO a Geneve : referencement naturel pour PME genevoises`

**Structure de contenu** :
```
H1: Consultant SEO a Geneve : referencement naturel pour PME genevoises

  Intro (150-200 mots) :
  - Geneve = marche le plus competitif de Suisse romande
  - Les PME genevoises font face a une concurrence internationale
  - KUMO : approche boutique, pas d'usine a sites
  
H2: SEO a Geneve : un marche ultra-competitif
  - Concurrence internationale (siege de multinationales)
  - Importance du SEO local pour les PME face aux grands groupes
  - Bilingue FR/EN : opportunite de cibler les deux langues

H2: Nos prestations SEO pour Geneve
  H3: Audit SEO - CHF 1'200
  H3: Creation de site internet - des CHF 3'900
  H3: Accompagnement SEO continu - des CHF 250/mois

H2: Secteurs cles a Geneve
  - Finance/banque, organisations internationales, hotellerie luxe, immobilier, sante, commerce

H2: Collaboration a distance depuis Neuchatel
  - Explication du fonctionnement remote
  - Outils utilises

H2: Prenez contact
  - CTA
```

---

#### Page 4 : /consultant-seo-la-chaux-de-fonds

**Title tag** :
`Consultant SEO a La Chaux-de-Fonds - Referencement PME | KUMO`

**Meta description** :
`Consultant SEO local pour PME de La Chaux-de-Fonds. Audit SEO, creation web, suivi mensuel. Specialiste de la region neuchateloise. Forfait fixe.`

**H1** : `Consultant SEO a La Chaux-de-Fonds : visibilite Google pour les entreprises locales`

**Structure** : meme structure que Neuchatel, adaptee au contexte local (horlogerie, patrimoine UNESCO, industrie).

---

### PRIORITE 2 - Villes secondaires (creer apres les 4 premieres)

#### Page 5 : /consultant-seo-bienne
- Title : `Consultant SEO a Bienne - Referencement bilingue | KUMO`
- Angle unique : marche bilingue FR/DE, opportunite de cibler deux langues

#### Page 6 : /consultant-seo-yverdon
- Title : `Consultant SEO a Yverdon-les-Bains - Referencement local | KUMO`
- Angle : proximite geographique depuis Val-de-Travers

#### Page 7 : /consultant-seo-fribourg
- Title : `Consultant SEO a Fribourg - Audit & Referencement | KUMO`
- Angle : marche bilingue, PME locales

#### Page 8 : /consultant-seo-suisse-romande
- Title : `Consultant SEO en Suisse romande - Referencement naturel | KUMO`
- Angle : page "hub" qui couvre toute la region et lie vers chaque page ville
- C'est la PAGE LA PLUS IMPORTANTE pour le SEO car elle cible la requete large

---

### PRIORITE 3 - Pages service + geo (creer apres les pages ville)

#### Page 9 : /creation-site-web-neuchatel
- Title : `Creation de site web a Neuchatel - Sites sur-mesure | KUMO`
- Cible : "creation site internet neuchatel" (vol 20-40)

#### Page 10 : /audit-seo-suisse-romande
- Title : `Audit SEO en Suisse romande - 31 points de controle | KUMO`
- Cible : "audit SEO" (vol 390)

#### Page 11 : /referencement-local-suisse
- Title : `Referencement local en Suisse - Etre visible sur Google Maps | KUMO`
- Cible : "referencement local" (vol 40, CPC 23.83 CHF)

---

## Regles de contenu pour CHAQUE page locale

1. **Contenu unique** : JAMAIS du copier-coller d'une ville a l'autre. Chaque page doit avoir au minimum 800 mots de contenu original.
2. **Ne pas inventer de faits** : ne pas inventer de statistiques locales, de noms d'entreprises clientes, ou de temoignages.
3. **Maillage interne** : chaque page locale doit lier vers :
   - La homepage
   - Les 3 pages services
   - 2-3 autres pages locales (les villes proches)
   - 1-2 articles de blog pertinents
4. **CTA** : chaque page doit terminer par un appel a l'action avec l'email contact@kumo-seo.ch
5. **Schema JSON-LD** : chaque page doit avoir un schema ProfessionalService avec areaServed adapte a la ville
6. **Breadcrumbs** : Accueil > Consultant SEO > [Ville]
7. **URL propre** : /consultant-seo-[ville] (pas de majuscule, pas d'accent, tirets)

## Regles pour Claude Code
- Ne JAMAIS inventer de contenu non fourni dans cette spec
- Ne JAMAIS utiliser le caractere em dash. Utiliser - a la place
- Creer les pages dans l'ordre de priorite indique
- Un commit par page creee
- Messages de commit : "feat(seo): ajouter page locale [ville]"
- Verifier que chaque nouvelle page est ajoutee au sitemap.xml et au routeur React
