
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "@/components/AgenticAI/HeroSection";
import StatsSection from "@/components/AgenticAI/StatsSection";
import LeadFormSection from "@/components/AgenticAI/LeadFormSection";
import WhyChooseSection from "@/components/AgenticAI/WhyChooseSection";
import ServicesSection from "@/components/AgenticAI/ServicesSection";
import ProcessSection from "@/components/AgenticAI/ProcessSection";
import ApproachSection from "@/components/AgenticAI/ApproachSection";
import UseCasesSection from "@/components/AgenticAI/UseCasesSection";
import CTASection from "@/components/AgenticAI/CTASection";

const AgenticAI = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <HeroSection />
        <StatsSection />
        <LeadFormSection />
        <WhyChooseSection />
        <ServicesSection />
        <ProcessSection />
        <ApproachSection />
        <UseCasesSection />
        <CTASection />
      </div>
      <Footer />
    </div>
  );
};

export default AgenticAI;
