# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

| Command | Purpose |
|---|---|
| `npm run dev` | Vite dev server on port 8080 |
| `npm run build:prerender` | **Production build** — `vite build` then sitemap then Puppeteer prerender of every route |
| `npm run preview` | Serve `dist/` locally |
| `npm run lighthouse` | Full audit cycle (build:prerender + serve + Lighthouse mobile/desktop on every route, writes `lighthouse-reports/`) |
| `npm run lighthouse:no-build` | Same but skip rebuild — use when iterating on audit script itself |
| `npm run lint` | ESLint |
| `npm run test` / `test:watch` | Vitest |

Single-test: `npx vitest run path/to/file.test.ts` (or `-t "name"` to filter).

## Architecture

### Per-page composition (no layout wrapper)
Every page in `src/pages/` independently mounts `<Navbar />`, `<SeoHead .../>`, `<main id="main-content">`, content, then `<Footer />`. There is no shared layout component — App.tsx only provides `<Routes>` and global overlays (Aurora, Toaster, CookieConsent). When adding a page, copy the structure from an existing one (e.g. [src/pages/Index.tsx](src/pages/Index.tsx)).

### SeoHead is mandatory
[src/components/SeoHead.tsx](src/components/SeoHead.tsx) imperatively rewrites `<title>`, meta description/OG/Twitter, `<link rel="canonical">`, and a `<script type="application/ld+json">` block on every navigation (`useEffect`). A page without SeoHead inherits the previous page's metadata. The `noIndex` prop emits `<meta name="robots" content="noindex, follow">` (used on legal pages and `/rapport` — Lighthouse's `is-crawlable` failing on these is *expected*, not a bug).

### Routes are declared in two places — keep them in sync
- [src/App.tsx](src/App.tsx) — React Router routes (lazy-loaded via `React.lazy`)
- [scripts/routes.mjs](scripts/routes.mjs) — source of truth for sitemap generation, prerender, and Lighthouse audit (`SITE_URL` + path/priority/changefreq, `sitemap: false` to exclude e.g. `/rapport`)

When adding/removing a route, update both files.

### Prerender pipeline
`build:prerender` runs `vite build` → `scripts/generate-sitemap.mjs` → `scripts/prerender.mjs` (Puppeteer). The prerender script spins a static server on `dist/`, opens each route headless, waits for hydration, and writes `dist/<route>/index.html` containing the resolved DOM (h1, JSON-LD, meta tags). **A plain `vite build` produces only a SPA shell with empty `<div id="root">`** — Lighthouse run against that will fail `landmark-one-main`, all SEO content checks, and emit `NO_LCP`. Always prerender before auditing or deploying.

### Aurora WebGL background ([src/components/ui/aurora.tsx](src/components/ui/aurora.tsx))
Uses OGL. Three guards exist for a reason — keep them all:
1. Probe in [src/App.tsx](src/App.tsx) `useEffect`: creates a throwaway `<canvas>` and tests `getContext('webgl')` *before* setting `auroraReady = true`. Without this, headless environments (Lighthouse) silently fail and OGL emits `console.error("unable to create webgl context")` which kills the Best Practices score.
2. `try/catch` around `new Renderer({...})`.
3. `if (!gl || !gl.canvas) return;` after instantiation.

Aurora is lazy-loaded behind `requestIdleCallback` (1500ms fallback) — do not move it into the critical path.

### Color tokens — two primaries
- `text-primary` (HSL 270 60% 55% = #8c47d1) — designed to give white text >= 4.5:1 on `bg-primary` buttons.
- `text-primary-light` (HSL 270 60% 70%) — Tailwind extension for **purple text on the dark background**, gives 5.0:1+ which `text-primary` does not.

When introducing accent text on dark surfaces, use `text-primary-light`. When using the color as a background with white foreground, use `bg-primary`. Mixing these up will fail WCAG AA and Lighthouse a11y.

Also: `text-muted-foreground/60` fails contrast on dark — use `/80` minimum.

### Bundle splitting ([vite.config.ts](vite.config.ts))
`manualChunks` groups vendors (`vendor-react`, `vendor-motion`, `vendor-ogl`, `vendor-gsap`, `vendor-icons`, `vendor-radix`, `vendor-query`). `framer-motion` is statically imported by ~27 files and lives in its own chunk; lazy-loading it requires a per-file refactor (out of scope for incidental edits).

### Deployment targets
The repo deploys to **two** hosts with different config sources:
- **Vercel**: [vercel.json](vercel.json) — `buildCommand: npm run build:prerender`, SPA rewrite, security headers, `Cache-Control: immutable max-age=31536000` on `/assets/*`.
- **Infomaniak (Apache)**: `public/.htaccess` (copied to `dist/` at build) — SPA routing, gzip, cache, CSP, HSTS.

Changes to caching/security must be mirrored in both.

### Analytics gated on consent
GTM is injected by [src/components/GtmScript.tsx](src/components/GtmScript.tsx) only when `consent === "accepted"` (from `useCookieConsent` localStorage). `VITE_GTM_ID` empty in dev = no tracking. nLPD compliance — do not load tracking before consent.

## Conventions

- **Commit messages**: French, conventional-style scope (`fix(seo): ...`, `fix(a11y/perf): ...`, `feat(deploy): ...`). Examples in `git log`.
- **Line endings**: repo uses CRLF on Windows (`autocrlf` likely set). Avoid bulk `sed -i` from Git Bash without follow-up cleanup — it rewrites every touched file as LF and pollutes diffs. Use the Edit tool, or filter staged changes with `git diff --ignore-cr-at-eol --name-only` before committing.
- **No AI artifacts in code/content**: no em-dashes, no emojis added to user-facing content unless asked.

## SEO/a11y guardrails

- Heading order is enforced (Lighthouse `heading-order`): a page can't go h1 → h3. `BlogCard` uses `<h2>` because it's rendered inside pages where the page title is h1.
- Avoid redundant `aria-label` on links that contain visible text — Lighthouse flags `label-content-name-mismatch` if the aria-label doesn't *start with* the visible text.
- Audit baseline (post-rounds 1-4 in `LIGHTHOUSE-AUDIT-REPORT.md`): a11y 100, BP 100, SEO 100 (66 on 3 noindex pages = expected), perf mobile 61-67 / desktop 95-97. Performance gains beyond this need framer-motion deferral or critical-CSS extraction.
