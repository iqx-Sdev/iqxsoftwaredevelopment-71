
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import AboutSection from "@/components/Home/AboutSection";
import CoreServicesSection from "@/components/Home/CoreServicesSection";
import WhyChooseUsSection from "@/components/Home/WhyChooseUsSection";
import CTASection from "@/components/Home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutSection />
      <CoreServicesSection />
      <WhyChooseUsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
