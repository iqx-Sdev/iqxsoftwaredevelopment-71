
import LeadForm from "./LeadForm";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";

const AILeadForm = () => {
  return (
    <div>
      <LeadForm 
        title="Get Your Free AI Consultation"
        subtitle="Fill out the form below and one of our AI experts will get back to you within 24 hours."
        serviceName="Agentic AI services"
      />
      <div className="mt-4 flex justify-center">
        <Link 
          to="/book-consultation" 
          className="flex items-center text-newtheme-purple hover:underline"
        >
          <Calendar className="h-4 w-4 mr-2" />
          <span>Or book a consultation directly through our calendar</span>
        </Link>
      </div>
    </div>
  );
};

export default AILeadForm;
