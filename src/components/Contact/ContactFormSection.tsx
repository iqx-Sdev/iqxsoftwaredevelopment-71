
import React from "react";
import LeadForm from "@/components/LeadForm";

const ContactFormSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-newtheme-purple">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                Ready to get started with your AI journey? Have questions about our services? 
                Fill out the form and one of our experts will be in touch shortly.
              </p>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <p className="text-gray-800 font-medium mb-4">
                  What happens next?
                </p>
                <ol className="space-y-4">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 font-medium text-sm">1</span>
                    <span className="text-gray-600">Our team will contact you within 24 hours</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 font-medium text-sm">2</span>
                    <span className="text-gray-600">We'll discuss your goals and requirements</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 font-medium text-sm">3</span>
                    <span className="text-gray-600">We'll propose a tailored solution for your business</span>
                  </li>
                </ol>
              </div>
            </div>
            <div>
              <LeadForm 
                title="Send Us a Message"
                subtitle="Fill out the form below and we'll get back to you as soon as possible."
                serviceName="IQX services"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
