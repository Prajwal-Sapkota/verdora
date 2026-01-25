import { useState, useEffect } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "The hotel exudes sophistication and elegance, creating a truly luxurious atmosphere. The attention to detail in every aspect of the hotel, from the chic decor to the gourmet dining options, is evident.",
      author: "Albert Garcia",
      role: "Guest",
      image: "/images/t2.jpg"
    },
    {
      id: 2,
      text: "An unforgettable experience! The service was impeccable and the rooms were breathtaking. Every moment felt like a dream come true.",
      author: "Sarah Johnson",
      role: "Business Traveler",
      image: "/images/t1.avif"
    },
    {
      id: 3,
      text: "Perfect blend of luxury and comfort. The staff went above and beyond to make our stay memorable. Highly recommended for anyone seeking excellence.",
      author: "Michael Chen",
      role: "VIP Guest",
      image: "/images/t4.avif"
    },
    {
      id: 4,
      text: "Exceptional service from start to finish. The attention to detail and personalized touches made our anniversary celebration truly special.",
      author: "Emma Williams",
      role: "Honeymooner",
      image: "/images/t3.avif"
    }
  ];

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="py-16 px-4 bg-[#e0dccd]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center ">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-700 py-4">
            What Our Guests Say About Us
          </h1>
        </div>

        {/* Testimonial Slider */}
        <div className="relative">
          {/* Testimonial Card */}
          <div className="  p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Author Image - Square */}
              <div className="w-32 h-44 md:w-40 md:h-50 flex-shrink-0">
                <img
                  src={testimonials[currentSlide].image}
                  alt={testimonials[currentSlide].author}
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>

              {/* Testimonial Content */}
              <div className="flex-1">
                {/* Quote Icon */}
                <div className="text-gray-700 py-2">
                  <FaQuoteLeft className="text-2xl" />
                </div>
                
                {/* Vertical Line + Text Container */}
                <div className="flex gap-6">
                  {/* Vertical Line */}
                  <div className="w-1 h-auto bg-[#ab8c55] rounded-full"></div>
                  
                  {/* Testimonial Text */}
                  <p className="text-gray-600 text-lg md:text-xl italic py-6 leading-relaxed flex-1">
                    {testimonials[currentSlide].text}
                  </p>
                </div>
                
                {/* Author Info */}
                <div className="mt-6">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {testimonials[currentSlide].author}
                  </h2>
                  <p className="text-gray-700">
                    {testimonials[currentSlide].role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          
          {/* Navigation Dots - Bottom Right */}
          <div className="flex justify-end gap-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 p-2 rounded-full transition-all ${
                  currentSlide === index 
                    ? 'bg-[#ab8c55] w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;