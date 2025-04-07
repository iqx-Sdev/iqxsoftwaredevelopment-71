
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CaseStudiesHero from "../components/CaseStudies/CaseStudiesHero";
import CaseStudiesList from "../components/CaseStudies/CaseStudiesList";

const CaseStudies = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <CaseStudiesHero />
        <CaseStudiesList />
      </div>
      <Footer />
    </div>
  );
};

export default CaseStudies;
