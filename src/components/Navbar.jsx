import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react"; 

const navItems = ["Home", "About Us", "Services", "Destinations", "Pricing", "FAQ", "Contacts"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const getPath = (item) => (item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/80 shadow-sm border-b border-white/20">
      <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-5">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="group flex items-center space-x-2">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#2256CF] tracking-tight 
                           transition-all duration-300 group-hover:text-[#1a47a8]">
              MediTour
            </span>
            <span className="text-3xl sm:text-4xl font-black text-[#EC4E00] 
                           animate-[pulse_2s_infinite]">.</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => {
              const path = getPath(item);
              const isActive = location.pathname === path;

              return (
                <Link
                  key={item}
                  to={path}
                  className={`relative font-medium text-base tracking-wide transition-all duration-300
                    ${isActive 
                      ? "text-[#2256CF] font-bold" 
                      : "text-[#3A4558] hover:text-[#2256CF]"
                    }`}
                >
                  {item}
                  <span className={`absolute bottom-[-6px] left-0 h-0.5 bg-[#EC4E00] rounded-full transition-all duration-300
                    ${isActive ? "w-full" : "w-0 group-hover:w-full"}`} />
                </Link>
              );
            })}
            <Link
              to="/contacts"
              className="relative overflow-hidden bg-[#2256CF] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg
                         shadow-lg hover:shadow-[#2256CF]/50 transition-all duration-300 
                         hover:bg-[#1a47a8] hover:scale-105 active:scale-95
                         before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:to-white/20
                         before:translate-x-[-100%] hover:before:translate-x-0 before:transition-transform before:duration-500"
            >
              Free Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-full hover:bg-[#2256CF]/10 transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} className="text-[#2256CF]" /> : <Menu size={28} className="text-[#2256CF]" />}
          </button>
        </div>
      </div>

      
      <div
        className={`fixed top-0 right-0 h-full w-3/4 sm:w-1/2 max-w-sm bg-white/95 backdrop-blur-xl shadow-2xl
                   transition-transform duration-500 ease-in-out lg:hidden z-50
                   ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col h-full">
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-full hover:bg-[#2256CF]/10"
              aria-label="Close Menu"
            >
              <X size={28} className="text-[#2256CF]" />
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex flex-col items-center space-y-6 py-8">
            {navItems.map((item) => {
              const path = getPath(item);
              const isActive = location.pathname === path;

              return (
                <Link
                  key={item}
                  to={path}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium px-6 py-3 rounded-lg w-3/4 text-center transition-all duration-300
                    ${isActive 
                      ? "bg-[#2256CF] text-white shadow-md" 
                      : "text-[#3A4558] hover:bg-[#2256CF]/10 hover:text-[#2256CF]"
                    }`}
                >
                  {item}
                </Link>
              );
            })}
            <Link
              to="/contacts"
              onClick={() => setIsOpen(false)}
              className="mt-8 w-3/4 text-center bg-[#EC4E00] text-white px-6 py-4 rounded-full font-semibold text-lg
                         shadow-lg hover:shadow-[#EC4E00]/50 transition-all duration-300 hover:bg-[#d44400] hover:scale-105"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay for Mobile Menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-500"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
}