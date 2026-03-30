const footerColumns = [
  {
    heading: "Services",
    links: [
      { label: "Audit SEO", href: "#services" },
      { label: "Accompagnement SEO", href: "#services" },
      { label: "Création de site web", href: "#services" },
    ],
  },
  {
    heading: "Ressources",
    links: [
      { label: "Résultats", href: "#resultats" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" },
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
    <footer className="border-t border-border/50 py-16">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <a href="#" className="font-body text-xl font-bold text-foreground">
              KUMO <span className="font-jp text-primary">蜘蛛</span>
            </a>
            <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
              Consultant SEO indépendant<br />
              Neuchâtel · Suisse romande
            </p>
          </div>
          {footerColumns.map((col) => (
            <div key={col.heading}>
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
            </div>
          ))}
        </div>
        <div className="border-t border-border/50 pt-8">
          <p className="text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} · Consultant SEO indépendant · Audit SEO & Création de sites web · Neuchâtel · Suisse romande
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
