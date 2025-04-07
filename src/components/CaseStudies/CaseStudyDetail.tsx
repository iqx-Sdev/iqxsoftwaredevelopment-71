import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

// Define types for case study details
interface CaseStudyDetail {
  id: string;
  title: string;
  subtitle: string;
  industry: string;
  heroImage: string;
  situation: string;
  solution: string;
  solutionPoints: string[];
  impact: string;
  results: {
    label: string;
    value: string;
  }[];
  images: string[];
}

// Detailed case study data
const caseStudiesDetails: Record<string, CaseStudyDetail> = {
  "kia-south-africa": {
    id: "kia-south-africa",
    title: "Kia South Africa",
    subtitle: "Transforming Operations Through Seamless Platform Integration",
    industry: "Automotive",
    heroImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1200&q=80",
    situation: "Kia Retail had been operating with an out-of-the-box web solution that wasn't built for the complexity of their operations. The system lacked integration with key platforms used for car management and web operations, leading to inefficiencies, data silos, and a heavy reliance on manual workarounds. As a result, their ability to manage stock, update vehicle listings, and track customer activity was significantly constrained.",
    solution: "To address these challenges, Kia Retail partnered with us to design and implement a fully integrated digital platform tailored to their unique business needs. We built an end-to-end solution using modern web frameworks and cloud technologies, enabling real-time data flow between their vehicle management systems, CRM, and website. This eliminated duplication, improved accuracy, and automated previously manual tasks.",
    solutionPoints: [
      "Custom API integrations for vehicle stock management",
      "A scalable cloud infrastructure for performance and reliability",
      "A user-friendly CMS for marketing and content updates",
      "Enhanced lead capture and tracking functionality"
    ],
    impact: "The new platform has transformed Kia Retail's digital operations. Key outcomes include streamlined operations through automated stock control and car listing updates across platforms, improved lead generation with enhanced online presence driving measurable increase in inbound leads, efficiency gains from reduced manual input saving valuable time for internal teams, and scalability with a future-proofed solution ready to grow with their business.",
    results: [
      { label: "System Integration", value: "100%" },
      { label: "Lead Conversion", value: "+30%" },
      { label: "Time Savings", value: "15+ hrs/week" },
      { label: "Digital Presence", value: "Modern & High-performance" }
    ],
    images: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80"
    ]
  },
  "coricraft": {
    id: "coricraft",
    title: "Coricraft",
    subtitle: "Powering Omni-Channel Retail with a Seamless Cloud-Based Platform",
    industry: "Retail",
    heroImage: "/lovable-uploads/48b40d81-286e-4614-92a5-210d94539817.png",
    situation: "Coricraft, a leading furniture and homeware retailer, was facing operational bottlenecks due to disjointed systems. Their Magento 1 e-commerce platform lacked integration with Syspro and internal stock management systems, resulting in inefficiencies across online and in-store experiences. These disconnects led to inventory inaccuracies, delayed updates, and a fragmented customer journey across channels. To maintain their competitive edge and meet the evolving expectations of modern shoppers, Coricraft made the strategic decision to overhaul their entire digital platform.",
    solution: "We partnered with Coricraft to build a sleek, cloud-based e-commerce solution tailored to their business. The new platform was designed to unify their digital and physical retail operations, offering real-time integration with Syspro and their in-store systems.",
    solutionPoints: [
      "Real-time inventory sync across all customer touchpoints",
      "A responsive, high-performance user experience",
      "Seamless Syspro integration for operational efficiency",
      "Scalable cloud architecture for future growth"
    ],
    impact: "The results were transformative. With the new cloud-based e-commerce platform, Coricraft saw a substantial increase in online sales, gained real-time inventory visibility, reducing overselling and stockouts, delivered a frictionless shopping experience across channels, and achieved better operational efficiency, reducing manual workloads.",
    results: [
      { label: "Revenue Growth", value: "Double-digit" },
      { label: "Inventory Updates", value: "Real-time" },
      { label: "Customer Satisfaction", value: "Enhanced" },
      { label: "Stock Accuracy", value: "Improved" }
    ],
    images: [
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80"
    ]
  },
  "motor-happy": {
    id: "motor-happy",
    title: "MotorHappy",
    subtitle: "Redefining Vehicle Financial Services with a Customer-Centric Aggregator Platform",
    industry: "Automotive Finance",
    heroImage: "https://images.unsplash.com/photo-1487252665478-49b61b47f302?auto=format&fit=crop&w=1200&q=80",
    situation: "MotorHappy identified a major gap in the vehicle service plan industry—an industry that had remained largely unchanged for decades. Customers often faced confusing, rigid service options that didn't always align with their needs. Recognizing an opportunity to lead change, MotorHappy set out to disrupt the norm by offering a smarter, more intuitive way for drivers to find the right service and maintenance solutions.",
    solution: "To bring this vision to life, we partnered with MotorHappy to design and build a first-of-its-kind aggregator platform—a dynamic, cloud-based solution that reimagined how customers engage with vehicle financial services. The platform delivers an end-to-end experience that supports everything from product comparison and purchase to ongoing vehicle maintenance and customer support.",
    solutionPoints: [
      "Aggregation of multiple service plan providers into one seamless interface",
      "Smart matching to recommend the most suitable offerings per customer profile",
      "Integration with third-party systems for real-time data and pricing",
      "A fully responsive and user-friendly customer journey"
    ],
    impact: "MotorHappy's bold move paid off. The innovative platform not only reshaped how service plans are delivered but also set a new standard for customer satisfaction in the industry. Results included a marked increase in customer satisfaction and positive sentiment, strengthened brand loyalty through personalized and transparent service, improved retention and lifetime value from engaged, happier customers, and positioned as a true innovator in a historically stagnant market.",
    results: [
      { label: "Customer Fit", value: "Intelligent" },
      { label: "User Experience", value: "Leading-edge" },
      { label: "Customer Feedback", value: "Positive" },
      { label: "Customer Relations", value: "Strengthened" }
    ],
    images: [
      "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1501286353178-1ec881214838?auto=format&fit=crop&w=800&q=80"
    ]
  },
  "pepkor-more": {
    id: "pepkor-more",
    title: "Pepkor +More",
    subtitle: "Reinventing Customer Loyalty for the Modern Consumer",
    industry: "Retail",
    heroImage: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&w=1200&q=80",
    situation: "Pepkor, a leading retail group, identified a critical gap in their customer engagement strategy—an outdated loyalty system that no longer resonated with the expectations of today's consumers. With customer behavior evolving rapidly and digital convenience becoming the norm, Pepkor realized that to stay competitive and relevant, it needed to reimagine how loyalty worked across its group of brands.",
    solution: "To address this, Pepkor launched a group-wide rollout of a modern, cloud-based loyalty platform under the +More brand. The initiative wasn't just about technology—it was about prioritizing customer experience and designing a program that customers would genuinely value and use.",
    solutionPoints: [
      "A unified loyalty experience across Pepkor's diverse retail brands",
      "Seamless integration into existing POS and digital systems",
      "Personalized offers, rewards, and promotions based on customer behavior",
      "A mobile-first experience to meet customers where they are"
    ],
    impact: "With the rollout of the new +More loyalty platform, Pepkor is poised to see a significant uplift in customer engagement and satisfaction. Early results and projections highlight increased customer participation and repeat visits, stronger brand connection through relevant, personalized rewards, high adoption rates of the mobile-first loyalty experience, and enhanced customer retention across multiple retail brands.",
    results: [
      { label: "Loyalty Experience", value: "Modern" },
      { label: "Customer Insights", value: "Data-driven" },
      { label: "Brand Loyalty", value: "Strengthened" },
      { label: "Customer Satisfaction", value: "Elevated" }
    ],
    images: [
      "https://images.unsplash.com/photo-1551038247-3d9af20df552?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80"
    ]
  },
  "next-calm": {
    id: "next-calm",
    title: "NextCalm",
    subtitle: "Bringing Clarity and Control to Estate Management",
    industry: "Estate Management",
    heroImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&q=80",
    situation: "Managing an estate can become incredibly complex during moments of crisis—particularly when individuals are incapacitated or pass away unexpectedly. Traditional estate planning methods often involve fragmented, offline documentation, which can lead to confusion, delays, and added emotional stress for loved ones during already difficult times. Recognizing this critical gap, NextCalm set out to modernize the way people prepare for and navigate estate transitions.",
    solution: "NextCalm introduced a centralized, secure document storage platform designed to simplify estate management. The platform allows individuals to store, organize, and share essential legal and financial documents with designated representatives—ensuring that the right information is always accessible when needed most.",
    solutionPoints: [
      "Centralized access to all estate-related documents",
      "Bank-grade security and encryption",
      "A user-friendly, guided interface for setup and management",
      "Controlled sharing and permissions for trusted representatives"
    ],
    impact: "NextCalm's solution has revolutionized the way individuals and families approach estate planning. Benefits include reduced administrative burden during crisis moments, faster, smoother transitions through immediate access to necessary documents, greater trust and transparency between individuals and their representatives, and a sense of calm and control for users preparing for the unexpected.",
    results: [
      { label: "Document Security", value: "Bank-grade" },
      { label: "User Experience", value: "Simplified" },
      { label: "Transition Time", value: "Reduced" },
      { label: "User Control", value: "Enhanced" }
    ],
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?auto=format&fit=crop&w=800&q=80"
    ]
  },
  "swaziland-building-society": {
    id: "swaziland-building-society",
    title: "Swaziland Building Society",
    subtitle: "Accelerating Digital Banking Innovation with Expert Technical Support",
    industry: "Banking",
    heroImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
    situation: "Swaziland Building Society (SBS) was under growing pressure to deliver innovative, high-quality banking products across multiple platforms to meet the evolving needs of their clients. To remain competitive and enhance their digital offerings, SBS initiated a series of internal efforts aimed at increasing development capacity and speeding up time-to-market for new solutions.",
    solution: "We were brought in to support SBS with highly specialized technical expertise in the financial services sector. Our team—comprising software developers, scrum masters, business analysts, and UI/UX designers—seamlessly integrated into SBS's internal teams to enhance delivery capabilities.",
    solutionPoints: [
      "Web, mobile, and desktop application development",
      "Integration with existing core banking systems",
      "Scalable architecture aligned with regulatory and security requirements",
      "Agile collaboration to ensure alignment with SBS's internal roadmap and priorities"
    ],
    impact: "Through this partnership, SBS was able to significantly enhance its digital banking capabilities. The technical support and domain expertise we provided helped the bank deliver seamless, modern banking experiences to its clients. This engagement resulted in delivery of user-friendly front-end interfaces across platforms, accelerated product launches through improved development velocity, reliable integration with legacy systems without disruption, and a solid foundation for future digital innovation within the bank.",
    results: [
      { label: "Time-to-Market", value: "Accelerated" },
      { label: "Development Capacity", value: "Enhanced" },
      { label: "Digital Channels", value: "Expanded" },
      { label: "System Integration", value: "Seamless" }
    ],
    images: [
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80"
    ]
  }
};

const CaseStudyDetail = () => {
  const { caseStudyId } = useParams<{ caseStudyId: string }>();
  const caseStudy = caseStudyId ? caseStudiesDetails[caseStudyId] : null;

  if (!caseStudy) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Case Study Not Found</h1>
            <Link to="/case-studies">
              <Button variant="outline">Return to Case Studies</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        {/* Hero Banner with image */}
        <section className="relative h-[40vh] md:h-[60vh] overflow-hidden">
          <img 
            src={caseStudy.heroImage} 
            alt={caseStudy.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
            <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-16">
              <Link to="/case-studies" className="text-white hover:underline mb-4 flex items-center">
                <ArrowLeft size={16} className="mr-2" />
                Back to Case Studies
              </Link>
              <div className="mb-2">
                <span className="inline-block px-3 py-1 text-xs font-medium text-white bg-newtheme-purple/80 rounded-full">
                  {caseStudy.industry}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                {caseStudy.title}
              </h1>
              <p className="text-xl text-white/90 mt-2">
                {caseStudy.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Situation */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-newtheme-purple mb-4">Situation</h2>
                <p className="text-gray-700">{caseStudy.situation}</p>
              </div>
              
              {/* Solution */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-newtheme-purple mb-4">Solution</h2>
                <p className="text-gray-700 mb-6">{caseStudy.solution}</p>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="font-bold text-gray-800 mb-3">Key components of the solution included:</h3>
                  <ul className="space-y-2">
                    {caseStudy.solutionPoints.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-flex items-center justify-center w-5 h-5 bg-newtheme-purple text-white rounded-full text-xs mr-3 shrink-0 mt-1">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Impact */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-newtheme-purple mb-4">Impact</h2>
                <p className="text-gray-700">{caseStudy.impact}</p>
              </div>
              
              {/* Results */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-newtheme-purple mb-4">Results at a Glance</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {caseStudy.results.map((result, index) => (
                    <div key={index} className="text-center p-6 bg-gray-50 rounded-xl border border-gray-100">
                      <p className="font-bold text-3xl text-newtheme-purple mb-2">{result.value}</p>
                      <p className="text-sm text-gray-600">{result.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Image Gallery */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-newtheme-purple mb-6">Project Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {caseStudy.images.map((image, index) => (
                    <div key={index} className="aspect-[4/3] overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                      <img 
                        src={image} 
                        alt={`${caseStudy.title} project image ${index + 1}`} 
                        className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-newtheme-purple mb-6">Ready to Transform Your Business?</h2>
              <p className="text-lg text-gray-700 mb-8">
                Let's discuss how we can help you achieve similar results with a tailored solution for your unique challenges.
              </p>
              <Link to="/contact">
                <Button variant="gradient" size="lg">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default CaseStudyDetail;
