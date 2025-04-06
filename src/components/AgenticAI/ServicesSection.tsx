
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Workflow, Code } from "lucide-react";

const ServicesSection = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="mb-4 inline-block bg-blue-100 px-3 py-1 rounded-full">
              <span className="text-blue-700 font-medium">Our Services</span>
            </div>
            <h2 className="text-3xl font-bold text-center text-newtheme-purple mb-6">
              What We Offer
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              End-to-end AI solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-lg border border-gray-100">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bot className="mr-2 h-5 w-5 text-purple-600" />
                  AI Agent Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We build intelligent, goal-driven agents that operate autonomously, continuously learning and adapting to dynamic environments. Ideal for enhancing customer service, streamlining internal operations, or optimizing procurement processes.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-lg border border-gray-100">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Workflow className="mr-2 h-5 w-5 text-purple-600" />
                  AI Workflows
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Streamline your operations with smart workflows that combine rule-based logic and real-time, ML-driven decisions. Our AI workflows enhance efficiency, reveal actionable insights, and reduce overhead across your organization.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-lg border border-gray-100">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Code className="mr-2 h-5 w-5 text-purple-600" />
                  Simple Automations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  For quick wins, we develop lightweight automation systems that eliminate repetitive tasks. These integrations are cost-effective, easy to deploy, and scalable across all business sizes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
