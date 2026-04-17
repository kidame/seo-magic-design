// Script jetable : convertit public/logo-kumo.png en WebP + génère apple-touch-icon.png 180x180.
// Usage : node scripts/convert-logo.mjs
import sharp from "sharp";
import { readFileSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC = resolve(__dirname, "../public/logo-kumo.png");
const WEBP_OUT = resolve(__dirname, "../public/logo-kumo.webp");
const APPLE_OUT = resolve(__dirname, "../public/apple-touch-icon.png");

const srcBuffer = readFileSync(SRC);
const { width, height, size } = await sharp(srcBuffer).metadata();
console.log(`Source : ${width}x${height}, ${(size / 1024).toFixed(0)} KB`);

// 1) Logo WebP — resize à 192x110 (retina 2x de 96x55 affichés), qualité 85, conserve la transparence
const webp = await sharp(srcBuffer)
  .resize(192, 110, { fit: "inside", withoutEnlargement: true })
  .webp({ quality: 85, effort: 6 })
  .toBuffer();
writeFileSync(WEBP_OUT, webp);
console.log(`WebP : ${(webp.length / 1024).toFixed(0)} KB -> ${WEBP_OUT}`);

// 2) Apple touch icon : carré 180x180, fond noir (theme-color du site)
const apple = await sharp(srcBuffer)
  .resize(180, 180, {
    fit: "contain",
    background: { r: 10, g: 10, b: 10, alpha: 1 },
  })
  .png({ compressionLevel: 9 })
  .toBuffer();
writeFileSync(APPLE_OUT, apple);
console.log(`Apple touch icon : ${(apple.length / 1024).toFixed(0)} KB -> ${APPLE_OUT}`);
