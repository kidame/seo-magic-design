import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ReassuranceBar from "@/components/ReassuranceBar";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import DifferentiatorSection from "@/components/DifferentiatorSection";
import CaseStudySection from "@/components/CaseStudySection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ReassuranceBar />
      <ServicesSection />
      <ProcessSection />
      <DifferentiatorSection />
      <CaseStudySection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
