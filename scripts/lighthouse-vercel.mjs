import puppeteer from "puppeteer";
import lighthouse from "lighthouse";
import desktopConfig from "lighthouse/core/config/desktop-config.js";
import { writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve, dirname, join } from "path";
import { fileURLToPath } from "url";
import ProxyChain from "proxy-chain";

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPORTS_DIR = resolve(__dirname, "../lighthouse-reports-vercel");
const BASE_URL = process.env.LH_BASE_URL || "https://seo-magic-design.vercel.app";

// Sous-ensemble representatif : home, une page service, une page blog,
// une page locale, une page legale, contact. On peut ajouter --full pour tout scanner.
const DEFAULT_PAGES = [
  "/",
  "/services/audit-seo",
  "/services/creation-site-web",
  "/blog",
  "/blog/site-invisible-google-pme-suisse",
  "/consultant-seo-suisse-romande",
  "/contact",
  "/mentions-legales",
];

async function runAudits(pages) {
  // If running inside an authenticated egress proxy (sandbox), route Chrome
  // through a local anonymous proxy that forwards to the upstream with creds.
  const upstreamProxy = process.env.HTTPS_PROXY || process.env.https_proxy;
  let anonymousProxyUrl = null;
  let proxyServer = null;
  if (upstreamProxy) {
    anonymousProxyUrl = await ProxyChain.anonymizeProxy(upstreamProxy);
    console.log(`Using local anonymous proxy: ${anonymousProxyUrl} -> upstream`);
  }

  const chromeArgs = [
    "--no-sandbox",
    "--disable-gpu",
    "--ignore-certificate-errors",
    "--ignore-certificate-errors-spki-list",
  ];
  if (anonymousProxyUrl) {
    const { hostname, port } = new URL(anonymousProxyUrl);
    chromeArgs.push(`--proxy-server=http://${hostname}:${port}`);
  }

  const browser = await puppeteer.launch({
    headless: true,
    args: chromeArgs,
  });

  const wsUrl = new URL(browser.wsEndpoint());
  const chromePort = parseInt(wsUrl.port, 10);

  const results = [];

  for (const pagePath of pages) {
    for (const formFactor of ["mobile", "desktop"]) {
      const url = `${BASE_URL}${pagePath}`;
      console.log(`Auditing ${pagePath} (${formFactor})...`);

      const flags = {
        port: chromePort,
        output: ["html"],
        logLevel: "silent",
        onlyCategories: ["performance", "accessibility", "best-practices", "seo"],
      };

      const config = formFactor === "desktop" ? desktopConfig : undefined;

      let runnerResult;
      try {
        runnerResult = await lighthouse(url, flags, config);
      } catch (err) {
        console.warn(`  ERROR: ${err.message}`);
        results.push({
          page: pagePath,
          formFactor,
          performance: "ERR",
          accessibility: "ERR",
          bestPractices: "ERR",
          seo: "ERR",
          runtimeError: err.message,
        });
        continue;
      }

      const runtimeError = runnerResult.lhr.runtimeError
        ? `${runnerResult.lhr.runtimeError.code}: ${runnerResult.lhr.runtimeError.message}`
        : null;
      if (runtimeError) {
        console.warn(`  runtimeError: ${runtimeError}`);
      }
      if (runnerResult.lhr.runWarnings && runnerResult.lhr.runWarnings.length > 0) {
        for (const w of runnerResult.lhr.runWarnings) {
          console.warn(`  warning: ${w}`);
        }
      }

      const categories = runnerResult.lhr.categories;
      const audits = runnerResult.lhr.audits;
      const getScore = (cat) => (cat?.score != null ? Math.round(cat.score * 100) : "N/A");

      const metric = (id) => {
        const a = audits[id];
        if (!a) return null;
        return {
          score: a.score,
          value: a.numericValue,
          display: a.displayValue,
        };
      };

      const failedAudits = Object.values(audits)
        .filter((a) => a.score !== null && a.score < 0.9 && a.scoreDisplayMode !== "notApplicable" && a.scoreDisplayMode !== "informative")
        .map((a) => ({
          id: a.id,
          title: a.title,
          score: a.score,
          display: a.displayValue,
        }));

      const scores = {
        page: pagePath,
        formFactor,
        performance: getScore(categories.performance),
        accessibility: getScore(categories.accessibility),
        bestPractices: getScore(categories["best-practices"]),
        seo: getScore(categories.seo),
        metrics: {
          fcp: metric("first-contentful-paint"),
          lcp: metric("largest-contentful-paint"),
          tbt: metric("total-blocking-time"),
          cls: metric("cumulative-layout-shift"),
          si: metric("speed-index"),
          tti: metric("interactive"),
        },
        runtimeError,
        failedAudits,
      };
      results.push(scores);

      const slug = (pagePath === "/" ? "home" : pagePath.replace(/^\//, "").replace(/\//g, "-")) || "home";
      const reportFile = join(REPORTS_DIR, `${slug}-${formFactor}.html`);
      writeFileSync(reportFile, runnerResult.report[0], "utf-8");
      console.log(
        `  perf=${scores.performance} a11y=${scores.accessibility} bp=${scores.bestPractices} seo=${scores.seo} -> ${reportFile}`
      );
    }
  }

  await browser.close();
  if (anonymousProxyUrl) {
    await ProxyChain.closeAnonymizedProxy(anonymousProxyUrl, true);
  }
  return results;
}

function printSummary(results) {
  console.log("\n" + "=".repeat(100));
  console.log("LIGHTHOUSE VERCEL AUDIT SUMMARY");
  console.log("=".repeat(100));

  console.table(
    results.map((r) => ({
      Page: r.page,
      Mode: r.formFactor,
      Perf: r.performance,
      A11y: r.accessibility,
      BP: r.bestPractices,
      SEO: r.seo,
      LCP: r.metrics?.lcp?.display ?? "-",
      FCP: r.metrics?.fcp?.display ?? "-",
      TBT: r.metrics?.tbt?.display ?? "-",
      CLS: r.metrics?.cls?.display ?? "-",
    }))
  );

  const jsonPath = join(REPORTS_DIR, "summary.json");
  writeFileSync(jsonPath, JSON.stringify(results, null, 2), "utf-8");
  console.log(`\nDetailed JSON summary: ${jsonPath}`);
  console.log(`HTML reports directory: ${REPORTS_DIR}`);
}

async function main() {
  const args = process.argv.slice(2);
  const pages = args.length > 0 ? args.filter((a) => a.startsWith("/")) : DEFAULT_PAGES;

  if (!existsSync(REPORTS_DIR)) {
    mkdirSync(REPORTS_DIR, { recursive: true });
  }

  console.log(`Auditing ${pages.length} pages on ${BASE_URL}\n`);
  const results = await runAudits(pages);
  printSummary(results);
}

main().catch((err) => {
  console.error("Lighthouse audit failed:", err);
  process.exit(1);
});
