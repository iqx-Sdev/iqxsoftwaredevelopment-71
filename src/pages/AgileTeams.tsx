
import { useEffect, Suspense, lazy } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/AgileTeams/HeroSection";

// Add fallback component for loading state
const SectionLoader = () => (
  <div className="flex items-center justify-center py-16">
    <div className="w-12 h-12 border-4 border-newtheme-purple rounded-full border-t-transparent animate-spin"></div>
  </div>
);

// Lazy load the components
const CTA = lazy(() => import("../components/CTA"));
const FinalCTASection = lazy(() => import("../components/AgileTeams/FinalCTASection"));
const ProductSection = lazy(() => import("../components/AgileTeams/ProductSection"));
const MoreFromSection = lazy(() => import("../components/AgileTeams/MoreFromSection"));
const VisualSection = lazy(() => import("../components/AgileTeams/VisualSection"));
const WhyChooseSection = lazy(() => import("../components/AgileTeams/WhyChooseSection"));
const SkillsTechSection = lazy(() => import("../components/AgileTeams/SkillsTechSection"));
const WhyLeasingSection = lazy(() => import("../components/AgileTeams/WhyLeasingSection"));
const DeliveryProcessSection = lazy(() => import("../components/AgileTeams/DeliveryProcessSection"));

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

        <Suspense fallback={<SectionLoader />}>
          {/* Visual Section */}
          <VisualSection />

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
        </Suspense>
      </div>
      <Footer />
    </div>
  );
};

export default AgileTeams;
