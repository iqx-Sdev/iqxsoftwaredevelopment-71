import { Check } from "lucide-react";
import LeadForm from "@/components/LeadForm";
const leadFormBenefits = ["Get matched with technical experts in 24-48 hours", "We manage all contracts, payroll, and compliance", "Flexible team scaling based on your roadmap", "No recruitment fees or long-term commitments"];
const LeadFormSection = () => {
  return <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 flex flex-col justify-center">
            <div className="mb-8">
              <span className="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-800 font-semibold text-sm mb-4">Get Started Now</span>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Why IQX Talent-as-a-Service Works</h2>
              <p className="text-lg text-gray-600 mb-6">
                Fill out our team staffing form and get custom recommendations for your project from our experts.
              </p>
              
              <div className="space-y-4">
                {leadFormBenefits.map((benefit, index) => <div key={index} className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full p-1">
                      <Check className="h-5 w-5 text-green-600" />
                    </div>
                    <p className="text-gray-700">{benefit}</p>
                  </div>)}
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <LeadForm title="Get Your Free Agile Team Consultation" subtitle="Fill out the form below and one of our team staffing experts will get back to you within 24 hours." serviceName="agile team staffing services" />
          </div>
        </div>
      </div>
    </div>;
};
export default LeadFormSection;