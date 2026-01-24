import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube, FaPhone, FaEnvelope, FaChevronRight, FaChevronUp, FaChevronDown } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  const partners = [
    { name: "Tegora House", image: "/images/tagora.jpg" },
    { name: "Royal Lifestyle", image: "/images/royal.webp" },
    { name: "Marino Magic", image: "/images/marino.jpg" },
    { name: "Flextrivor", image: "/images/flex.png" },
    { name: "Nepal Airlines", image: "/images/nepal.png" },
    { name: "Aquafina", image: "/images/aquafina.jpg" },
    { name: "Yeti Airlines", image: "/images/yeti.png" },
  ];

  const usefulLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Rooms & Suites", href: "/rooms" },
    { name: "Dining", href: "/dining" },
    { name: "Spa & Wellness", href: "/spa" },
    { name: "Contact", href: "/contact" }
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, label: "Facebook" },
    { icon: <FaXTwitter />, label: "Twitter" },
    { icon: <FaInstagram />, label: "Instagram" },
    { icon: <FaYoutube />, label: "YouTube" }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Adjust partners per view based on screen size
  const getPartnersPerView = () => {
    return 4; 
  };

  const [partnersPerView, setPartnersPerView] = useState(getPartnersPerView());

  useEffect(() => {
    const handleResize = () => {
      setPartnersPerView(getPartnersPerView());
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        if (prev >= partners.length - partnersPerView) {
          return 0;
        }
        return prev + 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [partners.length, isPaused, partnersPerView]);

  const getVisiblePartners = () => {
    let visible = [];
    
    for (let i = 0; i < partnersPerView; i++) {
      const index = (currentSlide + i) % partners.length;
      visible.push(partners[index]);
    }
    
    return visible;
  };

  const visiblePartners = getVisiblePartners();

  const handleNext = () => {
    setCurrentSlide((prev) =>
      prev >= partners.length - partnersPerView ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? partners.length - partnersPerView : prev - 1
    );
  };

  return (
    <footer className="bg-[#f5f2ed] text-[#1b1c1b] pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-6 sm:pb-8 px-4 sm:px-5 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main content with logo on the border */}
        <div className="relative border-t border-gray-300 pt-12 sm:pt-16 md:pt-20">
          {/* Logo centered on the border line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full border-4 border-[#ab8c55] bg-white flex items-center justify-center shadow-lg">
              <img
                src="/images/logo.png"
                alt="Verdora Resort Logo"
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            
            {/* Column 1 – Trusted Partners with Vertical Sliding */}
            <div 
              className="sm:col-span-2 lg:col-span-1 order-1 sm:order-1"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <h4 className="text-xl sm:text-2xl font-serif mb-4 sm:mb-6 md:mb-8 text-[#1b2565] relative pb-2 sm:pb-3">
                Trusted Partners
                <span className="absolute bottom-0 left-0 w-8 sm:w-10 md:w-12 h-1 bg-[#ab8c55]"></span>
              </h4>

              {/* Partners Grid with Sliding Effect */}
              <div className="relative h-54 ">
                {/* Sliding Container */}
                <div 
                  className="absolute inset-0 transition-all duration-500 ease-in-out"
                  style={{ 
                    opacity: 1,
                    transform: `translateY(-${currentSlide * 0}px)`
                  }}
                >
                  <div className={`grid ${isMobile ? 'grid-cols-2' : 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-2'} gap-3 sm:gap-4`}>
                    {visiblePartners.map((partner, index) => (
                      <div
                        key={`${partner.name}-${currentSlide}-${index}`}
                        className="
                          bg-white 
                          rounded-lg sm:rounded-xl 
                          border border-gray-200 
                          hover:border-[#ab8c55] 
                          transition-all duration-300 
                          hover:shadow-md 
                          flex items-center justify-center 
                          h-24 sm:h-28
                          overflow-hidden
                        "
                      >
                        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center p-1 sm:p-2">
                          {partner.image ? (
                            <img
                              src={partner.image}
                              alt={partner.name}
                              className="
                                w-full h-full
                                object-contain
                                transition-all duration-300
                                hover:scale-110
                              "
                            />
                          ) : (
                            <div className="text-gray-400 text-lg sm:text-xl md:text-2xl">🏢</div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              
            </div>

            {/* Column 2 – Useful Links */}
            <div className="order-2 sm:order-2 lg:order-2">
              <h4 className="text-xl sm:text-2xl font-serif mb-4 sm:mb-6 md:mb-8 text-[#1b2565] relative pb-2 sm:pb-3">
                Useful Links
                <span className="absolute bottom-0 left-0 w-8 sm:w-10 md:w-12 h-1 bg-[#ab8c55]"></span>
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                {usefulLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-700 hover:text-[#ab8c55] transition-all duration-300 flex items-center group text-sm sm:text-base"
                    >
                      <FaChevronRight className="w-2 h-2 sm:w-3 sm:h-3 mr-2 text-[#ab8c55] opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 – Get In Touch */}
            <div className="order-3 sm:order-3 lg:order-3">
              <h4 className="text-xl sm:text-2xl font-serif mb-4 sm:mb-6 md:mb-8 text-[#1b2565] relative pb-2 sm:pb-3">
                Get In Touch
                <span className="absolute bottom-0 left-0 w-8 sm:w-10 md:w-12 h-1 bg-[#ab8c55]"></span>
              </h4>
              <div className="space-y-3 sm:space-y-4 md:space-y-5">
                <div className="flex items-start gap-2 sm:gap-3">
                  <FaMapMarkerAlt className="text-[#1b2565] mt-0.5 sm:mt-1 flex-shrink-0 text-sm sm:text-base" />
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                    Kathmandu, Nepal
                  </p>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  <FaEnvelope className="text-[#1b2565] flex-shrink-0 text-sm sm:text-base" />
                  <p className="text-gray-700 text-xs sm:text-sm">
                    info@verdoraresort.com
                  </p>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  <FaPhone className="text-[#1b2565] flex-shrink-0 text-sm sm:text-base" />
                  <p className="text-gray-700 text-xs sm:text-sm">
                    +977 9800000000
                  </p>
                </div>

                {/* Social Links */}
                <div className="pt-4 sm:pt-6">
                  <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3 md:mb-4">Follow Us</p>
                  <div className="flex gap-2 sm:gap-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href="#"
                        aria-label={social.label}
                        className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-700 hover:bg-[#1b2565] hover:text-white hover:border-[#1b2565] transition-all duration-300 text-sm sm:text-base"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Column 4 – Exclusive Deals */}
            <div className="order-4 sm:order-4 lg:order-4 sm:col-span-2 lg:col-span-1">
              <h4 className="text-xl sm:text-2xl font-serif mb-4 sm:mb-6 md:mb-8 text-[#1b2565] relative pb-2 sm:pb-3">
                Exclusive Deals
                <span className="absolute bottom-0 left-0 w-8 sm:w-10 md:w-12 h-1 bg-[#ab8c55]"></span>
              </h4>

              <p className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-5 md:mb-6 leading-relaxed">
                Stay updated with seasonal offers & exclusive retreat experiences.
              </p>

              <div className="relative mb-4 sm:mb-5 md:mb-6">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-full px-4 sm:px-5 py-3 sm:py-4 border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#ab8c55] focus:border-transparent pr-10 sm:pr-12 text-xs sm:text-sm"
                />
                <button
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#ab8c55] text-white flex items-center justify-center hover:bg-[#1b2565] transition-colors text-xs sm:text-sm"
                  aria-label="Subscribe"
                >
                  <FaChevronRight />
                </button>
              </div>

              <div className="border border-gray-200 rounded-lg sm:rounded-xl p-3 sm:p-4">
                <p className="text-xs sm:text-sm text-gray-700 mb-1 sm:mb-2 flex items-center gap-2">
                  <FaPhone className="text-[#1b2565] text-xs sm:text-sm" />
                  Need assistance?
                </p>
                <a
                  href="/contact"
                  className="text-[#1b2565] font-medium hover:text-[#ab8c55] transition-colors text-xs sm:text-sm inline-flex items-center gap-2"
                >
                  Contact us for reservations
                  <FaChevronRight className="w-2 h-2 sm:w-3 sm:h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 mt-8 sm:mt-12 md:mt-16 pt-4 sm:pt-6 md:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-3 md:gap-4">
            <div className="text-gray-600 text-xs sm:text-sm text-center sm:text-left">
              © {new Date().getFullYear()} Verdora Resort. All rights reserved.
            </div>

            <div className="text-gray-600 text-xs sm:text-sm text-center sm:text-right">
              Crafted by <span className="font-semibold text-[#1b2565]">S.A.I.T Solution Nepal</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;