
import React from "react";
import { Check } from "lucide-react";

// Our approach items
const approach = [
  {
    title: "Define Clear AI Objectives",
    description: "Align every use case with measurable business outcomes."
  },
  {
    title: "Assess Readiness",
    description: "We evaluate your data, technology, and team capabilities to ensure a solid foundation."
  },
  {
    title: "Start with High-Impact Use Cases",
    description: "Target projects that deliver quick wins and showcase immediate value."
  },
  {
    title: "Ensure Ethical AI",
    description: "Build systems that are transparent, compliant, and human-centric."
  },
  {
    title: "Scale & Optimise",
    description: "Continuously refine and expand AI initiatives for sustained performance and growth."
  }
];

const ApproachSection = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="mb-4 inline-block bg-yellow-100 px-3 py-1 rounded-full">
              <span className="text-yellow-700 font-medium">Our Methodology</span>
            </div>
            <h2 className="text-3xl font-bold text-center text-newtheme-purple mb-6">
              Our Approach
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-4">
              {approach.map((item, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApproachSection;
