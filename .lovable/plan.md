

## Plan : Mise à jour des prix et prestations selon la grille tarifaire KIDAME

### Contexte

Le document PDF contient la grille tarifaire complète avec :
- **Grille A (Standard)** : Landing page CHF 1'200 → E-commerce complet CHF 7'500
- **Grille B (SEO+)** : Landing page CHF 1'800 → E-commerce complet CHF 9'800
- **Maintenance** : 3 forfaits (Essentiel 180, Standard 250, Avancé 390 CHF/mois)
- **Tarifs complémentaires** : pages supplémentaires, modifications, hébergement
- **Conditions** : acompte 40%, 2 séries de retours, garantie 30 jours

### Modifications prévues

#### 1. Refonte de `ServicesSection.tsx`
Passer de 3 cartes simples à une section plus complète avec les **6 forfaits Standard** et une mention de l'option SEO+. Structure :
- **3 cartes principales** (les plus demandées) : Landing page (CHF 1'200), Site vitrine pro (CHF 3'900), E-commerce simple (CHF 4'900)
- Sous chaque carte : prix SEO+ en option (+600, +1'500, +1'800)
- Mention "Dès CHF 1'200" pour la landing page, inclusions listées
- Ajout d'une ligne "Tous les forfaits incluent" reprenant les inclusions Standard du PDF

#### 2. Ajout section Maintenance & Hébergement
Nouvelle sous-section ou composant avec les 3 forfaits maintenance (Essentiel/Standard/Avancé) et les tarifs hébergement Infomaniak.

#### 3. Mise à jour `FAQSection.tsx`
- Corriger la FAQ sur les prix : mentionner la gamme complète (CHF 1'200 à 9'800)
- Ajouter FAQ sur l'acompte 40%, les révisions incluses, la maintenance
- Ajouter FAQ sur la différence Standard vs SEO+

#### 4. Mise à jour `DifferentiatorSection.tsx`
- Ajuster "Forfait fixe" pour mentionner "Acompte 40%, solde à la livraison"
- Mentionner "2 séries de retours incluses"

### Fichiers modifiés
- `src/components/ServicesSection.tsx` — refonte complète avec grille tarifaire réelle
- `src/components/FAQSection.tsx` — nouvelles FAQ alignées sur les prix et conditions
- `src/components/DifferentiatorSection.tsx` — ajustements mineurs

### Notes techniques
- Conserver le design existant (cartes sombres, gold pour les prix, JetBrains Mono pour les montants)
- Ne pas afficher les informations internes (marges hébergement, taux horaires, argumentaires commerciaux)
- Garder l'architecture 3 colonnes pour les forfaits principaux, avec possibilité d'expandre vers les 6 forfaits

