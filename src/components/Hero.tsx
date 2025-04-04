
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-blue-900 to-blue-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              High-speed, low-risk
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-300"> AI solutions</span>
            </h1>
            <p className="mt-6 text-lg text-gray-100 max-w-lg">
              We build AI automations, workflows, and agents that help businesses streamline operations, enhance decision-making, and deliver personalized experiences.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg text-lg">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-teal-300 text-teal-300 hover:bg-teal-500/10">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="relative animate-float">
            <div className="relative h-80 md:h-96 w-full">
              <div className="absolute inset-0 bg-teal-500 bg-opacity-10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl">
                <div className="absolute -bottom-12 -right-12 h-64 w-64 bg-teal-500 rounded-full opacity-20"></div>
                <div className="absolute top-8 -left-8 h-32 w-32 bg-blue-400 rounded-full opacity-20"></div>
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64">
                <img
                  src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
                  alt="AI Robot Action Figure"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
