
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useContactModal } from "@/hooks/useContactModal";

const MoreFromSection = () => {
  const { openContactModal } = useContactModal();

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">
          More From IQX
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold mb-3 text-gray-800">Product Strategy & Roadmapping</h4>
            <p className="text-gray-700">
              We help define your product vision and translate it into sprints that deliver value early and often.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold mb-3 text-gray-800">UX/UI Design</h4>
            <p className="text-gray-700">
              Embedded designers who work directly with developers—ensuring cohesive, intuitive experiences.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold mb-3 text-gray-800">API Integration & Platform Engineering</h4>
            <p className="text-gray-700">
              Our teams connect your systems and services, building scalable, secure backend infrastructure.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold mb-3 text-gray-800">Ongoing Retainers</h4>
            <p className="text-gray-700">
              Whether you need long-term team support or post-launch evolution—we've got you covered.
            </p>
          </div>
        </div>
        
        <div className="flex justify-center mt-10">
          <Button 
            variant="outline" 
            className="border-purple-700 text-purple-700 hover:bg-purple-100"
            onClick={openContactModal.forConsultation}
          >
            Explore All Services <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MoreFromSection;
