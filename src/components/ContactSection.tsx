import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const infoItems = [
  { label: "Email", value: "thomas.puglisi@kumo-seo.ch" },
  { label: "Basé à", value: "Val-de-Travers, Neuchâtel" },
  { label: "Zone", value: "Toute la Suisse romande" },
  { label: "Réponse", value: "Sous 24 heures" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-40 border-t border-border/50">
      <div className="container max-w-3xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-label mb-4">Contact rapide</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Contactez votre consultant SEO{" "}
            <span className="text-gradient">à Neuchâtel</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            Décrivez-moi votre situation et laissez-moi l'URL de votre site. 
            Je vous réponds personnellement sous 24 heures avec une première analyse.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-10 text-left max-w-md mx-auto">
            {infoItems.map((item) => (
              <div key={item.label}>
                <span className="text-xs text-muted-foreground font-mono uppercase tracking-wider">{item.label}</span>
                <p className="text-sm font-medium">{item.value}</p>
              </div>
            ))}
          </div>

          <Button variant="hero" size="lg" asChild>
            <a href="mailto:thomas.puglisi@kumo-seo.ch">
              Diagnostic gratuit <ArrowRight className="ml-1" size={18} />
            </a>
          </Button>
          <p className="text-xs text-muted-foreground mt-6">
            Forfait fixe · Pas de frais cachés · Consultant indépendant
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
