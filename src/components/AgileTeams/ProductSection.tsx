
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ProductSection = () => {
  return (
    <div className="py-16 bg-gradient-to-br from-purple-700 to-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Your Product, Built by a Team That Gets It
          </h2>
          <p className="text-lg mb-8">
            From startups to enterprise builds, our agile teams are tailored to your roadmap. Whether you're building a new platform, scaling an existing app, or just need to move faster—we embed elite squads of engineers, designers, QA testers, and delivery leads directly into your workflow.
          </p>
          <p className="text-xl font-semibold text-center mb-8">
            With IQX, you get more than capacity—you get capability.
          </p>
          <div className="flex justify-center">
            <Link to="/book-consultation">
              <Button className="bg-white hover:bg-gray-100 text-newtheme-purple px-8 py-6 rounded-lg text-lg">
                Book a Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
