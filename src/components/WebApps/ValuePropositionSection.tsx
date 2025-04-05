
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
            <div className="relative h-80 md:h-96 w-full rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/5bbd9e64-af22-4b2d-b12a-53a195d0201c.png" 
                alt="Modern web app development" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 mix-blend-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;
