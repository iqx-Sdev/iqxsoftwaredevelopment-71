
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="py-20 bg-gradient-to-br from-newtheme-purple to-blue-600">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full mb-5">
            <span className="text-white font-medium">Advanced AI Solutions</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Agentic AI Development
          </h1>
          <p className="text-xl text-white/80 mb-8">
            Unlock next-generation automation and operational intelligence with Agentic AI. IQX builds intelligent, autonomous systems that think, plan, and act — transforming your business processes with speed, precision, and impact.
          </p>
          <Link to="/book-consultation">
            <Button className="font-medium">
              Book a Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
