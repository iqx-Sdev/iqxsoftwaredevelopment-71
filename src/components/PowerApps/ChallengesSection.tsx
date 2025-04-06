
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Challenge {
  icon: string;
  title: string;
  description: string;
  buttonText: string;
}

interface ChallengesSectionProps {
  challenges: Challenge[];
}

const ChallengesSection: React.FC<ChallengesSectionProps> = ({ challenges }) => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 to-newtheme-purple text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="mb-4 inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
              <span className="text-white font-medium">Business Challenges</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Common Business Challenges We Solve
            </h2>
            <p className="text-xl opacity-80 max-w-3xl mx-auto">
              Real problems require real solutions. Here's how we help.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-2xl">{challenge.icon}</div>
                  <h3 className="font-bold text-lg">{challenge.title}</h3>
                </div>
                <p className="text-white/70 mb-6">{challenge.description}</p>
                <Link to="/book-consultation">
                  <Button className="bg-white hover:bg-gray-100 text-newtheme-purple w-full">
                    Book a Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
