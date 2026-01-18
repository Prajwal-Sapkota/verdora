import { useEffect, useRef, useState } from "react";

const slides = [
  {
    image: "/images/bg1.jpg",
    text: "Where refined luxury meets untouched wilderness"
  },
  {
    image: "/images/wildlife.avif",
    text: "A sanctuary designed for calm, comfort, and connection"
  },
  {
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=2070&q=80",
    text: "Moments of stillness wrapped in nature's beauty"
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(false);

  const leftRef = useRef(null);
  const rightRef = useRef(null);

  /* Slider */
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
    <section className="w-full overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 h-[90vh]">

        {/* ================= LEFT ================= */}
        <div className="relative h-full">
          <img
            src="/images/banner.avif"
            alt="Verdora Resort"
            fetchpriority="high"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-br from-[#f8f5f0]/90 via-[#f3eee6]/80 to-[#eae3d7]/70" />

          <div
            ref={leftRef}
            className={`relative z-10 h-full flex items-center justify-center p-6 md:p-10 lg:p-12
              transition-all duration-1000 ease-out
              ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}
            `}
          >
            <div className="text-center max-w-xl">

              <span className="block text-sm tracking-[0.4em] uppercase text-[#7a6a4a] mb-6">
                Wilderness Retreat
              </span>

              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-[#1c1b18] leading-[0.85] mb-8">
                Verdora
                <br />
                Resort
              </h1>

              <div className="h-[2px] w-40 bg-[#ab8c55] mx-auto"></div>
            </div>
          </div>
        </div>

        {/* ================= RIGHT ================= */}
        <div className="relative h-full">

          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide.image}
              alt=""
              loading={index === 0 ? "eager" : "lazy"}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          <div className="absolute inset-0 bg-black/50" />

          <div
            ref={rightRef}
            className={`relative z-10 h-full flex items-center justify-center p-6 md:p-10 lg:p-12
              transition-all duration-1000 ease-out delay-200
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-16"}
            `}
          >
            <div className="text-center max-w-lg">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-10 text-white">
                "{slides[current].text}"
              </h2>

              <button
                aria-label="Reserve your stay"
                className="px-10 py-4 bg-[#ab8c55] text-white tracking-wider hover:bg-[#927344] transition duration-300 text-lg rounded-full"
              >
                Reserve Your Stay
              </button>
            </div>
          </div>

          {/* Dots */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                aria-label={`Slide ${i + 1}`}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full ${
                  current === i ? "bg-white" : "bg-white/40"
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
