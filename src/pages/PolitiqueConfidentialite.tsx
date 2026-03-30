import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";

const PolitiqueConfidentialite = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Politique de confidentialité — KUMO SEO",
    url: "https://kumo-seo.ch/politique-de-confidentialite",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://kumo-seo.ch" },
        { "@type": "ListItem", position: 2, name: "Politique de confidentialité", item: "https://kumo-seo.ch/politique-de-confidentialite" },
      ],
    },
  };

  return (
    <div className="min-h-screen">
      <SeoHead
        title="Politique de confidentialité — KUMO 蜘蛛"
        description="Politique de confidentialité conforme à la nLPD suisse. Données collectées, droits des personnes et cookies."
        canonical="https://kumo-seo.ch/politique-de-confidentialite"
        jsonLd={jsonLd}
        noIndex
      />
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container max-w-3xl mx-auto px-4">
          <p className="section-label mb-4">守 Confidentialité</p>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-12">
            Politique de <span className="text-gradient">confidentialité.</span>
          </h1>

          <div className="space-y-10 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">1. Responsable du traitement</h2>
              <p>
                Le responsable du traitement des données personnelles est :
              </p>
              <ul className="list-none mt-3 space-y-1">
                <li><strong className="text-foreground">KUMO SEO</strong> — Raison individuelle</li>
                <li>Val-de-Travers, canton de Neuchâtel, Suisse</li>
                <li>E-mail : contact@kumo-seo.ch</li>
              </ul>
              <p className="mt-3">
                La présente politique est conforme à la nouvelle Loi fédérale sur la protection des données 
                (nLPD, entrée en vigueur le 1er septembre 2023) et à son ordonnance d'application (OPDo).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">2. Données collectées</h2>
              <p>KUMO SEO collecte les données suivantes :</p>
              <ul className="list-disc pl-5 mt-3 space-y-2">
                <li>
                  <strong className="text-foreground">Formulaire de contact :</strong> nom, adresse e-mail, 
                  numéro de téléphone (facultatif), URL du site web, message. Ces données sont traitées 
                  uniquement pour répondre à votre demande.
                </li>
                <li>
                  <strong className="text-foreground">Données de navigation :</strong> adresse IP (anonymisée), 
                  type de navigateur, pages consultées, durée de visite. Ces données sont collectées via 
                  des outils d'analyse respectueux de la vie privée.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">3. Base juridique du traitement</h2>
              <p>Le traitement des données repose sur :</p>
              <ul className="list-disc pl-5 mt-3 space-y-2">
                <li>
                  <strong className="text-foreground">Consentement</strong> (art. 6 al. 6 nLPD) : pour l'envoi 
                  du formulaire de contact et l'utilisation de cookies non essentiels.
                </li>
                <li>
                  <strong className="text-foreground">Intérêt prépondérant</strong> (art. 31 al. 1 nLPD) : pour 
                  l'analyse statistique anonymisée du trafic, dans le but d'améliorer le site.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">4. Cookies</h2>
              <p>
                Ce site utilise exclusivement des cookies techniques nécessaires au fonctionnement du site. 
                Aucun cookie publicitaire ou de suivi tiers n'est utilisé.
              </p>
              <p className="mt-2">
                Si un outil d'analyse est mis en place, il sera configuré pour anonymiser les adresses IP 
                et ne pas déposer de cookies de suivi, conformément à la nLPD.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">5. Durée de conservation</h2>
              <p>
                Les données du formulaire de contact sont conservées pendant 12 mois à compter du dernier 
                échange, puis supprimées. Les données de navigation anonymisées sont conservées pendant 
                26 mois maximum.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">6. Transfert de données</h2>
              <p>
                Le site est hébergé par Vercel Inc. (États-Unis). Ce transfert est encadré par les clauses 
                contractuelles types (SCC) conformément à l'art. 16 al. 2 let. d nLPD.
              </p>
              <p className="mt-2">
                Aucune donnée personnelle n'est vendue, louée ou cédée à des tiers à des fins commerciales.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">7. Vos droits</h2>
              <p>
                Conformément à la nLPD, vous disposez des droits suivants :
              </p>
              <ul className="list-disc pl-5 mt-3 space-y-2">
                <li><strong className="text-foreground">Droit d'accès</strong> (art. 25 nLPD) : obtenir confirmation du traitement de vos données et en recevoir une copie.</li>
                <li><strong className="text-foreground">Droit de rectification</strong> : demander la correction de données inexactes.</li>
                <li><strong className="text-foreground">Droit à l'effacement</strong> : demander la suppression de vos données personnelles.</li>
                <li><strong className="text-foreground">Droit à la portabilité</strong> (art. 28 nLPD) : recevoir vos données dans un format structuré et couramment utilisé.</li>
                <li><strong className="text-foreground">Droit d'opposition</strong> : vous opposer au traitement de vos données.</li>
              </ul>
              <p className="mt-3">
                Pour exercer ces droits, contactez-nous à : <strong className="text-foreground">contact@kumo-seo.ch</strong>. 
                Nous répondrons dans un délai de 30 jours.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">8. Autorité de surveillance</h2>
              <p>
                En cas de litige, vous pouvez adresser une plainte au Préposé fédéral à la protection des 
                données et à la transparence (PFPDT) :
              </p>
              <p className="mt-2">
                PFPDT — Feldeggweg 1, 3003 Berne, Suisse<br />
                <a href="https://www.edoeb.admin.ch" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  www.edoeb.admin.ch
                </a>
              </p>
            </section>

            <p className="text-sm text-muted-foreground/60 pt-6 border-t border-border/30">
              Dernière mise à jour : mars 2026
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PolitiqueConfidentialite;
