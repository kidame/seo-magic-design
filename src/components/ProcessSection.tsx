import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Échange & brief", desc: "On définit vos objectifs, votre cible et les mots-clés stratégiques." },
  { num: "02", title: "Analyse & stratégie", desc: "Étude concurrentielle, architecture SEO, plan de contenu." },
  { num: "03", title: "Design & développement", desc: "Création du site optimisé, rapide et responsive." },
  { num: "04", title: "Lancement & suivi", desc: "Mise en ligne, configuration analytics, rapport de positions." },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-24 md:py-32 border-t border-border/50">
      <div className="container max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">Processus</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            De l'idée au{" "}
            <span className="text-gradient">premier résultat</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex gap-5"
            >
              <span className="text-4xl font-bold text-primary/20 font-heading">{step.num}</span>
              <div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
