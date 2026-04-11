import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import BlurText from "@/components/ui/blur-text";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

const specificites = [
  "Basé à Val-de-Travers, au coeur du canton de Neuchâtel",
  "Connaissance du tissu économique neuchâtelois : horlogerie, microtechniques, PME locales",
  "Stratégie SEO adaptée aux recherches locales (Google Maps, fiche Google Business)",
  "Disponible pour des rendez-vous en personne dans tout le canton",
  "Tarifs forfaitaires transparents, adaptés aux budgets PME",
  "Expérience avec les secteurs industriels et de services de la région",
];

const villesVoisines = [
  { name: "La Chaux-de-Fonds", href: "/consultant-seo-la-chaux-de-fonds" },
  { name: "Bienne", href: "/consultant-seo-bienne" },
  { name: "Yverdon", href: "/consultant-seo-yverdon" },
];

const ConsultantSeoNeuchatel = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "KUMO SEO - Consultant SEO Neuchâtel",
      description: "Consultant SEO indépendant à Neuchâtel. Audit technique, création de sites web et accompagnement SEO pour PME du canton de Neuchâtel.",
      url: "https://kumo-seo.ch/consultant-seo-neuchatel",
      areaServed: { "@type": "Place", name: "Neuchâtel" },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Val-de-Travers",
        addressRegion: "Neuchâtel",
        addressCountry: "CH",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 46.9333,
        longitude: 6.6333,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://kumo-seo.ch/" },
        { "@type": "ListItem", position: 2, name: "Consultant SEO Suisse romande", item: "https://kumo-seo.ch/consultant-seo-suisse-romande" },
        { "@type": "ListItem", position: 3, name: "Neuchâtel", item: "https://kumo-seo.ch/consultant-seo-neuchatel" },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <SeoHead
        title="Consultant SEO Neuchâtel | KUMO 蜘蛛 Val-de-Travers"
        description="Consultant SEO à Neuchâtel. Audit technique, création de sites et accompagnement SEO pour PME neuchâteloises. Basé à Val-de-Travers."
        canonical="https://kumo-seo.ch/consultant-seo-neuchatel"
        jsonLd={jsonLd}
      />
      <Navbar />
      <main className="pt-32 pb-24">
        {/* Breadcrumb */}
        <div className="container max-w-4xl mx-auto px-4 mb-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild><Link to="/">Accueil</Link></BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild><Link to="/consultant-seo-suisse-romande">Consultant SEO</Link></BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Neuchâtel</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Hero */}
        <section className="container max-w-4xl mx-auto px-4 text-center mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="section-label mb-4">地域 Neuchâtel</p>
            <BlurText
              text="Consultant SEO à Neuchâtel."
              as="h1"
              className="text-4xl md:text-6xl font-bold tracking-tight mb-6 justify-center"
              delay={120}
              animateBy="words"
              direction="top"
            />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Basé à Val-de-Travers, j'aide les PME du canton de Neuchâtel à gagner en visibilité sur Google.
              Un interlocuteur unique, des forfaits fixes, des résultats mesurables.
            </p>
            <Button variant="hero" size="lg" className="rounded-full" asChild>
              <Link to="/contact">
                Diagnostic gratuit <ArrowRight className="ml-1" size={18} />
              </Link>
            </Button>
          </motion.div>
        </section>

        {/* Spécificités locales */}
        <section className="container max-w-4xl mx-auto px-4 mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="section-label mb-4">特長 Pourquoi Neuchâtel</p>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-8">
              Un consultant SEO <span className="text-gradient">ancré localement.</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-4">
            {specificites.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 glass-card p-4"
              >
                <Check size={16} className="text-primary shrink-0" />
                <span className="text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Le marché neuchâtelois */}
        <section className="container max-w-3xl mx-auto px-4 mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="section-label mb-4">市場 Le marché local</p>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-6">
              Le SEO pour les PME <span className="text-gradient">neuchâteloises.</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Le canton de Neuchâtel compte un tissu dense de PME dans l'horlogerie, les microtechniques, l'industrie et les services. Beaucoup ont un site web, mais peu sont réellement visibles sur Google pour les recherches qui comptent.
              </p>
              <p>
                Un artisan à La Chaux-de-Fonds, un cabinet à Neuchâtel ville, un commerce au Val-de-Travers - chacun peut capter des clients via la recherche locale. Le référencement local (Google Maps, fiche Google Business) est souvent le levier le plus rentable pour une PME neuchâteloise.
              </p>
              <p>
                En tant que consultant basé dans le canton, je comprends ces réalités. Je ne propose pas de solutions génériques : chaque recommandation est calibrée pour votre marché, votre zone de chalandise et votre budget.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Services */}
        <section className="container max-w-4xl mx-auto px-4 mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="section-label mb-4">提供 Services</p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
              Services SEO à <span className="text-gradient">Neuchâtel.</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-px bg-border/50 rounded-lg overflow-hidden">
            <Link to="/services/audit-seo" className="bg-card p-6 hover:bg-card/80 transition-colors">
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">検査 Audit</p>
              <h3 className="font-bold mb-2">Audit SEO technique</h3>
              <p className="text-sm text-muted-foreground">31 points de contrôle, plan d'action 90 jours. CHF 1'200.</p>
            </Link>
            <Link to="/services/creation-site-web" className="bg-card p-6 hover:bg-card/80 transition-colors">
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">制作 Création</p>
              <h3 className="font-bold mb-2">Site web sur-mesure</h3>
              <p className="text-sm text-muted-foreground">Sites codés en React, optimisés SEO. Dès CHF 3'900.</p>
            </Link>
            <Link to="/services/accompagnement-seo" className="bg-card p-6 hover:bg-card/80 transition-colors">
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">伴走 Suivi</p>
              <h3 className="font-bold mb-2">Accompagnement SEO</h3>
              <p className="text-sm text-muted-foreground">Suivi mensuel continu. Dès CHF 250/mois.</p>
            </Link>
          </div>
        </section>

        {/* Villes voisines */}
        <section className="container max-w-4xl mx-auto px-4 mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="section-label mb-4">近隣 Régions voisines</p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
              Également actif <span className="text-gradient">à proximité.</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-px bg-border/50 rounded-lg overflow-hidden mb-4">
            {villesVoisines.map((ville, i) => (
              <motion.div
                key={ville.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link to={ville.href} className="bg-card p-6 hover:bg-card/80 transition-colors block">
                  <h3 className="font-bold mb-1">Consultant SEO {ville.name}</h3>
                </Link>
              </motion.div>
            ))}
          </div>
          <Link to="/consultant-seo-suisse-romande" className="text-sm text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1 font-medium">
            Toutes les zones couvertes <ArrowRight size={14} />
          </Link>
        </section>

        {/* Article lié */}
        <section className="container max-w-4xl mx-auto px-4 mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="section-label mb-4">記事 Sur le blog</p>
          </motion.div>
          <Link to="/blog/site-invisible-google-pme-suisse" className="glass-card p-6 hover:bg-card/80 transition-colors block">
            <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">Guide</p>
            <h3 className="font-bold mb-2">Votre site est invisible sur Google ?</h3>
            <p className="text-sm text-muted-foreground">5 causes fréquentes chez les PME romandes et comment y remédier.</p>
          </Link>
        </section>

        {/* CTA */}
        <section className="container max-w-3xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4">
              Votre PME neuchâteloise mérite d'être visible.
            </h2>
            <p className="text-muted-foreground mb-8">
              Diagnostic initial gratuit. Réponse personnelle sous 24 heures.
            </p>
            <Button variant="hero" size="lg" className="rounded-full" asChild>
              <Link to="/contact">
                Diagnostic gratuit <ArrowRight className="ml-1" size={18} />
              </Link>
            </Button>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ConsultantSeoNeuchatel;
