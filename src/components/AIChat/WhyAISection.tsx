
import { Target, Globe, BookOpen, DollarSign, Database, Link } from "lucide-react";

const WhyAISection = () => {
  return (
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
  );
};

export default WhyAISection;
