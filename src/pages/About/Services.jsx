import React, { useEffect, useRef, useState } from 'react';
import {
    FaCar,
    FaSpa,
    FaHeart,
    FaChevronLeft,
    FaChevronRight,
    FaArrowRight
} from 'react-icons/fa';

const Services = () => {
    const textRef = useRef(null);
    const imageRef = useRef(null);
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    const services = [
        { 
            id: 1, 
            title: "Car Rental", 
            description: "Premium vehicle rentals for your convenience and comfort during your stay. Whether you need a luxury sedan or an SUV for family trips, we have the perfect vehicle for you.", 
            shortDescription: "Premium rentals for comfort and convenience.", 
            image: "/images/carrent.avif", 
            icon: <FaCar /> 
        },
        { 
            id: 2, 
            title: "Cozy Spa", 
            description: "Experience ultimate relaxation with our premium spa treatments. We specialize in crafting bespoke wellness experiences tailored to your unique preferences and needs.", 
            shortDescription: "Relax and rejuvenate with our spa.", 
            image: "/images/cozyspa.avif", 
            icon: <FaSpa /> 
        },
        { 
            id: 3, 
            title: "Travel Events", 
            description: "Plan unforgettable trips and exclusive events tailored to your preferences. From romantic getaways to family adventures, we ensure every experience is unique and memorable.", 
            shortDescription: "Unforgettable trips and exclusive events.", 
            image: "/images/travel.avif", 
            icon: <FaHeart /> 
        }
    ];

    // Check mobile screen
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Intersection Observer for animation
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setVisible(true);
                observer.disconnect();
            }
        }, { threshold: 0.25 });

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % services.length);
        }, 4000); // Slower auto-slide for better user experience

        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => setCurrentIndex(prev => (prev + 1) % services.length);
    const prevSlide = () => setCurrentIndex(prev => (prev - 1 + services.length) % services.length);

    return (
        <div ref={sectionRef} className="bg-white">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16 md:py-24">
                {/* REVERSED LAYOUT: Image on left, Text on right */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* LEFT SIDE - IMAGE CONTENT (Full Circle) */}
                    <div
                        ref={imageRef}
                        className={`lg:order-1 transform transition-all duration-1000 ease-out ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'}`}
                    >
                        <div className="flex flex-col items-center w-full max-w-lg">
                            {/* Full Circle Image Container */}
                            <div className="relative w-full aspect-square max-w-[500px]">
                                <ServiceCircle service={services[currentIndex]} isMobile={isMobile} />
                                
                                {/* Navigation buttons - Positioned around circle */}
                                <button
                                    onClick={prevSlide}
                                    className="absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white border shadow-lg hover:bg-[#ab8c55] hover:text-white transition-all duration-300 z-30"
                                >
                                    <FaChevronLeft />
                                </button>
                                <button
                                    onClick={nextSlide}
                                    className="absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white border shadow-lg hover:bg-[#ab8c55] hover:text-white transition-all duration-300 z-30"
                                >
                                    <FaChevronRight />
                                </button>
                            </div>

                            {/* Service Indicators */}
                            <div className="flex justify-center gap-3 mt-8">
                                {services.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentIndex(index)}
                                        className={`w-3 h-3 p-4 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-[#ab8c55] w-8' : 'bg-gray-300 hover:bg-gray-400'}`}
                                   ></button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE - TEXT CONTENT */}
                    <div
                        ref={textRef}
                        className={`lg:order-2 space-y-8 transform transition-all duration-1000 ease-out delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                    >
                        <div>
                            <span className="text-[#ab8c55] font-semibold tracking-wider uppercase text-sm">Our Services</span>
                            <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-[#262626] leading-tight">
                                Enhancing Your Stay with Premium Services
                            </h1>
                        </div>

                        <div className="space-y-6">
                            <p className="text-[#262626]/80 text-base md:text-lg leading-relaxed">
                                Whether seeking a romantic getaway, a family vacation, or simply a peaceful escape from the hustle and bustle of everyday life, the resort caters to every need and desire.
                            </p>
                            <p className="text-[#262626]/80 text-base md:text-lg leading-relaxed">
                                Our dedicated services are designed to provide exceptional comfort and create memorable experiences throughout your stay.
                            </p>
                        </div>

                        {/* See All Services Button */}
                        <button className="group relative overflow-hidden px-8 py-4 rounded-full font-semibold text-base shadow-lg bg-[#ab8c55] text-[#262626] hover:bg-[#262626] hover:text-[#ab8c55] transition-all duration-500 mt-4">
                            <span className="relative z-10 flex items-center gap-3">
                                See All Services
                                <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                            </span>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

const ServiceCircle = ({ service, isMobile }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`relative w-full h-full cursor-pointer ${isMobile ? 'rounded-full' : ''}`}
            onMouseEnter={() => !isMobile && setIsHovered(true)}
            onMouseLeave={() => !isMobile && setIsHovered(false)}
        >
            {/* Full Circle Container */}
            <div className="absolute inset-0 rounded-full overflow-hidden shadow-2xl border-8 border-white">
                {/* Background Image */}
                <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700"
                />
                
                {/* Initial Dark Overlay - Fades out on hover */}
                <div className={`absolute inset-0 transition-all duration-500 ${isHovered ? 'bg-black/0' : 'bg-black/40'}`}></div>
            </div>

            {/* Default View (Shows when not hovered) */}
            {!isHovered && (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 z-20">
                    <div className="text-center">
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
                            <div className="text-3xl text-white">
                                {service.icon}
                            </div>
                        </div>
                        <h3 className="text-4xl font-bold text-white mb-4">{service.title}</h3>
                        <p className="text-white/90 font-medium max-w-sm text-lg">{service.shortDescription}</p>
                    </div>
                </div>
            )}

            {/* Yellow Overlay Container - Same effect as home page */}
            <div className="absolute inset-0 overflow-hidden rounded-full">
                {/* Yellow overlay that slides from bottom - EXACTLY like home page */}
                <div 
                    className={`absolute inset-0 bg-[#ab8c55] rounded-full transition-transform duration-700 ease-in-out ${
                        isHovered 
                            ? 'translate-y-0' 
                            : 'translate-y-full'
                    }`}
                />
                
                {/* Overlay Content - Same timing as home page */}
                <div className={`absolute inset-0 flex flex-col items-center justify-center p-8 transition-opacity duration-300 ${
                    isHovered ? 'opacity-100 delay-200' : 'opacity-0'
                }`}>
                    <div className="text-center max-w-md z-10">
                        <div className="mb-6">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-4">
                                <div className="text-2xl text-white">
                                    {service.icon}
                                </div>
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-4">{service.title}</h3>
                            <p className="text-white/90 text-lg leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Animated Border */}
            <div className="absolute inset-0 rounded-full border-4 border-transparent">
                <div className={`absolute inset-0 rounded-full border-4 border-[#ab8c55] transition-all duration-500 ${
                    isHovered ? 'scale-105 opacity-100' : 'scale-100 opacity-70'
                }`}></div>
            </div>

            {/* Hover Instruction (Desktop only) */}
            {!isMobile && (
                <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 text-sm transition-opacity duration-300 ${
                    isHovered ? 'opacity-0' : 'opacity-100'
                }`}>
                    
                </div>
            )}
        </div>
    );
};

export default Services;