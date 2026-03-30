const footerColumns = [
  {
    heading: "Services",
    links: [
      { label: "Audit SEO complet", href: "#services" },
      { label: "Accompagnement SEO continu", href: "#services" },
      { label: "Création de site web", href: "#services" },
    ],
  },
  {
    heading: "Ressources",
    links: [
      { label: "Résultats d'audit", href: "#resultats" },
      { label: "Questions fréquentes", href: "#faq" },
      { label: "Contact & diagnostic", href: "#contact" },
    ],
  },
  {
    heading: "Légal",
    links: [
      { label: "Mentions légales", href: "#" },
      { label: "CGV", href: "#" },
      { label: "Politique de confidentialité", href: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-16" role="contentinfo">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <a href="#" className="font-body text-xl font-bold text-foreground" aria-label="KUMO — Retour à l'accueil">
              KUMO <span className="font-jp text-primary">蜘蛛</span>
            </a>
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
                    <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link.label}
                    </a>
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
