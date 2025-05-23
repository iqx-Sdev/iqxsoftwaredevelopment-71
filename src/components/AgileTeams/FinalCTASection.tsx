
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const FinalCTASection = () => {
  return (
    <div className="py-16 bg-gradient-to-br from-purple-700 to-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Let's Build a Team That Builds Your Product
          </h2>
          <p className="text-lg mb-12">
            Whether you're scaling fast, launching new features, or rebuilding legacy systems, IQX provides agile teams that think beyond code. You bring the vision—we'll bring the velocity.
          </p>
          <div className="flex justify-center">
            <Link to="/book-consultation">
              <Button className="bg-white hover:bg-gray-100 text-newtheme-purple px-8 py-6 rounded-lg text-lg">
                Book a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalCTASection;
