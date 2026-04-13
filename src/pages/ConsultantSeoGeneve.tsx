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

const secteursCles = [
  {
    nom: "Finance et banque",
    texte: "Genève est une place financière mondiale. Banques privées, gestionnaires de fortune, fintechs : la concurrence en ligne est féroce. Le SEO permet de se positionner sur des requêtes ciblées sans dépendre uniquement de la publicité payante. Un contenu de qualité et une autorité technique sont les clés pour ranker dans ce secteur exigeant.",
  },
  {
    nom: "Organisations internationales et ONG",
    texte: "La Genève internationale attire des recherches spécifiques, souvent en anglais. Un SEO bilingue (français et anglais) permet de capter ces audiences distinctes avec des contenus adaptés à chaque langue et chaque intention de recherche.",
  },
  {
    nom: "Hôtellerie de luxe et immobilier",
    texte: "Les recherches \"hôtel de luxe Genève\", \"appartement à louer Genève\" ou \"agence immobilière Genève\" sont parmi les plus compétitives de Suisse romande. Un audit SEO identifie vos lacunes face aux concurrents et un plan d'action ciblé permet de gagner des positions sur ces requêtes à forte valeur commerciale.",
  },
  {
    nom: "Santé et cliniques privées",
    texte: "Genève concentre des cliniques privées, des spécialistes médicaux et des centres de bien-être. Les patients recherchent activement des praticiens sur Google. Un site techniquement propre, une fiche Google Business complète et des avis bien gérés font la différence entre un cabinet plein et un cabinet vide.",
  },
  {
    nom: "Commerce et services",
    texte: "Des boutiques de la rue du Rhône aux prestataires de services dans le quartier des Eaux-Vives, chaque commerce genevois peut capter des clients via la recherche locale. Le référencement local est souvent le levier le plus rentable : être visible quand quelqu'un cherche exactement ce que vous proposez, dans votre zone.",
  },
];

const fonctionnementRemote = [
  "Diagnostic initial par visioconférence (30 min, gratuit)",
  "Communication par email et outils de suivi partagés",
  "Rapports mensuels détaillés avec indicateurs clés",
  "Visioconférence de suivi selon la formule choisie",
  "Déplacement possible à Genève pour les projets qui le nécessitent",
  "Réponse sous 24 heures, du lundi au vendredi",
];

const ConsultantSeoGeneve = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "KUMO SEO - Consultant SEO Genève",
      url: "https://kumo-seo.ch/consultant-seo-geneve",
      description: "Consultant SEO indépendant pour entreprises genevoises. Audit technique, création de site, accompagnement mensuel. Sans engagement longue durée. Forfait fixe CHF.",
      areaServed: {
        "@type": "State",
        name: "Genève",
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
        { "@type": "ListItem", position: 3, name: "Genève", item: "https://kumo-seo.ch/consultant-seo-geneve" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Combien coûte un consultant SEO à Genève ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "L'audit SEO démarre à CHF 1'200 et les formules d'accompagnement commencent à CHF 250 par mois, selon les objectifs de votre entreprise.",
          },
        },
        {
          "@type": "Question",
          name: "Pourquoi travailler le SEO local à Genève ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Le SEO local permet d'être visible sur les recherches de proximité et dans Google Maps, là où les prospects genevois cherchent vos services.",
          },
        },
        {
          "@type": "Question",
          name: "Un consultant SEO peut-il travailler à distance pour Genève ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui. La majorité du suivi se fait à distance avec des rapports mensuels et des points réguliers, avec déplacement possible selon le projet.",
          },
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <SeoHead
        title="Consultant SEO à Genève - Audit & Référencement naturel | KUMO"
        description="Consultant SEO indépendant pour entreprises genevoises. Audit technique, création de site, accompagnement mensuel. Sans engagement longue durée. Forfait fixe CHF."
        canonical="https://kumo-seo.ch/consultant-seo-geneve"
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
                <BreadcrumbPage>Genève</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Hero */}
        <section className="container max-w-4xl mx-auto px-4 text-center mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="section-label mb-4">地域 Genève</p>
            <BlurText
              text="Consultant SEO à Genève : référencement naturel pour PME genevoises."
              as="h1"
              className="text-4xl md:text-5xl font-bold tracking-tight mb-6 justify-center"
              delay={120}
              animateBy="words"
              direction="top"
            />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Genève est le marché le plus compétitif de Suisse romande. Les PME genevoises font face à une concurrence internationale : sièges de multinationales, organisations internationales, et entreprises de toute la francophonie qui se positionnent sur les mêmes requêtes Google. Pour se démarquer dans ce contexte, il faut une stratégie SEO précise et exécutée avec rigueur. KUMO propose une approche boutique, pas une usine à sites. Un consultant indépendant, un forfait fixe en CHF, des résultats mesurables. Je travaille depuis Neuchâtel avec des clients dans tout le canton de Genève et le Grand Genève, par visioconférence et email, avec la possibilité de déplacements quand le projet le justifie.
            </p>
            <Button variant="hero" size="lg" className="rounded-full" asChild>
              <Link to="/contact">
                Diagnostic gratuit <ArrowRight className="ml-1" size={18} />
              </Link>
            </Button>
          </motion.div>
        </section>

        {/* SEO à Genève : marché ultra-compétitif */}
        <section className="container max-w-3xl mx-auto px-4 mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="section-label mb-4">市場 Le marché SEO</p>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-6">
              SEO à Genève : un marché <span className="text-gradient">ultra-compétitif.</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Genève est la deuxième ville de Suisse et un centre économique international. La concurrence en ligne y est particulièrement forte : des entreprises locales rivalisent avec des acteurs internationaux sur les mêmes requêtes Google. Dans ce contexte, un référencement approximatif ne suffit pas. Chaque détail technique compte : la vitesse de chargement, la structure du site, le balisage sémantique, la qualité du contenu.
              </p>
              <p>
                Pour une PME genevoise, le SEO local est un levier stratégique. Google Maps, la fiche Google Business, les résultats locaux : ces canaux captent les recherches de proximité et dirigent les clients vers votre porte. Mais la dimension internationale de Genève ouvre aussi des opportunités uniques. Le Grand Genève, avec sa dimension transfrontalière, permet de capter des recherches depuis la France voisine. Les entreprises qui servent une clientèle bilingue (français et anglais) peuvent doubler leur surface de capture en ciblant les deux langues.
              </p>
              <p>
                Le SEO local est souvent le levier le plus rentable pour une PME genevoise. Vos concurrents l'ont compris et investissent sur des mots-clés locaux à fort coût par clic. Le référencement organique vous permet de capter ces mêmes recherches durablement, sans dépendre d'un budget publicitaire mensuel.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Prestations SEO */}
        <section className="container max-w-4xl mx-auto px-4 mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="section-label mb-4">提供 Prestations</p>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-8">
              Nos prestations SEO pour <span className="text-gradient">Genève.</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-px bg-border/50 rounded-lg overflow-hidden">
            <Link to="/services/audit-seo" className="bg-card p-6 hover:bg-card/80 transition-colors">
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">検査 Audit</p>
              <h3 className="font-bold mb-2">Audit SEO - CHF 1'200</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                31 points de contrôle techniques, analyse de 3 concurrents genevois directs, plan d'action priorisé sur 90 jours. Votre site est évalué selon les critères qui comptent pour Google.
              </p>
            </Link>
            <Link to="/services/creation-site-web" className="bg-card p-6 hover:bg-card/80 transition-colors">
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">制作 Création</p>
              <h3 className="font-bold mb-2">Création de site internet - dès CHF 3'900</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Site web codé sur-mesure, pas un thème WordPress. Performance 90+ PageSpeed, SEO natif, hébergement suisse inclus. Adapté aux exigences du marché genevois.
              </p>
            </Link>
            <Link to="/services/accompagnement-seo" className="bg-card p-6 hover:bg-card/80 transition-colors">
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">伴走 Suivi</p>
              <h3 className="font-bold mb-2">Accompagnement SEO continu - dès CHF 250/mois</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Surveillance des positions, rapport mensuel, améliorations continues. Trois formules : maintenance (CHF 250), suivi visibilité (CHF 590), croissance (CHF 1'490).
              </p>
            </Link>
          </div>
        </section>

        {/* Secteurs clés */}
        <section className="container max-w-4xl mx-auto px-4 mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="section-label mb-4">業種 Secteurs clés</p>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-8">
              Secteurs clés à <span className="text-gradient">Genève.</span>
            </h2>
          </motion.div>
          <div className="space-y-4">
            {secteursCles.map((s, i) => (
              <motion.div
                key={s.nom}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass-card p-6"
              >
                <h3 className="font-bold mb-2">{s.nom}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.texte}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Collaboration à distance */}
        <section className="container max-w-4xl mx-auto px-4 mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="section-label mb-4">方法 Collaboration</p>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-8">
              Collaboration à distance depuis <span className="text-gradient">Neuchâtel.</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-4">
            {fonctionnementRemote.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 glass-card p-4"
              >
                <Check size={16} className="text-primary shrink-0" />
                <span className="text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link to="/consultant-seo-lausanne" className="text-sm text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1 font-medium">
              Consultant SEO Lausanne <ArrowRight size={14} />
            </Link>
            <Link to="/services/accompagnement-seo#seo-local" className="text-sm text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1 font-medium">
              SEO local pour PME genevoises <ArrowRight size={14} />
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
              Questions fréquentes à <span className="text-gradient">Genève.</span>
            </h2>
          </motion.div>
          <div className="space-y-4">
            <div className="glass-card p-6">
              <h3 className="font-bold mb-2">Combien coûte un consultant SEO à Genève ?</h3>
              <p className="text-sm text-muted-foreground">L'audit SEO démarre à CHF 1'200 et les formules d'accompagnement commencent à CHF 250 par mois.</p>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-bold mb-2">Pourquoi travailler le SEO local à Genève ?</h3>
              <p className="text-sm text-muted-foreground">Parce que vos prospects cherchent en priorité sur Google et Google Maps avant de prendre contact.</p>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-bold mb-2">Peut-on gérer un projet SEO Genève à distance ?</h3>
              <p className="text-sm text-muted-foreground">Oui, avec un suivi mensuel structuré et des échanges réguliers. Les rendez-vous sur place restent possibles.</p>
            </div>
          </div>
        </section>

        {/* Articles liés */}
        <section className="container max-w-4xl mx-auto px-4 mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="section-label mb-4">記事 Sur le blog</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-px bg-border/50 rounded-lg overflow-hidden">
            <Link to="/blog/mise-a-jour-google-mars-2026-pme-suisse" className="bg-card p-6 hover:bg-card/80 transition-colors">
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">Actualité</p>
              <h3 className="font-bold mb-2">Mise à jour Google mars 2026</h3>
              <p className="text-sm text-muted-foreground">Ce que ça change pour votre entreprise en Suisse.</p>
            </Link>
            <Link to="/blog/site-invisible-google-pme-suisse" className="bg-card p-6 hover:bg-card/80 transition-colors">
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">Guide</p>
              <h3 className="font-bold mb-2">Votre site est invisible sur Google ?</h3>
              <p className="text-sm text-muted-foreground">5 causes fréquentes chez les PME romandes et comment y remédier.</p>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="container max-w-3xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4">
              Prenez contact.
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

export default ConsultantSeoGeneve;
