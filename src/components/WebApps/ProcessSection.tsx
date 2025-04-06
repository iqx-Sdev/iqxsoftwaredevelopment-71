
import React from "react";
import { ArrowRight } from "lucide-react";

interface ProcessStep {
  title: string;
  description: string;
}

interface ProcessSectionProps {
  process: ProcessStep[];
}

const ProcessSection: React.FC<ProcessSectionProps> = ({ process }) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="mb-4 inline-block bg-green-100 px-3 py-1 rounded-full">
              <span className="text-green-700 font-medium">Our Process</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-newtheme-purple mb-6">Our Design + Build Process</h2>
            <p className="text-gray-600 text-lg">From Idea to App Store: Our 5-Step Approach</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {process.slice(0, 3).map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-white rounded-xl p-8 shadow-lg h-full transition-all duration-300 hover:shadow-xl border border-transparent hover:border-blue-100 group-hover:-translate-y-1">
                  <div className="bg-gradient-to-r from-pink-500 to-blue-500 rounded-full w-14 h-14 flex items-center justify-center text-white font-bold mb-8 transform transition-transform group-hover:scale-110">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-newtheme-purple mb-5">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-8 h-8 text-blue-300 group-hover:text-blue-500 transition-colors">
                    <ArrowRight className="animate-pulse" />
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {process.slice(3).map((step, index) => (
              <div key={index + 3} className="relative group">
                <div className="bg-white rounded-xl p-8 shadow-lg h-full transition-all duration-300 hover:shadow-xl border border-transparent hover:border-blue-100 group-hover:-translate-y-1">
                  <div className="bg-gradient-to-r from-pink-500 to-blue-500 rounded-full w-14 h-14 flex items-center justify-center text-white font-bold mb-8 transform transition-transform group-hover:scale-110">
                    {index + 4}
                  </div>
                  <h3 className="text-xl font-bold text-newtheme-purple mb-5">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
                {index < 1 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-8 h-8 text-blue-300 group-hover:text-blue-500 transition-colors">
                    <ArrowRight className="animate-pulse" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
