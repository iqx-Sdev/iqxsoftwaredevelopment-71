
import React from "react";
import { Check } from "lucide-react";

const StatsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-newtheme-purple mb-6">
              Real Business Impact
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Delivering tangible results through intelligent automation:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <Check className="h-6 w-6 text-green-500" />
                <span className="font-bold text-2xl text-newtheme-purple">75%</span>
              </div>
              <p className="text-gray-600">Reduction in operational costs through AI automation</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <Check className="h-6 w-6 text-green-500" />
                <span className="font-bold text-2xl text-newtheme-purple">3.5x</span>
              </div>
              <p className="text-gray-600">Increase in employee productivity with AI assistants</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <Check className="h-6 w-6 text-green-500" />
                <span className="font-bold text-2xl text-newtheme-purple">92%</span>
              </div>
              <p className="text-gray-600">Customer satisfaction with AI-augmented support</p>
            </div>
          </div>
          
          <p className="text-center mt-10 text-lg text-gray-600">
            Transform your business with AI solutions that deliver measurable ROI.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
