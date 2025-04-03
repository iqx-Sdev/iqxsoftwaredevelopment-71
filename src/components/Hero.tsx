
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-maverick-cream to-maverick-peach/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-maverick-navy leading-tight">
              High-speed, low-risk
              <span className="text-transparent bg-clip-text bg-peach-teal-gradient"> AI solutions</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700 max-w-lg">
              We build AI automations, workflows, and agents that help businesses streamline operations, enhance decision-making, and deliver personalized experiences.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button className="bg-maverick-navy hover:bg-maverick-navy/90 text-white px-6 py-3 rounded-lg text-lg">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-maverick-navy text-maverick-navy hover:bg-maverick-navy/10">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="relative animate-float">
            <div className="relative h-80 md:h-96 w-full">
              <div className="absolute inset-0 bg-[#FEC6A1] bg-opacity-20 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl">
                <div className="absolute -bottom-12 -right-12 h-64 w-64 bg-maverick-teal rounded-full opacity-20"></div>
                <div className="absolute top-8 -left-8 h-32 w-32 bg-maverick-rose rounded-full opacity-20"></div>
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64">
                <img
                  src="/placeholder.svg"
                  alt="AI Technology Visualization"
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
