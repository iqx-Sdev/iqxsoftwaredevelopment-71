
import { CheckCircle2 } from "lucide-react";

const StatsSection = () => {
  return (
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
  );
};

export default StatsSection;
