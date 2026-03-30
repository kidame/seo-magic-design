import { motion } from "framer-motion";

const items = [
  { icon: "🛡️", text: "Forfait fixe, pas de surprise" },
  { icon: "🇨🇭", text: "Hébergement suisse" },
  { icon: "📊", text: "Résultats mesurables" },
  { icon: "🤝", text: "Interlocuteur unique" },
  { icon: "⚡", text: "Réponse sous 24h" },
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
              <span className="text-base">{item.icon}</span>
              <span className="text-xs text-muted-foreground font-mono uppercase tracking-wider">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ReassuranceBar;
