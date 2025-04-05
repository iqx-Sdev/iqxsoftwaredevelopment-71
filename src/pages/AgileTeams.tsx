import { useEffect } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import LeadForm from "@/components/LeadForm";

const AgileTeams = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        {/* Hero Section */}
        <div className="py-20 bg-gradient-to-br from-purple-700 to-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Agile Development Teams by IQX
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                High-performance, cross-functional squads built to ship your digital product faster.
              </p>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg mb-8 italic">
                <p className="text-lg">
                  "At IQX, we don't just offer developers—we deliver fully integrated agile teams that think, build, and scale with your business. Led by engineering experts and powered by proven delivery frameworks, our squads work as an extension of your product vision."
                </p>
              </div>
              <Button className="bg-white text-purple-700 hover:bg-gray-100">
                Talk to Our Agile Team Experts <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Visual Section */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-purple-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Sprint Boards</h3>
                  <p className="text-gray-600">Visualize work progress and prioritize tasks effectively</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-purple-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Code Pushes</h3>
                  <p className="text-gray-600">Efficient code management and collaborative development</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-purple-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"></path>
                      <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Collaborative Whiteboarding</h3>
                  <p className="text-gray-600">Capture ideas and plan solutions in real-time</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-purple-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Product Launches</h3>
                  <p className="text-gray-600">Successfully deploy and celebrate product milestones</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Lead Form Section */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              <div className="lg:col-span-2 flex flex-col justify-center">
                <div className="mb-8">
                  <span className="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-800 font-semibold text-sm mb-4">Get Started Now</span>
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">Build Your Agile Team Today</h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Fill out our team staffing form and get custom recommendations for your project from our experts.
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
                  title="Get Your Free Agile Team Consultation"
                  subtitle="Fill out the form below and one of our team staffing experts will get back to you within 24 hours."
                  serviceName="agile team staffing services"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Product Section */}
        <div className="py-16 bg-gradient-to-br from-purple-700 to-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Your Product, Built by a Team That Gets It
              </h2>
              <p className="text-lg mb-8">
                From startups to enterprise builds, our agile teams are tailored to your roadmap. Whether you're building a new platform, scaling an existing app, or just need to move faster—we embed elite squads of engineers, designers, QA testers, and delivery leads directly into your workflow.
              </p>
              <p className="text-xl font-semibold text-center mb-8">
                With IQX, you get more than capacity—you get capability.
              </p>
              <div className="flex justify-center">
                <Button className="bg-white text-purple-700 hover:bg-gray-100">
                  Get Your Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Section */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">
              Why Choose IQX for Agile Teams?
            </h2>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-gray-700">Need a Dedicated Team That Feels In-House?</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-4">🔍</span>
                  <h4 className="text-xl font-semibold text-gray-800">Strategic UX + Dev from Day One</h4>
                </div>
                <p className="text-gray-700">
                  We don't just start coding. Our teams begin with product thinking—working with you on discovery, user flows, and a design-led approach to development.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-4">⚙️</span>
                  <h4 className="text-xl font-semibold text-gray-800">Built for Speed and Scale</h4>
                </div>
                <p className="text-gray-700">
                  From MVPs to global platforms, our delivery frameworks and CI/CD pipelines ensure fast iterations, real-time tracking, and scalable codebases.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-4">👥</span>
                  <h4 className="text-xl font-semibold text-gray-800">A Fully Embedded Team</h4>
                </div>
                <p className="text-gray-700">
                  Our squads include engineers, designers, QA, DevOps, and technical leads—all 100% focused on your mission. No freelancers. No fragmentation.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-4">🌍</span>
                  <h4 className="text-xl font-semibold text-gray-800">Timezone-Aligned, Globally Capable</h4>
                </div>
                <p className="text-gray-700">
                  With a strong talent base across Africa, our teams align with your working hours, ensuring seamless collaboration with Europe and North America.
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <Button variant="outline" className="border-purple-700 text-purple-700 hover:bg-purple-100">
                See Our Work <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Skills and Tech Section */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-800">
              What Skills and Tech Can You Hire Through IQX?
            </h2>
            <p className="text-xl font-semibold text-center mb-12 text-gray-700">
              Your Agile Team. Your Stack. Your Terms.
            </p>
            
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              <AccordionItem value="frontend">
                <AccordionTrigger className="text-lg font-medium">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">🖥️</span> Front-End
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  React, Angular, Vue.js, Next.js, Tailwind CSS, HTML5, SASS, Web Components, Flutter Web
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="backend">
                <AccordionTrigger className="text-lg font-medium">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">🧠</span> Back-End
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Node.js, .NET, Java, Python, PHP, Ruby on Rails, Go, Express.js, NestJS
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="databases">
                <AccordionTrigger className="text-lg font-medium">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">🗄️</span> Databases
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  PostgreSQL, MySQL, MongoDB, Redis, Firebase, DynamoDB, MSSQL, ElasticSearch
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="cloud">
                <AccordionTrigger className="text-lg font-medium">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">☁️</span> Cloud & DevOps
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  AWS, Azure, Google Cloud, Terraform, Kubernetes, Docker, Jenkins, GitHub Actions, Bitbucket Pipelines, Vercel
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="security">
                <AccordionTrigger className="text-lg font-medium">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">🔐</span> Security
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  OAuth2, JWT, SSO, OWASP Best Practices, Pen Testing, Secrets Management (Vault, AWS Secrets Manager)
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="api">
                <AccordionTrigger className="text-lg font-medium">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">🔗</span> API & Integrations
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  GraphQL, REST, Webhooks, Stripe, Twilio, SendGrid, Shopify, Salesforce, Zapier, ERP Systems
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="data">
                <AccordionTrigger className="text-lg font-medium">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">📊</span> Data & Analytics
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Power BI, Tableau, Superset, BigQuery, Snowflake, ETL pipelines, Python (Pandas, NumPy), R, Apache Kafka
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="cicd">
                <AccordionTrigger className="text-lg font-medium">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">🚀</span> CI/CD & Automation
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  CI/CD pipelines, Test automation (Selenium, Cypress, Playwright), Infrastructure as Code, Release orchestration
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
            <div className="flex justify-center mt-10">
              <Button variant="outline" className="border-purple-700 text-purple-700 hover:bg-purple-100">
                Learn More About Our Tech Stack <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Why Leasing Talent Section */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">
              Why Leasing Talent Is Smart
            </h2>
            <p className="text-lg text-center mb-12 max-w-3xl mx-auto text-gray-700">
              The IQX model gives you speed, flexibility, and peace of mind.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">⚡</span>
                  <h4 className="text-xl font-semibold text-gray-800">Find Talent Fast</h4>
                </div>
                <p className="text-gray-700">
                  We already have the perfect person in our pool of proven techies, ready to plug in and deliver from day one.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">💸</span>
                  <h4 className="text-xl font-semibold text-gray-800">No Recruitment Fees</h4>
                </div>
                <p className="text-gray-700">
                  You won't pay anything upfront. Your first bill only arrives after 30 days of delivery.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">📈</span>
                  <h4 className="text-xl font-semibold text-gray-800">Flexible Contracts</h4>
                </div>
                <p className="text-gray-700">
                  Scale up, down, or sideways—our agile contracts let you move as your product demands change.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">🔄</span>
                  <h4 className="text-xl font-semibold text-gray-800">We Plug Into Your Process</h4>
                </div>
                <p className="text-gray-700">
                  Each team member or Maven integrates directly into your systems, processes, and company culture.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">✅</span>
                  <h4 className="text-xl font-semibold text-gray-800">Vetted and Tested</h4>
                </div>
                <p className="text-gray-700">
                  Every IQX Maven is carefully screened, technically tested, and selected based on real capability—not just a resume.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">🛠️</span>
                  <h4 className="text-xl font-semibold text-gray-800">Our Person, Our Problem</h4>
                </div>
                <p className="text-gray-700">
                  From performance to sick leave, we handle all HR issues. Need a replacement? We'll do it fast and at no cost.
                </p>
              </div>
            </div>
            
            <div className="flex justify-center mt-10">
              <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white">
                Talk to a Talent Advisor <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Delivery Process Section */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">
              Our Agile Delivery Process
            </h2>
            <p className="text-xl font-semibold text-center mb-12 text-gray-700">
              From Sprint Zero to Shipping Fast
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="relative">
                <div className="bg-purple-100 p-6 rounded-lg">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-700 text-white rounded-full text-xl font-bold mb-4">1</div>
                  <h4 className="text-xl font-semibold mb-3 text-gray-800">
                    <span className="text-2xl mr-2">🧠</span> Discovery & Planning
                  </h4>
                  <p className="text-gray-700">
                    We align on goals, scope, tech stack, and ideal team shape—building a roadmap that de-risks delivery.
                  </p>
                </div>
                <div className="hidden lg:block absolute top-1/2 left-full w-8 h-1 bg-purple-300 -translate-y-1/2"></div>
              </div>
              
              <div className="relative">
                <div className="bg-purple-100 p-6 rounded-lg">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-700 text-white rounded-full text-xl font-bold mb-4">2</div>
                  <h4 className="text-xl font-semibold mb-3 text-gray-800">
                    <span className="text-2xl mr-2">🧩</span> Sprint Setup & Kickoff
                  </h4>
                  <p className="text-gray-700">
                    Initial architecture, toolchain setup, backlog creation, and team onboarding. You're up and running in weeks, not months.
                  </p>
                </div>
                <div className="hidden lg:block absolute top-1/2 left-full w-8 h-1 bg-purple-300 -translate-y-1/2"></div>
              </div>
              
              <div className="relative">
                <div className="bg-purple-100 p-6 rounded-lg">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-700 text-white rounded-full text-xl font-bold mb-4">3</div>
                  <h4 className="text-xl font-semibold mb-3 text-gray-800">
                    <span className="text-2xl mr-2">🎨</span> Design + Dev Collaboration
                  </h4>
                  <p className="text-gray-700">
                    Design, development, and QA in lockstep—rapid iteration and real-time communication through your preferred tools.
                  </p>
                </div>
                <div className="hidden lg:block absolute top-1/2 left-full w-8 h-1 bg-purple-300 -translate-y-1/2"></div>
              </div>
              
              <div>
                <div className="bg-purple-100 p-6 rounded-lg">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-700 text-white rounded-full text-xl font-bold mb-4">4</div>
                  <h4 className="text-xl font-semibold mb-3 text-gray-800">
                    <span className="text-2xl mr-2">🚀</span> Launch, Learn, Improve
                  </h4>
                  <p className="text-gray-700">
                    We test, measure, and optimize throughout. Your team scales as needed, and pivots quickly as priorities evolve.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-10">
              <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white">
                Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* More From IQX */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">
              More From IQX
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-3 text-gray-800">Product Strategy & Roadmapping</h4>
                <p className="text-gray-700">
                  We help define your product vision and translate it into sprints that deliver value early and often.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-3 text-gray-800">UX/UI Design</h4>
                <p className="text-gray-700">
                  Embedded designers who work directly with developers—ensuring cohesive, intuitive experiences.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-3 text-gray-800">API Integration & Platform Engineering</h4>
                <p className="text-gray-700">
                  Our teams connect your systems and services, building scalable, secure backend infrastructure.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-3 text-gray-800">Ongoing Retainers</h4>
                <p className="text-gray-700">
                  Whether you need long-term team support or post-launch evolution—we've got you covered.
                </p>
              </div>
            </div>
            
            <div className="flex justify-center mt-10">
              <Button variant="outline" className="border-purple-700 text-purple-700 hover:bg-purple-100">
                Explore All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="py-16 bg-gradient-to-br from-purple-700 to-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Let's Build a Team That Builds Your Product
              </h2>
              <p className="text-lg mb-12">
                Whether you're scaling fast, launching new features, or rebuilding legacy systems, IQX provides agile teams that think beyond code. You bring the vision—we'll bring the velocity.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button className="bg-white text-purple-700 hover:bg-gray-10
