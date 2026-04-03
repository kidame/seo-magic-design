import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Méthode", href: "/#methode" },
  { label: "À propos", href: "/a-propos" },
  { label: "Résultats", href: "/resultats" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4 md:pt-6 px-4 md:px-8" role="banner">
      <nav
        className={`mx-auto max-w-5xl rounded-full border transition-all duration-300 ${
          scrolled
            ? "border-border/40 bg-background/[0.13] backdrop-blur-xl backdrop-saturate-[2.8] backdrop-brightness-[0.81] shadow-lg shadow-black/20"
            : "border-border/20 bg-background/[0.08] backdrop-blur-md backdrop-saturate-[2.0]"
        }`}
        role="navigation"
        aria-label="Navigation principale"
      >
        <div className="flex h-12 md:h-14 items-center justify-between px-5 md:px-6">
          <Link to="/" className="font-body text-lg font-bold tracking-tight text-foreground shrink-0" aria-label="KUMO, accueil">
            KUMO <span className="font-jp text-primary" aria-hidden="true">蜘蛛</span>
          </Link>

          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) =>
              link.href.startsWith("/") && !link.href.includes("#") ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-[13px] text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[13px] text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              )
            )}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/contact"
              className="text-[13px] text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
            <Button variant="hero" size="sm" className="rounded-full h-8 px-4 text-xs" asChild>
              <Link to="/contact">Diagnostic gratuit</Link>
            </Button>
          </div>

          <button
            className="md:hidden text-foreground"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mx-auto max-w-5xl mt-2 rounded-2xl border border-border/50 bg-background/95 backdrop-blur-xl overflow-hidden"
            role="menu"
          >
            <div className="p-5 flex flex-col gap-4">
              {navLinks.map((link) => (
                link.href.startsWith("/") && !link.href.includes("#") ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setOpen(false)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    role="menuitem"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    role="menuitem"
                  >
                    {link.label}
                  </a>
                )
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                role="menuitem"
              >
                Contact
              </Link>
              <Button variant="hero" size="sm" className="rounded-full mt-1" asChild>
                <Link to="/contact" onClick={() => setOpen(false)}>Diagnostic gratuit</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
