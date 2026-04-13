import puppeteer from "puppeteer";
import { createServer } from "http";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve, dirname, join } from "path";
import { fileURLToPath } from "url";
import { ROUTES } from "./routes.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = resolve(__dirname, "../dist");

const PRERENDER_PATHS = ROUTES.map((r) => r.path);

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
    let filePath = join(DIST, req.url === "/" ? "/index.html" : req.url);

    // SPA fallback
    if (!existsSync(filePath)) {
      filePath = join(DIST, "index.html");
    }

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
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
  });

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
