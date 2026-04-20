import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, X } from "lucide-react";
import BlurText from "@/components/ui/blur-text";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

const avantages = [
  "Performance optimale : objectif 90+ PageSpeed",
  "Sécurité renforcée : pas de plugins vulnérables",
  "SEO natif : balisage sémantique dès la conception",
  "Design sur-mesure : aucun template générique",
  "Léger et rapide : code minimal, pas de bloat",
  "Maintenable : structure claire, documentation incluse",
];

const technologies = [
  { name: "React / Vite", desc: "Interface performante et modulaire" },
  { name: "TypeScript", desc: "Code robuste et maintenable" },
  { name: "Tailwind CSS", desc: "Design system cohérent" },
  { name: "Framer Motion", desc: "Animations fluides et légères" },
];

const siteFeatures = [
  "Pages",
  "Préparation stratégique",
  "Optimisé pour Google",
  "Responsive mobile",
  "Hébergement Suisse 1ère année",
  "Rédaction guidée",
  "Rédaction complète par KUMO",
  "Fiche Google",
  "Annuaires suisses + NAP",
  "Design sur-mesure",
  "Accompagnement 3 mois",
];

const sitePlans = [
  {
    kanji: "基本",
    name: "Essentiel",
    price: "3'900",
    featured: false,
    badge: undefined as string | undefined,
    pourQui: "Indépendant, artisan, activité simple avec un service principal.",
    description: "Une base solide. 4 pages sur-mesure pour présenter votre activité et être visible localement.",
    noteSpeciale: "Rédaction guidée : KUMO définit avec vous la structure et les contenus attendus. Vous fournissez la matière. KUMO adapte et optimise pour Google.",
    values: ["4", true, true, true, true, true, false, false, false, true, false] as (string | boolean)[],
  },
  {
    kanji: "推奨",
    name: "Pro",
    price: "4'900",
    featured: true,
    badge: "La formule la plus choisie",
    pourQui: "Entreprise locale qui veut être trouvée et prise au sérieux.",
    description: "La formule complète. 5 à 8 pages, présence locale optimisée, contenus rédigés, fiche Google configurée.",
    noteSpeciale: "Rédaction complète : KUMO rédige l'ensemble des textes. Vous validez, on ajuste.",
    values: ["5–8", true, true, true, true, false, true, true, true, true, false] as (string | boolean)[],
  },
  {
    kanji: "最上",
    name: "Premium",
    price: "6'500",
    featured: false,
    badge: "Lancement accompagné",
    pourQui: "Activité avec plusieurs services, ambition de croissance, besoin d'accompagnement au lancement.",
    description: "Site complet + 3 mois de suivi après mise en ligne. Suivi visibilité Google, ajustements contenu, rapport mensuel, support prioritaire.",
    noteSpeciale: "Après les 3 mois inclus, transition vers une formule de suivi mensuel.",
    values: ["≤10", true, true, true, true, false, true, true, true, true, true] as (string | boolean)[],
  },
];

const CreationSiteWeb = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Création de site web sur-mesure",
    description:
      "Création de site web sur-mesure en code : 3 forfaits de CHF 3'900 à CHF 6'500. Performance 90+ PageSpeed, SEO natif.",
    provider: {
      "@type": "ProfessionalService",
      name: "KUMO SEO",
      url: "https://kumo-seo.ch/",
      logo: "https://kumo-seo.ch/logo-kumo.png",
      areaServed: { "@type": "Place", name: "Suisse romande" },
    },
    areaServed: { "@type": "Place", name: "Suisse romande" },
    serviceType: "Création de site web",
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://kumo-seo.ch/" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://kumo-seo.ch/#services" },
      { "@type": "ListItem", position: 3, name: "Création de site web", item: "https://kumo-seo.ch/services/creation-site-web/" },
    ],
  };

  return (
    <div className="min-h-screen">
      <SeoHead
        title="Création de site web sur-mesure | KUMO Neuchâtel"
        description="Site web sur-mesure en code : 3 forfaits dès CHF 3'900. Performance 90+ PageSpeed, SEO intégré dès la conception. Pour PME suisses."
        canonical="https://kumo-seo.ch/services/creation-site-web/"
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
                <BreadcrumbPage>Création de site web</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Hero */}
        <section className="container max-w-4xl mx-auto px-4 text-center mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ willChange: "transform, opacity" }}>
            <p className="section-label mb-4">制作 Création web</p>
            <BlurText
              text="Sites web sur-mesure."
              as="h1"
              className="text-4xl md:text-6xl font-bold tracking-tight mb-6 justify-center"
              delay={120}
              animateBy="words"
              direction="top"
            />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Du code propre, performant et optimisé SEO dès la première ligne.
              Pas de template. Pas de CMS lourd. Juste ce dont vous avez besoin.
            </p>
            <Button variant="hero" size="lg" className="rounded-full" asChild>
              <Link to="/contact/">
                Demander un devis <ArrowRight className="ml-1" size={18} />
              </Link>
            </Button>
          </motion.div>
        </section>

        {/* Avantages */}
        <section className="container max-w-4xl mx-auto px-4 mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="section-label mb-4">利点 Avantages</p>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-8">
              Pourquoi le <span className="text-gradient">sur-mesure.</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-4">
            {avantages.map((item, i) => (
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

        {/* Technologies */}
        <section className="container max-w-4xl mx-auto px-4 mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="section-label mb-4">技術 Stack technique</p>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-8">
              Technologies <span className="text-gradient">utilisées.</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-px bg-border/50 rounded-lg overflow-hidden">
            {technologies.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card p-6"
              >
                <h3 className="font-bold mb-2">{t.name}</h3>
                <p className="text-sm text-muted-foreground">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Grille tarifaire */}
        <section className="container max-w-4xl mx-auto px-4 mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="section-label mb-4">価格 Tarifs</p>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-8">
              Trois forfaits, un seul <span className="text-gradient">standard.</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-4 mb-4">
            {sitePlans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`bg-card border rounded-lg p-8 flex flex-col ${plan.featured ? "border-primary/30 ring-1 ring-primary/20" : "border-border/50"}`}
              >
                {plan.badge && (
                  <span className="inline-block text-xs font-mono text-primary-light border border-primary/30 rounded-full px-2 py-0.5 mb-3 self-start">
                    {plan.badge}
                  </span>
                )}
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">
                  {plan.kanji} {plan.name} {plan.featured && "⭐"}
                </span>
                <div className="text-gold font-mono font-bold text-2xl mb-1">CHF {plan.price}.–</div>
                <p className="text-xs text-muted-foreground mb-3">{plan.description}</p>
                {plan.noteSpeciale && (
                  <p className="text-xs text-primary/80 italic mb-4 leading-relaxed">{plan.noteSpeciale}</p>
                )}
                <p className="text-xs text-muted-foreground/80 mb-6">Pour qui : {plan.pourQui}</p>

                <div className="space-y-2 flex-1">
                  {siteFeatures.map((feat, j) => {
                    const val = plan.values[j];
                    return (
                      <div key={feat} className="flex items-center gap-2">
                        {typeof val === "string" ? (
                          <span className="text-xs font-mono text-gold shrink-0 min-w-[2rem] text-center">{val}</span>
                        ) : val ? (
                          <Check size={14} className="text-primary-light shrink-0" />
                        ) : (
                          <X size={14} className="text-muted-foreground/30 shrink-0" />
                        )}
                        <span className="text-xs text-muted-foreground">{feat}</span>
                      </div>
                    );
                  })}
                </div>

                <Link
                  to="/contact/"
                  className="text-sm text-primary-light hover:text-primary/80 transition-colors inline-flex items-center gap-1 font-medium mt-6"
                >
                  Demander un devis <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>

          <p className="text-xs text-muted-foreground mb-2">
            Étude et plan (CHF 1'190) créditée à 100 % si vous signez un forfait site.
          </p>
          <p className="text-xs text-muted-foreground mb-8">
            Paiement : 40 % à la commande, 60 % à la livraison. Deux séries de retours incluses. Garantie 30 jours.
          </p>

          {/* Hébergement sub-section */}
          <div className="glass-card p-6">
            <p className="font-mono text-xs text-primary-light uppercase tracking-wider mb-3">Hébergement et domaine</p>
            <div className="grid sm:grid-cols-3 gap-4 text-sm">
              <div className="flex items-start gap-2">
                <Check size={14} className="text-primary-light shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Première année incluse dans tous les forfaits site.</span>
              </div>
              <div className="flex items-start gap-2">
                <Check size={14} className="text-primary-light shrink-0 mt-0.5" />
                <span className="text-muted-foreground">À partir de l'année 2 : <span className="text-gold font-mono font-semibold">290 CHF/an</span> (hébergement suisse + domaine + SSL).</span>
              </div>
              <div className="flex items-start gap-2">
                <Check size={14} className="text-primary-light shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Inclus sans frais pour les clients avec une formule de suivi active.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services complémentaires */}
        <section className="container max-w-4xl mx-auto px-4 mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="section-label mb-4">関連 Voir aussi</p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
              Optimisez votre <span className="text-gradient">visibilité.</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-px bg-border/50 rounded-lg overflow-hidden">
            <Link to="/services/audit-seo/" className="bg-card p-6 hover:bg-card/80 transition-colors">
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">検査 Audit</p>
              <h3 className="font-bold mb-2">Audit SEO technique</h3>
              <p className="text-sm text-muted-foreground">Diagnostiquez votre site existant avec 31 points de contrôle.</p>
            </Link>
            <Link to="/services/accompagnement-seo/" className="bg-card p-6 hover:bg-card/80 transition-colors">
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">伴走 Suivi</p>
              <h3 className="font-bold mb-2">Accompagnement SEO</h3>
              <p className="text-sm text-muted-foreground">Maintenez et améliorez vos positions avec un suivi mensuel.</p>
            </Link>
            <Link to="/consultant-seo-suisse-romande/" className="bg-card p-6 hover:bg-card/80 transition-colors">
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
            <Link to="/blog/creer-site-internet-pme-suisse-2026/" className="bg-card p-6 hover:bg-card/80 transition-colors">
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">Guide</p>
              <h3 className="font-bold mb-2">Créer un site internet en 2026</h3>
              <p className="text-sm text-muted-foreground">Ce qu'une PME suisse doit exiger de son prestataire.</p>
            </Link>
            <Link to="/blog/site-invisible-google-pme-suisse/" className="bg-card p-6 hover:bg-card/80 transition-colors">
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
              Prêt à lancer votre projet ?
            </h2>
            <p className="text-muted-foreground mb-8">
              Diagnostic initial gratuit. Réponse personnelle sous 24 heures.
            </p>
            <Button variant="hero" size="lg" className="rounded-full" asChild>
              <Link to="/contact/">
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

export default CreationSiteWeb;
