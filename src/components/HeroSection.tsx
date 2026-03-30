import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Spider web SVG background */}
      <div className="absolute inset-0 opacity-[0.04]">
        <svg className="w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <g stroke="currentColor" strokeWidth="0.5" fill="none">
            <circle cx="400" cy="300" r="50" /><circle cx="400" cy="300" r="100" />
            <circle cx="400" cy="300" r="180" /><circle cx="400" cy="300" r="280" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map(a => (
              <line key={a} x1="400" y1="300" x2={400 + 400 * Math.cos(a * Math.PI / 180)} y2={300 + 400 * Math.sin(a * Math.PI / 180)} />
            ))}
          </g>
        </svg>
      </div>

      {/* Red glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-primary/8 rounded-full blur-[100px]" />

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

        {/* Title with staggered word animation */}
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6"
        >
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ willChange: "transform, opacity" }}
            className="inline-block"
          >
            Plus de visibilité Google.
          </motion.span>
          <br className="hidden md:block" />
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            style={{ willChange: "transform, opacity" }}
            className="inline-block"
          >
            Plus de clients.{" "}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ willChange: "transform, opacity" }}
            className="inline-block text-gradient"
          >
            Moins de hasard.
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Audit SEO technique, accompagnement continu et création de sites web sur-mesure.
          Forfait fixe pour PME de Suisse romande.
        </motion.p>

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
          {[
            { value: "31", label: "Points de contrôle technique" },
            { value: "3", label: "Concurrents analysés par audit" },
            { value: "90j", label: "Plan d'action priorisé" },
            { value: "1:1", label: "Interlocuteur unique" },
          ].map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
              className="text-center"
            >
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
