
import { Github, Mail, Linkedin } from "lucide-react";

const Team = () => {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-maverick-navy mb-4">Meet the AI Bomb Squad</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our team of AI specialists is ready to transform your business with cutting-edge solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Team Member 1 */}
          <div className="character-card group">
            <div className="mb-6 relative h-72 overflow-hidden rounded-lg">
              <img 
                src="/lovable-uploads/91f9a8d9-c7f0-4b15-ac36-b1f2ee41c021.png" 
                alt="Sam - AI Engineer" 
                className="w-full h-full object-contain transition-transform group-hover:scale-105 duration-300"
              />
            </div>
            <h3 className="text-xl font-bold text-maverick-navy">Sam</h3>
            <p className="text-gray-600 mb-4">Lead AI Engineer</p>
            <p className="text-gray-700 mb-4">
              Our AI architecture specialist with expertise in developing custom AI solutions and workflows.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="p-2 bg-maverick-navy text-white rounded-full hover:bg-maverick-navy/80 transition-colors">
                <Github size={18} />
              </a>
              <a href="#" className="p-2 bg-maverick-navy text-white rounded-full hover:bg-maverick-navy/80 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="p-2 bg-maverick-navy text-white rounded-full hover:bg-maverick-navy/80 transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>
          
          {/* Team Member 2 */}
          <div className="character-card group">
            <div className="mb-6 relative h-72 overflow-hidden rounded-lg">
              <img 
                src="/lovable-uploads/1ae48856-a2f2-4726-884c-0b6d75499f8c.png" 
                alt="Morgan - Security Specialist" 
                className="w-full h-full object-contain transition-transform group-hover:scale-105 duration-300"
              />
            </div>
            <h3 className="text-xl font-bold text-maverick-navy">Morgan</h3>
            <p className="text-gray-600 mb-4">AI Security Specialist</p>
            <p className="text-gray-700 mb-4">
              Ensuring all our AI solutions are secure, compliant, and protected against potential threats.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="p-2 bg-maverick-navy text-white rounded-full hover:bg-maverick-navy/80 transition-colors">
                <Github size={18} />
              </a>
              <a href="#" className="p-2 bg-maverick-navy text-white rounded-full hover:bg-maverick-navy/80 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="p-2 bg-maverick-navy text-white rounded-full hover:bg-maverick-navy/80 transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>
          
          {/* Team Member 3 */}
          <div className="character-card group">
            <div className="mb-6 relative h-72 overflow-hidden rounded-lg">
              <img 
                src="/lovable-uploads/7bbbed26-c088-4bca-ac2a-6caaad2f929c.png" 
                alt="Jordan - AI Innovation Lead" 
                className="w-full h-full object-contain transition-transform group-hover:scale-105 duration-300"
              />
            </div>
            <h3 className="text-xl font-bold text-maverick-navy">Jordan</h3>
            <p className="text-gray-600 mb-4">AI Innovation Lead</p>
            <p className="text-gray-700 mb-4">
              Exploring cutting-edge AI technologies to create innovative solutions for complex business challenges.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="p-2 bg-maverick-navy text-white rounded-full hover:bg-maverick-navy/80 transition-colors">
                <Github size={18} />
              </a>
              <a href="#" className="p-2 bg-maverick-navy text-white rounded-full hover:bg-maverick-navy/80 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="p-2 bg-maverick-navy text-white rounded-full hover:bg-maverick-navy/80 transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
