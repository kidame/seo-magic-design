import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const checkpoints = [
  "Indexation & crawlabilité",
  "Performance Core Web Vitals",
  "Architecture de l'information",
  "Balisage sémantique & Schema.org",
  "Maillage interne",
  "Optimisation mobile",
  "Analyse des backlinks",
  "Audit de contenu & mots-clés",
  "Analyse de 3 concurrents directs",
  "Plan d'action priorisé sur 90 jours",
];

const deliverables = [
  { title: "Rapport technique", desc: "31 points de contrôle analysés avec recommandations détaillées et priorités." },
  { title: "Analyse concurrentielle", desc: "Étude de 3 concurrents directs : positionnement, mots-clés, backlinks." },
  { title: "Plan d'action 90 jours", desc: "Feuille de route priorisée avec quick wins et actions structurelles." },
];

const AuditSeo = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Audit SEO technique",
    description: "Audit SEO technique complet : 31 points de contrôle, analyse concurrentielle et plan d'action 90 jours pour PME suisses.",
    provider: {
      "@type": "ProfessionalService",
      name: "KUMO SEO",
      url: "https://kumo-seo.ch",
      areaServed: { "@type": "Place", name: "Suisse romande" },
    },
    areaServed: { "@type": "Place", name: "Suisse romande" },
    serviceType: "Audit SEO",
  };

  return (
    <div className="min-h-screen">
      <SeoHead
        title="Audit SEO technique — KUMO 蜘蛛 Consultant SEO Neuchâtel"
        description="Audit SEO technique complet : 31 points de contrôle, analyse de 3 concurrents et plan d'action 90 jours. Pour PME de Suisse romande."
        canonical="https://kumo-seo.ch/services/audit-seo"
        jsonLd={jsonLd}
      />
      <Navbar />
      <main className="pt-32 pb-24">
        {/* Hero */}
        <section className="container max-w-4xl mx-auto px-4 text-center mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="section-label mb-4">検査 Audit SEO</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Audit SEO <span className="text-gradient">technique complet.</span>
            </h1>
            <p className="text-gold font-mono font-bold text-2xl mb-4">CHF 1'200.–</p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              31 points de contrôle, 3 concurrents analysés, un plan d'action priorisé sur 90 jours.
              Appel de restitution de 30 min inclus.
            </p>
            <Button variant="hero" size="lg" className="rounded-full" asChild>
              <a href="/contact">
                Demander un audit <ArrowRight className="ml-1" size={18} />
              </a>
            </Button>
          </motion.div>
        </section>

        {/* Points de contrôle */}
        <section className="container max-w-4xl mx-auto px-4 mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="section-label mb-4">Périmètre</p>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-8">
              Ce que l'audit <span className="text-gradient">couvre.</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-4">
            {checkpoints.map((cp, i) => (
              <motion.div
                key={cp}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 glass-card p-4"
              >
                <Check size={16} className="text-primary shrink-0" />
                <span className="text-sm">{cp}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Livrables */}
        <section className="container max-w-4xl mx-auto px-4 mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="section-label mb-4">納品 Livrables</p>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-8">
              Ce que vous <span className="text-gradient">recevez.</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-px bg-border/50 rounded-lg overflow-hidden">
            {deliverables.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card p-6"
              >
                <h3 className="font-bold mb-2">{d.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="container max-w-3xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4">
              Prêt à savoir où vous en êtes ?
            </h2>
            <p className="text-muted-foreground mb-8">
              Diagnostic initial gratuit. Réponse personnelle sous 24 heures.
            </p>
            <Button variant="hero" size="lg" className="rounded-full" asChild>
              <a href="/contact">
                Diagnostic gratuit <ArrowRight className="ml-1" size={18} />
              </a>
            </Button>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AuditSeo;
