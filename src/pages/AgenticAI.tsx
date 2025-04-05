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
        <div className="py-20 bg-gradient-to-br from-newtheme-purple to-newtheme-darkgray">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Agentic AI Development
              </h1>
              <p className="text-xl text-gray-100 mb-6">
                Intelligent agents. Real business outcomes.
              </p>
              <p className="text-lg text-gray-200 mb-8">
                Unlock next-generation automation and operational intelligence with Agentic AI. IQX builds intelligent, autonomous systems that think, plan, and act — transforming your business processes with speed, precision, and impact.
              </p>
              <Button className="bg-white hover:bg-gray-100 text-newtheme-purple px-6 py-3 rounded-lg text-lg">
                Book a Discovery Session <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

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
            <h2 className="text-3xl font-bold text-center text-newtheme-purple mb-12">Why Choose Agentic AI?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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

        {/* Our Services */}
        <div className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-newtheme-purple mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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

        {/* From Idea to Impact */}
        <div className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-newtheme-purple mb-12">From Idea to Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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

        {/* Our Approach */}
        <div className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-newtheme-purple mb-12">Our Approach</h2>
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

        {/* Workflow & Integrations */}
        <div className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-newtheme-purple mb-6">Workflow & Integrations</h2>
            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
              Transform the way you work with intelligent automation, AI workflows, and autonomous agents. At IQX, we specialise in delivering tailored systems across three levels of operational intelligence:
            </p>
            
            <div className="space-y-12 max-w-4xl mx-auto">
              {workflowSteps.map((step, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">{index + 1}</span>
                    {step.title}
                  </h3>
                  <p className="mb-4 text-gray-600">{step.description}</p>
                  <ul className="space-y-2 mb-4">
                    {step.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <p className="text-gray-600">{benefit}</p>
                      </li>
                    ))}
                  </ul>
                  {step.conclusion && <p className="text-gray-600">{step.conclusion}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bespoke AI Services */}
        <div className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-newtheme-purple mb-6">Bespoke AI Services</h2>
            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
              End-to-end support for developing intelligent, enterprise-grade systems. We go beyond out-of-the-box solutions with comprehensive, lifecycle support across custom AI and ML initiatives:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {bespokeServices.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    {service.icon}
                    {service.title}
                  </h3>
                  <p className="mb-4 text-gray-600">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <p className="text-gray-600">{feature}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <p className="text-center text-gray-600 max-w-3xl mx-auto mt-8">
              Our engineering-first approach ensures your AI initiatives transition smoothly from prototype to production with optimal performance and reliability.
            </p>
          </div>
        </div>

        {/* Real-World Use Cases */}
        <div className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-newtheme-purple mb-12">Real-World Use Cases</h2>
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

        {/* Tools & Technologies */}
        <div className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-newtheme-purple mb-6">Tools & Technologies</h2>
            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
              At IQX, we leverage a comprehensive ecosystem of industry-leading platforms and innovative tools to build robust Agentic AI solutions. Our technology partners span the entire AI stack, ensuring that every solution we develop is seamlessly integrated, highly scalable, secure, and compliant.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-lg mb-4">{tech.title}</h3>
                  <p className="text-gray-600">{tech.description}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm max-w-4xl mx-auto mt-8">
              <h3 className="font-semibold text-lg mb-4">Key Considerations</h3>
              <p className="text-gray-600">
                Every tool and platform is selected with a focus on system integration, scalability, security, and compliance, ensuring that your AI investment is both future-proof and reliable.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 bg-gradient-to-r from-purple-600/90 to-blue-600/90 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Build the Future of Your Business with Agentic AI</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Let's explore how intelligent agents can accelerate your growth, boost efficiency, and drive strategic advantage.
            </p>
            <Button className="bg-white text-purple-700 hover:bg-gray-100">
              Book a Discovery Session <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
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

// Workflow steps
const workflowSteps = [
  {
    title: "Simple Automations",
    description: "For fast wins, we develop lightweight solutions that streamline high-frequency, low-value tasks:",
    benefits: [
      "Quick Implementation: Cost-effective and fast to deploy",
      "Scalable: Adaptable across teams and departments",
      "Error Reduction: Minimises manual input and improves operational efficiency"
    ],
    conclusion: "From scheduling and notifications to data transfers and form processing, simple automations set the stage for operational hygiene without the need for a complex rollout."
  },
  {
    title: "AI-Powered Workflows",
    description: "For organisations ready to harness the full potential of AI:",
    benefits: [
      "Data-Driven Decisions: Integrate structured logic with real-time machine learning",
      "Enhanced Efficiency: Improve compliance and operational visibility",
      "Versatile Applications: Suitable for customer onboarding, supply chain coordination, sales enablement, and more"
    ]
  },
  {
    title: "Autonomous AI Agents",
    description: "Our advanced agentic AI systems operate on your behalf:",
    benefits: [
      "Self-Optimising: Goal-driven systems that plan, reason, and adapt in real time",
      "Multimodal Capabilities: Process text, audio, images, and more",
      "Tailored Use Cases: Ideal for support bots, procurement agents, virtual assistants, operational planners, and beyond"
    ]
  }
];

// Bespoke AI services
const bespokeServices = [
  {
    icon: <Shield className="mr-2 h-5 w-5 text-purple-600" />,
    title: "AI/ML Solution Architecture",
    description: "Lay the foundation for robust, scalable AI with:",
    features: [
      "Technical solution design and architecture",
      "Advisory on tools, frameworks, and platforms",
      "Team design and leadership support",
      "Oversight from discovery to go-live"
    ]
  },
  {
    icon: <Brain className="mr-2 h-5 w-5 text-purple-600" />,
    title: "Data/ML Engineering",
    description: "Empower your AI with efficient, clean data pipelines:",
    features: [
      "Design and development of ML applications and workflows",
      "Model training, tuning, and performance enhancements",
      "Continuous testing and evaluation for robust systems"
    ]
  },
  {
    icon: <Settings className="mr-2 h-5 w-5 text-purple-600" />,
    title: "MLOps & DevOps for AI",
    description: "Optimise delivery throughout the AI/ML lifecycle:",
    features: [
      "Accelerated development and deployment cycles",
      "Automation across engineering and operational processes",
      "Continuous monitoring, CI/CD, and rapid issue resolution"
    ]
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

// Tools & technologies
const technologies = [
  {
    title: "Enterprise Platforms",
    description: "We utilize platforms such as LangGraph, CrewAI, llamaindex, and MCP Servers to deliver robust, enterprise-grade solutions that integrate effortlessly into your existing infrastructure."
  },
  {
    title: "Open Source Tools",
    description: "Harness the power of community-driven innovation with AutoGen and AutoGPT, accelerating development while continuously improving your AI systems."
  },
  {
    title: "No Code / Low Code Solutions",
    description: "Empower rapid prototyping and agile development using Stubber, Make.com, and Power Automate. These tools enable you to deploy intelligent solutions quickly and efficiently, without extensive coding."
  },
  {
    title: "Large Language Models & AI Frameworks",
    description: "Drive nuanced and context-aware interactions with advanced models like Claude, OpenAI, and Deepseek, ensuring your AI initiatives remain at the cutting edge."
  }
];

export default AgenticAI;
