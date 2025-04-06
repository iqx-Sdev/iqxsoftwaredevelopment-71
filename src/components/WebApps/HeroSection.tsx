
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-newtheme-purple to-blue-600">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full mb-5">
              <span className="text-white font-medium">Web Application Development</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Web & App Development by IQX
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Custom-built cross-platform apps, powered by Flutter, React Native, and flexible content architecture.
            </p>
            <Button className="bg-white hover:bg-gray-100 text-newtheme-purple px-8 py-6 rounded-lg text-lg">
              Talk to Our App Development Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <div className="relative hidden lg:block">
            <img 
              src="/lovable-uploads/77479e54-2790-4b90-982a-54bbd8e631f5.png"
              alt="Project management app interface" 
              className="rounded-xl shadow-2xl border-4 border-white/20 w-full"
            />
            <div className="absolute -top-6 -right-6">
              <img 
                src="/lovable-uploads/b4c8b66a-8da8-4636-8c43-d355fb188f22.png" 
                alt="Mobile app interface" 
                className="w-48 rounded-lg shadow-xl border-2 border-white/20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
