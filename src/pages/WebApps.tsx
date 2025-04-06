
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/WebApps/HeroSection";
import StatsSection from "@/components/WebApps/StatsSection";
import LeadFormSection from "@/components/WebApps/LeadFormSection";
import ValuePropositionSection from "@/components/WebApps/ValuePropositionSection";
import WhyChooseSection from "@/components/WebApps/WhyChooseSection";
import ProcessSection from "@/components/WebApps/ProcessSection";
import TechStackSection from "@/components/WebApps/TechStackSection";
import MoreFromSection from "@/components/WebApps/MoreFromSection";
import FinalCTASection from "@/components/WebApps/FinalCTASection";
import DesignShowcaseSection from "@/components/WebApps/DesignShowcaseSection";
import { 
  whatWeOffer,
  process,
  techBenefits,
  moreServices,
  leadFormBenefits
} from "@/components/WebApps/data";

const WebApps = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <HeroSection />
        <StatsSection />
        <LeadFormSection leadFormBenefits={leadFormBenefits} />
        <ValuePropositionSection />
        <DesignShowcaseSection />
        <WhyChooseSection whatWeOffer={whatWeOffer} />
        <ProcessSection process={process} />
        <TechStackSection techBenefits={techBenefits} />
        <MoreFromSection moreServices={moreServices} />
        <FinalCTASection />
      </div>
      <Footer />
    </div>
  );
};

export default WebApps;
