// Simulation de revenu KUMO - Consultant SEO freelance Suisse romande
// Lancer : node scripts/revenue-simulation.mjs
// Sortie : 3 scenarios (pessimiste/realiste/optimiste) sur 24 mois, CHF.
//
// Hypotheses documentees dans REVENUE-SIMULATION.md section "Modele".

const PRICES = {
  audit: 1200, // Forfait audit SEO - une fois
  suivi: 590, // Mensuel moyen pondere (paliers 250/590/1490, milieu realiste)
  web: 5000, // Moyenne Essentiel/Pro/Premium (3900/4900/6500)
  mandat: 2900, // Mandat 90j - une fois
};

const SCENARIOS = {
  pessimiste: {
    description: "Migration retardee, contenu stagnant, 0 outreach, conversion basse",
    // Traffic SEO organique par mois (visites)
    trafficRamp: (m) => Math.round(5 * Math.pow(1.15, m)),
    leadConvRate: 0.01, // 1% visites -> leads
    outreachLeadsPerMonth: 0,
    closeRate: 0.12, // 12% leads -> clients
    mix: { audit: 0.5, suivi: 0.2, web: 0.2, mandat: 0.1 },
    churnMonthly: 0.15, // -15 %/mois sur MRR
  },
  realiste: {
    description:
      "Migration kumo-seo.ch M1, 1-2 articles/mois, 1-2 leads/mois via reseau/LinkedIn",
    trafficRamp: (m) => Math.round(15 * Math.pow(1.2, m)),
    leadConvRate: 0.02,
    outreachLeadsPerMonth: 1.5,
    closeRate: 0.2,
    mix: { audit: 0.45, suivi: 0.3, web: 0.15, mandat: 0.1 },
    churnMonthly: 0.1,
  },
  optimiste: {
    description:
      "Execution des 5 recos du rapport positionnement : migration, 6 articles, 3 pages villes, /tarifs, fix tech. Plus 3 leads/mois outreach actif.",
    trafficRamp: (m) => Math.round(25 * Math.pow(1.25, m)),
    leadConvRate: 0.025,
    outreachLeadsPerMonth: 3,
    closeRate: 0.25,
    mix: { audit: 0.4, suivi: 0.35, web: 0.15, mandat: 0.1 },
    churnMonthly: 0.07,
  },
};

function simulate(name, scenario, months = 24) {
  const rows = [];
  let activeMRR = 0;
  let cumulative = 0;
  let totalClientsLifetime = 0;

  for (let m = 1; m <= months; m++) {
    const traffic = scenario.trafficRamp(m);
    const seoLeads = traffic * scenario.leadConvRate;
    const outreachLeads = scenario.outreachLeadsPerMonth;
    const totalLeads = seoLeads + outreachLeads;
    const newClients = totalLeads * scenario.closeRate;
    totalClientsLifetime += newClients;

    const newAudit = newClients * scenario.mix.audit;
    const newSuivi = newClients * scenario.mix.suivi;
    const newWeb = newClients * scenario.mix.web;
    const newMandat = newClients * scenario.mix.mandat;

    // Churn appliquee d'abord, puis nouveaux abonnes ajoutes
    activeMRR = activeMRR * (1 - scenario.churnMonthly);
    activeMRR += newSuivi * PRICES.suivi;

    const oneShot =
      newAudit * PRICES.audit +
      newWeb * PRICES.web +
      newMandat * PRICES.mandat;
    const monthlyRevenue = oneShot + activeMRR;
    cumulative += monthlyRevenue;

    rows.push({
      m,
      traffic,
      leads: +totalLeads.toFixed(1),
      clients: +newClients.toFixed(2),
      mrr: Math.round(activeMRR),
      oneShot: Math.round(oneShot),
      revenue: Math.round(monthlyRevenue),
      cumul: Math.round(cumulative),
    });
  }

  return { name, scenario, rows, totalClientsLifetime };
}

function mdTable(rows) {
  const header =
    "| Mois | Trafic | Leads | Nouveaux clients | MRR (CHF) | One-shot (CHF) | Revenu mois (CHF) | Cumul (CHF) |";
  const sep = "|---:|---:|---:|---:|---:|---:|---:|---:|";
  const body = rows
    .map(
      (r) =>
        `| ${r.m} | ${r.traffic.toLocaleString("fr-CH")} | ${r.leads} | ${r.clients} | ${r.mrr.toLocaleString("fr-CH")} | ${r.oneShot.toLocaleString("fr-CH")} | ${r.revenue.toLocaleString("fr-CH")} | ${r.cumul.toLocaleString("fr-CH")} |`
    )
    .join("\n");
  return [header, sep, body].join("\n");
}

function summary(rows) {
  const m12 = rows[11];
  const m24 = rows[23];
  const firstMonthOver1k = rows.find((r) => r.revenue >= 1000);
  const firstMonthOver5k = rows.find((r) => r.revenue >= 5000);
  return {
    cumul12: m12.cumul,
    cumul24: m24.cumul,
    mrrM24: m24.mrr,
    revenueM24: m24.revenue,
    firstMonthOver1k: firstMonthOver1k?.m ?? null,
    firstMonthOver5k: firstMonthOver5k?.m ?? null,
  };
}

function main() {
  const results = {};
  for (const [name, s] of Object.entries(SCENARIOS)) {
    results[name] = simulate(name, s, 24);
  }

  console.log("\n==== SIMULATION REVENU KUMO - 24 MOIS ====\n");
  for (const [name, r] of Object.entries(results)) {
    console.log(`\n--- ${name.toUpperCase()} ---`);
    console.log(r.scenario.description);
    console.log("");
    console.log(mdTable(r.rows));
    console.log("");
    const s = summary(r.rows);
    console.log(`Cumul 12 mois : CHF ${s.cumul12.toLocaleString("fr-CH")}`);
    console.log(`Cumul 24 mois : CHF ${s.cumul24.toLocaleString("fr-CH")}`);
    console.log(`MRR fin M24   : CHF ${s.mrrM24.toLocaleString("fr-CH")}`);
    console.log(
      `Revenu M24    : CHF ${s.revenueM24.toLocaleString("fr-CH")}`
    );
    console.log(
      `Premier mois >= CHF 1'000 : ${s.firstMonthOver1k ?? "jamais"}`
    );
    console.log(
      `Premier mois >= CHF 5'000 : ${s.firstMonthOver5k ?? "jamais"}`
    );
  }
}

main();
