import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const serviceLinks = [
  { label: "Audit SEO", href: "/services/audit-seo" },
  { label: "Création de site web", href: "/services/creation-site-web" },
  { label: "Accompagnement SEO", href: "/services/accompagnement-seo" },
];

const navLinks = [
  { label: "À propos", href: "/a-propos" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

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
          <Link to="/" className="shrink-0 flex items-center gap-2" aria-label="KUMO, accueil">
            <img
              src="/logo-kumo.webp"
              alt="KUMO"
              width={96}
              height={55}
              decoding="async"
              className="h-14 w-auto mix-blend-multiply"
              {...({ fetchpriority: "high" } as Record<string, string>)}
            />
          </Link>

          <div className="hidden md:flex items-center gap-7">
            {/* Services dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="text-[13px] text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 outline-none">
                Services <ChevronDown size={12} />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" sideOffset={12} className="bg-background/95 backdrop-blur-xl border-border/50">
                {serviceLinks.map((link) => (
                  <DropdownMenuItem key={link.href} asChild>
                    <Link
                      to={link.href}
                      className="cursor-pointer"
                    >
                      {link.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-[13px] text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
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
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Services</p>
              {serviceLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors pl-3"
                  role="menuitem"
                >
                  {link.label}
                </Link>
              ))}
              <div className="border-t border-border/30 my-1" />
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  role="menuitem"
                >
                  {link.label}
                </Link>
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
