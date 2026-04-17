export const SITE_URL = "https://kumo-seo.ch";

// Source unique pour toutes les routes du site.
// - path : chemin de la route
// - priority : priorite sitemap (0.0-1.0)
// - changefreq : frequence de modification sitemap
// - sitemap : true par defaut, false pour exclure du sitemap (ex: /rapport)
export const ROUTES = [
  // Homepage
  { path: "/", priority: 1.0, changefreq: "weekly" },

  // Services
  { path: "/services/audit-seo", priority: 0.9, changefreq: "monthly" },
  { path: "/services/accompagnement-seo", priority: 0.9, changefreq: "monthly" },
  { path: "/services/creation-site-web", priority: 0.9, changefreq: "monthly" },

  // Pages institutionnelles
  { path: "/a-propos", priority: 0.7, changefreq: "monthly" },
  { path: "/contact", priority: 0.8, changefreq: "monthly" },
  { path: "/faq", priority: 0.7, changefreq: "monthly" },
  { path: "/rapport", priority: 0, changefreq: "monthly", sitemap: false },
  { path: "/resultats", priority: 0.7, changefreq: "monthly" },

  // Pages legales
  { path: "/mentions-legales", priority: 0.3, changefreq: "yearly" },
  { path: "/cgv", priority: 0.3, changefreq: "yearly" },
  { path: "/politique-de-confidentialite", priority: 0.3, changefreq: "yearly" },

  // Blog
  { path: "/blog", priority: 0.8, changefreq: "weekly" },
  { path: "/blog/site-invisible-google-pme-suisse", priority: 0.7, changefreq: "monthly" },
  { path: "/blog/mise-a-jour-google-mars-2026-pme-suisse", priority: 0.7, changefreq: "monthly" },
  { path: "/blog/creer-site-internet-pme-suisse-2026", priority: 0.7, changefreq: "monthly" },
  { path: "/blog/freelance-seo-vs-agence-suisse", priority: 0.7, changefreq: "monthly" },
  { path: "/blog/audit-seo-pourquoi-indispensable", priority: 0.7, changefreq: "monthly" },
  { path: "/blog/pagespeed-insights-core-web-vitals-guide", priority: 0.7, changefreq: "monthly" },
  { path: "/blog/audit-seo-guide-complet-pme-suisse", priority: 0.7, changefreq: "monthly" },
  { path: "/blog/agence-web-neuchatel-guide-choix-2026", priority: 0.7, changefreq: "monthly" },

  // Pages locales
  { path: "/consultant-seo-suisse-romande", priority: 0.8, changefreq: "monthly" },
  { path: "/consultant-seo-neuchatel", priority: 0.7, changefreq: "monthly" },
  { path: "/consultant-seo-lausanne", priority: 0.7, changefreq: "monthly" },
  { path: "/consultant-seo-geneve", priority: 0.7, changefreq: "monthly" },
  { path: "/consultant-seo-la-chaux-de-fonds", priority: 0.7, changefreq: "monthly" },
];
