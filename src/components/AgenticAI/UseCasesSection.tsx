
import React from "react";
import { Bot, BarChart, Settings, Book } from "lucide-react";

// Real-world use cases
const useCases = [
  {
    icon: <Bot className="mr-2 h-5 w-5 text-purple-600" />,
    title: "Customer Support Agents",
    description: "AI agents that solve issues, escalate when needed, and continuously learn."
  },
  {
    icon: <BarChart className="mr-2 h-5 w-5 text-purple-600" />,
    title: "Automated Procurement",
    description: "Agents that identify the right suppliers, compare pricing, and place orders seamlessly."
  },
  {
    icon: <Settings className="mr-2 h-5 w-5 text-purple-600" />,
    title: "Operational Planning",
    description: "Systems that forecast demand, adjust plans, and optimize resource allocation in real time."
  },
  {
    icon: <Book className="mr-2 h-5 w-5 text-purple-600" />,
    title: "Knowledge Management",
    description: "Intelligent agents that search, summarize, and deliver insights from large data stores."
  }
];

const UseCasesSection = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="mb-4 inline-block bg-purple-100 px-3 py-1 rounded-full">
              <span className="text-purple-700 font-medium">In Practice</span>
            </div>
            <h2 className="text-3xl font-bold text-center text-newtheme-purple mb-6">
              Real-World Use Cases
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-2 flex items-center">
                  {useCase.icon}
                  {useCase.title}
                </h3>
                <p className="text-gray-600">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCasesSection;
