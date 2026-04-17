import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import BlurText from "@/components/ui/blur-text";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

const mandatNiveaux = [
  { complexite: "Standard", prix: "2'900", profil: "Site vitrine simple, quelques pages, problèmes limités" },
  { complexite: "Élevé", prix: "4'500", profil: "Site vitrine professionnel, 20–50 pages" },
  { complexite: "Très élevé", prix: "À partir de 6'900", profil: "E-commerce ou site 50+ pages, problèmes multiples" },
];

const mandatInclus = [
  "Corrections techniques complètes (indexation, plan du site, balises)",
  "Optimisation de toutes les pages (titres, descriptions, structure)",
  "Amélioration du contenu (lisibilité, pages sous-performantes)",
  "Stratégie de visibilité externe",
  "Suivi de positionnement pendant la mission",
  "2 points d'avancement en visioconférence",
  "Rapport de résultats détaillé à 90 jours",
];

const suiviPlans = [
  {
    kanji: "保守",
    name: "Maintenance",
    price: "250",
    engagement: "Sans engagement, résiliable à 30 jours",
    pourQui: "Tout client avec un site actif KUMO.",
    features: [
      "Surveillance, sauvegardes, correctifs",
      "Sécurité & mises à jour",
      "Modifications mineures (max 30 min/mois)",
    ],
  },
  {
    kanji: "追跡",
    name: "Suivi Visibilité",
    price: "590",
    featured: true,
    engagement: "Engagement 6 mois, puis résiliable mensuellement",
    pourQui: "Entreprise qui veut progresser dans Google.",
    features: [
      "Tout Maintenance inclus",
      "Suivi positions & Search Console",
      "Rapport mensuel détaillé",
      "1 amélioration ciblée/mois",
      "Vérification fiche Google",
    ],
  },
  {
    kanji: "成長",
    name: "Croissance",
    price: "1'490",
    engagement: "Engagement 6 mois, puis résiliable mensuellement",
    pourQui: "Objectif de croissance active.",
    features: [
      "Tout Suivi Visibilité inclus",
      "1 sprint mensuel stratégique",
      "Analyse GSC approfondie",
      "Point mensuel 15 min",
      "Actions supp. : CHF 300/action",
    ],
  },
];

const AccompagnementSeo = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Formules de suivi SEO",
    description:
      "Formules de suivi SEO mensuel pour PME suisses : maintenance dès CHF 250/mois, suivi visibilité CHF 590/mois, croissance CHF 1'490/mois, avec un focus SEO local.",
    provider: {
      "@type": "ProfessionalService",
      name: "KUMO SEO",
      url: "https://kumo-seo.ch",
      logo: "https://kumo-seo.ch/logo-kumo.png",
      areaServed: { "@type": "Place", name: "Suisse romande" },
    },
    areaServed: { "@type": "Place", name: "Suisse romande" },
    serviceType: "Accompagnement SEO",
    additionalType: "SEO local",
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://kumo-seo.ch/" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://kumo-seo.ch/#services" },
      { "@type": "ListItem", position: 3, name: "Accompagnement SEO", item: "https://kumo-seo.ch/services/accompagnement-seo" },
    ],
  };

  return (
    <div className="min-h-screen">
      <SeoHead
        title="Accompagnement SEO mensuel | KUMO Neuchâtel"
        description="Formules de suivi SEO mensuel : maintenance dès CHF 250/mois, suivi visibilité CHF 590/mois, croissance CHF 1'490/mois. Pour PME suisses."
        canonical="https://kumo-seo.ch/services/accompagnement-seo"
        jsonLd={jsonLd}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
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
                <BreadcrumbLink href="/#services">Services</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Formules de suivi</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Hero */}
        <section className="container max-w-4xl mx-auto px-4 text-center mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ willChange: "transform, opacity" }}>
            <p className="section-label mb-4">伴走 Accompagnement</p>
            <BlurText
              text="Formules de suivi SEO."
              as="h1"
              className="text-4xl md:text-6xl font-bold tracking-tight mb-6 justify-center"
              delay={120}
              animateBy="words"
              direction="top"
            />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Si votre site existant a besoin d'un travail d'optimisation en profondeur, commencez par un Mandat SEO 90 jours. Ensuite, choisissez une formule mensuelle pour maintenir et améliorer vos positions dans la durée.
            </p>
            <Button variant="hero" size="lg" className="rounded-full" asChild>
              <Link to="/contact">
                Demander un devis <ArrowRight className="ml-1" size={18} />
              </Link>
            </Button>
          </motion.div>
        </section>

        {/* Mandat SEO 90 jours */}
        <section className="container max-w-4xl mx-auto px-4 mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="section-label mb-4">九十日 Mandat SEO 90 jours</p>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4">
              Optimisation en <span className="text-gradient">profondeur.</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl">
              Forfait fixe sur 90 jours. Toujours précédé d'un Audit SEO (1'200 CHF) qui détermine le niveau et le périmètre.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-px bg-border/50 rounded-lg overflow-hidden mb-8">
            {mandatNiveaux.map((n, i) => (
              <motion.div
                key={n.complexite}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card p-6 flex flex-col"
              >
                <span className="font-mono text-xs text-primary-light uppercase tracking-wider mb-2">{n.complexite}</span>
                <div className="text-gold font-mono font-bold text-xl mb-2">
                  {n.prix.startsWith("À") ? n.prix : `CHF ${n.prix}.–`}
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{n.profil}</p>
              </motion.div>
            ))}
          </div>

          <div className="glass-card p-6">
            <p className="font-mono text-xs text-primary-light uppercase tracking-wider mb-4">Ce qui est inclus</p>
            <div className="grid sm:grid-cols-2 gap-2">
              {mandatInclus.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <Check size={14} className="text-primary-light shrink-0 mt-0.5" />
                  <span className="text-xs text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Forfaits suivi */}
        <section className="container max-w-4xl mx-auto px-4 mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="section-label mb-4">月額 Forfaits mensuels</p>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-8">
              Trois formules <span className="text-gradient">de suivi.</span>
            </h2>
          </motion.div>
          <div className="grid lg:grid-cols-3 gap-px bg-border/50 rounded-lg overflow-hidden">
            {suiviPlans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`bg-card p-8 flex flex-col ${plan.featured ? "ring-1 ring-primary/30" : ""}`}
              >
                <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">
                  {plan.kanji} {plan.name} {plan.featured && "⭐"}
                </p>
                <p className="text-2xl font-bold mb-1">
                  <span className="font-mono text-gold">CHF {plan.price}.–</span>
                  <span className="text-sm text-muted-foreground font-normal">/mois</span>
                </p>
                <p className="text-xs text-muted-foreground mb-1">{plan.engagement}</p>
                <p className="text-xs text-muted-foreground mb-6">Pour qui : {plan.pourQui}</p>
                <ul className="space-y-3 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check size={14} className="text-primary-light shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button variant="hero" size="sm" className="rounded-full mt-8 w-full" asChild>
                  <Link to="/contact">Demander un devis</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SEO local */}
        <section id="seo-local" className="container max-w-4xl mx-auto px-4 mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="section-label mb-4">SEO local</p>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-6">
              SEO local pour <span className="text-gradient">PME suisses.</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Le SEO local vous aide à capter les recherches de proximité au moment où un prospect cherche déjà votre service.
                Cela passe par l'optimisation de la fiche Google Business, la cohérence des informations NAP et des pages locales solides.
              </p>
              <p>
                Dans l'accompagnement KUMO, le SEO local est intégré au suivi : contrôle de visibilité locale, ajustements de contenu et amélioration continue des signaux qui comptent pour Google.
              </p>
              <p>
                Cette approche est particulièrement utile pour les entreprises actives en Suisse romande, notamment à Neuchâtel, Lausanne et Genève.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Services complémentaires */}
        <section className="container max-w-4xl mx-auto px-4 mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="section-label mb-4">関連 Voir aussi</p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
              Services <span className="text-gradient">complémentaires.</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-px bg-border/50 rounded-lg overflow-hidden">
            <Link to="/services/audit-seo" className="bg-card p-6 hover:bg-card/80 transition-colors">
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">検査 Audit</p>
              <h3 className="font-bold mb-2">Audit SEO technique</h3>
              <p className="text-sm text-muted-foreground">31 points de contrôle pour identifier les problèmes de votre site.</p>
            </Link>
            <Link to="/services/creation-site-web" className="bg-card p-6 hover:bg-card/80 transition-colors">
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">制作 Création</p>
              <h3 className="font-bold mb-2">Site web sur-mesure</h3>
              <p className="text-sm text-muted-foreground">Un site performant et optimisé SEO dès la première ligne de code.</p>
            </Link>
            <Link to="/consultant-seo-suisse-romande" className="bg-card p-6 hover:bg-card/80 transition-colors">
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">地域 Zones</p>
              <h3 className="font-bold mb-2">Suisse romande</h3>
              <p className="text-sm text-muted-foreground">Consultant SEO actif dans toute la Romandie.</p>
            </Link>
          </div>
        </section>

        {/* Articles liés */}
        <section className="container max-w-4xl mx-auto px-4 mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="section-label mb-4">記事 Articles liés</p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
              Sur le <span className="text-gradient">blog.</span>
            </h2>
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
              Prêt à passer à l'action ?
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

export default AccompagnementSeo;
