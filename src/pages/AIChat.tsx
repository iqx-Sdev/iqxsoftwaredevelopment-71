
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/AIChat/HeroSection";
import StatsSection from "../components/AIChat/StatsSection";
import ProblemSection from "../components/AIChat/ProblemSection";
import SolutionSection from "../components/AIChat/SolutionSection";
import FeaturesSection from "../components/AIChat/FeaturesSection";
import WhyAISection from "../components/AIChat/WhyAISection";
import UseCasesSection from "../components/AIChat/UseCasesSection";
import ProductSuiteSection from "../components/AIChat/ProductSuiteSection";
import TestimonialSection from "../components/AIChat/TestimonialSection";
import FinalCTASection from "../components/AIChat/FinalCTASection";

const AIChat = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <HeroSection />
        <StatsSection />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <WhyAISection />
        <UseCasesSection />
        <ProductSuiteSection />
        <TestimonialSection />
        <FinalCTASection />
      </div>
      <Footer />
    </div>
  );
};

export default AIChat;
