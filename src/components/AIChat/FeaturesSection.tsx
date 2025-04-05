
import { MessageCircle, Zap, Clock, Code2, MessagesSquare, Database, KeyRound } from "lucide-react";

const FeaturesSection = () => {
  return (
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
  );
};

export default FeaturesSection;
