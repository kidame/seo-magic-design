import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Combien coûte un audit SEO en Suisse ?",
    answer: "Chez KUMO, l'audit complet est à CHF 1'200 forfaitaire. Ce prix inclut le crawl technique (31 points de contrôle), l'analyse de 3 concurrents, la recherche de mots-clés, un rapport HTML interactif avec plan d'action sur 90 jours, et une restitution en visioconférence.",
  },
  {
    question: "Quelle différence entre un audit et un accompagnement SEO ?",
    answer: "L'audit identifie les problèmes : c'est un diagnostic complet de votre site. L'accompagnement les résout : corrections techniques, optimisation de contenu, suivi de positionnement. L'audit est livré en 5 jours. L'accompagnement se déroule sur une mission de 90 jours puis un retainer mensuel.",
  },
  {
    question: "Pourquoi pas de WordPress ?",
    answer: "Pour un site vitrine de 5 à 8 pages, le sur-mesure offre un meilleur contrôle sur la performance, la sécurité et le poids des pages. Mon approche : coder exactement ce dont votre site a besoin, rien de plus. Le résultat est généralement plus rapide et plus simple à maintenir.",
  },
];

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border/50">
      <button
        onClick={() => setOpen(!open)}
        className="w-full py-5 flex items-center justify-between text-left"
      >
        <span className="text-base font-medium pr-4">{question}</span>
        <ChevronDown className={`shrink-0 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} size={18} />
      </button>
      {open && (
        <p className="text-sm text-muted-foreground pb-5 leading-relaxed">{answer}</p>
      )}
    </div>
  );
};

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 md:py-40 border-t border-border/50">
      <div className="container max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="section-label mb-4">FAQ</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Questions <span className="text-gradient">fréquentes</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {faqs.map((faq, i) => (
            <FAQItem key={i} {...faq} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
