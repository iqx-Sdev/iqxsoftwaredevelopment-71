
import React from "react";
import { Award, Laptop, CheckCircle, Users } from "lucide-react";

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
  iconColor: string;
};

const FeatureCard = ({ icon, title, description, bgColor, iconColor }: FeatureCardProps) => (
  <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
    <div className={`h-12 w-12 rounded-full ${bgColor} flex items-center justify-center mb-4`}>
      {icon}
    </div>
    <h3 className="font-bold text-xl mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: <Award className="h-6 w-6 text-newtheme-purple" />,
      title: "Expertise",
      description: "Industry leaders with deep knowledge across key business domains",
      bgColor: "bg-purple-100",
      iconColor: "text-newtheme-purple"
    },
    {
      icon: <Laptop className="h-6 w-6 text-blue-600" />,
      title: "Innovation",
      description: "Cutting-edge solutions leveraging the latest technological advancements",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-green-600" />,
      title: "Results-Driven",
      description: "Focused on delivering measurable outcomes and ROI for your business",
      bgColor: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: <Users className="h-6 w-6 text-pink-600" />,
      title: "Partnership",
      description: "We work alongside you as a collaborative partner, not just a service provider",
      bgColor: "bg-pink-100",
      iconColor: "text-pink-600"
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
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                bgColor={feature.bgColor}
                iconColor={feature.iconColor}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
