import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import BlurText from "@/components/ui/blur-text";

const values = [
  { kanji: "透", title: "Transparence", desc: "Forfaits fixes, pas de frais cachés. Vous savez exactement ce que vous payez et ce que vous obtenez." },
  { kanji: "精", title: "Précision", desc: "Chaque recommandation est fondée sur des données. Pas de promesses vagues, des actions mesurables." },
  { kanji: "直", title: "Franchise", desc: "Je recommande uniquement les solutions adaptées à votre situation réelle. L'objectif est de vous conseiller avec justesse, dans votre intérêt." },
  { kanji: "独", title: "Indépendance", desc: "Un interlocuteur dédié, impliqué de la première analyse jusqu'aux résultats. Votre projet est suivi avec la même attention du début à la fin." },
];

const APropos = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    mainEntity: {
      "@type": "ProfessionalService",
      name: "KUMO SEO",
      description: "Consultant SEO indépendant basé à Neuchâtel, spécialisé dans l'audit technique et la création de sites web pour PME de Suisse romande.",
      url: "https://kumo-seo.ch",
      founder: { "@type": "Person", name: "KUMO SEO", jobTitle: "Consultant SEO" },
      areaServed: { "@type": "Place", name: "Suisse romande" },
      address: { "@type": "PostalAddress", addressLocality: "Val-de-Travers", addressRegion: "Neuchâtel", addressCountry: "CH" },
    },
  };

  return (
    <div className="min-h-screen">
      <SeoHead
        title="À propos | KUMO 蜘蛛 Consultant SEO Neuchâtel"
        description="Consultant SEO indépendant à Neuchâtel. Audit technique, création de sites web et accompagnement SEO pour PME de Suisse romande."
        canonical="https://kumo-seo.ch/a-propos"
        jsonLd={jsonLd}
      />
      <Navbar />
      <main className="pt-32 pb-24">
        {/* Hero */}
        <section className="container max-w-4xl mx-auto px-4 text-center mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="section-label mb-4">紹介 À propos</p>
            <BlurText
              text="Un consultant, pas une agence."
              as="h1"
              className="text-4xl md:text-6xl font-bold tracking-tight mb-6 justify-center"
              delay={120}
              animateBy="words"
              direction="top"
            />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Basé à Val-de-Travers dans le canton de Neuchâtel, j'accompagne les PME de Suisse romande
              dans leur visibilité Google. Audit technique, création de sites et accompagnement SEO continu.
            </p>
          </motion.div>
        </section>

        {/* Valeurs */}
        <section className="container max-w-4xl mx-auto px-4 mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="section-label mb-4">Valeurs</p>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-8">
              Ce qui guide <span className="text-gradient">mon travail.</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-px bg-border/50 rounded-lg overflow-hidden">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card p-8"
              >
                <span className="font-jp text-3xl text-primary mb-4 block">{v.kanji}</span>
                <h3 className="font-bold text-lg mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Approche */}
        <section className="container max-w-3xl mx-auto px-4 mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="section-label mb-4">方法 Approche</p>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-6">
              Méthode de <span className="text-gradient">travail.</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Chaque projet commence par un diagnostic approfondi. Je ne propose jamais de solution
                sans avoir d'abord compris le contexte, les objectifs et les contraintes.
              </p>
              <p>
                Mon approche repose sur des données mesurables : positionnement, trafic organique,
                Core Web Vitals, taux de conversion. Chaque action recommandée est priorisée par
                impact et effort.
              </p>
              <p>
                Je travaille en forfait fixe, avec un périmètre défini et des livrables clairs.
                Pas de surprise, pas de compteur horaire qui tourne. Vous savez exactement
                ce que vous obtenez pour votre investissement.
              </p>
            </div>
          </motion.div>
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
              <h3 className="font-bold mb-2">Audit SEO</h3>
              <p className="text-sm text-muted-foreground">31 points de contrôle, plan d'action 90 jours.</p>
            </Link>
            <Link to="/services/accompagnement-seo" className="bg-card p-6 hover:bg-card/80 transition-colors">
              <h3 className="font-bold mb-2">Accompagnement SEO</h3>
              <p className="text-sm text-muted-foreground">Suivi mensuel continu pour progresser dans Google.</p>
            </Link>
            <Link to="/services/creation-site-web" className="bg-card p-6 hover:bg-card/80 transition-colors">
              <h3 className="font-bold mb-2">Création de site</h3>
              <p className="text-sm text-muted-foreground">Sites web sur-mesure, optimisés SEO.</p>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="container max-w-3xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4">
              Envie d'en discuter ?
            </h2>
            <p className="text-muted-foreground mb-8">
              Diagnostic initial gratuit. Réponse personnelle sous 24 heures.
            </p>
            <Button variant="hero" size="lg" className="rounded-full" asChild>
              <Link to="/contact">
                Prendre contact <ArrowRight className="ml-1" size={18} />
              </Link>
            </Button>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default APropos;
