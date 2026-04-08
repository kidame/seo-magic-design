import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import BlurText from "@/components/ui/blur-text";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

const blocs = [
  {
    kanji: "技術",
    title: "Audit technique",
    subtitle: "31 points de contrôle",
    items: [
      "Indexation & crawlabilité",
      "Core Web Vitals (LCP, FID, CLS)",
      "Architecture de l'information",
      "Balisage sémantique & Schema.org",
      "Maillage interne",
      "Optimisation mobile",
      "HTTPS & sécurité",
      "Fichiers robots.txt & sitemap.xml",
    ],
  },
  {
    kanji: "性能",
    title: "Performance & GSC",
    subtitle: "Données réelles",
    items: [
      "Analyse Google Search Console",
      "Rapport PageSpeed Insights",
      "Temps de chargement par page",
      "Taux de rebond & engagement",
      "Pages les plus performantes",
      "Erreurs 404 & redirections",
    ],
  },
  {
    kanji: "競合",
    title: "Analyse concurrentielle",
    subtitle: "3 concurrents directs",
    items: [
      "Positionnement organique comparé",
      "Analyse des mots-clés concurrents",
      "Profil de backlinks",
      "Stratégie de contenu",
      "Forces et faiblesses identifiées",
    ],
  },
  {
    kanji: "鍵語",
    title: "Mots-clés & contenu",
    subtitle: "Stratégie de positionnement",
    items: [
      "Recherche de mots-clés stratégiques",
      "Volume de recherche & difficulté",
      "Intentions de recherche",
      "Opportunités de contenu",
      "Plan d'action priorisé sur 90 jours",
    ],
  },
];

const Rapport = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Rapport d'audit SEO : structure et livrables",
    description: "Découvrez la structure du rapport d'audit SEO KUMO : 31 points de contrôle, analyse concurrentielle, performance et mots-clés stratégiques.",
    url: "https://kumo-seo.ch/rapport",
    publisher: {
      "@type": "ProfessionalService",
      name: "KUMO SEO",
      url: "https://kumo-seo.ch",
    },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://kumo-seo.ch/" },
      { "@type": "ListItem", position: 2, name: "Rapport", item: "https://kumo-seo.ch/rapport" },
    ],
  };

  return (
    <div className="min-h-screen">
      <SeoHead
        title="Rapport d'audit SEO | KUMO 蜘蛛 Consultant SEO Neuchâtel"
        description="Structure du rapport d'audit SEO KUMO : 31 points techniques, analyse de performance, étude concurrentielle et recherche de mots-clés stratégiques."
        canonical="https://kumo-seo.ch/rapport"
        jsonLd={jsonLd}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
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
                <BreadcrumbPage>Rapport</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Hero */}
        <section className="container max-w-4xl mx-auto px-4 text-center mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ willChange: "transform, opacity" }}>
            <p className="section-label mb-4">報告 Rapport</p>
            <BlurText
              text="Structure du rapport."
              as="h1"
              className="text-4xl md:text-6xl font-bold tracking-tight mb-6 justify-center"
              delay={120}
              animateBy="words"
              direction="top"
            />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Chaque audit produit un rapport structuré en 4 sections.
              Voici ce que vous recevez.
            </p>
          </motion.div>
        </section>

        {/* 4 blocs */}
        <section className="container max-w-4xl mx-auto px-4 mb-24">
          <div className="grid md:grid-cols-2 gap-px bg-border/50 rounded-lg overflow-hidden">
            {blocs.map((bloc, i) => (
              <motion.div
                key={bloc.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card p-8"
              >
                <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider mb-1">{bloc.kanji}</p>
                <h2 className="text-xl font-bold mb-1">{bloc.title}</h2>
                <p className="text-sm text-muted-foreground mb-4">{bloc.subtitle}</p>
                <ul className="space-y-2">
                  {bloc.items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1 text-xs">&#9632;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
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
            <Link to="/services/accompagnement-seo" className="bg-card p-6 hover:bg-card/80 transition-colors">
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">伴走 Suivi</p>
              <h3 className="font-bold mb-2">Accompagnement SEO</h3>
              <p className="text-sm text-muted-foreground">Maintenez et améliorez vos positions avec un suivi mensuel.</p>
            </Link>
            <Link to="/resultats" className="bg-card p-6 hover:bg-card/80 transition-colors">
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">実績 Résultats</p>
              <h3 className="font-bold mb-2">Nos résultats</h3>
              <p className="text-sm text-muted-foreground">Études de cas et résultats concrets obtenus pour nos clients.</p>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="container max-w-3xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4">
              Prêt à recevoir votre rapport ?
            </h2>
            <p className="text-muted-foreground mb-8">
              Diagnostic initial gratuit. Réponse personnelle sous 24 heures.
            </p>
            <Button variant="hero" size="lg" className="rounded-full" asChild>
              <Link to="/contact">
                Demander un audit <ArrowRight className="ml-1" size={18} />
              </Link>
            </Button>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Rapport;
