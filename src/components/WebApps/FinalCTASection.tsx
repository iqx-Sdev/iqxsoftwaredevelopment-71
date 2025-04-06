
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const FinalCTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-newtheme-purple to-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Build an App Worth Downloading
          </h2>
          <p className="text-xl opacity-80 mb-8 max-w-3xl mx-auto">
            Whether you're launching a new app, scaling a product, or transforming an old system, IQX is your partner in crafting beautiful, 
            performant, and content-flexible digital products. Powered by Flutter or React Native, and CMS platforms like Strapi and Umbraco, 
            we make app development smarter, faster, and more empowering.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book-consultation">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold">
                Talk to Our App Development Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/book-consultation">
              <Button variant="outline" className="border-white text-white hover:bg-white/20 font-medium">
                Schedule a Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
