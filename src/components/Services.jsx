import { useEffect, useRef, useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import servicesData from '../data/services.json';

const Services = () => {
    const textRef = useRef(null);
    const imageRef = useRef(null);
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    const services = servicesData.services;

    const getIcon = (iconName) => {
        const IconComponent = FaIcons[iconName];
        return IconComponent ? <IconComponent /> : <FaIcons.FaStar />;
    };

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setVisible(true);
                observer.disconnect();
            }
        }, { threshold: 0.25 });

        const element = sectionRef.current;
        if (element) observer.observe(element);

        return () => {
            if (element) observer.disconnect();
        };
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % services.length);
        }, 1500);

        return () => clearInterval(interval);
    }, [services.length]);

    const nextSlide = () => setCurrentIndex(prev => (prev + 1) % services.length);
    const prevSlide = () => setCurrentIndex(prev => (prev - 1 + services.length) % services.length);

    return (
        <div ref={sectionRef} className="bg-white">
            <div className="max-w-7xl mx-auto px-8 sm:px-8 py-16 md:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* LEFT TEXT CONTENT */}
                    <div
                        ref={textRef}
                        className={`space-y-8 transform transition-all duration-1000 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                    >
                        <span className="text-[#ab8c55] font-semibold tracking-wider uppercase text-sm">Our Services</span>
                        <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                            Premium Amenities for Your Comfort
                        </h1>

                        <div className="space-y-5">
                            <p className="text-gray-700 text-base md:text-lg">
                                Whether seeking a romantic getaway, a family vacation, or simply a peaceful escape from everyday life, the resort caters to every need.
                            </p>
                            <p className="text-gray-700 text-base md:text-lg">
                                Our comprehensive services are designed to enhance your stay and create unforgettable memories.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-8 py-2">
                            {services.slice(0, 4).map(service => (
                                <div key={service.id} className="flex items-center gap-3">
                                    <span className="text-[#ab8c55] text-lg">
                                        {getIcon(service.icon)}
                                    </span>
                                    <span className="text-gray-700">{service.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT IMAGE CONTENT */}
                    <div
                        ref={imageRef}
                        className={`flex justify-center transform transition-all duration-1000 ease-out delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'}`}
                    >
                        <div className="flex flex-col items-center w-full max-w-md">
                            <ServiceCard
                                service={services[currentIndex]}
                                isMobile={isMobile}
                                getIcon={getIcon}
                            />

                            {/* Navigation buttons */}
                            <div className="flex justify-center gap-6 mt-6">
                                <button
                                    onClick={prevSlide}
                                    className="w-12 h-12 flex items-center justify-center rounded-full bg-white border shadow hover:bg-[#ab8c55] hover:text-white transition"
                                >
                                    <FaIcons.FaChevronLeft />
                                </button>
                                <button
                                    onClick={nextSlide}
                                    className="w-12 h-12 flex items-center justify-center rounded-full bg-white border shadow hover:bg-[#ab8c55] hover:text-white transition"
                                >
                                    <FaIcons.FaChevronRight />
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

const ServiceCard = ({ service, isMobile, getIcon }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`relative overflow-hidden cursor-pointer h-[380px] md:h-[460px] w-full shadow-xl rounded-t-full rounded-b-2xl`}
            onMouseEnter={() => !isMobile && setIsHovered(true)}
            onMouseLeave={() => !isMobile && setIsHovered(false)}
        >
            <div className="w-full h-full overflow-hidden rounded-t-full rounded-b-2xl">
                <div className="relative w-full h-full">
                    <img
                        src={service.image}
                        alt={service.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>

                {isMobile ? (
                    <div className="absolute inset-0 z-20 flex items-center justify-center text-center p-4">
                        <div className="flex flex-col justify-center items-center h-full py-8">
                            <h2 className="text-4xl font-bold text-white py-2">{service.name}</h2>
                            <p className="text-md font-medium text-white leading-relaxed py-2">{service.shortDescription}</p>
                        </div>
                    </div>
                ) : (
                    <>
                        {/* Desktop overlay */}
                        <div className={`absolute inset-0 z-20 flex flex-col justify-center py-16 transition-all duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
                            <h2 className="text-4xl font-bold text-white text-center">{service.name}</h2>
                        </div>

                        <div className="absolute inset-0 overflow-hidden rounded-t-full rounded-b-2xl">
                            <div className={`absolute inset-0 bg-[#ab8c55] rounded-t-full rounded-b-2xl ${isHovered ? 'animate-slide-up-enter' : 'animate-slide-up-exit'}`} />
                            <div className={`absolute inset-0 p-8 flex flex-col justify-center py-24 transition-opacity duration-300 ${isHovered ? 'opacity-100 delay-200' : 'opacity-0'}`}>
                                <h2 className="text-4xl font-bold text-white text-center mb-4">{service.name}</h2>
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