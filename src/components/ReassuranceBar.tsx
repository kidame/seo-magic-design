import { motion } from "framer-motion";
import { PadLock, ServerCH, ChartRising, PersonCircle, Clock24 } from '@/components/icons/KumoIcons';

const items = [
  { icon: <PadLock size={18} />,      text: "Forfait fixe, pas de surprise" },
  { icon: <ServerCH size={18} />,     text: "Hébergement suisse" },
  { icon: <ChartRising size={18} />,  text: "Résultats mesurables" },
  { icon: <PersonCircle size={18} />, text: "Interlocuteur unique" },
  { icon: <Clock24 size={18} />,      text: "Réponse sous 24h" },
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
              {item.icon}
              <span className="text-xs text-muted-foreground font-mono uppercase tracking-wider">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ReassuranceBar;
