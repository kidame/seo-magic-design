import { readFileSync } from "fs";

const html = readFileSync(process.argv[2], "utf-8");

// Find index of "__LIGHTHOUSE_JSON__ = " then walk balanced braces.
const marker = "__LIGHTHOUSE_JSON__ = ";
const start = html.indexOf(marker);
if (start < 0) { console.error("no marker"); process.exit(1); }
let i = start + marker.length;
if (html[i] !== "{") { console.error("no {"); process.exit(1); }
let depth = 0, inStr = false, esc = false;
let end = -1;
for (let j = i; j < html.length; j++) {
  const ch = html[j];
  if (inStr) {
    if (esc) esc = false;
    else if (ch === "\\") esc = true;
    else if (ch === '"') inStr = false;
    continue;
  }
  if (ch === '"') inStr = true;
  else if (ch === '{') depth++;
  else if (ch === '}') {
    depth--;
    if (depth === 0) { end = j + 1; break; }
  }
}
const jsonStr = html.slice(i, end);
const lhr = JSON.parse(jsonStr);

for (const cat of ["accessibility", "best-practices", "performance"]) {
  const c = lhr.categories[cat];
  console.log(`\n== ${cat} score=${c.score}`);
  for (const ref of c.auditRefs) {
    const a = lhr.audits[ref.id];
    if (a.score !== null && a.score < 1 && (ref.weight > 0 || a.score === 0)) {
      console.log("-", ref.id, "| score:", a.score, "| w:", ref.weight, "|", a.title);
      if (a.details?.items?.[0]?.node?.snippet) {
        console.log("   snip:", a.details.items[0].node.snippet.slice(0, 160));
      }
      if (a.details?.items?.[0]?.source?.snippet) {
        console.log("   src:", a.details.items[0].source.snippet.slice(0, 160));
      }
    }
  }
}
