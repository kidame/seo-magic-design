import { writeFileSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { SITE_URL, ROUTES } from "./routes.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = resolve(__dirname, "../dist");

const today = new Date().toISOString().split("T")[0];

const sitemapRoutes = ROUTES.filter((r) => r.sitemap !== false);

// Infomaniak/Apache (mod_dir) ajoute un trailing slash a toute URL qui correspond
// a un dossier (dist/<path>/index.html cree par le prerender). On declare donc la
// forme terminale "/<path>/" dans le sitemap pour eviter les 301 cote crawl.
const withTrailingSlash = (p) => (p === "/" ? "/" : p.endsWith("/") ? p : `${p}/`);

const urls = sitemapRoutes.map((route) => `  <url>
    <loc>${SITE_URL}${withTrailingSlash(route.path)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority.toFixed(1)}</priority>
  </url>`);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>
`;

if (!existsSync(DIST)) {
  console.error("dist/ directory not found. Run 'vite build' first.");
  process.exit(1);
}

writeFileSync(resolve(DIST, "sitemap.xml"), sitemap, "utf-8");
console.log(`Sitemap generated: ${sitemapRoutes.length} URLs -> dist/sitemap.xml`);
