import { Menu, X, Globe, Home } from "lucide-react";
import { useState } from "react";
import logoImage from "../assets/logo/GIT-logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Our Service", href: "#ourservice" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 w-full h-16 md:h-20 bg-white z-50"
      style={{
        boxShadow:
          "0px 0px 1px rgba(25, 25, 31, 0.0509803922), 0px 0px 2px rgba(25, 25, 31, 0.0784313725)",
      }}
    >
      <div className="max-w-screen mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className=" mx-5 flex-shrink-0">
            <a href="#" className="flex items-center">
              <img
                src={logoImage}
                alt="GIT Logo"
                className="rounded-md w-[50px] h-[50px] md:w-[65px] md:h-[65px]"
              />
            </a>
          </div>

          <div className="hidden md:flex items-center h-[52px] w-full px-4 justify-end gap-4">
            {/* Navigation Items */}
            <div className="flex items-center gap-1 lg:gap-2">
              {navItems.map((item, index) => {
                const isSelected = selectedIndex === index;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setSelectedIndex(index)}
                    className={`
            relative px-2 md:px-3 py-[15px] flex items-center justify-center cursor-pointer whitespace-nowrap
            font-roboto text-[13px] md:text-[14px] leading-[22px]
            ${
              isSelected
                ? "font-bold text-[#FF6B35]"
                : "font-normal text-[#5C5C67] hover:text-[#FF6B35]"
            }
          `}
                  >
                    <span>{item.name}</span>
                    {isSelected && (
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-[#FF6B35]"></div>
                    )}
                  </a>
                );
              })}
            </div>

            {/* Language Icon */}
            <div className="flex items-center cursor-pointer">
              <Globe size={24} className="fill-[#FF6B35]" />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map(item => {
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
                >
                  <span>{item.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
