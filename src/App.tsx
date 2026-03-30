import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import AuditSeo from "./pages/AuditSeo.tsx";
import AccompagnementSeo from "./pages/AccompagnementSeo.tsx";
import CreationSiteWeb from "./pages/CreationSiteWeb.tsx";
import APropos from "./pages/APropos.tsx";
import Contact from "./pages/Contact.tsx";
import FAQPage from "./pages/FAQ.tsx";
import Rapport from "./pages/Rapport.tsx";
import Resultats from "./pages/Resultats.tsx";
import MentionsLegales from "./pages/MentionsLegales.tsx";
import CGV from "./pages/CGV.tsx";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
