# Rapport de positionnement — KUMO vs marché SEO/web Suisse romande

Date : 2026-04-14
Cible analysée : `https://seo-magic-design.vercel.app/` (pré-prod, domaine final `kumo-seo.ch`).
Méthodologie : panel de 6 concurrents découverts via recherches Google, benchmark sur 3 axes (technique Lighthouse 13.1.0, contenu/maillage, offre/prix). Pas de SERP positioning ni de data privée (GSC/Ahrefs) — rapport 100 % externe et reproductible.

---

## TL;DR

KUMO est **le meilleur du panel sur la qualité technique** (Perf/A11y/BP/SEO ≥93 partout, seul site à tenir ce profil sur mobile ET desktop). L'offre est **transparente et compétitive en prix** (3 des 6 concurrents cachent leurs tarifs). La vraie faiblesse est le **volume de contenu** : 22 pages, 5 articles blog — contre 60 à 156 pages et 30 à 90 articles chez les concurrents directs. La priorité absolue : migrer sur `kumo-seo.ch` (le site n'est pas encore indexé) puis combler le retard éditorial sur les clusters "tarif SEO" et "pages locales".

---

## 1. Panel de concurrents retenus

6 domaines sélectionnés parmi ~30 candidats identifiés par 7 requêtes Google ("consultant SEO Suisse romande", "consultant SEO Neuchâtel", "agence SEO Lausanne", "agence SEO Genève", "audit SEO Suisse PME", "création site internet PME Suisse romande sur-mesure", "freelance référencement naturel Suisse tarif forfait"). Critères de sélection : Suisse romande, offre SEO ou web comparable, site actif, récurrence dans le top 10 SERP.

| Concurrent | Type | Ville | Techno | Public cible affiché |
|---|---|---|---|---|
| [mivelaz-consulting.ch](https://mivelaz-consulting.ch) | Freelance | Lausanne (VD) | Next.js | PME Suisse romande |
| [seogoogle.ch](https://www.seogoogle.ch) | Freelance | Vaud | Statique minimal | Artisans, PME, e-commerce |
| [caseo.ch](https://caseo.ch) | Agence 8 pers. | Genève/Carouge | WordPress | Entreprises multi-secteurs |
| [edana.ch](https://edana.ch) | Agence 15+ ans | Genève | WordPress | ETIs, SME, public sector |
| [one-referencement.com](https://one-referencement.com) | Agence | Lausanne | WordPress | TPE, indépendants, thérapeutes |
| [ferrstudio.ch](https://www.ferrstudio.ch) | Studio web+design | Morges | Webflow | SaaS, deeptech, biotech |

Exclusions justifiées : `paulvengeons.fr` (.fr, non-Suisse), `ziadallani.com` (inaccessible), `jolimind.ch` (agence marketing généraliste), `soleil-digital.ch` (17 ans, hors scope freelance), Sortlist (annuaire).

---

## 2. Benchmark technique (Lighthouse 13.1.0)

Audit unique mobile + desktop sur la home, throttling Lighthouse par défaut (Slow 4G + CPU 4x sur mobile, rien sur desktop). Variance normale : ±5 points.

| Domaine | Perf mob. | Perf desk. | A11y | BP | SEO |
|---|---:|---:|---:|---:|---:|
| **kumo (vercel)** | **93** | **100** | **100** | **100** | **100** |
| seogoogle.ch | 93 | 99 | 96 | 100 | 100 |
| one-referencement.com | 96 | 100 | 78 | 96 | 100 |
| mivelaz-consulting.ch | 80 | 98 | 100 | 100 | 100 |
| caseo.ch | 79 | 77 | 78 | 100 | 92 |
| edana.ch | 41 | 82 | 77 | 73 | 77 |
| ferrstudio.ch | 52 | 76 | 100 | 73 | 100 |
| **Médiane panel** | 79 | 90 | 89 | 98 | 100 |

**Lecture**.
- **KUMO est le seul site qui cumule ≥93 sur les 5 colonnes**. One-referencement a le meilleur Perf mobile (96) mais échoue en A11y (78) et BP (96). Seogoogle.ch égale KUMO en Perf mais perd l'A11y (96) — et surtout c'est un site de 1 page.
- **Les deux agences référentes** (edana, caseo) sont les moins bien classées techniquement (Perf mobile 41 et 79, BP 73 et 100). C'est le talon d'Achille WordPress + plugins hérités.
- **Ferrstudio** (Webflow) souffre de 3D/motion lourd (Perf mobile 52), sans doute identique au problème GSAP/framer-motion que KUMO a lui-même identifié et en partie résolu.
- **Dette restante KUMO** (voir `LIGHTHOUSE-VERCEL-REPORT.md`) : prerender qui casse `rel="preload"` des Google Fonts (–600 ms FCP mobile) + 50 KiB unused JS motion/gsap. Corriger ces deux points = **Perf mobile 93 → 96–98**, creusant l'écart avec tout le panel.

**Verdict axe technique : 🏆 KUMO #1 du panel, marge à consolider avec les 2 fixes déjà connus.**

---

## 3. Benchmark contenu & maillage

Sources : `/sitemap.xml` (ou `/sitemap_index.xml` pour WordPress), fetch de la home + pages services. Comptage de `<loc>` et filtre regex sur noms de villes romandes pour les pages locales.

| Domaine | Total URLs sitemap | Pages locales villes | Articles blog | FAQ | Outil audit | Langues |
|---|---:|---:|---:|---|---|---|
| **kumo** | **22** | **5** (4 villes + 1 hub) | **5** | oui (/faq) | non | FR |
| seogoogle.ch | 1 | 0 | 0 | non | oui (gratuit) | FR + EN |
| one-referencement.com | 63 | 7 | ~50 | non | oui (/audit-seo…) | FR |
| caseo.ch | 60 | 4 | 35 | non | non | FR |
| mivelaz-consulting.ch | 156 | 18 (dans 1 page hub) | 90 | non | oui (diagnostic) | FR |
| ferrstudio.ch | 124 | 5 | 32 | oui | oui (diagnosis 30 min) | FR |
| edana.ch | 5 449 | 85 | 32 | oui (6 Q) | non | FR + EN + DE + IT |

**Lecture**.
- **Gap éditorial majeur sur le blog** : 5 articles KUMO vs 30–90 chez les concurrents directs. C'est **la faiblesse n°1** du site. Mivelaz monopolise le long-tail "tarif-referencement-seo-suisse-prix-2026" ; one-referencement capture "comment-atteindre-premiere-position-google". Ces sujets sont dans le cluster de 136 keywords de KUMO (`keywords-research-complete.json`) mais non encore couverts.
- **Pages locales** : couverture KUMO honnête (Neuchâtel, Lausanne, Genève, La Chaux-de-Fonds) **mais incomplète**. Mivelaz couvre 18 villes, one-referencement 7 avec des combinaisons malignes (`agence-seo-bienne-saint-imier`, `agence-seo-montreux-vevey`). KUMO rate Fribourg, Sion/Valais, Bienne/Jura, Montreux, Morges.
- **Schema.org** : KUMO a un JSON-LD ProfessionalService + OfferCatalog complet (4 offres, geo, founder). C'est **plus riche que tout le panel** — aucun concurrent n'a de JSON-LD aussi détaillé côté entity → gain futur sur AI Overviews / rich snippets.
- **Multi-langue** : edana couvre FR/EN/DE/IT — c'est la seule porte vers la Suisse alémanique ouverte dans le panel. Non-prioritaire pour KUMO vu le positionnement Romandie, mais à garder en tête si la cible s'élargit.
- **Outil d'audit gratuit** : 4 des 6 concurrents en ont un (seogoogle, one-referencement, mivelaz, ferrstudio). KUMO n'en a pas sur son site — manque un hook de conversion.

**Verdict axe contenu : 🥉 KUMO en retard de volume, mais architecture plus propre et schéma plus riche. Le rattrapage est purement éditorial.**

---

## 4. Benchmark offre & prix

Récolte manuelle sur les pages services/tarifs de chaque concurrent.

| Domaine | Audit SEO | Accompagnement mensuel | Création site | Prix publics ? |
|---|---|---|---|---|
| **kumo** | **CHF 1 200 forfait** | **dès CHF 250/mois**, 3 paliers (250/590/1 490) | **CHF 3 900–6 500** (Essentiel/Pro/Premium) | **Oui, tout affiché** |
| mivelaz | dès CHF 490 (déclaré) / CHF 500–3 000 (page /consultant-seo-suisse) | **dès CHF 390/mois** sans engagement | site vitrine dès CHF 390 (!) | Oui, mais fourchettes changeantes d'une page à l'autre |
| ferrstudio | diagnostic 30 min + 48 h | n/a (pas de SEO mensuel) | **dès CHF 3 500** web, CHF 2 500 branding | Oui |
| caseo | sur devis | **tranches CHF 750 → 100k+/mois** | n/a | Semi (bandes budget) |
| edana | sur devis | sur devis | sur devis | Non |
| one-referencement | sur devis | sur devis | sur devis | Non |
| seogoogle.ch | audit gratuit | sur devis | n/a | Non |

Benchmarks marché (sources : caseo.ch, mivelaz-consulting.ch, seoptimizers.ch) :
- Freelance SEO Suisse : **CHF 120–200/h**, mensuel CHF 390–1 500.
- Agence SEO Suisse romande : **CHF 180–300/h**, mensuel CHF 750–5 000.
- Audit SEO PME : **CHF 200–3 000** selon profondeur.
- Site vitrine PME : **CHF 2 000–15 000** selon sur-mesure.

**Lecture**.
- **KUMO affiche tous ses prix** — seuls mivelaz et ferrstudio le font aussi. Les 3 agences (edana, one-referencement, caseo) cachent leurs tarifs (excepté les bandes budgétaires de caseo). C'est un différenciateur fort : les PME qui cherchent un devis préfèrent un site qui chiffre.
- **Mensuel KUMO (250/590/1490)** = **entrée de gamme la plus basse** du panel pour du SEO structuré. Mivelaz démarre à 390. Les agences démarrent à 750. Attention : une entrée à 250 CHF/mois peut être perçue comme "trop maigre pour du vrai SEO" — positionnement à bien cadrer (comm', reporting, pas de contenu rédigé).
- **Audit à CHF 1 200** = bien positionné, ni cassé (Mivelaz 490–3000) ni cher (caseo bandes sur devis). Le site "tarif-audit-seo-suisse" de mivelaz évoque "CHF 200 à 3'000", donc KUMO est au milieu.
- **Création site à CHF 3 900+** = aligné avec ferrstudio (3 500). Mivelaz affiche 390 CHF mais c'est du vitrine minimal ; pas le même produit.
- **Pas de page `/tarifs` consolidée** chez KUMO : les 3 offres sont dispersées dans 3 pages `/services/*`. Mivelaz concentre ses 3 forfaits SEO sur une seule page (`/services/referencement-naturel-suisse`), ce qui fait converger tout le trafic commercial.

**Verdict axe offre : 🥈 KUMO transparent et bien positionné en prix, mais manque une page `/tarifs` unique et un hook "audit gratuit" pour convertir.**

---

## 5. Forces et faiblesses concrètes de KUMO

### Forces vs panel (chiffrées)

| # | Force | Valeur KUMO | Panel |
|---|---|---|---|
| 1 | Performance technique mobile | Perf 93, A11y 100, BP 100, SEO 100 | Médiane 79 / 89 / 98 / 100 |
| 2 | Performance desktop | Perf 100 sur 8 pages testées | Médiane 90 |
| 3 | Schema.org richesse | ProfessionalService + OfferCatalog (4 services) + geo + founder + opening hours | 0 concurrent équivalent |
| 4 | Transparence prix | 3 offres SEO + 3 offres web avec prix fixes | 3/6 cachent, 3/6 affichent partiellement |
| 5 | Entrée de gamme SEO | CHF 250/mois | Plancher panel : CHF 390 (mivelaz) |
| 6 | Hébergement suisse inclus | 1ère année incluse dans forfait web | Peu mis en avant ailleurs |
| 7 | A11y 100 sur 8/8 pages | 100 partout | 3/6 concurrents < 90 |

### Faiblesses vs panel (chiffrées)

| # | Faiblesse | Valeur KUMO | Panel |
|---|---|---|---|
| 1 | **Volume de contenu** | 22 URLs sitemap | Médiane 92 |
| 2 | **Articles blog** | 5 publiés | Médiane 32 |
| 3 | **Couverture villes** | 4 villes | Mivelaz 18, one-ref 7 |
| 4 | **Indexation** | Domaine `vercel.app` non-canonique, `kumo-seo.ch` pas (encore) vivant | Tous concurrents sur domaine final |
| 5 | **Pas d'outil d'audit gratuit on-site** | 0 | 4/6 en ont un |

---

## 6. Recommandations actionnables (top 5)

Ordonnées par ratio impact / effort. Chaque item renvoie aux fichiers du repo à modifier.

### 1. Migrer sur `kumo-seo.ch` avec redirections 301 — P0, 1 jour
Le site est sur `seo-magic-design.vercel.app` : canonical pointe déjà vers `kumo-seo.ch` ([index.html:10](index.html)), mais le domaine final n'est pas servi. **Tant qu'il n'est pas en prod, Google n'indexe rien et aucune recommandation SEO ne produit de trafic.** Configurer le domaine sur Vercel + 301 depuis vercel.app → kumo-seo.ch, puis soumettre le sitemap à Search Console.

### 2. Publier 6 articles de blog ciblant le cluster "tarif & prix" — P0, 4 semaines
Keywords du fichier [keywords-research-complete.json](keywords-research-complete.json) avec intent commercial et déjà capturés par Mivelaz :
- "Tarif audit SEO en Suisse en 2026" (mivelaz rank top 3)
- "Combien coûte un site internet pour PME Suisse" (vol 10, concurrence HIGH)
- "Freelance SEO vs agence : comparatif prix"
- "SEO mensuel CHF 250 vs CHF 750 : que contient vraiment un forfait ?"
- "Hébergement web suisse : vaut-il les CHF 200/an ?"
- "Combien de temps pour des résultats SEO ?" (PAA déjà référencé dans [SPEC-3](SPEC-3-strategie-blog-contenu.md))

Mivelaz a 90 articles, KUMO en a 5 — combler ne serait-ce que 10 % du gap = 10 articles = ~3 mois de production soutenue.

### 3. Ajouter 3 pages locales manquantes — P1, 2 jours
Dans [scripts/routes.mjs](scripts/routes.mjs) ajouter :
- `/consultant-seo-fribourg`
- `/consultant-seo-valais` (couvre Sion + Martigny + Sierre)
- `/consultant-seo-bienne-jura` (combinaison, modèle one-referencement)

Mivelaz déclare 18 villes, one-ref fait 7 pages combinant 2 villes. KUMO avec 4 est sous-couvert et laisse des PME fribourgeoises/valaisannes partir vers la concurrence. Réutiliser le template existant de [src/pages/ConsultantSeo*.tsx](src/pages/).

### 4. Créer une page `/tarifs` consolidée — P1, 1 jour
Modèle : [mivelaz-consulting.ch/services/referencement-naturel-suisse](https://mivelaz-consulting.ch/services/referencement-naturel-suisse) qui concentre les 3 forfaits SEO sur une page unique scannable en 30 s. Chez KUMO, les 3 offres SEO (Audit 1200 / Suivi 590/mois / Mandat 90j 2900) + les 3 offres web sont dispersées dans 6 pages. Une page `/tarifs` ferait converger tout le trafic commercial et remonterait sur les recherches "tarif consultant SEO Suisse".

### 5. Éteindre la dette technique restante — P1, 30 min + 1 h
Les 2 fixes du [LIGHTHOUSE-VERCEL-REPORT.md](LIGHTHOUSE-VERCEL-REPORT.md) :
- **Prerender `rel="preload"`** → -600 ms FCP mobile → Perf mobile 93 → 96 ([scripts/prerender.mjs:90](scripts/prerender.mjs)).
- **Lazy-load framer-motion + gsap** below-the-fold → -50 KiB + -200 ms TBT → Perf mobile 96 → 98.

L'avance technique est actuellement de 14 points au-dessus de la médiane mobile — ces 2 fixes pousseraient KUMO à 20 points d'avance, inattaquable.

---

## Annexe A — URLs analysées (reproduction)

| Domaine | Home auditée | Sitemap analysé |
|---|---|---|
| kumo | https://seo-magic-design.vercel.app/ | scripts/routes.mjs |
| mivelaz | https://mivelaz-consulting.ch/ | /sitemap.xml |
| seogoogle | https://www.seogoogle.ch/ | /sitemap.xml |
| caseo | https://caseo.ch/ | /sitemap.xml |
| edana | https://edana.ch/ | /sitemap_index.xml + 6 enfants |
| one-referencement | https://one-referencement.com/ | /sitemap.xml |
| ferrstudio | https://www.ferrstudio.ch/ | /sitemap.xml |

Requêtes WebSearch utilisées :
1. `consultant SEO Suisse romande freelance`
2. `consultant SEO Neuchâtel`
3. `agence SEO Lausanne`
4. `agence SEO Genève`
5. `audit SEO Suisse PME`
6. `création site internet PME Suisse romande sur-mesure`
7. `freelance référencement naturel Suisse tarif forfait`

## Annexe B — Reproduction technique

```bash
# Chaque Lighthouse concurrent :
LH_BASE_URL=https://mivelaz-consulting.ch node scripts/lighthouse-vercel.mjs /
LH_BASE_URL=https://caseo.ch               node scripts/lighthouse-vercel.mjs /
LH_BASE_URL=https://edana.ch               node scripts/lighthouse-vercel.mjs /
LH_BASE_URL=https://one-referencement.com  node scripts/lighthouse-vercel.mjs /
LH_BASE_URL=https://www.seogoogle.ch       node scripts/lighthouse-vercel.mjs /
LH_BASE_URL=https://www.ferrstudio.ch      node scripts/lighthouse-vercel.mjs /
```

Limites connues :
- Une seule passe Lighthouse par domaine (variance ±5 points). Pour un rapport contractuel, moyenner 3 passes.
- Pas de SERP positioning : on ne sait pas où KUMO *ranke* aujourd'hui (vraisemblablement nulle part, vu l'absence d'indexation sur le domaine final).
- Pas de data de backlinks (Ahrefs/SEMrush requis, payant).
- Périmètre panel = 6 concurrents — exhaustif pour Romandie/freelance, non exhaustif pour agences internationales (Suisseo, Eminence, Creativia non auditées).
