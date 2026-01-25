import React, { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BookingForm from "./BookingForm";
import ShareModal from "./ShareModal";
import GallerySlider from "./GallerySlider";
import servicesData from "../../data/services.json";
import usePageTitle from "../../hooks/usePageTitle";
import { IoCallOutline, IoCheckmarkCircle, IoHeadsetOutline, IoLocationOutline, IoMailOutline, IoSearchOutline, IoTimeOutline } from "react-icons/io5";
import { FaShareAlt, FaStar } from "react-icons/fa";
import { FaSpa, FaTag, FaClock, FaMoneyBillWave, FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const ServiceDetail = () => {
    const { slug } = useParams();
    const service = servicesData.services.find((s) => s.slug === slug);

    usePageTitle(service ? service.name : "Service Not Found");

    const relatedServices = service
        ? [...servicesData.services.filter((s) => s.id !== service.id)]
            .sort(() => Math.random() - 0.5)
            .slice(0, 3)
        : [];

    const heroRefs = {
        subtitle: useRef(null),
        title: useRef(null),
        tagline: useRef(null),
        features: useRef(null),
        cta: useRef(null)
    };

    const introRef = useRef(null);
    const featuresRef = useRef(null);
    const detailsRef = useRef(null);
    const galleryRef = useRef(null);
    const contactRef = useRef(null);
    const relatedRef = useRef(null);
    const bookingRef = useRef(null);

    const [bookingModal, setBookingModal] = useState(false);
    const [shareModal, setShareModal] = useState(false);
    const [activeTab, setActiveTab] = useState("treatments");

    const hasTreatments = service?.treatments && service.treatments.length > 0;
    const hasPackages = service?.packages && service.packages.length > 0;

    useEffect(() => {
        if (hasTreatments) setActiveTab("treatments");
        else if (hasPackages) setActiveTab("packages");
    }, [service]);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [slug]);

    // Hero animations
    useEffect(() => {
        const delays = [200, 400, 600, 800, 1000];
        Object.values(heroRefs).forEach((ref, index) => {
            setTimeout(() => {
                if (ref.current) {
                    ref.current.classList.remove("opacity-0", "translate-y-8");
                    ref.current.classList.add("opacity-100", "translate-y-0");
                }
            }, delays[index]);
        });
    }, [service]);

    // Section animations
    useEffect(() => {
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
        }, { threshold: 0.05, rootMargin: "20px" });

        const sections = [
            introRef.current,
            featuresRef.current,
            detailsRef.current,
            galleryRef.current,
            contactRef.current,
            relatedRef.current,
            bookingRef.current
        ].filter(Boolean);

        sections.forEach(section => observer.observe(section));

        return () => observer.disconnect();
    }, [service]);

    // Helper function to get icon component
    const getIcon = (iconName) => {
        const iconMap = {
            FaSpa: FaSpa,
            FaTag: FaTag,
            FaClock: FaClock,
            FaMoneyBillWave: FaMoneyBillWave,
            FaArrowLeft: FaArrowLeft,
            FaArrowRight: FaArrowRight,
            FaShareAlt: FaShareAlt,
            FaStar: FaStar
        };
        return iconMap[iconName] || FaStar;
    };

    // Helper function to render icon as JSX
    const renderIcon = (iconName, className = "") => {
        const IconComponent = getIcon(iconName);
        return <IconComponent className={className} />;
    };

    const handleBookingSubmit = (bookingDetails) => {
        console.log("Booking details:", bookingDetails);
        setBookingModal(false);
        alert("Booking request submitted successfully! We will contact you shortly.");
    };

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center p-8">
                    <div className="text-6xl text-gray-300 mb-6">
                        <IoSearchOutline />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-700 mb-4">Service Not Found</h2>
                    <p className="text-gray-600 mb-6">The service you're looking for doesn't exist.</p>
                    <Link
                        to="/services"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#ab8c55] text-white hover:bg-[#8a6a3f] transition-colors"
                    >
                        <FaArrowLeft /> Back to Services
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white overflow-hidden">
            <Navbar />

            {/* Hero Section */}
            <div className="pt-16 sm:pt-0">
                <div className="relative rounded-b-2xl overflow-hidden h-[400px] sm:h-[450px] md:h-[540px] lg:h-[740px]">
                    <img
                        src={service.heroImage || service.image}
                        alt={service.name}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

                    <div className="relative h-full flex items-center">
                        <div className="w-full max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8 py-8 sm:py-10 md:py-16">
                            <div className="max-w-2xl">
                                {/* Subtitle */}
                                <div
                                    ref={heroRefs.subtitle}
                                    className="opacity-0 translate-y-8 transition-all duration-700 ease-out mb-3 sm:mb-4"
                                >
                                    <span className="inline-block px-3 sm:px-4 py-1 sm:py-2 rounded-full bg-[#ab8c55] text-white font-medium text-xs sm:text-sm">
                                        {service.subtitle}
                                    </span>
                                </div>

                                {/* Heading */}
                                <div
                                    ref={heroRefs.title}
                                    className="opacity-0 translate-y-8 transition-all duration-700 ease-out mb-3 sm:mb-4"
                                >
                                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                                        {service.name}
                                    </h1>
                                </div>

                                {/* Description */}
                                <div
                                    ref={heroRefs.tagline}
                                    className="opacity-0 translate-y-8 transition-all duration-700 ease-out mb-4 sm:mb-6 md:mb-8"
                                >
                                    <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed max-w-lg sm:max-w-xl">
                                        {service.tagline || service.shortDescription}
                                    </p>
                                </div>

                                {/* Service Features */}
                                <div
                                    ref={heroRefs.features}
                                    className="opacity-0 translate-y-8 transition-all duration-700 ease-out mb-6 sm:mb-8"
                                >
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                                        {/* Price */}
                                        {service.price && (
                                            <div className="flex items-center gap-2 text-white bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 sm:py-3 rounded-lg">
                                                <FaMoneyBillWave className="text-base sm:text-lg" />
                                                <div>
                                                    <div className="text-lg sm:text-xl font-bold">{service.price.split(' ')[0]}</div>
                                                    <div className="text-[10px] sm:text-xs text-gray-300">Starting Price</div>
                                                </div>
                                            </div>
                                        )}

                                        {/* Duration */}
                                        {service.duration && (
                                            <div className="flex items-center gap-2 text-white bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 sm:py-3 rounded-lg">
                                                <FaClock className="text-base sm:text-lg" />
                                                <div>
                                                    <div className="text-lg sm:text-xl font-bold">{service.duration}</div>
                                                    <div className="text-[10px] sm:text-xs text-gray-300">Duration</div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* CTA Buttons */}
                                <div
                                    ref={heroRefs.cta}
                                    className="opacity-0 translate-y-8 transition-all duration-700 ease-out flex flex-wrap gap-3 sm:gap-4"
                                >
                                    <button
                                        onClick={() => setBookingModal(true)}
                                        className="px-6 sm:px-8 md:px-12 py-2 sm:py-3 md:py-4 rounded-full bg-[#ab8c55] text-white font-semibold hover:bg-[#8a6d42] transition-all flex items-center gap-2 sm:gap-3 group text-sm sm:text-base md:text-lg"
                                    >
                                        Book Now <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                                    </button>

                                    <button
                                        onClick={() => setShareModal(true)}
                                        className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full bg-white/10 backdrop-blur-sm text-white font-semibold hover:bg-white/20 transition-all flex items-center gap-2 sm:gap-3 group text-sm sm:text-base md:text-lg"
                                    >
                                        Share <FaShareAlt className="group-hover:scale-110 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#f5f2ed]">
                <div
                    ref={introRef}
                    data-direction="left"
                    className="opacity-0 -translate-x-8 transition-all duration-700 max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8 py-12 sm:py-14 md:py-16 lg:py-20 grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center"
                >
                    <div className="order-2 lg:order-1 relative">
                        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl md:rounded-[2rem] lg:rounded-[2.5rem] shadow-xl">
                            <img
                                src={service.galleryImages?.[0] || service.image}
                                alt={`${service.name} experience`}
                                className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] object-cover hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-[#ab8c55]/10 backdrop-blur-sm flex items-center justify-center border-4 border-white shadow-lg">
                                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-white flex items-center justify-center">
                                    <div className="text-3xl sm:text-4xl text-[#ab8c55]">
                                        {renderIcon(service.icon)}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -top-6 -left-6 sm:-bottom-8 sm:-right-8 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-[#ab8c55]/10 backdrop-blur-sm flex items-center justify-center border-4 border-white shadow-lg">
                                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-white flex items-center justify-center">
                                    <div className="text-3xl sm:text-4xl text-[#ab8c55]">
                                        {renderIcon(service.icon)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <span className="text-[#ab8c55] uppercase tracking-widest font-semibold text-xs sm:text-sm">
                            About This Service
                        </span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 sm:mt-4 md:mt-6 mb-4 sm:mb-5 md:mb-6 lg:mb-8">
                            {service.intro?.title || service.name}
                        </h2>
                        <div className="space-y-3 sm:space-y-4">
                            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                                {service.intro?.description || service.description}
                            </p>
                            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                                {service.intro?.longDescription}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {service.features && (
                <div className="bg-white">
                    <div
                        ref={featuresRef}
                        data-direction="right"
                        className="opacity-0 translate-x-8 transition-all duration-700 max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8 py-12 sm:py-14 md:py-16 lg:py-20"
                    >
                        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
                            <span className="text-[#ab8c55] uppercase tracking-widest text-xs sm:text-sm">
                                Key Features
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 sm:mt-4 md:mt-5 lg:mt-6">
                                Everything For Your Comfort
                            </h2>
                            <p className="text-gray-600 mt-2 sm:mt-3 md:mt-4 max-w-lg sm:max-w-xl md:max-w-2xl mx-auto text-xs sm:text-sm md:text-base">
                                Premium features designed for exceptional experiences
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
                            {service.features.map((feature, index) => {
                                const Icon = getIcon(feature.icon);
                                return (
                                    <div
                                        key={index}
                                        className="bg-[#f5f2ed] p-5 sm:p-6 md:p-8 lg:p-10 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-md sm:shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                                    >
                                        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl bg-[#ab8c55]/10 flex items-center justify-center text-[#ab8c55] text-xl sm:text-2xl mb-4 sm:mb-5 md:mb-6">
                                            <Icon />
                                        </div>
                                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                                            {feature.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}

            {/* Gallery Section - White background */}
            {service.galleryImages && (
                <div className="bg-[#f5f2ed]">
                    <div
                        ref={galleryRef}
                        data-direction="up"
                        className="opacity-0 translate-y-8 transition-all duration-700 max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8 py-12 sm:py-14 md:py-16 lg:py-20"
                    >
                        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
                            <span className="text-[#ab8c55] uppercase tracking-widest text-xs sm:text-sm">
                                Gallery
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 sm:mt-4 md:mt-5 lg:mt-6">
                                Experience {service.name}
                            </h2>
                            <p className="text-gray-600 mt-2 sm:mt-3 md:mt-4 max-w-lg sm:max-w-xl md:max-w-2xl mx-auto text-xs sm:text-sm md:text-base">
                                Explore our premium service in detail
                            </p>
                        </div>
                        <GallerySlider images={service.galleryImages} serviceName={service.name} />
                    </div>
                </div>
            )}

            {/* Packages & Services Section */}
            {(hasTreatments || hasPackages) && (
                <div className="bg-[#f5f2ed]">
                    <div
                        ref={detailsRef}
                        data-direction="up"
                        className="opacity-0 translate-y-8 transition-all duration-700 max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-16"
                    >
                        <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                            <span className="text-[#ab8c55] uppercase tracking-widest text-xs sm:text-sm">
                                Service Details
                            </span>
                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-2 sm:mt-3 md:mt-4 lg:mt-5">
                                Packages & Services
                            </h2>
                        </div>

                        {/* Tab Navigation */}
                        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6">
                            {hasTreatments && (
                                <button
                                    onClick={() => setActiveTab("treatments")}
                                    className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-medium transition-all text-sm sm:text-base ${activeTab === "treatments"
                                        ? 'bg-[#ab8c55] text-white'
                                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'}`}
                                >
                                    <FaSpa className="inline mr-1.5 sm:mr-2" />
                                    Treatments
                                </button>
                            )}
                            {hasPackages && (
                                <button
                                    onClick={() => setActiveTab("packages")}
                                    className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-medium transition-all text-sm sm:text-base ${activeTab === "packages"
                                        ? 'bg-[#ab8c55] text-white'
                                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'}`}
                                >
                                    <FaTag className="inline mr-1.5 sm:mr-2" />
                                    Packages
                                </button>
                            )}
                        </div>

                        {/* Tab Content */}
                        <div className="">
                            {/* Treatments Tab */}
                            {activeTab === "treatments" && hasTreatments && (
                                <div className={`grid ${service.treatments.length === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'} gap-4 sm:gap-5 md:gap-6`}>
                                    {service.treatments.map((category, idx) => (
                                        <div
                                            key={idx}
                                            className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-all border border-gray-100"
                                        >
                                            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gray-900">
                                                {category.category}
                                            </h3>

                                            <div className="space-y-2.5 sm:space-y-3">
                                                {category.items?.slice(0, 4).map((item, i) => (
                                                    <div
                                                        key={i}
                                                        className="flex justify-between items-center border-b border-gray-100 pb-2"
                                                    >
                                                        <div className="pr-2">
                                                            <p className="font-medium text-xs sm:text-sm">
                                                                {item.name || item.model}
                                                            </p>
                                                            {item.duration && (
                                                                <span className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                                                                    <IoTimeOutline className="text-xs" />
                                                                    {item.duration}
                                                                </span>
                                                            )}
                                                        </div>
                                                        <span className="font-semibold text-[#ab8c55] text-sm sm:text-base whitespace-nowrap">
                                                            {item.price}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Packages Tab */}
                            {activeTab === "packages" && hasPackages && (
                                <div className={`grid ${service.packages.length === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'} gap-4 sm:gap-5 md:gap-6`}>
                                    {service.packages.map((pkg, idx) => (
                                        <div
                                            key={idx}
                                            className={`relative rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 transition-all ${idx === 1 && service.packages.length === 3
                                                ? "bg-[#ab8c55] text-white shadow-md sm:shadow-lg"
                                                : "bg-white shadow-sm sm:shadow-md border border-gray-100"
                                                }`}
                                        >
                                            {idx === 1 && service.packages.length === 3 && (
                                                <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full whitespace-nowrap">
                                                    MOST POPULAR
                                                </span>
                                            )}

                                            <h4 className="text-lg sm:text-xl font-semibold mb-2">
                                                {pkg.name}
                                            </h4>

                                            <p className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3">
                                                {pkg.price}
                                            </p>

                                            <p className="text-xs sm:text-sm flex items-center gap-2 mb-3 sm:mb-4 opacity-90">
                                                <IoTimeOutline />
                                                {pkg.duration}
                                            </p>

                                            <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-5 md:mb-6 text-xs sm:text-sm">
                                                {pkg.includes.slice(0, 4).map((item, i) => (
                                                    <li key={i} className="flex items-start gap-2">
                                                        <IoCheckmarkCircle className="mt-0.5 flex-shrink-0" />
                                                        <span className="flex-1">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>

                                            <button
                                                onClick={() => setBookingModal(true)}
                                                className={`w-full py-2 sm:py-2.5 rounded-lg font-medium transition text-sm sm:text-base ${idx === 1 && service.packages.length === 3
                                                    ? "bg-white text-[#ab8c55] hover:bg-gray-100"
                                                    : "bg-[#ab8c55] text-white hover:bg-[#8a6a3f]"
                                                    }`}
                                            >
                                                Book Now
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* Related Services Section - Light background (#f5f2ed) */}
            {relatedServices.length > 0 && (
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
                                Discover Other Premium Services
                            </h2>
                            <p className="text-gray-600 mt-2 sm:mt-3 md:mt-4 max-w-lg sm:max-w-xl md:max-w-2xl mx-auto text-xs sm:text-sm md:text-base">
                                Browse through our collection of exceptional experiences
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
                            {relatedServices.map((s) => {
                                const Icon = getIcon(s.icon);
                                return (
                                    <Link
                                        key={s.id}
                                        to={`/services/${s.slug}`}
                                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                        className="block group"
                                    >
                                        <div className="rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden shadow-md sm:shadow-lg hover:shadow-xl transition-all duration-300 bg-white h-full">
                                            <div className="h-40 sm:h-48 md:h-56 lg:h-64 overflow-hidden">
                                                <img
                                                    src={s.image}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                    alt={s.name}
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div className="p-4 sm:p-5 md:p-6 lg:p-8">
                                                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-1 sm:mb-2 group-hover:text-[#ab8c55] transition-colors">
                                                    {s.name}
                                                </h3>
                                                <p className="text-gray-600 mb-2 sm:mb-3 md:mb-4 line-clamp-2 text-xs sm:text-sm md:text-base">
                                                    {s.shortDescription}
                                                </p>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-[#ab8c55] font-bold text-base sm:text-lg md:text-xl">
                                                        {s.price}
                                                    </span>
                                                    <div className="flex gap-1 sm:gap-2 md:gap-3 lg:gap-4 text-xs sm:text-sm text-gray-500">
                                                        <span className="flex items-center gap-1">
                                                            <FaClock className="text-xs" />
                                                            {s.duration}
                                                        </span>
                                                        <span className="flex items-center gap-1">
                                                            <Icon className="text-xs" />
                                                            Premium
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}

            {/* Contact Section - White background */}
            {service.contact && (
                <div className="bg-white">
                    <div
                        ref={contactRef}
                        data-direction="left"
                        className="opacity-0 -translate-x-8 transition-all duration-700 max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8 py-12 sm:py-14 md:py-16 lg:py-20"
                    >
                        <div className="bg-gradient-to-r from-[#8a6a3f] to-[#9a7a4f] rounded-2xl p-6 md:p-8 text-white">
                            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold mb-4">Need Assistance?</h3>
                                    <p className="text-white/90 mb-6">
                                        Our team is ready to help you with any questions or special requests.
                                    </p>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <IoCallOutline className="text-xl" />
                                            <a href={`tel:${service.contact.phone}`} className="hover:text-white/80">
                                                {service.contact.phone}
                                            </a>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <IoMailOutline className="text-xl" />
                                            <a href={`mailto:${service.contact.email}`} className="hover:text-white/80">
                                                {service.contact.email}
                                            </a>
                                        </div>
                                        {service.contact.location && (
                                            <div className="flex items-center gap-3">
                                                <IoLocationOutline className="text-xl" />
                                                <span>{service.contact.location}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="inline-block p-6 bg-white/10 backdrop-blur-sm rounded-xl">
                                        <IoHeadsetOutline className="text-4xl mb-4 mx-auto" />
                                        <p className="text-lg font-medium">24/7 Support Available</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Modals */}
            {bookingModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
                    <BookingForm
                        service={service}
                        onClose={() => setBookingModal(false)}
                        onSubmit={handleBookingSubmit}
                    />
                </div>
            )}

            {shareModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
                    <ShareModal
                        onClose={() => setShareModal(false)}
                        serviceName={service.name}
                    />
                </div>
            )}

            <Footer />
        </div>
    );
};

export default ServiceDetail;