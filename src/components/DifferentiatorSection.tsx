import { motion } from "framer-motion";
import ParallaxLayer from "@/components/ParallaxLayer";

const engagements = [
  "Rapport concret et actionnable, pas un PDF générique",
  "Forfait fixe annoncé dès le départ, pas de surprise",
  "Un seul interlocuteur du diagnostic à la dernière optimisation",
  "Code sur-mesure, léger et performant",
  "Retours inclus et garantie 30 jours",
];

const DifferentiatorSection = () => {
  return (
    <section className="py-24 md:py-40 border-t border-border/50">
      <div className="container max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">Approche</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Ce que je vous{" "}
            <span className="text-gradient">garantis.</span>
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <ParallaxLayer speed={0.1} disableOnMobile>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-6 border-primary/20"
            >
              <h3 className="font-mono text-sm text-primary uppercase tracking-wider mb-6">Mes engagements</h3>
              <div className="space-y-4">
                {engagements.map((e, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-primary font-mono text-sm shrink-0">→</span>
                    <p className="text-sm text-foreground">{e}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </ParallaxLayer>
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorSection;
