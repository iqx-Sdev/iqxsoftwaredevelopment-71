
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Checkbox } from "@/components/ui/checkbox";
import LeadFormSection from "@/components/PowerApps/LeadFormSection";
import { Link } from "react-router-dom";

const PowerApps = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-newtheme-purple to-blue-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full mb-5">
                <span className="text-white font-medium">Microsoft Power Platform</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Automate What Matters. Empower What's Next.
              </h1>
              <p className="text-xl text-white/80 mb-8">
                Transform outdated processes into efficient, customized digital experiences with Microsoft Power Apps.
              </p>
              <Link to="/book-consultation">
                <Button className="bg-white hover:bg-gray-100 text-newtheme-purple px-8 py-6 rounded-lg text-lg">
                  Book a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section - similar to AI Chat page */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-newtheme-purple mb-6">
                  Power Apps Impact
                </h2>
                <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                  Real business results with Power Apps automation:
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <div className="flex items-center gap-4 mb-4">
                    <Check className="h-6 w-6 text-green-500" />
                    <span className="font-bold text-2xl text-newtheme-purple">86%</span>
                  </div>
                  <p className="text-gray-600">of Fortune 500 companies use Power Apps</p>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <div className="flex items-center gap-4 mb-4">
                    <Check className="h-6 w-6 text-green-500" />
                    <span className="font-bold text-2xl text-newtheme-purple">74%</span>
                  </div>
                  <p className="text-gray-600">Reduction in app development costs</p>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <div className="flex items-center gap-4 mb-4">
                    <Check className="h-6 w-6 text-green-500" />
                    <span className="font-bold text-2xl text-newtheme-purple">188%</span>
                  </div>
                  <p className="text-gray-600">ROI when implementing Power Apps solutions</p>
                </div>
              </div>
              
              <p className="text-center mt-10 text-lg text-gray-600">
                Empower your team with no-code tools while your business reaps the benefits.
              </p>
            </div>
          </div>
        </section>
        
        {/* Key Components - Styled like AI Chat Features */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <div className="mb-4 inline-block bg-purple-100 px-3 py-1 rounded-full">
                  <span className="text-purple-700 font-medium">Key Components</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-newtheme-purple mb-6">
                  4 Key Components of Power Apps
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {componentItems.map((item, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg">
                    <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4 text-xl">
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      
        {/* Services We Offer - Card Format */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <div className="mb-4 inline-block bg-green-100 px-3 py-1 rounded-full">
                  <span className="text-green-700 font-medium">Our Services</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-newtheme-purple mb-6">
                  What Can IQX Do for You?
                </h2>
                <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                  From ideation to deployment, we help you streamline operations and unlock new possibilities.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {serviceItems.slice(0, 6).map((service, index) => (
                  <Card key={index} className="border-none shadow-md">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-newtheme-purple">
                        <div className="text-xl">{service.title.split(" ")[0]}</div>
                        {service.title.split(" ").slice(1).join(" ")}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{service.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      
        {/* Common Business Challenges - Dark Section */}
        <section className="py-16 bg-gradient-to-br from-gray-900 to-newtheme-purple text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <div className="mb-4 inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-white font-medium">Business Challenges</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Common Business Challenges We Solve
                </h2>
                <p className="text-xl opacity-80 max-w-3xl mx-auto">
                  Real problems require real solutions. Here's how we help.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {challenges.map((challenge, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-2xl">{challenge.icon}</div>
                      <h3 className="font-bold text-lg">{challenge.title}</h3>
                    </div>
                    <p className="text-white/70 mb-6">{challenge.description}</p>
                    <Link to="/book-consultation">
                      <Button className="bg-white hover:bg-gray-100 text-newtheme-purple w-full">
                        Book a Consultation
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Why IQX - Simple Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <div className="mb-4 inline-block bg-blue-100 px-3 py-1 rounded-full">
                  <span className="text-blue-700 font-medium">Why Choose Us</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-newtheme-purple mb-6">
                  Why IQX?
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {whyIQXReasons.map((reason, index) => (
                  <div key={index} className="flex flex-col items-center text-center p-6">
                    <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4 text-xl">
                      {reason.icon}
                    </div>
                    <p className="text-gray-700 font-medium">{reason.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Lead Form Section */}
        <LeadFormSection />
        
        {/* Final CTA */}
        <section className="py-16 bg-gradient-to-br from-newtheme-purple to-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to redefine your business processes?
              </h2>
              <p className="text-xl opacity-80 mb-8">
                Let's build smarter solutions together with Power Apps.
              </p>
              <Link to="/book-consultation">
                <Button className="bg-white hover:bg-gray-100 text-newtheme-purple px-8 py-6 rounded-lg text-lg">
                  Book a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
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

// Features
const powerAppsFeatures = [
  {
    title: "Accelerate Productivity",
    description: "Build apps without needing a pro developer. Collaborate across departments to automate tasks, build custom entities, and even create chatbots."
  },
  {
    title: "Build with Ease",
    description: "The Power Platform requires little to no code. With free developer tools and intuitive interfaces, creating your app is faster and easier than ever."
  },
  {
    title: "Gain Control & Stay Compliant",
    description: "Power Apps' centralized admin center gives you full governance—control data access, enforce security policies, and manage permissions with ease."
  }
];

// Key Components
const componentItems = [
  {
    icon: "💡",
    title: "Canvas Apps",
    description: "Start from a blank canvas and design exactly what your users need. Drag-and-drop simplicity meets total flexibility across connected data sources."
  },
  {
    icon: "📊",
    title: "Model-Driven Apps",
    description: "Use your existing data to generate responsive, data-first applications. The UI comes prebuilt and adapts across devices—perfect for enterprise needs."
  },
  {
    icon: "🌐",
    title: "Portals",
    description: "Build external-facing websites where users and partners can securely sign in, view, and interact with your data."
  },
  {
    icon: "🔐",
    title: "Microsoft Dataverse",
    description: "Securely store and manage data used by your apps—natively integrated with Microsoft 365 and built for scale."
  }
];

// Services
const serviceItems = [
  {
    title: "🔧 Custom Application Development",
    description: "Apps designed around your business. Whether it's automating task flows or gathering real-time data insights, we craft high-impact, purpose-built apps."
  },
  {
    title: "🔗 External System Integration",
    description: "Unify your Microsoft stack and connect with third-party tools to create a seamless digital experience for users and teams."
  },
  {
    title: "📱 Mobile-First App Development",
    description: "Empower your workforce with responsive apps that work flawlessly across smartphones and tablets—on the road, at home, or in the office."
  },
  {
    title: "🔁 Workflow Automation",
    description: "We consult with your team to map processes, identify inefficiencies, and build workflows that drive speed and precision."
  },
  {
    title: "🧩 Canvas App Development",
    description: "From interactive forms to dynamic dashboards, we design user-centric Canvas apps that are intuitive, effective, and on-brand."
  },
  {
    title: "📂 SharePoint Integration",
    description: "We build Power Apps that plug directly into SharePoint lists and libraries—boosting collaboration and enabling smarter workflows."
  },
  {
    title: "🛠️ Support & Maintenance",
    description: "Our commitment doesn't end at launch. We provide ongoing support and proactive maintenance to keep your Power Apps ecosystem running smoothly."
  }
];

// Challenges
const challenges = [
  {
    icon: "⚙️",
    title: "Manual Processes Draining Time?",
    description: "Transform outdated workflows into automated systems that save time and free up resources.",
    buttonText: "Book a Consultation"
  },
  {
    icon: "🔁",
    title: "Repetitive Tasks Slowing Productivity?",
    description: "Let us build smart solutions that shift your team's focus from admin to impact.",
    buttonText: "Book a Consultation"
  },
  {
    icon: "🧑‍💼",
    title: "Complex Onboarding Hurting Efficiency?",
    description: "Streamline employee onboarding with customized apps that centralize paperwork, training, and tasks.",
    buttonText: "Book a Consultation"
  }
];

// Why IQX
const whyIQXReasons = [
  {
    icon: "🔐",
    description: "Trusted by leaders across industries"
  },
  {
    icon: "⚡",
    description: "Fast, low-code development with real results"
  },
  {
    icon: "💼",
    description: "Deep Microsoft ecosystem expertise"
  },
  {
    icon: "🎯",
    description: "Tailored, end-to-end delivery—from strategy to support"
  }
];

export default PowerApps;
