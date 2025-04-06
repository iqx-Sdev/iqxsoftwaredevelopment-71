
import React from "react";

interface ComponentItem {
  icon: string;
  title: string;
  description: string;
}

interface KeyComponentsSectionProps {
  componentItems: ComponentItem[];
}

const KeyComponentsSection: React.FC<KeyComponentsSectionProps> = ({ componentItems }) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="mb-4 inline-block bg-purple-100 px-3 py-1 rounded-full">
              <span className="text-purple-700 font-medium">Key Components</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-newtheme-purple mb-6">
              4 Key Components of Power Apps
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {componentItems.map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4 text-xl">
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyComponentsSection;
