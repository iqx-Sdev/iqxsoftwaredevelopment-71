
import { Check } from "lucide-react";
import ShopifyLeadForm from "@/components/ShopifyLeadForm";

interface LeadFormSectionProminentProps {
  benefits: string[];
}

const LeadFormSectionProminent = ({ benefits }: LeadFormSectionProminentProps) => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 flex flex-col justify-center">
            <div className="mb-8">
              <span className="inline-block px-3 py-1 rounded-full bg-pink-100 text-pink-800 font-semibold text-sm mb-4">Ready to Start?</span>
              <h2 className="text-3xl font-bold text-newtheme-purple mb-6">Transform Your Online Store Today</h2>
              <p className="text-lg text-gray-600 mb-6">
                Fill out our consultation form and get personalized recommendations for your Shopify store from our expert team.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full p-1">
                      <Check className="h-5 w-5 text-green-600" />
                    </div>
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <ShopifyLeadForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadFormSectionProminent;
