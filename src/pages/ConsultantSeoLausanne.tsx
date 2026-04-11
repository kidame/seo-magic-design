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
  "Stratégie SEO adaptée au marché vaudois et à l'agglomération lausannoise",
  "Connaissance des secteurs clés : formation, santé, services, commerce de détail",
  "Référencement local pour capter les recherches \"près de moi\" à Lausanne",
  "Optimisation Google Business Profile pour la visibilité locale",
  "Tarifs forfaitaires en CHF, sans surprise",
  "Accompagnement à distance ou en présentiel selon vos besoins",
];

const villesVoisines = [
  { name: "Genève", href: "/consultant-seo-geneve" },
  { name: "Yverdon", href: "/consultant-seo-yverdon" },
  { name: "Fribourg", href: "/consultant-seo-fribourg" },
];

const ConsultantSeoLausanne = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "KUMO SEO - Consultant SEO Lausanne",
      description: "Consultant SEO pour PME à Lausanne et dans le canton de Vaud. Audit technique, création de sites et accompagnement SEO.",
      url: "https://kumo-seo.ch/consultant-seo-lausanne",
      areaServed: { "@type": "Place", name: "Lausanne" },
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
        { "@type": "ListItem", position: 3, name: "Lausanne", item: "https://kumo-seo.ch/consultant-seo-lausanne" },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <SeoHead
        title="Consultant SEO Lausanne | KUMO 蜘蛛 Canton de Vaud"
        description="Consultant SEO pour PME à Lausanne. Audit technique, création de sites web et accompagnement SEO dans le canton de Vaud. Forfaits fixes dès CHF 1'200."
        canonical="https://kumo-seo.ch/consultant-seo-lausanne"
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
                <BreadcrumbPage>Lausanne</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Hero */}
        <section className="container max-w-4xl mx-auto px-4 text-center mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="section-label mb-4">地域 Lausanne</p>
            <BlurText
              text="Consultant SEO à Lausanne."
              as="h1"
              className="text-4xl md:text-6xl font-bold tracking-tight mb-6 justify-center"
              delay={120}
              animateBy="words"
              direction="top"
            />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              J'accompagne les PME lausannoises et vaudoises dans leur visibilité sur Google.
              Audit technique, création de sites web et suivi SEO continu, avec des forfaits fixes et transparents.
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
              SEO pour les PME <span className="text-gradient">lausannoises.</span>
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

        {/* Le marché lausannois */}
        <section className="container max-w-3xl mx-auto px-4 mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="section-label mb-4">市場 Le marché local</p>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-6">
              Lausanne, un marché <span className="text-gradient">compétitif.</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Lausanne est la quatrième ville de Suisse et le coeur économique du canton de Vaud. La concurrence en ligne y est forte : cabinets, commerces, restaurants, prestataires de services - tous cherchent à apparaître en haut des résultats Google.
              </p>
              <p>
                Pour une PME lausannoise, le référencement local est un levier essentiel. Une fiche Google Business bien optimisée, un site techniquement propre et un contenu ciblé sur les requêtes locales peuvent faire la différence entre être trouvé ou rester invisible.
              </p>
              <p>
                Je travaille avec des PME de toute l'agglomération lausannoise - de Renens à Pully, de Morges à Vevey. Chaque stratégie est adaptée à votre zone de chalandise et à votre secteur d'activité.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Services */}
        <section className="container max-w-4xl mx-auto px-4 mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="section-label mb-4">提供 Services</p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
              Services SEO à <span className="text-gradient">Lausanne.</span>
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
          <Link to="/blog/creer-site-internet-pme-suisse-2026" className="glass-card p-6 hover:bg-card/80 transition-colors block">
            <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">Guide</p>
            <h3 className="font-bold mb-2">Créer un site internet en 2026</h3>
            <p className="text-sm text-muted-foreground">Ce qu'une PME suisse doit exiger de son prestataire.</p>
          </Link>
        </section>

        {/* CTA */}
        <section className="container max-w-3xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4">
              Votre PME lausannoise mérite d'être visible.
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

export default ConsultantSeoLausanne;
