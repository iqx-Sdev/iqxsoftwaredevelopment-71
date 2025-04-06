
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Trophy, Users, Clock, CheckCircle, Workflow, Lightbulb, Target } from "lucide-react";

const benefits = [
  {
    icon: <Trophy className="h-12 w-12 text-newtheme-purple" />,
    title: "Proven Track Record",
    description: "Delivered complex, high-impact solutions across diverse industries.",
  },
  {
    icon: <Users className="h-12 w-12 text-newtheme-purple" />,
    title: "Top Talent",
    description: "Senior architects and analysts who reverse-engineer legacy systems and craft forward-thinking solutions.",
  },
  {
    icon: <Clock className="h-12 w-12 text-newtheme-purple" />,
    title: "Agile Delivery",
    description: "Flexible, iterative workflows that meet deadlines and stay on budget.",
  },
  {
    icon: <CheckCircle className="h-12 w-12 text-newtheme-purple" />,
    title: "Relentless Quality",
    description: "Code excellence, rigorous testing, and optimized performance come standard.",
  },
  {
    icon: <Workflow className="h-12 w-12 text-newtheme-purple" />,
    title: "End-to-End Services",
    description: "From consulting and design to integration and ongoing support—we've got it covered.",
  },
  {
    icon: <Lightbulb className="h-12 w-12 text-newtheme-purple" />,
    title: "Innovation-Driven",
    description: "We stay ahead with emerging tech and continuous learning.",
  },
  {
    icon: <Target className="h-12 w-12 text-newtheme-purple" />,
    title: "Client-Focused",
    description: "Custom solutions aligned with your goals, built for long-term success.",
  }
];

const SolutionsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="mb-4 inline-block bg-purple-100 px-3 py-1 rounded-full">
              <span className="text-purple-700 font-medium">Why Choose Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-newtheme-purple mb-6">Why Partner with IQX?</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              At IQX, we believe excellence lies in the details. That's why we invest in understanding your users, 
              exploring creative solutions, and refining every step—so your project not only launches, but thrives. 
              With the right people and a proven approach, we turn big ideas into exceptional results.
            </p>
          </div>
          
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-center mb-8">What Sets Us Apart:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="shadow-md border border-gray-100 hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="mb-3">{benefit.icon}</div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
