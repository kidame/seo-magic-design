// Script jetable : génère public/og-image.jpg (1200x630) depuis le logo KUMO.
// Format officiel Open Graph + Twitter summary_large_image + image schema.org.
// Usage : node scripts/generate-og-image.mjs
import sharp from "sharp";
import { readFileSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const LOGO = resolve(__dirname, "../public/logo-kumo.png");
const OUT = resolve(__dirname, "../public/og-image.jpg");

const W = 1200;
const H = 630;
// #0a0a0a = theme-color du site (même fond que la navbar + manifest)
const BG = { r: 10, g: 10, b: 10, alpha: 1 };

// 1) Prépare le logo redimensionné (hauteur 220 px, proportions conservées).
// Le logo source est noir sur transparent (optimisé pour fond clair avec
// mix-blend-multiply). Sur l'og-image fond noir, on inverse les pixels RGB
// pour obtenir un logo blanc. L'alpha est preserve (negate({ alpha: false })).
const logoBuffer = await sharp(readFileSync(LOGO))
  .resize({ height: 220, withoutEnlargement: false })
  .negate({ alpha: false })
  .toBuffer();
const { width: logoW, height: logoH } = await sharp(logoBuffer).metadata();

// 2) Prépare l'overlay SVG : titre + sous-titre positionnés sous le logo
const TITLE = "Consultant SEO &amp; Cr&#233;ation Web";
const SUB = "Neuch&#226;tel &#183; Lausanne &#183; Gen&#232;ve &#183; Suisse romande";
const URL_LINE = "kumo-seo.ch";

const svgOverlay = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <style>
    .title { fill: #ffffff; font-family: 'Sora', 'Segoe UI', sans-serif; font-size: 56px; font-weight: 700; letter-spacing: -0.02em; }
    .sub   { fill: #b3b3b3; font-family: 'Sora', 'Segoe UI', sans-serif; font-size: 26px; font-weight: 400; }
    .url   { fill: #8c47d1; font-family: 'JetBrains Mono', monospace; font-size: 22px; font-weight: 500; letter-spacing: 0.02em; }
  </style>
  <text x="${W / 2}" y="420" text-anchor="middle" class="title">${TITLE}</text>
  <text x="${W / 2}" y="470" text-anchor="middle" class="sub">${SUB}</text>
  <text x="${W / 2}" y="560" text-anchor="middle" class="url">${URL_LINE}</text>
</svg>`;

// 3) Compose : fond noir + logo centré haut + texte (overlay SVG)
const logoX = Math.round((W - logoW) / 2);
const logoY = 130;

const composed = await sharp({
  create: {
    width: W,
    height: H,
    channels: 3,
    background: BG,
  },
})
  .composite([
    { input: logoBuffer, left: logoX, top: logoY },
    { input: Buffer.from(svgOverlay), left: 0, top: 0 },
  ])
  .jpeg({ quality: 88, mozjpeg: true })
  .toBuffer();

writeFileSync(OUT, composed);
console.log(`og-image.jpg : ${(composed.length / 1024).toFixed(0)} KB, ${W}x${H} -> ${OUT}`);
