
import React from "react";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const CareersSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-newtheme-purple text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-4 inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                <span className="text-white font-medium">Join Our Team</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Careers at IQX</h2>
              <p className="text-xl opacity-80 mb-8">
                We're looking for exceptional talent to join our growing team of problem-solvers, 
                innovators and industry experts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/book-consultation">
                  <Button className="bg-white text-newtheme-purple hover:bg-gray-100">
                    Book a Consultation
                    <FontAwesomeIcon icon={faArrowRight} className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/book-consultation">
                  <Button variant="outline" className="border-white text-white hover:bg-white/10">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=500&h=500&q=80" 
                  alt="IQX team member" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg mt-8">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=500&h=500&q=80" 
                  alt="IQX team meeting" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=500&h=500&q=80" 
                  alt="IQX office" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg mt-8">
                <img 
                  src="https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&w=500&h=500&q=80" 
                  alt="IQX consulting" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;
