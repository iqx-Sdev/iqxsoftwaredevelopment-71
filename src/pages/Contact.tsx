
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Helmet } from "react-helmet";

const Contact = () => {
  const [activeLocation, setActiveLocation] = useState("johannesburg");
  
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

  const activeLocationData = locations[activeLocation as keyof typeof locations];

  return (
    <>
      <Helmet>
        <title>Contact Us | IQX</title>
        <meta name="description" content="Get in touch with the IQX team. We'd love to hear from you and discuss how we can help with your AI and digital transformation needs." />
      </Helmet>
      
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="bg-purple-gray-gradient text-white py-20">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">Contact Us</h1>
              <p className="text-lg md:text-xl text-gray-200">
                We'd love to hear from you. Get in touch with our team.
              </p>
            </div>
          </div>
        </section>

        {/* Office Locations Tabs */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-newtheme-purple">Our Offices</h2>
              
              <div className="flex flex-wrap justify-center gap-4 mb-10">
                {Object.entries(locations).map(([key, location]) => (
                  <button
                    key={key}
                    className={`px-6 py-3 rounded-full text-sm md:text-base font-medium transition-colors ${
                      activeLocation === key 
                        ? "bg-gradient-to-r from-pink-500 to-blue-500 text-white"
                        : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                    }`}
                    onClick={() => setActiveLocation(key)}
                  >
                    {location.name}
                  </button>
                ))}
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                {/* Map */}
                <div className="h-full rounded-xl overflow-hidden shadow-lg border border-gray-100">
                  <iframe 
                    width="100%" 
                    height="450" 
                    frameBorder="0" 
                    style={{ border: 0 }} 
                    src={activeLocationData.coordinates} 
                    allowFullScreen
                    title={`Map of ${activeLocationData.name} office`}
                    className="w-full h-full"
                  />
                </div>

                {/* Contact Info */}
                <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col h-full border border-gray-100">
                  <h3 className="text-2xl font-bold text-newtheme-purple mb-6">{activeLocationData.name} Office</h3>

                  <div className="flex-grow space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full text-blue-500">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                        <address className="not-italic text-gray-600">
                          {activeLocationData.address.map((line, i) => (
                            <div key={i}>{line}</div>
                          ))}
                        </address>
                        <a 
                          href={activeLocationData.mapLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-pink-500 hover:text-pink-600 text-sm font-medium mt-2 inline-block"
                        >
                          Get Directions
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 bg-green-100 p-3 rounded-full text-green-500">
                        <Phone size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                        <a href={`tel:${activeLocationData.phone}`} className="text-gray-600 hover:text-pink-500">
                          {activeLocationData.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 bg-violet-100 p-3 rounded-full text-violet-500">
                        <Mail size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                        <a href={`mailto:${activeLocationData.email}`} className="text-gray-600 hover:text-pink-500">
                          {activeLocationData.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 bg-amber-100 p-3 rounded-full text-amber-500">
                        <Clock size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Business Hours</h4>
                        <p className="text-gray-600">Monday - Friday: {activeLocationData.hours}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
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
      </main>

      <Footer />
    </>
  );
};

export default Contact;
