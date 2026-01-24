import React, { useState, useEffect } from 'react';
import * as FaIcons from 'react-icons/fa';

const GallerySlider = ({ images, serviceName }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => 
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [images.length]); // Add images.length as dependency

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative">
      {/* Main Image */}
      <div className="relative h-[400px] md:h-[640px] rounded-3xl overflow-hidden group">
        <img
          src={images[currentImageIndex]}
          alt={`${serviceName} ${currentImageIndex + 1}`}
          className="w-full h-full object-cover transition-opacity duration-500"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        
        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all flex items-center justify-center text-white opacity-0 group-hover:opacity-100"
          aria-label="Previous image"
        >
          <FaIcons.FaChevronLeft />
        </button>
        
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all flex items-center justify-center text-white opacity-0 group-hover:opacity-100"
          aria-label="Next image"
        >
          <FaIcons.FaChevronRight />
        </button>

        {/* Progress Indicator Dots */}
        <div className="absolute bottom-4 right-4 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentImageIndex 
                  ? 'bg-white w-6' 
                  : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GallerySlider;