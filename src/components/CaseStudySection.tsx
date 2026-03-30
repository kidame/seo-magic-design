import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const metrics = [
  { value: "29/100", label: "Score de santé", detail: "318 problèmes identifiés sur 100 pages. Classé « Critique »." },
  { value: "33", label: "Problèmes de balise H1", detail: "Sur 100 pages, un tiers avait des H1 absents ou multiples." },
  { value: "10.7s", label: "LCP mobile", detail: "Google recommande moins de 2.5 secondes. Ce site est 4× trop lent." },
  { value: "71", label: "Pages sous-performantes", detail: "71 pages sur 100 avec un contenu insuffisant pour se positionner." },
];

const CaseStudySection = () => {
  return (
    <section id="resultats" className="py-24 md:py-40 border-t border-border/50">
      <div className="container max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">Étude de cas réelle</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Extrait anonymisé d'un{" "}
            <span className="text-gradient">audit réel</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Boutique e-commerce francophone · 100 pages · Profil Shopify. 
            Score de santé mesuré : <span className="text-gold font-mono font-bold">29/100</span>. 
            318 problèmes identifiés.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 text-center"
            >
              <span className="text-3xl font-bold text-gold font-mono block mb-2">{m.value}</span>
              <h3 className="text-sm font-semibold mb-2">{m.label}</h3>
              <p className="text-xs text-muted-foreground">{m.detail}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a href="#contact" className="text-sm text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1 font-medium">
            Demander votre propre diagnostic <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudySection;
