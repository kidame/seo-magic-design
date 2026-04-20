import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LogoTicker from "@/components/LogoTicker";
import ReassuranceBar from "@/components/ReassuranceBar";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import DifferentiatorSection from "@/components/DifferentiatorSection";
import CaseStudySection from "@/components/CaseStudySection";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";
import GradualBlur from "@/components/ui/gradual-blur";

const homepageJsonLd: Record<string, unknown>[] = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "KUMO",
    url: "https://kumo-seo.ch/",
    description: "Audit SEO technique, accompagnement SEO continu et création de sites web sur-mesure pour PME de Suisse romande.",
    publisher: {
      "@type": "ProfessionalService",
      name: "KUMO SEO",
      url: "https://kumo-seo.ch/",
      logo: "https://kumo-seo.ch/logo-kumo.png",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Méthode SEO KUMO : 4 étapes pour améliorer votre visibilité",
    description: "Je mesure avant d'agir. Je priorise avant de corriger. Et à chaque étape, vous voyez ce qui a changé et ce que ça vous rapporte.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Crawl & Diagnostic",
        text: "Chaque page de votre site est passée en revue : structure, contenu, balises, performance. Votre Google Search Console est intégrée pour croiser ce que Google voit avec la réalité de votre site.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Concurrence & Marché",
        text: "Votre marché est cartographié : qui cherche quoi, avec quels mots. Vous savez où vous êtes fort, où vous perdez des clients, et pourquoi.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Rapport & Plan 90j",
        text: "Tout est synthétisé dans un rapport HTML interactif. Chaque problème est localisé : quelle page, quel élément, quelle correction. Le plan 90 jours hiérarchise les actions par impact réel.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Exécution & Résultats",
        text: "Si vous choisissez l'accompagnement, j'exécute les corrections moi-même. Chaque mois : positions, trafic, conversions. Ce qui fonctionne, on l'amplifie. Ce qui stagne, on l'ajuste.",
      },
    ],
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <SeoHead
        title="KUMO - Consultant SEO & Création Web | Neuchâtel"
        description="Audit SEO & création web sur-mesure à Neuchâtel. Rapport interactif, plan 90 jours, forfait fixe. Pour PME de Suisse romande."
        canonical="https://kumo-seo.ch/"
        jsonLd={homepageJsonLd}
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
        <BlogSection />
        <FAQSection />
        {/* Ordre: Services > Methode > Pourquoi KUMO > Preuve > FAQ > Contact */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
