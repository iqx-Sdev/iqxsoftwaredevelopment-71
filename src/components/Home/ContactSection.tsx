
import React from "react";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const ContactSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="mb-4 inline-block bg-blue-100 px-3 py-1 rounded-full">
              <span className="text-blue-700 font-medium">Get in Touch</span>
            </div>
            <h2 className="text-3xl font-bold text-newtheme-purple mb-6">Contact Us</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Have a question or ready to start a conversation? Reach out to us today.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="mb-4 inline-flex p-3 bg-pink-100 rounded-full">
                <FontAwesomeIcon icon={faEnvelope} className="h-6 w-6 text-pink-500" />
              </div>
              <h3 className="text-xl font-bold text-newtheme-purple mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">For general inquiries and information</p>
              <a href="mailto:info@iqbusiness.co.za" className="text-pink-500 hover:text-pink-600 font-medium">
                info@iqbusiness.co.za
              </a>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="mb-4 inline-flex p-3 bg-green-100 rounded-full">
                <FontAwesomeIcon icon={faPhone} className="h-6 w-6 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-newtheme-purple mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">Available Monday to Friday, 8am to 5pm</p>
              <a href="tel:+27112593000" className="text-pink-500 hover:text-pink-600 font-medium">
                +27 11 259 3000
              </a>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="mb-4 inline-flex p-3 bg-purple-100 rounded-full">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="h-6 w-6 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold text-newtheme-purple mb-2">Visit Us</h3>
              <p className="text-gray-600 mb-4">Our headquarters in Johannesburg</p>
              <address className="text-pink-500 not-italic">
                Johannesburg, South Africa
              </address>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button className="bg-newtheme-purple hover:bg-newtheme-purple/90 text-white px-8 py-6 text-lg">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
