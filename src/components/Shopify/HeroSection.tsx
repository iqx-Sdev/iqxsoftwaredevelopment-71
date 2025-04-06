
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-newtheme-purple to-blue-600">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full mb-5">
              <span className="text-white font-medium">Shopify Website Design</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Shopify Website Design by IQX
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Exceptional Shopify experiences engineered for performance and built for growth.
            </p>
            <Link to="/book-consultation">
              <Button className="bg-white hover:bg-gray-100 text-newtheme-purple px-8 py-6 rounded-lg text-lg">
                Book a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
          <div className="relative hidden lg:block">
            <img 
              src="/lovable-uploads/914737f9-1a98-46d7-bb9c-332d9cc6b211.png" 
              alt="Modern Shopify storefront design" 
              className="rounded-xl shadow-2xl w-full mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
