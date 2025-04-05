
import { MessageCircle, MessagesSquare, Clock } from "lucide-react";

const ProblemSection = () => {
  return (
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
  );
};

export default ProblemSection;
