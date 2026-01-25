import React, { useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { FaArrowRight, FaBed, FaBath, FaUsers } from "react-icons/fa";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import roomsData from "../../data/rooms.json";
import usePageTitle from "../../hooks/usePageTitle";

const RoomDetail = () => {
  const { slug } = useParams();
  const room = roomsData.rooms.find((room) => room.slug === slug);
  usePageTitle(room ? room.name : "Room Not Found");

  const relatedRooms = room
    ? [...roomsData.rooms.filter((r) => r.id !== room.id)]
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
    : [];

  // Hero refs
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const heroFeaturesRef = useRef(null);
  const buttonRef = useRef(null);

  // Section refs
  const introRef = useRef(null);
  const advantagesRef = useRef(null);
  const featuresSectionRef = useRef(null);
  const galleryRef = useRef(null);
  const policiesRef = useRef(null);
  const relatedRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  // Hero animation
  useEffect(() => {
    const animateElements = [
      { ref: headingRef, delay: 300 },
      { ref: textRef, delay: 600 },
      { ref: heroFeaturesRef, delay: 900 },
      { ref: buttonRef, delay: 1200 },
    ];

    animateElements.forEach(({ ref, delay }) => {
      setTimeout(() => {
        if (ref.current) {
          ref.current.classList.remove("opacity-0", "translate-y-8");
          ref.current.classList.add("opacity-100", "translate-y-0");
        }
      }, delay);
    });
  }, [room]);

  // Section scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.05,
      rootMargin: "20px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target;
          const direction = element.dataset.direction || "up";

          element.classList.remove(
            "opacity-0",
            direction === "up" && "translate-y-8",
            direction === "left" && "-translate-x-8",
            direction === "right" && "translate-x-8",
            direction === "scale" && "scale-95"
          );
          element.classList.add(
            "opacity-100",
            direction === "up" && "translate-y-0",
            direction === "left" && "translate-x-0",
            direction === "right" && "translate-x-0",
            direction === "scale" && "scale-100"
          );
        }
      });
    }, observerOptions);

    // Observe all animated sections
    const sections = [
      introRef.current,
      advantagesRef.current,
      featuresSectionRef.current,
      galleryRef.current,
      policiesRef.current,
      relatedRef.current,
      ctaRef.current
    ].filter(Boolean);

    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, [room]);

  const handleBookNow = () => {
    console.log(`Booking ${room.name}`);
  };

  if (!room) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 overflow-x-hidden">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Room Not Found
          </h1>
          <Link to="/rooms" className="text-[#ab8c55] hover:underline text-lg">
            ← Back to Rooms
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <div className="pt-16 sm:pt-0">
        <div className="relative rounded-b-2xl overflow-hidden h-[400px] sm:h-[450px] md:h-[540px] lg:h-[740px]">
          <img
            src={room.heroImage || room.image}
            alt={room.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

          <div className="relative h-full flex items-center">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8 py-8 sm:py-10 md:py-16">
              <div className="max-w-2xl">
                {/* Heading */}
                <div
                  ref={headingRef}
                  className="opacity-0 translate-y-8 transition-all duration-700 ease-out mb-3 sm:mb-4"
                >
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                    {room.name}
                  </h1>
                </div>

                {/* Description */}
                <div
                  ref={textRef}
                  className="opacity-0 translate-y-8 transition-all duration-700 ease-out mb-4 sm:mb-6 md:mb-8"
                >
                  <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed max-w-lg sm:max-w-xl">
                    {room.shortDescription}
                  </p>
                </div>

                {/* Features */}
                <div
                  ref={heroFeaturesRef}
                  className="opacity-0 translate-y-8 transition-all duration-700 ease-out mb-6 sm:mb-8"
                >
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
                    <div className="flex items-center gap-2 text-white bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 sm:py-3 rounded-lg">
                      <FaBed className="text-base sm:text-lg" />
                      <div>
                        <div className="text-lg sm:text-xl font-bold">{room.bedrooms}</div>
                        <div className="text-[10px] sm:text-xs text-gray-300">Bedrooms</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-white bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 sm:py-3 rounded-lg">
                      <FaBath className="text-base sm:text-lg" />
                      <div>
                        <div className="text-lg sm:text-xl font-bold">{room.bathrooms}</div>
                        <div className="text-[10px] sm:text-xs text-gray-300">Bathrooms</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-white bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 sm:py-3 rounded-lg">
                      <FaUsers className="text-base sm:text-lg" />
                      <div>
                        <div className="text-lg sm:text-xl font-bold">{room.persons}</div>
                        <div className="text-[10px] sm:text-xs text-gray-300">Persons</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-white bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 sm:py-3 rounded-lg">
                      <span className="text-base sm:text-lg font-bold">$</span>
                      <div>
                        <div className="text-lg sm:text-xl font-bold">{room.price.split('/')[0].trim()}</div>
                        <div className="text-[10px] sm:text-xs text-gray-300">per night</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Button */}
                <div
                  ref={buttonRef}
                  className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
                >
                  <button
                    onClick={handleBookNow}
                    className="px-6 sm:px-8 md:px-12 py-2 sm:py-3 md:py-4 rounded-full bg-[#ab8c55] text-white font-semibold hover:bg-[#8a6d42] transition-all flex items-center gap-2 sm:gap-3 group text-sm sm:text-base md:text-lg"
                  >
                    Book Now <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content with alternating backgrounds */}

      {/* Intro Section - White background */}
      <div className="bg-white">
        <div
          ref={introRef}
          data-direction="left"
          className="opacity-0 -translate-x-8 transition-all duration-700 max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8 py-12 sm:py-14 md:py-16 lg:py-20 grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center"
        >
          <div className="order-2 lg:order-1">
            <span className="text-[#ab8c55] uppercase tracking-widest font-semibold text-xs sm:text-sm">
              Introduction
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 sm:mt-4 md:mt-6 mb-4 sm:mb-5 md:mb-6 lg:mb-8">
              {room.intro.title}
            </h2>
            <div className="space-y-3 sm:space-y-4">
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                {room.intro.description}
              </p>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                {room.intro.longDescription}
              </p>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <img
              src={room.galleryImages?.[0] || room.image}
              alt={`${room.name} interior`}
              className="rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg sm:shadow-xl md:shadow-2xl h-[250px] sm:h-[300px] md:h-[350px] lg:h-[450px] w-full object-cover"
            />
            <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 md:-bottom-6 md:-right-6 bg-[#ab8c55] text-white p-3 sm:p-4 md:p-5 lg:p-6 rounded-lg sm:rounded-xl md:rounded-2xl shadow-md sm:shadow-lg md:shadow-xl">
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">{room.price}</div>
              <div className="text-[10px] sm:text-xs">All amenities included</div>
            </div>
          </div>
        </div>
      </div>

      {/* Advantages Section - Light background (#f5f2ed) */}
      <div className="bg-[#f5f2ed]">
        <div
          ref={advantagesRef}
          data-direction="right"
          className="opacity-0 translate-x-8 transition-all duration-700 max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8 py-12 sm:py-14 md:py-16 lg:py-20"
        >
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <span className="text-[#ab8c55] uppercase tracking-widest text-xs sm:text-sm">
              Why Choose This Room
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 sm:mt-4 md:mt-6">
              Designed For Elevated Living
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
            {room.advantages.map((adv, i) => (
              <div
                key={i}
                className="bg-white p-5 sm:p-6 md:p-8 lg:p-10 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-md sm:shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="text-[#ab8c55] text-xl sm:text-2xl md:text-3xl font-bold mb-2">0{i + 1}</div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4">{adv.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base">{adv.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section - White background */}
      <div className="bg-white">
        <div
          ref={featuresSectionRef}
          data-direction="scale"
          className="opacity-0 scale-95 transition-all duration-700 max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8 py-12 sm:py-14 md:py-16 lg:py-20 grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-stretch"
        >
          {/* Left: Bedrooms + Bathrooms */}
          <div className="bg-gray-50 p-5 sm:p-6 md:p-8 lg:p-10 rounded-xl sm:rounded-2xl md:rounded-3xl hover:shadow-lg transition h-full flex flex-col">
            <span className="text-[#ab8c55] uppercase tracking-widest font-semibold text-xs sm:text-sm">
              Private Spaces
            </span>

            <div className="mt-4 sm:mt-6 md:mt-8 space-y-6 sm:space-y-8 md:space-y-10 flex-grow">
              {/* Bedrooms */}
              <div className="flex gap-3 sm:gap-4 md:gap-6 items-start">
                <div className="bg-[#ab8c55] text-white w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center text-lg sm:text-xl md:text-2xl font-bold shrink-0">
                  {room.features.bedrooms.count}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">Bedrooms</h3>
                  <p className="text-gray-600 leading-relaxed text-xs sm:text-sm md:text-base">
                    {room.features.bedrooms.description}
                  </p>
                </div>
              </div>

              <div className="w-10 sm:w-12 md:w-16 h-[2px] bg-[#ab8c55]"></div>

              {/* Bathrooms */}
              <div className="flex gap-3 sm:gap-4 md:gap-6 items-start">
                <div className="bg-[#ab8c55] text-white w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center text-lg sm:text-xl md:text-2xl font-bold shrink-0">
                  {room.features.bathrooms.count}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">Bathrooms</h3>
                  <p className="text-gray-600 leading-relaxed text-xs sm:text-sm md:text-base">
                    {room.features.bathrooms.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 md:mt-10 text-xs sm:text-sm text-gray-500 italic">
              Spacious private areas designed for restful living
            </div>
          </div>

          {/* Right: Living Experience */}
          <div className="bg-gray-50 p-5 sm:p-6 md:p-8 lg:p-10 rounded-xl sm:rounded-2xl md:rounded-3xl hover:shadow-lg transition h-full flex flex-col">
            <span className="text-[#ab8c55] uppercase tracking-widest font-semibold text-xs sm:text-sm">
              Living Experience
            </span>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mt-3 sm:mt-4 mb-4 sm:mb-6 md:mb-8 lg:mb-10">
              Thoughtfully Designed Spaces
            </h3>

            <div className="mb-4 sm:mb-6 md:mb-8 lg:mb-10 flex-grow">
              <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 text-gray-800">
                Indoor Living Areas
              </h4>
              <p className="text-gray-600 leading-relaxed text-xs sm:text-sm md:text-base">
                {room.features.commonAreas}
              </p>
            </div>

            <div className="w-10 sm:w-12 md:w-16 h-[2px] bg-[#ab8c55] mb-4 sm:mb-6 md:mb-8 lg:mb-10"></div>

            <div className="flex-grow">
              <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 text-gray-800">
                Outdoor Spaces
              </h4>
              <p className="text-gray-600 leading-relaxed text-xs sm:text-sm md:text-base">
                {room.features.outdoorSpaces}
              </p>
            </div>

            <div className="mt-6 sm:mt-8 md:mt-10 text-xs sm:text-sm text-gray-500 italic">
              Designed for comfort, privacy, and effortless relaxation
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section - Light background (#f5f2ed) */}
      <div className="bg-[#f5f2ed]">
        <div
          ref={galleryRef}
          data-direction="up"
          className="opacity-0 translate-y-8 transition-all duration-700 max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8 py-12 sm:py-14 md:py-16 lg:py-20"
        >
          <div className="text-center mb-10 md:mb-14 lg:mb-16">
            <span className="text-[#ab8c55] uppercase tracking-widest text-sm">
              Gallery
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 md:mt-4 lg:mt-6">
              Experience {room.name}
            </h2>
            <p className="text-gray-600 mt-2 md:mt-3 lg:mt-4 max-w-2xl mx-auto text-sm md:text-base">
              Explore the beautiful spaces and amenities that make this accommodation unique
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4">
            {(room.galleryImages && room.galleryImages.length > 0 ? room.galleryImages : [
              room.image,
              "/images/room-interior.jpg",
              "/images/room-bathroom.jpg",
              "/images/room-outdoor.jpg"
            ]).map((img, i) => {
              // Responsive column spans
              let colSpan = "md:col-span-6";
              let aspectRatio = "aspect-w-16 aspect-h-9"; // default 16:9

              if (i === 0) {
                colSpan = "md:col-span-8";
                aspectRatio = "aspect-w-16 aspect-h-12"; // bigger
              } else if (i === 1) {
                colSpan = "md:col-span-4";
                aspectRatio = "aspect-w-16 aspect-h-12";
              } else if (i === 2 || i === 3) {
                colSpan = "md:col-span-6";
                aspectRatio = "aspect-w-16 aspect-h-9";
              }

              return (
                <div
                  key={i}
                  className={`${colSpan} ${aspectRatio} overflow-hidden rounded-xl md:rounded-2xl group relative`}
                >
                  <img
                    src={img}
                    alt={`${room.name} view ${i + 1}`}
                    className="w-full h-full object-cover block group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>




      {/* Policies Section - White background */}
      <div className="bg-white ">
        <div
          ref={policiesRef}
          data-direction="left"
          className="opacity-0 -translate-x-8 transition-all duration-700 max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8 py-12 sm:py-14 md:py-16 lg:py-20  p-5 sm:p-6 md:p-8 lg:p-10"
        >
          <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <span className="text-[#ab8c55] uppercase tracking-widest font-semibold text-xs sm:text-sm">
              Policies
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 sm:mt-4">
              House Rules & Guidelines
            </h2>
            <p className="text-gray-600 mt-2 sm:mt-3 max-w-lg sm:max-w-xl md:max-w-2xl mx-auto text-xs sm:text-sm md:text-base">
              To ensure a comfortable stay for all guests, please review our policies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
            <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">
              <div className="border-l-3 sm:border-l-4 border-[#ab8c55] pl-3 sm:pl-4 md:pl-5 lg:pl-6 py-2 sm:py-3">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-1 sm:mb-2">No Smoking Policy</h3>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base">{room.rules.noSmoking}</p>
              </div>

              <div className="border-l-3 sm:border-l-4 border-[#ab8c55] pl-3 sm:pl-4 md:pl-5 lg:pl-6 py-2 sm:py-3">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-1 sm:mb-2">Noise Control</h3>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base">{room.rules.noiseControl}</p>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">
              <div className="border-l-3 sm:border-l-4 border-[#ab8c55] pl-3 sm:pl-4 md:pl-5 lg:pl-6 py-2 sm:py-3">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-1 sm:mb-2">Room Capacity</h3>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base">{room.rules.roomCapacity}</p>
              </div>

              <div className="border-l-3 sm:border-l-4 border-[#ab8c55] pl-3 sm:pl-4 md:pl-5 lg:pl-6 py-2 sm:py-3">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-1 sm:mb-2">Security Measures</h3>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base">{room.rules.security}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Rooms Section - Light background (#f5f2ed) */}
      {relatedRooms.length > 0 && (
        <div className="bg-[#f5f2ed]">
          <div
            ref={relatedRef}
            data-direction="right"
            className="opacity-0 translate-x-8 transition-all duration-700 max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8 py-12 sm:py-14 md:py-16 lg:py-20"
          >
            <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
              <span className="text-[#ab8c55] uppercase tracking-widest text-xs sm:text-sm">
                Explore More
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 sm:mt-4 md:mt-5 lg:mt-6">
                Discover Other Luxury Stays
              </h2>
              <p className="text-gray-600 mt-2 sm:mt-3 md:mt-4 max-w-lg sm:max-w-xl md:max-w-2xl mx-auto text-xs sm:text-sm md:text-base">
                Browse through our collection of premium accommodations
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
              {relatedRooms.map((r) => (
                <Link
                  key={r.id}
                  to={`/rooms/${r.slug}`}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="block group"
                >
                  <div className="rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden shadow-md sm:shadow-lg hover:shadow-xl transition-all duration-300 bg-white h-full">
                    <div className="h-40 sm:h-48 md:h-56 lg:h-64 overflow-hidden">
                      <img
                        src={r.image}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        alt={r.name}
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4 sm:p-5 md:p-6 lg:p-8">
                      <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-1 sm:mb-2 group-hover:text-[#ab8c55] transition-colors">
                        {r.name}
                      </h3>
                      <p className="text-gray-600 mb-2 sm:mb-3 md:mb-4 line-clamp-2 text-xs sm:text-sm md:text-base">
                        {r.shortDescription}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-[#ab8c55] font-bold text-base sm:text-lg md:text-xl">
                          {r.price}
                        </span>
                        <div className="flex gap-1 sm:gap-2 md:gap-3 lg:gap-4 text-xs sm:text-sm text-gray-500">
                          <span>{r.bedrooms} Beds</span>
                          <span>{r.bathrooms} Baths</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Final CTA Section - White background */}
      <div className="bg-white">
        <div
          ref={ctaRef}
          data-direction="scale"
          className="opacity-0 scale-95 transition-all duration-700 text-center max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8 py-12 sm:py-14 md:py-16 lg:py-20"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-5 lg:mb-6">
            Ready to Experience {room.name}?
          </h2>
          <p className="text-gray-600 mb-4 sm:mb-5 md:mb-6 max-w-lg sm:max-w-xl md:max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
            Book now and secure your dates for an unforgettable stay
          </p>
          <button
            onClick={handleBookNow}
            className="px-6 sm:px-8 md:px-10 lg:px-12 py-2 sm:py-3 md:py-4 rounded-full bg-[#ab8c55] text-white text-sm sm:text-base md:text-lg font-semibold hover:bg-[#8a6d42] transition-all duration-300 shadow-md sm:shadow-lg hover:shadow-xl"
          >
            Reserve Your Stay Now
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RoomDetail;