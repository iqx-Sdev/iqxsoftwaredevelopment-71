
import React, { Suspense, lazy } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

// Add fallback component for loading state
const SectionLoader = () => (
  <div className="flex items-center justify-center py-16">
    <div className="w-12 h-12 border-4 border-newtheme-purple rounded-full border-t-transparent animate-spin"></div>
  </div>
);

// Lazy load components
const ContactHero = lazy(() => import("@/components/Contact/ContactHero"));
const LocationsSection = lazy(() => import("@/components/Contact/LocationsSection"));
const ContactFormSection = lazy(() => import("@/components/Contact/ContactFormSection"));

const Contact = () => {
  const locations = {
    johannesburg: {
      name: "Johannesburg",
      address: ["The Campus", "57 Sloane Street", "Bryanston, 2191"],
      coordinates: "https://maps.google.com/maps?q=IQbusiness%20Johannesburg&t=&z=13&ie=UTF8&iwloc=&output=embed",
      phone: "+27 11 259 4000",
      email: "info@iqbusiness.co.za",
      hours: "8:00am - 5:00pm",
      mapLink: "https://goo.gl/maps/123456"
    },
    capeTown: {
      name: "Cape Town",
      address: ["2nd Floor, Block F South", "Waverley Business Park", "Wyecroft Road, Observatory, 7925"],
      coordinates: "https://maps.google.com/maps?q=IQbusiness%20Cape%20Town&t=&z=13&ie=UTF8&iwloc=&output=embed",
      phone: "+27 21 447 5585",
      email: "info@iqbusiness.co.za", 
      hours: "8:00am - 5:00pm",
      mapLink: "https://goo.gl/maps/789012"
    },
    durban: {
      name: "Durban",
      address: ["The Boulevard", "19 Park Lane", "Umhlanga Ridge, 4319"],
      coordinates: "https://maps.google.com/maps?q=IQbusiness%20Durban&t=&z=13&ie=UTF8&iwloc=&output=embed",
      phone: "+27 31 566 8000",
      email: "info@iqbusiness.co.za",
      hours: "8:00am - 5:00pm",
      mapLink: "https://goo.gl/maps/345678"
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | IQX</title>
        <meta name="description" content="Get in touch with the IQX team. We'd love to hear from you and discuss how we can help with your AI and digital transformation needs." />
      </Helmet>
      
      <Navbar />

      <main>
        <ContactHero />
        <Suspense fallback={<SectionLoader />}>
          <LocationsSection locations={locations} />
          <ContactFormSection />
        </Suspense>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
