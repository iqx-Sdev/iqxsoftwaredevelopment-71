
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const MoreFromSection = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">
          More From IQX
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold mb-3 text-gray-800">Product Discovery & Strategy</h4>
            <p className="text-gray-700">
              We collaborate with you to shape your product vision, define user needs, and build a clear roadmap—turning ideas into validated plans that guide development with purpose.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold mb-3 text-gray-800">UX/UI Design Excellence</h4>
            <p className="text-gray-700">
              Our designers work hand-in-hand with developers to craft seamless, user-friendly interfaces—grounded in research, driven by design thinking, and focused on delivering real impact.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold mb-3 text-gray-800">System Architecture & Integration</h4>
            <p className="text-gray-700">
              From robust backend systems to smart API connections, we design scalable, secure platforms that integrate effortlessly with your existing ecosystem.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold mb-3 text-gray-800">Cloud Infrastructure & Migrations</h4>
            <p className="text-gray-700">
              We architect and migrate web applications to modern cloud environments—improving performance, scalability, and security while reducing infrastructure overhead.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold mb-3 text-gray-800">Data & AI Enablement</h4>
            <p className="text-gray-700">
              Unlock the power of your data. From analytics dashboards to AI-driven features, we help you design smarter products by embedding intelligence into your web applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreFromSection;
