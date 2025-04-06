
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const HeroSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-newtheme-purple to-blue-600">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full mb-5">
            <span className="text-white font-medium">AI-Powered Solutions</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            AI Chatbot & WhatsApp Integration
          </h1>
          <p className="text-xl text-white/80 mb-8">
            Turn WhatsApp into a smart, real-time customer engagement channel.
          </p>
          <Button className="bg-white hover:bg-gray-100 text-newtheme-purple px-8 py-6 rounded-lg text-lg font-medium">
            Request a Demo
            <FontAwesomeIcon icon={faArrowRight} className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
