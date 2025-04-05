
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const DeliveryProcessSection = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">
          Our Agile Delivery Process
        </h2>
        <p className="text-xl font-semibold text-center mb-12 text-gray-700">
          From Sprint Zero to Shipping Fast
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="relative">
            <div className="bg-purple-100 p-6 rounded-lg">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-700 text-white rounded-full text-xl font-bold mb-4">1</div>
              <h4 className="text-xl font-semibold mb-3 text-gray-800">
                <span className="text-2xl mr-2">🧠</span> Discovery & Planning
              </h4>
              <p className="text-gray-700">
                We align on goals, scope, tech stack, and ideal team shape—building a roadmap that de-risks delivery.
              </p>
            </div>
            <div className="hidden lg:block absolute top-1/2 left-full w-8 h-1 bg-purple-300 -translate-y-1/2"></div>
          </div>
          
          <div className="relative">
            <div className="bg-purple-100 p-6 rounded-lg">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-700 text-white rounded-full text-xl font-bold mb-4">2</div>
              <h4 className="text-xl font-semibold mb-3 text-gray-800">
                <span className="text-2xl mr-2">🧩</span> Sprint Setup & Kickoff
              </h4>
              <p className="text-gray-700">
                Initial architecture, toolchain setup, backlog creation, and team onboarding. You're up and running in weeks, not months.
              </p>
            </div>
            <div className="hidden lg:block absolute top-1/2 left-full w-8 h-1 bg-purple-300 -translate-y-1/2"></div>
          </div>
          
          <div className="relative">
            <div className="bg-purple-100 p-6 rounded-lg">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-700 text-white rounded-full text-xl font-bold mb-4">3</div>
              <h4 className="text-xl font-semibold mb-3 text-gray-800">
                <span className="text-2xl mr-2">🎨</span> Design + Dev Collaboration
              </h4>
              <p className="text-gray-700">
                Design, development, and QA in lockstep—rapid iteration and real-time communication through your preferred tools.
              </p>
            </div>
            <div className="hidden lg:block absolute top-1/2 left-full w-8 h-1 bg-purple-300 -translate-y-1/2"></div>
          </div>
          
          <div>
            <div className="bg-purple-100 p-6 rounded-lg">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-700 text-white rounded-full text-xl font-bold mb-4">4</div>
              <h4 className="text-xl font-semibold mb-3 text-gray-800">
                <span className="text-2xl mr-2">🚀</span> Launch, Learn, Improve
              </h4>
              <p className="text-gray-700">
                We test, measure, and optimize throughout. Your team scales as needed, and pivots quickly as priorities evolve.
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-10">
          <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white">
            Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DeliveryProcessSection;
