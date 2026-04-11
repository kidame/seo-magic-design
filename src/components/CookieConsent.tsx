import { Link } from "react-router-dom";

interface CookieConsentProps {
  onAccept: () => void;
  onRefuse: () => void;
}

const CookieConsent = ({ onAccept, onRefuse }: CookieConsentProps) => {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
      role="dialog"
      aria-label="Consentement cookies"
    >
      <div className="container max-w-3xl mx-auto glass-card rounded-xl p-5 md:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1 text-sm text-muted-foreground">
          Ce site utilise Google Analytics pour améliorer votre expérience. Aucune donnée personnelle n'est revendue.{" "}
          <Link
            to="/politique-de-confidentialite"
            className="text-primary hover:text-primary/80 underline underline-offset-4 transition-colors"
          >
            En savoir plus
          </Link>
        </div>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={onRefuse}
            className="text-sm px-4 py-2 rounded-full border border-border hover:bg-muted transition-colors"
          >
            Refuser
          </button>
          <button
            onClick={onAccept}
            className="text-sm px-4 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
