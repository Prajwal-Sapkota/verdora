import React, { useEffect, useRef, useState } from "react";

const galleryItems = [
  {
    id: 1,
    src: "/images/gallery1.webp",
    col: "md:col-span-1",
    row: "md:row-span-2",
    shape: "rounded-full",
    animation: "from-left",
  },
  {
    id: 2,
    src: "/images/gallery2.webp",
    col: "md:col-span-3",
    row: "md:row-span-1",
    shape: "rounded-2xl",
    animation: "from-top",
  },
  {
    id: 3,
    src: "/images/gallery3.webp",
    col: "md:col-span-1",
    row: "md:row-span-1",
    shape: "rounded-xl",
    animation: "from-bottom",
  },
  {
    id: 4,
    src: "/images/gallery4.webp",
    col: "md:col-span-2",
    row: "md:row-span-1",
    shape: "rounded-full",
    animation: "from-right",
  },

  {
    id: 5,
    src: "/images/gallery5.webp",
    col: "md:col-span-2",
    row: "md:row-span-1",
    shape: "rounded-3xl",
    animation: "from-left",
  },
  {
    id: 6,
    src: "/images/gallery6.webp",
    col: "md:col-span-1",
    row: "md:row-span-1",
    shape: "rounded-full",
    animation: "from-top",
  },
  {
    id: 7,
    src: "/images/gallery7.webp",
    col: "md:col-span-1",
    row: "md:row-span-2",
    shape: "rounded-t-full",
    animation: "from-bottom",
  },

  {
    id: 8,
    src: "/images/gallery8.webp",
    col: "md:col-span-1",
    row: "md:row-span-1",
    shape: "rounded-3xl",
    animation: "from-left",
  },
  {
    id: 9,
    src: "/images/gallery9.webp",
    col: "md:col-span-2",
    row: "md:row-span-1",
    shape: "rounded-full",
    animation: "from-right",
  },
];

const animationMap = {
  "from-left": "translate-x-[-40px]",
  "from-right": "translate-x-[40px]",
  "from-top": "translate-y-[-40px]",
  "from-bottom": "translate-y-[40px]",
};

const Gallery = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

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

  return (
    <section
      ref={sectionRef}
      className="py-4 px-4 md:px-10 bg-white"
    >
      <div className="max-w-8xl mx-auto">
        {/* Header */}
        <div className="text-center py-12">
          <span className="text-xl font-medium text-[#ab8c55] ">
            Our Gallery
          </span>
          <h1 className="text-3xl text-gray-600 max-w-2xl mx-auto py-4">
            A visual journey through our resort experiences, comfort, and
            natural beauty.
          </h1>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[220px] md:auto-rows-[260px] gap-5">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              style={{ transitionDelay: `${index * 120}ms` }}
              className={`
                relative overflow-hidden group
                ${item.col} ${item.row} ${item.shape}
                transition-all duration-700 ease-out
                ${visible
                  ? "opacity-100 translate-x-0 translate-y-0 scale-100"
                  : `opacity-0 ${animationMap[item.animation]} scale-95`
                }
              `}
            >
              <img
                src={item.src}
                alt=""
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-16 flex justify-center">
          <button className="
            px-10 py-4
            rounded-full
            bg-[#1f2937]
            text-white
            font-semibold
            tracking-wide
            transition-all duration-300
            hover:bg-[#ab8c55]
            hover:scale-105
          ">
            View More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
