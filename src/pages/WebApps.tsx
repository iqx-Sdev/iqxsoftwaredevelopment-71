
import React, { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/WebApps/HeroSection";

// Add fallback component for loading state
const SectionLoader = () => (
  <div className="flex items-center justify-center py-16">
    <div className="w-12 h-12 border-4 border-newtheme-purple rounded-full border-t-transparent animate-spin"></div>
  </div>
);

// Lazy load the remaining sections
const StatsSection = React.lazy(() => import("@/components/WebApps/StatsSection"));
const LeadFormSection = React.lazy(() => import("@/components/WebApps/LeadFormSection"));
const ValuePropositionSection = React.lazy(() => import("@/components/WebApps/ValuePropositionSection"));
const WhyChooseSection = React.lazy(() => import("@/components/WebApps/WhyChooseSection"));
const ProcessSection = React.lazy(() => import("@/components/WebApps/ProcessSection"));
const TechStackSection = React.lazy(() => import("@/components/WebApps/TechStackSection"));
const MoreFromSection = React.lazy(() => import("@/components/WebApps/MoreFromSection"));
const FinalCTASection = React.lazy(() => import("@/components/WebApps/FinalCTASection"));
const DesignShowcaseSection = React.lazy(() => import("@/components/WebApps/DesignShowcaseSection"));

const WebApps = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <HeroSection />
        <Suspense fallback={<SectionLoader />}>
          <StatsSection />
          <LeadFormSection />
          <ValuePropositionSection />
          <DesignShowcaseSection />
          <WhyChooseSection />
          <ProcessSection />
          <TechStackSection />
          <MoreFromSection />
          <FinalCTASection />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
};

export default WebApps;
