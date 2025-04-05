
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 order-2 md:order-1">
              <div className="rounded-xl shadow-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/043f060f-4ca1-4331-968c-ecb3e3b6d290.png" 
                  alt="Business professional" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <div className="mb-4 inline-block bg-blue-100 px-3 py-1 rounded-full">
                <span className="text-blue-700 font-medium">About IQBusiness</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-newtheme-purple mb-6">
                Leading Business Consultancy
              </h2>
              <p className="text-gray-600 mb-6">
                We partner with organizations to solve problems, realize opportunities and achieve 
                sustainable growth. As the largest independent management consulting firm in South Africa, 
                we have built a reputation for crafting innovative, insightful solutions to resolve complex 
                business challenges.
              </p>
              <Link to="/contact">
                <Button className="bg-newtheme-purple hover:bg-newtheme-purple/90 text-white">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
