import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

const mission90 = [
  "Audit technique complet (31 points)",
  "Recherche de mots-clés stratégiques",
  "Optimisation on-page & balisage Schema.org",
  "Maillage interne & architecture",
  "Analyse concurrentielle (3 concurrents)",
  "Plan d'action priorisé sur 90 jours",
  "Suivi de positionnement hebdomadaire",
  "Rapport de progression mensuel",
];

const retainers = [
  {
    name: "Essentiel",
    price: "490",
    kanji: "基本",
    features: [
      "Suivi de positionnement mensuel",
      "1 rapport SEO par mois",
      "Veille technique & algorithmes",
      "Support par email (48h)",
      "Recommandations mensuelles",
    ],
  },
  {
    name: "Avancé",
    price: "1'290",
    kanji: "高度",
    features: [
      "Tout le forfait Essentiel",
      "Optimisation continue du contenu",
      "Création de 2 contenus SEO/mois",
      "Stratégie de netlinking",
      "Appel mensuel de 30 min",
      "Rapport détaillé avec KPIs",
    ],
  },
];

const AccompagnementSeo = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Accompagnement SEO continu",
    description:
      "Accompagnement SEO mensuel pour PME suisses : mission 90 jours, suivi de positionnement, optimisation continue et rapports mensuels.",
    provider: {
      "@type": "ProfessionalService",
      name: "KUMO SEO",
      url: "https://kumo-seo.ch",
      areaServed: { "@type": "Place", name: "Suisse romande" },
    },
    areaServed: { "@type": "Place", name: "Suisse romande" },
    serviceType: "Accompagnement SEO",
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://kumo-seo.ch/" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://kumo-seo.ch/#services" },
      { "@type": "ListItem", position: 3, name: "Accompagnement SEO", item: "https://kumo-seo.ch/services/accompagnement-seo" },
    ],
  };

  return (
    <div className="min-h-screen">
      <SeoHead
        title="Accompagnement SEO continu — KUMO 蜘蛛 Consultant SEO Neuchâtel"
        description="Accompagnement SEO mensuel pour PME suisses : mission 90 jours, suivi de positionnement, optimisation continue. Dès CHF 490/mois."
        canonical="https://kumo-seo.ch/services/accompagnement-seo"
        jsonLd={jsonLd}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
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
                <BreadcrumbLink href="/#services">Services</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Accompagnement SEO</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Hero */}
        <section className="container max-w-4xl mx-auto px-4 text-center mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ willChange: "transform, opacity" }}>
            <p className="section-label mb-4">伴走 Accompagnement</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Accompagnement SEO <span className="text-gradient">continu.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Une mission initiale de 90 jours pour poser les fondations, puis un suivi mensuel
              pour maintenir et améliorer vos positions.
            </p>
            <Button variant="hero" size="lg" className="rounded-full" asChild>
              <Link to="/contact">
                Demander un devis <ArrowRight className="ml-1" size={18} />
              </Link>
            </Button>
          </motion.div>
        </section>

        {/* Mission 90 jours */}
        <section className="container max-w-4xl mx-auto px-4 mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="section-label mb-4">九十日 Phase initiale</p>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-8">
              Mission <span className="text-gradient">90 jours.</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-4">
            {mission90.map((item, i) => (
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

        {/* Forfaits retainer */}
        <section className="container max-w-4xl mx-auto px-4 mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="section-label mb-4">月額 Forfaits mensuels</p>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-8">
              Deux paliers <span className="text-gradient">d'accompagnement.</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-px bg-border/50 rounded-lg overflow-hidden">
            {retainers.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card p-8"
              >
                <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider mb-2">{plan.kanji} {plan.name}</p>
                <p className="text-3xl font-bold mb-1">
                  <span className="font-mono text-gold">CHF {plan.price}</span>
                  <span className="text-sm text-muted-foreground font-normal">/mois</span>
                </p>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check size={14} className="text-primary shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button variant="hero" size="sm" className="rounded-full mt-8 w-full" asChild>
                  <Link to="/contact">Demander un devis</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="container max-w-3xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4">
              Prêt à passer à l'action ?
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

export default AccompagnementSeo;
