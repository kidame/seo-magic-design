import { useState, useCallback } from "react";

const STORAGE_KEY = "kumo-consent";

type ConsentState = "accepted" | "refused" | null;

function getStored(): ConsentState {
  try {
    const val = localStorage.getItem(STORAGE_KEY);
    if (val === "accepted" || val === "refused") return val;
  } catch {
    // localStorage indisponible (SSR, navigation privee)
  }
  return null;
}

export function useCookieConsent() {
  const [consent, setConsent] = useState<ConsentState>(getStored);

  const accept = useCallback(() => {
    try { localStorage.setItem(STORAGE_KEY, "accepted"); } catch {}
    setConsent("accepted");
  }, []);

  const refuse = useCallback(() => {
    try { localStorage.setItem(STORAGE_KEY, "refused"); } catch {}
    setConsent("refused");
  }, []);

  return { consent, accept, refuse } as const;
}
