
import React from "react";

interface Reason {
  icon: string;
  description: string;
}

interface WhyIQXSectionProps {
  reasons: Reason[];
}

const WhyIQXSection: React.FC<WhyIQXSectionProps> = ({ reasons }) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="mb-4 inline-block bg-blue-100 px-3 py-1 rounded-full">
              <span className="text-blue-700 font-medium">Why Choose Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-newtheme-purple mb-6">
              Why IQX?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6">
                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4 text-xl">
                  {reason.icon}
                </div>
                <p className="text-gray-700 font-medium">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyIQXSection;
