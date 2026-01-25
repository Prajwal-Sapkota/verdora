import { useEffect, useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const slides = [
  { image: "/images/hero3.avif" },
  { image: "/images/hero1.avif" },
  { image: "/images/hero4.avif" }, 
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(false);
  const [loadedImages, setLoadedImages] = useState({});

  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    slides.forEach((slide, index) => {
      const img = new Image();
      img.src = slide.image;
      img.onload = () => {
        setLoadedImages(prev => ({ ...prev, [index]: true }));
      };
    });
  }, []);

  /* Image slider */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(interval);
  }, []);

  /* Entrance animation */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          
          // Animate elements with delays
          const animateElements = [
            { ref: subtitleRef, delay: 300 },
            { ref: headingRef, delay: 600 },
            { ref: textRef, delay: 900 },
            { ref: buttonRef, delay: 1200 },
          ];

          animateElements.forEach(({ ref, delay }) => {
            setTimeout(() => {
              if (ref.current) {
                ref.current.classList.remove('opacity-0', 'translate-y-8');
                ref.current.classList.add('opacity-100', 'translate-y-0');
              }
            }, delay);
          });
          
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (leftRef.current) observer.observe(leftRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full overflow-hidden pt-18 sm:pt-0">
      <div className="grid grid-cols-1 lg:grid-cols-2">

        <div className="relative h-[50vh] lg:h-[100vh]">
          {/* Background image */}
          <img
            src="/images/banner.avif"
            alt="Verdora Resort"
            fetchPriority="high"
            loading="eager" 
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#f8f5f0]/80 via-[#f3eee6]/65 to-[#eae3d7]/30" />
          
          {/* Content */}
          <div
            ref={leftRef}
            className={`relative z-10 h-full flex flex-col justify-center items-center
              transition-all duration-1000 ease-out
              ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-24"}
            `}
          >
            <div className="text-center max-w-xl">
              {/* Subtitle with animation */}
              <div ref={subtitleRef} className="opacity-0 translate-y-8 transition-all duration-700 ease-out mb-4 sm:mb-6">
                <span className="block text-sm md:text-base tracking-[0.4em] uppercase text-[#7a6a4a]">
                  Wilderness Retreat
                </span>
              </div>

              {/* Heading with animation */}
              <div ref={headingRef} className="opacity-0 translate-y-8 transition-all duration-700 ease-out mb-4 sm:mb-6">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal text-[#1c1b18] leading-tight">
                  Verdora
                  <br />
                  Resort
                </h1>
              </div>

              {/* Divider line */}
              <div className="h-[2px] w-32 sm:w-40 bg-[#8a6a3f] mx-auto mb-4 sm:mb-6"></div>

              {/* Button with exact same effect */}
              <div ref={buttonRef} className="opacity-0 translate-y-8 transition-all duration-700 ease-out">
                <div className="relative group inline-block">
                  <button className="relative overflow-hidden px-8 sm:px-10 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg shadow-xl bg-[#8a6a3f] text-white hover:bg-[#262626] hover:text-[#ab8c55] transition-all duration-700 ease-in-out group">
                    {/* Gray overlay that appears on hover */}
                    <span className="absolute inset-0 bg-[#262626] rounded-full scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-700 ease-in-out"></span>
                    
                    {/* Button Text */}
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      Reserve Your Stay
                      <FaArrowRight className="group-hover:translate-x-3 transition-transform duration-500" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side slider */}
        <div
          ref={rightRef}
          className={`relative h-[50vh] lg:h-[100vh] overflow-hidden
            will-change-auto transition-all duration-1000 ease-out delay-200
            ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-24"}
          `}
        >
          {/* Dark gradient placeholder */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 z-0" />
          
          {/* Render all images */}
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide.image}
              alt={`Slide ${index + 1}`}
              loading="lazy"
              decoding="async"
              fetchPriority={index === current ? "high" : "low"}
              className={`absolute inset-0 w-full h-full object-cover
                transition-all duration-500 ease-out
                ${current === index ? "opacity-100 scale-100" : "opacity-0 scale-105"}
                ${loadedImages[index] ? "" : "blur-md brightness-75"}
              `}
              onLoad={() => setLoadedImages(prev => ({ ...prev, [index]: true }))}
            />
          ))}
          
          {/* Dark overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 pointer-events-none z-10" />

          {/* Slider dots */}
          <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Slide ${i + 1}`}
                className={`w-3 h-3 rounded-full transition ${current === i ? "bg-white" : "bg-white/40"}`}
              >
                <span className={`w-2 h-2 rounded-full ${current === i ? "bg-white" : "bg-white/40"}`} />
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;