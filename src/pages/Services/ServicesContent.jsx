import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaSpa,
  FaGlassCheers,
  FaSwimmingPool,
  FaUtensils,
  FaLeaf,
  FaConciergeBell,
  FaArrowRight,
  FaCar,
  FaFire,
  FaChild,
  FaHeart
} from "react-icons/fa";

import servicesData from '../../data/services.json';

const ServicesContent = () => {
  const serviceRefs = useRef([]);
  const [visibleIndexes, setVisibleIndexes] = useState([]);

  const getIconComponent = (iconName) => {
    const icons = {
      FaSpa: FaSpa,
      FaGlassCheers: FaGlassCheers,
      FaSwimmingPool: FaSwimmingPool,
      FaUtensils: FaUtensils,
      FaLeaf: FaLeaf,
      FaConciergeBell: FaConciergeBell,
      FaCar: FaCar,
      FaFire: FaFire,
      FaChild: FaChild,
      FaHeart: FaHeart
    };
    return icons[iconName] || FaSpa; // Default to FaSpa if not found
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleIndexes((prev) => {
              if (!prev.includes(index)) {
                return [...prev, index];
              }
              return prev;
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = serviceRefs.current.filter(Boolean);
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="bg-white">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-16">
        <div className="text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-[#ab8c55] font-semibold tracking-wider uppercase text-xs sm:text-sm">
              VERDORA EXPERIENCE
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-normal text-[#262626] leading-tight py-1 max-w-6xl mx-auto">
            Discover exceptional hospitality and curated experiences in the heart of Chitwan.
          </h1>
        </div>
      </div>

      {/* Services Sections - Each within max-w-7xl */}
      {servicesData.services.map((service, index) => {
        const Icon = getIconComponent(service.icon);
        const isEven = index % 2 === 0;
        const isVisible = visibleIndexes.includes(index);

        return (
          <div
            key={service.id}
            data-index={index}
            ref={(el) => (serviceRefs.current[index] = el)}
            className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 mb-8"
          >
            <div
              className={`flex flex-col lg:flex-row ${!isEven ? "lg:flex-row-reverse" : ""
                } items-center min-h-[90vh] overflow-hidden rounded-2xl bg-[#f6f4ef]
                transition-all duration-1000 ease-out shadow-sm
                ${isVisible
                  ? "translate-x-0 opacity-100"
                  : isEven
                    ? "-translate-x-52 opacity-0"
                    : "translate-x-52 opacity-0"
                }`}
            >
              {/* IMAGE */}
              <div className="relative w-full lg:w-1/2 h-[60vh] lg:h-[90vh] overflow-hidden group">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="relative w-full lg:w-1/2 px-6 sm:px-8 lg:px-12 py-12 flex items-center">
                <div className="max-w-lg mx-auto">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#8a6a3f]/10 flex items-center justify-center text-[#8a6a3f] text-xl">
                      <Icon />
                    </div>
                    <span className="tracking-[0.25em] text-xs text-[#8a6a3f] font-medium">
                      {service.subtitle.toUpperCase()}
                    </span>
                  </div>

                  <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-4">
                    {service.name}
                  </h2>

                  <p className="italic text-lg text-gray-700 mb-6">
                    {service.tagline || service.subtitle}
                  </p>

                  <p className="text-gray-600 leading-relaxed text-base mb-8">
                    {service.description}
                  </p>

                  <Link
                    to={`/services/${service.slug}`}
                    className="group inline-flex items-center text-[#8a6a3f] font-medium hover:text-[#6a4a2f] transition-colors duration-300"
                  >
                    <span>Discover More</span>
                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Footer CTA */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-16">
        <div className="bg-gradient-to-r from-[#8a6a3f] to-[#9a7a4f] rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-light text-white mb-4">
            Experience Verdora Hospitality
          </h3>
          <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
            Join us for an unforgettable stay in Chitwan
          </p>
          <Link
            to="/booking"
            className="group bg-white text-[#8a7a4f] font-medium px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 inline-flex items-center space-x-2 hover:bg-white/95"
          >
            <span>Book Your Stay</span>
            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesContent;