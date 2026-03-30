import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, ArrowRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 border-t border-border/50">
      <div className="container max-w-3xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Mail className="text-primary" size={24} />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Prêt à{" "}
            <span className="text-gradient">booster</span>{" "}
            votre visibilité ?
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            Discutons de votre projet. Devis gratuit sous 48h, sans engagement.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <a href="mailto:contact@kidame.ch">
                Contactez-nous <ArrowRight className="ml-1" size={18} />
              </a>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-6">
            110 CHF/h · Basé en Suisse · Réponse sous 24h
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
