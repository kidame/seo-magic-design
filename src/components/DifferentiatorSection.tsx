import { motion } from "framer-motion";
import ParallaxLayer from "@/components/ParallaxLayer";

const them = [
  "Rapport PDF générique : « améliorez votre contenu »",
  "Facturation à l'heure : plus c'est long, plus ils gagnent",
  "Un senior en réunion de vente, un stagiaire sur votre dossier",
  "Sites basés sur des thèmes surchargés de plugins, lents et fragiles",
  "Devis opaque, surprises à la facture finale",
];

const us = [
  "Rapport interactif : page X, balise Y, remplacer par Z",
  "Forfait fixe : acompte 40%, solde à la livraison, pas de surprise",
  "Un seul interlocuteur du diagnostic à la dernière optimisation",
  "Code sur-mesure, léger, objectif 90+ sur PageSpeed",
  "2 séries de retours incluses, garantie 30 jours",
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
            Ce qui me distingue d'une{" "}
            <span className="text-gradient">agence classique.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* "Them" column: slight downward parallax */}
          <ParallaxLayer speed={0.1} disableOnMobile>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-6"
            >
              <h3 className="font-mono text-sm text-muted-foreground uppercase tracking-wider mb-6">Agence classique</h3>
              <div className="space-y-4">
                {them.map((t, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-primary/40 font-mono text-sm shrink-0">✕</span>
                    <p className="text-sm text-muted-foreground">{t}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </ParallaxLayer>

          {/* "Us" column: inverse parallax for convergence */}
          <ParallaxLayer speed={0.1} direction="reverse" disableOnMobile>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-6 border-primary/20"
            >
              <h3 className="font-mono text-sm text-primary uppercase tracking-wider mb-6">KUMO</h3>
              <div className="space-y-4">
                {us.map((u, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-primary font-mono text-sm shrink-0">→</span>
                    <p className="text-sm text-foreground">{u}</p>
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
