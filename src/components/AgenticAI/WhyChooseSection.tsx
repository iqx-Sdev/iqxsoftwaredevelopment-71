
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Settings, Brain } from "lucide-react";

const WhyChooseSection = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="mb-4 inline-block bg-purple-100 px-3 py-1 rounded-full">
              <span className="text-purple-700 font-medium">Why Choose Agentic AI?</span>
            </div>
            <h2 className="text-3xl font-bold text-newtheme-purple mb-6">
              The IQX Advantage
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-lg border border-gray-100">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart className="mr-2 h-5 w-5 text-purple-600" />
                  Competitive Advantage
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Stand out with bespoke AI-driven systems tailored to your business model. Intelligent agents automate complex tasks, drive innovation, and differentiate your offering in the market.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-lg border border-gray-100">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Settings className="mr-2 h-5 w-5 text-purple-600" />
                  Extreme Efficiency
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Agentic AI handles complex workflows and decisions instantly — whether assisting customers, sourcing vendors, or coordinating logistics. This means your teams can focus on high-value work while our agents take care of the rest.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-lg border border-gray-100">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Brain className="mr-2 h-5 w-5 text-purple-600" />
                  Personalisation at Scale
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Deliver curated, context-aware customer experiences powered by multimodal AI. Whether it's for personalized service, product recommendations, or streamlined operations, your business scales without sacrificing a personal touch.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSection;
