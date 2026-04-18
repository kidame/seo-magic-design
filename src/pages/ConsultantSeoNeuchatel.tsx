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

const secteurs = [
  {
    nom: "Horlogerie et microtechnique",
    texte: "Le canton de Neuchâtel est le berceau de l'industrie horlogère suisse. Beaucoup de sous-traitants et manufactures ont un site web qui ne reflète pas leur savoir-faire. Un audit SEO permet d'identifier les lacunes techniques et de rendre votre expertise visible sur les moteurs de recherche, y compris à l'international.",
  },
  {
    nom: "Artisans et commerces locaux",
    texte: "Menuisier, électricien, boulanger à Neuchâtel : vos clients passent par Google avant de se déplacer. Si votre concurrent apparaît en premier, c'est souvent lui qui reçoit l'appel.",
  },
  {
    nom: "Restaurants et hôtellerie",
    texte: "Restaurateurs, cafetiers, hôteliers à Neuchâtel : les gens consultent Google avant de choisir où aller manger ou dormir. Horaires du jour, menu, photos récentes, avis : ce que votre fiche affiche conditionne leur choix bien avant qu'ils passent la porte.",
  },
  {
    nom: "Cabinets et professions libérales",
    texte: "Avocats, fiduciaires, architectes à Neuchâtel : avant de vous appeler, une bonne partie de vos clients potentiels regardent votre site et vos avis. Ce qu'ils trouvent, ou ne trouvent pas, influe sur leur décision avant même qu'ils aient composé votre numéro.",
  },
  {
    nom: "Santé et bien-être",
    texte: "Physiothérapeutes, dentistes, médecins : vos futurs patients cherchent en ligne avant de choisir. Une fiche incomplète ou un site introuvable, c'est un rendez-vous qui part chez le praticien d'à côté.",
  },
];

const zones = [
  "Neuchâtel ville",
  "Val-de-Travers",
  "La Chaux-de-Fonds",
  "Le Locle",
  "Boudry",
  "Colombier",
  "Peseux",
  "Cortaillod",
  "Hauterive",
  "Marin-Epagnier",
];

const ConsultantSeoNeuchatel = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "KUMO SEO - Consultant SEO Neuchâtel",
      url: "https://kumo-seo.ch/consultant-seo-neuchatel",
      logo: "https://kumo-seo.ch/logo-kumo.png",
      telephone: "+41 78 930 81 00",
      email: "thomas.puglisi@kumo-seo.ch",
      description: "Consultant SEO indépendant à Neuchâtel. Audit SEO 31 points, création de site web sur-mesure, accompagnement mensuel. Forfait fixe pour PME neuchâteloises.",
      areaServed: {
        "@type": "State",
        name: "Neuchâtel",
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
      geo: {
        "@type": "GeoCoordinates",
        latitude: 46.9333,
        longitude: 6.6333,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://kumo-seo.ch/" },
        { "@type": "ListItem", position: 2, name: "Consultant SEO Suisse romande", item: "https://kumo-seo.ch/consultant-seo-suisse-romande" },
        { "@type": "ListItem", position: 3, name: "Neuchâtel", item: "https://kumo-seo.ch/consultant-seo-neuchatel" },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <SeoHead
        title="Consultant SEO Neuchâtel - Audit & Création Web | KUMO"
        description="Consultant SEO basé à Val-de-Travers, canton de Neuchâtel. Rendez-vous sur place, fiche Google locale, site optimisé. Forfait fixe dès CHF 1'200."
        canonical="https://kumo-seo.ch/consultant-seo-neuchatel"
        jsonLd={jsonLd}
      />
      <Navbar />
      <main id="main-content" className="pt-32 pb-24">
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
                <BreadcrumbPage>Neuchâtel</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Hero */}
        <section className="container max-w-4xl mx-auto px-4 text-center mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="section-label mb-4">地域 Neuchâtel</p>
            <BlurText
              text="Consultant SEO à Neuchâtel : plus de visibilité pour votre entreprise."
              as="h1"
              className="text-4xl md:text-5xl font-bold tracking-tight mb-6 justify-center"
              delay={120}
              animateBy="words"
              direction="top"
            />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Basé à Val-de-Travers, au coeur du canton de Neuchâtel, j'aide les PME neuchâteloises à gagner en visibilité sur Google. En tant que consultant SEO indépendant, je propose des forfaits fixes et transparents : audit technique, création de sites web sur-mesure et accompagnement SEO continu. Pas d'intermédiaire, pas de frais cachés. Un seul interlocuteur qui connaît votre marché local et qui travaille avec vous du diagnostic jusqu'aux résultats. Les PME neuchâteloises sont souvent moins visibles en ligne que leurs concurrentes lausannoises ou genevoises. C'est une réalité, mais c'est aussi une opportunité : le marché local est moins saturé, et chaque position gagnée sur Google a un impact direct sur votre chiffre d'affaires.
            </p>
            <Button variant="hero" size="lg" className="rounded-full" asChild>
              <Link to="/contact">
                Diagnostic gratuit <ArrowRight className="ml-1" size={18} />
              </Link>
            </Button>
          </motion.div>
        </section>

        {/* Pourquoi un consultant SEO local */}
        <section className="container max-w-3xl mx-auto px-4 mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="section-label mb-4">特長 Pourquoi un consultant local</p>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-6">
              Pourquoi les PME de Neuchâtel ont besoin d'un consultant SEO <span className="text-gradient">local.</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Le canton de Neuchâtel possède un tissu économique riche mais concentré. L'horlogerie, la microtechnique, les commerces de proximité et les professions libérales forment l'essentiel de l'activité. Pourtant, beaucoup de ces entreprises restent invisibles sur Google, faute d'un site web correctement optimisé ou d'une fiche Google Business bien configurée.
              </p>
              <p>
                Dans un marché plus petit que Lausanne ou Genève, chaque position gagnée dans les résultats de recherche compte davantage. Un artisan qui apparaît en première page pour "menuisier Neuchâtel" ou un restaurant visible sur Google Maps capte directement les clients de sa zone. Le référencement local est le levier le plus rentable pour une PME neuchâteloise.
              </p>
              <p>
                Travailler avec un consultant basé dans le canton, c'est travailler avec quelqu'un qui connaît le terrain. Je comprends les réalités économiques locales, les habitudes de recherche de vos clients, et la concurrence dans votre secteur. Contrairement aux agences basées à Lausanne ou Genève, je ne facture pas au temps passé. Mes forfaits sont fixes, définis à l'avance, et adaptés aux budgets des PME neuchâteloises.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Services SEO */}
        <section className="container max-w-4xl mx-auto px-4 mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="section-label mb-4">提供 Services</p>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-8">
              Nos services SEO pour les entreprises <span className="text-gradient">neuchâteloises.</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-px bg-border/50 rounded-lg overflow-hidden">
            <Link to="/services/audit-seo" className="bg-card p-6 hover:bg-card/80 transition-colors">
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">検査 Audit</p>
              <h3 className="font-bold mb-2">Audit SEO - CHF 1'200</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                31 points de contrôle, analyse de 3 concurrents, plan d'action priorisé sur 90 jours. Vous savez exactement où vous en êtes et quoi corriger en premier. Appel de restitution de 30 minutes inclus.
              </p>
            </Link>
            <Link to="/services/creation-site-web" className="bg-card p-6 hover:bg-card/80 transition-colors">
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">制作 Création</p>
              <h3 className="font-bold mb-2">Site web sur-mesure - dès CHF 3'900</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Site codé en React, optimisé SEO dès la première ligne. Performance 90+ PageSpeed, design sur-mesure, hébergement suisse inclus la première année. Pas de CMS lourd, pas de template.
              </p>
            </Link>
            <Link to="/services/accompagnement-seo" className="bg-card p-6 hover:bg-card/80 transition-colors">
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">伴走 Suivi</p>
              <h3 className="font-bold mb-2">Accompagnement SEO - dès CHF 250/mois</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Suivi mensuel continu : surveillance des positions, rapport détaillé, améliorations ciblées. Trois formules selon vos objectifs : maintenance, suivi visibilité ou croissance active.
              </p>
            </Link>
          </div>
          <div className="glass-card p-6 mt-6">
            <h3 className="font-bold mb-2">Création de site web à Neuchâtel</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              La création site web Neuchâtel est un levier direct pour les PME qui veulent être trouvées localement.
              Le site est conçu pour vos clients neuchâtelois, hébergé en Suisse et structuré pour convertir les recherches locales en demandes de contact.
            </p>
          </div>
        </section>

        {/* Secteurs d'activité */}
        <section className="container max-w-4xl mx-auto px-4 mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="section-label mb-4">業種 Secteurs d'activité</p>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-8">
              Secteurs d'activité à <span className="text-gradient">Neuchâtel.</span>
            </h2>
          </motion.div>
          <div className="space-y-4">
            {secteurs.map((s, i) => (
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

        {/* Zones couvertes */}
        <section className="container max-w-4xl mx-auto px-4 mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="section-label mb-4">地図 Zones couvertes</p>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-8">
              Zones couvertes dans le canton de <span className="text-gradient">Neuchâtel.</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {zones.map((z, i) => (
              <motion.div
                key={z}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="flex items-center gap-3 glass-card p-4"
              >
                <Check size={16} className="text-primary-light shrink-0" />
                <span className="text-sm">{z}</span>
              </motion.div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link to="/consultant-seo-la-chaux-de-fonds" className="text-sm text-primary-light hover:text-primary/80 transition-colors inline-flex items-center gap-1 font-medium">
              Consultant SEO La Chaux-de-Fonds <ArrowRight size={14} />
            </Link>
            <Link to="/consultant-seo-suisse-romande" className="text-sm text-primary-light hover:text-primary/80 transition-colors inline-flex items-center gap-1 font-medium">
              Toutes les zones couvertes <ArrowRight size={14} />
            </Link>
          </div>
        </section>

        {/* Articles liés */}
        <section className="container max-w-4xl mx-auto px-4 mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="section-label mb-4">記事 Sur le blog</p>
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
              <p className="text-sm text-muted-foreground">Ce qu'une PME suisse doit exiger de son prestataire.</p>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="container max-w-3xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4">
              Contactez votre consultant SEO à Neuchâtel.
            </h2>
            <p className="text-muted-foreground mb-4">
              Diagnostic initial gratuit. Réponse personnelle sous 24 heures.
            </p>
            <p className="text-sm text-muted-foreground mb-8">
              <a href="mailto:thomas.puglisi@kumo-seo.ch" className="hover:text-foreground transition-colors">thomas.puglisi@kumo-seo.ch</a>
              {" · "}
              <a href="tel:+41789308100" className="hover:text-foreground transition-colors">+41 78 930 81 00</a>
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

export default ConsultantSeoNeuchatel;
