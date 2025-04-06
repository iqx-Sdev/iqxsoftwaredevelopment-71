
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const WhyLeasingSection = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">
          Why IQX Talent-as-a-Service Works
        </h2>
        <p className="text-lg text-center mb-12 max-w-3xl mx-auto text-gray-700">
          The IQX model gives you speed, flexibility, and peace of mind.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-3">⚡</span>
              <h4 className="text-xl font-semibold text-gray-800">Speed to Scale</h4>
            </div>
            <p className="text-gray-700">
              Skip the search. We've already vetted the right people, ready to go.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-3">💸</span>
              <h4 className="text-xl font-semibold text-gray-800">Zero Upfront Fees</h4>
            </div>
            <p className="text-gray-700">
              No recruitment or setup costs. You only start paying after the first 30 days.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-3">📈</span>
              <h4 className="text-xl font-semibold text-gray-800">Flexible Engagements</h4>
            </div>
            <p className="text-gray-700">
              Scale up or down as needed. Our contracts flex with your business.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-3">🔄</span>
              <h4 className="text-xl font-semibold text-gray-800">Seamless Integration</h4>
            </div>
            <p className="text-gray-700">
              Our talent plugs into your tools, processes, and culture—like they've always been there.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-3">✅</span>
              <h4 className="text-xl font-semibold text-gray-800">Proven Professionals</h4>
            </div>
            <p className="text-gray-700">
              Every team member is tested, vetted, and proven in real-world delivery—no guesswork.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-3">🛠️</span>
              <h4 className="text-xl font-semibold text-gray-800">We Handle the Admin</h4>
            </div>
            <p className="text-gray-700">
              From sick leave to underperformance, we take full responsibility and manage replacements if needed.
            </p>
          </div>
        </div>
        
        <div className="flex justify-center mt-10">
          <Link to="/book-consultation">
            <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-medium">
              Book a Consultation <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhyLeasingSection;
