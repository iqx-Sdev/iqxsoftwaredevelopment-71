
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="py-20 bg-gradient-to-br from-purple-700 to-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Agile Development Teams by IQX
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            High-performance, cross-functional squads built to ship your digital product faster.
          </p>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg mb-8 italic">
            <p className="text-lg">
              "At IQX, we don't just offer developers—we deliver fully integrated agile teams that think, build, and scale with your business. Led by engineering experts and powered by proven delivery frameworks, our squads work as an extension of your product vision."
            </p>
          </div>
          <Button className="bg-white text-purple-700 hover:bg-gray-100">
            Talk to Our Agile Team Experts <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
