import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LogoTicker from "@/components/LogoTicker";
import ReassuranceBar from "@/components/ReassuranceBar";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import DifferentiatorSection from "@/components/DifferentiatorSection";
import CaseStudySection from "@/components/CaseStudySection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";
import GradualBlur from "@/components/ui/gradual-blur";

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "KUMO",
  url: "https://kumo-seo.ch",
  description: "Audit SEO technique, accompagnement SEO continu et création de sites web sur-mesure pour PME de Suisse romande.",
  publisher: {
    "@type": "ProfessionalService",
    name: "KUMO — Consultant SEO & Création Web",
    url: "https://kumo-seo.ch",
  },
};

const Index = () => {
  return (
    <div className="min-h-screen">
      <SeoHead
        title="KUMO — Audit SEO & Création Web sur-mesure (Neuchâtel, Suisse romande)"
        description="Audit SEO technique à Neuchâtel — 31 points de contrôle, rapport interactif, plan d'action 90 jours. Création de sites web sur-mesure et accompagnement SEO continu. Forfait fixe pour PME de Suisse romande."
        canonical="https://kumo-seo.ch/"
        jsonLd={websiteJsonLd}
      />
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-md">
        Aller au contenu principal
      </a>
      <Navbar />
      <GradualBlur position="bottom" strength={1.5} height="6rem" target="page" divCount={5} />
      <main id="main-content">
        <HeroSection />
        <LogoTicker />
        <ReassuranceBar />
        <ServicesSection />
        <ProcessSection />
        <DifferentiatorSection />
        <CaseStudySection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
