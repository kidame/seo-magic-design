// Script jetable : télécharge Sora 400/600/700 + JetBrains Mono 400/500 latin subset en WOFF2
// Usage : node scripts/fetch-fonts.mjs
import { writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(__dirname, "../public/fonts");

const UA_MODERN =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36";
const cssUrl =
  "https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700&family=JetBrains+Mono:wght@400;500&display=swap";

const css = await fetch(cssUrl, { headers: { "User-Agent": UA_MODERN } }).then((r) =>
  r.text()
);

// On cherche, par famille/poids, le bloc dont le unicode-range contient U+0000-00FF (= subset latin)
const blocks = css.split("@font-face").filter((b) => b.includes("unicode-range: U+0000-00FF"));

const files = [
  { family: "sora", match: "Sora", weight: 400 },
  { family: "sora", match: "Sora", weight: 600 },
  { family: "sora", match: "Sora", weight: 700 },
  { family: "jetbrains-mono", match: "JetBrains Mono", weight: 400 },
  { family: "jetbrains-mono", match: "JetBrains Mono", weight: 500 },
];

let combinedRange = "";

for (const { family, match, weight } of files) {
  const block = blocks.find(
    (b) => b.includes(`font-family: '${match}'`) && b.includes(`font-weight: ${weight}`)
  );
  if (!block) throw new Error(`latin block not found for ${family} ${weight}`);
  const urlMatch = block.match(/url\((https:\/\/fonts\.gstatic\.com[^)]+\.woff2)\)/);
  if (!urlMatch) throw new Error(`woff2 url not found for ${family} ${weight}`);
  if (!combinedRange) {
    const rangeMatch = block.match(/unicode-range:\s*([^;]+);/);
    if (rangeMatch) combinedRange = rangeMatch[1].trim();
  }
  const buf = Buffer.from(await fetch(urlMatch[1]).then((r) => r.arrayBuffer()));
  const out = resolve(OUT, `${family}-${weight}.woff2`);
  writeFileSync(out, buf);
  console.log(`${family} ${weight} : ${(buf.length / 1024).toFixed(1)} KB -> ${out}`);
}

console.log(`\nunicode-range (latin) Google actuel :\n${combinedRange}\n`);
console.log("Coller ce unicode-range dans src/index.css si différent de celui déjà prévu.");
