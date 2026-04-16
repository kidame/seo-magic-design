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
    nom: "Horlogerie",
    texte: "Sous-traitants horlogers, ateliers de microtechnique, fabricants de composants : vos partenaires commerciaux cherchent aussi en ligne avant de prendre contact. Un site qui reflète votre niveau technique peut soutenir votre démarche commerciale. Pas seulement rester en ligne sans vrai rôle commercial.",
  },
  {
    nom: "Industrie et microtechnique",
    texte: "Ateliers d'usinage, bureaux d'études, fournisseurs de précision : vos donneurs d'ordre cherchent désormais leurs partenaires en ligne avant de lancer un appel d'offres. Un site qui présente clairement vos compétences techniques vous met dans la short-list.",
  },
  {
    nom: "Commerces et artisans",
    texte: "Artisans et PME à La Chaux-de-Fonds : le bouche-à-oreille fonctionne, mais il ne couvre pas tout le bassin de clientèle potentiel. Une présence Google structurée capte les demandes des personnes qui cherchent sans connaître quelqu'un dans votre réseau.",
  },
  {
    nom: "Architecture et patrimoine",
    texte: "Architectes, bureaux d'études, acteurs du patrimoine à La Chaux-de-Fonds : votre travail se montre. Un site qui présente vos projets et un référencement propre vous rendent trouvables quand un maître d'ouvrage ou un journaliste cherche un spécialiste local.",
  },
  {
    nom: "Santé et services",
    texte: "Thérapeutes, médecins, professions libérales : même dans une ville de cette taille, vos futurs clients passent par Google avant de vous contacter. Fiche incomplète, site introuvable, avis absents : chaque point manquant est une raison de passer au suivant.",
  },
];

const zonesProches = [
  "La Chaux-de-Fonds centre",
  "Le Locle",
  "Les Brenets",
  "Villers-le-Lac (France voisine)",
  "Val-de-Travers",
  "Neuchâtel",
];

const ConsultantSeoLaChaux = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "KUMO SEO - Consultant SEO La Chaux-de-Fonds",
      url: "https://kumo-seo.ch/consultant-seo-la-chaux-de-fonds",
      description: "Consultant SEO local pour PME de La Chaux-de-Fonds. Audit SEO, création web, suivi mensuel. Spécialiste de la région neuchâteloise. Forfait fixe.",
      areaServed: {
        "@type": "City",
        name: "La Chaux-de-Fonds",
        containedInPlace: {
          "@type": "State",
          name: "Neuchâtel",
          containedInPlace: {
            "@type": "Country",
            name: "Suisse",
          },
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
        { "@type": "ListItem", position: 3, name: "La Chaux-de-Fonds", item: "https://kumo-seo.ch/consultant-seo-la-chaux-de-fonds" },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <SeoHead
        title="Consultant SEO La Chaux-de-Fonds - Référencement PME | KUMO"
        description="Consultant SEO local pour PME de La Chaux-de-Fonds. Audit SEO, création web, suivi mensuel. Spécialiste de la région neuchâteloise. Forfait fixe."
        canonical="https://kumo-seo.ch/consultant-seo-la-chaux-de-fonds"
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
                <BreadcrumbPage>La Chaux-de-Fonds</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Hero */}
        <section className="container max-w-4xl mx-auto px-4 text-center mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="section-label mb-4">地域 La Chaux-de-Fonds</p>
            <BlurText
              text="Consultant SEO à La Chaux-de-Fonds : visibilité Google pour les entreprises locales."
              as="h1"
              className="text-4xl md:text-5xl font-bold tracking-tight mb-6 justify-center"
              delay={120}
              animateBy="words"
              direction="top"
            />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              La Chaux-de-Fonds est la troisième ville de Suisse romande et le coeur industriel des Montagnes neuchâteloises. Classée au patrimoine mondial de l'UNESCO pour son urbanisme horloger, la ville abrite un tissu économique unique en Suisse : horlogerie de luxe, microtechnique de pointe, artisanat et commerces de proximité. Pourtant, la majorité des entreprises chaux-de-fonnières restent peu visibles sur Google. Basé à Val-de-Travers, à moins de 30 minutes, j'interviens régulièrement dans les Montagnes neuchâteloises. En tant que consultant SEO indépendant, je propose des forfaits fixes et transparents, sans engagement longue durée, adaptés aux réalités économiques de la région.
            </p>
            <Button variant="hero" size="lg" className="rounded-full" asChild>
              <Link to="/contact">
                Diagnostic gratuit <ArrowRight className="ml-1" size={18} />
              </Link>
            </Button>
          </motion.div>
        </section>

        {/* Pourquoi le SEO à La Chaux-de-Fonds */}
        <section className="container max-w-3xl mx-auto px-4 mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="section-label mb-4">特長 Contexte local</p>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-6">
              Pourquoi le SEO compte pour les entreprises de La <span className="text-gradient">Chaux-de-Fonds.</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Les Montagnes neuchâteloises sont un marché à part en Suisse romande. Plus isolé géographiquement que Lausanne ou Genève, le bassin de La Chaux-de-Fonds et du Locle concentre pourtant une activité économique dense, tournée vers l'industrie de précision et le savoir-faire artisanal. Sur Google, cette spécificité est un avantage : la concurrence en ligne est moins féroce que dans les grandes villes, ce qui signifie que chaque effort SEO porte plus vite ses fruits.
              </p>
              <p>
                Pour un commerce local, apparaître en première page de Google pour "restaurant La Chaux-de-Fonds" ou "coiffeur La Chaux-de-Fonds" capte directement les clients de la zone. Pour une manufacture horlogère, un référencement international bien mené attire des distributeurs et des partenaires commerciaux du monde entier. Dans les deux cas, le point de départ est le même : un site web techniquement propre, un contenu pertinent, et une présence Google bien configurée.
              </p>
              <p>
                La proximité géographique avec la France (Villers-le-Lac, Morteau, Pontarlier) crée aussi une opportunité de référencement transfrontalier. Les entreprises qui servent des clients des deux côtés de la frontière peuvent cibler ces recherches et élargir leur zone de chalandise sans coût publicitaire supplémentaire.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Services */}
        <section className="container max-w-4xl mx-auto px-4 mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="section-label mb-4">提供 Services</p>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-8">
              Services SEO pour les entreprises de La <span className="text-gradient">Chaux-de-Fonds.</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-px bg-border/50 rounded-lg overflow-hidden">
            <Link to="/services/audit-seo" className="bg-card p-6 hover:bg-card/80 transition-colors">
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">検査 Audit</p>
              <h3 className="font-bold mb-2">Audit SEO - CHF 1'200</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                31 points de contrôle, analyse de 3 concurrents dans votre secteur, plan d'action priorisé sur 90 jours. Appel de restitution de 30 minutes inclus.
              </p>
            </Link>
            <Link to="/services/creation-site-web" className="bg-card p-6 hover:bg-card/80 transition-colors">
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">制作 Création</p>
              <h3 className="font-bold mb-2">Site web sur-mesure - dès CHF 3'900</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Site codé sur-mesure, optimisé SEO dès la conception. Performance 90+ PageSpeed, design unique, hébergement suisse inclus la première année.
              </p>
            </Link>
            <Link to="/services/accompagnement-seo" className="bg-card p-6 hover:bg-card/80 transition-colors">
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">伴走 Suivi</p>
              <h3 className="font-bold mb-2">Accompagnement SEO - dès CHF 250/mois</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Suivi mensuel : surveillance des positions, rapport détaillé, améliorations ciblées. Trois formules selon vos objectifs et votre budget.
              </p>
            </Link>
          </div>
        </section>

        {/* Secteurs d'activité */}
        <section className="container max-w-4xl mx-auto px-4 mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="section-label mb-4">業種 Secteurs d'activité</p>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-8">
              Secteurs d'activité à La <span className="text-gradient">Chaux-de-Fonds.</span>
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

        {/* Zones proches */}
        <section className="container max-w-4xl mx-auto px-4 mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="section-label mb-4">地図 Zones proches</p>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-8">
              Également actif dans les <span className="text-gradient">zones proches.</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {zonesProches.map((z, i) => (
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
            <Link to="/consultant-seo-neuchatel" className="text-sm text-primary-light hover:text-primary/80 transition-colors inline-flex items-center gap-1 font-medium">
              Consultant SEO Neuchâtel <ArrowRight size={14} />
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
              Contactez votre consultant SEO à La Chaux-de-Fonds.
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

export default ConsultantSeoLaChaux;
