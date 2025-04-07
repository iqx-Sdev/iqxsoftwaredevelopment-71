
import React from "react";

interface CaseStudyGalleryProps {
  images: string[];
  title: string;
}

const CaseStudyGallery: React.FC<CaseStudyGalleryProps> = ({ images, title }) => {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-newtheme-purple mb-6">Project Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div key={index} className="aspect-[4/3] overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <img 
              src={image} 
              alt={`${title} project image ${index + 1}`} 
              className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudyGallery;
