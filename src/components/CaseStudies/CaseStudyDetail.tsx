
import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { caseStudiesDetails } from "./caseStudyData";
import CaseStudyHero from "./CaseStudyHero";
import CaseStudySituation from "./CaseStudySituation";
import CaseStudySolution from "./CaseStudySolution";
import CaseStudyImpact from "./CaseStudyImpact";
import CaseStudyResults from "./CaseStudyResults";
import CaseStudyGallery from "./CaseStudyGallery";
import CaseStudyCTA from "./CaseStudyCTA";
import CaseStudyNotFound from "./CaseStudyNotFound";

const CaseStudyDetail: React.FC = () => {
  const { caseStudyId } = useParams<{ caseStudyId: string }>();
  const caseStudy = caseStudyId ? caseStudiesDetails[caseStudyId] : null;

  if (!caseStudy) {
    return <CaseStudyNotFound />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        {/* Hero Banner */}
        <CaseStudyHero
          title={caseStudy.title}
          subtitle={caseStudy.subtitle}
          industry={caseStudy.industry}
          heroImage={caseStudy.heroImage}
        />

        {/* Content Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Situation */}
              <CaseStudySituation situation={caseStudy.situation} />
              
              {/* Solution */}
              <CaseStudySolution 
                solution={caseStudy.solution}
                solutionPoints={caseStudy.solutionPoints}
              />
              
              {/* Impact */}
              <CaseStudyImpact impact={caseStudy.impact} />
              
              {/* Results */}
              <CaseStudyResults results={caseStudy.results} />
              
              {/* Image Gallery */}
              <CaseStudyGallery 
                images={caseStudy.images}
                title={caseStudy.title}
              />
            </div>
          </div>
        </section>

        {/* CTA section */}
        <CaseStudyCTA />
      </div>
      <Footer />
    </div>
  );
};

export default CaseStudyDetail;
