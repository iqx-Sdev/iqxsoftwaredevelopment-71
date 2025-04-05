
import { MessageCircle, DollarSign, Link, Bot, Database, MessagesSquare, Clock } from "lucide-react";

const ProductSuiteSection = () => {
  return (
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
  );
};

export default ProductSuiteSection;
