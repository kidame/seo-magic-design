import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import BlurText from "@/components/ui/blur-text";

const checkpoints = [
  "Technique & infrastructure",
  "Performance & vitesse",
  "Contenu & mots-clés",
  "Visibilité & positionnement",
  "Analyse concurrentielle",
  "Plan d'action priorisé",
];

const deliverables = [
  { title: "Rapport technique", desc: "31 points de contrôle analysés avec recommandations concrètes et priorités claires." },
  { title: "Analyse concurrentielle", desc: "Étude de vos concurrents directs pour identifier vos opportunités de positionnement." },
  { title: "Plan d'action 90 jours", desc: "Feuille de route priorisée pour des résultats rapides et durables." },
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
            <BlurText
              text="Audit SEO technique complet."
              as="h1"
              className="text-4xl md:text-6xl font-bold tracking-tight mb-6 justify-center"
              delay={120}
              animateBy="words"
              direction="top"
            />
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

        {/* Services complémentaires */}
        <section className="container max-w-4xl mx-auto px-4 mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="section-label mb-4">関連 Aller plus loin</p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
              Services <span className="text-gradient">complémentaires.</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-px bg-border/50 rounded-lg overflow-hidden">
            <Link to="/rapport" className="bg-card p-6 hover:bg-card/80 transition-colors">
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">報告 Rapport</p>
              <h3 className="font-bold mb-2">Structure du rapport</h3>
              <p className="text-sm text-muted-foreground">Découvrez le contenu détaillé du rapport d'audit que vous recevrez.</p>
            </Link>
            <Link to="/services/accompagnement-seo" className="bg-card p-6 hover:bg-card/80 transition-colors">
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">伴走 Suivi</p>
              <h3 className="font-bold mb-2">Accompagnement SEO</h3>
              <p className="text-sm text-muted-foreground">Après l'audit, passez à l'action avec un suivi mensuel continu.</p>
            </Link>
            <Link to="/services/creation-site-web" className="bg-card p-6 hover:bg-card/80 transition-colors">
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">制作 Création</p>
              <h3 className="font-bold mb-2">Site web sur-mesure</h3>
              <p className="text-sm text-muted-foreground">Un nouveau site optimisé SEO dès la première ligne de code.</p>
            </Link>
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
