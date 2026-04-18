# Brief dispatch — réécriture meta descriptions (6 pages)

**Projet :** kumo-seo.ch
**Contexte :** Google Search Console remonte des meta descriptions dupliquées entre 6 pages du site. Toutes partagent le même pattern verbatim "Consultant SEO indépendant… Audit… création… accompagnement…". Objectif : réécrire chacune avec un angle sémantiquement distinct tout en gardant une intention SEO claire par URL.

**Livrable attendu :** 6 meta descriptions réécrites, 1 par page, + `<title>` ajusté si pertinent (les titles actuels sont OK mais un alignement description/title est bienvenu).

---

## Contraintes techniques

| Champ | Règle |
|---|---|
| Longueur meta description | **140–158 caractères** (Google tronque à ~158 sur desktop, 120 sur mobile). Compter les espaces. |
| Langue | Français de Suisse romande (utiliser "CHF", pas "€" ; "PME" ; pas d'anglicismes inutiles) |
| Ton | Factuel, concret, sans superlatifs marketing ("le meilleur", "expert #1"). La marque KUMO positionne honnêteté + forfait fixe. |
| Ponctuation | Pas d'émojis. Pas d'em-dashes (—). Apostrophes typographiques acceptées. |
| Unicité sémantique | Aucune paire de descriptions ne doit partager plus de **25% de tokens significatifs** (Jaccard sur mots ≥ 4 lettres). |
| Mot-clé principal | Doit apparaître une fois par description, idéalement dans les 80 premiers caractères. |
| CTA | Optionnel. Si présent, court ("Diagnostic gratuit", "Devis forfait fixe"). |

## À éviter absolument

1. **Ne pas commencer par "Consultant SEO indépendant"** sur plus d'une page. C'est le préfixe qui crée le doublon actuel.
2. **Ne pas lister mécaniquement "audit + création + accompagnement"** sur chaque page. Cette triade revient 6 fois. Choisir 1 axe par page.
3. **Ne pas simplement changer le nom de ville** dans une formule template. Google détecte les near-duplicates même avec des variables qui changent.
4. **Ne pas dépasser 160 caractères** (troncature SERP = perte de clic).

## Recherche SEO demandée (per page)

Pour chaque URL, dispatch effectue :

1. **Analyse SERP** : requête principale + 2 variantes, relever les meta descriptions des 3 premiers résultats concurrents. Identifier ce qu'ils promettent et ce qui manque.
2. **Google Suggest + "People Also Ask"** sur la requête principale : repérer 1-2 intentions de recherche sous-jacentes (prix ? délai ? local ?).
3. **Choix d'un angle unique** par page (voir tableau ci-dessous).
4. **Rédaction** : 1 proposition principale + 1 variante.
5. **Comptage caractères** : valider 140-158 avant livraison.

---

## Pages à traiter

### 1. `/a-propos`

| | |
|---|---|
| **Fichier** | `src/pages/APropos.tsx` ligne 73 |
| **Title actuel** | `À propos \| KUMO - Freelance SEO en Suisse romande` |
| **H1** | "Un consultant, pas une agence." |
| **H2 premier** | "Ce qui guide mon travail." |
| **Intro page** | *"Chez KUMO, les forfaits sont annoncés à l'avance. Pas de facturation à l'heure qui dérive, pas de surprise en fin de mission."* |
| **Description actuelle** | "Consultant SEO indépendant à Neuchâtel. Audit technique, création de sites web et accompagnement SEO pour PME de Suisse romande." |
| **Problème** | 69% de similarité avec `/consultant-seo-suisse-romande`. La page parle de la PERSONNE et du positionnement, la description parle des services — désalignement. |
| **Angle à prendre** | Positionnement humain : qui est Thomas Puglisi, pourquoi freelance vs agence, méthode de travail, forfait fixe. La description doit distinguer la page "à propos" des pages services/locales. |
| **Requête cible suggérée** | "freelance SEO Suisse romande", "consultant SEO indépendant Neuchâtel" |

### 2. `/consultant-seo-suisse-romande`

| | |
|---|---|
| **Fichier** | `src/pages/ConsultantSeoSuisseRomande.tsx` ligne 124 |
| **Title actuel** | `Consultant SEO en Suisse romande \| KUMO - Neuchâtel` |
| **H1** | "Consultant SEO en Suisse romande." |
| **Intro page** | Couverture multi-cantonale, connaissance du tissu économique romand, tarifs CHF, interlocuteur unique, proximité géographique pour rdv. |
| **Description actuelle** | "Consultant SEO indépendant en Suisse romande. Audit technique, création de sites et accompagnement SEO pour PME. Basé à Neuchâtel, actif dans toute la Romandie." |
| **Problème** | Page hub régionale. La description doit signaler la couverture multi-cantonale (Neuchâtel + Vaud + Genève + Jura + Valais + Fribourg) sans reprendre la liste de services. |
| **Angle à prendre** | Couverture géographique romande, modèle 100% remote + déplacements ponctuels, CHF/TVA/LPD (signaux de localisation suisse). |
| **Requête cible suggérée** | "consultant SEO Suisse romande", "SEO PME romande" |

### 3. `/consultant-seo-neuchatel`

| | |
|---|---|
| **Fichier** | `src/pages/ConsultantSeoNeuchatel.tsx` ligne 105 |
| **Title actuel** | `Consultant SEO Neuchâtel - Audit & Création Web \| KUMO` |
| **H1** | "Consultant SEO à Neuchâtel : plus de visibilité pour votre entreprise." |
| **Intro page** | Base locale. Terrain connu. Rdv sur place possible. PME neuchâteloises. Pas de facturation à l'heure. |
| **Description actuelle** | "Consultant SEO indépendant à Neuchâtel. Audit SEO 31 points, création de site web sur-mesure, accompagnement mensuel. Forfait fixe pour PME neuchâteloises." |
| **Problème** | 39-48% de similarité avec les 4 autres pages "consultant-seo-*". |
| **Angle à prendre** | Présence physique à Neuchâtel (base), rdv sur place possible, connaissance du terrain cantonal (Val-de-Travers, Val-de-Ruz, Littoral). Mentionner la fiche Google Business locale. |
| **Requête cible suggérée** | "consultant SEO Neuchâtel", "référencement Neuchâtel" |

### 4. `/consultant-seo-geneve`

| | |
|---|---|
| **Fichier** | `src/pages/ConsultantSeoGeneve.tsx` ligne 126 |
| **Title actuel** | `Consultant SEO Genève - Audit & Référencement \| KUMO` |
| **H1** | "Consultant SEO à Genève : référencement naturel pour PME genevoises." |
| **Intro page** | SEO local + dimension transfrontalière Grand Genève + capture recherches depuis France voisine. Marché compétitif. |
| **Description actuelle** | "Consultant SEO indépendant pour entreprises genevoises. Audit technique, création de site, accompagnement mensuel. Sans engagement longue durée. Forfait fixe CHF." |
| **Angle à prendre** | Spécificité Grand Genève / transfrontalier / B2B international. Compétitivité du marché genevois → justifier un SEO stratégique vs. générique. |
| **Requête cible suggérée** | "consultant SEO Genève", "référencement Genève PME" |

### 5. `/consultant-seo-lausanne`

| | |
|---|---|
| **Fichier** | `src/pages/ConsultantSeoLausanne.tsx` ligne 122 |
| **Title actuel** | `Consultant SEO Lausanne - Audit & Référencement \| KUMO` |
| **H1** | "Consultant SEO à Lausanne : boostez la visibilité de votre entreprise." |
| **Intro page** | 4e ville de Suisse, canton Vaud, forte concurrence, alternative aux agences lausannoises opaques. Innovation Park / EPFL / centre-ville / Pully. |
| **Description actuelle** | "Consultant SEO pour entreprises lausannoises. Audit SEO complet, création web sur-mesure, suivi mensuel. Intervention à distance ou sur place. Forfait fixe." |
| **Angle à prendre** | Freelance comme alternative aux agences lausannoises (transparence vs forfaits opaques), canton Vaud, secteurs tech/PME du bassin lausannois. |
| **Requête cible suggérée** | "consultant SEO Lausanne", "freelance SEO Vaud" |

### 6. `/consultant-seo-la-chaux-de-fonds`

| | |
|---|---|
| **Fichier** | `src/pages/ConsultantSeoLaChaux.tsx` ligne 100 |
| **Title actuel** | `Consultant SEO La Chaux-de-Fonds - Référencement PME \| KUMO` |
| **H1** | "Consultant SEO à La Chaux-de-Fonds : visibilité Google pour les entreprises locales." |
| **Intro page** | Montagnes neuchâteloises, industrie horlogère et de précision, Le Locle, concurrence Google plus faible qu'en grande ville → meilleur ROI SEO. |
| **Description actuelle** | "Consultant SEO local pour PME de La Chaux-de-Fonds. Audit SEO, création web, suivi mensuel. Spécialiste de la région neuchâteloise. Forfait fixe." |
| **Angle à prendre** | Marché spécifique des Montagnes neuchâteloises (horlogerie / industrie de précision / sous-traitance technique), concurrence en ligne plus faible → résultats SEO rapides. Inclure Le Locle dans la zone. |
| **Requête cible suggérée** | "consultant SEO La Chaux-de-Fonds", "SEO horlogerie" |

---

## Ordre suggéré de réécriture

1. `/a-propos` d'abord → angle humain, ancre les autres
2. `/consultant-seo-suisse-romande` → angle hub régional
3. Les 4 pages locales (Neuchâtel → Lausanne → Genève → La Chaux-de-Fonds) → chacune avec un angle de marché local spécifique

Cette séquence évite que dispatch "réemprunte" involontairement une tournure déjà utilisée sur une page précédente.

## Validation avant livraison

Script Python à exécuter sur les 6 descriptions proposées :

```python
import re
def tokens(s):
    return set(re.findall(r'[a-zéèàêîôûùœç]{4,}', s.lower()))
def jaccard(a, b):
    ta, tb = tokens(a), tokens(b)
    return len(ta & tb) / len(ta | tb) if (ta and tb) else 0

descs = {
    "a-propos": "...",
    "suisse-romande": "...",
    "neuchatel": "...",
    "geneve": "...",
    "lausanne": "...",
    "la-chaux-de-fonds": "...",
}

# 1. Longueur
for k, v in descs.items():
    assert 140 <= len(v) <= 158, f"{k}: {len(v)} chars (hors 140-158)"

# 2. Similarite pairwise
keys = list(descs.keys())
for i in range(len(keys)):
    for j in range(i+1, len(keys)):
        s = jaccard(descs[keys[i]], descs[keys[j]])
        assert s < 0.25, f"{keys[i]} vs {keys[j]}: {s*100:.0f}% > 25%"

print("OK: 6 descriptions uniques, longueur valide.")
```

Si l'assertion passe → prêt à intégrer dans les 6 fichiers `src/pages/*.tsx`.

## Format de livraison attendu

Un tableau par page avec :

```
URL                  : /consultant-seo-lausanne
Title (si modifié)   : ...
Description proposée : ... (xxx caractères)
Variante secondaire  : ... (yyy caractères)
Angle / mot-clé cible: ...
Sources SERP / notes : 2-3 lignes de contexte recherche
```

## Références utiles

- Guide Google meta description : https://developers.google.com/search/docs/appearance/snippet
- Page FAQ avec les 12 Q/R canoniques (pour connaître le positionnement prix/offre) : `src/pages/FAQ.tsx`
- CLAUDE.md du repo (règles ton, langue, a11y, pas d'em-dashes, etc.) : racine du projet
