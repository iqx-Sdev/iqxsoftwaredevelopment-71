
import { Clock, DollarSign, Trophy } from "lucide-react";

const Benefits = () => {
  return (
    <section id="benefits" className="bg-gradient-to-br from-maverick-cream to-maverick-peach/20 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-maverick-navy mb-4">Why Choose Us</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our AI solutions deliver real business value with measurable results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
            <div className="bg-maverick-peach/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Clock className="h-8 w-8 text-maverick-navy" />
            </div>
            <h3 className="text-xl font-bold text-maverick-navy mb-3">AI POC in 2–8 weeks</h3>
            <p className="text-gray-600">
              Validate ideas with high-quality AI prototypes and proofs of concepts delivered in 2–8 weeks.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
            <div className="bg-maverick-teal/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Trophy className="h-8 w-8 text-maverick-navy" />
            </div>
            <h3 className="text-xl font-bold text-maverick-navy mb-3">Value from day 1</h3>
            <p className="text-gray-600">
              Backed by discovery and architecture support, our experts deliver value from day 1.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
            <div className="bg-maverick-rose/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <DollarSign className="h-8 w-8 text-maverick-navy" />
            </div>
            <h3 className="text-xl font-bold text-maverick-navy mb-3">2X more cost-efficient</h3>
            <p className="text-gray-600">
              Reduce engineering costs with AI-driven engineering teams and get 2X more value on your budget.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
