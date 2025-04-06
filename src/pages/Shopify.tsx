
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Shopify/HeroSection";
import StatsSection from "@/components/Shopify/StatsSection";
import DesignShowcaseSection from "@/components/Shopify/DesignShowcaseSection";
import LeadFormSectionProminent from "@/components/Shopify/LeadFormSectionProminent";
import ValuePropositionSection from "@/components/Shopify/ValuePropositionSection";
import WhyChooseSection from "@/components/Shopify/WhyChooseSection";
import DesignProcessSection from "@/components/Shopify/DesignProcessSection";
import FeaturedProjectsSection from "@/components/Shopify/FeaturedProjectsSection";
import ShopifyBenefitsSection from "@/components/Shopify/ShopifyBenefitsSection";
import ShopifyFinalCTA from "@/components/Shopify/ShopifyFinalCTA";
import { 
  leadFormBenefits, 
  offerItems, 
  processSteps, 
  shopifyBenefits 
} from "@/components/Shopify/data";

const Shopify = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <HeroSection />
        <StatsSection />
        <DesignShowcaseSection />
        <LeadFormSectionProminent benefits={leadFormBenefits} />
        <ValuePropositionSection />
        <WhyChooseSection offerItems={offerItems} />
        <DesignProcessSection processSteps={processSteps} />
        <FeaturedProjectsSection />
        <ShopifyBenefitsSection shopifyBenefits={shopifyBenefits} />
        <ShopifyFinalCTA />
      </div>
      <Footer />
    </div>
  );
};

export default Shopify;
