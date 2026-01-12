// components/HeroSection.jsx
import React, { useEffect, useRef } from 'react';
import { FaArrowRight, FaMountain, FaUsers, FaHeadset } from 'react-icons/fa';

const Hero = () => {
  const headingRef = useRef(null);
  const buttonRef = useRef(null);
  const statsRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const animateElements = [
      { ref: imageRef, delay: 100, type: 'fade-scale' },   // Image fades + scale
      { ref: headingRef, delay: 300, type: 'fade-slide' }, // Heading slides up + fade
      { ref: statsRef, delay: 600, type: 'fade-slide' },   // Stats slides up + fade
      { ref: buttonRef, delay: 9000, type: 'fade-slide' }  // Button slides up + fade
    ];

    animateElements.forEach(({ ref, delay, type }) => {
      setTimeout(() => {
        if (ref.current) {
          ref.current.classList.remove('opacity-0');

          if (type === 'fade-slide') {
            ref.current.classList.remove('translate-y-8');
            ref.current.classList.add('translate-y-0');
          }

          if (type === 'fade-scale') {
            ref.current.classList.remove('scale-95');
            ref.current.classList.add('scale-100');
          }
        }
      }, delay);
    });
  }, []);

  // Stats data
  const resortStats = [
    {
      icon: FaMountain,
      prefix: "over",
      value: "32,100 m²",
      description: "We have enough space for you to relax and unwind according to your needs."
    },
    {
      icon: FaUsers,
      prefix: "more",
      value: "12K guests",
      description: "More and more visitors are becoming our regular guests."
    },
    {
      icon: FaHeadset,
      prefix: "support",
      value: "24/7",
      description: "Care and round-the-clock support throughout your stay."
    },
  ];

  return (
    <div className="pl-0 sm:pl-6 lg:pl-12 pt-8 sm:pt-12">
      {/* Main Container */}
      <div className="relative overflow-hidden h-auto lg:h-[740px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full">

          {/* Left Side - Text */}
          <div className="relative p-8 md:p-12 lg:p-16 flex flex-col justify-center min-h-screen">
            <div className="max-w-3xl">

              {/* Heading */}
              <div
                ref={headingRef}
                className="opacity-0 translate-y-8 transition-all duration-700 ease-out py-6"
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-4">
                  Unwind and Rejuvenate <br />
                  <span className="text-[#ab8c55]">in Nature's Embrace</span>
                </h1>
              </div>

              {/* Stats */}
              <div
                ref={statsRef}
                className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
              >
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {resortStats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <div
                        key={index}
                        className="group relative p-4 rounded-lg border-l-4 border-gray-300
                          hover:border-l-[#ab8c55] hover:shadow-sm transition-all duration-300 bg-white"
                      >
                        <div className="flex items-start gap-4">
                          {/* Icon */}
                          <div className="relative flex-shrink-0">
                            <div className="relative w-10 h-10 overflow-hidden">
                              {/* Default Icon */}
                              <div className="absolute left-0 transition-transform duration-500 group-hover:-translate-x-full">
                                <Icon className="w-6 h-6 text-gray-500" />
                              </div>

                              {/* Hover Icon */}
                              <div className="absolute left-full transition-transform duration-500 group-hover:left-0">
                                <Icon className="w-6 h-6 text-[#ab8c55]" />
                              </div>
                            </div>
                          </div>

                          {/* Content */}
                          <div>
                            <div className="flex items-baseline gap-1 mb-1">
                              <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                                {stat.prefix}
                              </span>
                              <span className="text-xl sm:text-2xl font-bold text-[#262626]">
                                {stat.value}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* CTA Button */}
              <div
                ref={buttonRef}
                className="opacity-0 translate-y-8 transition-all duration-700 ease-out py-12"
              >
                <div className="relative group inline-block">
                  <button className="relative overflow-hidden px-10 md:px-14 py-4 md:py-5 rounded-full font-semibold text-base md:text-lg shadow-xl bg-[#ab8c55] text-[#262626] hover:bg-[#262626] hover:text-[#ab8c55] transition-all duration-700 ease-in-out group">
                    <span className="absolute inset-0 bg-[#262626] rounded-full scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-700 ease-in-out"></span>
                    <span className="relative z-10 flex items-center gap-3">
                      Discover
                      <FaArrowRight className="group-hover:translate-x-3 transition-transform duration-500" />
                    </span>
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative h-[600px] lg:h-full">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute inset-0"></div>

              <div
                ref={imageRef}
                className="absolute inset-0 opacity-0 scale-95 transition-all duration-1000 ease-out"
              >
                <img src="/images/banner.avif" alt="Eco Floral Arrangements" className="w-full h-full object-cover" fetchpriority="high"/>

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,transparent_30%,white_70%)]"></div>
              </div>

              {/* Floating Circle */}
              <div className="absolute bottom-1/4 left-1 w-32 h-32 rounded-full bg-gradient-to-br from-emerald-400/20 to-emerald-600/10 backdrop-blur-sm border border-emerald-200/30 animate-float-slow"></div>
            </div>
          </div>

        </div>
      </div>

      {/* Floating Animation */}
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;
