

## Plan : Créer les 3 pages légales (droit suisse)

### Pages à créer

| Page | Route | Contenu |
|------|-------|---------|
| Mentions légales | `/mentions-legales` | Identité éditeur, hébergement, propriété intellectuelle, limitation responsabilité |
| CGV | `/cgv` | Conditions applicables aux forfaits et prestations KUMO (droit suisse, CO/LPD) |
| Politique de confidentialité | `/politique-de-confidentialite` | Conforme nLPD (nouvelle Loi sur la Protection des Données suisse, sept. 2023) |

### Contenu juridique clé (droit suisse)

**Mentions légales** : raison individuelle KUMO SEO, Val-de-Travers NE, Suisse. Hébergement Vercel. Propriété intellectuelle. Droit applicable : droit suisse, for Neuchâtel.

**CGV** : champ d'application (forfaits ponctuels + abonnements), devis/commande, prix en CHF TTC (pas de TVA si < 100k CA), paiement 30 jours, engagement 6 mois pour Suivi Visibilité/Croissance, résiliation, propriété intellectuelle (le client est propriétaire du site livré), garantie limitée, droit applicable suisse CO.

**Politique de confidentialité (nLPD)** : responsable du traitement, données collectées (formulaire contact, analytics), base juridique (consentement/intérêt légitime), cookies analytics, droits des personnes (accès, rectification, suppression), durée conservation, pas de transfert hors Suisse/EEE sans garanties, contact DPO.

### Fichiers à modifier

1. **Créer** `src/pages/MentionsLegales.tsx` — même structure que APropos (Navbar + Footer + SeoHead + sections)
2. **Créer** `src/pages/CGV.tsx` — articles numérotés, design prose
3. **Créer** `src/pages/PolitiqueConfidentialite.tsx` — sections nLPD
4. **Modifier** `src/App.tsx` — 3 nouvelles routes
5. **Modifier** `src/components/Footer.tsx` — liens `#` → vraies routes avec `<Link>`

### Design

- Même layout que les autres pages : `Navbar` + `<main className="pt-32 pb-24">` + `Footer`
- SeoHead avec `noindex` (pages légales ne doivent pas ranker)
- Contenu en prose : `max-w-3xl mx-auto`, headings `h2` par article/section
- Pas d'animations complexes — contenu statique lisible
- Kanji décoratifs dans le hero uniquement (法 pour légal, 約 pour CGV, 守 pour confidentialité)

### Détail technique

- JSON-LD `WebPage` minimal sur chaque page
- `<meta name="robots" content="noindex, follow">` via SeoHead (ajout d'une prop optionnelle `noIndex`)
- Breadcrumbs JSON-LD : Accueil > [Nom page]

