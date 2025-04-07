
import React from "react";

interface CaseStudySolutionProps {
  solution: string;
  solutionPoints: string[];
}

const CaseStudySolution: React.FC<CaseStudySolutionProps> = ({
  solution,
  solutionPoints
}) => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl md:text-3xl font-bold text-newtheme-purple mb-4">Solution</h2>
      <p className="text-gray-700 mb-6">{solution}</p>
      <div className="bg-gray-50 p-6 rounded-xl">
        <h3 className="font-bold text-gray-800 mb-3">Key components of the solution included:</h3>
        <ul className="space-y-2">
          {solutionPoints.map((point, index) => (
            <li key={index} className="flex items-start">
              <span className="inline-flex items-center justify-center w-5 h-5 bg-newtheme-purple text-white rounded-full text-xs mr-3 shrink-0 mt-1">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CaseStudySolution;
