
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Blocks, BarChart, Book } from "lucide-react";

const ProcessSection = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="mb-4 inline-block bg-green-100 px-3 py-1 rounded-full">
              <span className="text-green-700 font-medium">Our Process</span>
            </div>
            <h2 className="text-3xl font-bold text-center text-newtheme-purple mb-6">
              From Idea to Impact
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-lg border border-gray-100">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Blocks className="mr-2 h-5 w-5 text-purple-600" />
                  High-Speed Prototyping
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Validate your concepts with working Agentic AI prototypes delivered in 2–8 weeks. Our rapid approach ensures you test ideas faster and more affordably than in-house alternatives.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-lg border border-gray-100">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart className="mr-2 h-5 w-5 text-purple-600" />
                  Built for Scale
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our solutions grow with your business. From initial pilot projects to full-scale production, we provide robust architecture, engineering support, and operational excellence.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-lg border border-gray-100">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Book className="mr-2 h-5 w-5 text-purple-600" />
                  AI Advisory
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Navigating AI transformation can be complex. We guide you through strategy, integration, and scaling — ensuring your vision aligns with ethical practices and measurable outcomes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;
