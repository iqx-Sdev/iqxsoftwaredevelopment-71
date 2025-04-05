
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";
import ContactHero from "@/components/Contact/ContactHero";
import LocationsSection from "@/components/Contact/LocationsSection";
import ContactFormSection from "@/components/Contact/ContactFormSection";

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
        <LocationsSection locations={locations} />
        <ContactFormSection />
      </main>

      <Footer />
    </>
  );
};

export default Contact;
