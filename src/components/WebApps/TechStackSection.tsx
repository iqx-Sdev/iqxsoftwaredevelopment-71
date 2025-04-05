
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const techBenefits = [
  "Cross-Platform Agility: Build once with Flutter or React Native, deploy to iOS, Android, and web.",
  "Native-Like Performance: Smooth animations and interactions with Flutter and React Native.",
  "Faster Time to Market: Modular code meets real-time content updates.",
  "Strapi & Umbraco Integration: Update app content without deploying code.",
  "Content API Power: REST or GraphQL APIs for flexible data delivery.",
  "Role-Based Access: Strapi and Umbraco allow secure content control across teams."
];

const TechStackSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 to-newtheme-purple text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="mb-4 inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
              <span className="text-white font-medium">Technology Stack</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Flutter, React Native + Headless CMS?</h2>
            <p className="text-xl opacity-80 mb-10 max-w-3xl mx-auto">The Modern Stack for Speed, Flexibility & Control</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {techBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <div className="bg-gradient-to-r from-pink-500 to-blue-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-gray-100">{benefit}</p>
                </div>
              ))}
            </div>
            
            <div>
              <Carousel className="w-full">
                <CarouselContent>
                  {/* First Slide - Crypto App UI */}
                  <CarouselItem className="md:basis-1/2">
                    <div className="p-1">
                      <div className="flex justify-center">
                        <img 
                          src="/lovable-uploads/51d0e451-5573-4c1e-a6a0-203995afe3e0.png" 
                          alt="Mobile crypto app interface with wallet dashboard and price chart" 
                          className="rounded-xl shadow-xl max-h-96 object-contain"
                        />
                      </div>
                      <div className="text-center mt-4">
                        <h3 className="text-lg font-medium text-white">Crypto Wallet Dashboard</h3>
                        <p className="text-sm text-gray-300 mt-1">Flutter UI with real-time data visualization</p>
                      </div>
                    </div>
                  </CarouselItem>
                  
                  {/* Second Slide - AI Chat Bot UI */}
                  <CarouselItem className="md:basis-1/2">
                    <div className="p-1">
                      <div className="flex justify-center">
                        <img 
                          src="/lovable-uploads/22ee19c2-1efa-414f-ad93-015abd5e0562.png" 
                          alt="AI chatbot application interface with multiple screens" 
                          className="rounded-xl shadow-xl max-h-96 object-contain"
                        />
                      </div>
                      <div className="text-center mt-4">
                        <h3 className="text-lg font-medium text-white">AI Assistant Platform</h3>
                        <p className="text-sm text-gray-300 mt-1">React Native app with ChatGPT integration</p>
                      </div>
                    </div>
                  </CarouselItem>
                  
                  {/* Original images can be kept as additional slides */}
                  <CarouselItem className="md:basis-1/2">
                    <div className="p-1">
                      <div className="flex justify-center">
                        <img 
                          src="/lovable-uploads/b4c8b66a-8da8-4636-8c43-d355fb188f22.png" 
                          alt="Mobile app interface" 
                          className="rounded-xl shadow-xl max-h-96 object-contain"
                        />
                      </div>
                      <div className="text-center mt-4">
                        <h3 className="text-lg font-medium text-white">Trip Tracking Interface</h3>
                        <p className="text-sm text-gray-300 mt-1">Custom Flutter UI components</p>
                      </div>
                    </div>
                  </CarouselItem>
                  
                  <CarouselItem className="md:basis-1/2">
                    <div className="p-1">
                      <div className="flex justify-center">
                        <img 
                          src="/lovable-uploads/77479e54-2790-4b90-982a-54bbd8e631f5.png" 
                          alt="Project management interface" 
                          className="rounded-xl shadow-xl max-h-96 object-contain"
                        />
                      </div>
                      <div className="text-center mt-4">
                        <h3 className="text-lg font-medium text-white">Project Management Tool</h3>
                        <p className="text-sm text-gray-300 mt-1">React Native with Redux state management</p>
                      </div>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="left-2 bg-white/20 hover:bg-white/30 border-none" />
                <CarouselNext className="right-2 bg-white/20 hover:bg-white/30 border-none" />
              </Carousel>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-300">Swipe to explore our Flutter & React Native app examples</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
