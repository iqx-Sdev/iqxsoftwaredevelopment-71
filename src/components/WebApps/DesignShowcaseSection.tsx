
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
                        src="/lovable-uploads/f528492b-642c-4e73-b833-5531a3deef0e.png" 
                        alt="WhatsApp e-commerce chatbot interface" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-lg text-newtheme-purple mb-2">E-commerce WhatsApp Bot</h3>
                      <p className="text-gray-600 text-sm">Intelligent product catalog and order tracking via chat</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
              
              <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                <Card className="overflow-hidden border-none shadow-lg">
                  <CardContent className="p-0">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img 
                        src="/lovable-uploads/ef90d4b1-5352-4840-ace8-7457f753cce2.png" 
                        alt="Medical lab WhatsApp chatbot" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-lg text-newtheme-purple mb-2">Healthcare Chat Assistant</h3>
                      <p className="text-gray-600 text-sm">Streamlined medical test booking and results inquiry</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
              
              <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                <Card className="overflow-hidden border-none shadow-lg">
                  <CardContent className="p-0">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img 
                        src="/lovable-uploads/62c56411-5939-4e6a-ac50-4ae9d904d852.png" 
                        alt="Chatbot flow builder interface" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-lg text-newtheme-purple mb-2">AI Conversation Designer</h3>
                      <p className="text-gray-600 text-sm">Visual flow builder for creating intelligent chat experiences</p>
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
