import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const suggestions = [
  { label: "Accueil", href: "/" },
  { label: "Audit SEO", href: "/services/audit-seo" },
  { label: "Création de site", href: "/services/creation-site-web" },
  { label: "Accompagnement SEO", href: "/services/accompagnement-seo" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center pt-32 pb-24 px-4">
        <div className="text-center max-w-md">
          <p className="text-6xl font-bold font-mono text-primary/30 mb-4">404</p>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">
            Page introuvable
          </h1>
          <p className="text-muted-foreground mb-8">
            La page que vous cherchez n'existe pas ou a été déplacée.
          </p>

          <div className="glass-card p-6 text-left">
            <p className="text-xs font-mono text-primary uppercase tracking-wider mb-4">
              Pages suggérées
            </p>
            <div className="space-y-2">
              {suggestions.map((s) => (
                <Link
                  key={s.href}
                  to={s.href}
                  className="flex items-center justify-between text-sm text-muted-foreground hover:text-foreground transition-colors py-1.5"
                >
                  {s.label}
                  <ArrowRight size={14} className="text-primary" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
