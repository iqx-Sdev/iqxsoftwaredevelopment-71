import { Check } from "lucide-react";
import LeadForm from "@/components/LeadForm";
const leadFormBenefits = ["Get matched with technical experts in 24-48 hours", "We manage all contracts, payroll, and compliance", "Flexible team scaling based on your roadmap", "No recruitment fees or long-term commitments"];
const LeadFormSection = () => {
  return <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 flex flex-col justify-center">
            <div className="space-y-4">
                {leadFormBenefits.map((benefit, index) => <div key={index} className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full p-1">
                      <Check className="h-5 w-5 text-green-600" />
                    </div>
                    <p className="text-gray-700">{benefit}</p>
                  </div>)}
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
