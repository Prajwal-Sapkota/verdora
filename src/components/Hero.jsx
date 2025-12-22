// components/HeroSection.jsx
import React, { useEffect, useRef } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
    const headingRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const animateElements = [
            { ref: headingRef, delay: 300 },
            { ref: buttonRef, delay: 900 },
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

    return (
        <div className="  py-24 ">
            
            {/* Container for rounded corners and background */}
            <div className="relative rounded-2xl overflow-hidden h-[400px] md:h-[500px] lg:h-[600px]">
                
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img 
                        src="/images/banner.jpg" 
                        alt="Luxury Jungle Resort" 
                        className="w-full h-full object-cover" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
                </div>

                {/* Content Container - Centered with padding */}
                <div className="relative h-full flex items-center">
                    <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-10 md:py-16">
                        <div className="max-w-4xl">
                            
                            {/* Heading with proper spacing */}
                            <div ref={headingRef} className="opacity-0 translate-y-8 transition-all duration-700 ease-out py-2 md:py-4">
                                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                                    Unwind and Rejuvenate <br /> 
                                    in Nature&apos;s Embrace
                                </h1>
                            </div>

                            {/* Button with proper spacing */}
                            <div ref={buttonRef} className="opacity-0 translate-y-8 transition-all duration-700 ease-out">
                                <div className="relative group inline-block">
                                    <button className="relative overflow-hidden px-10 md:px-14 py-4 md:py-5 rounded-full font-semibold text-base md:text-lg shadow-xl bg-[#ab8c55] text-[#262626] hover:bg-[#262626] hover:text-[#ab8c55] transition-all duration-700 ease-in-out group">
                                        {/* Gray overlay that appears on hover */}
                                        <span className="absolute inset-0 bg-[#262626] rounded-full scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-700 ease-in-out"></span>
                                        
                                        {/* Button Text */}
                                        <span className="relative z-10 flex items-center gap-3">
                                            Discover More 
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
    );
};

export default Hero;