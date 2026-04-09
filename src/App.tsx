import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
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
      <BrowserRouter>
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
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
