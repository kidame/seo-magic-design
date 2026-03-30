import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = [
  {
    number: "01",
    label: "DIAGNOSTIC · Offre d'entrée",
    title: "Audit SEO complet & Santé technique",
    description: "Votre site est passé au crible sur 31 points de contrôle technique : erreurs 404, redirections, balises, contenu dupliqué, performance mobile, et plus.",
    price: "CHF 1'200.–",
    priceLabel: "Forfait diagnostic",
    priceNote: "Rapport livré sous 5 jours ouvrés",
    ctaText: "Découvrir l'audit SEO complet →",
    ctaHref: "#contact",
  },
  {
    number: "02",
    label: "OPTIMISATION",
    title: "Accompagnement SEO continu",
    description: "Le diagnostic identifie les problèmes. L'accompagnement les résout. Mission 90 jours puis retainer mensuel pour maintenir et amplifier les résultats.",
    price: "CHF 490.– à 1'290.–/mois",
    priceLabel: "Deux paliers mensuels",
    priceNote: "Monitoring ou Premium",
    ctaText: "Voir l'accompagnement SEO →",
    ctaHref: "#contact",
  },
  {
    number: "03",
    label: "CRÉATION",
    title: "Site web sur-mesure",
    description: "Pour les sites vitrines de 5 à 8 pages, je privilégie le code sur-mesure : HTML, CSS et JavaScript natifs, ou React/Astro selon le besoin.",
    price: "CHF 3'000.– à 5'000.–",
    priceLabel: "Site vitrine 5-8 pages",
    priceNote: "Livré sous 4 semaines",
    ctaText: "Explorer la création web →",
    ctaHref: "#contact",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-40">
      <div className="container max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">Services</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Trois prestations, un objectif :{" "}
            <span className="text-gradient">vos résultats.</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Diagnostic, optimisation ou création. Des forfaits clairs, un interlocuteur unique, des résultats mesurables.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-px bg-border/50 rounded-lg overflow-hidden">
          {services.map((s, i) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card p-8 flex flex-col"
            >
              <span className="font-mono text-xs text-muted-foreground tracking-wider mb-4">{s.number} — {s.label}</span>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">{s.description}</p>
              
              <div className="border-t border-border/50 pt-4 mt-auto">
                <div className="text-gold font-mono font-bold text-lg mb-1">{s.price}</div>
                <p className="text-xs text-muted-foreground mb-1">{s.priceLabel}</p>
                <p className="text-xs text-muted-foreground/60 mb-4">{s.priceNote}</p>
                <a href={s.ctaHref} className="text-sm text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1 font-medium">
                  {s.ctaText} <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
