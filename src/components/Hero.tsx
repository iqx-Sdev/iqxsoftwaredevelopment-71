
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-newtheme-purple to-blue-600">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
      </div>
    </section>
  );
};

export default Hero;
