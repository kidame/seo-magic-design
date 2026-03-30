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

const blocs = [
  {
    kanji: "技術",
    title: "Audit technique",
    subtitle: "31 points de contrôle",
    items: [
      "Infrastructure, indexation et sécurité",
      "Performance et vitesse de chargement",
      "Structure et balisage du site",
      "Compatibilité mobile",
    ],
  },
  {
    kanji: "性能",
    title: "Performance & données",
    subtitle: "Métriques réelles",
    items: [
      "Analyse des données de trafic",
      "Identification des pages performantes",
      "Diagnostic des erreurs techniques",
    ],
  },
  {
    kanji: "競合",
    title: "Analyse concurrentielle",
    subtitle: "Vos concurrents directs",
    items: [
      "Positionnement comparé",
      "Opportunités identifiées",
      "Forces et faiblesses du marché",
    ],
  },
  {
    kanji: "鍵語",
    title: "Mots-clés & contenu",
    subtitle: "Stratégie de positionnement",
    items: [
      "Mots-clés à fort potentiel",
      "Opportunités de contenu",
      "Plan d'action priorisé",
    ],
  },
];

const Rapport = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Rapport d'audit SEO — Structure et livrables",
    description: "Découvrez la structure du rapport d'audit SEO KUMO : 31 points de contrôle, analyse concurrentielle, performance et mots-clés stratégiques.",
    url: "https://kumo-seo.ch/rapport",
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
      { "@type": "ListItem", position: 2, name: "Rapport", item: "https://kumo-seo.ch/rapport" },
    ],
  };

  return (
    <div className="min-h-screen">
      <SeoHead
        title="Rapport d'audit SEO — KUMO 蜘蛛 Consultant SEO Neuchâtel"
        description="Structure du rapport d'audit SEO KUMO : 31 points techniques, analyse de performance, étude concurrentielle et recherche de mots-clés stratégiques."
        canonical="https://kumo-seo.ch/rapport"
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
                <BreadcrumbPage>Rapport</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Hero */}
        <section className="container max-w-4xl mx-auto px-4 text-center mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ willChange: "transform, opacity" }}>
            <p className="section-label mb-4">報告 Rapport</p>
            <BlurText
              text="Structure du rapport."
              as="h1"
              className="text-4xl md:text-6xl font-bold tracking-tight mb-6 justify-center"
              delay={120}
              animateBy="words"
              direction="top"
            />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Chaque audit produit un rapport structuré en 4 sections.
              Voici ce que vous recevez.
            </p>
          </motion.div>
        </section>

        {/* 4 blocs */}
        <section className="container max-w-4xl mx-auto px-4 mb-24">
          <div className="grid md:grid-cols-2 gap-px bg-border/50 rounded-lg overflow-hidden">
            {blocs.map((bloc, i) => (
              <motion.div
                key={bloc.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card p-8"
              >
                <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider mb-1">{bloc.kanji}</p>
                <h2 className="text-xl font-bold mb-1">{bloc.title}</h2>
                <p className="text-sm text-muted-foreground mb-4">{bloc.subtitle}</p>
                <ul className="space-y-2">
                  {bloc.items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1 text-xs">&#9632;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="container max-w-3xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4">
              Prêt à recevoir votre rapport ?
            </h2>
            <p className="text-muted-foreground mb-8">
              Diagnostic initial gratuit. Réponse personnelle sous 24 heures.
            </p>
            <Button variant="hero" size="lg" className="rounded-full" asChild>
              <Link to="/contact">
                Demander un audit <ArrowRight className="ml-1" size={18} />
              </Link>
            </Button>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Rapport;
