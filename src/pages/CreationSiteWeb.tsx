import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
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

const grille = [
  { type: "Landing page", standard: "1'200", seoPlus: "1'800", kanji: "着地" },
  { type: "Site vitrine (3–5 pages)", standard: "2'800", seoPlus: "3'800", kanji: "展示" },
  { type: "Site vitrine étendu (6–10 pages)", standard: "4'500", seoPlus: "6'200", kanji: "拡張" },
  { type: "E-commerce complet", standard: "7'500", seoPlus: "9'800", kanji: "商店" },
];

const CreationSiteWeb = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Création de site web sur-mesure",
    description:
      "Création de site web sur-mesure en code : landing page, site vitrine, e-commerce. Performance 90+ PageSpeed, SEO natif. Dès CHF 1'200.",
    provider: {
      "@type": "ProfessionalService",
      name: "KUMO SEO",
      url: "https://kumo-seo.ch",
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
      { "@type": "ListItem", position: 3, name: "Création de site web", item: "https://kumo-seo.ch/services/creation-site-web" },
    ],
  };

  return (
    <div className="min-h-screen">
      <SeoHead
        title="Création de site web sur-mesure — KUMO 蜘蛛 Consultant SEO Neuchâtel"
        description="Site web sur-mesure en code : landing page dès CHF 1'200, site vitrine, e-commerce. Performance 90+ PageSpeed, SEO intégré dès la conception."
        canonical="https://kumo-seo.ch/services/creation-site-web"
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
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Sites web <span className="text-gradient">sur-mesure.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Du code propre, performant et optimisé SEO dès la première ligne.
              Pas de template. Pas de CMS lourd. Juste ce dont vous avez besoin.
            </p>
            <Button variant="hero" size="lg" className="rounded-full" asChild>
              <Link to="/contact">
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
                <Check size={16} className="text-primary shrink-0" />
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
              Grille <span className="text-gradient">tarifaire.</span>
            </h2>
          </motion.div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="py-4 pr-4 text-xs font-mono uppercase tracking-wider text-muted-foreground">Prestation</th>
                  <th className="py-4 px-4 text-xs font-mono uppercase tracking-wider text-muted-foreground">Standard</th>
                  <th className="py-4 pl-4 text-xs font-mono uppercase tracking-wider text-muted-foreground">SEO+</th>
                </tr>
              </thead>
              <tbody>
                {grille.map((row, i) => (
                  <motion.tr
                    key={row.type}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="border-b border-border/30"
                  >
                    <td className="py-4 pr-4">
                      <span className="text-xs text-muted-foreground font-mono mr-2">{row.kanji}</span>
                      <span className="text-sm">{row.type}</span>
                    </td>
                    <td className="py-4 px-4 font-mono text-sm text-gold">CHF {row.standard}</td>
                    <td className="py-4 pl-4 font-mono text-sm text-gold">CHF {row.seoPlus}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            Paiement : 40% à la commande, 60% à la livraison. Deux séries de retours incluses. Garantie 30 jours.
          </p>
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

export default CreationSiteWeb;
