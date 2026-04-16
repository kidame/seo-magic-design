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
    seo_title: "Votre site est invisible sur Google ? 5 causes fréquentes chez les PME suisses",
    seo_description: "Votre site web n'apparaît pas sur Google ? Découvrez les 5 causes les plus fréquentes chez les PME de Suisse romande et comment y remédier.",
    canonical: "https://kumo-seo.ch/blog/site-invisible-google-pme-suisse",
    og_title: "Pourquoi votre site est invisible sur Google (et comment y remédier)",
    og_description: "5 causes concrètes identifiées sur le terrain chez les PME de Suisse romande.",
    og_image: "/images/blog/site-invisible-google.jpg",
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
    primary_keyword: "audit SEO",
    secondary_keywords: ["audit SEO site", "audit référencement", "diagnostic SEO", "audit SEO prix Suisse"],
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
