
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface OfferItem {
  title: string;
  description: string;
  buttonText: string;
  featured?: boolean;
}

interface WhyChooseSectionProps {
  whatWeOffer: OfferItem[];
}

const WhyChooseSection: React.FC<WhyChooseSectionProps> = ({ whatWeOffer }) => {
  // Memoize the cards to prevent unnecessary re-renders
  const offerCards = React.useMemo(() => whatWeOffer.slice(0, 6).map((item, index) => (
    <Card 
      key={index} 
      className={`shadow-lg border ${item.featured ? 'border-pink-300 bg-gradient-to-br from-white to-pink-50' : 'border-gray-100'} hover:shadow-xl transition-all`}
    >
      <CardHeader>
        <CardTitle>
          {item.title}
          {item.featured && (
            <span className="ml-2 inline-block bg-pink-100 text-xs text-pink-700 px-2 py-1 rounded-full">
              Featured
            </span>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className={`${item.featured ? 'text-gray-700' : 'text-gray-600'} mb-6`}>{item.description}</p>
        <Button className="bg-white hover:bg-gray-100 text-newtheme-purple rounded-lg">
          {item.buttonText}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  )), [whatWeOffer]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="mb-4 inline-block bg-purple-100 px-3 py-1 rounded-full">
              <span className="text-purple-700 font-medium">Why Choose Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-newtheme-purple mb-6">Why Choose IQX for Web App Development?</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Looking for a Bespoke App Experience? Our data-driven Flutter and React Native development philosophy sets your brand apart from the rest.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerCards}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
