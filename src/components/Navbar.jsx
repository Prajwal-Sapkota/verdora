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
    let ticking = false;
    let animationFrameId = null;
    
    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        animationFrameId = requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    const timer = setTimeout(() => {
      setHasAnimated(true);
    }, 100);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    
    return () => {
      document.body.classList.remove("overflow-hidden");
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
      {/* Desktop Navbar */}
      <nav 
        ref={navRef}
        className={`
          hidden lg:block fixed top-8 z-50 w-[95%] max-w-5xl
          transition-all duration-800 ease-out
          ${hasAnimated ? 'translate-y-0 opacity-100' : '-translate-y-24 opacity-0'}
        `}
        style={{ left: '50%', transform: hasAnimated ? 'translate(-50%, 0)' : 'translate(-50%, -96px)' }}
      >
        
        <div className={`relative h-20 ${scrolled ? 'scale-95' : 'scale-100'} transition-transform duration-300`}>
          <div className={`
            absolute inset-0 rounded-2xl backdrop-blur-xl border
            transition-all duration-300
            ${scrolled 
              ? 'bg-gradient-to-r from-white/95 to-emerald-50/30 border-emerald-200/50 shadow-xl' 
              : 'bg-gradient-to-r from-white/92 to-emerald-50/20 border-emerald-100/40 shadow-lg'}
          `} />
          
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent" />
          
          <div className="relative h-full px-12 flex items-center justify-between">
            
            {/* Left Navigation */}
            <div className="flex items-center space-x-16">
              {leftNavItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group relative"
                >
                  <span className={`
                    text-sm tracking-[0.3em] font-medium
                    transition-colors duration-300
                    ${scrolled ? 'text-emerald-900' : 'text-emerald-800'}
                    group-hover:text-emerald-600
                  `}>
                    {item.label}
                  </span>
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-emerald-500 group-hover:w-16 transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* Center Logo */}
            <div 
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
              onClick={() => navigate("/")}
            >
              <div className="relative">
                <div className={`
                  absolute -inset-6 rounded-full blur-xl
                  transition-all duration-300
                  ${scrolled 
                    ? 'bg-gradient-to-br from-emerald-100/40 to-teal-100/20' 
                    : 'bg-gradient-to-br from-emerald-50/50 to-teal-50/30'}
                `} />
                
                <div className={`
                  relative w-24 h-24 rounded-2xl rotate-45 shadow-2xl
                  transition-all duration-300 group-hover:scale-105
                  ${scrolled 
                    ? 'bg-gradient-to-br from-white to-emerald-50 border border-emerald-200/30' 
                    : 'bg-gradient-to-br from-white to-emerald-50/90 border border-emerald-100/40'}
                `}>
                  <div className={`
                    absolute inset-3 rounded-xl
                    transition-all duration-300
                    ${scrolled 
                      ? 'bg-gradient-to-tr from-emerald-100/20 to-teal-100/10' 
                      : 'bg-gradient-to-tr from-emerald-50/30 to-teal-50/20'}
                  `} />
                  
                  <div className="absolute inset-0 -rotate-45 flex items-center justify-center">
                    <div className="relative">
                      <div className="absolute -inset-3 bg-gradient-to-r from-emerald-100/15 to-teal-100/10 blur-md rounded-full transition-all duration-300" />
                      <img
                        src={logoImage}
                        alt="Verdora Logo"
                        className="relative h-12 w-auto"
                        loading="eager"
                        fetchPriority="high"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Navigation */}
            <div className="flex items-center space-x-16">
              {rightNavItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group relative"
                >
                  <span className={`
                    text-sm tracking-[0.3em] font-medium
                    transition-colors duration-300
                    ${scrolled ? 'text-emerald-900' : 'text-emerald-800'}
                    group-hover:text-emerald-600
                  `}>
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
      <nav className={`
        lg:hidden fixed top-0 left-0 w-full z-50 
        bg-white border-b border-emerald-100 h-18 shadow-sm
        transition-all duration-800 ease-out
        ${hasAnimated ? 'translate-y-0 opacity-100' : '-translate-y-24 opacity-0'}
      `}>
        <div className="h-full px-5 flex items-center justify-between">
          
          <div 
            className="relative group"
            onClick={() => navigate("/")}
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-emerald-100/30 to-teal-100/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <img
              src={logoImage}
              alt="Verdora Logo"
              className="relative h-12 w-auto transition-transform duration-300 group-hover:scale-110"
              loading="eager"
              fetchPriority="high"
            />
          </div>

          <button
            onClick={() => setIsMenuOpen(true)}
            className="w-10 h-10 rounded-lg border border-emerald-200 flex items-center justify-center hover:border-emerald-400 transition-colors"
            aria-label="Open menu"
          >
            <FiMenu className="h-5 w-5 text-emerald-700" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`
        lg:hidden fixed inset-0 z-50
        transition-all duration-300
        ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
      `}>
        
        <div className="absolute inset-0 bg-white/95 backdrop-blur-sm transition-opacity duration-300" />
        
        <div className={`
          relative h-full flex flex-col
          transition-transform duration-300
          ${isMenuOpen ? 'translate-y-0' : 'translate-y-4'}
        `}>
          
          <div className="h-18 px-5 flex items-center justify-between border-b border-emerald-100">
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
                alt="Verdora Logo"
                className="relative h-12 w-auto"
                loading="eager"
              />
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="w-10 h-10 rounded-lg border border-emerald-200 flex items-center justify-center hover:border-emerald-300 hover:shadow-md transition-all duration-300"
              aria-label="Close menu"
            >
              <FiX className="h-5 w-5 text-emerald-700" />
            </button>
          </div>

          <div className="flex-1 px-5 py-8 overflow-y-auto">
            <div className="space-y-4">
              {[...leftNavItems, ...rightNavItems].map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMenuOpen(false);
                    setTimeout(() => navigate(item.href), 50);
                  }}
                  className="block group"
                >
                  <div className={`
                    relative overflow-hidden
                    text-xl text-emerald-900 font-medium 
                    py-5 px-5 rounded-2xl
                    border border-emerald-100
                    hover:border-emerald-200
                    bg-white/90
                    transition-all duration-300
                    ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}
                  `}
                  style={{ transitionDelay: `${index * 50}ms` }}>
                    
                    <span className="block tracking-wide group-hover:tracking-wider transition-all duration-300">
                      {item.label}
                    </span>
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