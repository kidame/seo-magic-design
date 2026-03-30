import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import BlurText from "@/components/ui/blur-text";

const infoItems = [
  { kanji: "郵", label: "Email", value: "contact@kumo-seo.ch", href: "mailto:contact@kumo-seo.ch" },
  { kanji: "所", label: "Basé à", value: "Val-de-Travers, Neuchâtel", href: null },
  { kanji: "域", label: "Zone d'intervention", value: "Toute la Suisse romande", href: null },
  { kanji: "速", label: "Délai de réponse", value: "Sous 24 heures", href: null },
];

const Contact = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    mainEntity: {
      "@type": "ProfessionalService",
      name: "KUMO SEO",
      url: "https://kumo-seo.ch",
      email: "contact@kumo-seo.ch",
      telephone: "",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Val-de-Travers",
        addressRegion: "Neuchâtel",
        addressCountry: "CH",
      },
      areaServed: { "@type": "Place", name: "Suisse romande" },
    },
  };

  return (
    <div className="min-h-screen">
      <SeoHead
        title="Contact — KUMO 蜘蛛 Consultant SEO Neuchâtel"
        description="Contactez KUMO SEO pour un diagnostic gratuit. Consultant SEO indépendant à Neuchâtel. Réponse personnelle sous 24 heures."
        canonical="https://kumo-seo.ch/contact"
        jsonLd={jsonLd}
      />
      <Navbar />
      <main className="pt-32 pb-24">
        {/* Hero */}
        <section className="container max-w-3xl mx-auto px-4 text-center mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="section-label mb-4">連絡 Contact</p>
            <BlurText
              text="Parlons de votre projet."
              as="h1"
              className="text-4xl md:text-6xl font-bold tracking-tight mb-6 justify-center"
              delay={120}
              animateBy="words"
              direction="top"
            />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
              Décrivez-moi votre situation et laissez-moi l'URL de votre site.
              Je vous réponds personnellement sous 24 heures avec une première analyse.
            </p>
          </motion.div>
        </section>

        {/* Infos + CTA */}
        <section className="container max-w-3xl mx-auto px-4 mb-24">
          <div className="grid sm:grid-cols-2 gap-px bg-border/50 rounded-lg overflow-hidden mb-12">
            {infoItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card p-6"
              >
                <span className="font-jp text-xl text-primary">{item.kanji}</span>
                <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mt-2 mb-1">{item.label}</p>
                {item.href ? (
                  <a href={item.href} className="text-sm font-medium hover:text-primary transition-colors">{item.value}</a>
                ) : (
                  <p className="text-sm font-medium">{item.value}</p>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button variant="hero" size="lg" className="rounded-full" asChild>
              <a href="mailto:contact@kumo-seo.ch">
                Envoyer un message <ArrowRight className="ml-1" size={18} />
              </a>
            </Button>
            <p className="text-xs text-muted-foreground mt-6">
              Diagnostic gratuit · Forfait fixe · Pas de frais cachés
            </p>
          </motion.div>
        </section>

        {/* Ce qui se passe ensuite */}
        <section className="container max-w-3xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="section-label mb-4">次 Étapes suivantes</p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
              Ce qui se passe <span className="text-gradient">ensuite.</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-px bg-border/50 rounded-lg overflow-hidden">
            {[
              { step: "01", title: "Échange initial", desc: "Je lis votre message et analyse rapidement votre site. Réponse sous 24h." },
              { step: "02", title: "Diagnostic gratuit", desc: "Premiers constats et recommandations par email. Sans engagement." },
              { step: "03", title: "Proposition sur-mesure", desc: "Si pertinent, je vous propose un forfait adapté à vos objectifs et budget." },
            ].map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card p-6"
              >
                <span className="font-mono text-xs text-primary">{s.step}</span>
                <h3 className="font-bold mt-2 mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
