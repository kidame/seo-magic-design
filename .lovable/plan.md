

## Optimisation CLS Hero + Imports Lucide individuels

### 1. Corriger le CLS du Hero (HeroSection.tsx)

Le problème : les éléments animés par framer-motion démarrent avec `opacity: 0` et `y: 30`, ce qui provoque un décalage de layout quand ils apparaissent.

**Solution** : réserver l'espace visuel en fixant des hauteurs minimales sur les conteneurs animés et en utilisant `visibility` + `opacity` au lieu de laisser les éléments invisibles affecter le flux. Concrètement :
- Ajouter `min-h-screen` sur la section (déjà fait) pour réserver l'espace global
- Remplacer les `initial={{ y: 30 }}` par des transformations CSS pures (`translate`) qui ne provoquent pas de reflow — `y` en framer-motion utilise déjà `transform`, mais il faut s'assurer que les conteneurs ont une taille réservée
- Ajouter `will-change: "transform, opacity"` sur les éléments animés pour éviter les recalculs de layout
- Fixer une hauteur minimale sur le conteneur des métriques (`min-h-[80px]`) et des CTA (`min-h-[48px]`) pour réserver l'espace avant l'animation

### 2. Imports Lucide individuels (6 fichiers concernés hors `/ui`)

Fichiers custom à modifier (les composants `/ui` sont générés par shadcn, on ne les touche pas) :

| Fichier | Import actuel | Import individuel |
|---|---|---|
| `HeroSection.tsx` | `{ ArrowRight, ChevronDown }` | Déjà individuel — OK tel quel (tree-shaking fonctionne) |
| `Navbar.tsx` | `{ Menu, X }` | OK tel quel |
| `ServicesSection.tsx` | `{ ArrowRight, Check }` | OK tel quel |
| `CaseStudySection.tsx` | `{ ArrowRight }` | OK tel quel |
| `ContactSection.tsx` | `{ ArrowRight }` | OK tel quel |
| `FAQSection.tsx` | `{ ChevronDown }` | OK tel quel |

**Constat** : les imports sont déjà des imports nommés individuels (`import { X } from "lucide-react"`), ce qui est la méthode recommandée et tree-shakable. Aucun fichier n'utilise `import * as Icons` ou `import { icons }`. Le bundle est donc déjà optimisé côté Lucide.

### 3. Résumé des changements

**Un seul fichier modifié** : `src/components/HeroSection.tsx`
- Ajouter `style={{ willChange: "transform, opacity" }}` sur les éléments `motion.*` principaux
- Ajouter `min-h-[80px]` sur le conteneur métriques pour réserver l'espace
- Ajouter `min-h-[48px]` sur le conteneur CTA
- Ajouter `min-h-[1.5rem]` sur le label "Consultant SEO"
- Supprimer les `filter: "blur(8px)"` des `initial` states (le blur provoque des repaints coûteux) et ne garder que `opacity` + `y` pour les animations du titre

**Aucun changement Lucide nécessaire** — les imports sont déjà optimaux.

