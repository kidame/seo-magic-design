import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "Combien coûte un site web sur-mesure ?",
    answer: "Trois forfaits : Essentiel à CHF 3'900 (4 pages, rédaction guidée), Pro à CHF 4'900 (5–8 pages, rédaction complète, fiche Google, annuaires suisses) et Premium à CHF 6'500 (jusqu'à 10 pages, accompagnement 3 mois inclus). Tous incluent un design sur-mesure, la préparation stratégique et l'hébergement la première année.",
  },
  {
    question: "Quelle est la différence entre Essentiel, Pro et Premium ?",
    answer: "Essentiel convient aux indépendants avec une activité simple (4 pages, rédaction guidée : vous fournissez la matière, KUMO adapte). Pro est la formule recommandée pour les entreprises locales : textes rédigés intégralement, fiche Google configurée, inscription aux annuaires suisses. Premium ajoute un accompagnement de 3 mois après mise en ligne et jusqu'à 10 pages.",
  },
  {
    question: "Combien coûte un audit SEO ?",
    answer: "L'audit SEO technique complet coûte CHF 1'200. Il comprend 31 points de contrôle, l'analyse de 3 concurrents directs, un plan d'action priorisé sur 90 jours et un appel de restitution de 30 min.",
  },
  {
    question: "Qu'est-ce que l'Étude et plan ?",
    answer: "L'Étude et plan (CHF 1'190) comprend l'architecture du site, la recherche de mots-clés, les textes structurés et la feuille de route. C'est la fondation d'un site qui performe. Ce montant est intégralement crédité si vous signez un forfait site dans les 60 jours.",
  },
  {
    question: "Quelles sont les formules de suivi mensuel ?",
    answer: "Trois formules : Maintenance à CHF 250/mois (surveillance, sauvegardes, correctifs, sans engagement), Suivi Visibilité à CHF 590/mois (suivi positions Google, rapport mensuel, 1 amélioration ciblée/mois, recommandé) et Croissance à CHF 1'490/mois (sprint stratégique mensuel, analyse approfondie, point mensuel 15 min).",
  },
  {
    question: "Comment se passe le paiement ?",
    answer: "Un acompte de 40 % est demandé à la commande pour lancer le projet. Le solde de 60 % est facturé à la livraison, après validation finale. Deux séries de retours sont incluses dans chaque forfait. Pour le Mandat SEO 90 jours, le paiement en 3 mensualités est possible.",
  },
  {
    question: "Pourquoi du code sur-mesure plutôt qu'un CMS ?",
    answer: "Pour un site vitrine de 4 à 10 pages, le sur-mesure offre un meilleur contrôle sur la performance, la sécurité et le poids des pages. Le résultat est plus rapide, plus léger et plus simple à maintenir. Objectif : 90+ sur PageSpeed.",
  },
];

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border/50" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
      <button
        onClick={() => setOpen(!open)}
        className="w-full py-5 flex items-center justify-between text-left"
        aria-expanded={open}
        aria-label={question}
      >
        <span className="text-base font-medium pr-4" itemProp="name">{question}</span>
        <ChevronDown className={`shrink-0 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} size={18} aria-hidden="true" />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
        itemScope
        itemProp="acceptedAnswer"
        itemType="https://schema.org/Answer"
      >
        <p className="text-sm text-muted-foreground pb-5 leading-relaxed" itemProp="text">{answer}</p>
      </div>
    </div>
  );
};

const FAQSection = () => {
  // Inject FAQ JSON-LD
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    });
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section id="faq" className="py-24 md:py-40 border-t border-border/50" itemScope itemType="https://schema.org/FAQPage">
      <div className="container max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="section-label mb-4">FAQ</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            FAQ : audit SEO, création de site{" "}
            <span className="text-primary">et</span> <span className="text-primary text-neon-line relative">référencement</span>
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

        {/* Liens vers les services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          <Link to="/services/audit-seo" className="text-sm text-primary-light hover:text-primary/80 transition-colors inline-flex items-center gap-1 font-medium">
            Audit SEO <ArrowRight size={14} />
          </Link>
          <Link to="/services/creation-site-web" className="text-sm text-primary-light hover:text-primary/80 transition-colors inline-flex items-center gap-1 font-medium">
            Création de site <ArrowRight size={14} />
          </Link>
          <Link to="/services/accompagnement-seo" className="text-sm text-primary-light hover:text-primary/80 transition-colors inline-flex items-center gap-1 font-medium">
            Accompagnement SEO <ArrowRight size={14} />
          </Link>
          <Link to="/faq" className="text-sm text-primary-light hover:text-primary/80 transition-colors inline-flex items-center gap-1 font-medium">
            Toutes les questions <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
