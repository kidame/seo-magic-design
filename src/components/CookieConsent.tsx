import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const GA_ID = "G-XXXXXXXXXX";

function loadGA4() {
  if (document.querySelector(`script[src*="gtag/js?id=${GA_ID}"]`)) return;

  const script = document.createElement("script");
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  script.async = true;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  }
  gtag("js", new Date());
  gtag("config", GA_ID, { anonymize_ip: true });
}

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

const STORAGE_KEY = "kumo-cookie-consent";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY);
    if (consent === null) {
      setVisible(true);
    } else if (consent === "accepted") {
      loadGA4();
    }
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
    loadGA4();
  };

  const refuse = () => {
    localStorage.setItem(STORAGE_KEY, "refused");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-lg rounded-xl border border-border/50 bg-background/95 backdrop-blur-xl p-5 shadow-lg shadow-black/20"
          role="dialog"
          aria-label="Consentement cookies"
        >
          <p className="text-sm text-muted-foreground mb-3">
            Ce site utilise des cookies d'analyse pour mesurer la fréquentation.
            Aucun cookie publicitaire n'est utilisé.{" "}
            <Link to="/politique-de-confidentialite" className="text-primary hover:text-primary/80 underline">
              En savoir plus
            </Link>
          </p>
          <div className="flex gap-3">
            <button
              onClick={accept}
              className="rounded-full bg-primary px-4 py-1.5 text-xs font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Accepter
            </button>
            <button
              onClick={refuse}
              className="rounded-full border border-border/50 px-4 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Refuser
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
