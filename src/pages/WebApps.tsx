
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import LeadForm from "@/components/LeadForm";

const WebApps = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-newtheme-purple to-blue-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full mb-5">
                <span className="text-white font-medium">Web Application Development</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Web App Development by IQX
              </h1>
              <p className="text-xl text-white/80 mb-8">
                Custom-built cross-platform apps, powered by Flutter, React Native, and flexible content architecture.
              </p>
              <p className="text-lg text-white/80 mb-8 max-w-3xl mx-auto">
                "At IQX, we don't just build apps—we engineer elegant, high-performance digital products with user-first design, 
                scalable architecture, and seamless functionality across iOS, Android, and web. Powered by headless CMS platforms 
                like Strapi and Umbraco, your content stays as agile as your code."
              </p>
              <Button className="bg-white hover:bg-gray-100 text-newtheme-purple px-8 py-6 rounded-lg text-lg">
                Talk to Our App Development Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
        
        {/* Stats Section - similar to Shopify page */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-newtheme-purple mb-6">
                  Web App Excellence
                </h2>
                <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                  Real business impact with professional web application development:
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <div className="flex items-center gap-4 mb-4">
                    <Check className="h-6 w-6 text-green-500" />
                    <span className="font-bold text-2xl text-newtheme-purple">65%</span>
                  </div>
                  <p className="text-gray-600">Faster time-to-market with our Flutter and React Native development approach</p>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <div className="flex items-center gap-4 mb-4">
                    <Check className="h-6 w-6 text-green-500" />
                    <span className="font-bold text-2xl text-newtheme-purple">40%</span>
                  </div>
                  <p className="text-gray-600">Improvement in user engagement metrics</p>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <div className="flex items-center gap-4 mb-4">
                    <Check className="h-6 w-6 text-green-500" />
                    <span className="font-bold text-2xl text-newtheme-purple">98%</span>
                  </div>
                  <p className="text-gray-600">Client satisfaction with delivered applications</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lead Form Section - Styled like Shopify */}
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              <div className="lg:col-span-2 flex flex-col justify-center">
                <div className="mb-8">
                  <span className="inline-block px-3 py-1 rounded-full bg-pink-100 text-pink-800 font-semibold text-sm mb-4">Ready to Start?</span>
                  <h2 className="text-3xl font-bold text-newtheme-purple mb-6">Transform Your Web Application Today</h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Fill out our consultation form and get personalized recommendations for your Flutter or React Native web app from our expert team.
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
                <LeadForm 
                  title="Get Your Free Web App Consultation"
                  subtitle="Fill out the form below and one of our Flutter and React Native experts will get back to you within 24 hours."
                  serviceName="web app development services"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition - Styled like Shopify */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="mb-4 inline-block bg-blue-100 px-3 py-1 rounded-full">
                    <span className="text-blue-700 font-medium">Our Approach</span>
                  </div>
                  <h2 className="text-3xl font-bold text-newtheme-purple mb-6">Your Product, Reimagined for Mobile & Web</h2>
                  <p className="text-gray-600 text-lg mb-8">
                    Your app is more than code, it's a living product powered by dynamic content and intelligent design. We use Flutter or React Native with robust, API-first CMS platforms like Strapi and Umbraco, giving your team full control over content without touching the code.
                  </p>
                  <Button className="bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white px-6 py-3 rounded-lg text-lg">
                    Get Your Free Consultation
                  </Button>
                </div>
                <div className="relative h-80 md:h-96 w-full rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&h=800&q=80" 
                    alt="Modern web app development" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 mix-blend-overlay"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose IQX - Feature Grid */}
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

        {/* Design Process Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <div className="mb-4 inline-block bg-green-100 px-3 py-1 rounded-full">
                  <span className="text-green-700 font-medium">Our Process</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-newtheme-purple mb-6">Our Design + Build Process</h2>
                <p className="text-gray-600 text-lg">From Idea to App Store: Our 5-Step Approach</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {process.map((step, index) => (
                  <div key={index} className="relative">
                    <div className="bg-white rounded-xl p-8 shadow-lg h-full">
                      <div className="bg-gradient-to-r from-pink-500 to-blue-500 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold mb-6">
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-bold text-newtheme-purple mb-4">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                    {index < process.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-8 h-8">
                        <ArrowRight className="text-gray-300" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Benefits - Dark Section */}
        <section className="py-16 bg-gradient-to-br from-gray-900 to-newtheme-purple text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <div className="mb-4 inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-white font-medium">Technology Stack</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Flutter, React Native + Headless CMS?</h2>
                <p className="text-xl opacity-80 mb-6 max-w-3xl mx-auto">The Modern Stack for Speed, Flexibility & Control</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {techBenefits.slice(0, 9).map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                    <div className="bg-gradient-to-r from-pink-500 to-blue-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-gray-100">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* More From IQX */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-newtheme-purple mb-6">More From IQX</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {moreServices.map((service, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-pink-100 rounded-full p-2">
                      <Check className="h-6 w-6 text-pink-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-newtheme-purple mb-1">{service.title}</h3>
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
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-gradient-to-br from-newtheme-purple to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Let's Build an App Worth Downloading
              </h2>
              <p className="text-xl opacity-80 mb-8 max-w-3xl mx-auto">
                Whether you're launching a new app, scaling a product, or transforming an old system, IQX is your partner in crafting beautiful, 
                performant, and content-flexible digital products. Powered by Flutter or React Native, and CMS platforms like Strapi and Umbraco, 
                we make app development smarter, faster, and more empowering.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-blue-600 hover:bg-gray-100">
                  Talk to Our App Development Team
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/20">
                  Schedule a Free Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

// Lead form benefits list
const leadFormBenefits = [
  "Free no-obligation consultation",
  "Expert Flutter and React Native app development advice",
  "Custom strategy for your business",
  "Response within 24 hours",
];

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

const process = [
  {
    title: "Discovery & Strategy",
    description: "We learn your goals, audience, and technical landscape—including the ideal CMS to support your content needs."
  },
  {
    title: "UX Architecture & Wireframing",
    description: "Crafting intuitive structures with scalable information architecture—designed for API-driven content flow."
  },
  {
    title: "Pixel-Perfect UI Design",
    description: "Delightful, responsive interfaces that pull in real-time content from Strapi, Umbraco, or your CMS of choice."
  },
  {
    title: "Cross-Platform Development",
    description: "Robust Flutter or React Native codebases, powered by flexible content APIs and real-time updates."
  },
  {
    title: "Launch, Test, Iterate",
    description: "Ongoing testing, performance tuning, and CMS-enabled agility so you can adapt and grow post-launch."
  }
];

const techBenefits = [
  "Cross-Platform Agility: Build once with Flutter or React Native, deploy to iOS, Android, and web.",
  "Native-Like Performance: Smooth animations and interactions with Flutter and React Native.",
  "Faster Time to Market: Modular code meets real-time content updates.",
  "Strapi & Umbraco Integration: Update app content without deploying code.",
  "Content API Power: REST or GraphQL APIs for flexible data delivery.",
  "Role-Based Access: Strapi and Umbraco allow secure content control across teams.",
  "Scalable Architecture: Add features, integrations, and content layers as you grow.",
  "Rich Media Support: Easily manage assets like images, videos, and documents.",
  "Localization & Multisite Ready: Global-ready experiences powered by CMS flexibility."
];

const moreServices = [
  {
    title: "CMS Strategy & Implementation",
    description: "We help you choose and configure the right CMS (Strapi, Umbraco, or others) for your Flutter or React Native app."
  },
  {
    title: "UX Research & Prototyping",
    description: "User testing and rapid prototypes that connect design with real content for Flutter and React Native apps."
  },
  {
    title: "API Development & Backend Integration",
    description: "We build and connect robust APIs to power data flow between your app, CMS, and third-party services."
  },
  {
    title: "Ongoing Retainers",
    description: "From content updates to feature rollouts in Flutter or React Native—we're your long-term product partner."
  }
];

export default WebApps;
