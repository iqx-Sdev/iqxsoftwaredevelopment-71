
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface CaseStudyHeroProps {
  title: string;
  subtitle: string;
  industry: string;
  heroImage: string;
}

const CaseStudyHero: React.FC<CaseStudyHeroProps> = ({
  title,
  subtitle,
  industry,
  heroImage
}) => {
  return (
    <section className="relative h-[40vh] md:h-[60vh] overflow-hidden">
      <img 
        src={heroImage} 
        alt={title} 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
        <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-16">
          <Link to="/case-studies" className="text-white hover:underline mb-4 flex items-center">
            <ArrowLeft size={16} className="mr-2" />
            Back to Case Studies
          </Link>
          <div className="mb-2">
            <span className="inline-block px-3 py-1 text-xs font-medium text-white bg-newtheme-purple/80 rounded-full">
              {industry}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            {title}
          </h1>
          <p className="text-xl text-white/90 mt-2">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyHero;
