import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import BlurText from "@/components/ui/blur-text";
import { ChecklistAudit, CompetitorBar, Calendar90, DirectLine } from '@/components/icons/KumoIcons';

const metrics = [
  { value: "31",  label: "Points de contrôle technique",   icon: <ChecklistAudit size={28} /> },
  { value: "3",   label: "Concurrents analysés par audit", icon: <CompetitorBar size={28} /> },
  { value: "90j", label: "Plan d'action priorisé",         icon: <Calendar90 size={28} /> },
  { value: "1:1", label: "Interlocuteur unique",           icon: <DirectLine size={28} /> },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      <div className="container relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Animated section label */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ willChange: "transform, opacity" }}
          className="section-label mb-6 min-h-[1.5rem]"
        >
          Consultant SEO · Neuchâtel
        </motion.p>

        {/* Title with blur text animation */}
        <BlurText
          text="Plus de visibilité Google. Plus de clients. Moins de hasard."
          as="h1"
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6 justify-center"
          delay={120}
          animateBy="words"
          direction="top"
          stepDuration={0.4}
        />

        {/* Subtitle */}
        <BlurText
          text="Audit SEO technique, accompagnement continu et création de sites web sur-mesure. Forfait fixe pour PME de Suisse romande."
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 justify-center"
          delay={60}
          animateBy="words"
          direction="bottom"
          stepDuration={0.3}
        />

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 min-h-[48px]"
          style={{ willChange: "transform, opacity" }}
        >
          <Button variant="hero" size="lg" className="rounded-full" asChild>
            <a href="#contact">
              <span className="neon-dot" aria-hidden="true" />
              Diagnostic gratuit <ArrowRight className="ml-1" size={18} />
            </a>
          </Button>
          <Button variant="heroOutline" size="lg" className="rounded-full" asChild>
            <a href="#services">Découvrir les services</a>
          </Button>
        </motion.div>

        {/* Metrics bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto min-h-[80px]"
        >
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
              className="text-center"
            >
              <div className="flex justify-center mb-2 text-primary">{m.icon}</div>
              <span className="text-2xl md:text-3xl font-bold text-gold font-mono">{m.value}</span>
              <p className="text-xs text-muted-foreground mt-1">{m.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-16 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground font-mono uppercase tracking-widest">Explorer</span>
          <ChevronDown className="text-muted-foreground animate-scroll-pulse" size={20} />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
