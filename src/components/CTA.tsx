
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-newtheme-purple mb-6">
            Ready to transform your business with AI?
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8 text-lg">
            Let's discuss how our AI solutions can address your specific business challenges.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/book-consultation">
              <Button className="bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium">
                Book a Consultation
                <FontAwesomeIcon icon={faArrowRight} className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/book-consultation">
              <Button variant="outline" className="border-newtheme-purple text-newtheme-purple hover:bg-newtheme-purple/10 font-medium">
                Book a Consultation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
