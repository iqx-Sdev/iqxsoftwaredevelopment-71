
import React from "react";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 order-2 md:order-1">
              <div className="rounded-xl shadow-lg overflow-hidden aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/hr-fDS6SY-A"
                  title="IQX Software Development Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <div className="mb-4 inline-block bg-blue-100 px-3 py-1 rounded-full">
                <span className="text-blue-700 font-medium">About IQX</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-newtheme-purple mb-6">We're business smart, but techies at heart </h2>
              <p className="text-gray-600 mb-6">At our core we're a bunch of coders, who love tech. We started small, and now run a company that has 300+ talented people, across three countries. We know business, and that's something that sets us apart. We know how important it is to hire the right people, and have solid partnerships you can trust in. </p>
              <Link to="/contact">
                <Button className="bg-newtheme-purple hover:bg-newtheme-purple/90 text-white">
                  Learn More About Us
                  <FontAwesomeIcon icon={faArrowRight} className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default AboutSection;
