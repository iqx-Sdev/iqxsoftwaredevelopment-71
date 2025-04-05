
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ServiceCard = ({ 
  title, 
  description, 
  imageSrc, 
  gradientFrom, 
  gradientTo, 
  linkTo 
}: {
  title: string;
  description: string;
  imageSrc: string;
  gradientFrom: string;
  gradientTo: string;
  linkTo: string;
}) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all">
    <div className="h-48 relative">
      <img 
        src={imageSrc} 
        alt={title} 
        className="w-full h-full object-cover"
      />
      <div className={`absolute inset-0 bg-gradient-to-r from-${gradientFrom}/40 to-${gradientTo}/40 mix-blend-multiply`}></div>
    </div>
    <div className="p-6">
      <h3 className="text-2xl font-bold text-newtheme-purple mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">
        {description}
      </p>
      <Link to={linkTo}>
        <Button className="w-full bg-newtheme-purple hover:bg-newtheme-purple/90">
          {`Explore ${title}`}
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </Link>
    </div>
  </div>
);

const CoreServicesSection = () => {
  const services = [
    {
      title: "Microsoft Power Apps",
      description: "Transform outdated processes into efficient, customized digital experiences. Automate what matters and empower what's next.",
      imageSrc: "/lovable-uploads/c6f6534a-9f95-42c7-97d1-69f4442bc917.png",
      gradientFrom: "purple-500",
      gradientTo: "blue-600",
      linkTo: "/power-apps"
    },
    {
      title: "Agentic AI",
      description: "Harness the power of autonomous AI agents that understand, decide, and act on your business needs with minimal human supervision.",
      imageSrc: "/lovable-uploads/9f35ae55-312d-4ec6-93e2-4b68924a4037.png",
      gradientFrom: "blue-500",
      gradientTo: "cyan-500",
      linkTo: "/agentic-ai"
    },
    {
      title: "Agile Development Teams",
      description: "High-performance, cross-functional squads built to ship your digital product faster and with greater quality.",
      imageSrc: "/lovable-uploads/71017797-223d-4dc7-ac2e-7dc6883755c8.png",
      gradientFrom: "green-500",
      gradientTo: "emerald-600",
      linkTo: "/agile-teams"
    },
    {
      title: "Web & App Development",
      description: "Custom-built cross-platform apps powered by Flutter, React Native, and flexible content architecture.",
      imageSrc: "/lovable-uploads/11746b3e-8d9f-4102-9a07-c9f1be35fd9b.png",
      gradientFrom: "indigo-500",
      gradientTo: "purple-600",
      linkTo: "/web-apps"
    },
    {
      title: "Shopify Website Design",
      description: "Exceptional Shopify experiences engineered for performance and built for growth with brand-first store design.",
      imageSrc: "/lovable-uploads/5bbd9e64-af22-4b2d-b12a-53a195d0201c.png",
      gradientFrom: "pink-500",
      gradientTo: "rose-600",
      linkTo: "/shopify"
    },
    {
      title: "AI Chat Solutions",
      description: "Advanced conversational AI interfaces that enhance customer engagement and streamline support.",
      imageSrc: "/lovable-uploads/41b419da-57e6-4dce-bd8f-b8f3acffa74a.png",
      gradientFrom: "blue-500",
      gradientTo: "sky-600",
      linkTo: "/ai-chat"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="mb-4 inline-block bg-blue-100 px-3 py-1 rounded-full">
            <span className="text-blue-700 font-medium">Our Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-newtheme-purple mb-6">
            Specialized Solutions
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Explore our specialized service offerings designed to transform your business
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard 
              key={service.title}
              title={service.title}
              description={service.description}
              imageSrc={service.imageSrc}
              gradientFrom={service.gradientFrom}
              gradientTo={service.gradientTo}
              linkTo={service.linkTo}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link to="/contact">
            <Button className="bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white px-8 py-6 text-lg rounded-lg">
              Get In Touch With Our Experts
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CoreServicesSection;
