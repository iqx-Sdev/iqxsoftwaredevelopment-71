
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/PowerApps/HeroSection";
import StatsSection from "@/components/PowerApps/StatsSection";
import KeyComponentsSection from "@/components/PowerApps/KeyComponentsSection";
import ServicesSection from "@/components/PowerApps/ServicesSection";
import ChallengesSection from "@/components/PowerApps/ChallengesSection";
import WhyIQXSection from "@/components/PowerApps/WhyIQXSection";
import LeadFormSection from "@/components/PowerApps/LeadFormSection";
import FinalCTASection from "@/components/PowerApps/FinalCTASection";
import { 
  componentItems, 
  serviceItems, 
  challenges, 
  whyIQXReasons 
} from "@/components/PowerApps/data";

const PowerApps = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <HeroSection />
        <StatsSection />
        <KeyComponentsSection componentItems={componentItems} />
        <ServicesSection serviceItems={serviceItems} />
        <ChallengesSection challenges={challenges} />
        <WhyIQXSection reasons={whyIQXReasons} />
        <LeadFormSection />
        <FinalCTASection />
      </div>
      <Footer />
    </div>
  );
};

export default PowerApps;
