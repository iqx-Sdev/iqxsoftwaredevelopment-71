
import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ServiceItem {
  title: string;
  description: string;
}

interface ServicesSectionProps {
  serviceItems: ServiceItem[];
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ serviceItems }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="mb-4 inline-block bg-green-100 px-3 py-1 rounded-full">
              <span className="text-green-700 font-medium">Our Services</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-newtheme-purple mb-6">
              What Can IQX Do for You?
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              From ideation to deployment, we help you streamline operations and unlock new possibilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceItems.slice(0, 6).map((service, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-newtheme-purple">
                    <div className="text-xl">{service.title.split(" ")[0]}</div>
                    {service.title.split(" ").slice(1).join(" ")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
