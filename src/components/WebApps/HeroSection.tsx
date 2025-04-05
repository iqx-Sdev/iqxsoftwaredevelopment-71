
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-newtheme-purple to-blue-600">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full mb-5">
            <span className="text-white font-medium">Web Application Development</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Web & App Development by IQX
          </h1>
          <p className="text-xl text-white/80 mb-8">
            Custom-built cross-platform apps, powered by Flutter, React Native, and flexible content architecture.
          </p>
          <p className="text-lg text-white/80 mb-8 max-w-3xl mx-auto">
            "At IQX, we don't just build apps—we engineer elegant, high-performance digital products with user-first design, 
            scalable architecture, and seamless functionality across iOS, Android, and web. Powered by headless CMS platforms 
            like Strapi and Umbraco, your content stays as agile as your code."
          </p>
          <Button className="bg-white hover:bg-gray-100 text-newtheme-purple px-8 py-6 rounded-lg text-lg">
            Talk to Our App Development Team
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
