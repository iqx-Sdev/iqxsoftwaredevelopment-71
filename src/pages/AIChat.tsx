import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, MessageCircle, Zap, Clock, Code2, KeyRound, Database, Target, Globe, BookOpen, DollarSign, Link, Bot, MessagesSquare } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const AIChat = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-newtheme-purple to-blue-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full mb-5">
                <span className="text-white font-medium">AI-Powered Solutions</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                AI Chatbot & WhatsApp Integration
              </h1>
              <p className="text-xl text-white/80 mb-8">
                Turn WhatsApp into a smart, real-time customer engagement channel.
              </p>
              <Button className="bg-white hover:bg-gray-100 text-newtheme-purple px-8 py-6 rounded-lg text-lg">
                Request a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-newtheme-purple mb-6">
                  Want to Chat?
                </h2>
                <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                  Unlock real business impact with AI-powered WhatsApp automation:
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <div className="flex items-center gap-4 mb-4">
                    <CheckCircle2 className="h-6 w-6 text-green-500" />
                    <span className="font-bold text-2xl text-newtheme-purple">160%</span>
                  </div>
                  <p className="text-gray-600">Increase in sales with AI-powered conversations</p>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <div className="flex items-center gap-4 mb-4">
                    <CheckCircle2 className="h-6 w-6 text-green-500" />
                    <span className="font-bold text-2xl text-newtheme-purple">73%</span>
                  </div>
                  <p className="text-gray-600">Reduction in customer service costs</p>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <div className="flex items-center gap-4 mb-4">
                    <CheckCircle2 className="h-6 w-6 text-green-500" />
                    <span className="font-bold text-2xl text-newtheme-purple">40%</span>
                  </div>
                  <p className="text-gray-600">Boost in overall customer engagement</p>
                </div>
              </div>
              
              <p className="text-center mt-10 text-lg text-gray-600">
                Let your AI chatbot handle the heavy lifting — while you focus on growth.
              </p>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="md:w-1/2">
                  <div className="mb-4 inline-block bg-green-100 px-3 py-1 rounded-full">
                    <span className="text-green-700 font-medium">The Problem</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-newtheme-purple mb-6">
                    Your customers are already on WhatsApp. Are you?
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Traditional support channels — email, web chat, helpdesks — are slow, disconnected, and impersonal. Customers expect fast, conversational service on the platforms they use every day.
                  </p>
                  <p className="text-gray-600">
                    WhatsApp is the most popular messaging app in the world, but without the right tools, it's just another inbox.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center">
                        <MessageCircle className="h-6 w-6 text-red-500" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800">Slow Response Times</h3>
                        <p className="text-gray-600 text-sm">Customers wait hours or days for replies</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 mb-6">
                      <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center">
                        <MessagesSquare className="h-6 w-6 text-red-500" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800">Disconnected Systems</h3>
                        <p className="text-gray-600 text-sm">No integration with your business tools</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center">
                        <Clock className="h-6 w-6 text-red-500" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800">Limited Availability</h3>
                        <p className="text-gray-600 text-sm">No 24/7 support without expensive staffing</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="md:w-1/2 order-2 md:order-1">
                  <div className="rounded-xl shadow-lg overflow-hidden">
                    <img 
                      src="/lovable-uploads/6b99bd87-02b1-4279-9ad8-46ed20ba8d86.png"
                      alt="Healthcare WhatsApp Chatbot Interface" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <div className="md:w-1/2 order-1 md:order-2">
                  <div className="mb-4 inline-block bg-green-100 px-3 py-1 rounded-full">
                    <span className="text-green-700 font-medium">Our Solution</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-newtheme-purple mb-6">
                    Smart, scalable customer engagement. Built for WhatsApp.
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Stubber by IQX transforms WhatsApp into a powerful, always-on channel for support, sales, and automation. Whether you're using AI chatbots, live agents, or both — you'll launch in minutes, not days, with our low-code platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <div className="mb-4 inline-block bg-purple-100 px-3 py-1 rounded-full">
                  <span className="text-purple-700 font-medium">Key Features</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-newtheme-purple mb-6">
                  Everything you need for AI-powered conversations
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <MessageCircle className="h-6 w-6 text-blue-500" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Instant Support</h3>
                  <p className="text-gray-600 text-sm">Blend AI and human agents for fast, seamless conversations</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-purple-500" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Dynamic Conversations</h3>
                  <p className="text-gray-600 text-sm">Build interactive flows that engage and convert</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-indigo-500" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">24/7 Availability</h3>
                  <p className="text-gray-600 text-sm">Always on, across time zones and customer needs</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <Code2 className="h-6 w-6 text-green-500" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Low-Code Setup</h3>
                  <p className="text-gray-600 text-sm">Go live quickly with intuitive design tools</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                    <MessagesSquare className="h-6 w-6 text-orange-500" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">PBX Integration</h3>
                  <p className="text-gray-600 text-sm">Connect phone systems for unified communications</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center mb-4">
                    <Database className="h-6 w-6 text-yellow-500" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Knowledge Library</h3>
                  <p className="text-gray-600 text-sm">Auto-fetch answers from your content and docs</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                    <MessageCircle className="h-6 w-6 text-red-500" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Custom Templates</h3>
                  <p className="text-gray-600 text-sm">Use pre-approved messages for key scenarios</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center mb-4">
                    <KeyRound className="h-6 w-6 text-teal-500" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">GDPR-Compliant</h3>
                  <p className="text-gray-600 text-sm">Fully verified, privacy-first WhatsApp experience</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why AI Agents Section */}
        <section className="py-16 bg-gradient-to-br from-gray-900 to-newtheme-purple text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <div className="mb-4 inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-white font-medium">Why Choose AI Agents</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why AI Agents on WhatsApp?
                </h2>
                <p className="text-xl opacity-80 max-w-3xl mx-auto">
                  From reactive support to proactive, intelligent engagement
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="h-5 w-5 text-cyan-300" />
                    <h3 className="font-bold text-lg">Hyper-personalized conversations</h3>
                  </div>
                  <p className="text-white/70">Scale personalized service without increasing headcount</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <Globe className="h-5 w-5 text-cyan-300" />
                    <h3 className="font-bold text-lg">24/7 service worldwide</h3>
                  </div>
                  <p className="text-white/70">Consistent service, anytime, anywhere in the world</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <BookOpen className="h-5 w-5 text-cyan-300" />
                    <h3 className="font-bold text-lg">Continuously learns</h3>
                  </div>
                  <p className="text-white/70">AI that adapts and improves with every conversation</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <DollarSign className="h-5 w-5 text-cyan-300" />
                    <h3 className="font-bold text-lg">Scales efficiently</h3>
                  </div>
                  <p className="text-white/70">Handle more volume without proportional cost increases</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <Database className="h-5 w-5 text-cyan-300" />
                    <h3 className="font-bold text-lg">Data-driven insights</h3>
                  </div>
                  <p className="text-white/70">Real-time conversation analytics for better decisions</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <Link className="h-5 w-5 text-cyan-300" />
                    <h3 className="font-bold text-lg">Seamless integration</h3>
                  </div>
                  <p className="text-white/70">Connects with CRMs and back-end systems</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section with new visuals */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <div className="mb-4 inline-block bg-green-100 px-3 py-1 rounded-full">
                  <span className="text-green-700 font-medium">Use Cases</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-newtheme-purple mb-6">
                  More than just customer support
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <MessageCircle className="h-5 w-5 text-blue-500" />
                      <h3 className="font-bold text-xl text-gray-800">Customer Support</h3>
                    </div>
                    <p className="text-gray-600 mb-6">
                      Automate FAQs, track issues, and intelligently escalate when human support is needed.
                    </p>
                    <div className="rounded-lg overflow-hidden">
                      <img 
                        src="/lovable-uploads/eed4baee-2fb7-456d-932f-c9c9e93e8174.png" 
                        alt="AI Conversation Flow Designer"
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <DollarSign className="h-5 w-5 text-green-500" />
                      <h3 className="font-bold text-xl text-gray-800">Sales Automation</h3>
                    </div>
                    <p className="text-gray-600 mb-6">
                      Qualify leads, share personalized offers, and close deals directly in chat.
                    </p>
                    <div className="rounded-lg overflow-hidden">
                      <img 
                        src="/lovable-uploads/a3d391a9-d5e4-4f9a-85c2-6e143cbef900.png" 
                        alt="E-commerce WhatsApp Bot Interface"
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Zap className="h-5 w-5 text-purple-500" />
                      Internal Workflows
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Manage approvals, alerts, and updates via WhatsApp for your team.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <MessagesSquare className="h-5 w-5 text-orange-500" />
                      Omnichannel Engagement
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Consolidate all communication channels under one AI-powered system.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Product Suite - Adding Visual Showcase */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <div className="mb-4 inline-block bg-blue-100 px-3 py-1 rounded-full">
                  <span className="text-blue-700 font-medium">Product Suite</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-newtheme-purple mb-6">
                  Supercharge your WhatsApp strategy with our AI toolkit
                </h2>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8 mb-12">
                <div className="md:w-1/2">
                  <div className="bg-gray-50 p-6 rounded-xl shadow-sm h-full">
                    <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mb-4">
                      <MessageCircle className="h-6 w-6 text-blue-500" />
                    </div>
                    <h3 className="font-bold text-xl mb-4 text-gray-800">AI Conversation Builder</h3>
                    <p className="text-gray-600 mb-6">Create complex, multi-path conversation flows with our visual designer. Enable your chatbots to handle various user intents and provide personalized responses.</p>
                    
                    <div className="rounded-lg overflow-hidden shadow-md">
                      <img 
                        src="/lovable-uploads/eed4baee-2fb7-456d-932f-c9c9e93e8174.png" 
                        alt="AI Conversation Flow Designer Interface" 
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="md:w-1/2">
                  <div className="grid grid-cols-1 gap-6 h-full">
                    <div className="flex gap-4 bg-gray-50 p-5 rounded-xl shadow-sm">
                      <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                        <DollarSign className="h-6 w-6 text-green-500" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl mb-2 text-gray-800">AI Sales Agent</h3>
                        <p className="text-gray-600">Drive intelligent, high-converting sales conversations that qualify leads and close deals.</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 bg-gray-50 p-5 rounded-xl shadow-sm">
                      <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-1">
                        <Link className="h-6 w-6 text-purple-500" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl mb-2 text-gray-800">API Automation</h3>
                        <p className="text-gray-600">Seamlessly integrate and automate backend processes with your existing tech stack.</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 bg-gray-50 p-5 rounded-xl shadow-sm">
                      <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-1">
                        <Bot className="h-6 w-6 text-orange-500" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl mb-2 text-gray-800">Virtual Worker</h3>
                        <p className="text-gray-600">Replicate human tasks across digital systems for streamlined operations.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <Database className="h-6 w-6 text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-gray-800">Knowledge Library</h3>
                    <p className="text-gray-600">Centralized content hub for AI responses, ensuring consistent and accurate information.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <MessagesSquare className="h-6 w-6 text-teal-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-gray-800">Omnichannel Comms</h3>
                    <p className="text-gray-600">Unified experiences across WhatsApp, chat, voice, and more communication channels.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="h-6 w-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-gray-800">24/7 Availability</h3>
                    <p className="text-gray-600">Always-on service across time zones with intelligent conversation handling.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="mb-6">
                <svg className="h-12 w-12 text-gray-300 mx-auto" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.855-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
              <p className="text-xl md:text-2xl text-gray-700 mb-8">
                "Stubber's WhatsApp integration completely transformed how we handle support — faster responses, happier customers, and no missed opportunities."
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-gradient-to-br from-newtheme-purple to-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to redefine your customer experience?
              </h2>
              <p className="text-xl opacity-80 mb-8">
                Engage smarter. Convert faster. Support better — all through WhatsApp.
              </p>
              <Button className="bg-white hover:bg-gray-100 text-newtheme-purple px-8 py-6 rounded-lg text-lg">
                Request a Demo
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

export default AIChat;
