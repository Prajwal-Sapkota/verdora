import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const leftNavItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Rooms", href: "/rooms" },
  ];

  const rightNavItems = [
    { label: "Cafe", href: "/cafe" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact Us", href: "/contact" },
  ];

  const logoImage = "/images/logo.png";

  return (
    <nav className="fixed top-0 left-0 w-full h-24 z-50 bg-white rounded-b-2xl ">
      {/* Desktop Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-24">

          {/* Mobile Logo */}
          <div className="md:hidden">
            <img src={logoImage} alt="Verdora Logo" className="h-18 w-auto"fetchPriority="high" />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open navigation menu"
            className="md:hidden p-2 rounded-lg text-emerald-800 hover:bg-emerald-100 transition"
          >
            <FiMenu className="h-7 w-7" />
          </button>


          {/* Left Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {leftNavItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="
                  relative px-4 py-3 text-base font-normal text-[#333333]
                  transition-colors duration-300
                  after:absolute after:left-0 after:-bottom-0
                  after:h-[1px] after:w-0 after:bg-[#262626]
                  after:transition-all after:duration-600
                  hover:after:w-full
                "
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Center Logo */}
          <div
            className="hidden md:flex absolute left-1/2 -translate-x-1/2 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img
              src={logoImage}
              alt="Verdora Logo"
              className="h-20 w-auto"
              width="150"
              height="48"
              loading="eager"
              fetchpriority="high"
              decoding="async"
            />
          </div>

          {/* Right Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {rightNavItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="
                  relative px-4 py-3 text-base font-normal text-[#333333]
                  transition-colors duration-300
                  after:absolute after:left-0 after:-bottom-0
                  after:h-[1px] after:w-0 after:bg-[#262626]
                  after:transition-all after:duration-600
                  hover:after:w-full
                "
              >
                {item.label}
              </a>
            ))}
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden fixed top-0 left-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 z-50 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        {/* Drawer Header */}
        <div className="border-b border-emerald-200 h-20 px-5 flex items-center justify-between">
          <img src={logoImage} alt="Verdora Logo" className="h-14 w-auto" />
          <FiX
            className="h-7 w-7 cursor-pointer hover:text-emerald-700 transition"
            onClick={() => setIsMenuOpen(false)}
          />
        </div>

        {/* Drawer Links */}
        <div className="px-6 py-6 space-y-3">
          {[...leftNavItems, ...rightNavItems].map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="
                block text-lg font-medium text-emerald-800
                px-4 py-3 rounded-xl
                transition-all duration-300
                hover:bg-emerald-100 hover:pl-6
                border-l-4 border-transparent hover:border-emerald-500
              "
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
