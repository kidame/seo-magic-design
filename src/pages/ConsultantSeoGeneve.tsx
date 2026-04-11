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
  "Stratégie SEO adaptée au marché genevois et à sa dimension internationale",
  "Connaissance des secteurs clés : finance, horlogerie, commerce international, santé",
  "Référencement bilingue possible (français/anglais) pour les entreprises du Grand Genève",
  "Optimisation Google Business Profile pour la visibilité locale",
  "Tarifs forfaitaires en CHF, transparents et prévisibles",
  "Accompagnement à distance ou en présentiel selon vos besoins",
];

const villesVoisines = [
  { name: "Lausanne", href: "/consultant-seo-lausanne" },
];

const ConsultantSeoGeneve = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "KUMO SEO - Consultant SEO Genève",
      description: "Consultant SEO pour PME à Genève. Audit technique, création de sites et accompagnement SEO dans le canton de Genève et le Grand Genève.",
      url: "https://kumo-seo.ch/consultant-seo-geneve",
      areaServed: { "@type": "Place", name: "Genève" },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Val-de-Travers",
        addressRegion: "Neuchâtel",
        addressCountry: "CH",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://kumo-seo.ch/" },
        { "@type": "ListItem", position: 2, name: "Consultant SEO Suisse romande", item: "https://kumo-seo.ch/consultant-seo-suisse-romande" },
        { "@type": "ListItem", position: 3, name: "Genève", item: "https://kumo-seo.ch/consultant-seo-geneve" },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <SeoHead
        title="Consultant SEO Genève | KUMO 蜘蛛 Suisse romande"
        description="Consultant SEO pour PME à Genève. Audit technique, création de sites web et accompagnement SEO dans le canton de Genève. Forfaits fixes dès CHF 1'200."
        canonical="https://kumo-seo.ch/consultant-seo-geneve"
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
                <BreadcrumbPage>Genève</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Hero */}
        <section className="container max-w-4xl mx-auto px-4 text-center mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="section-label mb-4">地域 Genève</p>
            <BlurText
              text="Consultant SEO à Genève."
              as="h1"
              className="text-4xl md:text-6xl font-bold tracking-tight mb-6 justify-center"
              delay={120}
              animateBy="words"
              direction="top"
            />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              J'accompagne les PME genevoises dans leur visibilité sur Google.
              Audit technique, création de sites web et suivi SEO continu, avec des forfaits fixes et sans surprises.
            </p>
            <Button variant="hero" size="lg" className="rounded-full" asChild>
              <Link to="/contact">
                Diagnostic gratuit <ArrowRight className="ml-1" size={18} />
              </Link>
            </Button>
          </motion.div>
        </section>

        {/* Spécificités */}
        <section className="container max-w-4xl mx-auto px-4 mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="section-label mb-4">特長 Pourquoi KUMO</p>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-8">
              SEO pour les PME <span className="text-gradient">genevoises.</span>
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

        {/* Le marché genevois */}
        <section className="container max-w-3xl mx-auto px-4 mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="section-label mb-4">市場 Le marché local</p>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-6">
              Genève, un marché <span className="text-gradient">exigeant.</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Genève est la deuxième ville de Suisse et un centre économique international. La concurrence en ligne y est particulièrement forte, avec des entreprises locales qui rivalisent avec des acteurs internationaux sur les mêmes requêtes Google.
              </p>
              <p>
                Pour une PME genevoise, se démarquer dans les résultats de recherche demande une stratégie ciblée. Le référencement local, l'optimisation de la fiche Google Business et un contenu de qualité en français (et parfois en anglais) sont des leviers essentiels.
              </p>
              <p>
                Le Grand Genève, avec sa dimension transfrontalière, offre aussi des opportunités : capter les recherches depuis la France voisine, se positionner sur des requêtes bilingues, et couvrir une zone de chalandise élargie.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Services */}
        <section className="container max-w-4xl mx-auto px-4 mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="section-label mb-4">提供 Services</p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
              Services SEO à <span className="text-gradient">Genève.</span>
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

        {/* Ville voisine */}
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
          <Link to="/blog/mise-a-jour-google-mars-2026-pme-suisse" className="glass-card p-6 hover:bg-card/80 transition-colors block">
            <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">Actualité</p>
            <h3 className="font-bold mb-2">Mise à jour Google mars 2026</h3>
            <p className="text-sm text-muted-foreground">Ce que ça change pour votre entreprise en Suisse.</p>
          </Link>
        </section>

        {/* CTA */}
        <section className="container max-w-3xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4">
              Votre PME genevoise mérite d'être visible.
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

export default ConsultantSeoGeneve;
