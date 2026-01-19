import { useEffect, useRef, useState } from "react";

const slides = [
  { image: "/images/hero3.jpg" },
  { image: "/images/hero1.avif" },
  { image: "/images/hero4.jpg" },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(false);

  const leftRef = useRef(null);
  const rightRef = useRef(null);

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
            fetchpriority="high"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Softer overlay */}
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

              <span className="block text-sm md:text-base tracking-[0.4em] uppercase text-[#7a6a4a] mb-4 sm:mb-6">
                Wilderness Retreat
              </span>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal text-[#1c1b18] leading-tight mb-4 sm:mb-6">
                Verdora
                <br />
                Resort
              </h1>

              <div className="h-[2px] w-32 sm:w-40 bg-[#ab8c55] mx-auto mb-4 sm:mb-6"></div>

              <button className="px-8 sm:px-10 py-3 sm:py-4 bg-[#ab8c55] text-white tracking-wider hover:bg-[#927344] transition duration-300 text-base sm:text-lg rounded-full">
                Reserve Your Stay
              </button>
            </div>
          </div>
        </div>

        <div
          ref={rightRef}
          className={`relative h-[50vh] lg:h-[100vh] overflow-hidden
            transition-all duration-1000 ease-out delay-200
            ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-24"}
          `}
        >
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide.image}
              alt={`Slide ${index + 1}`}
              loading={index === 0 ? "eager" : "lazy"}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === current ? "opacity-100" : "opacity-0"
                }`}
            />
          ))}
          <div className="absolute inset-0 bg-white/10 pointer-events-none" />


          {/* Slider dots */}
          <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Slide ${i + 1}`}
                className={`w-2 h-2 rounded-full transition ${current === i ? "bg-white" : "bg-white/40"
                  }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
