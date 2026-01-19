import React, { useState, useEffect, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const navigate = useNavigate();
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    // Entrance animation - runs once on mount
    const timer = setTimeout(() => {
      setHasAnimated(true);
    }, 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const leftNavItems = [
    { label: "HOME", href: "/" },
    { label: "ABOUT", href: "/about" },
    { label: "ROOMS", href: "/rooms" },
  ];

  const rightNavItems = [
    { label: "CAFE", href: "/cafe" },
    { label: "GALLERY", href: "/gallery" },
    { label: "CONTACT", href: "/contact" },
  ];

  const logoImage = "/images/logo.png";

  return (
    <>
      {/* Desktop Navbar - Fixed centering */}
      <nav
        ref={navRef}
        className="hidden lg:block fixed top-8 z-50 w-[95%] max-w-5xl"
        style={{
          left: '50%',
          transform: hasAnimated
            ? 'translate(-50%, 0)'
            : 'translate(-50%, -100px)',
          opacity: hasAnimated ? 1 : 0,
          transition: 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.8s ease'
        }}
      >

        <div className={`relative h-20 transition-all duration-300 ${scrolled ? 'scale-95' : 'scale-100'}`}>
          {/* Glass Base - Perfect Natural Colors */}
          <div className={`absolute inset-0 rounded-2xl backdrop-blur-xl border transition-all duration-300 ${scrolled
              ? 'bg-gradient-to-r from-white/95 to-emerald-50/30 border-emerald-200/50 shadow-xl'
              : 'bg-gradient-to-r from-white/92 to-emerald-50/20 border-emerald-100/40 shadow-lg'
            }`} />

          {/* Decorative Line */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent" />

          {/* Navigation Content */}
          <div className="relative h-full px-12 flex items-center justify-between">

            {/* Left Navigation - Larger font size */}
            <div className="flex items-center space-x-16">
              {leftNavItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group relative"
                >
                  <span className={`text-sm tracking-[0.3em] font-medium transition-all duration-300 ${scrolled
                      ? 'text-emerald-900 group-hover:text-emerald-700'
                      : 'text-emerald-800 group-hover:text-emerald-600'
                    }`}>
                    {item.label}
                  </span>
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-emerald-500 group-hover:w-16 transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* Center Logo - Larger diamond */}
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
              onClick={() => navigate("/")}
            >
              <div className="relative">
                {/* Diamond Glow Effect - Natural */}
                <div className={`absolute -inset-6 rounded-full blur-xl transition-all duration-300 ${scrolled
                    ? 'bg-gradient-to-br from-emerald-100/40 to-teal-100/20'
                    : 'bg-gradient-to-br from-emerald-50/50 to-teal-50/30'
                  }`} />

                {/* Diamond Frame - Larger size */}
                <div className={`relative w-24 h-24 rounded-2xl rotate-45 shadow-2xl transition-all duration-300 group-hover:scale-105 ${scrolled
                    ? 'bg-gradient-to-br from-white to-emerald-50 border border-emerald-200/30'
                    : 'bg-gradient-to-br from-white to-emerald-50/90 border border-emerald-100/40'
                  }`}>
                  {/* Inner Glow */}
                  <div className={`absolute inset-3 rounded-xl transition-all duration-300 ${scrolled
                      ? 'bg-gradient-to-tr from-emerald-100/20 to-teal-100/10'
                      : 'bg-gradient-to-tr from-emerald-50/30 to-teal-50/20'
                    }`} />

                  {/* Logo Container */}
                  <div className="absolute inset-0 -rotate-45 flex items-center justify-center">
                    <div className="relative">
                      {/* Logo Glow */}
                      <div className="absolute -inset-3 bg-gradient-to-r from-emerald-100/15 to-teal-100/10 blur-md rounded-full" />
                      <img
                        src={logoImage}
                        alt="Verdora Logo"
                        className="relative h-12 w-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Navigation - Larger font size */}
            <div className="flex items-center space-x-16">
              {rightNavItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group relative"
                >
                  <span className={`text-sm tracking-[0.3em] font-medium transition-all duration-300 ${scrolled
                      ? 'text-emerald-900 group-hover:text-emerald-700'
                      : 'text-emerald-800 group-hover:text-emerald-600'
                    }`}>
                    {item.label}
                  </span>
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-emerald-500 group-hover:w-16 transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav
        className="lg:hidden fixed top-0 left-0 w-full z-50 bg-white border-b border-emerald-100 h-18 shadow-sm"
        style={{
          transform: hasAnimated ? 'translateY(0)' : 'translateY(-100px)',
          opacity: hasAnimated ? 1 : 0,
          transition: 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.8s ease'
        }}
      >
        <div className="h-full px-5 flex items-center justify-between">

          {/* Mobile Logo with Floating Effect */}
          <div
            className="relative group"
            onClick={() => navigate("/")}
          >
            {/* Floating Glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-emerald-100/30 to-teal-100/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <img
              src={logoImage}
              alt="Verdora Logo"
              className="relative h-12 w-auto transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          {/* Enhanced Menu Button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
            className="relative w-10 h-10 rounded-lg bg-white border border-emerald-200 shadow-sm flex items-center justify-center hover:border-emerald-300 hover:shadow-md transition-all duration-300 group"
          >
            <div className="relative w-5 h-4">
              <div className={`absolute left-0 w-full h-0.5 rounded-full transition-all duration-300 ${isMenuOpen
                  ? 'top-1/2 -translate-y-1/2 rotate-45 bg-emerald-600'
                  : 'top-0 bg-emerald-700'
                }`} />
              <div className={`absolute left-0 w-full h-0.5 rounded-full transition-all duration-300 ${isMenuOpen
                  ? 'opacity-0'
                  : 'top-1/2 -translate-y-1/2 bg-emerald-700 opacity-100'
                }`} />
              <div className={`absolute left-0 w-full h-0.5 rounded-full transition-all duration-300 ${isMenuOpen
                  ? 'top-1/2 -translate-y-1/2 -rotate-45 bg-emerald-600'
                  : 'bottom-0 bg-emerald-700'
                }`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 z-50 transition-all duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>

        {/* Glass Background */}
        <div className="absolute inset-0 bg-white/95 backdrop-blur-sm">
          {/* Subtle Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #10b981 1px, transparent 0)`,
              backgroundSize: '20px 20px'
            }} />
          </div>
        </div>

        {/* Menu Content */}
        <div className={`relative h-full flex flex-col transition-transform duration-300 ${isMenuOpen ? 'translate-y-0' : 'translate-y-4'}`}>

          {/* Header - Minimal */}
          <div className="h-18 px-5 flex items-center justify-between">
            <div
              className="relative group"
              onClick={() => {
                navigate("/");
                setIsMenuOpen(false);
              }}
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-emerald-100/20 to-teal-100/15 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <img
                src={logoImage}
                width="120"
                height="120"
                alt="Verdora Logo"
                className="relative h-12 w-auto"
              />
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
              className="w-10 h-10 rounded-lg bg-white border border-emerald-200 shadow-sm flex items-center justify-center hover:border-emerald-300 hover:shadow-md transition-all duration-300"
            >
              <FiX className="h-5 w-5 text-emerald-700" />
            </button>
          </div>

          {/* Menu Items - Elegant Design */}
          <div className="flex-1 px-5 py-8 overflow-y-auto">
            <div className="space-y-4">
              {[...leftNavItems, ...rightNavItems].map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block group"
                >
                  <div className={`
                    relative overflow-hidden
                    text-xl text-emerald-900 font-medium 
                    py-5 px-5 rounded-2xl
                    transition-all duration-500
                    border border-emerald-100
                    hover:border-emerald-200
                    hover:shadow-lg
                    bg-white/90
                    ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}
                  `}
                    style={{ transitionDelay: `${index * 100}ms` }}>

                    {/* Text */}
                    <span className="ml-10 block tracking-wide group-hover:tracking-wider transition-all duration-300">
                      {item.label}
                    </span>

                    {/* Right Arrow */}
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="w-2 h-2 border-r-2 border-b-2 border-emerald-500 rotate-45" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;