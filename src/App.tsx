import { lazy, Suspense, useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useCookieConsent } from "@/hooks/useCookieConsent";
import CookieConsent from "@/components/CookieConsent";
import GtmScript from "@/components/GtmScript";

const Aurora = lazy(() => import("@/components/ui/aurora"));
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
const Index = lazy(() => import("./pages/Index.tsx"));

const AuditSeo = lazy(() => import("./pages/AuditSeo.tsx"));
const AccompagnementSeo = lazy(() => import("./pages/AccompagnementSeo.tsx"));
const CreationSiteWeb = lazy(() => import("./pages/CreationSiteWeb.tsx"));
const APropos = lazy(() => import("./pages/APropos.tsx"));
const Contact = lazy(() => import("./pages/Contact.tsx"));
const FAQPage = lazy(() => import("./pages/FAQ.tsx"));
const Rapport = lazy(() => import("./pages/Rapport.tsx"));
const Resultats = lazy(() => import("./pages/Resultats.tsx"));
const MentionsLegales = lazy(() => import("./pages/MentionsLegales.tsx"));
const CGV = lazy(() => import("./pages/CGV.tsx"));
const PolitiqueConfidentialite = lazy(() => import("./pages/PolitiqueConfidentialite.tsx"));
const Blog = lazy(() => import("./pages/Blog.tsx"));
const BlogPost = lazy(() => import("./pages/BlogPost.tsx"));
const ConsultantSeoSuisseRomande = lazy(() => import("./pages/ConsultantSeoSuisseRomande.tsx"));
const ConsultantSeoNeuchatel = lazy(() => import("./pages/ConsultantSeoNeuchatel.tsx"));
const ConsultantSeoLausanne = lazy(() => import("./pages/ConsultantSeoLausanne.tsx"));
const ConsultantSeoGeneve = lazy(() => import("./pages/ConsultantSeoGeneve.tsx"));
const ConsultantSeoLaChaux = lazy(() => import("./pages/ConsultantSeoLaChaux.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

const queryClient = new QueryClient();

const GTM_ID = import.meta.env.VITE_GTM_ID;

const App = () => {
  const { consent, accept, refuse } = useCookieConsent();
  const [auroraReady, setAuroraReady] = useState(false);

  useEffect(() => {
    const schedule =
      window.requestIdleCallback ||
      ((cb: () => void) => window.setTimeout(cb, 1500));
    const handle = schedule(() => setAuroraReady(true));
    return () => {
      if (window.cancelIdleCallback && typeof handle === "number") {
        window.cancelIdleCallback(handle);
      } else {
        window.clearTimeout(handle as number);
      }
    };
  }, []);

  return (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {auroraReady && (
        <Suspense fallback={null}>
          <div className="fixed inset-0 -z-10 opacity-60">
            <Aurora
              colorStops={["#8B5CF6", "#A78BFA", "#C4B5FD"]}
              speed={0.6}
              blend={0.5}
              amplitude={1.2}
            />
          </div>
        </Suspense>
      )}
      <BrowserRouter>
        <GtmScript consent={consent} />
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services/audit-seo" element={<AuditSeo />} />
            <Route path="/services/accompagnement-seo" element={<AccompagnementSeo />} />
            <Route path="/services/creation-site-web" element={<CreationSiteWeb />} />
            <Route path="/a-propos" element={<APropos />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/rapport" element={<Rapport />} />
            <Route path="/resultats" element={<Resultats />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/cgv" element={<CGV />} />
            <Route path="/politique-de-confidentialite" element={<PolitiqueConfidentialite />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/consultant-seo-suisse-romande" element={<ConsultantSeoSuisseRomande />} />
            <Route path="/consultant-seo-neuchatel" element={<ConsultantSeoNeuchatel />} />
            <Route path="/consultant-seo-lausanne" element={<ConsultantSeoLausanne />} />
            <Route path="/consultant-seo-geneve" element={<ConsultantSeoGeneve />} />
            <Route path="/consultant-seo-la-chaux-de-fonds" element={<ConsultantSeoLaChaux />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        {GTM_ID && consent === null && (
          <CookieConsent onAccept={accept} onRefuse={refuse} />
        )}
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  );
};

export default App;
