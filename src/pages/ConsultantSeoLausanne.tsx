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

const industries = [
  {
    nom: "Tech et startups",
    texte: "L'écosystème tech lausannois, porté par l'EPFL et les incubateurs, produit des startups ambitieuses. Mais un bon produit ne suffit pas : sans visibilité organique, vous dépendez du bouche-à-oreille ou de la publicité payante. Le SEO technique et le contenu optimisé positionnent votre startup sur les requêtes qui génèrent des leads qualifiés.",
  },
  {
    nom: "Hôtellerie et tourisme",
    texte: "Lausanne attire des visiteurs pour ses vignobles classés UNESCO, ses musées et sa position au bord du Léman. Les recherches \"hôtel Lausanne\", \"restaurant vue lac Léman\" ou \"activités Lausanne\" génèrent un trafic qualifié. Un référencement local efficace et une fiche Google Business optimisée transforment ces recherches en réservations.",
  },
  {
    nom: "Santé et formation",
    texte: "Cliniques, cabinets médicaux, centres de formation : Lausanne concentre une forte densité de professionnels de la santé et de l'éducation. Vos patients et étudiants commencent leur recherche sur Google. Être visible pour \"dentiste Lausanne\" ou \"formation continue Vaud\" est un avantage concurrentiel direct.",
  },
  {
    nom: "Commerce de détail et services B2B",
    texte: "Du commerce de la rue de Bourg aux prestataires B2B du quartier du Flon, les entreprises lausannoises doivent être trouvables en ligne. Le référencement local, combiné à un site rapide et bien structuré, capte les clients au moment où ils cherchent exactement ce que vous proposez.",
  },
];

const atouts = [
  "Un interlocuteur unique, pas une équipe qui tourne",
  "Forfait fixe annoncé avant le début du travail",
  "Pas de contrat longue durée imposé",
  "Rapport mensuel avec les indicateurs qui comptent",
  "Réactivité : réponse sous 24 heures",
  "Connaissance du marché romand et de ses spécificités",
];

const ConsultantSeoLausanne = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "KUMO SEO - Consultant SEO Lausanne",
      url: "https://kumo-seo.ch/consultant-seo-lausanne",
      description: "Consultant SEO pour entreprises lausannoises. Audit SEO complet, création web sur-mesure, suivi mensuel. Intervention à distance ou sur place. Forfait fixe.",
      areaServed: {
        "@type": "State",
        name: "Vaud",
        containedInPlace: {
          "@type": "Country",
          name: "Suisse",
        },
      },
      provider: {
        "@type": "Person",
        name: "Thomas Puglisi",
        jobTitle: "Consultant SEO",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Val-de-Travers",
        addressRegion: "Neuchâtel",
        addressCountry: "CH",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://kumo-seo.ch/" },
        { "@type": "ListItem", position: 2, name: "Consultant SEO Suisse romande", item: "https://kumo-seo.ch/consultant-seo-suisse-romande" },
        { "@type": "ListItem", position: 3, name: "Lausanne", item: "https://kumo-seo.ch/consultant-seo-lausanne" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Combien coûte un consultant SEO à Lausanne ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Chez KUMO, l'audit SEO démarre à CHF 1'200 et les formules de suivi mensuel démarrent à CHF 250. Le périmètre est défini à l'avance avec un forfait fixe.",
          },
        },
        {
          "@type": "Question",
          name: "Pourquoi choisir un consultant SEO local à Lausanne ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Un consultant SEO local connaît les intentions de recherche du canton de Vaud et adapte la stratégie à votre zone de chalandise.",
          },
        },
        {
          "@type": "Question",
          name: "Est-ce que vous proposez du SEO local pour Lausanne ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui. Le suivi inclut le SEO local, l'optimisation de la fiche Google Business et l'amélioration des pages locales.",
          },
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <SeoHead
        title="Consultant SEO à Lausanne - Audit & Référencement | KUMO"
        description="Consultant SEO pour entreprises lausannoises. Audit SEO complet, création web sur-mesure, suivi mensuel. Intervention à distance ou sur place. Forfait fixe."
        canonical="https://kumo-seo.ch/consultant-seo-lausanne"
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
                <BreadcrumbLink asChild><Link to="/consultant-seo-suisse-romande">Consultant SEO</Link></BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Lausanne</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Hero */}
        <section className="container max-w-4xl mx-auto px-4 text-center mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="section-label mb-4">地域 Lausanne</p>
            <BlurText
              text="Consultant SEO à Lausanne : boostez la visibilité de votre entreprise."
              as="h1"
              className="text-4xl md:text-5xl font-bold tracking-tight mb-6 justify-center"
              delay={120}
              animateBy="words"
              direction="top"
            />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Lausanne est un marché compétitif. Agences web, consultants, freelances : les offres SEO ne manquent pas dans le canton de Vaud. Ce qui manque, c'est la clarté. KUMO propose une alternative simple : un consultant SEO indépendant, un forfait fixe annoncé avant le premier jour de travail, et un seul interlocuteur du début à la fin. Pas d'équipe intermédiaire, pas de réunions inutiles. Je travaille principalement à distance (visioconférence, email, rapports partagés), avec la possibilité de me déplacer à Lausanne pour les rendez-vous clés. Que vous soyez une startup du quartier de l'Innovation Park, un commerce du centre-ville ou un cabinet à Pully, l'objectif est le même : comprendre où vous en êtes sur Google et mettre en place un plan concret pour progresser.
            </p>
            <Button variant="hero" size="lg" className="rounded-full" asChild>
              <Link to="/contact">
                Diagnostic gratuit <ArrowRight className="ml-1" size={18} />
              </Link>
            </Button>
          </motion.div>
        </section>

        {/* Le marché SEO à Lausanne */}
        <section className="container max-w-3xl mx-auto px-4 mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="section-label mb-4">市場 Le marché SEO</p>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-6">
              Le marché SEO à Lausanne : pourquoi un freelance peut faire la <span className="text-gradient">différence.</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Lausanne est la quatrième ville de Suisse et le coeur du canton de Vaud. La concurrence en ligne y est forte : chaque secteur d'activité compte plusieurs acteurs qui se battent pour les mêmes positions dans Google. Les agences lausannoises proposent souvent des forfaits opaques, facturés au temps passé, avec plusieurs chefs de projet qui se relaient sur votre dossier.
              </p>
              <p>
                Un consultant SEO freelance, c'est l'inverse. Un seul interlocuteur, une réactivité directe, un prix maîtrisé. Je ne vends pas des heures : je vends un résultat. Un audit avec ses recommandations. Un site avec ses pages optimisées. Un suivi mensuel avec ses indicateurs concrets. Vous savez ce que vous payez et ce que vous recevez, dès le départ.
              </p>
              <p>
                Le référencement naturel à Lausanne demande une approche ciblée. Il ne suffit pas d'optimiser quelques balises : il faut comprendre les requêtes locales, travailler la fiche Google Business, produire du contenu qui répond aux questions réelles de vos prospects. C'est ce que je fais pour chaque client, en m'adaptant à votre secteur et à votre zone de chalandise.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Services SEO */}
        <section className="container max-w-4xl mx-auto px-4 mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="section-label mb-4">提供 Services</p>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-8">
              Services SEO disponibles à <span className="text-gradient">Lausanne.</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-px bg-border/50 rounded-lg overflow-hidden">
            <Link to="/services/audit-seo" className="bg-card p-6 hover:bg-card/80 transition-colors">
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">検査 Audit</p>
              <h3 className="font-bold mb-2">Audit SEO complet - CHF 1'200</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                31 points de contrôle techniques, analyse de 3 concurrents directs dans votre marché lausannois, et un plan d'action priorisé sur 90 jours. Restitution en visioconférence de 30 minutes.
              </p>
            </Link>
            <Link to="/services/creation-site-web" className="bg-card p-6 hover:bg-card/80 transition-colors">
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">制作 Création</p>
              <h3 className="font-bold mb-2">Site web performant - dès CHF 3'900</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Site codé sur-mesure en React, pas un template WordPress. Performance 90+ PageSpeed, SEO intégré dès la conception, hébergement suisse inclus la première année.
              </p>
            </Link>
            <Link to="/services/accompagnement-seo" className="bg-card p-6 hover:bg-card/80 transition-colors">
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">伴走 Suivi</p>
              <h3 className="font-bold mb-2">Suivi et accompagnement - dès CHF 250/mois</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Surveillance des positions, rapport mensuel détaillé, améliorations continues. Trois formules adaptées à vos besoins : maintenance, visibilité ou croissance.
              </p>
            </Link>
          </div>
        </section>

        {/* Industries lausannoises */}
        <section className="container max-w-4xl mx-auto px-4 mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="section-label mb-4">業種 Industries</p>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-8">
              Industries lausannoises que nous <span className="text-gradient">accompagnons.</span>
            </h2>
          </motion.div>
          <div className="space-y-4">
            {industries.map((ind, i) => (
              <motion.div
                key={ind.nom}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass-card p-6"
              >
                <h3 className="font-bold mb-2">{ind.nom}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{ind.texte}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Comment travailler avec KUMO */}
        <section className="container max-w-4xl mx-auto px-4 mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="section-label mb-4">方法 Fonctionnement</p>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-8">
              Comment travailler avec KUMO depuis <span className="text-gradient">Lausanne.</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-4">
            {atouts.map((a, i) => (
              <motion.div
                key={a}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 glass-card p-4"
              >
                <Check size={16} className="text-primary shrink-0" />
                <span className="text-sm">{a}</span>
              </motion.div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link to="/consultant-seo-geneve" className="text-sm text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1 font-medium">
              Consultant SEO Genève <ArrowRight size={14} />
            </Link>
            <Link to="/services/accompagnement-seo#seo-local" className="text-sm text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1 font-medium">
              SEO local pour PME vaudoises <ArrowRight size={14} />
            </Link>
            <Link to="/consultant-seo-suisse-romande" className="text-sm text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1 font-medium">
              Toutes les zones couvertes <ArrowRight size={14} />
            </Link>
          </div>
        </section>

        {/* FAQ locale */}
        <section className="container max-w-4xl mx-auto px-4 mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="section-label mb-4">FAQ locale</p>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-8">
              Questions fréquentes à <span className="text-gradient">Lausanne.</span>
            </h2>
          </motion.div>
          <div className="space-y-4">
            <div className="glass-card p-6">
              <h3 className="font-bold mb-2">Combien coûte un consultant SEO à Lausanne ?</h3>
              <p className="text-sm text-muted-foreground">L'audit SEO démarre à CHF 1'200 et les formules mensuelles démarrent à CHF 250. Le périmètre est clair avant le démarrage.</p>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-bold mb-2">Pourquoi choisir un consultant SEO local à Lausanne ?</h3>
              <p className="text-sm text-muted-foreground">Parce qu'il comprend les recherches locales, la concurrence vaudoise et les besoins des PME de Lausanne.</p>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-bold mb-2">Proposez-vous du SEO local pour Lausanne ?</h3>
              <p className="text-sm text-muted-foreground">Oui. Le suivi inclut l'optimisation locale, la fiche Google Business et le renforcement des pages géographiques.</p>
            </div>
          </div>
        </section>

        {/* Articles liés */}
        <section className="container max-w-4xl mx-auto px-4 mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="section-label mb-4">記事 Sur le blog</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-px bg-border/50 rounded-lg overflow-hidden">
            <Link to="/blog/creer-site-internet-pme-suisse-2026" className="bg-card p-6 hover:bg-card/80 transition-colors">
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">Guide</p>
              <h3 className="font-bold mb-2">Créer un site internet en 2026</h3>
              <p className="text-sm text-muted-foreground">Ce qu'une PME suisse doit exiger de son prestataire.</p>
            </Link>
            <Link to="/blog/mise-a-jour-google-mars-2026-pme-suisse" className="bg-card p-6 hover:bg-card/80 transition-colors">
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">Actualité</p>
              <h3 className="font-bold mb-2">Mise à jour Google mars 2026</h3>
              <p className="text-sm text-muted-foreground">Ce que ça change pour votre entreprise en Suisse.</p>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="container max-w-3xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4">
              Demandez un devis gratuit.
            </h2>
            <p className="text-muted-foreground mb-4">
              Diagnostic initial gratuit. Réponse personnelle sous 24 heures.
            </p>
            <p className="text-sm text-muted-foreground mb-8">
              contact@kumo-seo.ch
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

export default ConsultantSeoLausanne;
