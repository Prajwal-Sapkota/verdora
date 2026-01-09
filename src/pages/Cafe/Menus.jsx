import React, { useEffect, useRef, useState } from "react";

const Menus = () => {
  // Separate refs and states for each section
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const [section1Loaded, setSection1Loaded] = useState(false);
  const [section2Loaded, setSection2Loaded] = useState(false);

  useEffect(() => {
    const observer1 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSection1Loaded(true);
          observer1.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    const observer2 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSection2Loaded(true);
          observer2.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (section1Ref.current) observer1.observe(section1Ref.current);
    if (section2Ref.current) observer2.observe(section2Ref.current);

    return () => {
      observer1.disconnect();
      observer2.disconnect();
    };
  }, []);

  const signatureItems = [
    {
      title: "Chicken breast bungee",
      price: "$25.00",
      description: "After printing with digital color images, use: oboxes"
    },
    {
      title: "SKIP BREWS",
      price: "$25.00",
      description: "Premium coffee blend with artisanal brewing"
    },
    {
      title: "Alcoflavs in bright chips",
      price: "$25.00",
      description: "For more information, please contact the person to your website."
    },
    {
      title: "Sorted portion plates",
      price: "$25.00",
      description: "Maintained natural green beans and protein gelatins"
    },
    {
      title: "Chicken breast bungee",
      price: "$25.00",
      description: "Maintained natural protein and green beans"
    }
  ];

  const premiumItems = [
    {
      title: "Chicken breast bungee",
      price: "$25.00",
      description: "After printing with digital color images, use: oboxes"
    },
    {
      title: "SKIP BREWS",
      price: "$25.00",
      description: "Premium artisanal coffee experience"
    },
    {
      title: "Alcoflavs for bright chips",
      price: "$25.00",
      description: "For more information, please contact the person to your website."
    },
    {
      title: "Sorted portion plates",
      price: "$25.00",
      description: "Maintained natural green beans and protein gelatins"
    },
    {
      title: "Chicken breast bungee",
      price: "$25.00",
      description: "Maintained natural protein and green beans"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* First Section: Image Left, Text Right */}
      <div 
        ref={section1Ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 lg:py-24"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-14 md:gap-16 lg:gap-20 xl:gap-24 items-center">
          
          {/* Left Column - Image */}
          <div className="relative flex justify-start">
            <div className="relative w-full">
              {/* Main Image */}
              <div
                className={`relative z-10 overflow-hidden rounded-xl sm:rounded-2xl shadow-lg border-3 sm:border-4 border-white
                  mr-auto transition-all duration-1000 ease-out
                  w-full
                  ${section1Loaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}
              >
                <img
                  src="/images/signature.webp" 
                  alt="Signature menus presentation"
                  className="w-full h-[350px] sm:h-[500px] md:h-[600px] lg:h-[700px] object-cover"
                />

                {/* Gold overlay animation */}
                <div
                  className={`absolute inset-0 bg-[#ab8c55] z-20
                    transition-transform duration-1000 ease-out
                    ${section1Loaded ? "translate-x-full" : "translate-x-0"}`}
                />
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6 sm:space-y-8 md:space-y-10">
            <div>
              <div className="flex items-center gap-2 sm:gap-3 pb-3 sm:pb-4">
                
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-[#ab8c55] leading-tight border-b-2 pb-4 mb-6">
                Signature menus
              </h2>
            </div>

            <div className="space-y-0 sm:space-y-1">
              {signatureItems.map((item, index) => (
                <div 
                  key={index}
                  className={`group transition-all duration-500 ease-out hover:translate-x-4 hover:bg-gray-50 p-4 rounded-lg ${
                    section1Loaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1 max-w-[80%]">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 group-hover:text-[#ab8c55] transition-colors duration-500">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base mt-1 group-hover:text-gray-700 transition-colors duration-500">
                        {item.description}
                      </p>
                    </div>
                    <div className="text-[#ab8c55] text-xl sm:text-2xl font-bold whitespace-nowrap ml-4 group-hover:scale-125 transition-transform duration-500">
                      {item.price}
                    </div>
                  </div>
                  
                  {/* Divider */}
                  {index < signatureItems.length - 1 && (
                    <div className="h-px bg-gray-200 w-full mt-4 group-hover:opacity-0 transition-opacity duration-300"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Second Section: Image Right, Text Left */}
      <div 
        ref={section2Ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 lg:py-24"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-14 md:gap-16 lg:gap-20 xl:gap-24 items-center">
          
          {/* Left Column - Content */}
          <div className="space-y-6 sm:space-y-8 md:space-y-10">
            <div>
              <div className="flex items-center gap-2 sm:gap-3 pb-3 sm:pb-4">
                
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-[#ab8c55] leading-tight border-b-2 pb-4 mb-6">
                 Premium menus
              </h2>
            </div>

            <div className="space-y-0 sm:space-y-1">
              {premiumItems.map((item, index) => (
                <div 
                  key={index}
                  className={`group transition-all duration-500 ease-out hover:translate-x-4 hover:bg-gray-50 p-4 rounded-lg ${
                    section2Loaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1 max-w-[80%]">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 group-hover:text-[#ab8c55] transition-colors duration-500">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base mt-1 group-hover:text-gray-700 transition-colors duration-500">
                        {item.description}
                      </p>
                    </div>
                    <div className="text-[#ab8c55] text-xl sm:text-2xl font-bold whitespace-nowrap ml-4 group-hover:scale-125 transition-transform duration-500">
                      {item.price}
                    </div>
                  </div>
                  
                  {/* Divider */}
                  {index < premiumItems.length - 1 && (
                    <div className="h-px bg-gray-200 w-full mt-4 group-hover:opacity-0 transition-opacity duration-300"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative flex justify-end">
            <div className="relative w-full">
              {/* Main Image */}
              <div
                className={`relative z-10 overflow-hidden rounded-xl sm:rounded-2xl shadow-lg border-3 sm:border-4 border-white
                  ml-auto transition-all duration-1000 ease-out
                  w-full
                  ${section2Loaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`}
              >
                <img
                  src="/images/premium.webp" 
                  alt="Premium menus presentation"
                  className="w-full h-[350px] sm:h-[500px] md:h-[600px] lg:h-[700px] object-cover"
                />

                {/* Gold overlay animation */}
                <div
                  className={`absolute inset-0 bg-[#ab8c55] z-20
                    transition-transform duration-1000 ease-out
                    ${section2Loaded ? "-translate-x-full" : "translate-x-0"}`}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Menus;