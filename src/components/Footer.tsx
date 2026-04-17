import { Link } from "react-router-dom";

const footerColumns = [
  {
    heading: "Services",
    links: [
      { label: "Audit SEO complet", href: "/services/audit-seo" },
      { label: "Création de site web", href: "/services/creation-site-web" },
      { label: "Accompagnement SEO", href: "/services/accompagnement-seo" },
    ],
  },
  {
    heading: "Zones couvertes",
    links: [
      { label: "Neuchâtel", href: "/consultant-seo-neuchatel" },
      { label: "Lausanne", href: "/consultant-seo-lausanne" },
      { label: "Genève", href: "/consultant-seo-geneve" },
      { label: "La Chaux-de-Fonds", href: "/consultant-seo-la-chaux-de-fonds" },
      { label: "Suisse romande", href: "/consultant-seo-suisse-romande" },
    ],
  },
  {
    heading: "Ressources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Questions fréquentes", href: "/faq" },
      { label: "Résultats", href: "/resultats" },
      { label: "À propos", href: "/a-propos" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

const legalLinks = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "CGV", href: "/cgv" },
  { label: "Politique de confidentialité", href: "/politique-de-confidentialite" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-16" role="contentinfo">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Link to="/" className="font-body text-xl font-bold text-foreground" aria-label="KUMO, retour à l'accueil">
              KUMO <span className="font-jp text-primary-light" aria-hidden="true">蜘蛛</span>
            </Link>
            <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
              Consultant SEO indépendant<br />
              Audit SEO & Création de sites web<br />
              Val-de-Travers, Neuchâtel<br />
              <a href="mailto:thomas.puglisi@kumo-seo.ch" className="hover:text-foreground transition-colors">thomas.puglisi@kumo-seo.ch</a><br />
              <a href="tel:+41789308100" className="hover:text-foreground transition-colors">+41 78 930 81 00</a>
            </p>
          </div>
          {footerColumns.map((col) => (
            <nav key={col.heading} aria-label={col.heading}>
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-4">{col.heading}</p>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="border-t border-border/50 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} KUMO SEO - Consultant SEO à Neuchâtel, Suisse romande
          </p>
          <nav aria-label="Liens légaux" className="flex items-center gap-4">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
