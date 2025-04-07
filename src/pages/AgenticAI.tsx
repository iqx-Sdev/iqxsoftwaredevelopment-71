
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "@/components/AgenticAI/HeroSection";
import StatsSection from "@/components/AgenticAI/StatsSection";
import LeadFormSection from "@/components/AgenticAI/LeadFormSection";
import WhyChooseSection from "@/components/WebApps/WhyChooseSection";
import ServicesSection from "@/components/AgenticAI/ServicesSection";
import ProcessSection from "@/components/AgenticAI/ProcessSection";
import ApproachSection from "@/components/AgenticAI/ApproachSection";
import UseCasesSection from "@/components/AgenticAI/UseCasesSection";
import CTASection from "@/components/AgenticAI/CTASection";

const AgenticAI = () => {
  const agenticAIOffers = [
    {
      title: "Competitive Advantage",
      description: "Stand out with bespoke AI-driven systems tailored to your business model. Intelligent agents automate complex tasks, drive innovation, and differentiate your offering in the market.",
      buttonText: "Explore More",
      featured: true
    },
    {
      title: "Extreme Efficiency",
      description: "Agentic AI handles complex workflows and decisions instantly — whether assisting customers, sourcing vendors, or coordinating logistics. This means your teams can focus on high-value work while our agents take care of the rest.",
      buttonText: "Explore More"
    },
    {
      title: "Personalization at Scale",
      description: "Deliver curated, context-aware customer experiences powered by multimodal AI. Whether it's for personalized service, product recommendations, or streamlined operations, your business scales without sacrificing a personal touch.",
      buttonText: "Explore More"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <HeroSection />
        <StatsSection />
        <LeadFormSection />
        <WhyChooseSection whatWeOffer={agenticAIOffers} />
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
