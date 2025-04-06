
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-maverick-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/53caadcf-63a2-4dbd-a5dc-5e78b808af47.png" 
                alt="IQX Logo" 
                className="h-10" 
              />
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              High-speed, low-risk AI prototyping and development for businesses ready 
              to harness the power of artificial intelligence.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/iqbusinessgroup/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
              <a href="https://www.instagram.com/iqbusiness_sa/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a href="https://www.linkedin.com/company/iq-business/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
              <a href="https://x.com/iqbusiness?s=21&t=lvqA4MpAGujtHr4bz4NoDQ" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
              <a href="https://www.youtube.com/@iqbusiness_sa" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <FontAwesomeIcon icon={faYoutube} size="lg" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FontAwesomeIcon icon={faEnvelope} size="lg" />
              </a>
            </div>
          </div>
          
          <div>
            <Link to="/contact" className="px-6 py-3 bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white font-medium rounded-md shadow-md transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} IQX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
