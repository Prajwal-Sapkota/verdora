import React, { useEffect, useRef } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
    const headingRef = useRef(null);
    const textRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const animateElements = [
            { ref: headingRef, delay: 300 },
            { ref: textRef, delay: 600 },
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
        <div className="pt-24">
            {/* Container for rounded corners and background */}
            <div className="relative rounded-2xl overflow-hidden  h-[450px] md:h-[550px] lg:h-[640px]">
                
                {/* Background Image - Use a gallery-related image */}
                <div className="absolute inset-0">
                    <img 
                        src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                        alt="Gallery Exhibition" 
                        className="w-full h-full object-cover" 
                    />
                    {/* Darker overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/40"></div>
                </div>

                {/* Content Container */}
                <div className="relative h-full flex items-center">
                    <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-10 md:py-16">
                        <div className="max-w-3xl">
                            
                            {/* Heading */}
                            <div ref={headingRef} className="opacity-0 translate-y-8 transition-all duration-700 ease-out mb-6">
                                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                                    Our Gallery<br />
                                    <span className="text-[#ab8c55]">Visual Stories</span>
                                </h1>
                            </div>

                            {/* Description Text */}
                            <div ref={textRef} className="opacity-0 translate-y-8 transition-all duration-700 ease-out mb-10">
                                <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl">
                                    Discover a curated collection of moments captured through the lens. 
                                    Each image tells a unique story of beauty, elegance, and unforgettable experiences.
                                </p>
                            </div>

                            {/* Button */}
                            <div ref={buttonRef} className="opacity-0 translate-y-8 transition-all duration-700 ease-out">
                                <div className="relative group inline-block">
                                    <button className="relative overflow-hidden px-10 md:px-14 py-4 md:py-5 rounded-full font-semibold text-base md:text-lg shadow-xl bg-[#ab8c55] text-[#262626] hover:bg-[#262626] hover:text-[#ab8c55] transition-all duration-700 ease-in-out group">
                                        {/* Gray overlay that appears on hover */}
                                        <span className="absolute inset-0 bg-[#262626] rounded-full scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-700 ease-in-out"></span>
                                        
                                        {/* Button Text */}
                                        <span className="relative z-10 flex items-center gap-3">
                                            Explore Gallery 
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