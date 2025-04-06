
import React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceItem {
  title: string;
  description: string;
}

interface MoreFromSectionProps {
  moreServices: ServiceItem[];
}

const MoreFromSection: React.FC<MoreFromSectionProps> = ({ moreServices }) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-newtheme-purple mb-6">More From IQX</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {moreServices.map((service, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="bg-pink-100 rounded-full p-2">
                  <Check className="h-6 w-6 text-pink-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-newtheme-purple mb-1">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" className="border-newtheme-purple text-newtheme-purple hover:bg-newtheme-purple/10">
              Explore All Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreFromSection;
