

## Plan : Refonte complète de la grille tarifaire selon la nouvelle structure KUMO 2026

### Changement de modèle

L'ancienne structure (Landing page / Site vitrine pro / E-commerce + grille Standard/SEO+) est remplacee par une architecture en 4 categories distinctes :

1. **Offres ponctuelles** : Audit SEO (1'200) + Etude et plan (1'190)
2. **Creation de site** : 3 forfaits (Essentiel 3'900 / Pro 4'900 / Premium 6'500) avec tableau comparatif
3. **Formules de suivi** : 3 abonnements (Maintenance 250 / Suivi Visibilite 590 / Croissance 1'490)
4. **Prestations complementaires** : pages supp, modifications, images, fonctionnalites, evolutions

### Fichiers a modifier

#### 1. `src/components/ServicesSection.tsx` — Refonte complete

Remplacer les 3 cartes (Landing/Vitrine pro/E-commerce) + grille 6 forfaits + maintenance par :

- **Section "Offres ponctuelles"** : 2 cartes (Audit SEO 1'200 CHF, Etude et plan 1'190 CHF) avec descriptions et "Pour qui"
- **Section "Creation de site"** : 3 colonnes (Essentiel/Pro/Premium) avec tableau comparatif (pages, textes rediges, fiche Google, annuaires, accompagnement 3 mois) — Pro marque comme recommande
- **Section "Formules de suivi"** : 3 colonnes (Maintenance/Suivi Visibilite/Croissance) avec prix, inclusions, conditions d'engagement — Suivi Visibilite marque comme recommande
- **Section "Prestations complementaires"** : grille expandable avec les 5 sous-categories (pages, modifications, images, fonctionnalites, evolutions)
- Supprimer l'ancienne grille Standard/SEO+ et les forfaits maintenance 180/250/390

#### 2. `src/pages/CreationSiteWeb.tsx` — Mise a jour grille

Remplacer la grille tarifaire actuelle (Landing 1'200 / Vitrine 2'800 / Vitrine etendu 4'500 / E-commerce 7'500) par :
- 3 forfaits : Essentiel (3'900), Pro (4'900), Premium (6'500)
- Tableau comparatif avec les memes features que la section homepage
- Mention "Etude et plan 1'190 CHF, creditee a 100% si forfait site signe"

#### 3. `src/pages/AccompagnementSeo.tsx` — Mise a jour forfaits

Remplacer les 2 retainers (Essentiel 490 / Avance 1'290) par les 3 formules de suivi :
- Maintenance 250 CHF/mois (sans engagement)
- Suivi Visibilite 590 CHF/mois (engagement 6 mois)
- Croissance 1'490 CHF/mois (engagement 6 mois)

#### 4. `src/pages/AuditSeo.tsx` — Ajouter le prix

Ajouter le prix `CHF 1'200.–` dans le hero + mention "appel de restitution 30 min inclus"

#### 5. `src/pages/FAQ.tsx` — Mise a jour des reponses prix

Mettre a jour les reponses qui mentionnent les anciens prix :
- FAQ "Combien coute un site web" → 3 forfaits 3'900 / 4'900 / 6'500
- FAQ "Standard vs SEO+" → remplacer par Essentiel/Pro/Premium
- FAQ "Forfait ou tarif horaire" → tarif horaire 150 CHF/h (min 30 min = 75 CHF)
- Ajouter FAQ sur l'Etude et plan et le credit 100%

### Donnees cles a integrer

```text
PONCTUELLES
  Audit SEO                    1'200 CHF
  Etude et plan                1'190 CHF (credit 100% si forfait)

CREATION SITE
                    Essentiel    Pro ⭐      Premium
  Prix              3'900        4'900       6'500
  Pages             4            5-8         jusqu'a 10
  Prep strategique  oui          oui         oui
  Textes rediges    non          oui         oui
  Fiche Google      non          oui         oui
  Annuaires CH      non          oui         oui
  Design sur-mesure oui          oui         oui
  Accomp. 3 mois   non          non         oui

SUIVI MENSUEL
  Maintenance       250/mois    sans engagement
  Suivi Visibilite  590/mois    engagement 6 mois  ⭐
  Croissance        1'490/mois  engagement 6 mois

SUPPLEMENTS
  Page simple       390    |  Page complexe     490
  Landing conv.     590    |  Modifs            150/h (min 75)
  Image             35     |  Pack 10           250
  Sourcing stock    75/img |  Retouche          150/h
  Formulaire av.    290    |  Reservation       190
  Paiement          390    |  Blog              490
  Avis Google       190    |  Multilingue       +60% prix site
  Refonte page      350    |  Schema            90/schema
```

### Design

- Conserver le style existant : cartes `bg-card`, prix `font-mono text-gold`, labels kanji, animations `whileInView`
- Le forfait recommande (Pro, Suivi Visibilite) recoit `ring-1 ring-primary/30` + badge kanji
- La section supplements utilise le toggle expandable existant

