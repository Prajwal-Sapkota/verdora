import  { useEffect, useRef } from 'react';
import { FaArrowRight, FaCoffee, FaUtensils, FaStar } from 'react-icons/fa';

const Hero = () => {
    const headingRef = useRef(null);
    const textRef = useRef(null);
    const featuresRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const animateElements = [
            { ref: headingRef, delay: 300 },
            { ref: textRef, delay: 600 },
            { ref: featuresRef, delay: 700 },
            { ref: buttonRef, delay: 700 },
        ];

        animateElements.forEach(({ ref, delay }) => {
            setTimeout(() => {
                if (ref.current) {
                    ref.current.classList.remove('opacity-0', 'translate-y-8');
                    ref.current.classList.add('opacity-100', 'translate-y-0');
                }
            }, delay);
        });
    }, []);

    const cafeFeatures = [
        { icon: <FaCoffee className="text-lg" />, text: "Artisan Coffee" },
        { icon: <FaUtensils className="text-lg" />, text: "Gourmet Bites" },
        { icon: <FaStar className="text-lg" />, text: "Premium Quality" }
    ];

    return (
        <div className="pt-18 sm:pt-0">
            <div className="relative rounded-b-2xl overflow-hidden h-[500px] md:h-[550px] lg:h-[740px]">
                
                <div className="absolute inset-0">
                    <img 
                        src="/images/cafe.jpg" 
                        alt="Verdora Resort Cafe" 
                        className="w-full h-full object-cover" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent"></div>
                </div>

                <div className="relative h-full flex items-center">
                    <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-10 md:py-16">
                        <div className="max-w-3xl">
                            
                            {/* Heading */}
                            <div ref={headingRef} className="opacity-0 translate-y-8 transition-all duration-700 ease-out mb-4">
                                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                                    Verdora Resort <br/> Cafe
                                </h1>
                            </div>

                            {/* Description Text */}
                            <div ref={textRef} className="opacity-0 translate-y-8 transition-all duration-700 ease-out mb-8">
                                <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl">
                                    Experience culinary excellence in a serene setting. Our cafe offers 
                                    artisanal coffee, gourmet pastries, and light bites crafted with 
                                    locally sourced ingredients and served with impeccable hospitality.
                                </p>
                            </div>
                            {/* Button */}
                            <div ref={buttonRef} className="opacity-0 translate-y-8 transition-all duration-700 ease-out">
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <div className="relative group inline-block">
                                        <button className="relative overflow-hidden px-10 md:px-14 py-4 md:py-5 rounded-full font-semibold text-base md:text-lg shadow-xl bg-[#8a6a3f] text-white hover:bg-[#262626] hover:text-[#ab8c55] transition-all duration-700 ease-in-out group">
                                            {/* Gray overlay that appears on hover */}
                                            <span className="absolute inset-0 bg-[#262626] rounded-full scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-700 ease-in-out"></span>
                                            
                                            {/* Button Text */}
                                            <span className="relative z-10 flex items-center gap-3">
                                                View Our Menu 
                                                <FaArrowRight className="group-hover:translate-x-3 transition-transform duration-500" />
                                            </span>
                                        </button>
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

export default Hero;