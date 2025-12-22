import React, { useEffect, useRef, useState } from "react";
import {
  FaPhoneAlt,
  FaLeaf,
  FaMountain,
  FaWater,
  FaTree,
} from "react-icons/fa";
import { FiCircle } from "react-icons/fi";

const About = () => {
  const sectionRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const newsItems = [
    { id: 1, description: "Luxury resort experience surrounded by lush nature" },
    { id: 2, description: "Premium hospitality services for modern travelers" },
    { id: 3, description: "Customer comfort and satisfaction always guaranteed" },
    { id: 4, description: "Innovative eco friendly design blended with jungle" },
    { id: 5, description: "Sustainable resort living with world class amenities" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoaded(true);
          observer.disconnect(); // run once only
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  // Floating text (UNCHANGED)
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const floatOffset = (scrollY * 0.1) % 30;

  return (
    <div
      ref={sectionRef}
      className="min-h-screen bg-[#f5f2ed]"
    >
      <div className="max-w-7xl mx-auto px-8 py-8 sm:py-10 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-20 items-center">

          <div className="space-y-6 sm:space-y-7 md:space-y-8 py-6 sm:py-8 md:py-10 lg:py-12">
            <div>
              <div className="flex items-center gap-2 sm:gap-3 py-3 sm:py-4">
                <span className="text-[#ab8c55] font-semibold tracking-wider uppercase text-xs sm:text-sm">
                  About resorts
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                Relax at the luxury resorts.
              </h1>
            </div>

            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              <p className="text-gray-700 text-sm sm:text-base md:text-lg">
                A design-led approach guides the team, implementing practices,
                products and services that are thoughtful and environmentally sound.
              </p>
              <p className="text-gray-700 text-sm sm:text-base md:text-lg">
                Family of professionals that creates intelligent designs that help
                the face of hospitality.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-5 md:gap-6 pt-3 sm:pt-4">
              {[
                { icon: <FaTree />, text: "Rainforest Views" },
                { icon: <FaWater />, text: "Private Waterfalls" },
                { icon: <FaMountain />, text: "Mountain Treks" },
                { icon: <FaLeaf />, text: "Eco-Friendly" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 sm:gap-3">
                  <div className="p-1.5 sm:p-2  rounded-lg text-[#ab8c55]">
                    {item.icon}
                  </div>
                  <span className="text-gray-700 text-sm sm:text-base">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-end mt-6 sm:mt-8 lg:mt-0">
            <div className="relative w-full">
              <div
                className={`relative z-10 overflow-hidden rounded-xl sm:rounded-2xl shadow-lg border-3 sm:border-4 border-white
      ml-auto mr-4 sm:mr-8 lg:mr-0 transition-all duration-1000
      w-[65vw] sm:w-[70vw] md:w-[65vw] lg:w-[380px] xl:w-[400px]
      ${loaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`}
              >
                <img
                  src="/images/resort1.webp"
                  alt="Jungle Resort"
                  className="w-full h-[280px] sm:h-[340px] md:h-[420px] lg:h-[500px] xl:h-[550px] object-cover"
                />

                <div
                  className={`absolute inset-0 bg-[#ab8c55] z-20
        transition-transform duration-1000 ease-in-out
        ${loaded ? "-translate-x-full" : "translate-x-0"}`}
                />
              </div>

              <div
                className={`absolute -bottom-4 left-4 sm:-bottom-8 sm:-left-8 md:-bottom-10 md:-left-10 lg:-bottom-10 lg:-left-10 z-20 
      transition-all duration-1000 delay-500
      ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
              >
                <div className="relative overflow-hidden rounded-lg shadow-xl border-3 sm:border-4 border-white 
        w-[220px] sm:w-[250px] md:w-[280px] lg:w-[320px] xl:w-[350px]">
                  <img
                    src="/images/resort2.avif"
                    alt="Pool View"
                    className="w-full h-[180px] sm:h-[200px] md:h-[220px] lg:h-[340px] xl:h-[360px] object-cover"
                  />

                  <div
                    className={`absolute inset-0 bg-[#ab8c55] z-20
          transition-transform duration-1000 delay-300 ease-in-out
          ${loaded ? "-translate-x-full" : "translate-x-0"}`}
                  />
                </div>
              </div>

              <div
                className="absolute top-4 left-4 sm:top-6 sm:left-4 md:top-8 md:left-6 lg:top-10 lg:left-8 xl:top-12 xl:left-12 z-30 transition-transform duration-100 ease-in-out"
                style={{ transform: `translateY(-${floatOffset}px)` }}
              >
                <p className="text-xs sm:text-sm md:text-base tracking-widest text-gray-500 text-left px-2">
                  STARTED IN
                </p>
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold text-gray-900">1995</p>
              </div>
            </div>

          </div>


        </div>
      </div>
      <div className="w-full  py-12 overflow-hidden ">


        <div className="relative overflow-hidden bg-white">

          <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />

          <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

          <div className="flex w-max animate-marquee whitespace-nowrap items-center">

            {newsItems.map((item, index) => (
              <React.Fragment key={`first-${index}`}>

                <div className="inline-flex items-center px-6 py-3 bg-white/5 backdrop-blur-sm">
                  <h1 className="text-[#242424] text-2xl">{item.description}</h1>
                </div>

                  <FiCircle size={12} className="mx-6 text-[#ab8c55]" />

              </React.Fragment>
            ))}

            {newsItems.map((item, index) => (
              <React.Fragment key={`second-${index}`}>

                <div className="inline-flex items-center px-6 py-3 bg-white/5 backdrop-blur-sm">
                  <h1 className="text-[#242424] text-2xl">{item.description}</h1>
                </div>

                  <FiCircle size={12} className="mx-6 text-[#ab8c55]" />

              </React.Fragment>
            ))}

          </div>
        </div>

      </div>
    </div>
  );
};

export default About;