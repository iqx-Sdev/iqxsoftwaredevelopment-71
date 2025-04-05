
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ShopifyLeadForm from "@/components/ShopifyLeadForm";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";

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
                  src="/lovable-uploads/914737f9-1a98-46d7-bb9c-332d9cc6b211.png" 
                  alt="Modern Shopify storefront design" 
                  className="rounded-xl shadow-2xl w-full mx-auto"
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
        
        {/* Design Showcase Section - New Carousel */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <div className="mb-4 inline-block bg-pink-100 px-3 py-1 rounded-full">
                  <span className="text-pink-800 font-medium">Shopify Examples</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-newtheme-purple mb-6">
                  Modern Shopify Design Showcase
                </h2>
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                  See how we transform brands with beautiful, conversion-focused Shopify experiences
                </p>
              </div>
              
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full max-w-6xl mx-auto"
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                    <Card className="overflow-hidden border-none shadow-lg">
                      <CardContent className="p-0">
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <img 
                            src="/lovable-uploads/914737f9-1a98-46d7-bb9c-332d9cc6b211.png" 
                            alt="Eco-friendly products Shopify design" 
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="font-bold text-lg text-newtheme-purple mb-2">Eco-Friendly Collection</h3>
                          <p className="text-gray-600 text-sm">Modern product showcase with sustainability focus</p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                  
                  <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                    <Card className="overflow-hidden border-none shadow-lg">
                      <CardContent className="p-0">
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <img 
                            src="/lovable-uploads/e8098bea-0128-43dc-9d97-49d4cb60de99.png" 
                            alt="Fashion eyewear Shopify store" 
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="font-bold text-lg text-newtheme-purple mb-2">Premium Eyewear</h3>
                          <p className="text-gray-600 text-sm">Sophisticated product presentation for luxury brand</p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                  
                  <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                    <Card className="overflow-hidden border-none shadow-lg">
                      <CardContent className="p-0">
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <img 
                            src="/lovable-uploads/d91346d2-b226-407b-b32f-754cd37a32a0.png" 
                            alt="Health supplements Shopify design" 
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="font-bold text-lg text-newtheme-purple mb-2">Wellness Products</h3>
                          <p className="text-gray-600 text-sm">Health-focused e-commerce with clean design</p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                  
                  <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                    <Card className="overflow-hidden border-none shadow-lg">
                      <CardContent className="p-0">
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <img 
                            src="/lovable-uploads/3693622a-8ec7-479e-ad02-b39237646dfb.png" 
                            alt="Footwear Shopify store" 
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="font-bold text-lg text-newtheme-purple mb-2">Footwear Collection</h3>
                          <p className="text-gray-600 text-sm">Dynamic product showcase for sports brand</p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                </CarouselContent>
                <div className="flex justify-center mt-8">
                  <CarouselPrevious className="relative inset-auto mr-2" />
                  <CarouselNext className="relative inset-auto ml-2" />
                </div>
              </Carousel>
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
                      src="/lovable-uploads/4aa2cbcd-56c2-4332-8657-b6c0b0e00108.png"
                      alt="Fashion shopping interface" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-xl mt-8">
                    <img 
                      src="/lovable-uploads/e8098bea-0128-43dc-9d97-49d4cb60de99.png"
                      alt="Sunglasses product page" 
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
        
        {/* Featured Projects Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <div className="mb-4 inline-block bg-blue-100 px-3 py-1 rounded-full">
                  <span className="text-blue-700 font-medium">Featured Work</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-newtheme-purple mb-6">Shopify Success Stories</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                  See how we've transformed businesses with our Shopify expertise
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg group">
                    <div className="relative aspect-video overflow-hidden">
                      <img 
                        src="/lovable-uploads/e8098bea-0128-43dc-9d97-49d4cb60de99.png" 
                        alt="Fashion eyewear store" 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                        <div className="p-6">
                          <span className="text-white/80 text-sm">Fashion & Accessories</span>
                          <h3 className="text-xl font-bold text-white mt-1">FrameVision Eyewear</h3>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-600 mb-4">Luxury eyewear brand saw a 75% increase in online conversions after our Shopify redesign.</p>
                      <Button variant="outline" className="group">
                        View Case Study
                        <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg group">
                    <div className="relative aspect-video overflow-hidden">
                      <img 
                        src="/lovable-uploads/d91346d2-b226-407b-b32f-754cd37a32a0.png" 
                        alt="Health supplements store" 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                        <div className="p-6">
                          <span className="text-white/80 text-sm">Health & Wellness</span>
                          <h3 className="text-xl font-bold text-white mt-1">VitaLife Supplements</h3>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-600 mb-4">Health brand achieved 120% revenue growth in 6 months with our custom Shopify Plus solution.</p>
                      <Button variant="outline" className="group">
                        View Case Study
                        <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
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
  },
  {
    title: "Advanced Shopify Apps Integration",
    description: "Enhance your store functionality with expertly integrated apps that boost conversion and streamline operations.",
    buttonText: "Explore Options"
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

export default Shopify;

