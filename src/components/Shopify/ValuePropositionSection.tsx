
import { Button } from "@/components/ui/button";

const ValuePropositionSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-4 inline-block bg-blue-100 px-3 py-1 rounded-full">
                <span className="text-blue-700 font-medium">Our Approach</span>
              </div>
              <h2 className="text-3xl font-bold text-newtheme-purple mb-6">Your Digital Storefront, Perfected</h2>
              <p className="text-gray-600 text-lg mb-8">
                Your website is more than just an online presence—it's a dynamic sales engine. With IQX, you 
                get a conversion-optimized Shopify site that's as visually stunning as it is functionally robust.
              </p>
              <Button className="bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white px-6 py-3 rounded-lg text-lg">
                Get Your Free Consultation
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="/lovable-uploads/4aa2cbcd-56c2-4332-8657-b6c0b0e00108.png"
                  alt="Fashion shopping interface" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl mt-8">
                <img 
                  src="/lovable-uploads/e8098bea-0128-43dc-9d97-49d4cb60de99.png"
                  alt="Sunglasses product page" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;
