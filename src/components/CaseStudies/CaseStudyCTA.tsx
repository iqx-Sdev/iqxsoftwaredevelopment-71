
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CaseStudyCTA: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-newtheme-purple mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Let's discuss how we can help you achieve similar results with a tailored solution for your unique challenges.
          </p>
          <Link to="/contact">
            <Button variant="gradient" size="lg">
              Get in Touch
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyCTA;
