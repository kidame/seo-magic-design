import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Send } from "lucide-react";
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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const infoItems = [
  { kanji: "郵", label: "Email", value: "thomas.puglisi@kumo-seo.ch", href: "mailto:thomas.puglisi@kumo-seo.ch" },
  { kanji: "所", label: "Basé à", value: "Val-de-Travers, Neuchâtel", href: null },
  { kanji: "域", label: "Zone d'intervention", value: "Toute la Suisse romande", href: null },
  { kanji: "速", label: "Délai de réponse", value: "Sous 24 heures", href: null },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch("https://formsubmit.co/ajax/thomas.puglisi@kumo-seo.ch", {
        method: "POST",
        body: formData,
      });

      toast({
        title: "Message envoyé !",
        description: "Je vous réponds personnellement sous 24 heures.",
      });
      form.reset();
    } catch {
      toast({
        title: "Erreur",
        description: "Le message n'a pas pu être envoyé. Réessayez ou contactez-moi par email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    mainEntity: {
      "@type": "ProfessionalService",
      name: "KUMO SEO",
      url: "https://kumo-seo.ch",
      email: "thomas.puglisi@kumo-seo.ch",
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

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://kumo-seo.ch/" },
      { "@type": "ListItem", position: 2, name: "Contact", item: "https://kumo-seo.ch/contact" },
    ],
  };

  return (
    <div className="min-h-screen">
      <SeoHead
        title="Contact | KUMO - Consultant SEO Neuchâtel"
        description="Contactez KUMO SEO pour un diagnostic gratuit. Consultant SEO indépendant à Neuchâtel. Réponse personnelle sous 24 heures."
        canonical="https://kumo-seo.ch/contact"
        jsonLd={jsonLd}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <Navbar />
      <main className="pt-32 pb-24">
        {/* Breadcrumb */}
        <div className="container max-w-3xl mx-auto px-4 mb-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild><Link to="/">Accueil</Link></BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Contact</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Hero */}
        <section className="container max-w-3xl mx-auto px-4 text-center mb-16">
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
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Décrivez-moi votre situation et laissez-moi l'URL de votre site.
              Je vous réponds personnellement sous 24 heures avec une première analyse.
            </p>
          </motion.div>
        </section>

        {/* Infos */}
        <section className="container max-w-3xl mx-auto px-4 mb-16">
          <div className="grid sm:grid-cols-2 gap-px bg-border/50 rounded-lg overflow-hidden">
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
        </section>

        {/* Formulaire */}
        <section className="container max-w-3xl mx-auto px-4 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="Nouveau message depuis kumo-seo.ch" />
              <input type="hidden" name="_template" value="table" />
              <input type="text" name="_honey" className="hidden" />

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nom *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Votre nom"
                    required
                    autoComplete="name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="votre@email.ch"
                    required
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="website">URL de votre site <span className="text-muted-foreground">(optionnel)</span></Label>
                <Input
                  id="website"
                  name="website"
                  type="url"
                  placeholder="https://votre-site.ch"
                  autoComplete="url"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Décrivez votre projet, vos objectifs, ou posez simplement une question..."
                  required
                  minLength={10}
                  rows={5}
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="rounded-full w-full sm:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                  <Send className="ml-2" size={16} />
                </Button>
                <p className="text-xs text-muted-foreground">
                  Diagnostic gratuit · Forfait fixe · Pas de frais cachés
                </p>
              </div>
            </form>
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

          {/* Liens vers les services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 flex flex-wrap justify-center gap-4"
          >
            <Link to="/services/audit-seo" className="text-sm text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1 font-medium">
              Audit SEO <ArrowRight size={14} />
            </Link>
            <Link to="/services/creation-site-web" className="text-sm text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1 font-medium">
              Création de site <ArrowRight size={14} />
            </Link>
            <Link to="/services/accompagnement-seo" className="text-sm text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1 font-medium">
              Accompagnement SEO <ArrowRight size={14} />
            </Link>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
