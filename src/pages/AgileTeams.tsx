
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import HeroSection from "../components/AgileTeams/HeroSection";
import FinalCTASection from "../components/AgileTeams/FinalCTASection";
import ProductSection from "../components/AgileTeams/ProductSection";
import LeadFormSection from "../components/AgileTeams/LeadFormSection";
import MoreFromSection from "../components/AgileTeams/MoreFromSection";

// Import the components from the read-only files
import VisualSection from "../components/AgileTeams/VisualSection";
import WhyChooseSection from "../components/AgileTeams/WhyChooseSection";
import SkillsTechSection from "../components/AgileTeams/SkillsTechSection";
import WhyLeasingSection from "../components/AgileTeams/WhyLeasingSection";
import DeliveryProcessSection from "../components/AgileTeams/DeliveryProcessSection";

const AgileTeams = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        {/* Hero Section */}
        <HeroSection />

        {/* Visual Section */}
        <VisualSection />

        {/* Lead Form Section */}
        <LeadFormSection />

        {/* Product Section */}
        <ProductSection />

        {/* Why Choose Section */}
        <WhyChooseSection />

        {/* Skills and Tech Section */}
        <SkillsTechSection />

        {/* Why Leasing Talent Section */}
        <WhyLeasingSection />

        {/* Delivery Process Section */}
        <DeliveryProcessSection />

        {/* More From IQX */}
        <MoreFromSection />

        {/* Final CTA Section */}
        <FinalCTASection />

        {/* CTA Component */}
        <CTA />
      </div>
      <Footer />
    </div>
  );
};

export default AgileTeams;
