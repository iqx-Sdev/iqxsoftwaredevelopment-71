
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-4 inline-block bg-blue-100 px-3 py-1 rounded-full">
              <span className="text-blue-700 font-medium">About IQBusiness</span>
            </div>
            <h2 className="text-3xl font-bold text-newtheme-purple mb-6">Leading Business Consultancy</h2>
            <p className="text-gray-600 text-lg mb-8">
              We partner with organizations to solve problems, realize opportunities and achieve 
              sustainable growth. As the largest independent management consulting firm in South Africa, 
              we have built a reputation for crafting innovative, insightful solutions to resolve complex 
              business challenges.
            </p>
            <Button className="bg-newtheme-purple hover:bg-newtheme-purple/90 text-white">
              Learn More About Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="/lovable-uploads/77479e54-2790-4b90-982a-54bbd8e631f5.png" 
              alt="Project management dashboard" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-newtheme-purple/30 to-blue-500/30 mix-blend-overlay"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
