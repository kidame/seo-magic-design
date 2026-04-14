import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";

const CGV = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Conditions générales de vente | KUMO SEO",
    url: "https://kumo-seo.ch/cgv",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://kumo-seo.ch" },
        { "@type": "ListItem", position: 2, name: "CGV", item: "https://kumo-seo.ch/cgv" },
      ],
    },
  };

  return (
    <div className="min-h-screen">
      <SeoHead
        title="Conditions générales de vente | KUMO"
        description="Conditions générales de vente applicables aux prestations KUMO SEO. Forfaits, abonnements, paiement et droit suisse."
        canonical="https://kumo-seo.ch/cgv"
        jsonLd={jsonLd}
        noIndex
      />
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container max-w-3xl mx-auto px-4">
          <p className="section-label mb-4">約 Conditions générales</p>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-12">
            Conditions générales <span className="text-gradient">de vente.</span>
          </h1>

          <div className="space-y-10 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">Art. 1 : Champ d'application</h2>
              <p>
                Les présentes conditions générales de vente (ci-après «&nbsp;CGV&nbsp;») s'appliquent à 
                l'ensemble des prestations proposées par KUMO SEO, raison individuelle sise à Val-de-Travers (NE), 
                Suisse. Elles régissent les forfaits ponctuels (audit SEO, étude et plan, création de site) 
                ainsi que les formules d'abonnement mensuel (maintenance, suivi visibilité, croissance).
              </p>
              <p className="mt-2">
                Toute commande implique l'acceptation sans réserve des présentes CGV.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">Art. 2 : Devis et commande</h2>
              <p>
                Chaque prestation fait l'objet d'un devis écrit détaillant le périmètre, les livrables et le prix. 
                Le devis est valable 30 jours à compter de sa date d'émission. La commande est réputée ferme 
                dès acceptation écrite du devis par le client (e-mail ou signature).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">Art. 3 : Prix et paiement</h2>
              <p>
                Les prix sont indiqués en francs suisses (CHF), toutes charges comprises. KUMO SEO n'est pas 
                assujetti à la TVA (chiffre d'affaires inférieur au seuil légal de CHF 100'000).
              </p>
              <p className="mt-2">
                Les factures sont payables dans un délai de 30 jours à compter de leur émission. En cas de 
                retard de paiement, un intérêt moratoire de 5&nbsp;% l'an est applicable conformément à 
                l'art. 104 al. 1 du Code des obligations (CO).
              </p>
              <p className="mt-2">
                L'«&nbsp;Étude et plan&nbsp;» (CHF 1'190) est créditée à 100&nbsp;% si le client signe un 
                forfait de création de site dans les 60 jours suivant la livraison de l'étude.
              </p>
              <p className="mt-2">
                L'hébergement suisse, le nom de domaine et le certificat SSL sont inclus la première année dans tous les forfaits de création de site. À partir de l'année 2, ce service est facturé 290 CHF/an, sauf pour les clients disposant d'une formule de suivi active (Maintenance, Suivi Visibilité ou Croissance), pour lesquels il est inclus sans frais supplémentaires.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">Art. 4 : Forfaits de création de site</h2>
              <p>
                Les forfaits (Essentiel, Pro, Premium) comprennent les prestations détaillées dans le devis. 
                Le nombre de pages, la rédaction de textes et les services annexes (fiche Google, annuaires suisses, 
                accompagnement) varient selon le forfait choisi.
              </p>
              <p className="mt-2">
                Le client fournit les contenus nécessaires (textes, images, accès) dans les délais convenus. 
                Tout retard de livraison des contenus par le client entraîne un report équivalent du calendrier.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">Art. 4bis : Mandat SEO 90 jours</h2>
              <p>
                Le «&nbsp;Mandat SEO 90 jours&nbsp;» est une prestation forfaitaire à durée déterminée (90 jours civils à compter de la date de démarrage convenue). Il est systématiquement précédé d'un Audit SEO dont les conclusions définissent le périmètre et le niveau de complexité (Standard, Élevé ou Très élevé).
              </p>
              <p className="mt-2">
                Le prix forfaitaire est fixé dans le devis et ne peut être révisé une fois accepté. Le paiement peut être échelonné en trois mensualités égales, selon accord préalable indiqué dans le devis.
              </p>
              <p className="mt-2">
                En cas de résiliation anticipée, les prestations réalisées jusqu'à la date de résiliation sont dues. Aucun remboursement partiel n'est accordé, sauf accord contraire écrit.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">Art. 5 : Formules d'abonnement</h2>
              <p>
                Les formules «&nbsp;Suivi Visibilité&nbsp;» et «&nbsp;Croissance&nbsp;» impliquent un engagement 
                minimum de 6 mois. Passé ce délai, l'abonnement est résiliable mensuellement avec un préavis 
                de 30 jours.
              </p>
              <p className="mt-2">
                La formule «&nbsp;Maintenance&nbsp;» est sans engagement et résiliable à tout moment avec un 
                préavis de 30 jours.
              </p>
              <p className="mt-2">
                Les modifications mineures incluses dans la maintenance sont limitées à 30 minutes par mois. 
                Au-delà, le tarif horaire de CHF 150.–/h s'applique (minimum facturé : 30 min = CHF 75.–).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">Art. 6 : Propriété intellectuelle</h2>
              <p>
                À la livraison finale et au paiement intégral, le client devient propriétaire du site web livré 
                (code, design, contenus créés par KUMO SEO). Les outils, méthodes et frameworks utilisés par 
                KUMO SEO restent sa propriété.
              </p>
              <p className="mt-2">
                KUMO SEO se réserve le droit de mentionner la réalisation dans son portfolio, sauf opposition 
                écrite du client.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">Art. 7 : Garantie et responsabilité</h2>
              <p>
                KUMO SEO s'engage à exécuter les prestations avec diligence et selon les règles de l'art. 
                La responsabilité de KUMO SEO est limitée au montant de la prestation concernée.
              </p>
              <p className="mt-2">
                KUMO SEO ne garantit pas de résultats spécifiques en matière de positionnement dans les moteurs 
                de recherche, le référencement naturel dépendant de facteurs hors de son contrôle.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">Art. 8 : Résiliation anticipée</h2>
              <p>
                En cas de résiliation anticipée d'un forfait en cours, les prestations déjà réalisées sont dues. 
                Le solde non utilisé n'est pas remboursable, sauf accord contraire écrit.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">Art. 9 : Force majeure</h2>
              <p>
                KUMO SEO ne saurait être tenu responsable de l'inexécution de ses obligations en cas de 
                force majeure au sens de la jurisprudence suisse (catastrophe naturelle, pandémie, panne 
                généralisée d'infrastructure, etc.).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">Art. 10 : Droit applicable et for juridique</h2>
              <p>
                Les présentes CGV sont soumises au droit suisse, en particulier au Code des obligations (CO). 
                Tout litige sera soumis à la compétence exclusive des tribunaux du canton de Neuchâtel, Suisse.
              </p>
            </section>

            <p className="text-sm text-muted-foreground/80 pt-6 border-t border-border/30">
              Dernière mise à jour : avril 2026
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CGV;
