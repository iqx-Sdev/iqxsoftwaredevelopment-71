
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhyLeasingSection = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">
          Why Leasing Talent Is Smart
        </h2>
        <p className="text-lg text-center mb-12 max-w-3xl mx-auto text-gray-700">
          The IQX model gives you speed, flexibility, and peace of mind.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-3">⚡</span>
              <h4 className="text-xl font-semibold text-gray-800">Find Talent Fast</h4>
            </div>
            <p className="text-gray-700">
              We already have the perfect person in our pool of proven techies, ready to plug in and deliver from day one.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-3">💸</span>
              <h4 className="text-xl font-semibold text-gray-800">No Recruitment Fees</h4>
            </div>
            <p className="text-gray-700">
              You won't pay anything upfront. Your first bill only arrives after 30 days of delivery.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-3">📈</span>
              <h4 className="text-xl font-semibold text-gray-800">Flexible Contracts</h4>
            </div>
            <p className="text-gray-700">
              Scale up, down, or sideways—our agile contracts let you move as your product demands change.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-3">🔄</span>
              <h4 className="text-xl font-semibold text-gray-800">We Plug Into Your Process</h4>
            </div>
            <p className="text-gray-700">
              Each team member or Maven integrates directly into your systems, processes, and company culture.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-3">✅</span>
              <h4 className="text-xl font-semibold text-gray-800">Vetted and Tested</h4>
            </div>
            <p className="text-gray-700">
              Every IQX Maven is carefully screened, technically tested, and selected based on real capability—not just a resume.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-3">🛠️</span>
              <h4 className="text-xl font-semibold text-gray-800">Our Person, Our Problem</h4>
            </div>
            <p className="text-gray-700">
              From performance to sick leave, we handle all HR issues. Need a replacement? We'll do it fast and at no cost.
            </p>
          </div>
        </div>
        
        <div className="flex justify-center mt-10">
          <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white">
            Talk to a Talent Advisor <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WhyLeasingSection;
