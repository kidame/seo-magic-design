import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Méthode", href: "#methode" },
  { label: "Résultats", href: "#resultats" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScolled] = useState(false);

  useEffect(() => {
    const handler = () => setScolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pt-4 md:pt-6 px-4 md:px-8">
      <nav
        className={`mx-auto max-w-5xl rounded-full border transition-all duration-300 ${
          scrolled
            ? "border-border/60 bg-background/80 backdrop-blur-xl shadow-lg shadow-black/20"
            : "border-border/30 bg-background/50 backdrop-blur-md"
        }`}
      >
        <div className="flex h-12 md:h-14 items-center justify-between px-5 md:px-6">
          {/* Logo */}
          <a href="#" className="font-body text-lg font-bold tracking-tight text-foreground shrink-0">
            KUMO <span className="font-jp text-primary">蜘蛛</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="text-[13px] text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>
            <Button variant="hero" size="sm" className="rounded-full h-8 px-4 text-xs" asChild>
              <a href="#contact">Diagnostic gratuit</a>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mx-auto max-w-5xl mt-2 rounded-2xl border border-border/50 bg-background/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="p-5 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </a>
              <Button variant="hero" size="sm" className="rounded-full mt-1" asChild>
                <a href="#contact" onClick={() => setOpen(false)}>Diagnostic gratuit</a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
