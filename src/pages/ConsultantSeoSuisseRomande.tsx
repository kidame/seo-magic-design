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

const villes = [
  { name: "Neuchâtel", href: "/consultant-seo-neuchatel", desc: "Canton de Neuchâtel et Val-de-Travers" },
  { name: "Lausanne", href: "/consultant-seo-lausanne", desc: "Canton de Vaud et agglomération lausannoise" },
  { name: "Genève", href: "/consultant-seo-geneve", desc: "Canton de Genève et Grand Genève" },
  { name: "La Chaux-de-Fonds", href: "/consultant-seo-la-chaux-de-fonds", desc: "Montagnes neuchâteloises" },
  { name: "Bienne", href: "/consultant-seo-bienne", desc: "Seeland et Jura bernois" },
  { name: "Yverdon", href: "/consultant-seo-yverdon", desc: "Nord vaudois" },
  { name: "Fribourg", href: "/consultant-seo-fribourg", desc: "Canton de Fribourg" },
];

const pourquoi = [
  "Connaissance du marché suisse romand et de ses spécificités",
  "Tarifs en CHF, facturation suisse, pas de TVA cachée",
  "Accompagnement en français avec un interlocuteur unique",
  "Stratégie adaptée aux PME locales, pas aux multinationales",
  "Compréhension du tissu économique cantonal",
  "Proximité géographique pour les rendez-vous si nécessaire",
];

const ConsultantSeoSuisseRomande = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Consultant SEO en Suisse romande",
      description: "Consultant SEO indépendant pour PME de Suisse romande. Audit technique, création de sites web et accompagnement SEO continu.",
      provider: {
        "@type": "ProfessionalService",
        name: "KUMO SEO",
        url: "https://kumo-seo.ch",
        areaServed: { "@type": "Place", name: "Suisse romande" },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Val-de-Travers",
          addressRegion: "Neuchâtel",
          addressCountry: "CH",
        },
      },
      areaServed: [
        { "@type": "Place", name: "Neuchâtel" },
        { "@type": "Place", name: "Lausanne" },
        { "@type": "Place", name: "Genève" },
        { "@type": "Place", name: "Fribourg" },
        { "@type": "Place", name: "Suisse romande" },
      ],
      serviceType: "Consultant SEO",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://kumo-seo.ch/" },
        { "@type": "ListItem", position: 2, name: "Consultant SEO Suisse romande", item: "https://kumo-seo.ch/consultant-seo-suisse-romande" },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <SeoHead
        title="Consultant SEO Suisse romande | KUMO 蜘蛛 Neuchâtel"
        description="Consultant SEO indépendant en Suisse romande. Audit technique, création de sites et accompagnement SEO pour PME. Basé à Neuchâtel, actif dans toute la Romandie."
        canonical="https://kumo-seo.ch/consultant-seo-suisse-romande"
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
                <BreadcrumbPage>Consultant SEO Suisse romande</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Hero */}
        <section className="container max-w-4xl mx-auto px-4 text-center mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="section-label mb-4">地域 Suisse romande</p>
            <BlurText
              text="Consultant SEO en Suisse romande."
              as="h1"
              className="text-4xl md:text-6xl font-bold tracking-tight mb-6 justify-center"
              delay={120}
              animateBy="words"
              direction="top"
            />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Basé à Val-de-Travers dans le canton de Neuchâtel, j'accompagne les PME de toute la Suisse romande
              dans leur visibilité sur Google. Audit technique, création de sites web et suivi SEO continu.
            </p>
            <Button variant="hero" size="lg" className="rounded-full" asChild>
              <Link to="/contact">
                Diagnostic gratuit <ArrowRight className="ml-1" size={18} />
              </Link>
            </Button>
          </motion.div>
        </section>

        {/* Pourquoi un consultant local */}
        <section className="container max-w-4xl mx-auto px-4 mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="section-label mb-4">利点 Avantages</p>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-8">
              Pourquoi un consultant SEO <span className="text-gradient">local.</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-4">
            {pourquoi.map((item, i) => (
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

        {/* Zones couvertes */}
        <section className="container max-w-4xl mx-auto px-4 mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="section-label mb-4">地図 Zones couvertes</p>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4">
              Actif dans toute la <span className="text-gradient">Romandie.</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl">
              Je travaille avec des PME dans toute la Suisse romande. La majorité des échanges se font par visioconférence et email. Pour les clients proches, je me déplace volontiers.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border/50 rounded-lg overflow-hidden">
            {villes.map((ville, i) => (
              <motion.div
                key={ville.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link to={ville.href} className="bg-card p-6 hover:bg-card/80 transition-colors block h-full">
                  <h3 className="font-bold mb-1">{ville.name}</h3>
                  <p className="text-sm text-muted-foreground">{ville.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section className="container max-w-4xl mx-auto px-4 mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="section-label mb-4">提供 Services</p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
              Ce que je <span className="text-gradient">propose.</span>
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

        {/* Article lié */}
        <section className="container max-w-4xl mx-auto px-4 mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="section-label mb-4">記事 Sur le blog</p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
              Article <span className="text-gradient">lié.</span>
            </h2>
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
              Envie de savoir où en est votre site ?
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

export default ConsultantSeoSuisseRomande;
