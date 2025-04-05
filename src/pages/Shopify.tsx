import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ShopifyLeadForm from "@/components/ShopifyLeadForm";

const Shopify = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-newtheme-purple to-newtheme-darkgray py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/lovable-uploads/17da4675-01fe-498e-a39e-74c35ddb035f.png"
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Shopify Website Design by IQX
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              Exceptional Shopify experiences engineered for performance and built for growth.
            </p>
            <p className="text-lg text-gray-200 mb-8">
              At IQX, we create high-performance digital storefronts that capture your brand's unique identity 
              and deliver real business results. Whether you're using Shopify Standard or Shopify Plus, 
              our seasoned team of creative strategists, UX specialists, and Shopify experts tailors every 
              project to exceed your expectations.
            </p>
            <Button className="bg-white hover:bg-gray-100 text-newtheme-purple px-6 py-3 rounded-lg text-lg">
              Talk to Our Shopify Design Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-newtheme-purple mb-6">Your Digital Storefront, Perfected</h2>
              <p className="text-gray-600 text-lg mb-8">
                Your website is more than just an online presence—it's a dynamic sales engine. With IQX, you 
                get a conversion-optimized Shopify site that's as visually stunning as it is functionally robust. 
                We harness the power of both Shopify Standard and Shopify Plus to provide scalable, secure, 
                and high-performing ecommerce solutions.
              </p>
              <Button className="bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white px-6 py-3 rounded-lg text-lg">
                Get Your Free Consultation
              </Button>
            </div>
            <div className="relative h-80 md:h-96 w-full rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-blue-500/20"></div>
              <img 
                src="/lovable-uploads/91f9a8d9-c7f0-4b15-ac36-b1f2ee41c021.png" 
                alt="Shopify design showcase" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose IQX */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-newtheme-purple mb-4">Why Choose IQX for Shopify Design?</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Looking for Shopify Design Expertise? In today's competitive market, a beautifully designed website 
              is only part of the equation. At IQX, we focus on guiding your visitors through seamless user journeys 
              that transform browsers into loyal customers. Our data-driven design philosophy sets your brand apart from the rest.
            </p>
            <Button variant="outline" className="mt-8 border-newtheme-purple text-newtheme-purple hover:bg-newtheme-purple/10">
              See Our Work
            </Button>
          </div>
        </div>
      </section>
      
      {/* What We Offer */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-newtheme-purple mb-4">What We Offer</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerItems.map((item, index) => (
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
      </section>
      
      {/* Our Design Process */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-newtheme-purple mb-4">Our Design Process</h2>
            <p className="text-gray-600 text-lg">From Concept to Conversion: Our 4-Step Approach</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl p-8 shadow-lg h-full">
                  <div className="bg-gradient-to-r from-pink-500 to-blue-500 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold mb-6">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-newtheme-purple mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-8 h-8">
                    <ArrowRight className="text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button className="bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white px-6 py-3 rounded-lg text-lg">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Why Shopify is Superior */}
      <section className="py-20 bg-gradient-to-br from-newtheme-purple to-newtheme-darkgray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Why Shopify is the Superior Platform</h2>
            <p className="text-gray-300 text-lg">10 Reasons Shopify Stands Out:</p>
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
          
          <div className="text-center mt-12">
            <Button className="bg-white hover:bg-gray-100 text-newtheme-purple px-6 py-3 rounded-lg text-lg">
              Discover More Benefits
            </Button>
          </div>
        </div>
      </section>
      
      {/* More From IQX */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-newtheme-purple mb-4">More From IQX</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
      </section>
      
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

// Keep the existing data variables for other sections
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
