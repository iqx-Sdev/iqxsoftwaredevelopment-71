
import React from "react";

const CaseStudiesHero: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-newtheme-purple to-blue-600">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full mb-5">
            <span className="text-white font-medium">Client Success Stories</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Case Studies
          </h1>
          <p className="text-xl text-white/80 mb-8">
            Transformative results for real-world business challenges
          </p>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesHero;
