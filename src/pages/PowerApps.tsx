
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Checkbox } from "@/components/ui/checkbox";

const PowerApps = () => {
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
              Automate What Matters. Empower What's Next.
            </h1>
            <p className="text-xl text-gray-100 mb-6">
              Struggling with manual, repetitive tasks? Frustrated by long onboarding, disconnected systems, or inefficient workflows?
            </p>
            <p className="text-lg text-gray-200 mb-8">
              Power Apps is your gateway to automation, agility, and control.
              At IQX, we help organizations like yours turn outdated processes into efficient, customized digital experiences—with rapid development and low-code tools built on the trusted Microsoft ecosystem.
            </p>
            <Button className="bg-white hover:bg-gray-100 text-newtheme-purple px-6 py-3 rounded-lg text-lg">
              Let's build the future of your business—today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Why Use Power Apps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-newtheme-purple mb-4">Why You Should Be Using Power Apps</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Power Apps is more than just an app builder—it's a low-code powerhouse within the Microsoft Power Platform. 
              It empowers business users and IT teams to solve real problems with apps that are easy to create, deploy, and scale.
            </p>
            <div className="mt-6">
              <p className="text-lg font-semibold text-green-600">
                ✅ 86% of Fortune 500 companies use Power Apps to drive efficiency and innovation across departments.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {powerAppsFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-newtheme-purple mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Key Components */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-newtheme-purple mb-4">4 Key Components of Power Apps</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {componentItems.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg h-full">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-newtheme-purple mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Services We Offer */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-newtheme-purple mb-4">What Can IQX Do for You?</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              At IQX, we specialize in creating custom Power Apps that remove friction, automate workflows, and put data to work. 
              From ideation to deployment, we help you streamline operations and unlock new possibilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceItems.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-newtheme-purple">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Common Business Challenges */}
      <section className="py-20 bg-gradient-to-br from-newtheme-purple to-newtheme-darkgray text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Common Business Challenges We Solve</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                <div className="text-2xl mb-4">{challenge.icon}</div>
                <h3 className="text-xl font-bold mb-4">{challenge.title}</h3>
                <p className="text-gray-300 mb-6">{challenge.description}</p>
                <Button className="bg-white hover:bg-gray-100 text-newtheme-purple w-full">
                  {challenge.buttonText}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why IQX */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-newtheme-purple mb-4">Why IQX?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyIQXReasons.map((reason, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6">
                <div className="text-3xl mb-4">{reason.icon}</div>
                <p className="text-gray-600 font-medium">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Client Spotlight */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-newtheme-purple mb-4">Client Spotlight</h2>
            <p className="text-gray-600 text-lg">
              See how Iqx Solutions leveraged our Power Apps expertise to unlock agility and operational excellence.
            </p>
            <p className="text-gray-600 text-lg mt-2">
              Join the businesses transforming with IQX.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Placeholder for client success stories - can be updated later with real case studies */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="h-40 bg-gray-200 rounded-md mb-4"></div>
              <h3 className="text-xl font-bold text-newtheme-purple mb-2">Client Success Story</h3>
              <p className="text-gray-600">Coming soon...</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="h-40 bg-gray-200 rounded-md mb-4"></div>
              <h3 className="text-xl font-bold text-newtheme-purple mb-2">Client Success Story</h3>
              <p className="text-gray-600">Coming soon...</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="h-40 bg-gray-200 rounded-md mb-4"></div>
              <h3 className="text-xl font-bold text-newtheme-purple mb-2">Client Success Story</h3>
              <p className="text-gray-600">Coming soon...</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-newtheme-purple to-newtheme-darkgray rounded-2xl shadow-2xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let's Build Smarter, Together
            </h2>
            <p className="text-lg max-w-3xl mx-auto mb-8">
              You're not just building apps—you're building a smarter way of working.
              Partner with IQX to bring your Power Apps vision to life.
            </p>
            <Button className="bg-white hover:bg-gray-100 text-newtheme-purple px-6 py-3 rounded-lg text-lg">
              Schedule a Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
      
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
    buttonText: "Start automating now"
  },
  {
    icon: "🔁",
    title: "Repetitive Tasks Slowing Productivity?",
    description: "Let us build smart solutions that shift your team's focus from admin to impact.",
    buttonText: "Talk to an expert"
  },
  {
    icon: "🧑‍💼",
    title: "Complex Onboarding Hurting Efficiency?",
    description: "Streamline employee onboarding with customized apps that centralize paperwork, training, and tasks.",
    buttonText: "Request a demo"
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
