
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-maverick-peach to-maverick-teal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-maverick-navy mb-6">
            Ready to transform your business with AI?
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8 text-lg">
            Let's discuss how our AI solutions can address your specific business challenges.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-maverick-navy hover:bg-maverick-navy/90 text-white px-6 py-3 rounded-lg text-lg">
              Start Your AI Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-maverick-navy text-maverick-navy hover:bg-maverick-navy/10">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
