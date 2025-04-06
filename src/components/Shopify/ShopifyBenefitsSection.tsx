
interface ShopifyBenefit {
  title: string;
  description: string;
}

interface ShopifyBenefitsSectionProps {
  shopifyBenefits: ShopifyBenefit[];
}

const ShopifyBenefitsSection = ({ shopifyBenefits }: ShopifyBenefitsSectionProps) => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 to-newtheme-purple text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="mb-4 inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
              <span className="text-white font-medium">Platform Benefits</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Shopify is the Superior Platform</h2>
            <p className="text-xl opacity-80 max-w-3xl mx-auto">10 Reasons Shopify Stands Out:</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {shopifyBenefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <div className="bg-gradient-to-r from-pink-500 to-blue-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold shrink-0">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopifyBenefitsSection;
