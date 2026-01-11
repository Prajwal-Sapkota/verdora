import React, { useEffect, useRef, useState } from "react";
import { FaSmile, FaHeart, FaAward } from "react-icons/fa";


const Comfort = () => {
  const sectionRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  const teamValues = [
    {
      icon: <FaSmile className="text-3xl" />,
      title: "Warm Welcomes",
      description: "Our front desk team greets every guest with genuine warmth",
    },
    {
      icon: <FaHeart className="text-3xl" />,
      title: "Passionate Care",
      description: "Housekeeping ensures every room meets our highest standards",
    },
    {
      icon: <FaAward className="text-3xl" />,
      title: "12+ Years Excellence",
      description: "Decades of experience in anticipating guest needs",
    },
  ];

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

  return (
    <div className="relative">
      {/* MAIN CONTENT SECTION */}
      <div ref={sectionRef} className="min-h-screen bg-[#f5f2ed]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">

          {/* HEADING */}
          <div className="mb-16 lg:mb-24">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#262626] leading-tight mb-12 text-center max-w-6xl mx-auto">
              Our Hotel Stands As A Beacon Of Comfort, Cozy, And Personalized Service
            </h1>

            {/* TEXT SECTION */}
            <div className="relative">
              <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#ab8c55] via-[#ab8c55]/50 to-transparent"></div>

              <div className="lg:pl-12">
                <div className="space-y-8 max-w-6xl mx-auto">

                  {/* TEXT BLOCK WITH ANIMATION */}
                  <div
                    className={`bg-white/50 p-8 rounded-2xl shadow-sm transform transition-all duration-700 ease-out
                      ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
                    `}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      <p className="text-[#262626]/90 text-lg md:text-xl leading-relaxed">
                        Our team consists of dedicated professionals who are passionate about providing exceptional hospitality. From our front desk staff who greet you with a warm smile to our housekeeping team who ensures your room is immaculate, every member of our team is here to ensure your stay is nothing short of extraordinary.
                      </p>

                      <p className="text-[#262626]/90 text-lg md:text-xl leading-relaxed">
                        With 12+ years of experience in the hospitality industry, we have honed our expertise in anticipating and fulfilling the needs of our guests. Whether you're traveling for business or leisure, we are here to make your stay comfortable, convenient, and memorable.
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* IMAGE + STATS */}
          <div className="relative mt-24">
            <div
              className={`relative h-[70vh] md:h-[80vh] overflow-hidden rounded-lg transform transition-all duration-1000 ease-out
                ${loaded ? "opacity-100 scale-100" : "opacity-0 scale-[1.05]"}
              `}
            >
              <div className="absolute inset-0">
                <img
                  src="/images/gallery8.webp"
                  alt="About Our Resort"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
              </div>
            </div>

            
          </div>

        </div>
      </div>
    </div>
  );
};

export default Comfort;
