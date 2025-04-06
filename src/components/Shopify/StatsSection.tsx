
import { Check } from "lucide-react";

const StatsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-newtheme-purple mb-6">
              Shopify Design Excellence
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Real business impact with professional Shopify design:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <Check className="h-6 w-6 text-green-500" />
                <span className="font-bold text-2xl text-newtheme-purple">58%</span>
              </div>
              <p className="text-gray-600">Average increase in conversion rates</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <Check className="h-6 w-6 text-green-500" />
                <span className="font-bold text-2xl text-newtheme-purple">42%</span>
              </div>
              <p className="text-gray-600">Reduction in cart abandonment</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <Check className="h-6 w-6 text-green-500" />
                <span className="font-bold text-2xl text-newtheme-purple">95%</span>
              </div>
              <p className="text-gray-600">Customer satisfaction rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
