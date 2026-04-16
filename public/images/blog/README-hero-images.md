# Blog images — Série "Crawler's Silence"

Philosophie visuelle unifiée : cartographie, contrôle, silence de la toile. Un concept distinct par article, mêmes palette/typographie/cadre documentaire.

## Heros 1920×1080 (SVG vectoriel, ~8 KB chacun)

| Fichier | Article | Concept |
|---|---|---|
| `site-invisible-google-v1.svg` | Site invisible sur Google | Cartographie centrée — toile KUMO intacte, annotations. Version sécurisée. |
| `site-invisible-google-v2.svg` | Site invisible sur Google | Éditorial — toile qui se dissout, mot `invisible.` en italique. Version audacieuse. |
| `google-update-mars-2026.svg` | Mise à jour Google mars 2026 | Onde sismique — pulse radial depuis l'épicentre, timeline T+0H→T+20H. |
| `creer-site-internet-pme-suisse.svg` | Créer un site 2026 | Blueprint architectural — grille 12-col, 7 bandes (critères), échelle budget. |
| `freelance-seo-vs-agence.svg` | Freelance vs Agence | Diptyque — toile compacte 8 spokes (freelance) vs toile 16 spokes multi-nodes (agence). |
| `audit-seo-indispensable.svg` | Audit SEO 31 points | Grille de contrôle — 31 crosshairs numérotés, 5 flagged, hub central KUMO. |

## Thumbnails 800×450 (SVG vectoriel, ~3-4 KB chacun)

| Fichier | Article |
|---|---|
| `thumb-site-invisible.svg` | Site invisible sur Google |
| `thumb-google-update-mars-2026.svg` | Google Update mars 2026 |
| `thumb-creer-site-internet-pme-suisse.svg` | Créer un site 2026 |
| `thumb-freelance-seo-vs-agence.svg` | Freelance vs Agence |
| `thumb-audit-seo-indispensable.svg` | Audit SEO 31 points |

Les thumbs sont consommés par `BlogCard.tsx` via le champ `cover_image` du modèle `BlogPost` (voir `src/data/blogPosts.ts`). Chargement : `loading="lazy"` + `decoding="async"` + ratio 16:9 forcé par `aspect-[16/9]`.

## Intégration recommandée

**Option A — inline SVG dans un composant React** (meilleur rendu polices + SEO alt text natif) :

```tsx
import HeroV2 from "/images/blog/site-invisible-google-v2.svg?react";
// ou via import direct si Vite gère le SVG
```

**Option B — balise `<img>`** (plus simple, mais les polices externes ne se chargeront pas depuis l'intérieur du SVG) :

```tsx
<img src="/images/blog/site-invisible-google-v2.svg"
     alt="Votre site existe mais Google ne le voit pas"
     width="1920" height="1080" loading="eager" />
```

## Polices

Les SVG déclarent une pile `Instrument Serif → Sora → Georgia/serif`. Sora est déjà chargée sur le site, donc le fallback est propre. Pour un rendu optimal avec Instrument Serif (utilisé pour le mot italique `invisible.`), ajouter dans `index.html` :

```html
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" />
```

Sans ça, le browser fera fallback sur Sora avec italique synthétisé (slant artificiel). Acceptable mais moins élégant.

## Meta OG / Twitter (JPG requis)

La balise `og:image` dans `SiteInvisibleGoogle.tsx` pointe sur `https://kumo-seo.ch/images/blog/site-invisible-google.jpg`. Les plateformes sociales (LinkedIn, X, Facebook) acceptent mal le SVG pour OG. Il faut rasteriser en JPG/PNG :

**Méthodes rapides :**
1. **CloudConvert / Convertio** — upload du SVG, export JPG 1200×630 (recadrage du 1920×1080 en 1.91:1)
2. **Figma** — import SVG → export JPG 1200×630
3. **Inkscape CLI** : `inkscape site-invisible-google-v2.svg --export-type=png --export-width=1200 --export-height=630`
4. **Node.js + sharp** : `sharp('in.svg').resize(1200, 630, { fit: 'cover' }).jpeg({ quality: 90 }).toFile('out.jpg')`

Note : le recadrage 1920×1080 → 1200×630 (ratio 1.91:1 vs 1.78:1) va rogner légèrement en haut/bas. La composition est pensée avec une zone de sécurité de 80px aux 4 bords donc ça passe, mais il faut vérifier.

## Couleurs utilisées (alignées sur `index.css`)

- Fond : dégradé aubergine-noir `#120a22 → #05030c`
- Primary violet : `#8c47d1` (= `hsl(270 60% 55%)`)
- Primary-light (accents/glow) : `#b57dd6` / `#d9bff0`
- Cream éditorial : `#f5ebd8`
