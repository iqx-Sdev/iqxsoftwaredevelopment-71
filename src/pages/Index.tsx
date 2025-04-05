
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import AboutSection from "@/components/Home/AboutSection";
import SolutionsSection from "@/components/Home/SolutionsSection";
import InsightsSection from "@/components/Home/InsightsSection";
import CareersSection from "@/components/Home/CareersSection";
import ContactSection from "@/components/Home/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutSection />
      <SolutionsSection />
      <Services />
      <InsightsSection />
      <CareersSection />
      <Team />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
