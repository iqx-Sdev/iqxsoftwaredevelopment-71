
import React from "react";

interface CaseStudySituationProps {
  situation: string;
}

const CaseStudySituation: React.FC<CaseStudySituationProps> = ({ situation }) => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl md:text-3xl font-bold text-newtheme-purple mb-4">Situation</h2>
      <p className="text-gray-700">{situation}</p>
    </div>
  );
};

export default CaseStudySituation;
