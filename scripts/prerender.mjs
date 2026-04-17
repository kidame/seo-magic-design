import puppeteer from "puppeteer";
import { createServer } from "http";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve, dirname, join } from "path";
import { fileURLToPath } from "url";
import { ROUTES } from "./routes.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = resolve(__dirname, "../dist");

const PRERENDER_PATHS = ROUTES.map((r) => r.path);

// Capture le template Vite vanilla UNE SEULE FOIS, avant tout prerender.
// Sans ca, dist/index.html est ecrase par le prerender de "/" (avec son FAQPage,
// ses scripts JSON-LD, etc.), et les pages suivantes herited ce contenu en SPA
// fallback -> injecte des schemas residuels (FAQPage tarifs de la home qui se
// retrouve sur /consultant-seo-lausanne, /faq, etc.).
const VANILLA_TEMPLATE = readFileSync(join(DIST, "index.html"), "utf-8");

// Simple static file server for dist/
function startServer(port) {
  const mimeTypes = {
    ".html": "text/html",
    ".js": "application/javascript",
    ".css": "text/css",
    ".json": "application/json",
    ".svg": "image/svg+xml",
    ".ico": "image/x-icon",
    ".woff2": "font/woff2",
    ".woff": "font/woff",
  };

  const server = createServer((req, res) => {
    // Toute requete HTML (route SPA, "/", fallback) sert le template vanilla.
    // Les requetes d'assets (.js/.css/.svg/...) passent par le disque.
    const isAssetRequest = /\.[a-z0-9]+$/i.test(req.url) && !req.url.endsWith(".html");

    if (!isAssetRequest) {
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.end(VANILLA_TEMPLATE);
      return;
    }

    const filePath = join(DIST, req.url);

    try {
      const content = readFileSync(filePath);
      const ext = "." + filePath.split(".").pop();
      res.writeHead(200, { "Content-Type": mimeTypes[ext] || "application/octet-stream" });
      res.end(content);
    } catch {
      res.writeHead(404);
      res.end("Not found");
    }
  });

  return new Promise((r) => server.listen(port, () => r(server)));
}

async function prerender() {
  const PORT = 4173;
  console.log("Starting server...");
  const server = await startServer(PORT);

  console.log("Launching browser...");

  // On Vercel/CI, use @sparticuz/chromium (built for Linux serverless environments).
  // Locally, use the Chromium bundled with Puppeteer.
  const isVercel = !!process.env.VERCEL || !!process.env.CI;
  let launchOptions;
  if (isVercel) {
    const chromium = (await import("@sparticuz/chromium")).default;
    launchOptions = {
      args: [...chromium.args, "--no-sandbox", "--disable-dev-shm-usage"],
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath(),
      headless: chromium.headless,
    };
  } else {
    launchOptions = {
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
    };
  }

  const browser = await puppeteer.launch(launchOptions);

  for (const route of PRERENDER_PATHS) {
    console.log(`Prerendering ${route}...`);
    const page = await browser.newPage();

    await page.goto(`http://localhost:${PORT}${route}`, {
      waitUntil: "networkidle0",
      timeout: 30000,
    });

    // Wait for React to render
    await page.waitForSelector("#root > *", { timeout: 10000 });
    // Extra wait for animations to init
    await new Promise((r) => setTimeout(r, 500));

    const html = await page.content();

    // Write to dist/route/index.html
    const outDir = route === "/" ? DIST : join(DIST, route);
    if (!existsSync(outDir)) {
      mkdirSync(outDir, { recursive: true });
    }

    const outFile = join(outDir, "index.html");
    writeFileSync(outFile, html, "utf-8");
    console.log(`  -> ${outFile}`);

    await page.close();
  }

  await browser.close();
  server.close();
  console.log("\nPrerendering complete!");
}

prerender().catch((err) => {
  console.error("Prerender failed:", err);
  process.exit(1);
});
