
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  // Close mobile menu on navigation
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const menu = document.getElementById('mobile-menu');
      const menuButton = document.getElementById('menu-button');
      
      if (menu && menuButton && 
          !menu.contains(target) && 
          !menuButton.contains(target) && 
          isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const services = [
    { name: "Power Apps", path: "/power-apps" },
    { name: "Agentic AI", path: "/agentic-ai" },
    { name: "Agile Teams", path: "/agile-teams" },
    { name: "Shopify Design", path: "/shopify" },
    { name: "Web & App Development", path: "/web-apps" },
    { name: "AI Chat", path: "/ai-chat" },
  ];

  const activeLink = (path: string) => {
    return location.pathname === path ? "text-pink-400" : "";
  };

  return (
    <nav className="bg-newtheme-darkgray shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/53caadcf-63a2-4dbd-a5dc-5e78b808af47.png" 
                alt="IQX Logo" 
                className="h-10 w-auto" 
                width="40"
                height="40"
                loading="eager"
              />
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className={`nav-link text-white hover:text-pink-400 px-1 transition-colors ${location.pathname === '/' ? 'text-pink-400' : ''}`}
            >
              Home
            </Link>
            
            {/* Services Mega Menu */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-transparent text-white hover:text-pink-400">
                    Our Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-2 w-[500px] gap-3 p-4 bg-popover text-popover-foreground">
                      {services.map((service) => (
                        <Link 
                          key={service.path}
                          to={service.path}
                          className={`p-3 rounded-md hover:bg-accent flex items-center space-x-2 ${activeLink(service.path)}`}
                        >
                          <span className="text-sm font-medium">{service.name}</span>
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link 
              to="/case-studies" 
              className={`nav-link text-white hover:text-pink-400 px-1 transition-colors ${location.pathname === '/case-studies' ? 'text-pink-400' : ''}`}
            >
              Case Studies
            </Link>
            
            <Link to="/contact">
              <Button className="bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white">
                Contact Us
              </Button>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              id="menu-button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-white hover:text-pink-400 focus:outline-none"
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div id="mobile-menu" className="md:hidden bg-newtheme-darkgray border-t border-gray-700 py-2">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className={`block px-3 py-2 rounded-md text-base font-medium text-white hover:text-pink-400 hover:bg-gray-800 ${location.pathname === '/' ? 'bg-gray-800 text-pink-400' : ''}`}
            >
              Home
            </Link>
            
            {/* Mobile Services Dropdown */}
            <div className="block px-3 py-2">
              <div className="flex justify-between items-center text-white font-medium">
                <span>Our Services</span>
                <ChevronDown className="h-4 w-4" />
              </div>
              <div className="ml-4 mt-2 space-y-1">
                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className={`block px-3 py-2 rounded-md text-base font-medium text-white hover:text-pink-400 hover:bg-gray-800 ${location.pathname === service.path ? 'bg-gray-800 text-pink-400' : ''}`}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
            
            <Link
              to="/case-studies"
              className={`block px-3 py-2 rounded-md text-base font-medium text-white hover:text-pink-400 hover:bg-gray-800 ${location.pathname === '/case-studies' ? 'bg-gray-800 text-pink-400' : ''}`}
            >
              Case Studies
            </Link>
            
            <div className="px-3 py-2">
              <Link to="/contact">
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
