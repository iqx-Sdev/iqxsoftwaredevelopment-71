
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import AboutSection from "@/components/Home/AboutSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Award, Users, Laptop, Briefcase, Code } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutSection />
      
      {/* Core Services Section */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="mb-4 inline-block bg-blue-100 px-3 py-1 rounded-full">
              <span className="text-blue-700 font-medium">Our Services</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-newtheme-purple mb-6">
              Specialized Solutions
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Explore our specialized service offerings designed to transform your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Power Apps */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all">
              <div className="h-48 relative">
                <img 
                  src="/lovable-uploads/c6f6534a-9f95-42c7-97d1-69f4442bc917.png" 
                  alt="Business professional working on laptop" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/40 to-blue-600/40 mix-blend-multiply"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-newtheme-purple mb-3">Microsoft Power Apps</h3>
                <p className="text-gray-600 mb-6">
                  Transform outdated processes into efficient, customized digital experiences. Automate what matters and empower what's next.
                </p>
                <Link to="/power-apps">
                  <Button className="w-full bg-newtheme-purple hover:bg-newtheme-purple/90">
                    Explore Power Apps
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Agentic AI */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all">
              <div className="h-48 relative">
                <img 
                  src="/lovable-uploads/9f35ae55-312d-4ec6-93e2-4b68924a4037.png" 
                  alt="Team collaborating at a meeting" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/40 to-cyan-500/40 mix-blend-multiply"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-newtheme-purple mb-3">Agentic AI</h3>
                <p className="text-gray-600 mb-6">
                  Harness the power of autonomous AI agents that understand, decide, and act on your business needs with minimal human supervision.
                </p>
                <Link to="/agentic-ai">
                  <Button className="w-full bg-newtheme-purple hover:bg-newtheme-purple/90">
                    Discover Agentic AI
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Agile Teams */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all">
              <div className="h-48 relative">
                <img 
                  src="/lovable-uploads/71017797-223d-4dc7-ac2e-7dc6883755c8.png" 
                  alt="Business meeting discussion" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/40 to-emerald-600/40 mix-blend-multiply"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-newtheme-purple mb-3">Agile Development Teams</h3>
                <p className="text-gray-600 mb-6">
                  High-performance, cross-functional squads built to ship your digital product faster and with greater quality.
                </p>
                <Link to="/agile-teams">
                  <Button className="w-full bg-newtheme-purple hover:bg-newtheme-purple/90">
                    Meet Our Agile Teams
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Web Apps */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all">
              <div className="h-48 relative">
                <img 
                  src="/lovable-uploads/11746b3e-8d9f-4102-9a07-c9f1be35fd9b.png" 
                  alt="Woman at business meeting" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/40 to-purple-600/40 mix-blend-multiply"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-newtheme-purple mb-3">Web & App Development</h3>
                <p className="text-gray-600 mb-6">
                  Custom-built cross-platform apps powered by Flutter, React Native, and flexible content architecture.
                </p>
                <Link to="/web-apps">
                  <Button className="w-full bg-newtheme-purple hover:bg-newtheme-purple/90">
                    Explore Web Apps
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Shopify */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all">
              <div className="h-48 relative">
                <img 
                  src="/lovable-uploads/5bbd9e64-af22-4b2d-b12a-53a195d0201c.png" 
                  alt="Man working at computer" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/40 to-rose-600/40 mix-blend-multiply"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-newtheme-purple mb-3">Shopify Website Design</h3>
                <p className="text-gray-600 mb-6">
                  Exceptional Shopify experiences engineered for performance and built for growth with brand-first store design.
                </p>
                <Link to="/shopify">
                  <Button className="w-full bg-newtheme-purple hover:bg-newtheme-purple/90">
                    Explore Shopify Design
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* AI Chat */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all">
              <div className="h-48 relative">
                <img 
                  src="/lovable-uploads/41b419da-57e6-4dce-bd8f-b8f3acffa74a.png" 
                  alt="Team collaborating in modern office" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/40 to-sky-600/40 mix-blend-multiply"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-newtheme-purple mb-3">AI Chat Solutions</h3>
                <p className="text-gray-600 mb-6">
                  Advanced conversational AI interfaces that enhance customer engagement and streamline support.
                </p>
                <Link to="/ai-chat">
                  <Button className="w-full bg-newtheme-purple hover:bg-newtheme-purple/90">
                    Discover AI Chat
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/contact">
              <Button className="bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white px-8 py-6 text-lg rounded-lg">
                Get In Touch With Our Experts
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="mb-4 inline-block bg-purple-100 px-3 py-1 rounded-full">
                <span className="text-purple-700 font-medium">Why Choose Us</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-newtheme-purple mb-6">
                Why Choose IQBusiness?
              </h2>
              <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                We're more than just consultants, we're your partners in growth
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-newtheme-purple" />
                </div>
                <h3 className="font-bold text-xl mb-2">Expertise</h3>
                <p className="text-gray-600">Industry leaders with deep knowledge across key business domains</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Laptop className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-xl mb-2">Innovation</h3>
                <p className="text-gray-600">Cutting-edge solutions leveraging the latest technological advancements</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-bold text-xl mb-2">Results-Driven</h3>
                <p className="text-gray-600">Focused on delivering measurable outcomes and ROI for your business</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
                <div className="h-12 w-12 rounded-full bg-pink-100 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-pink-600" />
                </div>
                <h3 className="font-bold text-xl mb-2">Partnership</h3>
                <p className="text-gray-600">We work alongside you as a collaborative partner, not just a service provider</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-newtheme-purple to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl opacity-80 mb-8 max-w-3xl mx-auto">
              Let's work together to solve your business challenges and achieve sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-white text-newtheme-purple hover:bg-gray-100 px-8 py-3 text-lg">
                  Contact Us Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/web-apps">
                <Button variant="outline" className="border-white text-white hover:bg-white/20 px-8 py-3 text-lg">
                  Explore Our Solutions
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
