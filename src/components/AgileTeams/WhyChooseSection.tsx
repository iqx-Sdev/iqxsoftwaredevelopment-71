
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const WhyChooseSection = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">
          Why Choose IQX for Agile Teams?
        </h2>
        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-gray-700">Need a Dedicated Team That Feels In-House?</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-4">🔍</span>
              <h4 className="text-xl font-semibold text-gray-800">Strategic UX + Dev from Day One</h4>
            </div>
            <p className="text-gray-700">
              We don't just start coding. Our teams begin with product thinking—working with you on discovery, user flows, and a design-led approach to development.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-4">⚙️</span>
              <h4 className="text-xl font-semibold text-gray-800">Built for Speed and Scale</h4>
            </div>
            <p className="text-gray-700">
              From MVPs to global platforms, our delivery frameworks and CI/CD pipelines ensure fast iterations, real-time tracking, and scalable codebases.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-4">👥</span>
              <h4 className="text-xl font-semibold text-gray-800">A Fully Embedded Team</h4>
            </div>
            <p className="text-gray-700">
              Our squads include engineers, designers, QA, DevOps, and technical leads—all 100% focused on your mission. No freelancers. No fragmentation.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-4">🌍</span>
              <h4 className="text-xl font-semibold text-gray-800">Timezone-Aligned, Globally Capable</h4>
            </div>
            <p className="text-gray-700">
              With a strong talent base across Africa, our teams align with your working hours, ensuring seamless collaboration with Europe and North America.
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <Link to="/book-consultation">
            <Button variant="outline" className="border-purple-700 text-purple-700 hover:bg-purple-100 font-medium">
              Book a Consultation <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSection;
