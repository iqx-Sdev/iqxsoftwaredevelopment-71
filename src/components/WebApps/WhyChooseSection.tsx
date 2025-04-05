
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const whatWeOffer = [
  {
    title: "Bespoke App Design",
    description: "Custom UX/UI designed for your audience and brand—fully integrated with a headless CMS for ultimate flexibility.",
    buttonText: "Learn More"
  },
  {
    title: "Flutter & React Native Development",
    description: "Cross-platform apps with native performance and future-ready architecture. Easily connected to CMSs like Strapi and Umbraco via REST or GraphQL APIs.",
    buttonText: "Discover How"
  },
  {
    title: "UX + UI That Converts",
    description: "Crafted journeys that reduce friction and amplify engagement—supported by CMS-driven personalization.",
    buttonText: "See Our Process"
  },
  {
    title: "MVP to Full Scale",
    description: "Start lean, scale fast. We design flexible foundations with Flutter or React Native, with CMS support to grow and iterate at speed.",
    buttonText: "Start Your Build"
  },
  {
    title: "App Redesigns & Rebuilds",
    description: "Modernize legacy apps with Flutter or React Native, modular design, and content systems that empower your team.",
    buttonText: "Let's Reimagine It"
  }
];

const WhyChooseSection = () => {
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
            {whatWeOffer.slice(0, 6).map((item, index) => (
              <Card key={index} className="shadow-lg border border-gray-100 hover:shadow-xl transition-all">
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{item.description}</p>
                  <Button variant="link" className="text-pink-500 hover:text-pink-600 p-0">
                    {item.buttonText}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
