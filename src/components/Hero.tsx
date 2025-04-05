
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-newtheme-purple to-blue-600">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full mb-5">
              <span className="text-white font-medium">Business Solutions</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Creating value through innovative solutions
            </h1>
            <p className="text-xl text-white/80 mb-8">
              IQBusiness is South Africa's leading independent management consulting firm, helping 
              clients overcome business challenges and achieve sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button className="bg-white hover:bg-gray-100 text-newtheme-purple px-8 py-6 rounded-lg text-lg">
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/agentic-ai">
                <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 rounded-lg text-lg">
                  Explore Solutions
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <img 
              src="/lovable-uploads/77479e54-2790-4b90-982a-54bbd8e631f5.png"
              alt="Business solutions dashboard" 
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

export default Hero;
