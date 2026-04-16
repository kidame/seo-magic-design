import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";

const files = process.argv.slice(2);
const out = {};

for (const f of files) {
  const html = readFileSync(f, "utf-8");
  // Lighthouse embeds its LHR inside a <script> tag as window.__LIGHTHOUSE_JSON__ or similar.
  // Recent versions embed as <script ... type="application/json" ...>JSON</script>
  // Try multiple strategies.
  let lhr = null;

  // Strategy 1: look for toLocaleString style injection
  const m1 = html.match(/window\.__LIGHTHOUSE_JSON__\s*=\s*(\{[\s\S]*?\});/);
  if (m1) {
    try { lhr = JSON.parse(m1[1]); } catch (e) {}
  }
  // Strategy 2: <script id="..." type="application/json"> ... </script>
  if (!lhr) {
    const m2 = html.match(/<script[^>]*type=["']application\/json["'][^>]*>([\s\S]*?)<\/script>/);
    if (m2) {
      try { lhr = JSON.parse(m2[1]); } catch (e) {}
    }
  }
  // Strategy 3: __LIGHTHOUSE_JSON__ = JSON.parse('...')
  if (!lhr) {
    const m3 = html.match(/__LIGHTHOUSE_JSON__\s*=\s*JSON\.parse\(([`'"])([\s\S]*?)\1\)/);
    if (m3) {
      try {
        // The content is a JSON string, possibly escape-encoded.
        const raw = m3[2].replace(/\\\\/g, "\\").replace(/\\'/g, "'").replace(/\\"/g, '"');
        lhr = JSON.parse(raw);
      } catch (e) {}
    }
  }

  if (!lhr) {
    out[f] = { error: "Could not extract LHR" };
    continue;
  }

  const cats = lhr.categories || {};
  const audits = lhr.audits || {};
  const summary = {
    fetchTime: lhr.fetchTime,
    finalUrl: lhr.finalUrl || lhr.finalDisplayedUrl,
    runWarnings: lhr.runWarnings,
    runtimeError: lhr.runtimeError,
    userAgent: lhr.userAgent,
    configSettings: {
      formFactor: lhr.configSettings?.formFactor,
      throttlingMethod: lhr.configSettings?.throttlingMethod,
    },
    categories: {},
    metrics: {},
    failedAudits: {},
  };

  for (const [k, c] of Object.entries(cats)) {
    summary.categories[k] = {
      score: c.score,
      auditRefs: c.auditRefs?.length,
    };
  }

  const metricIds = ["first-contentful-paint","largest-contentful-paint","speed-index","total-blocking-time","cumulative-layout-shift","interactive","server-response-time","max-potential-fid"];
  for (const id of metricIds) {
    if (audits[id]) {
      summary.metrics[id] = {
        score: audits[id].score,
        numericValue: audits[id].numericValue,
        displayValue: audits[id].displayValue,
      };
    }
  }

  // Collect failing/warning audits per category
  for (const [ckey, c] of Object.entries(cats)) {
    const fails = [];
    for (const ref of c.auditRefs || []) {
      const a = audits[ref.id];
      if (!a) continue;
      // Failing: score !== null && score < 0.9, or scoreDisplayMode = error
      const isFail = a.score !== null && a.score !== undefined && a.score < 0.9 && (ref.weight > 0 || ckey === "seo");
      const isError = a.scoreDisplayMode === "error" || a.errorMessage;
      const isOpp = a.details?.type === "opportunity" && a.details?.overallSavingsMs > 0;
      if (isFail || isError || isOpp) {
        fails.push({
          id: ref.id,
          title: a.title,
          score: a.score,
          weight: ref.weight,
          group: ref.group,
          displayValue: a.displayValue,
          errorMessage: a.errorMessage,
          scoreDisplayMode: a.scoreDisplayMode,
          savingsMs: a.details?.overallSavingsMs,
          savingsBytes: a.details?.overallSavingsBytes,
          items: a.details?.items?.slice(0, 5),
          description: a.description?.slice(0, 200),
        });
      }
    }
    summary.failedAudits[ckey] = fails;
  }

  out[f] = summary;
}

console.log(JSON.stringify(out, null, 2));
