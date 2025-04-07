import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

// Define the case study type
interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  industry: string;
  image: string;
  results: {
    label: string;
    value: string;
  }[];
}

// Case studies data
const caseStudies: CaseStudy[] = [
  {
    id: "kia-south-africa",
    title: "Kia South Africa",
    subtitle: "Transforming Operations Through Seamless Platform Integration",
    summary: "We built an end-to-end integrated digital platform for Kia Retail, streamlining their operations and eliminating data silos through custom API integrations and cloud infrastructure.",
    industry: "Automotive",
    image: "/lovable-uploads/1f706812-3234-486e-923c-a848445c01da.png",
    results: [
      { label: "System Integration", value: "100%" },
      { label: "Lead Conversion", value: "+30%" },
      { label: "Time Savings", value: "15+ hrs/week" }
    ]
  },
  {
    id: "coricraft",
    title: "Coricraft",
    subtitle: "Powering Omni-Channel Retail with a Seamless Cloud-Based Platform",
    summary: "We partnered with Coricraft to build a unified cloud-based e-commerce solution that integrates their online and in-store systems for a seamless customer experience.",
    industry: "Retail",
    image: "/lovable-uploads/48b40d81-286e-4614-92a5-210d94539817.png",
    results: [
      { label: "Revenue Growth", value: "Double-digit" },
      { label: "Inventory Updates", value: "Real-time" },
      { label: "Stock Accuracy", value: "Improved" }
    ]
  },
  {
    id: "motor-happy",
    title: "MotorHappy",
    subtitle: "Redefining Vehicle Financial Services with a Customer-Centric Aggregator Platform",
    summary: "We designed and built a first-of-its-kind aggregator platform for MotorHappy, revolutionizing how customers discover, compare, and purchase vehicle service plans.",
    industry: "Automotive Finance",
    image: "https://images.unsplash.com/photo-1487252665478-49b61b47f302?auto=format&fit=crop&w=800&q=80",
    results: [
      { label: "Customer Fit", value: "Intelligent" },
      { label: "User Experience", value: "Leading-edge" },
      { label: "Customer Relations", value: "Strengthened" }
    ]
  },
  {
    id: "pepkor-more",
    title: "Pepkor +More",
    subtitle: "Reinventing Customer Loyalty for the Modern Consumer",
    summary: "We developed a unified, cloud-based loyalty platform for Pepkor's retail brands, delivering personalized rewards and a mobile-first experience to drive customer engagement.",
    industry: "Retail",
    image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&w=800&q=80",
    results: [
      { label: "Loyalty Experience", value: "Modern" },
      { label: "Customer Insights", value: "Data-driven" },
      { label: "Brand Loyalty", value: "Strengthened" }
    ]
  }
];

const CaseStudies = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        {/* Hero section */}
        <section className="py-16 bg-gradient-to-br from-newtheme-purple to-blue-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full mb-5">
                <span className="text-white font-medium">Client Success Stories</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Case Studies
              </h1>
              <p className="text-xl text-white/80 mb-8">
                Transformative results for real-world business challenges
              </p>
            </div>
          </div>
        </section>
        
        {/* Case studies listing section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 gap-10 md:gap-12">
                {caseStudies.map((study) => (
                  <Card key={study.id} className="flex flex-col md:flex-row overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="md:w-2/5 relative">
                      <AspectRatio ratio={4/3} className="h-full">
                        <OptimizedImage 
                          src={study.image} 
                          alt={study.title} 
                          className="h-full w-full object-cover"
                        />
                      </AspectRatio>
                    </div>
                    <div className="flex flex-col md:w-3/5">
                      <CardHeader>
                        <div className="mb-2">
                          <span className="inline-block px-3 py-1 text-xs font-medium text-purple-700 bg-purple-100 rounded-full">
                            {study.industry}
                          </span>
                        </div>
                        <CardTitle className="text-2xl md:text-3xl font-bold text-newtheme-purple">
                          {study.title}
                        </CardTitle>
                        <CardDescription className="text-lg font-medium text-gray-700 mt-1">
                          {study.subtitle}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-6">
                          {study.summary}
                        </p>
                        <div className="grid grid-cols-3 gap-4 mb-6">
                          {study.results.map((result, index) => (
                            <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
                              <p className="font-bold text-xl text-newtheme-purple">{result.value}</p>
                              <p className="text-sm text-gray-600">{result.label}</p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Link to={`/case-studies/${study.id}`}>
                          <Button variant="gradient" className="gap-2">
                            View Full Case Study
                            <ArrowRight size={16} />
                          </Button>
                        </Link>
                      </CardFooter>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default CaseStudies;
