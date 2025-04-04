
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-newtheme-darkgray shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="flex items-center">
              <img 
                src="/lovable-uploads/37f1ae05-8efa-47f2-a0c2-822a886c3534.png" 
                alt="IQ Business Logo" 
                className="h-10" 
              />
            </span>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="nav-link text-white hover:text-pink-400">Services</a>
            <a href="#benefits" className="nav-link text-white hover:text-pink-400">Benefits</a>
            <a href="#team" className="nav-link text-white hover:text-pink-400">Team</a>
            <Button className="bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white">
              Contact Us
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-white hover:text-pink-400 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-newtheme-darkgray border-t border-gray-700 py-2">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#services"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-pink-400 hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#benefits"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-pink-400 hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Benefits
            </a>
            <a
              href="#team"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-pink-400 hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Team
            </a>
            <div className="px-3 py-2">
              <Button className="w-full bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
