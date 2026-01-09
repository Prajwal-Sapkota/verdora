import { useState, useEffect, useRef } from 'react';

const CafeCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const timeoutRef = useRef(null);

    const carouselImages = [
        '/images/cafe1.webp',
        '/images/cafe2.webp',
        '/images/cafe3.webp',
        '/images/cafe4.webp',
    ];

    const [slidesToShow, setSlidesToShow] = useState(3);

    useEffect(() => {
        const updateSlidesToShow = () => {
            if (window.innerWidth >= 1024) {
                setSlidesToShow(3); 
            } else if (window.innerWidth >= 768) {
                setSlidesToShow(2);
            } else {
                setSlidesToShow(1); 
            }
        };

        updateSlidesToShow();
        window.addEventListener('resize', updateSlidesToShow);
        return () => window.removeEventListener('resize', updateSlidesToShow);
    }, []);

    const extendedImages = [
        ...carouselImages,
        ...carouselImages,
        ...carouselImages
    ];

    const resetTimeout = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };

    const nextSlide = () => {
        setIsTransitioning(true);
        setCurrentIndex(prev => {
            const newIndex = prev + 1;

            if (newIndex >= carouselImages.length * 2) {
                setTimeout(() => {
                    setIsTransitioning(false);
                    setCurrentIndex(carouselImages.length);
                }, 700);
                return newIndex;
            }

            return newIndex;
        });
    };

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(nextSlide, 5000);
        return resetTimeout;
    }, [currentIndex, slidesToShow]);

    return (
        <div className=" bg-[#f5f2ed]">
            <div className="w-full px-4 md:px-8 pt-8 sm:pt-10 md:pt-12 lg:pt-16">

                <div className="mb-8 sm:mb-10 md:mb-12 text-center max-w-7xl mx-auto">
                    <span className="text-[#ab8c55] font-semibold tracking-wider uppercase text-xs sm:text-sm">
                        Life around great food
                    </span>

                    <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-normal text-[#262626] leading-tight py-1 max-w-6xl mx-auto">
                        Bistros are known for their focus on high-quality, flavorful dishes that showcase local and seasonal ingredients.
                    </h1>
                </div>

                {/* CAROUSEL - FIXED spacing for small screens */}
                <div className="w-full overflow-hidden relative">
                    <div
                        className="flex"
                        style={{
                            transform: `translateX(-${(100 / slidesToShow) * currentIndex}%)`,
                            transition: isTransitioning
                                ? 'transform 700ms ease-in-out'
                                : 'none',
                        }}
                    >
                        {extendedImages.map((image, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0"
                                style={{ 
                                    width: `${100 / slidesToShow}%`,
                                    // Different padding for different screen sizes
                                    padding: slidesToShow === 1 ? '0 12px' : '0 8px'
                                }}
                            >
                                <div className="w-full h-full">
                                    <div className="h-[250px] xs:h-[280px] sm:h-[350px] md:h-[400px] lg:h-[500px] relative overflow-hidden rounded-lg">
                                        <img
                                            src={image}
                                            alt={`Cafe image ${(index % carouselImages.length) + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CafeCarousel;