import React, { useState, useEffect, useRef } from 'react';
import {
    FaTree,
    FaMountain,
    FaWater,
    FaUmbrellaBeach,
    FaShower,
    FaBed,
    FaUserFriends,
    FaLeaf,
    FaSeedling,
    FaPaw,
    FaSun,
    FaMoon,
    FaStar,
    FaCalendarAlt,
    FaCheckCircle,
    FaArrowRight,
    FaInfoCircle,
    FaWifi,
    FaCar,
    FaCoffee,
    FaSwimmingPool,
    FaUtensils,
    FaSpa,
    FaTshirt
} from 'react-icons/fa';

const Suites = () => {
    const [activeSuite, setActiveSuite] = useState(1);
    const [hoveredSuite, setHoveredSuite] = useState(null);
    const [isInView, setIsInView] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isInView) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.1,
                rootMargin: '50px'
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (observer) observer.disconnect();
        };
    }, [isInView]);

    const suites = [
        {
            id: 1,
            title: "Bubble House",
            subtitle: "Stargazer Dome",
            description: "Perfect for romantic getaways, intimate gatherings, or solo adventurers seeking a whimsical escape under the jungle stars. Sleep under a canopy of stars in our transparent bubble domes.",
            price: "$54",
            priceLabel: "Night",
            image: "/images/bubble.avif",
            facilities: [
                { icon: <FaCoffee />, label: "Breakfast included" },
                { icon: <FaTshirt />, label: "Laundry facilities" },
                { icon: <FaCar />, label: "Pickup and drop" }
            ],
            icon: <FaMoon />
        },
        {
            id: 2,
            title: "Villa Bodrum",
            subtitle: "Jungle Oasis",
            description: "With spacious interiors, modern amenities, and private outdoor spaces, each Villa is a haven of relaxation and rejuvenation. Featuring infinity pools that blend with the horizon.",
            price: "$108",
            priceLabel: "Night",
            image: "/images/villa.avif",
            facilities: [
                { icon: <FaCoffee />, label: "Breakfast included" },
                { icon: <FaTshirt />, label: "Laundry facilities" },
                { icon: <FaCar />, label: "Pickup and drop" }
            ],
            icon: <FaUmbrellaBeach />
        },
        {
            id: 3,
            title: "Family Cottage",
            subtitle: "River Retreat",
            description: "Our cottage provides a serene retreat for those seeking solace in nature's embrace, just steps from a gentle jungle stream. Perfect family getaway with safe exploration areas.",
            price: "$58",
            priceLabel: "Night",
            image: "/images/family.avif",
            facilities: [
                { icon: <FaCoffee />, label: "Breakfast included" },
                { icon: <FaTshirt />, label: "Laundry facilities" },
                { icon: <FaCar />, label: "Pickup and drop" }
            ],
            icon: <FaWater />
        },
        {
            id: 4,
            title: "Standard Cottage",
            subtitle: "Forest Haven",
            description: "Relax in rustic elegance, unwind on your private veranda, and immerse yourself in the beauty of the surroundings. Built with sustainable local materials blending with forest environment.",
            price: "$60",
            priceLabel: "Night",
            image: "/images/standard.avif",
            facilities: [
                { icon: <FaCoffee />, label: "Breakfast included" },
                { icon: <FaTshirt />, label: "Laundry facilities" },
                { icon: <FaCar />, label: "Pickup and drop" }
            ],
            icon: <FaLeaf />
        },
        {
            id: 5,
            title: "Single Apartments",
            subtitle: "Canopy Studio",
            description: "Designed for solo travelers or cozy couples, our apartments offer a cozy retreat amidst picturesque surroundings. Compact yet comfortable with large windows bringing outdoors in.",
            price: "$46",
            priceLabel: "Night",
            image: "/images/single.avif",
            facilities: [
                { icon: <FaCoffee />, label: "Breakfast included" },
                { icon: <FaTshirt />, label: "Laundry facilities" },
                { icon: <FaCar />, label: "Pickup and drop" }
            ],
            icon: <FaSeedling />
        }
    ];

    const activeSuiteData = suites.find(suite => suite.id === activeSuite);

    return (
        <div className="h-screen-[70vh] py-12" ref={sectionRef}>
            <div className="max-w-full mx-auto">
                <div className="flex flex-col lg:flex-row min-h-[600px]">
                    {/* Left Panel - Comes from left */}
                    <div className={`lg:w-1/4 relative z-40 transition-all duration-1000 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
                        <div className="bg-[#f5f2ed] h-full relative">
                            <div className="relative ">
                                {suites.map((suite, index) => {
                                    const isActive = activeSuite === suite.id;
                                    const isHovered = hoveredSuite === suite.id;

                                    return (
                                        <div
                                            key={suite.id}
                                            className={`relative overflow-visible cursor-pointer group transition-all duration-700 ${isInView ? 'opacity-100' : 'opacity-0'}`}
                                            style={{ transitionDelay: `${index * 100}ms` }}
                                            onClick={() => setActiveSuite(suite.id)}
                                            onMouseEnter={() => setHoveredSuite(suite.id)}
                                            onMouseLeave={() => setHoveredSuite(null)}
                                        >
                                            {/* Hover background */}
                                            <div
                                                className={`absolute inset-0 transition-all duration-500 ease-out ${isHovered || isActive ? 'translate-x-0' : '-translate-x-full'
                                                    }`}
                                                style={{ backgroundColor: '#ab8c55' }}
                                            ></div>

                                            {/* Content */}
                                            <div
                                                className={`relative pl-6 sm:pl-16 py-8 transition-all duration-300`}
                                            >
                                                <div className="flex items-center">
                                                    <div
                                                        className={`flex items-center justify-center w-10 h-10 rounded-full mr-4 transition-all duration-500 ${isActive || isHovered ? 'text-[#ab8c55] bg-white scale-110' : 'text-[#1f2937] bg-[#f3f4f6]'
                                                            }`}
                                                    >
                                                        <span className="font-medium text-lg">{suite.id.toString().padStart(2, '0')}</span>
                                                    </div>
                                                    <div className="flex-1">
                                                        <span
                                                            className={`font-medium transition-all duration-500 ${isActive || isHovered ? 'text-white translate-x-2' : 'text-[#1f2937]'
                                                                }`}
                                                        >
                                                            {suite.title}
                                                        </span>
                                                    </div>
                                                    <div
                                                        className={`relative transition-all duration-500 transform ${isActive || isHovered
                                                                ? 'opacity-100 translate-x-0 sm:translate-x-2 md:translate-x-8 scale-110'
                                                                : 'opacity-0 translate-x-0 sm:translate-x-1'
                                                            }`}
                                                    >
                                                        <div
                                                            className={`suite-arrow flex items-center justify-center w-14 h-14 rounded-full transition-all duration-500 ${isActive || isHovered
                                                                    ? 'bg-[#ab8c55] '
                                                                    : 'bg-transparent'
                                                                }`}
                                                        >
                                                            <FaArrowRight className="text-white text-lg" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Middle Section (Image) - Falls down */}
                    <div className={`lg:w-3/4 relative z-30 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-20 scale-95'}`}>
                        <div className="bg-[#f5f2ed] overflow-hidden transition-all duration-500 h-full">
                            <div className="md:flex h-full">
                                {/* Image Section */}
                                <div className="md:w-1/2 h-[500px] md:h-[600px] relative overflow-hidden group">
                                    <img
                                        src={activeSuiteData?.image}
                                        alt={activeSuiteData?.title}
                                        className="w-full h-full object-cover object-center min-h-full min-w-full transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                                    <div className={`absolute bottom-0 right-0 flex items-center transition-all duration-700 ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                                        {/* Price Box */}
                                        <div className="bg-white px-12 py-4 flex flex-col items-center justify-center">
                                            <h1 className="text-4xl font-bold text-[#1f2937]">{activeSuiteData?.price}</h1>
                                            <span className="text-sm font-medium text-[#1f2937] uppercase tracking-wide">
                                                Per {activeSuiteData?.priceLabel}
                                            </span>
                                        </div>

                                        {/* Book Now Button */}
                                        <button className="flex items-center justify-center text-white font-semibold py-8 px-2 transition-all duration-700 overflow-hidden relative shadow-2xl hover:shadow-3xl bg-[#242424] min-w-[200px]">
                                            <span className="relative z-10 flex items-center justify-center text-lg">
                                                BOOK NOW
                                                <span className="flex items-center justify-center w-7 h-7 ml-3 rounded-full bg-[#383838] text-white">
                                                    <FaArrowRight className="text-sm" />
                                                </span>
                                            </span>
                                            <div className="absolute inset-0 transform -translate-x-full hover:translate-x-0 transition-transform duration-500"></div>
                                        </button>
                                    </div>
                                </div>

                                {/* Right Content Section - Comes from right */}
                                <div className={`md:w-1/2 px-18 py-24 flex flex-col h-full transition-all duration-1000 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
                                    <div className="flex-row">
                                        <span className={`text-xl font-medium text-[#ab8c55] transition-all duration-700 ${isInView ? 'opacity-100' : 'opacity-0'}`}>{activeSuiteData?.subtitle}</span>
                                        <h2 className={`text-3xl font-bold text-[#1f2937] py-4 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                                            style={{ transitionDelay: '200ms' }}>{activeSuiteData?.title}</h2>
                                        <p className={`text-[#1f2937] py-4 text-justify transition-all duration-700 ${isInView ? 'opacity-100' : 'opacity-0'}`}
                                            style={{ transitionDelay: '300ms' }}>
                                            {activeSuiteData?.description}
                                        </p>
                                        <div className={`py-6 transition-all duration-700 ${isInView ? 'opacity-100' : 'opacity-0'}`}
                                            style={{ transitionDelay: '400ms' }}>
                                            <div className="grid grid-cols-3">
                                                {activeSuiteData?.facilities.map((f, i) => (
                                                    <div
                                                        key={i}
                                                        className={`flex flex-col items-center justify-center p-4 transition-all duration-700 hover:shadow-md hover:-translate-y-1 bg-[#f5efe620] rounded-lg ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                                                        style={{ transitionDelay: `${500 + (i * 100)}ms` }}
                                                    >
                                                        <div className="flex items-center justify-center w-12 h-12 rounded-full mb-2 bg-[#f5efe6] text-[#ab8c55] text-xl">
                                                            {f.icon}
                                                        </div>
                                                        <span className="text-[#1f2937] text-center">{f.label}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Suites;