
import React from "react";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-newtheme-purple to-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl opacity-80 mb-8">
            Engage smarter. Convert faster. Support better — with our innovative solutions.
          </p>
          <Link to="/book-consultation">
            <Button className="bg-white hover:bg-gray-100 text-newtheme-purple px-8 py-6 rounded-lg text-lg border border-gray-300">
              Book a Consultation
              <FontAwesomeIcon icon={faArrowRight} className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
