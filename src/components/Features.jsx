import { useState, useEffect, useRef } from "react";
import { FaUsers, FaRulerCombined, FaWifi, FaVideo, FaTree, FaMapMarkedAlt, FaBinoculars, FaCocktail } from "react-icons/fa";

const Features = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const features = [
    { title: "Capacity For", value: "25 to 6,000 Guests", desc: "Perfect jungle gatherings", icon: <FaUsers /> },
    { title: "Space", value: "700–24,000 Sq Ft", desc: "Spacious jungle venues", icon: <FaRulerCombined /> },
    { title: "Complimentary", value: "Wi-Fi Access", desc: "Stay connected in wild", icon: <FaWifi /> },
    { title: "Remote Attendee", value: "Friendly", desc: "Virtual jungle tours", icon: <FaVideo /> },
    { title: "Majestic High", value: "Canopy Views", desc: "Tree-top experiences", icon: <FaTree /> },
    { title: "On Site", value: "Jungle Printing", desc: "Map & guide services", icon: <FaMapMarkedAlt /> },
    { title: "Nature View", value: "Wildlife Screens", desc: "Live animal feeds", icon: <FaBinoculars /> },
    { title: "Freshly Curated", value: "Tropical Beverages", desc: "Jungle-inspired drinks", icon: <FaCocktail /> },
  ];

  // Scroll drop animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Border logic for medium screens
  const borderClasses = (index) => {
    let borders = "border border-white/40 "; // default for mobile (all borders)
    if (index < 4) borders += " md:border-t-0 "; // top row on md+
    if (index >= 4) borders += " md:border-b-0 "; // bottom row on md+
    if (index % 4 === 0) borders += " md:border-l-0 "; // first column on md+
    if (index % 4 === 3) borders += " md:border-r-0 "; // last column on md+
    return `rounded-xl ${borders}`;
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/bg1.jpg"
          alt="Jungle Resort"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-2 md:px-4 py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-0">
          {features.map((feature, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`
                relative h-[220px] flex flex-col items-center justify-center p-6
                overflow-hidden transition-all duration-700 ease-out 
                ${borderClasses(index)}
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
              `}
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              {/* Hover background */}
              <div
                className={`
                  absolute inset-0 bg-[#ab8c55]
                  transition-all duration-500
                  ${hoveredIndex === index ? "opacity-100 scale-100" : "opacity-0 scale-0"}
                  ${index % 2 === 0 ? "origin-top-left" : "origin-bottom-right"}
                  rounded-xl
                `}
              />

              {/* Icon */}
              <div className="relative text-3xl mb-3 text-white z-10">{feature.icon}</div>

              {/* Text */}
              <div className="relative z-10 text-center">
                <span className="text-lg font-semibold text-white mb-1">{feature.title}</span>
                <h3 className="text-3xl font-bold text-gray-100">{feature.value}</h3>
                <p className="hidden sm:block text-sm text-gray-300 mt-1">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
