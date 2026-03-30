

## Plan : Parallax premium global avec GSAP ScrollTrigger

### Approche

Installer GSAP + ScrollTrigger et creer un hook `useParallax` reutilisable + un composant wrapper `ParallaxLayer`. Appliquer des effets subtils sur les sections existantes de la homepage (hero, process, differentiator, case study). Pas de smooth scroll force, pas de Lenis, pas de canvas.

### Fichiers a creer

#### 1. `src/hooks/useParallax.ts` — Hook GSAP principal

Hook qui accepte un ref et des options :
- `speed` (0.1 a 1, defaut 0.3) — intensite verticale
- `speedX` (optionnel) — deplacement horizontal
- `direction` ("normal" | "reverse", defaut "normal")
- `scale` (optionnel, ex: 1.05)
- `opacity` (optionnel, ex: [0.5, 1])
- `start` / `end` — positions ScrollTrigger
- `scrub` (defaut 1.5 pour smooth)

Le hook :
- Detecte `prefers-reduced-motion` → ne fait rien si actif
- Detecte mobile via `useIsMobile()` → reduit l'intensite de 70% ou desactive
- Cree un `gsap.to()` avec `ScrollTrigger` sur le ref
- Cleanup complet dans le return du useEffect
- Utilise `will-change: transform` uniquement pendant l'animation

#### 2. `src/components/ParallaxLayer.tsx` — Composant wrapper

```tsx
<ParallaxLayer speed={0.2} scale={1.02}>
  <div className="...">contenu</div>
</ParallaxLayer>
```

Props = memes que le hook + `className`, `children`, `as` (tag HTML). Encapsule le hook dans un div avec ref.

### Fichiers a modifier

#### 3. `package.json` — Ajouter GSAP

```
"gsap": "^3.12.5"
```

GSAP ScrollTrigger est inclus dans le package principal depuis v3.12.

#### 4. `src/components/HeroSection.tsx` — Parallax hero multicouches

- Toile d'araignee SVG : `speed={0.15}` (bouge lentement, effet de profondeur)
- Glow rouge : `speed={0.1}, scale={1.1}` (arriere-plan lent)
- Titre principal : `speed={-0.05}` (micro-decalage inverse, subtil)
- Barre metriques : `speed={0.08}` (leger retard)

#### 5. `src/components/ProcessSection.tsx` — Decalage etapes

- Numeros d'etapes (01, 02...) : `speed={0.12}` leger flottement
- Les 4 cartes restent statiques (lisibilite prioritaire)

#### 6. `src/components/DifferentiatorSection.tsx` — Colonnes decalees

- Colonne "eux" : `speed={0.1}`
- Colonne "nous" : `speed={-0.1}` (sens inverse, effet de convergence subtil)

#### 7. `src/components/CaseStudySection.tsx` — Metriques flottantes

- Chiffres metriques : `speed={0.15}` avec leger `scale={1.03}`

#### 8. `src/pages/Index.tsx` — Enregistrer ScrollTrigger

Ajouter l'import et l'enregistrement GSAP `gsap.registerPlugin(ScrollTrigger)` au niveau de la page.

### Regles de performance et accessibilite

- Uniquement `transform: translate3d()` et `scale` — zero layout recalc
- `will-change: transform` ajoute/retire dynamiquement
- `prefers-reduced-motion` : hook retourne sans creer d'animation
- Mobile : intensite divisee par 3, certains layers desactives
- Tablet : intensite divisee par 1.5
- Scrub smooth (1.5) pour eviter tout saccade
- Aucun contenu cache par defaut — les animations sont du progressive enhancement
- Pas de scroll-jacking

### Intensites par profondeur

```text
Couche              Speed    Notes
─────────────────────────────────────
Background SVG/glow  0.10    Tres lent, profondeur max
Blocs decoratifs     0.15    Lent
Titres section       -0.05   Micro inverse, subtil
Cartes/contenu       0.00    Statique (lisibilite)
Metriques/badges     0.08    Leger retard
```

