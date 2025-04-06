
import React from "react";
import LeadForm from "@/components/LeadForm";
import { Check } from "lucide-react";

const benefitsList = [
  {
    icon: "⚡",
    title: "Speed to Scale",
    description: "Skip the search. We've already vetted the right people, ready to go."
  },
  {
    icon: "💸",
    title: "Zero Upfront Fees",
    description: "No recruitment or setup costs. You only start paying after the first 30 days."
  },
  {
    icon: "📈",
    title: "Flexible Engagements",
    description: "Scale up or down as needed. Our contracts flex with your business."
  },
  {
    icon: "🔄",
    title: "Seamless Integration",
    description: "Our talent plugs into your tools, processes, and culture—like they've always been there."
  },
  {
    icon: "✅",
    title: "Proven Professionals",
    description: "Every team member is tested, vetted, and proven in real-world delivery—no guesswork."
  },
  {
    icon: "🛠️",
    title: "We Handle the Admin",
    description: "From sick leave to underperformance, we take full responsibility and manage replacements if needed."
  }
];

const ContactFormSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Why IQX Talent-as-a-Service Works
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            Get in touch today to discover how our agile teams can accelerate your business
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefitsList.map((benefit, index) => (
                <div key={index} className="bg-white p-5 rounded-lg shadow-sm">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">{benefit.icon}</span>
                    <h4 className="text-lg font-semibold text-gray-800">{benefit.title}</h4>
                  </div>
                  <p className="text-gray-700">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <LeadForm 
              title="Get Your Free Agile Team Consultation" 
              subtitle="Fill out the form below and one of our team staffing experts will get back to you within 24 hours."
              serviceName="agile team staffing services"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
