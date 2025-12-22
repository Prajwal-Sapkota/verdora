import React, { useState, useEffect } from 'react';
import {
    FaCar,
    FaSpa,
    FaUtensils,
    FaFire,
    FaChild,
    FaHeart,
    FaArrowRight,
    FaChevronLeft,
    FaChevronRight
} from 'react-icons/fa';

const Services = () => {
    const services = [
        {
            id: 1,
            title: "Car Rental",
            description: "Premium vehicle rentals for your convenience and comfort during your stay. Whether you need a luxury sedan or an SUV for family trips, we have the perfect vehicle for you.",
            shortDescription: "Premium rentals for comfort and convenience.",
            image: "/images/carrent.jpg",
        },
        {
            id: 2,
            title: "Cozy Spa",
            description: "We specialize in crafting bespoke travel events tailored to your unique preferences and interests. Experience ultimate relaxation with our premium spa treatments.",
            shortDescription: "Relax and rejuvenate with our spa.",
            image: "/images/cozyspa.jpg",
        },
        {
            id: 3,
            title: "Food Court",
            description: "Experience culinary excellence with our diverse range of international cuisines. From local delicacies to gourmet international dishes, we cater to every palate.",
            shortDescription: "Delicious international cuisines for every palate.",
            image: "/images/food.jpg",
        },
        {
            id: 4,
            title: "Dry Sauna",
            description: "Our state-of-the-art dry sauna offers a serene retreat from the hustle and bustle of the outside world. Rejuvenate your body and mind in our premium wellness facility.",
            shortDescription: "Rejuvenate in our premium dry sauna.",
            image: "/images/drysauna.jpg",
        },
        {
            id: 5,
            title: "Kids' Camp",
            description: "Engaging activities and supervised care for children of all ages. Our trained professionals ensure your kids have a fun, educational, and safe experience.",
            shortDescription: "Fun and safe activities for kids.",
            image: "/images/kids.jpg",
        },
        {
            id: 6,
            title: "Travel Events",
            description: "Plan unforgettable trips and exclusive events tailored to your preferences. From romantic getaways to family adventures, we ensure every experience is unique and memorable.",
            shortDescription: "Unforgettable trips and exclusive events.",
            image: "/images/travel.jpg",
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    // Detect mobile screen
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => {
            if (isMobile) {
                const newIndex = prevIndex + 1;
                return newIndex >= services.length ? 0 : newIndex;
            } else {
                const newIndex = prevIndex + 3;
                return newIndex >= services.length ? 0 : newIndex;
            }
        });
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => {
            if (isMobile) {
                const newIndex = prevIndex - 1;
                return newIndex < 0 ? services.length - 1 : newIndex;
            } else {
                const newIndex = prevIndex - 3;
                return newIndex < 0 ? Math.max(0, services.length - 3) : newIndex;
            }
        });
    };

    const getCurrentServices = () => {
        return isMobile ? [services[currentIndex]] : services.slice(currentIndex, currentIndex + 3);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-4 px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl mx-auto text-center py-16">
                <span className="text-xl font-normal text-[#ab8c55] tracking-tight">
                    Our Services
                </span>
                <h1 className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed py-4">
                    Whether seeking a romantic getaway, a family vacation, or simply a peaceful escape from
                    the hustle and bustle of everyday life, the resort caters to every need and desire.
                </h1>
            </div>

            <div className="max-w-6xl mx-auto">
                {/* Mobile Slider */}
                <div className="md:hidden py-8">
                    <div className="flex justify-center">
                        <ServiceCard service={services[currentIndex]} isMobile={isMobile} />
                    </div>
                </div>

                {/* Desktop Grid */}
                <div className="hidden md:grid grid-cols-3 gap-4 py-2">
                    {getCurrentServices().map((service) => (
                        <ServiceCard key={service.id} service={service} isMobile={isMobile} />
                    ))}
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-center items-center space-x-6 py-8">
                    <button
                        onClick={prevSlide}
                        className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-black hover:bg-[#ab8c55] border border-gray-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:scale-95"
                    >
                        <FaChevronLeft className="text-lg" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-black hover:bg-[#ab8c55] border border-gray-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:scale-95"
                    >
                        <FaChevronRight className="text-lg" />
                    </button>
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
            className={`relative cursor-pointer overflow-hidden ${isMobile ? 'w-full max-w-sm' : ''} h-[400px] md:h-[450px] shadow-xl hover:shadow-2xl transition-shadow duration-500 rounded-t-full rounded-b-2xl`}
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
                                <div className="flex items-center justify-center py-6">
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
