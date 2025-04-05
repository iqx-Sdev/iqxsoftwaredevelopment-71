
import { Suspense } from "react";
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

// Add fallback component for loading state
const SectionLoader = () => (
  <div className="flex items-center justify-center py-16">
    <div className="w-12 h-12 border-4 border-newtheme-purple rounded-full border-t-transparent animate-spin"></div>
  </div>
);

const AIChat = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <HeroSection />
        <Suspense fallback={<SectionLoader />}>
          <StatsSection />
          <ProblemSection />
          <SolutionSection />
          <FeaturesSection />
          <WhyAISection />
          <UseCasesSection />
          <ProductSuiteSection />
          <TestimonialSection />
          <FinalCTASection />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
};

export default AIChat;
