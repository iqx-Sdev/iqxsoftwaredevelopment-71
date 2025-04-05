
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import Team from "@/components/Team";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ProcessSection from "@/components/WebApps/ProcessSection";
import WhyChooseSection from "@/components/WebApps/WhyChooseSection";
import TechStackSection from "@/components/WebApps/TechStackSection";
import StatsSection from "@/components/WebApps/StatsSection";
import LeadFormSection from "@/components/WebApps/LeadFormSection";
import MoreFromSection from "@/components/WebApps/MoreFromSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Benefits />
      <ProcessSection />
      <WhyChooseSection />
      <TechStackSection />
      <StatsSection />
      <MoreFromSection />
      <LeadFormSection />
      <Team />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
