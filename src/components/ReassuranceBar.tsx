import { motion } from "framer-motion";

const items = [
  { kanji: "定", text: "Forfait fixe, pas de surprise" },
  { kanji: "瑞", text: "Hébergement suisse" },
  { kanji: "測", text: "Résultats mesurables" },
  { kanji: "一", text: "Interlocuteur unique" },
  { kanji: "速", text: "Réponse sous 24h" },
];

const ReassuranceBar = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-8 border-y border-border/50 bg-card/30"
    >
      <div className="container">
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {items.map((item) => (
            <div key={item.text} className="flex items-center gap-2">
              <span className="font-jp text-primary text-sm">{item.kanji}</span>
              <span className="text-xs text-muted-foreground font-mono uppercase tracking-wider">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ReassuranceBar;
