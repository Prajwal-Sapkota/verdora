import { useEffect, useRef, useState } from "react";
import { FaUsers, FaTree, FaBinoculars, FaCocktail } from "react-icons/fa";

// Features Data
const features = [
  {
    title: "Grand Capacity",
    image: "/images/capacity.avif",
    icon: <FaUsers />,
    details:
      "Designed to host intimate gatherings to grand celebrations, accommodating 25 to 6,000 guests comfortably amidst nature.",
  },
  {
    title: "Canopy Views",
    image: "/images/canopy.avif",
    icon: <FaTree />,
    details:
      "Enjoy breathtaking elevated views from our jungle canopy spaces, blending luxury with untouched wilderness.",
  },
  {
    title: "Wildlife Experience",
    image: "/images/wildlife.jpg",
    icon: <FaBinoculars />,
    details:
      "Experience the thrill of nature with curated wildlife sightings and serene jungle surroundings.",
  },
  {
    title: "Tropical Bar",
    image: "/images/tropical.jpg",
    icon: <FaCocktail />,
    details:
      "Sip on handcrafted tropical cocktails and refreshing beverages inspired by jungle flavors.",
  },
];

// Entry Animations
const entryAnimation = [
  "translate-x-[-60px] opacity-0",
  "translate-y-[60px] opacity-0",
  "translate-y-[-60px] opacity-0",
  "translate-x-[60px] opacity-0",
];

const Features = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [flippedIndex, setFlippedIndex] = useState(null); // Only one card flipped
  const [hoveredIndex, setHoveredIndex] = useState(null); // For hover on desktop

  // Scroll reveal once
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Determine transform based on hover or click
  const getTransform = (index) => {
    if (window.innerWidth >= 1024 && hoveredIndex === index) return "rotateY(180deg)"; // Desktop hover
    if (window.innerWidth < 1024 && flippedIndex === index) return "rotateY(180deg)"; // Mobile click
    return "rotateY(0deg)";
  };

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 bg-[#f5f2ed] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-0 sm:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((item, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ease-out ${
                visible
                  ? "opacity-100 translate-x-0 translate-y-0"
                  : entryAnimation[index]
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Flip Card */}
              <div
                className="relative mx-auto w-full max-w-[420px] h-[280px] sm:h-[300px] lg:h-[340px]"
                style={{ perspective: "1200px" }}
                onClick={() => {
                  if (window.innerWidth < 1024) {
                    // Only one card flips on mobile
                    setFlippedIndex(flippedIndex === index ? null : index);
                  }
                }}
                onMouseEnter={() => {
                  if (window.innerWidth >= 1024) setHoveredIndex(index);
                }}
                onMouseLeave={() => {
                  if (window.innerWidth >= 1024) setHoveredIndex(null);
                }}
              >
                <div
                  className="relative w-full h-full transition-transform duration-700"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: getTransform(index),
                  }}
                >
                  {/* Front */}
                  <div
                    className="absolute inset-0 rounded-xl overflow-hidden shadow-lg"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      width={420}
                      height={340}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* Back */}
                  <div
                    className="absolute inset-0 rounded-xl flex flex-col items-center justify-center text-center px-6"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                      backgroundColor: "#ab8c55",
                    }}
                  >
                    <div className="text-white text-3xl mb-3">{item.icon}</div>
                    <p className="text-white text-md leading-relaxed">
                      {item.details}
                    </p>
                  </div>
                </div>
              </div>

              {/* Title below */}
              <h1 className="mt-5 text-center text-xl font-semibold text-[#ab8655]">
                {item.title}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
