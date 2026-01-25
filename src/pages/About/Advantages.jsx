import React, { useEffect, useRef, useState } from "react";
import {
  
  FaUsers,
  
  FaHiking,
  FaWind,
 
  
} from "react-icons/fa";

const Advantages = () => {
  const sectionRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoaded(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const floatOffset = (scrollY * 0.1) % 30;

  const advantages = [
    {
      icon: <FaWind className="text-2xl" />,
      title: "Tranquility & Nature",
      description: "Immerse yourself in the crisp mountain air and rejuvenate your senses with the soothing sounds of nature. Whether you're lounging on our outdoor terrace or taking a leisurely stroll through the surrounding woods, you'll feel a sense of tranquility and connection with the great outdoors."
    },
    {
      icon: <FaUsers className="text-2xl" />,
      title: "Family Fun For All",
      description: "Our warm and welcoming atmosphere is perfect for guests of all ages, ensuring that every member of your family feels right at home. With spacious accommodations, kid-friendly amenities, and a variety of onsite activities including nature walks, scavenger hunts, and outdoor games."
    },
    {
      icon: <FaHiking className="text-2xl" />,
      title: "Gateway to Adventure",
      description: "Positioned as a gateway to adventure, Verdora Resort provides convenient access to a wealth of outdoor activities and attractions in the surrounding area. Whether you're a nature enthusiast, an outdoor adventurer, or simply looking to explore the local culture."
    }
  ];

  

  return (
    <div
      ref={sectionRef}
      className="min-h-screen bg-white"
    >
      <div className="max-w-7xl mx-auto px-8 py-8 sm:py-10 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-20 items-center">

          {/* Left Column - Content */}
          <div className="space-y-6 sm:space-y-7 md:space-y-8 ">
            <div>
              <div className="flex items-center gap-2 sm:gap-3 pb-3 sm:pb-4">
                <span className="text-[#ab8c55] font-semibold tracking-wider uppercase text-xs sm:text-sm">
                   ADVANTAGES 
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Your Gateway To Tranquility, <br className="hidden sm:block" />Family Fun, And Adventure
              </h1>
            </div>

            <div className="space-y-8">
              {advantages.map((advantage, index) => (
                <div 
                  key={index}
                  className={`space-y-4 transition-all duration-700 delay-${index * 200} ${
                    loaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#ab8c55]/10 text-[#ab8c55]">
                      {advantage.icon}
                    </div>
                    <h3 className="text-md sm:text-lg font-semibold text-gray-800">
                      {advantage.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 text-sm sm:text-base md:text-md leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              ))}
            </div>

            
          </div>

          {/* Right Column - Big Image with Animation */}
          <div className="relative flex justify-end mt-6 sm:mt-8 lg:mt-0">
            <div className="relative w-full">
              {/* Main Big Image */}
              <div
                className={`relative z-10 overflow-hidden rounded-xl sm:rounded-2xl shadow-lg border-3 sm:border-4 border-white
                  ml-auto mr-4 sm:mr-8 lg:mr-0 transition-all duration-1000
                  w-full max-w-6xl
                  ${loaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`}
              >
                <img
                  src="/images/advantage.webp"
                  alt="Verdora Resort Gateway"
                  className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[750px] object-cover"
                />

                {/* Gold overlay animation */}
                <div
                  className={`absolute inset-0 bg-[#ab8c55] z-20
                    transition-transform duration-1000 ease-in-out
                    ${loaded ? "-translate-x-full" : "translate-x-0"}`}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Advantages;