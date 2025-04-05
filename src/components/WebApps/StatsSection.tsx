
import React from "react";
import { Check } from "lucide-react";

const StatsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-newtheme-purple mb-6">
              Web App Excellence
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Real business impact with professional web application development:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <Check className="h-6 w-6 text-green-500" />
                <span className="font-bold text-2xl text-newtheme-purple">65%</span>
              </div>
              <p className="text-gray-600">Faster time-to-market with our Flutter and React Native development approach</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <Check className="h-6 w-6 text-green-500" />
                <span className="font-bold text-2xl text-newtheme-purple">40%</span>
              </div>
              <p className="text-gray-600">Improvement in user engagement metrics</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <Check className="h-6 w-6 text-green-500" />
                <span className="font-bold text-2xl text-newtheme-purple">98%</span>
              </div>
              <p className="text-gray-600">Client satisfaction with delivered applications</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
