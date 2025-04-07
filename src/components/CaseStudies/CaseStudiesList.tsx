
import React from "react";
import CaseStudyCard from "./CaseStudyCard";
import { caseStudies } from "./caseStudiesData";

const CaseStudiesList: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 gap-10 md:gap-12">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.id} study={study} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesList;
