
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ChartVisualization from "./ChartVisualization";

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-newtheme-purple to-newtheme-darkgray overflow-hidden relative">
      {/* Wave pattern background */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src="/lovable-uploads/17da4675-01fe-498e-a39e-74c35ddb035f.png"
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="flex items-center mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-white px-3 py-1 rounded-md text-sm font-medium">AI POWERED</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              High-speed, low-risk
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300"> AI solutions</span>
            </h1>
            <p className="mt-6 text-lg text-gray-100 max-w-lg">
              We build AI automations, workflows, and agents that help businesses streamline operations, enhance decision-making, and deliver personalized experiences.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button className="bg-white hover:bg-gray-100 text-newtheme-purple px-6 py-3 rounded-lg text-lg">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
            
            <div className="mt-12">
              <div className="flex items-center">
                <div className="text-2xl font-bold text-white flex items-center">
                  <span className="text-cyan-400 mr-2">We're your</span>
                  <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-2 py-1 rounded">go-to™</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-float">
            <div className="relative h-80 md:h-96 w-full">
              <div className="absolute inset-0 bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl">
                <div className="absolute -bottom-12 -right-12 h-64 w-64 bg-cyan-400 rounded-full opacity-10"></div>
                <div className="absolute top-8 -left-8 h-32 w-32 bg-purple-400 rounded-full opacity-10"></div>
                
                {/* Data visualization overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <ChartVisualization />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
