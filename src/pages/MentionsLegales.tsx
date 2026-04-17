import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";

const MentionsLegales = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Mentions légales | KUMO SEO",
    url: "https://kumo-seo.ch/mentions-legales",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://kumo-seo.ch" },
        { "@type": "ListItem", position: 2, name: "Mentions légales", item: "https://kumo-seo.ch/mentions-legales" },
      ],
    },
  };

  return (
    <div className="min-h-screen">
      <SeoHead
        title="Mentions légales | KUMO - Consultant SEO"
        description="Mentions légales du site kumo-seo.ch. Identité de l'éditeur, hébergement, propriété intellectuelle et droit applicable."
        canonical="https://kumo-seo.ch/mentions-legales"
        jsonLd={jsonLd}
        noIndex
      />
      <Navbar />
      <main id="main-content" className="pt-32 pb-24">
        <div className="container max-w-3xl mx-auto px-4">
          <p className="section-label mb-4">法 Mentions légales</p>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-12">
            Mentions <span className="text-gradient">légales.</span>
          </h1>

          <div className="space-y-10 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">1. Éditeur du site</h2>
              <p>
                Le site <strong className="text-foreground">kumo-seo.ch</strong> est édité par :
              </p>
              <ul className="list-none mt-3 space-y-1">
                <li><strong className="text-foreground">Raison individuelle :</strong> KUMO SEO</li>
                <li><strong className="text-foreground">Activité :</strong> Consultant SEO indépendant, création de sites web</li>
                <li><strong className="text-foreground">Siège :</strong> Val-de-Travers, canton de Neuchâtel, Suisse</li>
                <li><strong className="text-foreground">E-mail :</strong> thomas.puglisi@kumo-seo.ch</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">2. Hébergement</h2>
              <p>
                Le site est hébergé par <strong className="text-foreground">Vercel Inc.</strong>, 
                340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">3. Propriété intellectuelle</h2>
              <p>
                L'ensemble du contenu de ce site (textes, images, graphismes, logo, structure) est la propriété 
                exclusive de KUMO SEO, sauf mention contraire. Toute reproduction, représentation ou diffusion, 
                en tout ou partie, sans autorisation écrite préalable est interdite.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">4. Limitation de responsabilité</h2>
              <p>
                KUMO SEO s'efforce de fournir des informations exactes et à jour. Toutefois, aucune garantie 
                n'est donnée quant à l'exhaustivité ou l'exactitude des informations publiées sur ce site. 
                KUMO SEO décline toute responsabilité pour les dommages directs ou indirects résultant de 
                l'utilisation du site ou de l'impossibilité d'y accéder.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">5. Liens externes</h2>
              <p>
                Ce site peut contenir des liens vers des sites tiers. KUMO SEO n'exerce aucun contrôle 
                sur le contenu de ces sites et décline toute responsabilité quant à leur contenu ou à 
                leur politique de confidentialité.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">6. Droit applicable et for juridique</h2>
              <p>
                Le présent site et ses mentions légales sont régis par le droit suisse. Tout litige 
                relatif à l'utilisation du site sera soumis à la compétence exclusive des tribunaux 
                du canton de Neuchâtel, Suisse.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MentionsLegales;
