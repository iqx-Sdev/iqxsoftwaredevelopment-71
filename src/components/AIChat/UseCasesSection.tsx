
import { MessageCircle, DollarSign, Zap, MessagesSquare } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const UseCasesSection = () => {
  return (
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
  );
};

export default UseCasesSection;
