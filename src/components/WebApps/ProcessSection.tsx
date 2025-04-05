
import React from "react";
import { ArrowRight } from "lucide-react";

const process = [
  {
    title: "Discovery & Strategy",
    description: "We learn your goals, audience, and technical landscape—including the ideal CMS to support your content needs."
  },
  {
    title: "UX Architecture & Wireframing",
    description: "Crafting intuitive structures with scalable information architecture—designed for API-driven content flow."
  },
  {
    title: "Pixel-Perfect UI Design",
    description: "Delightful, responsive interfaces that pull in real-time content from Strapi, Umbraco, or your CMS of choice."
  },
  {
    title: "Cross-Platform Development",
    description: "Robust Flutter or React Native codebases, powered by flexible content APIs and real-time updates."
  },
  {
    title: "Launch, Test, Iterate",
    description: "Ongoing testing, performance tuning, and CMS-enabled agility so you can adapt and grow post-launch."
  }
];

const ProcessSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="mb-4 inline-block bg-green-100 px-3 py-1 rounded-full">
              <span className="text-green-700 font-medium">Our Process</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-newtheme-purple mb-6">Our Design + Build Process</h2>
            <p className="text-gray-600 text-lg">From Idea to App Store: Our 5-Step Approach</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-white rounded-xl p-8 shadow-lg h-full transition-all duration-300 hover:shadow-xl border border-transparent hover:border-blue-100 group-hover:-translate-y-1">
                  <div className="bg-gradient-to-r from-pink-500 to-blue-500 rounded-full w-14 h-14 flex items-center justify-center text-white font-bold mb-8 transform transition-transform group-hover:scale-110">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-newtheme-purple mb-5">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-8 h-8 text-blue-300 group-hover:text-blue-500 transition-colors">
                    <ArrowRight className="animate-pulse" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
