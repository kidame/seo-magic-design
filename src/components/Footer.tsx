import { Link } from "react-router-dom";

const footerColumns = [
  {
    heading: "Services",
    links: [
      { label: "Audit SEO complet", href: "/services/audit-seo", isRoute: true },
      { label: "Accompagnement SEO", href: "/services/accompagnement-seo", isRoute: true },
      { label: "Création de site web", href: "/services/creation-site-web", isRoute: true },
    ],
  },
  {
    heading: "Ressources",
    links: [
      { label: "À propos", href: "/a-propos", isRoute: true },
      { label: "Questions fréquentes", href: "/faq", isRoute: true },
      { label: "Rapport d'audit", href: "/rapport", isRoute: true },
      { label: "Résultats", href: "/resultats", isRoute: true },
      { label: "Contact & diagnostic", href: "/contact", isRoute: true },
    ],
  },
  {
    heading: "Légal",
    links: [
      { label: "Mentions légales", href: "#", isRoute: false },
      { label: "CGV", href: "#", isRoute: false },
      { label: "Politique de confidentialité", href: "#", isRoute: false },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-16" role="contentinfo">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="font-body text-xl font-bold text-foreground" aria-label="KUMO — Retour à l'accueil">
              KUMO <span className="font-jp text-primary">蜘蛛</span>
            </Link>
            <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
              Consultant SEO indépendant<br />
              Audit SEO & Création de sites web<br />
              Neuchâtel · Suisse romande
            </p>
          </div>
          {footerColumns.map((col) => (
            <nav key={col.heading} aria-label={col.heading}>
              <h4 className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-4">{col.heading}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.isRoute ? (
                      <Link to={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        {link.label}
                      </Link>
                    ) : (
                      <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="border-t border-border/50 pt-8">
          <p className="text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} KUMO · Consultant SEO indépendant · Audit SEO & Création de sites web · Neuchâtel · Suisse romande
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
