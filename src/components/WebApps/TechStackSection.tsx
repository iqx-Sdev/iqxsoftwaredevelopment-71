
import React from "react";

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
            <p className="text-xl opacity-80 mb-6 max-w-3xl mx-auto">The Modern Stack for Speed, Flexibility & Control</p>
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
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden shadow-xl">
                  <img 
                    src="/lovable-uploads/b4c8b66a-8da8-4636-8c43-d355fb188f22.png" 
                    alt="Mobile app interface" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-xl mt-8">
                  <img 
                    src="/lovable-uploads/a9ef1970-ba1a-4294-8c6f-c1ed4f9dda3e.png" 
                    alt="Setup wizard interface" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-3/4 max-w-xs">
                <img 
                  src="/lovable-uploads/77479e54-2790-4b90-982a-54bbd8e631f5.png" 
                  alt="Project management interface" 
                  className="rounded-xl shadow-2xl border-2 border-white/20"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
