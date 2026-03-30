import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Combien coûte un site web sur-mesure ?",
    answer: "Les forfaits vont de CHF 1'200 pour une landing page à CHF 7'500 pour un e-commerce complet (grille Standard). L'option SEO+ ajoute un audit technique, une recherche de mots-clés et une optimisation avancée, pour des prix allant de CHF 1'800 à CHF 9'800.",
  },
  {
    question: "Quelle est la différence entre Standard et SEO+ ?",
    answer: "Le forfait Standard inclut le design, le développement et l'hébergement première année. Le forfait SEO+ ajoute un audit technique complet (31 points de contrôle), une recherche de mots-clés ciblée, l'optimisation on-page avancée, le balisage Schema.org et un rapport de positionnement initial.",
  },
  {
    question: "Comment se passe le paiement ?",
    answer: "Un acompte de 40% est demandé à la commande pour lancer le projet. Le solde de 60% est facturé à la livraison, après validation finale. Deux séries de retours sont incluses dans chaque forfait.",
  },
  {
    question: "Qu'est-ce que la garantie 30 jours ?",
    answer: "Pendant 30 jours après la livraison, toute correction de bug ou ajustement technique est prise en charge sans frais supplémentaires. Cela couvre les dysfonctionnements, pas les demandes de nouvelles fonctionnalités.",
  },
  {
    question: "Ai-je besoin d'un forfait maintenance ?",
    answer: "La maintenance n'est pas obligatoire, mais fortement recommandée. Elle assure les mises à jour de sécurité, les sauvegardes régulières et un support continu. Trois paliers sont disponibles : Essentiel (CHF 180/mois), Standard (CHF 250/mois) et Avancé (CHF 390/mois).",
  },
  {
    question: "Pourquoi du code sur-mesure plutôt qu'un CMS ?",
    answer: "Pour un site vitrine de 5 à 8 pages, le sur-mesure offre un meilleur contrôle sur la performance, la sécurité et le poids des pages. Le résultat est plus rapide, plus léger et plus simple à maintenir. Objectif : 90+ sur PageSpeed.",
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
