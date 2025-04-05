
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, ShoppingCart, Workflow, Robot, Users, MessagesSquare } from "lucide-react";
import { Link } from "react-router-dom";

const ServiceCard = ({ 
  title, 
  description, 
  icon,
  gradientFrom, 
  gradientTo, 
  linkTo 
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradientFrom: string;
  gradientTo: string;
  linkTo: string;
}) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all h-full">
    <div className={`h-32 relative bg-gradient-to-r from-${gradientFrom} to-${gradientTo} flex items-center justify-center`}>
      <div className="text-white">{icon}</div>
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
      icon: <Workflow size={48} strokeWidth={1.5} />,
      gradientFrom: "purple-500",
      gradientTo: "blue-600",
      linkTo: "/power-apps"
    },
    {
      title: "Agentic AI",
      description: "Harness the power of autonomous AI agents that understand, decide, and act on your business needs with minimal human supervision.",
      icon: <Robot size={48} strokeWidth={1.5} />,
      gradientFrom: "blue-500",
      gradientTo: "cyan-500",
      linkTo: "/agentic-ai"
    },
    {
      title: "Agile Development Teams",
      description: "High-performance, cross-functional squads built to ship your digital product faster and with greater quality.",
      icon: <Users size={48} strokeWidth={1.5} />,
      gradientFrom: "green-500",
      gradientTo: "emerald-600",
      linkTo: "/agile-teams"
    },
    {
      title: "Web & App Development",
      description: "Custom-built cross-platform apps powered by Flutter, React Native, and flexible content architecture.",
      icon: <Code size={48} strokeWidth={1.5} />,
      gradientFrom: "indigo-500",
      gradientTo: "purple-600",
      linkTo: "/web-apps"
    },
    {
      title: "Shopify Website Design",
      description: "Exceptional Shopify experiences engineered for performance and built for growth with brand-first store design.",
      icon: <ShoppingCart size={48} strokeWidth={1.5} />,
      gradientFrom: "pink-500",
      gradientTo: "rose-600",
      linkTo: "/shopify"
    },
    {
      title: "AI Chat Solutions",
      description: "Advanced conversational AI interfaces that enhance customer engagement and streamline support.",
      icon: <MessagesSquare size={48} strokeWidth={1.5} />,
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
              icon={service.icon}
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
