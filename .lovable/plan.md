

## Plan : Toile d'araignée — plus de glow + animation de rotation lente

### Modifications sur `src/components/HeroSection.tsx`

**1. Augmenter le glow**
- Opacity du ParallaxLayer : `0.12` → `0.20`
- Drop-shadow : `6px` → `12px`, opacité `0.4` → `0.6`
- Ajouter un second drop-shadow plus large et diffus : `drop-shadow(0 0 30px hsl(var(--primary) / 0.3))`
- StrokeWidth : `0.8` → `1`

**2. Animation de rotation lente**
- Envelopper le `<g>` dans une balise `<g>` avec `transform-origin="400 300"` et une animation CSS de rotation
- Ajouter une animation `@keyframes spin-slow` dans `src/index.css` : rotation 360° en 120s, linéaire, infinie
- Appliquer la classe `animate-spin-slow` sur le groupe SVG
- Respecter `prefers-reduced-motion` : désactiver via `motion-reduce:animate-none`

**3. Augmenter le glow rouge background**
- `bg-primary/8` → `bg-primary/12`
- `blur-[100px]` → `blur-[120px]`
- Taille : `w-[500px] h-[350px]` → `w-[600px] h-[400px]`

### Fichiers modifiés
- `src/components/HeroSection.tsx` — glow + classe animation
- `src/index.css` — keyframes `spin-slow`

### Test parallax
Après implémentation, je naviguerai sur la preview pour vérifier le scroll parallax et le rendu de la toile.

