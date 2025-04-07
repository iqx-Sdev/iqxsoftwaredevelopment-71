
import React from "react";

interface CaseStudyImpactProps {
  impact: string;
}

const CaseStudyImpact: React.FC<CaseStudyImpactProps> = ({ impact }) => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl md:text-3xl font-bold text-newtheme-purple mb-4">Impact</h2>
      <p className="text-gray-700">{impact}</p>
    </div>
  );
};

export default CaseStudyImpact;
