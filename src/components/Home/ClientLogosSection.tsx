
import React from "react";
import { OptimizedImage } from "@/components/ui/optimized-image";

const clientLogos = [
  {
    name: "Coricraft",
    logoUrl: "/lovable-uploads/3ca4afbb-bc75-49b3-a944-edde61dc0733.png",
  },
  {
    name: "Zando",
    logoUrl: "/lovable-uploads/bf58a296-d3be-4935-8fb4-8bd268b4b6a7.png",
  },
  {
    name: "Flash",
    logoUrl: "/lovable-uploads/b5b92171-6fdf-4183-aae9-25edcd55f42f.png",
  },
  {
    name: "EY",
    logoUrl: "/lovable-uploads/1c70efe7-57e9-4d87-875f-295118ccf930.png",
  },
  {
    name: "Engen",
    logoUrl: "/lovable-uploads/91d0bbba-5c11-46af-aad7-d725571737e9.png",
  },
  {
    name: "PEP",
    logoUrl: "/lovable-uploads/f29ebb12-0131-45d0-9adb-0254d0dfa666.png",
  },
  {
    name: "KIA",
    logoUrl: "/lovable-uploads/cbfc29dd-4224-4d52-ba67-e7d18aa6a94b.png",
  },
  {
    name: "Imagemakers",
    logoUrl: "/lovable-uploads/0fbe53f7-8021-40fb-9cd5-bf39fb1b5917.png",
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
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center">
            {clientLogos.map((client) => (
              <div 
                key={client.name} 
                className="flex items-center justify-center p-4 h-24 w-full grayscale hover:grayscale-0 transition-all duration-300"
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
