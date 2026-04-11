import { motion } from "framer-motion";
import ParallaxLayer from "@/components/ParallaxLayer";

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
    description: "Tout est synthétisé dans un rapport HTML interactif. Chaque problème est localisé : quelle page, quel élément, quelle correction. Le plan 90 jours hiérarchise les actions par impact réel.",
  },
  {
    number: "04",
    kanji: "検証 · Vérification",
    title: "Exécution & Résultats",
    description: "Si vous choisissez l'accompagnement, j'exécute les corrections moi-même. Chaque mois : positions, trafic, conversions. Ce qui fonctionne, on l'amplifie. Ce qui stagne, on l'ajuste.",
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
            Notre méthode SEO{" "}
            <span className="text-gradient">en 4 étapes</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Je mesure avant d'agir. Je priorise avant de corriger. Et à chaque étape, vous voyez ce qui a changé et ce que ça vous rapporte.
          </p>
        </motion.div>

        <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 list-none p-0 m-0">
          {steps.map((step, i) => (
            <motion.li
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="relative"
            >
              {/* Step number with parallax float */}
              <ParallaxLayer speed={0.12} disableOnMobile>
                <span className="text-5xl font-bold text-primary/30 font-mono block mb-2" aria-hidden="true">{step.number}</span>
              </ParallaxLayer>
              <span className="font-jp text-xs text-primary block mb-3" aria-hidden="true">{step.kanji}</span>
              <h3 className="text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default ProcessSection;
