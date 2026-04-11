import puppeteer from "puppeteer";
import lighthouse from "lighthouse";
import desktopConfig from "lighthouse/core/config/desktop-config.js";
import { createServer } from "http";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve, dirname, join } from "path";
import { fileURLToPath } from "url";
import { execSync } from "child_process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = resolve(__dirname, "../dist");
const REPORTS_DIR = resolve(__dirname, "../lighthouse-reports");
const PORT = 4174;

const PAGES = [
  "/consultant-seo-neuchatel",
  "/consultant-seo-lausanne",
  "/consultant-seo-geneve",
  "/consultant-seo-la-chaux-de-fonds",
  "/consultant-seo-suisse-romande",
];

// Simple static file server for dist/ (same pattern as prerender.mjs)
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

function buildSite() {
  console.log("Building site...");
  execSync("npx vite build", {
    cwd: resolve(__dirname, ".."),
    stdio: "inherit",
  });
  console.log("Build complete.\n");
}

async function runAudits(serverPort) {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-gpu"],
  });

  const wsUrl = new URL(browser.wsEndpoint());
  const chromePort = parseInt(wsUrl.port, 10);

  const results = [];

  for (const pagePath of PAGES) {
    for (const formFactor of ["mobile", "desktop"]) {
      const url = `http://localhost:${serverPort}${pagePath}`;
      console.log(`Auditing ${pagePath} (${formFactor})...`);

      const flags = {
        port: chromePort,
        output: ["html"],
        logLevel: "silent",
        onlyCategories: ["performance", "accessibility", "best-practices", "seo"],
      };

      const config = formFactor === "desktop" ? desktopConfig : undefined;

      const runnerResult = await lighthouse(url, flags, config);

      const categories = runnerResult.lhr.categories;
      const getScore = (cat) => cat?.score != null ? Math.round(cat.score * 100) : "N/A";
      const scores = {
        page: pagePath,
        formFactor,
        performance: getScore(categories.performance),
        accessibility: getScore(categories.accessibility),
        bestPractices: getScore(categories["best-practices"]),
        seo: getScore(categories.seo),
      };
      results.push(scores);

      // Save HTML report
      const slug = pagePath.replace(/^\//, "").replace(/\//g, "-");
      const reportFile = join(REPORTS_DIR, `${slug}-${formFactor}.html`);
      writeFileSync(reportFile, runnerResult.report[0], "utf-8");
      console.log(`  -> ${reportFile}`);
    }
  }

  await browser.close();
  return results;
}

function printSummary(results) {
  console.log("\n" + "=".repeat(90));
  console.log("LIGHTHOUSE AUDIT SUMMARY");
  console.log("=".repeat(90));

  console.table(
    results.map((r) => ({
      Page: r.page,
      Mode: r.formFactor,
      Perf: r.performance,
      A11y: r.accessibility,
      "Best Practices": r.bestPractices,
      SEO: r.seo,
    }))
  );

  const jsonPath = join(REPORTS_DIR, "summary.json");
  writeFileSync(jsonPath, JSON.stringify(results, null, 2), "utf-8");
  console.log(`\nDetailed JSON summary: ${jsonPath}`);
  console.log(`HTML reports directory: ${REPORTS_DIR}`);
  console.log(`\nTip: For better Performance scores, use the prerendered build:`);
  console.log(`  npm run build:prerender && npm run lighthouse:no-build`);
}

async function main() {
  const skipBuild = process.argv.includes("--no-build");

  if (!skipBuild) {
    buildSite();
  }

  if (!existsSync(DIST)) {
    console.error("Error: dist/ directory not found. Run 'npm run build' first.");
    process.exit(1);
  }

  if (!existsSync(REPORTS_DIR)) {
    mkdirSync(REPORTS_DIR, { recursive: true });
  }

  const server = await startServer(PORT);
  console.log(`Server started on port ${PORT}\n`);

  try {
    const results = await runAudits(PORT);
    printSummary(results);
  } finally {
    server.close();
  }
}

main().catch((err) => {
  console.error("Lighthouse audit failed:", err);
  process.exit(1);
});
