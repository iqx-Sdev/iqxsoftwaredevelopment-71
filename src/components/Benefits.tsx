
import { Clock, DollarSign, Trophy } from "lucide-react";

const Benefits = () => {
  return (
    <section id="benefits" className="bg-gradient-to-br from-newtheme-purple to-newtheme-darkgray py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Why Choose Us</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Our AI solutions deliver real business value with measurable results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border border-white/5">
            <div className="bg-pink-400/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Clock className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">AI POC in 2–8 weeks</h3>
            <p className="text-gray-300">
              Validate ideas with high-quality AI prototypes and proofs of concepts delivered in 2–8 weeks.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border border-white/5">
            <div className="bg-blue-400/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Trophy className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Value from day 1</h3>
            <p className="text-gray-300">
              Backed by discovery and architecture support, our experts deliver value from day 1.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border border-white/5">
            <div className="bg-cyan-400/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <DollarSign className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">2X more cost-efficient</h3>
            <p className="text-gray-300">
              Reduce engineering costs with AI-driven engineering teams and get 2X more value on your budget.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
