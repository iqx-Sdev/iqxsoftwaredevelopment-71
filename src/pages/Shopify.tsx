import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ShopifyLeadForm from "@/components/ShopifyLeadForm";

const Shopify = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-newtheme-purple to-blue-600">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-xl">
                <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full mb-5">
                  <span className="text-white font-medium">Shopify Website Design</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                  Shopify Website Design by IQX
                </h1>
                <p className="text-xl text-white/80 mb-8">
                  Exceptional Shopify experiences engineered for performance and built for growth.
                </p>
                <Button className="bg-white hover:bg-gray-100 text-newtheme-purple px-8 py-6 rounded-lg text-lg">
                  Talk to Our Shopify Design Team
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <div className="relative hidden lg:block">
                <img 
                  src="/lovable-uploads/635e1354-6078-476e-a647-c2d5340f8844.png" 
                  alt="Digital storefront interface" 
                  className="rounded-xl shadow-2xl w-2/3 mx-auto"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-newtheme-purple mb-6">
                  Shopify Design Excellence
                </h2>
                <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                  Real business impact with professional Shopify design:
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <div className="flex items-center gap-4 mb-4">
                    <Check className="h-6 w-6 text-green-500" />
                    <span className="font-bold text-2xl text-newtheme-purple">58%</span>
                  </div>
                  <p className="text-gray-600">Average increase in conversion rates</p>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <div className="flex items-center gap-4 mb-4">
                    <Check className="h-6 w-6 text-green-500" />
                    <span className="font-bold text-2xl text-newtheme-purple">42%</span>
                  </div>
                  <p className="text-gray-600">Reduction in cart abandonment</p>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <div className="flex items-center gap-4 mb-4">
                    <Check className="h-6 w-6 text-green-500" />
                    <span className="font-bold text-2xl text-newtheme-purple">95%</span>
                  </div>
                  <p className="text-gray-600">Customer satisfaction rate</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Lead Form - Prominent Position */}
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              <div className="lg:col-span-2 flex flex-col justify-center">
                <div className="mb-8">
                  <span className="inline-block px-3 py-1 rounded-full bg-pink-100 text-pink-800 font-semibold text-sm mb-4">Ready to Start?</span>
                  <h2 className="text-3xl font-bold text-newtheme-purple mb-6">Transform Your Online Store Today</h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Fill out our consultation form and get personalized recommendations for your Shopify store from our expert team.
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
                <ShopifyLeadForm />
              </div>
            </div>
          </div>
        </section>
        
        {/* Value Proposition */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="mb-4 inline-block bg-blue-100 px-3 py-1 rounded-full">
                    <span className="text-blue-700 font-medium">Our Approach</span>
                  </div>
                  <h2 className="text-3xl font-bold text-newtheme-purple mb-6">Your Digital Storefront, Perfected</h2>
                  <p className="text-gray-600 text-lg mb-8">
                    Your website is more than just an online presence—it's a dynamic sales engine. With IQX, you 
                    get a conversion-optimized Shopify site that's as visually stunning as it is functionally robust.
                  </p>
                  <Button className="bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white px-6 py-3 rounded-lg text-lg">
                    Get Your Free Consultation
                  </Button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg overflow-hidden shadow-xl">
                    <img 
                      src="/lovable-uploads/9fdf3eef-0ab7-42c8-a13f-a2cb44cad407.png"
                      alt="Mobile app interface" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-xl mt-8">
                    <img 
                      src="/lovable-uploads/a9ef1970-ba1a-4294-8c6f-c1ed4f9dda3e.png"
                      alt="Shopify app interface" 
                      className="w-full h-full object-cover"
                    />
                  </div>
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
                <h2 className="text-3xl md:text-4xl font-bold text-newtheme-purple mb-6">Why Choose IQX for Shopify Design?</h2>
                <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                  In today's competitive market, a beautifully designed website is only part of the equation. 
                  Our data-driven design philosophy sets your brand apart from the rest.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {offerItems.slice(0, 6).map((item, index) => (
                  <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all">
                    <h3 className="text-xl font-bold text-newtheme-purple mb-4">{item.title}</h3>
                    <p className="text-gray-600 mb-6">{item.description}</p>
                    <Button variant="link" className="text-pink-500 hover:text-pink-600 p-0">
                      {item.buttonText}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Design Process */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <div className="mb-4 inline-block bg-green-100 px-3 py-1 rounded-full">
                  <span className="text-green-700 font-medium">Our Process</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-newtheme-purple mb-6">Our Design Process</h2>
                <p className="text-gray-600 text-lg">From Concept to Conversion: Our 4-Step Approach</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {processSteps.map((step, index) => (
                  <div key={index} className="relative">
                    <div className="bg-white rounded-xl p-8 shadow-lg h-full">
                      <div className="bg-gradient-to-r from-pink-500 to-blue-500 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold mb-6">
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-bold text-newtheme-purple mb-4">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Website Portfolio */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <div className="mb-4 inline-block bg-blue-100 px-3 py-1 rounded-full">
                  <span className="text-blue-700 font-medium">Our Work</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-newtheme-purple mb-6">Website Design Portfolio</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  See our latest Shopify and e-commerce projects
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="overflow-hidden rounded-lg shadow-lg group">
                  <div className="relative h-60">
                    <img 
                      src="/lovable-uploads/77479e54-2790-4b90-982a-54bbd8e631f5.png" 
                      alt="Project management dashboard" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 bg-white">
                    <h3 className="text-lg font-bold text-newtheme-purple">Admin Dashboard</h3>
                    <p className="text-gray-600 mt-2">Modern admin interface for e-commerce management</p>
                  </div>
                </div>
                
                <div className="overflow-hidden rounded-lg shadow-lg group">
                  <div className="relative h-60">
                    <img 
                      src="/lovable-uploads/635e1354-6078-476e-a647-c2d5340f8844.png" 
                      alt="Mobile map interface" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 bg-white">
                    <h3 className="text-lg font-bold text-newtheme-purple">Store Locator</h3>
                    <p className="text-gray-600 mt-2">Interactive map to find physical store locations</p>
                  </div>
                </div>
                
                <div className="overflow-hidden rounded-lg shadow-lg group">
                  <div className="relative h-60">
                    <img 
                      src="/lovable-uploads/9fdf3eef-0ab7-42c8-a13f-a2cb44cad407.png" 
                      alt="Healthcare app interface" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 bg-white">
                    <h3 className="text-lg font-bold text-newtheme-purple">Healthcare Portal</h3>
                    <p className="text-gray-600 mt-2">Patient-focused healthcare booking system</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Why Shopify is Superior - Dark Section */}
        <section className="py-16 bg-gradient-to-br from-gray-900 to-newtheme-purple text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <div className="mb-4 inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-white font-medium">Platform Benefits</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Shopify is the Superior Platform</h2>
                <p className="text-xl opacity-80 max-w-3xl mx-auto">10 Reasons Shopify Stands Out:</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {shopifyBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                    <div className="bg-gradient-to-r from-pink-500 to-blue-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-white font-bold mb-1">{benefit.title}</h3>
                      <p className="text-gray-300">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Final CTA */}
        <section className="py-16 bg-gradient-to-br from-newtheme-purple to-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to transform your online store?
              </h2>
              <p className="text-xl opacity-80 mb-8">
                Beautiful design. Better conversions. Bigger sales.
              </p>
              <Button className="bg-white hover:bg-gray-100 text-newtheme-purple px-8 py-6 rounded-lg text-lg">
                Start Your Shopify Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
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
  "Expert Shopify design advice",
  "Custom strategy for your business",
  "Response within 24 hours",
];

// Keep the existing data variables
const offerItems = [
  {
    title: "Brand-First Shopify Store Design",
    description: "Custom-built solutions that tell your story and fuel growth—crafted on Shopify Standard or Shopify Plus.",
    buttonText: "Learn More"
  },
  {
    title: "UX + UI That Converts",
    description: "Every interaction is engineered to reduce friction and drive engagement through strategic, user-centered design.",
    buttonText: "Discover How"
  },
  {
    title: "Custom Theme Development",
    description: "For brands that demand full creative control, our bespoke theme development ensures your Shopify experience is uniquely yours.",
    buttonText: "Start Your Build"
  },
  {
    title: "Quick-Launch Accelerator",
    description: "Get your store up and running in under 4 weeks with our rapid deployment programme, designed for speed without compromising style.",
    buttonText: "Launch Now"
  },
  {
    title: "Shopify Theme Customisation",
    description: "Already have a theme? We refine and enhance your existing Shopify template to align perfectly with your brand vision.",
    buttonText: "Customize Today"
  }
];

const processSteps = [
  {
    title: "Discovery & Strategy",
    description: "We immerse ourselves in your brand and market to identify key opportunities for impactful design."
  },
  {
    title: "Wireframing & UX Mapping",
    description: "Detailed blueprints and user flow mapping ensure an intuitive and conversion-focused website structure."
  },
  {
    title: "Design & Iteration",
    description: "Our UI team crafts responsive, on-brand visuals while continuously refining the design for maximum impact."
  },
  {
    title: "Launch & Evolve",
    description: "We support you post-launch with ongoing design retainer services to keep your site fresh and competitive."
  }
];

const shopifyBenefits = [
  {
    title: "User-Friendly Interface",
    description: "Easy store setup and management with an intuitive dashboard."
  },
  {
    title: "Lightning-Fast Performance",
    description: "Optimized speed that boosts SEO and conversion rates."
  },
  {
    title: "Fully Hosted & Secure",
    description: "No server worries with built-in SSL and automatic updates."
  },
  {
    title: "Scalability",
    description: "Grows with your business—from startups to global enterprises."
  },
  {
    title: "Robust App Ecosystem",
    description: "Thousands of integrations to enhance functionality."
  },
  {
    title: "Flexible Customization",
    description: "Total creative freedom through custom themes, Liquid, and APIs."
  },
  {
    title: "Mobile-Optimized",
    description: "Seamless, responsive designs for today's mobile-first consumers."
  },
  {
    title: "Integrated Payments",
    description: "Smooth and secure checkout processes."
  },
  {
    title: "Built-In SEO Tools",
    description: "Solid foundations for improving search engine visibility."
  },
  {
    title: "24/7 Support & Community",
    description: "Extensive support and a thriving network of experts."
  }
];

const moreServices = [
  {
    title: "Project Management",
    description: "A dedicated IQX project lead ensures your project stays on track—from kickoff to launch."
  },
  {
    title: "Shopify App Design",
    description: "Extend your store's functionality with apps designed for intuitive user experiences."
  },
  {
    title: "Klaviyo Email Design",
    description: "Engaging, automated email campaigns that drive customer retention and ROI."
  },
  {
    title: "Ongoing Retainers",
    description: "Continuous access to our design team keeps your site current and competitive."
  }
];

export default Shopify;
