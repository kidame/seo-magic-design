import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import BlurText from "@/components/ui/blur-text";

const mandatNiveaux = [
  { complexite: "Standard", prix: "2'900", profil: "Site vitrine simple, quelques pages, problèmes limités" },
  { complexite: "Élevé", prix: "4'500", profil: "Site vitrine professionnel, 20–50 pages" },
  { complexite: "Très élevé", prix: "À partir de 6'900", profil: "E-commerce ou site 50+ pages, problèmes multiples" },
];

const mandatInclus = [
  "Corrections techniques complètes (indexation, plan du site, balises)",
  "Optimisation de toutes les pages (titres, descriptions, structure)",
  "Amélioration du contenu (lisibilité, pages sous-performantes)",
  "Stratégie de visibilité externe",
  "Suivi de positionnement pendant la mission",
  "2 points d'avancement en visioconférence",
  "Rapport de résultats détaillé à 90 jours",
];

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
        title="Audit SEO technique | KUMO 蜘蛛 Consultant SEO Neuchâtel"
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

        {/* Mandat SEO 90 jours */}
        <section className="container max-w-4xl mx-auto px-4 mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="section-label mb-4">九十日 Aller plus loin</p>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4">
              Mandat SEO <span className="text-gradient">90 jours.</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl">
              Si votre site nécessite un travail d'optimisation en profondeur, nous proposons un mandat forfaitaire sur 90 jours. Le prix est fixé après l'audit, selon la complexité de votre site.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-px bg-border/50 rounded-lg overflow-hidden mb-8">
            {mandatNiveaux.map((n, i) => (
              <motion.div
                key={n.complexite}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card p-6 flex flex-col"
              >
                <span className="font-mono text-xs text-primary uppercase tracking-wider mb-2">{n.complexite}</span>
                <div className="text-gold font-mono font-bold text-xl mb-2">
                  {n.prix.startsWith("À") ? n.prix : `CHF ${n.prix}.–`}
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{n.profil}</p>
              </motion.div>
            ))}
          </div>

          <div className="glass-card p-6 mb-6">
            <p className="font-mono text-xs text-primary uppercase tracking-wider mb-4">Ce qui est inclus</p>
            <div className="grid sm:grid-cols-2 gap-2 mb-4">
              {mandatInclus.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <Check size={14} className="text-primary shrink-0 mt-0.5" />
                  <span className="text-xs text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground">
              Toujours précédé d'un Audit SEO (1'200 CHF). Paiement en 3 mensualités possibles.
            </p>
          </div>

          <Button variant="hero" size="sm" className="rounded-full" asChild>
            <Link to="/contact">
              Discuter de mon projet <ArrowRight className="ml-1" size={16} />
            </Link>
          </Button>
        </section>

        {/* Services complémentaires */}
        <section className="container max-w-4xl mx-auto px-4 mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="section-label mb-4">関連 Aller plus loin</p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
              Services <span className="text-gradient">complémentaires.</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border/50 rounded-lg overflow-hidden">
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
            <Link to="/resultats" className="bg-card p-6 hover:bg-card/80 transition-colors">
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">実績 Résultats</p>
              <h3 className="font-bold mb-2">Nos résultats</h3>
              <p className="text-sm text-muted-foreground">Études de cas et résultats concrets obtenus pour nos clients.</p>
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
