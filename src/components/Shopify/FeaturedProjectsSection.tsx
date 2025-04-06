
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FeaturedProjectsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="mb-4 inline-block bg-blue-100 px-3 py-1 rounded-full">
              <span className="text-blue-700 font-medium">Featured Work</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-newtheme-purple mb-6">Shopify Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              See how we've transformed businesses with our Shopify expertise
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg group">
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src="/lovable-uploads/e8098bea-0128-43dc-9d97-49d4cb60de99.png" 
                    alt="Fashion eyewear store" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6">
                      <span className="text-white/80 text-sm">Fashion & Accessories</span>
                      <h3 className="text-xl font-bold text-white mt-1">FrameVision Eyewear</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">Luxury eyewear brand saw a 75% increase in online conversions after our Shopify redesign.</p>
                  <Button className="bg-white hover:bg-gray-100 text-newtheme-purple rounded-lg">
                    View Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="bg-white rounded-xl overflow-hidden shadow-lg group">
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src="/lovable-uploads/d91346d2-b226-407b-b32f-754cd37a32a0.png" 
                    alt="Health supplements store" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6">
                      <span className="text-white/80 text-sm">Health & Wellness</span>
                      <h3 className="text-xl font-bold text-white mt-1">VitaLife Supplements</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">Health brand achieved 120% revenue growth in 6 months with our custom Shopify Plus solution.</p>
                  <Button className="bg-white hover:bg-gray-100 text-newtheme-purple rounded-lg">
                    View Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;
