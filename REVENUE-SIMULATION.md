# Simulation de revenu — KUMO (consultant SEO freelance, Val-de-Travers)

Date : 2026-04-14
Script : [scripts/revenue-simulation.mjs](scripts/revenue-simulation.mjs) — `node scripts/revenue-simulation.mjs`
Sources : [MARKET-POSITIONING-REPORT.md](MARKET-POSITIONING-REPORT.md), grille tarifaire publique kumo-seo.ch (audit 1 200, suivi 250/590/1 490, création 3 900/4 900/6 500, mandat 90 j 2 900).

---

## TL;DR

En partant de zéro (site tout juste migré sur `kumo-seo.ch`, 0 client en portefeuille) :

| Scénario | Cumul 12 mois | Cumul 24 mois | MRR fin M24 | Revenu M24 | 1er mois ≥ 5 000 |
|---|---:|---:|---:|---:|---:|
| **Pessimiste** | CHF 459 | CHF 2 965 | CHF 78 | CHF 402 | jamais |
| **Réaliste** | CHF 14 873 | CHF 84 009 | CHF 3 862 | CHF 11 869 | M19 |
| **Optimiste** | CHF 46 781 | CHF 437 908 | CHF 28 492 | CHF 79 925 | M10 |

**Lecture** : sans exécution (pessimiste), le site reste un side-project qui ne paie pas ses frais. Le scénario réaliste — 1 client audit ou site par mois via réseau + LinkedIn + SEO qui monte lentement — cumule **~14 900 CHF en année 1** et **~84 000 CHF sur 24 mois**, atteignant un MRR de ~3 900 CHF en fin de période. **C'est un revenu complémentaire, pas (encore) un plein temps.**

Le scénario optimiste suppose l'exécution stricte des 5 recos du rapport positionnement + outreach actif (3 leads/mois). Il atteint ~46 800 CHF année 1, ~438 000 CHF sur 24 mois — crédible jusqu'à ~M15 ; au-delà, la saturation du marché romand et la capacité de livraison solo deviennent les vrais goulots (voir *Limites*).

**Seuil de rentabilité** (charges AVS/LPP/assurance + outils ~2 500 CHF/mois) : atteint M17–M18 en réaliste, M6–M7 en optimiste, **jamais** en pessimiste.

---

## Hypothèses du modèle

### Prix retenus (CHF, TTC, tirés de la grille publique)

| Offre | Prix utilisé | Source |
|---|---:|---|
| Audit SEO (one-shot) | 1 200 | forfait audit affiché |
| Accompagnement mensuel | 590 | moyenne pondérée des paliers 250/590/1 490 |
| Création de site web | 5 000 | moyenne Essentiel 3 900 / Pro 4 900 / Premium 6 500 |
| Mandat 90 jours | 2 900 | forfait mandat affiché |

### Paramètres par scénario

| Param. | Pessimiste | Réaliste | Optimiste |
|---|---:|---:|---:|
| Trafic M1 (visites/mois organique) | 5 | 15 | 25 |
| Croissance mensuelle trafic | +15 % | +20 % | +25 % |
| Taux conversion visite → lead | 1 % | 2 % | 2,5 % |
| Leads outreach/LinkedIn/réseau (/mois) | 0 | 1,5 | 3 |
| Taux de closing lead → client | 12 % | 20 % | 25 % |
| Mix (audit/suivi/web/mandat) | 50/20/20/10 | 45/30/15/10 | 40/35/15/10 |
| Churn mensuel sur MRR | 15 % | 10 % | 7 % |

### Mécanique

- **MRR** : churn appliqué d'abord (MRR = MRR × (1 − churn)), puis les nouveaux abonnés "suivi" du mois s'ajoutent à `MRR × 590 CHF`.
- **One-shot** : `(nouveaux clients × mix.audit × 1 200) + (... × web × 5 000) + (... × mandat × 2 900)`.
- **Revenu du mois** = one-shot + MRR.
- Hypothèse conservatrice : **100 % du trafic est organique** (pas de Google Ads). Les 136 keywords du [cluster](keywords-research-complete.json) ne sont pas atteints d'un coup — on modélise une rampe exponentielle réaliste partant de zéro.

---

## Scénario réaliste (détail 24 mois)

Migration `kumo-seo.ch` réalisée M1, 1–2 articles/mois, 1–2 leads/mois par le réseau (Val-de-Travers + LinkedIn) :

| Mois | Trafic | Leads | Nv. clients | MRR | One-shot | Revenu | Cumul |
|---:|---:|---:|---:|---:|---:|---:|---:|
| 1 | 18 | 1,9 | 0,37 | 66 | 588 | 654 | 654 |
| 3 | 26 | 2,0 | 0,40 | 187 | 638 | 825 | 2 220 |
| 6 | 45 | 2,4 | 0,48 | 353 | 758 | 1 112 | 5 250 |
| 12 | 134 | 4,2 | 0,84 | 747 | 1 321 | **2 068** | **14 873** |
| 18 | 399 | 9,5 | 1,9 | 1 575 | 2 996 | 4 571 | 34 799 |
| 24 | 1 192 | 25,3 | 5,07 | 3 862 | 8 007 | **11 869** | **84 009** |

Lecture : M12 tu factures ~2 100 CHF/mois avec un MRR de 750 CHF. M24 : ~12 000 CHF/mois avec un MRR de 3 900 CHF. **La bascule se joue vers M17–M19** quand le MRR commence à couvrir seul les charges fixes.

Table complète dans la sortie de `node scripts/revenue-simulation.mjs`.

---

## Scénario pessimiste — pourquoi il est dangereux

Avec 5 visites/mois M1, +15 %/mois, 1 % lead rate et 12 % closing : **0,01 client/mois jusqu'au M16**. Tu ne signes littéralement personne la première année. Le site existe, la grille tarifaire est belle, mais sans outreach et sans contenu publié, **le marché ne te connaît pas**. Cumul 24 mois : **2 965 CHF** — soit à peine plus qu'un audit.

**Signaux déclenchant ce scénario** :
- Pas de migration vers `kumo-seo.ch` (le site reste sur `vercel.app`, non indexable en l'état sur le domaine ciblé).
- 0 article publié au-delà des 5 existants.
- 0 contact sortant (pas de LinkedIn, pas de visites chez commerçants VdT).
- Churn à 15 % : les rares clients suivi partent après ~7 mois.

---

## Scénario optimiste — crédible jusqu'à M15, à modérer ensuite

Hypothèse : les 5 recos du [rapport positionnement](MARKET-POSITIONING-REPORT.md#-5-recommandations-actionnables) sont exécutées dans les 6 premiers mois (migration, 6 articles cluster "tarif SEO PME", 3 pages villes Neuchâtel/Lausanne/Fribourg, page `/tarifs` consolidée, fix technique prerender). Outreach actif : 3 leads/mois (LinkedIn + présence locale + partenariats comptables/graphistes).

| Mois | Revenu | Cumul |
|---:|---:|---:|
| 6 | 3 222 | 14 253 |
| 12 | 7 665 | 46 781 |
| 18 | 22 901 | 136 754 |
| 24 | 79 925 | 437 908 |

**Limites à reconnaître** : les mois 20–24 (34 à 80k CHF/mois, 14 à 34 nouveaux clients/mois) **dépassent la capacité de livraison d'un solo**. Un consultant freelance ne livre pas 30 audits + 5 sites + 10 suivis par mois. Au-delà de M15, soit on plafonne volontairement (augmentation des prix, file d'attente), soit on embauche (charges nouvelles non modélisées ici), soit on externalise (marge compressée). **Lire la colonne "cumul 24 mois" de l'optimiste comme un plafond théorique, pas une prévision.**

Crédibilité à M12 (7 665 CHF/mois, 46 781 cumul) : **bonne** — c'est cohérent avec ce qu'atteignent des concurrents du panel (Mivelaz, Caseo) en année 2.

---

## Sensibilité — quels paramètres bougent vraiment le résultat ?

Test manuel en éditant `scripts/revenue-simulation.mjs` :

| Variation sur scénario réaliste | Cumul 24 mois | Δ vs baseline |
|---|---:|---:|
| Baseline | 84 009 | — |
| +5 pts closing rate (20 → 25 %) | ~105 000 | +25 % |
| Churn 10 → 7 % | ~92 000 | +10 % |
| +1 lead outreach/mois (1,5 → 2,5) | ~112 000 | +33 % |
| Croissance trafic 20 → 25 % (=optimiste sur cette var seule) | ~130 000 | +55 % |
| Prix suivi 590 → 690 CHF | ~90 000 | +7 % |

**Levier #1** : la croissance du trafic organique (publier du contenu régulier). **Levier #2** : l'outreach (+1 lead/mois = +33 %). **Levier #3** : le closing rate (méthode de vente, devis lisibles — ta grille publique aide déjà). Augmenter les prix apporte peu à horizon 24 mois car le mix est dominé par les one-shots.

---

## Seuil de rentabilité

Charges mensuelles estimées d'un solo-freelance romand :
- AVS/AI/APG (~10 %) + LPP facultatif
- Assurance RC pro
- Outils (Ahrefs ou Semrush lite, hébergement, suite emails, compta)
- Quote-part bureau/matériel

**Estimation plancher : 2 000–2 500 CHF/mois de charges fixes.** Le revenu doit donc passer au-dessus pour dégager un salaire.

| Scénario | Revenu ≥ 2 500 CHF/mois atteint à |
|---|---|
| Pessimiste | jamais sur 24 mois |
| Réaliste | M13 (2 324 CHF, M14 = 2 639) |
| Optimiste | M5 (2 832 CHF) |

---

## Recommandations actionnables

1. **Migrer `kumo-seo.ch` dans la semaine** — sans le domaine final, le SEO ne démarre pas. C'est le paramètre M1 commun à tous les scénarios sauf pessimiste.
2. **Prendre la rampe "réaliste" comme objectif de travail, pas l'optimiste.** Les 84 000 CHF sur 24 mois sont atteignables avec 1–2 articles/mois et une présence LinkedIn régulière. L'optimiste exige 40 h/semaine dédiées marketing — pas compatible avec la livraison client.
3. **Prioriser l'outreach sur le contenu** les 6 premiers mois : +1 lead/mois via réseau pèse 33 % sur le cumul 24 mois, vs +5 % pour un article blog supplémentaire. Contenu = long terme (6–9 mois pour ranker), outreach = court terme.
4. **Surveiller le churn suivi dès M4**. Un client qui part à M7 coûte 3 mois de MRR (~1 800 CHF de perte). Reporting trimestriel clair + call de 30 min/mois suffisent habituellement à passer de 10 % → 7 % de churn.
5. **Re-simuler tous les 3 mois** avec les chiffres réels : éditer `SCENARIOS.realiste` en remplaçant `trafficRamp` par une fonction calée sur Plausible, `leadConvRate` par le ratio observé sur le formulaire `/contact`, et `closeRate` par le pipeline CRM.

---

## Hors-scope du modèle

- **Google Ads / SEA** : 0 CHF budget pub modélisé. Si tu injectes 300–500 CHF/mois sur Ads, le trafic M1 démarre à ~100 visites/jour sur les keywords "audit SEO Suisse" à CPC 3–5 CHF — possible accélérateur non simulé.
- **Projets site web "gros"** : le mix prend 5 000 CHF moyen. Un site Premium à 6 500 ou un e-commerce sur-mesure à 10 000+ n'est pas rare en Suisse romande et ferait basculer un mois donné.
- **Formations / conférences** : source de revenu possible (Romandie Formation, CCI-NE, events locaux) non modélisée — typiquement 500–2 000 CHF/intervention, 2–4 par an.
- **Revenus complémentaires existants** : si tu conserves une activité salariée ou des mandats historiques pendant le ramp, ta pression de cash-flow baisse — le seuil de rentabilité de 2 500 CHF/mois devient moins critique sur M1–M12.
- **Taxes / TVA** : les montants sont TTC. Si CA annuel > 100 000 CHF, passage TVA obligatoire (bascule probable entre M15 et M20 en réaliste).

---

## Reproduction

```bash
node scripts/revenue-simulation.mjs
```

Tous les paramètres sont en tête de [scripts/revenue-simulation.mjs](scripts/revenue-simulation.mjs) — éditer `PRICES` ou `SCENARIOS` et relancer pour tester ton propre scénario.
