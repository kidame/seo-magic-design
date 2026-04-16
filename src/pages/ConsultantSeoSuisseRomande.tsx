import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import BlurText from "@/components/ui/blur-text";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

const villes = [
  { name: "Neuchâtel", href: "/consultant-seo-neuchatel", desc: "Canton de Neuchâtel et Val-de-Travers" },
  { name: "Lausanne", href: "/consultant-seo-lausanne", desc: "Canton de Vaud et agglomération lausannoise" },
  { name: "Genève", href: "/consultant-seo-geneve", desc: "Canton de Genève et Grand Genève" },
  { name: "La Chaux-de-Fonds", href: "/consultant-seo-la-chaux-de-fonds", desc: "Montagnes neuchâteloises" },
];

const pourquoi = [
  "Connaissance du marché suisse romand et de ses spécificités",
  "Tarifs en CHF, facturation suisse, pas de TVA cachée",
  "Accompagnement en français avec un interlocuteur unique",
  "Stratégie adaptée aux PME locales, pas aux multinationales",
  "Compréhension du tissu économique cantonal",
  "Proximité géographique pour les rendez-vous si nécessaire",
];

const secteurs = [
  {
    nom: "PME et indépendants",
    texte: "PME et indépendants en Suisse romande : vos clients commencent souvent par Google avant d'appeler. Si votre concurrent apparaît et pas vous, c'est lui qui reçoit la demande.",
  },
  {
    nom: "Artisans et services",
    texte: "Artisans du bâtiment, électriciens, menuisiers : votre réputation se construit sur le terrain. Mais les nouveaux appels entrants viennent souvent d'une recherche Google. Une fiche et un site bien tenus changent concrètement ce que vous recevez sans effort actif.",
  },
  {
    nom: "Santé et professions libérales",
    texte: "Thérapeutes, médecins, avocats, fiduciaires : une bonne partie de votre clientèle potentielle commence par chercher en ligne. L'enjeu n'est pas d'avoir un site spectaculaire, c'est d'être trouvé et crédible quand quelqu'un cherche ce que vous faites.",
  },
];

const ConsultantSeoSuisseRomande = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Consultant SEO en Suisse romande",
      description: "Consultant SEO indépendant pour PME de Suisse romande. Audit technique, création de sites web et accompagnement SEO continu.",
      provider: {
        "@type": "ProfessionalService",
        name: "KUMO SEO",
        url: "https://kumo-seo.ch",
        areaServed: { "@type": "Place", name: "Suisse romande" },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Val-de-Travers",
          addressRegion: "Neuchâtel",
          addressCountry: "CH",
        },
      },
      areaServed: [
        { "@type": "Place", name: "Neuchâtel" },
        { "@type": "Place", name: "Lausanne" },
        { "@type": "Place", name: "Genève" },
        { "@type": "Place", name: "Fribourg" },
        { "@type": "Place", name: "Suisse romande" },
      ],
      serviceType: "Consultant SEO",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://kumo-seo.ch/" },
        { "@type": "ListItem", position: 2, name: "Consultant SEO Suisse romande", item: "https://kumo-seo.ch/consultant-seo-suisse-romande" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Dans quelles villes de Suisse romande intervenez-vous ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "KUMO accompagne les PME à Neuchâtel, Lausanne, Genève et La Chaux-de-Fonds, avec un suivi à distance ou sur place selon les besoins.",
          },
        },
        {
          "@type": "Question",
          name: "Pourquoi choisir un consultant SEO en Suisse romande ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Un consultant SEO en Suisse romande connaît le marché local, les intentions de recherche régionales et les réalités des PME romandes.",
          },
        },
        {
          "@type": "Question",
          name: "Proposez-vous aussi du SEO local ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui. L'accompagnement inclut le SEO local, la fiche Google Business et l'optimisation des pages locales.",
          },
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <SeoHead
        title="Consultant SEO en Suisse romande | KUMO - Neuchâtel"
        description="Consultant SEO indépendant en Suisse romande. Audit technique, création de sites et accompagnement SEO pour PME. Basé à Neuchâtel, actif dans toute la Romandie."
        canonical="https://kumo-seo.ch/consultant-seo-suisse-romande"
        jsonLd={jsonLd}
      />
      <Navbar />
      <main className="pt-32 pb-24">
        {/* Breadcrumb */}
        <div className="container max-w-4xl mx-auto px-4 mb-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild><Link to="/">Accueil</Link></BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Consultant SEO Suisse romande</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Hero */}
        <section className="container max-w-4xl mx-auto px-4 text-center mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="section-label mb-4">地域 Suisse romande</p>
            <BlurText
              text="Consultant SEO en Suisse romande."
              as="h1"
              className="text-4xl md:text-6xl font-bold tracking-tight mb-6 justify-center"
              delay={120}
              animateBy="words"
              direction="top"
            />
            <div className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 space-y-4 text-left md:text-center">
              <p>
                Basé à Val-de-Travers dans le canton de Neuchâtel, j'accompagne les PME de Suisse romande dans leur visibilité sur Google. Lausanne, Genève, Neuchâtel, La Chaux-de-Fonds : chaque marché a ses recherches locales, ses concurrents, ses spécificités. Une stratégie SEO qui fonctionne à Genève ne s'applique pas mécaniquement à Neuchâtel.
              </p>
              <p>
                KUMO est une structure boutique : un seul interlocuteur, un forfait fixe annoncé avant le premier jour de travail, des livrables concrets. Audit SEO, site web performant ou suivi mensuel. Je travaille principalement à distance, avec des déplacements possibles selon les besoins.
              </p>
            </div>
            <Button variant="hero" size="lg" className="rounded-full" asChild>
              <Link to="/contact">
                Diagnostic gratuit <ArrowRight className="ml-1" size={18} />
              </Link>
            </Button>
          </motion.div>
        </section>

        {/* Pourquoi un consultant local */}
        <section className="container max-w-4xl mx-auto px-4 mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="section-label mb-4">利点 Avantages</p>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-8">
              Votre consultant SEO en <span className="text-gradient">Suisse romande.</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl">
              Un consultant SEO en Suisse romande connaît les recherches locales, les attentes des PME et les différences entre les marchés de Neuchâtel, Lausanne et Genève.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-4">
            {pourquoi.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 glass-card p-4"
              >
                <Check size={16} className="text-primary-light shrink-0" />
                <span className="text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Secteurs */}
        <section className="container max-w-4xl mx-auto px-4 mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="section-label mb-4">分野 Secteurs</p>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4">
              Qui je <span className="text-gradient">accompagne.</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl">
              Le SEO n'a pas le même rôle selon votre activité. Voici comment il se traduit concrètement pour les profils de PME romandes avec lesquels je travaille le plus.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-px bg-border/50 rounded-lg overflow-hidden">
            {secteurs.map((s, i) => (
              <motion.div
                key={s.nom}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-card p-6 h-full"
              >
                <h3 className="font-bold mb-2">{s.nom}</h3>
                <p className="text-sm text-muted-foreground">{s.texte}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Zones couvertes */}
        <section className="container max-w-4xl mx-auto px-4 mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="section-label mb-4">地図 Zones couvertes</p>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4">
              Actif dans toute la <span className="text-gradient">Romandie.</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl">
              Je travaille avec des PME dans toute la Suisse romande. La majorité des échanges se font par visioconférence et email. Pour les clients proches, je me déplace volontiers.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border/50 rounded-lg overflow-hidden">
            {villes.map((ville, i) => (
              <motion.div
                key={ville.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link to={ville.href} className="bg-card p-6 hover:bg-card/80 transition-colors block h-full">
                  <h3 className="font-bold mb-1">{ville.name}</h3>
                  <p className="text-sm text-muted-foreground">{ville.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="mt-6">
            <Link to="/services/accompagnement-seo#seo-local" className="text-sm text-primary-light hover:text-primary/80 transition-colors inline-flex items-center gap-1 font-medium">
              SEO local pour les entreprises romandes <ArrowRight size={14} />
            </Link>
          </div>
        </section>

        {/* FAQ régionale */}
        <section className="container max-w-4xl mx-auto px-4 mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="section-label mb-4">FAQ régionale</p>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-8">
              Questions fréquentes en <span className="text-gradient">Suisse romande.</span>
            </h2>
          </motion.div>
          <div className="space-y-4">
            <div className="glass-card p-6">
              <h3 className="font-bold mb-2">Dans quelles villes de Suisse romande intervenez-vous ?</h3>
              <p className="text-sm text-muted-foreground">Neuchâtel, Lausanne, Genève et La Chaux-de-Fonds, avec un accompagnement adapté au contexte local.</p>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-bold mb-2">Pourquoi choisir un consultant SEO en Suisse romande ?</h3>
              <p className="text-sm text-muted-foreground">Pour travailler avec une stratégie alignée sur les recherches régionales et les besoins des PME romandes.</p>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-bold mb-2">Incluez-vous le SEO local dans le suivi ?</h3>
              <p className="text-sm text-muted-foreground">Oui, le suivi couvre le SEO local, la fiche Google Business et l'amélioration continue des pages locales.</p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="container max-w-4xl mx-auto px-4 mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="section-label mb-4">提供 Services</p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
              Ce que je <span className="text-gradient">propose.</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-px bg-border/50 rounded-lg overflow-hidden">
            <Link to="/services/audit-seo" className="bg-card p-6 hover:bg-card/80 transition-colors">
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">検査 Audit</p>
              <h3 className="font-bold mb-2">Audit SEO de site web</h3>
              <p className="text-sm text-muted-foreground">31 points de contrôle, plan d'action 90 jours. CHF 1'200.</p>
            </Link>
            <Link to="/services/creation-site-web" className="bg-card p-6 hover:bg-card/80 transition-colors">
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">制作 Création</p>
              <h3 className="font-bold mb-2">Site web sur-mesure</h3>
              <p className="text-sm text-muted-foreground">Sites codés en React, optimisés SEO. Dès CHF 3'900.</p>
            </Link>
            <Link to="/services/accompagnement-seo" className="bg-card p-6 hover:bg-card/80 transition-colors">
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">伴走 Suivi</p>
              <h3 className="font-bold mb-2">Accompagnement SEO</h3>
              <p className="text-sm text-muted-foreground">Suivi mensuel continu. Dès CHF 250/mois.</p>
            </Link>
          </div>
        </section>

        {/* Article lié */}
        <section className="container max-w-4xl mx-auto px-4 mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="section-label mb-4">記事 Sur le blog</p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
              Article <span className="text-gradient">lié.</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-px bg-border/50 rounded-lg overflow-hidden">
            <Link to="/blog/site-invisible-google-pme-suisse" className="bg-card p-6 hover:bg-card/80 transition-colors">
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">Guide</p>
              <h3 className="font-bold mb-2">Votre site est invisible sur Google ?</h3>
              <p className="text-sm text-muted-foreground">5 causes fréquentes chez les PME romandes et comment y remédier.</p>
            </Link>
            <Link to="/blog/creer-site-internet-pme-suisse-2026" className="bg-card p-6 hover:bg-card/80 transition-colors">
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">Guide</p>
              <h3 className="font-bold mb-2">Créer un site internet en 2026</h3>
              <p className="text-sm text-muted-foreground">Ce qu'une PME suisse doit exiger de son prestataire web.</p>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="container max-w-3xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4">
              Envie de savoir où en est votre site ?
            </h2>
            <p className="text-muted-foreground mb-8">
              Diagnostic initial gratuit. Réponse personnelle sous 24 heures.
            </p>
            <Button variant="hero" size="lg" className="rounded-full" asChild>
              <Link to="/contact">
                Diagnostic gratuit <ArrowRight className="ml-1" size={18} />
              </Link>
            </Button>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ConsultantSeoSuisseRomande;
