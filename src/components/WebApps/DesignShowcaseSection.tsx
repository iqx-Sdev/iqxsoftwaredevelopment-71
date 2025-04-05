
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const DesignShowcaseSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="mb-4 inline-block bg-pink-100 px-3 py-1 rounded-full">
              <span className="text-pink-700 font-medium">Design Showcase</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-newtheme-purple mb-6">
              Beautiful, Functional App Design
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              Our apps aren't just functional—they're beautiful. We combine stunning UI with
              intuitive UX to create digital products users love to engage with.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="bg-blue-50 rounded-2xl p-8 h-full">
                <div className="relative mx-auto max-w-xs">
                  <img
                    src="/lovable-uploads/9fdf3eef-0ab7-42c8-a13f-a2cb44cad407.png"
                    alt="Healthcare app interface"
                    className="rounded-xl shadow-lg mx-auto"
                  />
                  <div className="absolute -bottom-6 -right-6">
                    <div className="bg-white rounded-full p-4 shadow-lg">
                      <div className="bg-gradient-to-r from-pink-500 to-blue-500 rounded-full w-12 h-12"></div>
                    </div>
                  </div>
                </div>
                <div className="mt-12 text-center">
                  <h3 className="text-xl font-bold text-newtheme-purple mb-2">Healthcare Solution</h3>
                  <p className="text-gray-600 mb-4">Patient management and appointment booking made simple</p>
                  <Button variant="outline" className="border-newtheme-purple text-newtheme-purple hover:bg-newtheme-purple/10">
                    View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-8">
              <div className="bg-purple-50 rounded-2xl p-6">
                <div className="flex items-center gap-6">
                  <div className="flex-shrink-0">
                    <img
                      src="/lovable-uploads/635e1354-6078-476e-a647-c2d5340f8844.png"
                      alt="Map interface"
                      className="w-32 h-auto rounded-lg shadow-md"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-newtheme-purple mb-2">Location Services</h3>
                    <p className="text-gray-600 mb-2">Smart geolocation with interactive mapping</p>
                    <Button variant="link" className="text-pink-500 hover:text-pink-600 p-0">
                      Learn more <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="bg-pink-50 rounded-2xl p-6">
                <div className="flex items-center gap-6">
                  <div className="flex-shrink-0">
                    <img
                      src="/lovable-uploads/a9ef1970-ba1a-4294-8c6f-c1ed4f9dda3e.png"
                      alt="Onboarding interface"
                      className="w-32 h-auto rounded-lg shadow-md"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-newtheme-purple mb-2">Smart Onboarding</h3>
                    <p className="text-gray-600 mb-2">Intuitive first-time user experiences</p>
                    <Button variant="link" className="text-pink-500 hover:text-pink-600 p-0">
                      Learn more <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-2xl p-6">
                <div className="flex items-center gap-6">
                  <div className="flex-shrink-0">
                    <img
                      src="/lovable-uploads/b4c8b66a-8da8-4636-8c43-d355fb188f22.png"
                      alt="Analytics dashboard"
                      className="w-32 h-auto rounded-lg shadow-md"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-newtheme-purple mb-2">Data Visualization</h3>
                    <p className="text-gray-600 mb-2">Beautiful, actionable analytics dashboards</p>
                    <Button variant="link" className="text-pink-500 hover:text-pink-600 p-0">
                      Learn more <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignShowcaseSection;
