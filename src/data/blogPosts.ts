export interface BlogPost {
  title: string;
  slug: string;
  description: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  reading_time: string;
  word_count: number;
  seo_title: string;
  seo_description: string;
  canonical: string;
  og_title: string;
  og_description: string;
  og_image: string;
  /** Thumbnail 16:9 SVG utilisée dans la grille du blog (BlogCard). */
  cover_image: string;
  /** Texte alternatif pour le thumbnail (a11y). */
  cover_alt: string;
  /** Hero 16:9 SVG 1920x1080 affiché en tête de l'article (ArticleHero). */
  hero_image: string;
  /** Texte alternatif du hero (a11y). Si absent, fallback sur cover_alt. */
  hero_alt?: string;
  primary_keyword: string;
  secondary_keywords: string[];
}

export const blogPosts: BlogPost[] = [
  {
    title: "Votre site existe mais Google l'ignore : 5 causes fréquentes chez les PME romandes",
    slug: "site-invisible-google-pme-suisse",
    description: "Découvrez pourquoi votre site n'apparaît pas sur Google en Suisse romande et comment corriger les 5 erreurs les plus courantes. Analyse terrain par KUMO.",
    date: "2026-03-30",
    author: "Thomas Puglisi",
    category: "Référencement naturel",
    tags: ["SEO", "PME", "Suisse romande", "visibilité Google", "référencement local"],
    reading_time: "8 min",
    word_count: 1550,
    seo_title: "Site invisible sur Google : 5 causes chez les PME suisses",
    seo_description: "Votre site web n'apparaît pas sur Google ? Découvrez les 5 causes les plus fréquentes chez les PME de Suisse romande et comment y remédier.",
    canonical: "https://kumo-seo.ch/blog/site-invisible-google-pme-suisse",
    og_title: "Pourquoi votre site est invisible sur Google (et comment y remédier)",
    og_description: "5 causes concrètes identifiées sur le terrain chez les PME de Suisse romande.",
    og_image: "/images/blog/site-invisible-google.jpg",
    cover_image: "/images/blog/thumb-site-invisible.svg",
    cover_alt: "Diagramme KUMO — toile d'araignée cartographiant les causes d'invisibilité Google pour les PME suisses",
    hero_image: "/images/blog/site-invisible-google-v2.svg",
    hero_alt: "Illustration éditoriale KUMO — toile d'araignée qui se dissout autour du mot invisible en italique, représentant un site absent des résultats Google",
    primary_keyword: "site invisible google suisse",
    secondary_keywords: ["référencement PME suisse romande", "pourquoi mon site n'apparaît pas sur google", "SEO local suisse", "visibilité google PME"],
  },
  {
    title: "Mise à jour Google mars 2026 : ce que ça change pour votre entreprise en Suisse",
    slug: "mise-a-jour-google-mars-2026-pme-suisse",
    description: "Google a déployé une mise à jour majeure en mars 2026. Voici ce que les PME suisses doivent savoir et les actions concrètes à prendre.",
    date: "2026-03-30",
    author: "Thomas Puglisi",
    category: "Actualité SEO",
    tags: ["Google update", "SEO 2026", "PME suisse", "spam update", "référencement naturel"],
    reading_time: "7 min",
    word_count: 1530,
    seo_title: "Mise à jour Google mars 2026 : impact pour les PME suisses",
    seo_description: "La dernière mise à jour de l'algorithme Google (mars 2026) impacte les PME. Ce qui change pour votre site et comment vous adapter.",
    canonical: "https://kumo-seo.ch/blog/mise-a-jour-google-mars-2026-pme-suisse",
    og_title: "Google Update mars 2026 : ce qui change pour les PME suisses",
    og_description: "Déploiement en moins de 20h, nouvelles règles anti-spam. Le point pour les entreprises romandes.",
    og_image: "/images/blog/google-update-mars-2026.jpg",
    cover_image: "/images/blog/thumb-google-update-mars-2026.svg",
    cover_alt: "Sismographe KUMO — onde de choc de la mise à jour Google mars 2026 sur les PME suisses",
    hero_image: "/images/blog/google-update-mars-2026.svg",
    hero_alt: "Diagramme sismique KUMO — pulse radial depuis l'épicentre et timeline T+0H à T+20H, visualisation du déploiement de la mise à jour Google de mars 2026",
    primary_keyword: "mise à jour google mars 2026",
    secondary_keywords: ["google update 2026 PME", "SEO suisse 2026", "spam update google", "référencement naturel 2026"],
  },
  {
    title: "Créer un site internet en 2026 : ce qu'une PME suisse doit exiger de son prestataire",
    slug: "creer-site-internet-pme-suisse-2026",
    description: "Avant d'investir 3000 à 10000 CHF dans un site web, voici les 7 critères concrets qu'une PME suisse doit vérifier. Guide sans jargon.",
    date: "2026-03-30",
    author: "Thomas Puglisi",
    category: "Création web",
    tags: ["création site internet", "PME suisse", "site web 2026", "prix site internet", "cahier des charges"],
    reading_time: "9 min",
    word_count: 2050,
    seo_title: "Créer un site internet en 2026 : guide pour PME suisses",
    seo_description: "Ce qu'une PME suisse doit exiger de son prestataire web en 2026. Performance, SEO, sécurité, hébergement. Guide complet par un consultant SEO à Neuchâtel.",
    canonical: "https://kumo-seo.ch/blog/creer-site-internet-pme-suisse-2026",
    og_title: "Créer un site internet en 2026 : ce qu'une PME suisse doit vraiment exiger",
    og_description: "7 critères concrets avant de signer un devis de site web. Par KUMO, Suisse romande.",
    og_image: "/images/blog/creer-site-internet-pme-suisse.jpg",
    cover_image: "/images/blog/thumb-creer-site-internet-pme-suisse.svg",
    cover_alt: "Plan architectural KUMO — 7 critères structurels d'un site web PME suisse en 2026",
    hero_image: "/images/blog/creer-site-internet-pme-suisse.svg",
    hero_alt: "Blueprint architectural KUMO — grille 12 colonnes, 7 bandes représentant les critères d'un site web PME 2026 et échelle de budget en francs suisses",
    primary_keyword: "création site internet suisse",
    secondary_keywords: ["créer site web PME", "prix site internet suisse romande", "site web sur-mesure suisse", "agence web suisse romande", "cahier des charges site web"],
  },
  {
    title: "Freelance SEO ou agence : comment choisir en Suisse romande",
    slug: "freelance-seo-vs-agence-suisse",
    description: "Freelance SEO vs agence web : avantages, inconvénients, prix. Guide objectif pour les PME de Suisse romande qui cherchent un prestataire SEO.",
    date: "2026-04-11",
    author: "Thomas Puglisi",
    category: "Référencement naturel",
    tags: ["SEO", "freelance", "agence", "Suisse romande", "choix prestataire"],
    reading_time: "8 min",
    word_count: 1800,
    seo_title: "Freelance SEO ou agence : que choisir en Suisse romande ?",
    seo_description: "Freelance SEO vs agence web : avantages, inconvénients, prix. Guide objectif pour les PME de Suisse romande qui cherchent un prestataire SEO.",
    canonical: "https://kumo-seo.ch/blog/freelance-seo-vs-agence-suisse",
    og_title: "Freelance SEO ou agence : comment choisir en Suisse romande",
    og_description: "Comparatif objectif freelance vs agence SEO pour les PME suisses. Prix, avantages, questions à poser.",
    og_image: "/images/blog/freelance-seo-vs-agence.jpg",
    cover_image: "/images/blog/thumb-freelance-seo-vs-agence.svg",
    cover_alt: "Diptyque comparatif KUMO — freelance SEO versus agence web en Suisse romande",
    hero_image: "/images/blog/freelance-seo-vs-agence.svg",
    hero_alt: "Diptyque éditorial KUMO — toile compacte à 8 rayons (freelance SEO) face à une toile à 16 rayons et plusieurs nœuds (agence web) pour illustrer le choix de prestataire en Suisse romande",
    primary_keyword: "freelance SEO Suisse",
    secondary_keywords: ["agence SEO Suisse romande", "consultant SEO indépendant", "choisir agence SEO", "prix SEO Suisse"],
  },
  {
    title: "Audit SEO : pourquoi c'est la première étape pour améliorer votre site",
    slug: "audit-seo-pourquoi-indispensable",
    description: "Découvrez pourquoi un audit SEO est indispensable avant toute action de référencement. Les 31 points de contrôle KUMO, livrables, prix et cas concrets pour les PME suisses.",
    date: "2026-04-11",
    author: "Thomas Puglisi",
    category: "Référencement naturel",
    tags: ["audit SEO", "référencement naturel", "PME suisse", "diagnostic SEO", "plan d'action"],
    reading_time: "9 min",
    word_count: 2000,
    seo_title: "Audit SEO : pourquoi c'est indispensable pour votre site",
    seo_description: "Découvrez pourquoi un audit SEO est indispensable avant toute action de référencement. Les 31 points de contrôle, livrables et prix pour les PME suisses.",
    canonical: "https://kumo-seo.ch/blog/audit-seo-pourquoi-indispensable",
    og_title: "Audit SEO : pourquoi c'est indispensable pour votre site",
    og_description: "31 points de contrôle, rapport interactif, plan d'action 90 jours. Ce que comprend un audit SEO professionnel pour les PME suisses.",
    og_image: "/images/blog/audit-seo-indispensable.jpg",
    cover_image: "/images/blog/thumb-audit-seo-indispensable.svg",
    cover_alt: "Grille de contrôle KUMO — 31 points de crosshair de l'audit SEO pour PME suisses",
    hero_image: "/images/blog/audit-seo-indispensable.svg",
    hero_alt: "Grille de contrôle KUMO — 31 crosshairs numérotés avec 5 points flagged et un hub central, représentation de la matrice d'audit SEO pour PME suisses",
    primary_keyword: "audit SEO",
    secondary_keywords: ["audit SEO site", "audit référencement", "diagnostic SEO", "audit SEO prix Suisse"],
  },
  {
    title: "PageSpeed Insights et Core Web Vitals : le guide pratique pour les PME suisses",
    slug: "pagespeed-insights-core-web-vitals-guide",
    description: "LCP, INP, CLS : comprendre les Core Web Vitals, lire un rapport PageSpeed Insights et savoir quel score viser en 2026 pour un site de PME suisse.",
    date: "2026-04-17",
    author: "Thomas Puglisi",
    category: "Performance web",
    tags: ["PageSpeed", "Core Web Vitals", "performance", "PME suisse", "SEO technique"],
    reading_time: "9 min",
    word_count: 2000,
    seo_title: "PageSpeed Insights : guide Core Web Vitals pour PME suisses",
    seo_description: "Comprendre PageSpeed Insights et les Core Web Vitals (LCP, INP, CLS). Seuils Google, outils et scores à viser pour un site de PME en 2026.",
    canonical: "https://kumo-seo.ch/blog/pagespeed-insights-core-web-vitals-guide",
    og_title: "PageSpeed Insights et Core Web Vitals : guide pour PME suisses",
    og_description: "Le guide pratique pour comprendre LCP, INP, CLS et viser le bon score PageSpeed en 2026.",
    og_image: "/images/blog/og-pagespeed-core-web-vitals.jpg",
    cover_image: "/images/blog/thumb-pagespeed-core-web-vitals.svg",
    cover_alt: "Diagramme KUMO — trois jauges LCP, INP et CLS aux seuils Google de performance web",
    hero_image: "/images/blog/pagespeed-core-web-vitals.svg",
    hero_alt: "Planche éditoriale KUMO — trois colonnes verticales représentant les métriques Core Web Vitals LCP, INP et CLS avec leurs zones vert/orange/rouge",
    primary_keyword: "pagespeed insights",
    secondary_keywords: ["core web vitals", "LCP INP CLS", "performance site web", "score pagespeed", "optimisation performance web PME"],
  },
  {
    title: "Audit SEO : le guide complet pour les PME suisses en 2026",
    slug: "audit-seo-guide-complet-pme-suisse",
    description: "Les 4 composantes d'un audit SEO, les outils pros (Search Console, Screaming Frog, PageSpeed), étude de cas chiffrée et prix 2026 en Suisse romande.",
    date: "2026-04-17",
    author: "Thomas Puglisi",
    category: "Audit SEO",
    tags: ["audit SEO", "Screaming Frog", "PME suisse", "Google Search Console", "SEO technique"],
    reading_time: "10 min",
    word_count: 2100,
    seo_title: "Audit SEO : guide complet 2026 pour les PME suisses",
    seo_description: "Comment se déroule un audit SEO professionnel en 2026 : 4 composantes, outils Screaming Frog et Search Console, étude de cas, prix en Suisse.",
    canonical: "https://kumo-seo.ch/blog/audit-seo-guide-complet-pme-suisse",
    og_title: "Audit SEO : guide complet 2026 pour les PME suisses",
    og_description: "Les 4 composantes, les outils, une étude de cas chiffrée et les tarifs en Suisse romande.",
    og_image: "/images/blog/og-audit-seo-guide-complet.jpg",
    cover_image: "/images/blog/thumb-audit-seo-guide-complet.svg",
    cover_alt: "Diagramme KUMO — quatre quadrants de l'audit SEO (technique, contenu, local, backlinks) pour PME suisses",
    hero_image: "/images/blog/audit-seo-guide-complet.svg",
    hero_alt: "Planche éditoriale KUMO — grille à quatre quadrants représentant les composantes d'un audit SEO (technique, contenu, local, backlinks) avec outils associés",
    primary_keyword: "audit SEO guide complet",
    secondary_keywords: ["audit SEO PME suisse", "Screaming Frog audit", "outils audit SEO", "prix audit SEO Suisse", "audit SEO 2026"],
  },
  {
    title: "Agence web à Neuchâtel : le guide complet pour bien choisir en 2026",
    slug: "agence-web-neuchatel-guide-choix-2026",
    description: "Agence, freelance ou plateforme Wix ? Comparatif technique, fourchettes de prix 2026 et checklist pour choisir un prestataire web à Neuchâtel.",
    date: "2026-04-17",
    author: "Thomas Puglisi",
    category: "Création web",
    tags: ["agence web", "Neuchâtel", "création site internet", "Wix vs WordPress", "freelance web"],
    reading_time: "8 min",
    word_count: 1770,
    seo_title: "Agence web Neuchâtel : comment bien choisir en 2026",
    seo_description: "Agence, freelance ou Wix à Neuchâtel ? Comparatif honnête, prix 2026 et 7 points à valider avant de signer un devis. Guide KUMO.",
    canonical: "https://kumo-seo.ch/blog/agence-web-neuchatel-guide-choix-2026",
    og_title: "Agence web Neuchâtel : le guide complet 2026",
    og_description: "Comparatif agence, freelance, plateforme. Fourchettes de prix et checklist pour bien choisir son prestataire web à Neuchâtel.",
    og_image: "/images/blog/og-agence-web-neuchatel.jpg",
    cover_image: "/images/blog/thumb-agence-web-neuchatel.svg",
    cover_alt: "Diagramme KUMO — triptyque comparant agence web, freelance et plateforme Wix pour PME à Neuchâtel",
    hero_image: "/images/blog/agence-web-neuchatel.svg",
    hero_alt: "Planche éditoriale KUMO — triptyque comparant les trois options de création de site web (agence, freelance, plateforme SaaS) avec tarifs et critères",
    primary_keyword: "agence web Neuchâtel",
    secondary_keywords: ["création site web Neuchâtel", "prix site internet Suisse", "Wix vs WordPress", "freelance web Neuchâtel", "agence web 2026"],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("fr-CH", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
