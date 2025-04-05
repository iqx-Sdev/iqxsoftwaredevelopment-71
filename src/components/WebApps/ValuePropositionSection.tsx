
import React from "react";
import { Button } from "@/components/ui/button";

const ValuePropositionSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-4 inline-block bg-blue-100 px-3 py-1 rounded-full">
                <span className="text-blue-700 font-medium">Our Approach</span>
              </div>
              <h2 className="text-3xl font-bold text-newtheme-purple mb-6">Your Product, Reimagined for Mobile & Web</h2>
              <p className="text-gray-600 text-lg mb-8">
                Your app is more than code, it's a living product powered by dynamic content and intelligent design. We use Flutter or React Native with robust, API-first CMS platforms like Strapi and Umbraco, giving your team full control over content without touching the code.
              </p>
              <Button className="bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white px-6 py-3 rounded-lg text-lg">
                Get Your Free Consultation
              </Button>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="/lovable-uploads/b4c8b66a-8da8-4636-8c43-d355fb188f22.png" 
                    alt="Mobile app user interface showing trip metrics" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg mt-6">
                  <img 
                    src="/lovable-uploads/a9ef1970-ba1a-4294-8c6f-c1ed4f9dda3e.png" 
                    alt="Mobile app onboarding screen" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="/lovable-uploads/9fdf3eef-0ab7-42c8-a13f-a2cb44cad407.png" 
                    alt="Location tracking app interface" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg mt-6">
                  <img 
                    src="/lovable-uploads/635e1354-6078-476e-a647-c2d5340f8844.png" 
                    alt="Mobile app map interface" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 mix-blend-overlay pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;
