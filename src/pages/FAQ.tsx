import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";
import { motion } from "framer-motion";
import { useState } from "react";
import BlurText from "@/components/ui/blur-text";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

const faqs = [
  {
    question: "Combien coûte un audit SEO ?",
    answer: "L'audit SEO technique complet coûte CHF 1'200. Il comprend 31 points de contrôle, l'analyse de 3 concurrents directs, un plan d'action priorisé sur 90 jours et un appel de restitution de 30 min.",
  },
  {
    question: "Quelle est la différence entre un audit et un accompagnement ?",
    answer: "L'audit est une prestation ponctuelle : un état des lieux complet avec recommandations. L'accompagnement est un suivi mensuel continu qui inclut la mise en œuvre des recommandations, le suivi de positionnement et l'optimisation continue du contenu.",
  },
  {
    question: "Combien coûte un site web sur-mesure ?",
    answer: "Trois forfaits : Essentiel à CHF 3'900 (4 pages), Pro à CHF 4'900 (5–8 pages, textes rédigés, fiche Google, annuaires suisses) et Premium à CHF 6'500 (jusqu'à 10 pages, accompagnement 3 mois inclus). Tous incluent un design sur-mesure et la préparation stratégique.",
  },
  {
    question: "Quelle est la différence entre Essentiel, Pro et Premium ?",
    answer: "Le forfait Essentiel convient aux indépendants avec une activité simple (4 pages). Le forfait Pro, recommandé pour les entreprises locales, ajoute la rédaction des textes, la fiche Google et l'inscription aux annuaires suisses. Le forfait Premium ajoute un accompagnement de 3 mois et jusqu'à 10 pages.",
  },
  {
    question: "Qu'est-ce que l'Étude et plan ?",
    answer: "L'Étude et plan (CHF 1'190) comprend l'architecture du site, la recherche de mots-clés, la rédaction des textes et la feuille de route. C'est la fondation d'un site qui performe. Le montant est crédité à 100 % si vous signez un forfait site.",
  },
  {
    question: "Pourquoi du code sur-mesure plutôt qu'un CMS ?",
    answer: "Pour un site vitrine de 5 à 8 pages, le sur-mesure offre un meilleur contrôle sur la performance, la sécurité et le poids des pages. Le résultat est plus rapide, plus léger et plus simple à maintenir. Objectif : 90+ sur PageSpeed.",
  },
  {
    question: "Travaillez-vous uniquement en Suisse romande ?",
    answer: "Le bureau est basé à Neuchâtel, mais les prestations sont réalisables à distance pour toute la Suisse romande et au-delà. Les échanges se font par visioconférence, email et outils de gestion de projet.",
  },
  {
    question: "Quelles sont les formules de suivi mensuel ?",
    answer: "Trois formules : Maintenance à CHF 250/mois (surveillance, sauvegardes, correctifs, sans engagement, résiliable à 30 jours), Suivi Visibilité à CHF 590/mois (suivi positions Google, rapport mensuel, 1 amélioration ciblée/mois, recommandé, engagement 6 mois) et Croissance à CHF 1'490/mois (sprint stratégique mensuel, analyse approfondie Google, point mensuel 15 min, engagement 6 mois). L'hébergement est inclus dans toutes les formules de suivi.",
  },
  {
    question: "Qu'est-ce que le Mandat SEO 90 jours ?",
    answer: "Après un audit SEO, si votre site nécessite un travail d'optimisation en profondeur, nous proposons un mandat forfaitaire sur 90 jours. Trois niveaux selon la complexité : Standard (CHF 2'900, site vitrine simple), Élevé (CHF 4'500, site professionnel 20–50 pages), Très élevé (à partir de CHF 6'900, e-commerce ou site 50+ pages). Inclus : corrections techniques complètes, optimisation de toutes les pages, amélioration du contenu, stratégie de visibilité externe, suivi de positionnement, 2 points d'avancement en visio, rapport détaillé à 90 jours.",
  },
  {
    question: "Comment se passe le paiement ?",
    answer: "Un acompte de 40 % est demandé à la commande pour lancer le projet. Le solde de 60 % est facturé à la livraison, après validation finale. Deux séries de retours sont incluses dans chaque forfait.",
  },
  {
    question: "Forfait ou tarif horaire ?",
    answer: "Tous les projets sont proposés au forfait pour garantir la transparence. Vous connaissez le prix total avant de commencer. Le tarif horaire (CHF 150/h, minimum facturé 30 min = CHF 75) est réservé aux modifications ponctuelles hors forfait.",
  },
  {
    question: "Qu'est-ce que la garantie 30 jours ?",
    answer: "Pendant 30 jours après la livraison, toute correction de bug ou ajustement technique est prise en charge sans frais supplémentaires. Cela couvre les dysfonctionnements, pas les demandes de nouvelles fonctionnalités.",
  },
];

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border/50" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
      <button onClick={() => setOpen(!open)} className="w-full py-5 flex items-center justify-between text-left" aria-expanded={open}>
        <span className="text-base font-medium pr-4" itemProp="name">{question}</span>
        <ChevronDown className={`shrink-0 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} size={18} aria-hidden="true" />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
        itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"
      >
        <p className="text-sm text-muted-foreground pb-5 leading-relaxed" itemProp="text">{answer}</p>
      </div>
    </div>
  );
};

const FAQPage = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://kumo-seo.ch/" },
      { "@type": "ListItem", position: 2, name: "FAQ", item: "https://kumo-seo.ch/faq" },
    ],
  };

  return (
    <div className="min-h-screen">
      <SeoHead
        title="FAQ : audit SEO & création web | KUMO Neuchâtel"
        description="Réponses aux questions fréquentes sur l'audit SEO, la création de site web sur-mesure, les tarifs et l'accompagnement SEO pour PME suisses."
        canonical="https://kumo-seo.ch/faq"
        jsonLd={jsonLd}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <Navbar />
      <main className="pt-32 pb-24">
        {/* Breadcrumb */}
        <div className="container max-w-3xl mx-auto px-4 mb-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild><Link to="/">Accueil</Link></BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>FAQ</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Hero */}
        <section className="container max-w-3xl mx-auto px-4 text-center mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ willChange: "transform, opacity" }}>
            <p className="section-label mb-4">質問 FAQ</p>
            <BlurText
              text="Questions fréquentes."
              as="h1"
              className="text-3xl md:text-5xl font-bold tracking-tight mb-6 justify-center"
              delay={120}
              animateBy="words"
              direction="top"
            />
            <p className="text-lg text-muted-foreground">
              Tout ce que vous devez savoir avant de démarrer.
            </p>
          </motion.div>
        </section>

        {/* FAQ List */}
        <section className="container max-w-3xl mx-auto px-4 mb-24" itemScope itemType="https://schema.org/FAQPage">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            {faqs.map((faq, i) => (
              <FAQItem key={i} {...faq} />
            ))}
          </motion.div>
        </section>

        {/* CTA */}
        <section className="container max-w-3xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4">
              Une autre question ?
            </h2>
            <p className="text-muted-foreground mb-8">
              Diagnostic initial gratuit. Réponse personnelle sous 24 heures.
            </p>
            <Button variant="hero" size="lg" className="rounded-full" asChild>
              <Link to="/contact">
                Nous contacter <ArrowRight className="ml-1" size={18} />
              </Link>
            </Button>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQPage;
