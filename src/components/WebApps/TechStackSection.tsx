
import React from "react";

const techBenefits = [
  "Cross-Platform Agility: Build once with Flutter or React Native, deploy to iOS, Android, and web.",
  "Native-Like Performance: Smooth animations and interactions with Flutter and React Native.",
  "Faster Time to Market: Modular code meets real-time content updates.",
  "Strapi & Umbraco Integration: Update app content without deploying code.",
  "Content API Power: REST or GraphQL APIs for flexible data delivery.",
  "Role-Based Access: Strapi and Umbraco allow secure content control across teams.",
  "Scalable Architecture: Add features, integrations, and content layers as you grow.",
  "Rich Media Support: Easily manage assets like images, videos, and documents.",
  "Localization & Multisite Ready: Global-ready experiences powered by CMS flexibility."
];

const TechStackSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 to-newtheme-purple text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="mb-4 inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
              <span className="text-white font-medium">Technology Stack</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Flutter, React Native + Headless CMS?</h2>
            <p className="text-xl opacity-80 mb-6 max-w-3xl mx-auto">The Modern Stack for Speed, Flexibility & Control</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techBenefits.slice(0, 9).map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <div className="bg-gradient-to-r from-pink-500 to-blue-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold shrink-0">
                  {index + 1}
                </div>
                <p className="text-gray-100">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
