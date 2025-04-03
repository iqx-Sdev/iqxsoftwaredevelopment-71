
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-maverick-navy flex items-center">
              <span className="bg-maverick-peach text-maverick-navy px-2 py-1 rounded mr-2">AI</span>
              MAVERICK
            </span>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="nav-link text-gray-700 hover:text-maverick-navy">Services</a>
            <a href="#benefits" className="nav-link text-gray-700 hover:text-maverick-navy">Benefits</a>
            <a href="#team" className="nav-link text-gray-700 hover:text-maverick-navy">Team</a>
            <Button className="bg-maverick-navy hover:bg-maverick-navy/90">Contact Us</Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-2">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#services"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-maverick-navy hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#benefits"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-maverick-navy hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Benefits
            </a>
            <a
              href="#team"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-maverick-navy hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Team
            </a>
            <div className="px-3 py-2">
              <Button className="w-full bg-maverick-navy hover:bg-maverick-navy/90">
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
