import React, { useEffect, useRef, useState } from 'react';

const RoomTypes = () => {
    const sectionRef = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    const rooms = [
        {
            id: 1,
            name: "Bungalow Apartments",
            description: "Experience the ultimate in comfort and relaxation as you indulge in the serenity of your own private retreat.",
            price: "$39 / NIGHT",
            image: "/images/bunglow.jpg",
            bathrooms: 1,
            bedrooms: 2,
            persons: "2-4"
        },
        {
            id: 2,
            name: "Family Cottage",
            description: "Our cottage provides a serene retreat for those seeking solace in nature's embrace for a peaceful and memorable stay.",
            price: "$58 / NIGHT",
            image: "/images/family.avif",
            bathrooms: 2,
            bedrooms: 3,
            persons: "4-7"
        },
        {
            id: 3,
            name: "Bubble House",
            description: "Perfect for romantic getaways, intimate gatherings, or solo adventures seeking a whimsical escape.",
            price: "$54 / NIGHT",
            image: "/images/bubble.avif",
            bathrooms: 2,
            bedrooms: 2,
            persons: "2-3"
        },
        {
            id: 4,
            name: "Standard Cottage",
            description: "Relax in rustic elegance, unwind on your private veranda, and immerse yourself in the beauty of the surroundings.",
            price: "$60 / NIGHT",
            image: "/images/standard.avif",
            bathrooms: 1,
            bedrooms: 2,
            persons: "3-5"
        },
        {
            id: 5,
            name: "Villa Bodrum",
            description: "With spacious interiors, modern amenities, and private outdoor spaces, each Villa is a haven of relaxation and rejuvenation.",
            price: "$108 / NIGHT",
            image: "/images/villa.avif",
            bathrooms: 3,
            bedrooms: 4,
            persons: "6-11"
        },
        {
            id: 6,
            name: "Single Apartments",
            description: "Designed for solo travelers or cozy couples, our apartments offer a cozy retreat amidst picturesque surroundings.",
            price: "$46 / NIGHT",
            image: "/images/single.avif",
            bathrooms: 1,
            bedrooms: 1,
            persons: "1-2"
        }
    ];

    // Intersection Observer for scroll animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    observer.disconnect();
                }
            },
            { 
                threshold: 0.1,
                rootMargin: '50px'
            }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => observer.disconnect();
    }, [hasAnimated]);

    return (
        <div ref={sectionRef} className="bg-white">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16 md:py-24">
                {/* Room Types Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
                    {rooms.map((room, index) => (
                        <div 
                            key={room.id} 
                            className="group cursor-pointer"
                            style={{
                                transform: hasAnimated 
                                    ? 'translateY(0)' 
                                    : 'translateY(80px)',
                                opacity: hasAnimated ? 1 : 0,
                                transition: `all 800ms ease-out ${index * 100}ms`,
                                willChange: 'transform, opacity'
                            }}
                        >
                            {/* Image */}
                            <div className="relative h-80 mb-6 overflow-hidden rounded-lg">
                                <img
                                    src={room.image}
                                    alt={room.name}
                                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                />
                            </div>

                            {/* Content Below Image */}
                            <div className="space-y-4">
                                {/* Room Name */}
                                <h3 className="text-2xl font-bold text-[#262626] group-hover:text-[#ab8c55] transition-colors duration-300">
                                    {room.name}
                                </h3>

                                {/* Description */}
                                <p className="text-[#262626]/80 text-lg leading-relaxed">
                                    {room.description}
                                </p>

                                {/* Room Details */}
                                <div className="grid grid-cols-3 gap-4 pt-4">
                                    <div className="text-center">
                                        <div className="text-[#ab8c55] text-2xl font-bold">{room.bathrooms}</div>
                                        <div className="text-[#262626]/70 text-sm">Bathrooms</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-[#ab8c55] text-2xl font-bold">{room.bedrooms}</div>
                                        <div className="text-[#262626]/70 text-sm">Bedrooms</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-[#ab8c55] text-2xl font-bold">{room.persons}</div>
                                        <div className="text-[#262626]/70 text-sm">Persons</div>
                                    </div>
                                </div>

                                <h1 className="text-[#262626] text-center px-4 py-2 font-normal border-t border-gray-400">
                                    {room.price}
                                </h1>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div 
                    className="text-center mt-16"
                    style={{
                        transform: hasAnimated ? 'translateY(0)' : 'translateY(50px)',
                        opacity: hasAnimated ? 1 : 0,
                        transition: 'all 1000ms ease-out 900ms',
                        willChange: 'transform, opacity'
                    }}
                >
                    <button className="group relative overflow-hidden px-8 py-4 rounded-full font-semibold text-base shadow-lg bg-[#ab8c55] text-[#262626] hover:bg-[#262626] hover:text-[#ab8c55] transition-all duration-500 mt-4">
                        <span className="relative z-10 flex items-center justify-center gap-3">
                            View All Accommodations
                            <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RoomTypes;