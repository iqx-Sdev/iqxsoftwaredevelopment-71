
import React from "react";
import { OptimizedImage } from "@/components/ui/optimized-image";

const clientLogos = [
  {
    name: "Ackermans",
    logoUrl: "/lovable-uploads/8235f860-205d-4fa4-abe7-f92b545a09ff.png",
  },
  {
    name: "Clickatell",
    logoUrl: "/lovable-uploads/96368969-190b-40f9-94fe-1a42e859489d.png",
  },
  {
    name: "Coricraft",
    logoUrl: "/lovable-uploads/7de6954a-94e5-4325-9851-f524e21ada36.png",
  },
  {
    name: "Engen",
    logoUrl: "/lovable-uploads/2bdb321b-02db-482c-ac1e-915981b35bc5.png",
  },
  {
    name: "EY",
    logoUrl: "/lovable-uploads/5b2d775f-05b0-4957-8352-6b386472a6e7.png",
  },
  {
    name: "Flash",
    logoUrl: "/lovable-uploads/3d13b575-c392-4e7c-9e38-0abce9367963.png",
  },
  {
    name: "Hertex",
    logoUrl: "/lovable-uploads/d3f88f09-5078-4878-b7d3-9af5cb91423e.png",
  },
  {
    name: "Imagemakers",
    logoUrl: "/lovable-uploads/d7d469b8-1ba0-4fe2-8f21-ef999e9adcc3.png",
  },
  {
    name: "KIA",
    logoUrl: "/lovable-uploads/b3b67ca0-bdb9-4417-84fd-0a19099f48c8.png",
  },
  {
    name: "KitchenAid",
    logoUrl: "/lovable-uploads/5cf7ebf5-333b-4edd-9438-62f9c3387fcb.png",
  },
  {
    name: "MotorHappy",
    logoUrl: "/lovable-uploads/d5cd0a2a-3468-4274-9584-cc903b2dd9aa.png",
  },
  {
    name: "MTN",
    logoUrl: "/lovable-uploads/8c7a6bcd-f243-48a7-ba72-e5be613b1ad6.png",
  },
  {
    name: "Nedbank",
    logoUrl: "/lovable-uploads/2381b1b6-8c2e-4ca3-9f84-8cf25c14c000.png",
  },
  {
    name: "Pearson",
    logoUrl: "/lovable-uploads/c4aa8c7f-ac22-429e-8a3c-d0194258d828.png",
  },
  {
    name: "PEP",
    logoUrl: "/lovable-uploads/9f023c09-f850-46c3-8306-d7d34559e6ec.png",
  },
  {
    name: "Zando",
    logoUrl: "/lovable-uploads/cd66abd4-5cbb-43e0-908b-b3e62b9aaf5e.png",
  },
];

const ClientLogosSection = () => {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="mb-4 inline-block bg-gray-100 px-3 py-1 rounded-full">
              <span className="text-gray-700 font-medium">Trusted By</span>
            </div>
            <h2 className="text-3xl font-bold text-newtheme-purple mb-6">Our Clients</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We've partnered with leading companies across various industries to deliver exceptional results.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 items-center justify-items-center">
            {clientLogos.map((client) => (
              <div 
                key={client.name} 
                className="flex items-center justify-center p-3 h-20 w-full grayscale hover:grayscale-0 transition-all duration-300"
              >
                <OptimizedImage
                  src={client.logoUrl}
                  alt={`${client.name} logo`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogosSection;
