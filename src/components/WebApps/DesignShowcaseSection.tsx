
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";

const DesignShowcaseSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="mb-4 inline-block bg-pink-100 px-3 py-1 rounded-full">
              <span className="text-pink-800 font-medium">Web App Designs</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-newtheme-purple mb-6">
              Web Application Design Showcase
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Beautiful and functional interfaces built for real-world business problems
            </p>
          </div>
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                <Card className="overflow-hidden border-none shadow-lg">
                  <CardContent className="p-0">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img 
                        src="/lovable-uploads/914737f9-1a98-46d7-bb9c-332d9cc6b211.png" 
                        alt="E-commerce web app interface" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-lg text-newtheme-purple mb-2">E-commerce Platform</h3>
                      <p className="text-gray-600 text-sm">Modern shopping experience with user-centric design</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
              
              <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                <Card className="overflow-hidden border-none shadow-lg">
                  <CardContent className="p-0">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img 
                        src="/lovable-uploads/e8098bea-0128-43dc-9d97-49d4cb60de99.png" 
                        alt="Product showcase interface" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-lg text-newtheme-purple mb-2">Product Catalog</h3>
                      <p className="text-gray-600 text-sm">Interactive product showcase with detailed information</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
              
              <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                <Card className="overflow-hidden border-none shadow-lg">
                  <CardContent className="p-0">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img 
                        src="/lovable-uploads/d91346d2-b226-407b-b32f-754cd37a32a0.png" 
                        alt="Healthcare app interface" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-lg text-newtheme-purple mb-2">Healthcare Portal</h3>
                      <p className="text-gray-600 text-sm">Patient-focused healthcare management system</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
              
              <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                <Card className="overflow-hidden border-none shadow-lg">
                  <CardContent className="p-0">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img 
                        src="/lovable-uploads/4aa2cbcd-56c2-4332-8657-b6c0b0e00108.png"
                        alt="Fashion web app interface" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-lg text-newtheme-purple mb-2">Fashion Platform</h3>
                      <p className="text-gray-600 text-sm">Visually stunning clothing and accessories showcase</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="relative inset-auto mr-2" />
              <CarouselNext className="relative inset-auto ml-2" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default DesignShowcaseSection;

