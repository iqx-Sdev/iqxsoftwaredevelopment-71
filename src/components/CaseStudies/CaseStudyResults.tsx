
import React from "react";
import { CaseStudyResult } from "./caseStudyData";

interface CaseStudyResultsProps {
  results: CaseStudyResult[];
}

const CaseStudyResults: React.FC<CaseStudyResultsProps> = ({ results }) => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl md:text-3xl font-bold text-newtheme-purple mb-4">Results at a Glance</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {results.map((result, index) => (
          <div key={index} className="text-center p-6 bg-gray-50 rounded-xl border border-gray-100">
            <p className="font-bold text-3xl text-newtheme-purple mb-2">{result.value}</p>
            <p className="text-sm text-gray-600">{result.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudyResults;
