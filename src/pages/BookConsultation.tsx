
import React, { Suspense, lazy } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";
import LeadForm from "@/components/LeadForm";
import CalendlyEmbed from "@/components/Calendly/CalendlyEmbed";

// Loading fallback
const SectionLoader = () => (
  <div className="flex items-center justify-center py-16">
    <div className="w-12 h-12 border-4 border-newtheme-purple rounded-full border-t-transparent animate-spin"></div>
  </div>
);

const BookConsultationPage = () => {
  return (
    <>
      <Helmet>
        <title>Book a Consultation | IQX</title>
        <meta name="description" content="Book a free consultation with our experts to discuss your business needs and discover how IQX can help you achieve your goals." />
      </Helmet>

      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-newtheme-purple to-blue-600 text-white py-20">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">Book a Consultation</h1>
              <p className="text-lg md:text-xl text-gray-200">
                Schedule a free consultation with our experts or fill out the contact form below.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content with Form and Calendly */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form Side */}
                <div>
                  <LeadForm 
                    title="Get in Touch" 
                    subtitle="Fill out the form below and we'll contact you to schedule your consultation."
                    serviceName="IQX consultation services"
                  />
                </div>
                
                {/* Calendly Side */}
                <div>
                  <h2 className="text-2xl font-bold text-newtheme-purple mb-4">Schedule Directly</h2>
                  <p className="text-gray-600 mb-6">
                    Select a time that works for you using our online scheduling tool below.
                  </p>
                  
                  <div className="bg-white rounded-lg shadow-md border border-gray-200">
                    <Suspense fallback={<SectionLoader />}>
                      <CalendlyEmbed url="https://calendly.com/iqx-consultations/30min" />
                    </Suspense>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default BookConsultationPage;
