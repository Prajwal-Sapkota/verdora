import React, { useEffect, useRef } from "react";
import { FaArrowRight, FaMountain, FaUsers, FaHeadset } from "react-icons/fa";

const Hero = () => {
  const imageRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      imageRefs.current.forEach((img, i) => {
        if (!img) return;

        const progress = Math.min(scrollY / (windowHeight * 0.1), 1);
        const startAngle = -12 - (i * 3);
        const angle = startAngle * (1 - progress);

        img.style.transform = `rotate(${angle}deg)`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stats = [
    { icon: FaMountain, label: "Area", value: "32,100 m²" },
    { icon: FaUsers, label: "Guests", value: "12K+" },
    { icon: FaHeadset, label: "Support", value: "24/7" },
  ];

  const images = [
    {
      src: "cafe1.webp",
      alt: "Luxury resort with mountain view",
    },
    {
      src: "banner.avif",
      alt: "Elegant resort café interior",
    },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#fcf9f3] via-white to-[#faf8f3] overflow-hidden ">
      {/* Main Container */}
      <div className="relative max-w-7xl mx-auto px-8 sm:px-8 lg:px-8 h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full pt-12 ">

          {/* Left Column - IMAGES (switched to left) */}
          <div className="order-1 lg:order-1 relative">
            <div className="relative flex items-center justify-center lg:justify-start pt-32 sm:pt-32 lg:pt-44">

              {/* Image Container - BIGGER */}
              {/* Image Container - BIGGER */}
              <div className="relative w-full max-w-lg lg:max-w-xl h-[420px] sm:h-[520px] lg:h-[700px]">

                {/* Shadow Background */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#ab8c55]/5 via-transparent to-[#ab8c55]/3 rounded-[2.5rem] blur-xl"></div>

                {/* Image 1 - LEFT side */}
                <div
                  ref={(el) => (imageRefs.current[0] = el)}
                  className="absolute top-4 left-0 sm:left-2 lg:left-0 z-30 rounded-2xl overflow-hidden border-4 border-white shadow-2xl transition-all duration-700 w-[300px] sm:w-[360px] lg:w-[420px] h-[320px] sm:h-[360px] lg:h-[420px]"
                  style={{
                    transform: `rotate(-12deg)`,
                    opacity: 0.95
                  }}
                >
                  <img
                    src={`/images/${images[0].src}`}
                    alt={images[0].alt}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />

                  {/* Gradient Overlay - REMOVED or made lighter */}
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Image 2 - RIGHT side - Positioned to NOT overlap */}
                <div
                  ref={(el) => (imageRefs.current[1] = el)}
                  className="absolute top-32 sm:top-36 right-1 sm:right-2 lg:right-0 z-40 rounded-2xl overflow-hidden border-4 border-white shadow-2xl transition-all duration-700 w-[300px] sm:w-[360px] lg:w-[420px] h-[320px] sm:h-[360px] lg:h-[420px]"
                  style={{
                    transform: `rotate(-15deg)`,
                    opacity: 0.95
                  }}
                >
                  <img
                    src={`/images/${images[1].src}`}
                    alt={images[1].alt}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />

                  {/* Gradient Overlay - REMOVED or made lighter */}
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - CONTENT (switched to right) */}
          <div className="order-2 lg:order-2">
            <div className="max-w-3xl mx-auto lg:mx-0 lg:mr-auto lg:pl-8 py-8 sm:py-0">

              {/* Header Section */}
              <div className="mb-10">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                  Where Time
                  <br />
                  <span className="text-[#ab8c55]">Gently Unfolds</span>
                </h1>

                <p className="text-lg text-gray-600 leading-relaxed mb-10">
                  A refined wellness escape designed around silence, nature, and
                  thoughtful luxury — created to restore balance and clarity.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="mb-12">
                <div className="grid grid-cols-3 gap-6">
                  {stats.map((stat, i) => {
                    const Icon = stat.icon;
                    return (
                      <div key={i} className="text-center group">
                        <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center mx-auto mb-4 group-hover:shadow-md transition-all duration-300">
                          <Icon className="text-[#ab8c55] text-2xl" />
                        </div>
                        <p className="text-2xl font-bold text-gray-900 mb-2">
                          {stat.value}
                        </p>
                        <p className="text-sm text-gray-500 font-medium">
                          {stat.label}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex justify-center lg:justify-start">
                <button
                  className="px-12 py-5 bg-gradient-to-r from-[#ab8c55] to-[#c9a86a] text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3 hover:scale-105 active:scale-95 text-lg"
                  aria-label="Explore our wellness retreat experience"
                >
                  <span>Discover Retreat</span>
                  <FaArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;