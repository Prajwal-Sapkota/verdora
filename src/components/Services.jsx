import React, { useEffect, useRef, useState } from 'react';
import {
    FaCar,
    FaSpa,
    FaUtensils,
    FaFire,
    FaChild,
    FaHeart,
    FaChevronLeft,
    FaChevronRight
} from 'react-icons/fa';

const Services = () => {
    const sectionRef = useRef(null);
    const [loaded, setLoaded] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    const services = [
        {
            id: 1,
            title: "Car Rental",
            description: "Premium vehicle rentals for your convenience and comfort during your stay. Whether you need a luxury sedan or an SUV for family trips, we have the perfect vehicle for you.",
            shortDescription: "Premium rentals for comfort and convenience.",
            image: "/images/carrent.jpg",
            icon: <FaCar />
        },
        {
            id: 2,
            title: "Cozy Spa",
            description: "We specialize in crafting bespoke travel events tailored to your unique preferences and interests. Experience ultimate relaxation with our premium spa treatments.",
            shortDescription: "Relax and rejuvenate with our spa.",
            image: "/images/cozyspa.jpg",
            icon: <FaSpa />
        },
        {
            id: 3,
            title: "Food Court",
            description: "Experience culinary excellence with our diverse range of international cuisines. From local delicacies to gourmet international dishes, we cater to every palate.",
            shortDescription: "Delicious international cuisines for every palate.",
            image: "/images/food.jpg",
            icon: <FaUtensils />
        },
        {
            id: 4,
            title: "Dry Sauna",
            description: "Our state-of-the-art dry sauna offers a serene retreat from the hustle and bustle of the outside world. Rejuvenate your body and mind in our premium wellness facility.",
            shortDescription: "Rejuvenate in our premium dry sauna.",
            image: "/images/drysauna.jpg",
            icon: <FaFire />
        },
        {
            id: 5,
            title: "Kids' Camp",
            description: "Engaging activities and supervised care for children of all ages. Our trained professionals ensure your kids have a fun, educational, and safe experience.",
            shortDescription: "Fun and safe activities for kids.",
            image: "/images/kids.jpg",
            icon: <FaChild />
        },
        {
            id: 6,
            title: "Travel Events",
            description: "Plan unforgettable trips and exclusive events tailored to your preferences. From romantic getaways to family adventures, we ensure every experience is unique and memorable.",
            shortDescription: "Unforgettable trips and exclusive events.",
            image: "/images/travel.jpg",
            icon: <FaHeart />
        }
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

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Auto slide every 5 seconds
    useEffect(() => {
        if (!loaded) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                const newIndex = prevIndex + 1;
                return newIndex >= services.length ? 0 : newIndex;
            });
        }, 5000);

        return () => clearInterval(interval);
    }, [loaded, services.length]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = prevIndex + 1;
            return newIndex >= services.length ? 0 : newIndex;
        });
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = prevIndex - 1;
            return newIndex < 0 ? services.length - 1 : newIndex;
        });
    };

    return (
        <div ref={sectionRef} className="bg-white">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16 md:py-20">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* LEFT CONTENT */}
                    <div className="space-y-8">
                        <div>
                            <span className="text-[#ab8c55] font-semibold tracking-wider uppercase text-sm">
                                Our Services
                            </span>

                            <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                Premium Amenities for Your Comfort
                            </h1>
                        </div>

                        <div className="space-y-5">
                            <p className="text-gray-700 text-base md:text-lg">
                                Whether seeking a romantic getaway, a family vacation, or simply a peaceful
                                escape from everyday life, the resort caters to every need.
                            </p>

                            <p className="text-gray-700 text-base md:text-lg">
                                Our comprehensive services are designed to enhance your stay and create
                                unforgettable memories.
                            </p>
                        </div>

                        {/* ICON LIST */}
                        <div className="grid grid-cols-2 gap-8 py-2">
                            {services.slice(0, 4).map(service => (
                                <div key={service.id} className="flex items-center gap-3">
                                    <span className="text-[#ab8c55] text-lg">{service.icon}</span>
                                    <span className="text-gray-700">{service.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="relative flex justify-end py-8 lg:py-0">
                        <div className="flex flex-col items-center">

                            {/* Image + buttons wrapper */}
                            <div className="w-full max-w-sm md:max-w-md">

                                {/* Service Card */}
                                <ServiceCard
                                    service={services[currentIndex]}
                                    isMobile={isMobile}
                                />

                                {/* Navigation buttons – now centered to IMAGE */}
                                <div className="flex justify-center gap-6 mt-8">
                                    <button
                                        onClick={prevSlide}
                                        className="w-12 h-12 flex items-center justify-center rounded-full bg-white border shadow hover:bg-[#ab8c55] hover:text-white transition"
                                    >
                                        <FaChevronLeft />
                                    </button>

                                    <button
                                        onClick={nextSlide}
                                        className="w-12 h-12 flex items-center justify-center rounded-full bg-white border shadow hover:bg-[#ab8c55] hover:text-white transition"
                                    >
                                        <FaChevronRight />
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

const ServiceCard = ({ service, isMobile }) => {
    const [isHovered, setIsHovered] = useState(false);

    const shouldShowDescription = isMobile || isHovered;

    return (
        <div
            className={`relative overflow-hidden cursor-pointer 
  h-[380px] md:h-[460px] w-full max-w-md
  shadow-xl rounded-t-full rounded-b-2xl`}
            onMouseEnter={() => !isMobile && setIsHovered(true)}
            onMouseLeave={() => !isMobile && setIsHovered(false)}
        >
            <div className="w-full h-full overflow-hidden rounded-t-full rounded-b-2xl">
                <div className="relative w-full h-full">
                    <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>

                {/* Mobile Overlay */}
                {isMobile ? (
                    <div className="absolute inset-0 z-20 flex items-center justify-center text-center p-4">
                        <div className="flex flex-col justify-center items-center h-full py-8">
                            <h3 className="text-4xl font-bold text-white py-2">{service.title}</h3>
                            <p className="text-md font-medium text-white leading-relaxed py-2">
                                {service.shortDescription}
                            </p>
                        </div>
                    </div>
                ) : (
                    <>
                        {/* Desktop Title */}
                        <div className={`absolute inset-0 z-20 flex flex-col justify-center py-16 transition-all duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
                            <div className="flex items-center justify-center">
                                <div>
                                    <h3 className="text-4xl font-bold text-white text-center">{service.title}</h3>
                                </div>
                            </div>
                        </div>

                        {/* Desktop Yellow Overlay */}
                        <div className="absolute inset-0 overflow-hidden rounded-t-full rounded-b-2xl">
                            <div
                                className={`absolute inset-0 bg-[#ab8c55] rounded-t-full rounded-b-2xl ${isHovered ? 'animate-slide-up-enter' : 'animate-slide-up-exit'}`}
                            />

                            <div className={`absolute inset-0 p-8 flex flex-col justify-center py-24 transition-opacity duration-300 ${isHovered ? 'opacity-100 delay-200' : 'opacity-0'}`}>
                                <div className="flex items-center justify-center mb-6">
                                    <h3 className="text-4xl font-bold text-white">{service.title}</h3>
                                </div>
                                <p className="text-white leading-relaxed py-2 text-center">{service.description}</p>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Services;