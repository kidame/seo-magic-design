import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";

const links = [
  { to: "/", label: "Accueil" },
  { to: "/services/audit-seo", label: "Audit SEO" },
  { to: "/services/creation-site-web", label: "Création de site web" },
  { to: "/services/accompagnement-seo", label: "Accompagnement SEO" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

const NotFound = () => {
  return (
    <div className="min-h-screen">
      <SeoHead
        title="Page introuvable | KUMO"
        description="La page que vous cherchez n'existe pas ou a été déplacée."
        canonical="https://kumo-seo.ch/404"
        noIndex
      />
      <Navbar />
      <main id="main-content" className="pt-32 md:pt-40 pb-24 md:pb-40">
        <div className="container max-w-2xl mx-auto px-4 text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-primary-light mb-4">
            Erreur 404
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Page introuvable
          </h1>
          <p className="text-muted-foreground mb-10">
            La page que vous cherchez n'existe pas ou a été déplacée.
          </p>

          <div className="glass-card rounded-xl p-8 text-left">
            <p className="text-sm font-medium mb-4">Pages utiles :</p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {links.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-primary-light hover:text-primary/80 underline underline-offset-4 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
