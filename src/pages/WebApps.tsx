
import { ArrowRight, CheckCircle, Code, Layers, Rocket, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const WebApps = () => {
  const offerings = [
    {
      title: "Bespoke App Design",
      description: "Custom UX/UI designed for your audience and brand—fully integrated with a headless CMS for ultimate flexibility."
    },
    {
      title: "Flutter & React Native Development",
      description: "Cross-platform apps with native performance and future-ready architecture. Easily connected to CMSs like Strapi and Umbraco via REST or GraphQL APIs."
    },
    {
      title: "UX + UI That Converts",
      description: "Crafted journeys that reduce friction and amplify engagement—supported by CMS-driven personalization."
    },
    {
      title: "MVP to Full Scale",
      description: "Start lean, scale fast. We design flexible foundations, with CMS support to grow and iterate at speed."
    },
    {
      title: "App Redesigns & Rebuilds",
      description: "Modernize legacy apps with contemporary tech, modular design, and content systems that empower your team."
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "Discovery & Strategy",
      description: "We learn your goals, audience, and technical landscape—including the ideal CMS to support your content needs."
    },
    {
      number: "2",
      title: "UX Architecture & Wireframing",
      description: "Crafting intuitive structures with scalable information architecture—designed for API-driven content flow."
    },
    {
      number: "3",
      title: "Pixel-Perfect UI Design",
      description: "Delightful, responsive interfaces that pull in real-time content from Strapi, Umbraco, or your CMS of choice."
    },
    {
      number: "4",
      title: "Cross-Platform Development",
      description: "Robust Flutter or React Native codebases, powered by flexible content APIs and real-time updates."
    },
    {
      number: "5",
      title: "Launch, Test, Iterate",
      description: "Ongoing testing, performance tuning, and CMS-enabled agility so you can adapt and grow post-launch."
    }
  ];

  const techBenefits = [
    "Cross-Platform Agility: Build once, deploy to iOS, Android, and web.",
    "Native-Like Performance: Smooth animations and interactions.",
    "Faster Time to Market: Modular code meets real-time content updates.",
    "Strapi & Umbraco Integration: Update app content without deploying code.",
    "Content API Power: REST or GraphQL APIs for flexible data delivery.",
    "Role-Based Access: Strapi and Umbraco allow secure content control across teams.",
    "Scalable Architecture: Add features, integrations, and content layers as you grow.",
    "Rich Media Support: Easily manage assets like images, videos, and documents.",
    "Localization & Multisite Ready: Global-ready experiences powered by CMS flexibility.",
    "CI/CD + CMS Harmony: Agile dev meets agile content."
  ];

  const additionalServices = [
    {
      title: "CMS Strategy & Implementation",
      description: "We help you choose and configure the right CMS (Strapi, Umbraco, or others) for your business model."
    },
    {
      title: "UX Research & Prototyping",
      description: "User testing and rapid prototypes that connect design with real content."
    },
    {
      title: "API Development & Backend Integration",
      description: "We build and connect robust APIs to power data flow between your app, CMS, and third-party services."
    },
    {
      title: "Ongoing Retainers",
      description: "From content updates to feature rollouts—we're your long-term product partner."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-newtheme-purple to-newtheme-darkgray text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Web App Development by IQX</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Custom-built cross-platform apps, powered by Flutter, React Native, and flexible content architecture.
            </p>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg mb-8">
              <p className="text-lg md:text-xl italic">
                "At IQX, we don't just build apps—we engineer elegant, high-performance digital products with user-first design, 
                scalable architecture, and seamless functionality across iOS, Android, and web. Powered by headless CMS platforms 
                like Strapi and Umbraco, your content stays as agile as your code."
              </p>
            </div>
            <Button className="bg-white text-newtheme-purple hover:bg-gray-100 px-6 py-3 text-lg rounded-lg">
              Talk to Our App Development Team
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </div>

      {/* Value Proposition */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Your Product, Reimagined for Mobile & Web</h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              Your app is more than code—it's a living product powered by dynamic content and intelligent design. 
              We combine Flutter and React Native with robust, API-first CMS platforms like Strapi and Umbraco, 
              giving your team full control over content without touching the code.
            </p>
            <p className="text-lg text-gray-700 mb-8 text-center">
              With IQX, you get a performant, visually refined, and content-flexible application that delights users and adapts to change.
            </p>
            <div className="text-center">
              <Button variant="outline" className="border-newtheme-purple text-newtheme-purple hover:bg-newtheme-purple/10">
                Get Your Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose IQX */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Why Choose IQX for Web App Development?</h2>
          <p className="text-xl text-center mb-12 text-gray-600">Looking for a Bespoke App Experience?</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Smartphone className="h-12 w-12 text-newtheme-purple mb-4" />
              <h3 className="text-xl font-bold mb-3">Design That Thinks Ahead</h3>
              <p className="text-gray-600">
                We blend UX strategy with visual storytelling to create interfaces users love to engage with. 
                Our UI is tightly coupled with content systems that let you evolve your message anytime.
              </p>
            </div>
            
            <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Rocket className="h-12 w-12 text-newtheme-purple mb-4" />
              <h3 className="text-xl font-bold mb-3">Performance That Scales</h3>
              <p className="text-gray-600">
                Whether you're launching an MVP or scaling globally, our builds are fast, modular, 
                and API-ready—fueled by CMS platforms like Strapi and Umbraco for seamless content delivery.
              </p>
            </div>
            
            <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Layers className="h-12 w-12 text-newtheme-purple mb-4" />
              <h3 className="text-xl font-bold mb-3">One Codebase. All Devices.</h3>
              <p className="text-gray-600">
                With Flutter and React Native, your app performs natively across devices. And with headless CMS integration, 
                you manage content from one central source, powering every screen.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button className="bg-gradient-to-r from-newtheme-purple to-blue-600 text-white hover:opacity-90">
              See Our Work
            </Button>
          </div>
        </div>
      </div>

      {/* What We Offer */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerings.map((offering, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{offering.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{offering.description}</CardDescription>
                  <Button variant="link" className="mt-4 p-0 text-newtheme-purple">
                    Learn More <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Our Process */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Our Design + Build Process</h2>
          <p className="text-xl text-center mb-12 text-gray-600">From Idea to App Store</p>
          
          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={index} className="flex mb-8">
                <div className="mr-6">
                  <div className="w-12 h-12 rounded-full bg-newtheme-purple text-white flex items-center justify-center font-bold text-xl">
                    {step.number}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button className="bg-newtheme-purple text-white hover:bg-opacity-90">
              Start Your Project
            </Button>
          </div>
        </div>
      </div>

      {/* Tech Stack Benefits */}
      <div className="py-16 bg-gradient-to-br from-gray-900 to-newtheme-purple text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Why Flutter, React Native + Headless CMS?</h2>
          <p className="text-xl text-center mb-12 text-gray-200">The Modern Stack for Speed, Flexibility & Control</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6 max-w-5xl mx-auto">
            {techBenefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                <p>{benefit}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button className="bg-white text-newtheme-purple hover:bg-gray-100">
              Learn More About Our Tech Stack
            </Button>
          </div>
        </div>
      </div>

      {/* More Services */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">More From IQX</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {additionalServices.map((service, index) => (
              <div key={index} className="flex">
                <Code className="h-6 w-6 text-newtheme-purple mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" className="border-newtheme-purple text-newtheme-purple hover:bg-newtheme-purple/10">
              Explore All Services
            </Button>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Build an App Worth Downloading</h2>
            <p className="text-lg text-gray-700 mb-8">
              Whether you're launching a new app, scaling a product, or transforming an old system, 
              IQX is your partner in crafting beautiful, performant, and content-flexible digital products. 
              Powered by Flutter, React Native, and CMS platforms like Strapi and Umbraco, 
              we make app development smarter, faster, and more empowering.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-newtheme-purple text-white hover:bg-opacity-90 px-6 py-3">
                Talk to Our App Development Team
                <ArrowRight className="ml-2" />
              </Button>
              <Button variant="outline" className="border-newtheme-purple text-newtheme-purple hover:bg-newtheme-purple/10">
                Schedule a Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default WebApps;
