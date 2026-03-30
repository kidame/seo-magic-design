import { motion } from "framer-motion";
import { ArrowRight, Check, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ShineBorder } from "@/components/ui/shine-border";

/* ── Offres ponctuelles ── */
const ponctuelles = [
  {
    kanji: "検査",
    title: "Audit SEO",
    price: "1'200",
    description: "Diagnostic complet : technique, contenu, visibilité, concurrents. Rapport interactif + plan d'action 90 jours + appel de restitution 30 min.",
    pourQui: "Toute entreprise qui a déjà un site.",
    link: "/services/audit-seo",
  },
  {
    kanji: "設計",
    title: "Étude et plan",
    price: "1'190",
    description: "Architecture, mots-clés, textes, feuille de route. La fondation d'un site qui performe.",
    pourQui: "Entreprise qui veut un nouveau site.",
    note: "Crédité à 100 % si vous signez un forfait site.",
    link: "/contact",
  },
];

/* ── Création de site ── */
const siteFeatures = [
  "Pages",
  "Préparation stratégique",
  "Textes rédigés",
  "Fiche Google",
  "Annuaires suisses",
  "Design sur-mesure",
  "Accompagnement 3 mois",
];

const sitePlans = [
  {
    kanji: "基本",
    name: "Essentiel",
    price: "3'900",
    featured: false,
    pourQui: "Indépendant, activité simple",
    values: ["4", true, false, false, false, true, false],
  },
  {
    kanji: "推奨",
    name: "Pro",
    price: "4'900",
    featured: true,
    pourQui: "Entreprise locale (recommandé)",
    values: ["5–8", true, true, true, true, true, false],
  },
  {
    kanji: "最上",
    name: "Premium",
    price: "6'500",
    featured: false,
    pourQui: "Ambition de croissance",
    values: ["Jusqu'à 10", true, true, true, true, true, true],
  },
];

/* ── Formules de suivi ── */
const suiviPlans = [
  {
    kanji: "保守",
    name: "Maintenance",
    price: "250",
    engagement: "Sans engagement, résiliable à 30 jours",
    pourQui: "Tout client avec un site actif KUMO.",
    features: [
      "Surveillance, sauvegardes, correctifs",
      "Sécurité & mises à jour",
      "Modifications mineures (max 30 min/mois)",
    ],
  },
  {
    kanji: "追跡",
    name: "Suivi Visibilité",
    price: "590",
    featured: true,
    engagement: "Engagement 6 mois, puis résiliable mensuellement",
    pourQui: "Entreprise qui veut progresser dans Google.",
    features: [
      "Tout Maintenance inclus",
      "Suivi positions & Search Console",
      "Rapport mensuel détaillé",
      "1 amélioration ciblée/mois",
      "Vérification fiche Google",
    ],
  },
  {
    kanji: "成長",
    name: "Croissance",
    price: "1'490",
    engagement: "Engagement 6 mois, puis résiliable mensuellement",
    pourQui: "Objectif de croissance active.",
    features: [
      "Tout Suivi Visibilité inclus",
      "1 sprint mensuel stratégique",
      "Analyse GSC approfondie",
      "Point mensuel 15 min",
      "Actions supp. : CHF 300/action",
    ],
  },
];

/* ── Prestations complémentaires ── */
const supplements = [
  {
    category: "Pages supplémentaires",
    items: [
      { name: "Page simple", price: "390" },
      { name: "Page complexe", price: "490" },
      { name: "Landing page conversion", price: "590" },
    ],
  },
  {
    category: "Modifications ponctuelles",
    items: [
      { name: "Tarif horaire", price: "150/h" },
      { name: "Minimum facturé (30 min)", price: "75" },
    ],
  },
  {
    category: "Images et visuels",
    items: [
      { name: "Intégration image", price: "35" },
      { name: "Pack 10 images", price: "250" },
      { name: "Sourcing photo stock", price: "75/image" },
      { name: "Retouche", price: "150/h" },
    ],
  },
  {
    category: "Fonctionnalités additionnelles",
    items: [
      { name: "Formulaire avancé", price: "290" },
      { name: "Intégration réservation", price: "190" },
      { name: "Intégration paiement", price: "390" },
      { name: "Blog", price: "490" },
      { name: "Module avis Google", price: "190" },
      { name: "Multilingue (+1 langue)", price: "+60 % du prix site" },
    ],
  },
  {
    category: "Évolutions structurelles",
    items: [
      { name: "Refonte d'une page", price: "350" },
      { name: "Migration contenu", price: "Sur devis" },
      { name: "Schéma structuré additionnel", price: "90/schéma" },
    ],
  },
];

const ServicesSection = () => {
  const [showSupplements, setShowSupplements] = useState(false);

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
            Acompte 40 % à la commande, solde à la livraison. 2 séries de retours incluses. Garantie 30 jours.
          </p>
        </motion.div>

        {/* ── Offres ponctuelles ── */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20">
          <p className="section-label mb-4">単発 Offres ponctuelles</p>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
            Diagnostiquer et <span className="text-gradient">planifier.</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-px bg-border/50 rounded-lg overflow-hidden">
            {ponctuelles.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card p-8 flex flex-col"
              >
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-3">{s.kanji} {s.title}</span>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{s.description}</p>
                {s.note && (
                  <p className="text-xs text-primary mb-4">{s.note}</p>
                )}
                <p className="text-xs text-muted-foreground mb-4">Pour qui : {s.pourQui}</p>
                <div className="border-t border-border/50 pt-4 mt-auto">
                  <div className="text-gold font-mono font-bold text-lg mb-3">CHF {s.price}.–</div>
                  <Link to={s.link} className="text-sm text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1 font-medium">
                    En savoir plus <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Création de site ── */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20">
          <p className="section-label mb-4">制作 Création de site</p>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
            Trois forfaits, un seul <span className="text-gradient">standard.</span>
          </h3>

          <div className="grid lg:grid-cols-3 gap-4 mb-4">
            {sitePlans.map((plan, i) => (
              <ShineBorder
                key={plan.name}
                shineColor={plan.featured ? ["#8B5CF6", "#A78BFA", "#FFFFFF"] : ["#333", "#555", "#333"]}
                duration={plan.featured ? 6 : 12}
                borderWidth={plan.featured ? 2 : 1}
              >
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card p-8 flex flex-col h-full"
                >
                  <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">
                    {plan.kanji} {plan.name} {plan.featured && "⭐"}
                  </span>
                  <div className="text-gold font-mono font-bold text-2xl mb-1">CHF {plan.price}.–</div>
                  <p className="text-xs text-muted-foreground mb-6">{plan.pourQui}</p>

                  <div className="space-y-3 flex-1">
                    {siteFeatures.map((feat, j) => {
                      const val = plan.values[j];
                      return (
                        <div key={feat} className="flex items-center gap-2">
                          {typeof val === "string" ? (
                            <span className="text-xs font-mono text-gold w-4 text-center shrink-0">{val === "4" ? "4" : val === "5–8" ? "5–8" : "≤10"}</span>
                          ) : val ? (
                            <Check size={14} className="text-primary shrink-0" />
                          ) : (
                            <X size={14} className="text-muted-foreground/30 shrink-0" />
                          )}
                          <span className="text-xs text-muted-foreground">{feat}</span>
                        </div>
                      );
                    })}
                  </div>

                  <Link
                    to="/contact"
                    className="text-sm text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1 font-medium mt-6"
                  >
                    Demander un devis <ArrowRight size={14} />
                  </Link>
                </motion.div>
              </ShineBorder>
            ))}
          </div>
          <p className="text-xs text-muted-foreground">
            Étude et plan (CHF 1'190) créditée à 100 % si vous signez un forfait site.
          </p>
        </motion.div>

        {/* ── Formules de suivi ── */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20">
          <p className="section-label mb-4">月額 Formules de suivi</p>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
            Maintenir et <span className="text-gradient">progresser.</span>
          </h3>
          <div className="grid lg:grid-cols-3 gap-4">
            {suiviPlans.map((plan, i) => (
              <ShineBorder
                key={plan.name}
                shineColor={plan.featured ? ["#8B5CF6", "#A78BFA", "#FFFFFF"] : ["#333", "#555", "#333"]}
                duration={plan.featured ? 6 : 12}
                borderWidth={plan.featured ? 2 : 1}
              >
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card p-8 flex flex-col h-full"
                >
                  <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">
                    {plan.kanji} {plan.name} {plan.featured && "⭐"}
                  </span>
                  <div className="text-gold font-mono font-bold text-2xl mb-1">
                    CHF {plan.price}.–<span className="text-sm font-normal text-muted-foreground">/mois</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-1">{plan.engagement}</p>
                  <p className="text-xs text-muted-foreground mb-6">Pour qui : {plan.pourQui}</p>

                  <div className="space-y-2 flex-1">
                    {plan.features.map((f) => (
                      <div key={f} className="flex items-start gap-2">
                        <Check size={14} className="text-primary shrink-0 mt-0.5" />
                        <span className="text-xs text-muted-foreground">{f}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="text-sm text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1 font-medium mt-6"
                  >
                    Souscrire <ArrowRight size={14} />
                  </Link>
                </motion.div>
              </ShineBorder>
            ))}
          </div>
        </motion.div>

        {/* ── Prestations complémentaires ── */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="text-center mb-8">
            <button
              onClick={() => setShowSupplements(!showSupplements)}
              className="text-sm text-primary hover:text-primary/80 transition-colors font-mono"
              aria-expanded={showSupplements}
              aria-label={showSupplements ? "Masquer les prestations complémentaires" : "Voir les prestations complémentaires"}
            >
              {showSupplements ? "Masquer les prestations complémentaires ↑" : "Voir les prestations complémentaires →"}
            </button>
          </div>

          {showSupplements && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="glass-card p-6 md:p-8">
              <p className="section-label mb-6">補足 Prestations complémentaires</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {supplements.map((cat) => (
                  <div key={cat.category}>
                    <h4 className="font-mono text-xs text-primary uppercase tracking-wider mb-3">{cat.category}</h4>
                    <div className="space-y-2">
                      {cat.items.map((item) => (
                        <div key={item.name} className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">{item.name}</span>
                          <span className="font-mono text-gold text-xs">
                            {item.price.includes("Sur devis") || item.price.includes("%") ? item.price : `CHF ${item.price}`}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Inclusions communes */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 glass-card p-6"
        >
          <p className="font-mono text-xs text-primary uppercase tracking-wider mb-3">Tous les forfaits site incluent</p>
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
