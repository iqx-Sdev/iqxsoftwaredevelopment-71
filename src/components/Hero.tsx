
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Creating value through 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300"> innovative solutions</span>
            </h1>
            <p className="mt-6 text-lg text-gray-100 max-w-lg mb-8">
              IQBusiness is South Africa's leading independent management consulting firm, helping 
              clients overcome business challenges and achieve sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white hover:bg-gray-100 text-newtheme-purple px-6 py-3 rounded-lg text-lg">
                Our Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                About Us
              </Button>
            </div>
          </div>
          
          <div className="relative animate-float hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/043f060f-4ca1-4331-968c-ecb3e3b6d290.png" 
                  alt="Professional working in office" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg mt-8">
                <img 
                  src="/lovable-uploads/eb0a740d-3dc9-43b3-8ad8-e035b3a81170.png" 
                  alt="Collaborative workspace" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/c6f6534a-9f95-42c7-97d1-69f4442bc917.png" 
                  alt="Business professional" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg mt-8">
                <img 
                  src="/lovable-uploads/11746b3e-8d9f-4102-9a07-c9f1be35fd9b.png" 
                  alt="Team meeting" 
                  className="w-full h-full object-cover"
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
