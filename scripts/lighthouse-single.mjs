import puppeteer from "puppeteer";
import lighthouse from "lighthouse";
import desktopConfig from "lighthouse/core/config/desktop-config.js";
import { createServer } from "http";
import { readFileSync, writeFileSync, mkdirSync, existsSync, statSync } from "fs";
import { resolve, dirname, join, extname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = resolve(__dirname, "../dist");
const REPORTS_DIR = resolve(__dirname, "../lighthouse-reports");
const PORT = 4175;
const TARGET_PAGE = process.argv[2] || "/";

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

function startServer(port) {
  const server = createServer((req, res) => {
    const requestPath = new URL(req.url, `http://localhost:${port}`).pathname;
    let filePath = join(DIST, requestPath === "/" ? "/index.html" : requestPath);
    if (existsSync(filePath) && statSync(filePath).isDirectory()) filePath = join(filePath, "index.html");
    if (!existsSync(filePath) && extname(filePath) === "") {
      const candidate = join(filePath, "index.html");
      if (existsSync(candidate)) filePath = candidate;
    }
    if (!existsSync(filePath)) filePath = join(DIST, "index.html");
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

async function main() {
  if (!existsSync(REPORTS_DIR)) mkdirSync(REPORTS_DIR, { recursive: true });

  const server = await startServer(PORT);
  console.log(`\nServer on port ${PORT} — auditing: ${TARGET_PAGE}\n`);

  const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox", "--disable-gpu"] });
  const wsUrl = new URL(browser.wsEndpoint());
  const chromePort = parseInt(wsUrl.port, 10);

  try {
    for (const formFactor of ["mobile", "desktop"]) {
      const url = `http://localhost:${PORT}${TARGET_PAGE}`;
      console.log(`Auditing ${TARGET_PAGE} [${formFactor}]...`);

      const flags = {
        port: chromePort,
        output: ["html"],
        logLevel: "silent",
        onlyCategories: ["performance", "accessibility", "best-practices", "seo"],
      };

      const runnerResult = await lighthouse(url, flags, formFactor === "desktop" ? desktopConfig : undefined);

      if (runnerResult.lhr.runtimeError) {
        const { code, message } = runnerResult.lhr.runtimeError;
        console.warn(`  runtime error: ${code} — ${message}`);
      }

      const c = runnerResult.lhr.categories;
      const s = (cat) => cat?.score != null ? Math.round(cat.score * 100) : "N/A";
      console.log(`  Perf: ${s(c.performance)}  A11y: ${s(c.accessibility)}  BP: ${s(c["best-practices"])}  SEO: ${s(c.seo)}`);

      // Failing binary audits
      const failing = Object.values(runnerResult.lhr.audits)
        .filter(a => a.scoreDisplayMode === "binary" && a.score === 0);
      if (failing.length) {
        console.log(`  Failing audits (${failing.length}):`);
        failing.forEach(a => {
          console.log(`    [${a.id}] ${a.title}`);
          (a.details?.items || []).slice(0, 3).forEach(it => {
            if (it.node?.snippet) console.log(`      snippet: ${it.node.snippet.slice(0, 120)}`);
            if (it.node?.explanation) console.log(`      explain: ${it.node.explanation.slice(0, 200)}`);
          });
        });
      } else {
        console.log("  No failing audits.");
      }

      const slug = TARGET_PAGE.replace(/^\//, "").replace(/\//g, "-") || "home";
      const reportFile = join(REPORTS_DIR, `${slug}-${formFactor}.html`);
      writeFileSync(reportFile, runnerResult.report[0], "utf-8");
      console.log(`  Report: ${reportFile}\n`);
    }
  } finally {
    await browser.close();
    server.close();
  }
}

main().catch((err) => { console.error(err); process.exit(1); });
