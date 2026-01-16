import React, { useEffect, useRef } from "react";
import { FaArrowRight, FaMountain, FaUsers, FaHeadset } from "react-icons/fa";

const Hero = () => {
  const imageRefs = useRef([]);
  const textRef = useRef(null);
  const ticking = useRef(false);

  useEffect(() => {
    // Scroll rotation
    const updateRotation = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const progress = Math.min(scrollY / (windowHeight * 0.1), 1);

      imageRefs.current.forEach((img, i) => {
        if (!img) return;
        const startAngle = -12 - i * 3;
        img.style.transform = `rotate(${startAngle * (1 - progress)}deg)`;
      });

      ticking.current = false;
    };

    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(updateRotation);
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateRotation();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Entrance animation on mount
  useEffect(() => {
    const [img1, img2] = imageRefs.current;
    const text = textRef.current;

    if (img1 && img2 && text) {
      // Initial positions
      img1.style.transform = "translateX(-200px) rotate(-12deg)";
      img1.style.opacity = "0";
      img2.style.transform = "translateY(-200px) rotate(-15deg)";
      img2.style.opacity = "0";
      text.style.transform = "translateY(50px)";
      text.style.opacity = "0";

      // Animate in after short delay
      setTimeout(() => {
        img1.style.transition = "transform 1s ease-out, opacity 1s ease-out";
        img1.style.transform = "translateX(0) rotate(-12deg)";
        img1.style.opacity = "1";

        img2.style.transition = "transform 1s ease-out, opacity 1s ease-out 0.2s";
        img2.style.transform = "translateY(0) rotate(-15deg)";
        img2.style.opacity = "1";

        text.style.transition = "transform 1s ease-out, opacity 1s ease-out 0.4s";
        text.style.transform = "translateY(0)";
        text.style.opacity = "1";
      }, 100);
    }
  }, []);

  const stats = [
    { icon: FaMountain, label: "Area", value: "32,100 m²" },
    { icon: FaUsers, label: "Guests", value: "12K+" },
    { icon: FaHeadset, label: "Support", value: "24/7" },
  ];

  const images = [
    { src: "cafe1.webp", alt: "Luxury resort with mountain view" },
    { src: "banner.avif", alt: "Elegant resort café interior" },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#fcf9f3] via-white to-[#faf8f3] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-8 h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full pt-12">

          {/* LEFT – IMAGES */}
          <div className="relative">
            <div className="relative flex items-center justify-center lg:justify-start pt-32 lg:pt-44">
              <div className="relative w-full max-w-lg lg:max-w-xl h-[420px] sm:h-[520px] lg:h-[700px]">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#ab8c55]/5 via-transparent to-[#ab8c55]/3 rounded-[2.5rem] blur-xl"></div>

                {/* Image 1 */}
                <div
                  ref={(el) => (imageRefs.current[0] = el)}
                  className="absolute top-4 left-0 z-30 rounded-2xl overflow-hidden border-4 border-white shadow-2xl w-[300px] sm:w-[360px] lg:w-[420px] h-[320px] sm:h-[360px] lg:h-[420px]"
                  style={{ transform: "rotate(-12deg)" }}
                >
                  <img
                    src={`/images/${images[0].src}`}
                    alt={images[0].alt}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Image 2 */}
                <div
                  ref={(el) => (imageRefs.current[1] = el)}
                  className="absolute top-32 right-1 z-40 rounded-2xl overflow-hidden border-4 border-white shadow-2xl w-[300px] sm:w-[360px] lg:w-[420px] h-[320px] sm:h-[360px] lg:h-[420px]"
                  style={{ transform: "rotate(-15deg)" }}
                >
                  <img
                    src={`/images/${images[1].src}`}
                    alt={images[1].alt}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    fetchpriority="high"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT – CONTENT */}
          <div ref={textRef}>
            <div className="max-w-4xl lg:pl-8 py-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Where Time
                <br />
                <span className="text-[#ab8c55]">Gently Unfolds</span>
              </h1>

              <p className="text-lg text-gray-600 mb-10">
                A refined wellness escape designed around silence, nature, and
                thoughtful luxury — created to restore balance and clarity.
              </p>

              <div className="grid grid-cols-3 gap-6 mb-12">
                {stats.map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <div key={i} className="text-center">
                      <div className="w-16 h-16 bg-white rounded-2xl border flex items-center justify-center mx-auto mb-4">
                        <Icon className="text-[#ab8c55] text-2xl" />
                      </div>
                      <p className="text-2xl font-bold">{stat.value}</p>
                      <p className="text-sm text-gray-500">{stat.label}</p>
                    </div>
                  );
                })}
              </div>

              <button className="px-12 py-5 bg-gradient-to-r from-[#ab8c55] to-[#c9a86a] text-white font-semibold rounded-full shadow-xl flex items-center gap-3 hover:scale-105 transition">
                Discover Retreat
                <FaArrowRight />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
