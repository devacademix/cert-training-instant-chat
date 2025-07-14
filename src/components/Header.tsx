import { Phone, Mail, MessageCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { courseCategories } from "@/utils/courseUtils";
import { useState } from "react";

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const whatsappNumber = "+918603516998";
  const whatsappLink = "https://wa.me/c/918603516998";
  const email = "info@globaltrainingcertifications.org";


  return (
    <header className="bg-white shadow-sm border-b">
      {/* Top contact bar */}
      <div className="bg-gradient-primary text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-sm">
            <div className="flex items-center gap-4">
              <a href={`mailto:${email}`} className="flex items-center gap-1 hover:text-blue-200 transition-colors">
                <Mail className="h-4 w-4" />
                {email}
              </a>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-blue-100">For Order/Enquiry:</span>
              <a href={`tel:${whatsappNumber}`} className="flex items-center gap-1 hover:text-blue-200 transition-colors">
                <Phone className="h-4 w-4" />
                {whatsappNumber}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <Link to="/" className="block">
              <div>
                <h1 className="text-2xl lg:text-3xl font-bold text-primary cursor-pointer hover:opacity-80 transition-opacity">
                  GLOBAL<span className="text-primary-dark">TRAINING</span>
                </h1>
                <p className="text-sm text-muted-foreground">HELPING YOU REAL TIME ONLINE</p>
              </div>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="hero"
              size="lg"
              onClick={() => window.open(whatsappLink, '_blank')}
              className="flex items-center gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp Now
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-gradient-primary text-white overflow-hidden">
        <style>{`
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .moving-nav {
            animation: moveLeftToRight 60s linear infinite;
          }
          @keyframes moveLeftToRight {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .moving-nav:hover {
            animation-play-state: paused;
          }
        `}</style>
        <div className="px-4 py-3">
          <div className="moving-nav flex gap-4 whitespace-nowrap" style={{
            width: 'max-content'
          }}>
            {/* Duplicate the categories for seamless looping */}
            {[...courseCategories, ...courseCategories].map((category, index) => {
              const dropdownKey = `${category.name}-${index}`;
              const isOpen = openDropdown === dropdownKey;
              
              return (
                <div key={dropdownKey} className="relative flex-shrink-0">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenDropdown(isOpen ? null : dropdownKey);
                    }}
                    onMouseEnter={() => setOpenDropdown(dropdownKey)}
                    onMouseLeave={() => setOpenDropdown(null)}
                    className="inline-flex items-center gap-1 text-white hover:bg-white/10 px-4 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap"
                  >
                    {category.name}
                    <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {/* Dropdown menu */}
                  <div 
                    className={`absolute top-full left-0 mt-1 w-80 bg-white text-gray-900 shadow-glow rounded-lg z-[100] transition-all duration-200 ${
                      isOpen 
                        ? 'opacity-100 visible translate-y-0' 
                        : 'opacity-0 invisible translate-y-2'
                    }`}
                    onMouseEnter={() => setOpenDropdown(dropdownKey)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <div className="p-4">
                      <h4 className="font-semibold text-primary mb-3 border-b pb-2">{category.name} Certifications</h4>
                      <ul className="space-y-1 max-h-64 overflow-y-auto">
                        {category.subcourses.map((course, courseIndex) => (
                          <li key={courseIndex}>
                            <Link
                              to={`${category.path}/${course.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/gi, '')}`}
                              className="block text-left w-full text-sm text-gray-600 hover:text-primary hover:bg-gray-50 p-2 rounded transition-colors"
                              onClick={() => setOpenDropdown(null)}
                            >
                              • {course}
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 pt-3 border-t">
                        <button
                          onClick={() => window.open(whatsappLink, '_blank')}
                          className="w-full bg-primary text-white px-4 py-2 rounded text-sm hover:bg-primary-dark transition-colors shadow-sm"
                        >
                          Get Pricing on WhatsApp
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;