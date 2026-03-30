import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";

const mainServices = [
  {
    number: "01",
    label: "ENTRÉE",
    title: "Landing page",
    description: "Une page unique, percutante, optimisée pour la conversion. Idéale pour valider une offre ou lancer un produit rapidement.",
    price: "CHF 1'200.–",
    priceSeo: "CHF 1'800.–",
    includes: ["Design responsive sur-mesure", "Formulaire de contact", "Hébergement 1 an inclus", "Optimisation vitesse"],
  },
  {
    number: "02",
    label: "POPULAIRE",
    title: "Site vitrine pro",
    description: "Le site complet pour affirmer votre présence digitale. 5 à 8 pages structurées pour convertir vos visiteurs en clients.",
    price: "CHF 3'900.–",
    priceSeo: "CHF 5'400.–",
    includes: ["Jusqu'à 8 pages", "Blog ou actualités", "SEO on-page de base", "Formulaires avancés"],
    featured: true,
  },
  {
    number: "03",
    label: "PERFORMANCE",
    title: "E-commerce simple",
    description: "Votre boutique en ligne clé en main. Catalogue produits, panier, paiement sécurisé et gestion des commandes.",
    price: "CHF 4'900.–",
    priceSeo: "CHF 6'700.–",
    includes: ["Catalogue produits", "Paiement sécurisé", "Gestion des commandes", "Tableau de bord"],
  },
];

const allServices = [
  { name: "Landing page", standard: "1'200", seo: "1'800" },
  { name: "Site vitrine", standard: "2'500", seo: "3'500" },
  { name: "Site vitrine pro", standard: "3'900", seo: "5'400" },
  { name: "E-commerce simple", standard: "4'900", seo: "6'700" },
  { name: "E-commerce avancé", standard: "5'900", seo: "7'900" },
  { name: "E-commerce complet", standard: "7'500", seo: "9'800" },
];

const maintenance = [
  {
    name: "Essentiel",
    price: "180",
    features: ["Mises à jour mensuelles", "Sauvegarde hebdomadaire", "Support par email"],
  },
  {
    name: "Standard",
    price: "250",
    features: ["Mises à jour bi-mensuelles", "Sauvegarde quotidienne", "Support prioritaire", "Rapport mensuel"],
  },
  {
    name: "Avancé",
    price: "390",
    features: ["Mises à jour hebdomadaires", "Sauvegarde temps réel", "Support dédié", "Rapport + optimisation", "Monitoring 24/7"],
  },
];

const ServicesSection = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="services" className="py-24 md:py-40">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">Services</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Des forfaits clairs, des{" "}
            <span className="text-gradient">résultats mesurables.</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Acompte 40% à la commande, solde à la livraison. 2 séries de retours incluses. Garantie 30 jours.
          </p>
        </motion.div>

        {/* 3 cartes principales */}
        <div className="grid lg:grid-cols-3 gap-px bg-border/50 rounded-lg overflow-hidden mb-8">
          {mainServices.map((s, i) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`bg-card p-8 flex flex-col ${s.featured ? "ring-1 ring-primary/30" : ""}`}
            >
              <span className="font-mono text-xs text-muted-foreground tracking-wider mb-4">
                {s.number} — {s.label}
              </span>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                {s.description}
              </p>

              {/* Inclusions */}
              <div className="space-y-2 mb-6">
                {s.includes.map((inc, j) => (
                  <div key={j} className="flex items-center gap-2">
                    <Check size={14} className="text-primary shrink-0" />
                    <span className="text-xs text-muted-foreground">{inc}</span>
                  </div>
                ))}
              </div>

              {/* Prix */}
              <div className="border-t border-border/50 pt-4 mt-auto">
                <div className="text-gold font-mono font-bold text-lg mb-1">{s.price}</div>
                <p className="text-xs text-muted-foreground mb-1">Standard</p>
                <p className="text-xs text-muted-foreground/60 mb-4">
                  Option SEO+ : {s.priceSeo}
                </p>
                <a
                  href="#contact"
                  className="text-sm text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1 font-medium"
                >
                  Demander un devis <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Toggle grille complète */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-sm text-primary hover:text-primary/80 transition-colors font-mono"
          >
            {showAll ? "Masquer la grille complète ↑" : "Voir les 6 forfaits Standard & SEO+ →"}
          </button>
        </motion.div>

        {/* Grille complète */}
        {showAll && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card overflow-hidden mb-20"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/50">
                    <th className="text-left p-4 font-mono text-xs text-muted-foreground uppercase tracking-wider">Prestation</th>
                    <th className="text-right p-4 font-mono text-xs text-muted-foreground uppercase tracking-wider">Standard</th>
                    <th className="text-right p-4 font-mono text-xs text-primary uppercase tracking-wider">SEO+</th>
                  </tr>
                </thead>
                <tbody>
                  {allServices.map((s, i) => (
                    <tr key={i} className="border-b border-border/30 last:border-0">
                      <td className="p-4 text-foreground">{s.name}</td>
                      <td className="p-4 text-right font-mono text-gold">CHF {s.standard}.–</td>
                      <td className="p-4 text-right font-mono text-primary">CHF {s.seo}.–</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 border-t border-border/50">
              <p className="text-xs text-muted-foreground">
                <span className="text-primary font-medium">SEO+</span> inclut : audit technique complet, recherche de mots-clés, optimisation on-page avancée, balisage Schema.org et rapport de positionnement.
              </p>
            </div>
          </motion.div>
        )}

        {/* Maintenance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="section-label mb-4">保守 Maintenance</p>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
            Forfaits de maintenance <span className="text-gradient">mensuels.</span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-px bg-border/50 rounded-lg overflow-hidden">
          {maintenance.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card p-6 flex flex-col"
            >
              <h4 className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-4">{m.name}</h4>
              <div className="text-gold font-mono font-bold text-lg mb-4">
                CHF {m.price}.–<span className="text-sm font-normal text-muted-foreground">/mois</span>
              </div>
              <div className="space-y-2 flex-1">
                {m.features.map((f, j) => (
                  <div key={j} className="flex items-center gap-2">
                    <Check size={14} className="text-primary shrink-0" />
                    <span className="text-xs text-muted-foreground">{f}</span>
                  </div>
                ))}
              </div>
              <a
                href="#contact"
                className="text-sm text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1 font-medium mt-4"
              >
                Souscrire <ArrowRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Inclusions communes */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 glass-card p-6"
        >
          <p className="font-mono text-xs text-primary uppercase tracking-wider mb-3">Tous les forfaits incluent</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
            {[
              "Design responsive",
              "Hébergement 1ère année",
              "Certificat SSL",
              "Formulaire de contact",
              "Conformité RGPD",
              "Formation utilisation",
              "Garantie 30 jours",
              "2 séries de retours",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <Check size={12} className="text-gold shrink-0" />
                <span className="text-xs text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
