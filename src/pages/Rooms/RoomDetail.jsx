// pages/RoomDetail.jsx
import React, { useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { FaArrowRight, FaBed, FaBath, FaUsers } from "react-icons/fa";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import roomsData from "../../data/rooms.json";

const RoomDetail = () => {
  const { slug } = useParams();

  const room = roomsData.rooms.find((room) => room.slug === slug);

  const relatedRooms = room
    ? roomsData.rooms.filter((r) => r.id !== room.id).slice(0, 3)
    : [];

  const headingRef = useRef(null);
  const textRef = useRef(null);
  const featuresRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const animateElements = [
      { ref: headingRef, delay: 300 },
      { ref: textRef, delay: 600 },
      { ref: featuresRef, delay: 900 },
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

  if (!room) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
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

      {/* ================= HERO (UNCHANGED) ================= */}
      <div className="pt-18 sm:pt-0">
        <div className="relative rounded-b-2xl overflow-hidden h-[500px] md:h-[550px] lg:h-[740px]">
          <img
            src={room.heroImage || room.image}
            alt={room.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />

          <div className="relative h-full flex items-center">
            <div className="w-full max-w-7xl mx-auto px-6 py-16">
              <div className="max-w-3xl">
                <div
                  ref={headingRef}
                  className="opacity-0 translate-y-8 transition-all duration-700 mb-4"
                >
                  <h1 className="text-5xl md:text-7xl font-bold text-white">
                    {room.name}
                  </h1>
                </div>

                <div
                  ref={textRef}
                  className="opacity-0 translate-y-8 transition-all duration-700 mb-8"
                >
                  <p className="text-xl text-gray-200 max-w-2xl">
                    {room.shortDescription}
                  </p>
                </div>

                <div
                  ref={featuresRef}
                  className="opacity-0 translate-y-8 transition-all duration-700 mb-10"
                >
                  <div className="flex flex-wrap gap-8 text-white">
                    <div className="flex items-center gap-3">
                      <FaBed />
                      <span>{room.bedrooms} Bedrooms</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaBath />
                      <span>{room.bathrooms} Bathrooms</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaUsers />
                      <span>{room.persons} Guests</span>
                    </div>
                  </div>
                </div>

                <div
                  ref={buttonRef}
                  className="opacity-0 translate-y-8 transition-all duration-700"
                >
                  <button className="px-12 py-4 rounded-full bg-[#8a6a3f] text-white font-semibold hover:bg-black transition-all">
                    Book Now <FaArrowRight className="inline ml-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-6 py-24 space-y-40">

        {/* INTRO — EDITORIAL */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-[#ab8c55] uppercase tracking-widest font-semibold">
              Introduction
            </span>
            <h2 className="text-5xl font-bold mt-6 mb-8">
              {room.intro.title}
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              {room.intro.description}
            </p>
            <p className="text-lg text-gray-600">
              {room.intro.longDescription}
            </p>
          </div>

          <div className="relative">
            <img
              src={room.galleryImages?.[0] || room.image}
              alt=""
              className="rounded-3xl shadow-2xl h-[520px] object-cover"
            />
          </div>
        </div>

        {/* ADVANTAGES — LUXURY CARDS */}
        <div>
          <div className="text-center mb-20">
            <span className="text-[#ab8c55] uppercase tracking-widest">
              Why Choose This Room
            </span>
            <h2 className="text-5xl font-bold mt-6">
              Designed For Elevated Living
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {room.advantages.map((adv, i) => (
              <div
                key={i}
                className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition"
              >
                <h3 className="text-2xl font-bold mb-4">{adv.title}</h3>
                <p className="text-gray-600">{adv.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FEATURES — SPLIT */}
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="space-y-10">
            <div className="bg-gray-50 p-10 rounded-3xl">
              <h3 className="text-3xl font-bold mb-4">Bedrooms</h3>
              <p className="text-gray-600">
                {room.features.bedrooms.description}
              </p>
            </div>

            <div className="bg-gray-50 p-10 rounded-3xl">
              <h3 className="text-3xl font-bold mb-4">Bathrooms</h3>
              <p className="text-gray-600">
                {room.features.bathrooms.description}
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-10 rounded-3xl">
            <h3 className="text-3xl font-bold mb-6">Living Spaces</h3>
            <p className="text-gray-600 mb-4">
              {room.features.commonAreas}
            </p>
            <p className="text-gray-600">
              {room.features.outdoorSpaces}
            </p>
          </div>
        </div>

        {/* GALLERY — MAGAZINE */}
        <div>
          <div className="text-center mb-16">
            <span className="text-[#ab8c55] uppercase tracking-widest">
              Gallery
            </span>
            <h2 className="text-5xl font-bold mt-6">
              Explore {room.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {room.galleryImages.map((img, i) => (
              <div
                key={i}
                className={`overflow-hidden rounded-3xl ${
                  i === 0 ? "md:col-span-2 md:row-span-2 h-[520px]" : "h-64"
                }`}
              >
                <img
                  src={img}
                  className="w-full h-full object-cover hover:scale-110 transition"
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>

        {/* POLICIES — CLEAN */}
        <div className="bg-gray-50 rounded-3xl p-16">
          <h2 className="text-4xl font-bold text-center mb-12">
            House Policies
          </h2>

          <div className="grid md:grid-cols-2 gap-10 text-lg text-gray-700">
            <p><strong>No Smoking:</strong> {room.rules.noSmoking}</p>
            <p><strong>Noise Control:</strong> {room.rules.noiseControl}</p>
            <p><strong>Room Capacity:</strong> {room.rules.roomCapacity}</p>
            <p><strong>Security:</strong> {room.rules.security}</p>
          </div>
        </div>

        {/* RELATED ROOMS — UPGRADED */}
        {relatedRooms.length > 0 && (
          <div>
            <h2 className="text-5xl font-bold text-center mb-16">
              Explore Other Properties
            </h2>

            <div className="grid md:grid-cols-3 gap-10">
              {relatedRooms.map((r) => (
                <Link key={r.id} to={`/rooms/${r.slug}`}>
                  <div className="rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition">
                    <img
                      src={r.image}
                      className="h-64 w-full object-cover"
                      alt=""
                    />
                    <div className="p-8">
                      <h3 className="text-2xl font-bold mb-2">{r.name}</h3>
                      <p className="text-gray-600 mb-4">
                        {r.shortDescription}
                      </p>
                      <span className="text-[#ab8c55] font-bold">
                        {r.price}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>

      <Footer />
    </div>
  );
};

export default RoomDetail;
