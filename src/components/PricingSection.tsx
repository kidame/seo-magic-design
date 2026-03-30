import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const standardPlans = [
  { name: "Landing page", pages: "1 page", price: "1 200", hours: "12–16h" },
  { name: "Site vitrine simple", pages: "5 pages", price: "2 800", hours: "30–40h" },
  { name: "Site vitrine pro", pages: "8 pages", price: "3 900", hours: "45–55h", popular: true },
  { name: "Site blog", pages: "7p + articles", price: "4 200", hours: "48–58h" },
  { name: "E-commerce simple", pages: "7p + 20 produits", price: "4 900", hours: "55–70h" },
  { name: "E-commerce complet", pages: "7p + 50 produits", price: "7 500", hours: "70–90h" },
];

const seoPlans = [
  { name: "Landing page SEO+", pages: "1 page", price: "1 800", hours: "+8–10h" },
  { name: "Site vitrine simple SEO+", pages: "5 pages", price: "3 900", hours: "+12–15h" },
  { name: "Site vitrine pro SEO+", pages: "8 pages", price: "5 400", hours: "+15–18h", popular: true },
  { name: "Site blog SEO+", pages: "7p + articles", price: "5 800", hours: "+18–20h" },
  { name: "E-commerce simple SEO+", pages: "7p + 20 produits", price: "6 700", hours: "+18–22h" },
  { name: "E-commerce complet SEO+", pages: "7p + 50 produits", price: "9 800", hours: "+22–28h" },
];

const standardIncludes = [
  "Balises titre + meta descriptions",
  "Mobile responsive",
  "3–5 mots-clés ciblés",
  "Google Analytics",
  "Schema LocalBusiness",
  "Sitemap + robots.txt",
];

const seoIncludes = [
  "Tout le forfait Standard",
  "Recherche de mots-clés approfondie",
  "Analyse concurrentielle (3–5 concurrents)",
  "Architecture SEO complète",
  "Core Web Vitals optimisés",
  "Maillage interne structuré",
  "Google Search Console configuré",
  "Rapport SEO de départ",
];

const PricingSection = () => {
  const [tab, setTab] = useState<"standard" | "seo">("standard");
  const plans = tab === "standard" ? standardPlans : seoPlans;
  const includes = tab === "standard" ? standardIncludes : seoIncludes;

  return (
    <section id="pricing" className="py-24 md:py-32">
      <div className="container max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">Tarifs</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Des forfaits{" "}
            <span className="text-gradient">transparents</span>
          </h2>

          {/* Toggle */}
          <div className="inline-flex rounded-lg border border-border p-1 bg-secondary/50">
            <button
              onClick={() => setTab("standard")}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                tab === "standard" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Standard
            </button>
            <button
              onClick={() => setTab("seo")}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                tab === "seo" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              SEO+
            </button>
          </div>
        </motion.div>

        {/* Includes */}
        <motion.div
          key={tab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="glass-card p-6 mb-10"
        >
          <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Inclus dans tous les forfaits {tab === "seo" ? "SEO+" : "Standard"}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {includes.map((item) => (
              <div key={item} className="flex items-start gap-2">
                <Check className="text-primary mt-0.5 shrink-0" size={14} />
                <span className="text-sm text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Plans grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`glass-card p-6 relative ${
                plan.popular ? "border-primary/40 glow-border" : ""
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-6 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  Populaire
                </span>
              )}
              <h3 className="font-semibold text-lg mb-1">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{plan.pages}</p>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-sm text-muted-foreground">CHF</span>
              </div>
              <p className="text-xs text-muted-foreground mb-6">{plan.hours} estimées</p>
              <Button variant={plan.popular ? "hero" : "heroOutline"} className="w-full" asChild>
                <a href="#contact">Demander un devis</a>
              </Button>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-8">
          Acompte de 40% à la signature · Solde de 60% à la livraison · 2 séries de retours incluses
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
