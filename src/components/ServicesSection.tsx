import { motion } from "framer-motion";
import { Search, BarChart3, Globe, Zap, FileText, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Création de sites web",
    description: "Sites vitrines, blogs, e-commerce — codés sur mesure, rapides et responsive.",
  },
  {
    icon: Search,
    title: "SEO on-page",
    description: "Architecture SEO, mots-clés, balises, maillage interne structuré.",
  },
  {
    icon: Zap,
    title: "Core Web Vitals",
    description: "Optimisation vitesse et performance pour un meilleur classement Google.",
  },
  {
    icon: BarChart3,
    title: "Analyse concurrentielle",
    description: "Étude de 3 à 5 concurrents, identification des opportunités de trafic.",
  },
  {
    icon: FileText,
    title: "Contenu optimisé",
    description: "Rédaction et intégration de contenu SEO-friendly pour chaque page.",
  },
  {
    icon: TrendingUp,
    title: "Suivi & reporting",
    description: "Google Analytics, Search Console, rapports de positions et trafic.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">Services</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Tout ce qu'il faut pour{" "}
            <span className="text-gradient">dominer Google</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 hover:border-primary/30 transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="text-primary" size={20} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
