
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-newtheme-darkgray shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/53caadcf-63a2-4dbd-a5dc-5e78b808af47.png" 
                alt="IQX Logo" 
                className="h-10" 
              />
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/power-apps" className="nav-link text-white hover:text-pink-400 px-1">Power Apps</Link>
            <Link to="/agentic-ai" className="nav-link text-white hover:text-pink-400 px-1">Agentic AI</Link>
            <Link to="/agile-teams" className="nav-link text-white hover:text-pink-400 px-1">Agile Teams</Link>
            <Link to="/web-apps" className="nav-link text-white hover:text-pink-400 px-1">Web Apps</Link>
            <Link to="/shopify" className="nav-link text-white hover:text-pink-400 px-1">Shopify</Link>
            <Link to="/ai-chat" className="nav-link text-white hover:text-pink-400 px-1">AI Chat</Link>
            <Link to="/contact">
              <Button className="bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white ml-2">
                Contact Us
              </Button>
            </Link>
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
            <Link
              to="/power-apps"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-pink-400 hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Power Apps
            </Link>
            <Link
              to="/agentic-ai"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-pink-400 hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Agentic AI
            </Link>
            <Link
              to="/agile-teams"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-pink-400 hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Agile Teams
            </Link>
            <Link
              to="/web-apps"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-pink-400 hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Web Apps
            </Link>
            <Link
              to="/shopify"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-pink-400 hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Shopify
            </Link>
            <Link
              to="/ai-chat"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-pink-400 hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              AI Chat
            </Link>
            <div className="px-3 py-2">
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
