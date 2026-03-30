import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    kanji: "分析 · Analyse",
    title: "Crawl & Diagnostic",
    description: "Chaque page de votre site est passée en revue : structure, contenu, balises, performance. Votre Google Search Console est intégrée pour croiser ce que Google voit avec la réalité de votre site.",
  },
  {
    number: "02",
    kanji: "測定 · Mesure",
    title: "Concurrence & Marché",
    description: "Vos 3 concurrents directs sont analysés et comparés sur 7 indicateurs clés. Recherche des termes que vos clients tapent sur Google, avec un scoring par priorité.",
  },
  {
    number: "03",
    kanji: "修正 · Correction",
    title: "Rapport & Plan 90j",
    description: "Tout est synthétisé dans un rapport HTML interactif. Chaque problème est localisé (quelle page, quel élément) avec sa solution. Le plan d'action sur 90 jours classe chaque intervention par impact et effort.",
  },
  {
    number: "04",
    kanji: "検証 · Vérification",
    title: "Exécution & Résultats",
    description: "Si vous choisissez l'accompagnement, j'exécute les corrections moi-même. Suivi mensuel des positions, du trafic, des conversions. Chaque action est validée par ses résultats mesurés.",
  },
];

const ProcessSection = () => {
  return (
    <section id="methode" className="py-24 md:py-40 border-t border-border/50">
      <div className="container max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">Méthode</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Pas de magie.<br />
            <span className="text-gradient">De la méthode.</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mon approche est systématique. Je mesure avant d'agir, je priorise avant de corriger, 
            et vous voyez exactement ce qui a changé et ce que ça vous rapporte.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="relative"
            >
              <span className="text-5xl font-bold text-primary/10 font-mono block mb-2">{step.number}</span>
              <span className="font-jp text-xs text-primary/60 block mb-3">{step.kanji}</span>
              <h3 className="text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
