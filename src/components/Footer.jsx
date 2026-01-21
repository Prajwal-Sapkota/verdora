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
    { name: "Cooktop", image: "/images/cooktop.png" }
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

  const partnersPerView = 4;

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
  }, [partners.length, isPaused]);

  // Get visible partners for the current slide
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
    <footer className="bg-[#f5f2ed] text-[#1b1c1b] pt-24 pb-8 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main content with logo on the border */}
        <div className="relative border-t border-gray-300 pt-20">
          {/* Logo centered on the border line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-20 h-20 rounded-full border-4 border-[#ab8c55] bg-white flex items-center justify-center shadow-lg">
              <img
                src="/images/logo.png"
                alt="Verdora Resort Logo"
                className="w-14 h-14 object-contain"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            
            {/* Column 1 – Trusted Partners with Vertical Sliding */}
            <div 
              className="lg:col-span-1"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <h4 className="text-2xl font-serif mb-8 text-[#1b2565] relative pb-3">
                Trusted Partners
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-[#ab8c55]"></span>
              </h4>

              {/* Partners Grid with Sliding Effect */}
              <div className="relative h-48">
                {/* Sliding Container */}
                <div 
                  className="absolute inset-0 transition-all duration-500 ease-in-out"
                  style={{ 
                    opacity: 1,
                    transform: `translateY(-${currentSlide * 0}px)`
                  }}
                >
                  <div className="grid grid-cols-2 gap-4">
                    {visiblePartners.map((partner, index) => (
                      <div
                        key={`${partner.name}-${currentSlide}-${index}`}
                        className="
                          bg-white 
                          rounded-xl 
                          border border-gray-200 
                          hover:border-[#ab8c55] 
                          transition-all duration-300 
                          hover:shadow-md 
                          flex items-center justify-center 
                          h-32
                          overflow-hidden
                        "
                      >
                        <div className="w-24 h-24 flex items-center justify-center p-2">
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
                            <div className="text-gray-400 text-2xl">🏢</div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2 – Useful Links */}
            <div>
              <h4 className="text-2xl font-serif mb-8 text-[#1b2565] relative pb-3">
                Useful Links
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-[#ab8c55]"></span>
              </h4>
              <ul className="space-y-3">
                {usefulLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-700 hover:text-[#ab8c55] transition-all duration-300 flex items-center group"
                    >
                      <FaChevronRight className="w-3 h-3 mr-2 text-[#ab8c55] opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 – Get In Touch */}
            <div>
              <h4 className="text-2xl font-serif mb-8 text-[#1b2565] relative pb-3">
                Get In Touch
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-[#ab8c55]"></span>
              </h4>
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-[#1b2565] mt-1 flex-shrink-0" />
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Kathmandu, Nepal
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-[#1b2565] flex-shrink-0" />
                  <p className="text-gray-700 text-sm">
                    info@verdoraresort.com
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <FaPhone className="text-[#1b2565] flex-shrink-0" />
                  <p className="text-gray-700 text-sm">
                    +977 9800000000
                  </p>
                </div>

                {/* Social Links */}
                <div className="pt-6">
                  <p className="text-sm text-gray-600 mb-4">Follow Us</p>
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href="#"
                        aria-label={social.label}
                        className="w-10 h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-700 hover:bg-[#1b2565] hover:text-white hover:border-[#1b2565] transition-all duration-300"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Column 4 – Exclusive Deals */}
            <div>
              <h4 className="text-2xl font-serif mb-8 text-[#1b2565] relative pb-3">
                Exclusive Deals
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-[#ab8c55]"></span>
              </h4>

              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                Stay updated with seasonal offers & exclusive retreat experiences.
              </p>

              <div className="relative mb-6">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-full px-5 py-4 border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#ab8c55] focus:border-transparent pr-12 text-sm"
                />
                <button
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#ab8c55] text-white flex items-center justify-center hover:bg-[#1b2565] transition-colors"
                  aria-label="Subscribe"
                >
                  <FaChevronRight />
                </button>
              </div>

              <div className="border border-gray-200 rounded-xl p-4">
                <p className="text-sm text-gray-700 mb-2 flex items-center gap-2">
                  <FaPhone className="text-[#1b2565]" />
                  Need assistance?
                </p>
                <a
                  href="/contact"
                  className="text-[#1b2565] font-medium hover:text-[#ab8c55] transition-colors text-sm inline-flex items-center gap-2"
                >
                  Contact us for reservations
                  <FaChevronRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-600 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Verdora Resort. All rights reserved.
            </div>

            <div className="text-gray-600 text-sm text-center md:text-right">
              Crafted by <span className="font-semibold text-[#1b2565]">S.A.I.T Solution Nepal</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;