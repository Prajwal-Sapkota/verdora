import React, { useEffect, useRef, useState } from "react";

const GalleryItems = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const galleryItems = [
    // Row 1
    { id: 1, src: "/images/gallery1.webp", shape: "rounded-tl-[100px] rounded-br-[40px]", col: "md:col-span-1", row: "md:row-span-2" },
    { id: 2, src: "/images/gallery2.webp", shape: "rounded-[60px_20px_60px_20px]", col: "md:col-span-2", row: "md:row-span-1" },
    { id: 3, src: "/images/gallery3.webp", shape: "rounded-tr-[80px] rounded-bl-[30px]", col: "md:col-span-1", row: "md:row-span-2" },
    
    // Row 2
    { id: 4, src: "/images/gallery4.webp", shape: "rounded-[40%]", col: "md:col-span-1", row: "md:row-span-1" },
    { id: 5, src: "/images/gallery5.webp", shape: "rounded-full", col: "md:col-span-1", row: "md:row-span-2" },
    { id: 6, src: "/images/gallery6.webp", shape: "rounded-[20px_60px_20px_60px]", col: "md:col-span-2", row: "md:row-span-1" },
    
    // Row 3
    { id: 7, src: "/images/gallery7.webp", shape: "rounded-[10px] ", col: "md:col-span-1", row: "md:row-span-1" },
    { id: 8, src: "/images/gallery8.webp", shape: "rounded-[120px]", col: "md:col-span-1", row: "md:row-span-1" },
    { id: 9, src: "/images/gallery9.webp", shape: "rounded-t-[100px] rounded-br-[60px]", col: "md:col-span-1", row: "md:row-span-1" },
    { id: 10, src: "/images/gallery10.webp", shape: "rounded-[120px]", col: "md:col-span-2", row: "md:row-span-1" },
    
    // Row 4
    { id: 11, src: "/images/gallery11.webp", shape: "rounded-[0_80px_80px_80px]", col: "md:col-span-2", row: "md:row-span-2" },
    { id: 12, src: "/images/gallery12.webp", shape: "rounded-tl-[60px] rounded-br-[100px]", col: "md:col-span-1", row: "md:row-span-1" },
    { id: 13, src: "/images/gallery13.webp", shape: "rounded-t-[60px]", col: "md:col-span-1", row: "md:row-span-2" },
    
    // Row 5
    { id: 14, src: "/images/gallery14.webp", shape: "rounded-[80px_20px]", col: "md:col-span-1", row: "md:row-span-2" },
    { id: 15, src: "/images/gallery15.webp", shape: "rounded-tr-[60px] rounded-bl-[100px]", col: "md:col-span-2", row: "md:row-span-1" },
    { id: 16, src: "/images/gallery16.webp", shape: "rounded-full", col: "md:col-span-1", row: "md:row-span-1" },
  ];

  return (
    <section ref={sectionRef} className="py-18 px-4 md:px-10 bg-[#f5f2ed]">
      <div className="max-w-7xl mx-auto">
        {/* Header with fade-in effect on scroll */}
        <div className={`text-center mb-16 transition-all duration-1000 ${scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-xl font-medium text-[#ab8c55]">
            Our Gallery
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-gray-800 max-w-4xl mx-auto py-6 leading-tight">
            The Place Of Your Dreams, Where You
            Will Completely Immerse Yourself In
            The Atmosphere Of Relaxation
          </h1>
        </div>

        {/* Gallery Grid with staggered entrance */}
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[240px] gap-5">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                animationDelay: `${index * 100}ms`
              }}
              className={`
                relative overflow-hidden group
                ${item.col} ${item.row} ${item.shape}
                transition-all duration-700 ease-out
                ${visible ? 'animate-floatIn' : 'opacity-0'}
                hover:z-10
              `}
            >
              <img
                src={item.src}
                alt=""
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay with hover effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              
              {/* Pulse effect */}
              <div className={`absolute inset-0 border-2 border-transparent group-hover:border-white/30 ${item.shape} transition-all duration-500`} />
            </div>
          ))}
        </div>

        
        

        
      </div>

      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes floatIn {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-floatIn {
          animation: floatIn 0.8s ease-out forwards;
        }
        
        /* Subtle floating effect for images */
        @keyframes gentleFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .group:hover img {
          animation: gentleFloat 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default GalleryItems;