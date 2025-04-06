
import React from "react";
import { Check } from "lucide-react";

const StatsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-newtheme-purple mb-6">
              Power Apps Impact
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Real business results with Power Apps automation:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <Check className="h-6 w-6 text-green-500" />
                <span className="font-bold text-2xl text-newtheme-purple">86%</span>
              </div>
              <p className="text-gray-600">of Fortune 500 companies use Power Apps</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <Check className="h-6 w-6 text-green-500" />
                <span className="font-bold text-2xl text-newtheme-purple">74%</span>
              </div>
              <p className="text-gray-600">Reduction in app development costs</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <Check className="h-6 w-6 text-green-500" />
                <span className="font-bold text-2xl text-newtheme-purple">188%</span>
              </div>
              <p className="text-gray-600">ROI when implementing Power Apps solutions</p>
            </div>
          </div>
          
          <p className="text-center mt-10 text-lg text-gray-600">
            Empower your team with no-code tools while your business reaps the benefits.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
