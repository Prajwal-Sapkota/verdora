import React, { useEffect, useRef } from "react";

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
  const trackRef = useRef(null);
  const speed = 1.5; // pixels per frame

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let position = 0;

    // Cache scrollWidth to prevent forced reflow
    let trackWidth = track.scrollWidth / 2;

    const animate = () => {
      position -= speed;

      // Reset position when scrolled half the track (seamless loop)
      if (Math.abs(position) >= trackWidth) {
        position = 0;
      }

      // Use transform for GPU acceleration
      track.style.transform = `translateX(${position}px)`;

      requestAnimationFrame(animate);
    };

    animate();

    // Update trackWidth on window resize
    const handleResize = () => {
      trackWidth = track.scrollWidth / 2;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="py-12 md:py-20 px-2 md:px-10 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-lg md:text-xl font-semibold text-[#8a6a3f]">
            Our Gallery
          </span>
          <h1 className="text-2xl md:text-3xl text-gray-700 max-w-2xl mx-auto py-4">
            A visual journey through our resort experiences, comfort, and natural beauty.
          </h1>
        </div>

        {/* Continuous Slider */}
        <div className="relative overflow-hidden mx-2 md:mx-4 lg:mx-6">
          <div
            ref={trackRef}
            className="flex gap-6 md:gap-8 will-change-transform"
          >
            {/* Duplicate gallery items for seamless scroll */}
            {[...galleryItems, ...galleryItems].map((src, index) => (
              <div
                key={index}
                className="
                  w-[240px] h-[320px] 
                  md:w-[280px] md:h-[380px] 
                  lg:w-[300px] lg:h-[400px] 
                  xl:w-[320px] xl:h-[420px]
                  rounded-2xl overflow-hidden
                  shadow-lg hover:shadow-2xl
                  transition-transform duration-500 hover:scale-[1.03]
                  flex-shrink-0
                  relative
                "
              >
                <img
                  src={src}
                  alt="Gallery"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Edge fade */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 md:w-24 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l from-white to-transparent" />
        </div>

        {/* Button */}
        <div className="mt-16 flex justify-center">
          <button
            className="
              px-10 py-3 md:px-12 md:py-4 rounded-full
              bg-gray-900 text-white font-semibold
              transition-all duration-300 shadow-lg
              hover:bg-[#8a6a3f] hover:scale-105 hover:shadow-xl
            "
          >
            View More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
