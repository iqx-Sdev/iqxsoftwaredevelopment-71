import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
interface OfferItem {
  title: string;
  description: string;
  buttonText: string;
}
interface WhyChooseSectionProps {
  offerItems: OfferItem[];
}
const WhyChooseSection = ({
  offerItems
}: WhyChooseSectionProps) => {
  return <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="mb-4 inline-block bg-purple-100 px-3 py-1 rounded-full">
              <span className="text-purple-700 font-medium">Why Choose Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-newtheme-purple mb-6">Why Choose IQX for Shopify Design?</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              In today's competitive market, a beautifully designed website is only part of the equation. 
              Our data-driven design philosophy sets your brand apart from the rest.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerItems.slice(0, 6).map((item, index) => <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-newtheme-purple mb-4">{item.title}</h3>
                <p className="text-gray-600 mb-6">{item.description}</p>
                
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default WhyChooseSection;