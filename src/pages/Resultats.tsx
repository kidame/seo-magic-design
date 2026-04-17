import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import BlurText from "@/components/ui/blur-text";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

const Resultats = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Résultats & études de cas | KUMO SEO",
    description: "Études de cas et résultats concrets d'accompagnement SEO pour PME suisses. Page en construction.",
    url: "https://kumo-seo.ch/resultats",
    publisher: {
      "@type": "ProfessionalService",
      name: "KUMO SEO",
      url: "https://kumo-seo.ch",
    },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://kumo-seo.ch/" },
      { "@type": "ListItem", position: 2, name: "Résultats", item: "https://kumo-seo.ch/resultats" },
    ],
  };

  return (
    <div className="min-h-screen">
      <SeoHead
        title="Résultats & études de cas SEO | KUMO Neuchâtel"
        description="Études de cas et résultats concrets d'accompagnement SEO pour PME suisses romandes. Bientôt disponible."
        canonical="https://kumo-seo.ch/resultats"
        jsonLd={jsonLd}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <Navbar />
      <main id="main-content" className="pt-32 pb-24">
        {/* Breadcrumb */}
        <div className="container max-w-4xl mx-auto px-4 mb-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild><Link to="/">Accueil</Link></BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Résultats</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Hero */}
        <section className="container max-w-3xl mx-auto px-4 text-center mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ willChange: "transform, opacity" }}>
            <p className="section-label mb-4">成果 Résultats</p>
            <BlurText
              text="Résultats concrets."
              as="h1"
              className="text-4xl md:text-6xl font-bold tracking-tight mb-6 justify-center"
              delay={120}
              animateBy="words"
              direction="top"
            />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
              Les premières études de cas seront publiées prochainement.
              En attendant, demandez votre diagnostic gratuit pour découvrir
              le potentiel SEO de votre site.
            </p>
          </motion.div>
        </section>

        {/* Placeholder */}
        <section className="container max-w-3xl mx-auto px-4 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-12 text-center"
          >
            <p className="text-6xl mb-4 font-jp text-primary-light">準備中</p>
            <p className="text-muted-foreground text-sm">En préparation</p>
          </motion.div>
        </section>

        {/* Liens services */}
        <section className="container max-w-3xl mx-auto px-4 mb-24 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-wrap justify-center gap-4">
            <Link to="/services/audit-seo" className="text-sm text-primary-light hover:text-primary/80 transition-colors inline-flex items-center gap-1 font-medium">
              Audit SEO technique <ArrowRight size={14} />
            </Link>
            <Link to="/services/accompagnement-seo" className="text-sm text-primary-light hover:text-primary/80 transition-colors inline-flex items-center gap-1 font-medium">
              Accompagnement SEO <ArrowRight size={14} />
            </Link>
            <Link to="/rapport" className="text-sm text-primary-light hover:text-primary/80 transition-colors inline-flex items-center gap-1 font-medium">
              Structure du rapport <ArrowRight size={14} />
            </Link>
          </motion.div>
        </section>

        {/* CTA */}
        <section className="container max-w-3xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4">
              Devenez notre prochaine étude de cas.
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

export default Resultats;
