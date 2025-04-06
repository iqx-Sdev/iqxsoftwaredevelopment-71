
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy, faLaptop, faCheckCircle, faUsers } from "@fortawesome/free-solid-svg-icons";

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
};

const FeatureCard = ({ icon, title, description, bgColor }: FeatureCardProps) => (
  <div className="bg-white p-8 rounded-xl shadow-md">
    <div className={`flex items-center gap-4 mb-4`}>
      <div className={`h-12 w-12 rounded-full ${bgColor} flex items-center justify-center`}>
        {icon}
      </div>
      <h3 className="font-bold text-xl text-newtheme-purple">{title}</h3>
    </div>
    <p className="text-gray-600">{description}</p>
  </div>
);

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: <FontAwesomeIcon icon={faTrophy} className="h-6 w-6 text-white" />,
      title: "Expertise",
      description: "Industry leaders with deep knowledge across key business domains",
      bgColor: "bg-purple-500"
    },
    {
      icon: <FontAwesomeIcon icon={faLaptop} className="h-6 w-6 text-white" />,
      title: "Innovation",
      description: "Cutting-edge solutions leveraging the latest technological advancements",
      bgColor: "bg-blue-500"
    },
    {
      icon: <FontAwesomeIcon icon={faCheckCircle} className="h-6 w-6 text-white" />,
      title: "Results-Driven",
      description: "Focused on delivering measurable outcomes and ROI for your business",
      bgColor: "bg-green-500"
    },
    {
      icon: <FontAwesomeIcon icon={faUsers} className="h-6 w-6 text-white" />,
      title: "Partnership",
      description: "We work alongside you as a collaborative partner, not just a service provider",
      bgColor: "bg-pink-500"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="mb-4 inline-block bg-purple-100 px-3 py-1 rounded-full">
              <span className="text-purple-700 font-medium">Why Choose Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-newtheme-purple mb-6">
              Why Choose IQBusiness?
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              We're more than just consultants, we're your partners in growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                bgColor={feature.bgColor}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
