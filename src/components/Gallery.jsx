import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const galleryItems = [
  "/images/gallery1.webp",
  "/images/gallery2.webp",
  "/images/gallery3.webp",
  "/images/gallery4.webp",
  "/images/gallery5.webp",
  "/images/gallery6.avif",
  "/images/gallery7.webp",
  "/images/gallery8.webp",
  "/images/gallery9.webp",
];

const Gallery = () => {
  const [active, setActive] = useState(2);
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  const prev = () => {
    setActive((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1));
  };

  const next = () => {
    setActive((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1));
  };

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, [active]);

  // Scroll animation (ONLY ADDITION)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-12 md:py-20 px-2 md:px-10 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <span className="text-lg md:text-xl font-semibold text-[#8a6a3f]">
            Our Gallery
          </span>

          <h1 className="text-2xl md:text-3xl text-gray-700 max-w-2xl mx-auto py-4 md:py-6">
            A visual journey through our resort experiences, comfort, and natural beauty.
          </h1>
        </div>

        {/* Coverflow Container */}
        <div className="relative flex items-center justify-center h-[28rem] sm:h-96 md:h-[28rem] lg:h-[32rem] xl:h-[36rem] overflow-visible py-8 md:py-0">
          {galleryItems.map((src, index) => {
            const offset = index - active;
            let displayOffset = offset;

            if (displayOffset < -3) displayOffset = galleryItems.length + offset;
            if (displayOffset > 3) displayOffset = -galleryItems.length + offset;

            const animationStyle = {
              opacity: inView ? 1 : 0,
              transform: inView
                ? "translate(0,0)"
                : displayOffset === 0
                ? "translateY(-40px)"
                : displayOffset < 0
                ? "translateX(-40px)"
                : "translateX(40px)",
              transition: "all 700ms ease-out",
              transitionDelay: `${Math.abs(displayOffset) * 120}ms`,
            };

            return (
              <div
                key={index}
                style={animationStyle}
                className={`
                  absolute transition-all duration-700 ease-out
                  ${displayOffset === 0 ? "z-30 scale-100" : ""}
                  ${displayOffset === -1 ? "z-20 scale-90 opacity-90 -translate-x-24 sm:-translate-x-28 md:-translate-x-36 lg:-translate-x-44 xl:-translate-x-48" : ""}
                  ${displayOffset === 1 ? "z-20 scale-90 opacity-90 translate-x-24 sm:translate-x-28 md:translate-x-36 lg:translate-x-44 xl:translate-x-48" : ""}
                  ${displayOffset === -2 ? "z-10 scale-75 opacity-80 hidden md:block -translate-x-72 lg:-translate-x-80 xl:-translate-x-96" : ""}
                  ${displayOffset === 2 ? "z-10 scale-75 opacity-80 hidden md:block translate-x-72 lg:translate-x-80 xl:translate-x-96" : ""}
                  ${displayOffset === -3 ? "z-0 scale-60 opacity-70 hidden lg:block -translate-x-96 lg:-translate-x-[28rem] xl:-translate-x-[32rem]" : ""}
                  ${displayOffset === 3 ? "z-0 scale-60 opacity-70 hidden lg:block translate-x-96 lg:translate-x-[28rem] xl:translate-x-[32rem]" : ""}
                  ${Math.abs(displayOffset) > 3 ? "opacity-0 scale-50 hidden" : ""}
                `}
              >
                <div
                  className={`
                    relative rounded-2xl overflow-hidden transition-all duration-700 shadow-lg
                    ${displayOffset === 0 ? "shadow-2xl hover:shadow-2xl" : "hover:shadow-xl"}
                    ${displayOffset === 0 ? "w-72 h-96 sm:w-80 sm:h-96 md:w-96 md:h-[26rem] lg:w-[28rem] lg:h-[32rem] xl:w-[30rem] xl:h-[34rem]" : ""}
                    ${Math.abs(displayOffset) === 1 ? "w-64 h-72 sm:w-72 sm:h-80 md:w-80 md:h-[24rem] lg:w-96 lg:h-[28rem] xl:w-[26rem] xl:h-[30rem]" : ""}
                    ${Math.abs(displayOffset) === 2 ? "md:w-72 md:h-80 lg:w-80 lg:h-96 xl:w-96 xl:h-[26rem]" : ""}
                    ${Math.abs(displayOffset) === 3 ? "lg:w-64 lg:h-80 xl:w-80 xl:h-96" : ""}
                  `}
                >
                  <img
                    src={src}
                    alt="Gallery image"
                    className="w-full h-full object-cover"
                  />

                  {displayOffset !== 0 && displayOffset < 0 && (
                    <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-black/5 to-transparent pointer-events-none" />
                  )}
                  {displayOffset !== 0 && displayOffset > 0 && (
                    <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-black/5 to-transparent pointer-events-none" />
                  )}

                  <div className="absolute inset-0 rounded-2xl pointer-events-none border-2 border-white/20" />
                </div>
              </div>
            );
          })}

          {/* Navigation */}
          <div className="absolute -bottom-16 sm:-bottom-12 md:-bottom-16 flex gap-4">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#8a6a3f] hover:text-white transition shadow-md"
            >
              <FaChevronLeft />
            </button>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#8a6a3f] hover:text-white transition shadow-md"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Button */}
        <div className="mt-20 sm:mt-16 md:mt-24 flex justify-center">
          <button className="px-10 py-3 md:px-12 md:py-4 rounded-full bg-gray-900 text-white font-semibold hover:bg-[#8a6a3f] hover:scale-105 transition-all shadow-lg">
            View More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
