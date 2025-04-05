
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight, Code, Workflow, Bot, Settings, Book, Blocks, Brain, Shield, BarChart } from "lucide-react";
import AILeadForm from "@/components/AILeadForm";

const AgenticAI = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        {/* Hero Section */}
        <div className="py-20 bg-gradient-to-br from-newtheme-purple to-blue-600">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full mb-5">
                <span className="text-white font-medium">Advanced AI Solutions</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Agentic AI Development
              </h1>
              <p className="text-xl text-white/80 mb-8">
                Unlock next-generation automation and operational intelligence with Agentic AI. IQX builds intelligent, autonomous systems that think, plan, and act — transforming your business processes with speed, precision, and impact.
              </p>
              <Button className="bg-white hover:bg-gray-100 text-newtheme-purple px-8 py-6 rounded-lg text-lg">
                Book a Discovery Session <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Section - similar to AI Chat page */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-newtheme-purple mb-6">
                  Real Business Impact
                </h2>
                <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                  Delivering tangible results through intelligent automation:
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <div className="flex items-center gap-4 mb-4">
                    <Check className="h-6 w-6 text-green-500" />
                    <span className="font-bold text-2xl text-newtheme-purple">75%</span>
                  </div>
                  <p className="text-gray-600">Reduction in operational costs through AI automation</p>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <div className="flex items-center gap-4 mb-4">
                    <Check className="h-6 w-6 text-green-500" />
                    <span className="font-bold text-2xl text-newtheme-purple">3.5x</span>
                  </div>
                  <p className="text-gray-600">Increase in employee productivity with AI assistants</p>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <div className="flex items-center gap-4 mb-4">
                    <Check className="h-6 w-6 text-green-500" />
                    <span className="font-bold text-2xl text-newtheme-purple">92%</span>
                  </div>
                  <p className="text-gray-600">Customer satisfaction with AI-augmented support</p>
                </div>
              </div>
              
              <p className="text-center mt-10 text-lg text-gray-600">
                Transform your business with AI solutions that deliver measurable ROI.
              </p>
            </div>
          </div>
        </section>

        {/* Lead Form Section - Enhanced to match Shopify page */}
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              <div className="lg:col-span-2 flex flex-col justify-center">
                <div className="mb-8">
                  <span className="inline-block px-3 py-1 rounded-full bg-pink-100 text-pink-800 font-semibold text-sm mb-4">Ready to Start?</span>
                  <h2 className="text-3xl font-bold text-newtheme-purple mb-6">Transform Your Business with AI Today</h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Fill out our consultation form and get personalized AI recommendations for your business from our expert team.
                  </p>
                  
                  <div className="space-y-4">
                    {leadFormBenefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="bg-green-100 rounded-full p-1">
                          <Check className="h-5 w-5 text-green-600" />
                        </div>
                        <p className="text-gray-700">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-3">
                <AILeadForm />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
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

        {/* Our Services */}
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

        {/* From Idea to Impact */}
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

        {/* Our Approach */}
        <div className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <div className="mb-4 inline-block bg-yellow-100 px-3 py-1 rounded-full">
                  <span className="text-yellow-700 font-medium">Our Methodology</span>
                </div>
                <h2 className="text-3xl font-bold text-center text-newtheme-purple mb-6">
                  Our Approach
                </h2>
              </div>
              <div className="max-w-3xl mx-auto">
                <ul className="space-y-4">
                  {approach.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-lg">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Real-World Use Cases */}
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

        {/* CTA Section */}
        <div className="py-20 bg-gradient-to-br from-newtheme-purple to-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to build the future of your business with Agentic AI?
              </h2>
              <p className="text-xl opacity-80 mb-8">
                Let's explore how intelligent agents can accelerate your growth, boost efficiency, and drive strategic advantage.
              </p>
              <Button className="bg-white hover:bg-gray-100 text-newtheme-purple px-8 py-6 rounded-lg text-lg">
                Schedule a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

// Lead form benefits list
const leadFormBenefits = [
  "Free no-obligation consultation",
  "Expert AI strategy and implementation advice",
  "Custom solution for your business challenges",
  "Response within 24 hours",
];

// Our approach items
const approach = [
  {
    title: "Define Clear AI Objectives",
    description: "Align every use case with measurable business outcomes."
  },
  {
    title: "Assess Readiness",
    description: "We evaluate your data, technology, and team capabilities to ensure a solid foundation."
  },
  {
    title: "Start with High-Impact Use Cases",
    description: "Target projects that deliver quick wins and showcase immediate value."
  },
  {
    title: "Ensure Ethical AI",
    description: "Build systems that are transparent, compliant, and human-centric."
  },
  {
    title: "Scale & Optimise",
    description: "Continuously refine and expand AI initiatives for sustained performance and growth."
  }
];

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

export default AgenticAI;
