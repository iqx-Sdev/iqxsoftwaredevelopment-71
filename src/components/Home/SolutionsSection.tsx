
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Briefcase, Code, BarChart3, Users } from "lucide-react";

const solutions = [
  {
    icon: <Briefcase className="h-12 w-12 text-newtheme-purple" />,
    title: "Management Consulting",
    description: "Our strategic advisory services help you navigate change, optimize operations and drive growth.",
    link: "#"
  },
  {
    icon: <Code className="h-12 w-12 text-newtheme-purple" />,
    title: "Technology Solutions",
    description: "Leverage cutting-edge digital technologies to transform your business and stay ahead.",
    link: "#"
  },
  {
    icon: <BarChart3 className="h-12 w-12 text-newtheme-purple" />,
    title: "Data & Analytics",
    description: "Turn data into actionable insights with our comprehensive analytics solutions.",
    link: "#"
  },
  {
    icon: <Users className="h-12 w-12 text-newtheme-purple" />,
    title: "People Solutions",
    description: "Build high-performance teams and optimize your organization's human capital.",
    link: "#"
  }
];

const SolutionsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="mb-4 inline-block bg-purple-100 px-3 py-1 rounded-full">
              <span className="text-purple-700 font-medium">Our Solutions</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-newtheme-purple mb-6">Tailored Business Solutions</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We offer comprehensive services designed to drive growth, efficiency and innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="shadow-lg border border-gray-100 hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="mb-4">{solution.icon}</div>
                  <CardTitle className="text-xl">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-6">
                    {solution.description}
                  </CardDescription>
                  <a href={solution.link} className="text-pink-500 hover:text-pink-600 flex items-center">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
