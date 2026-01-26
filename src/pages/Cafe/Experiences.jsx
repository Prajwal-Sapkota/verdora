import  { useState } from "react";
import { FaCoffee, FaLeaf, FaFire } from "react-icons/fa";

const Experiences = () => {
  const services = [
    {
      id: 1,
      title: "Complimentary Breakfast",
      icon: <FaCoffee />,
      textColor: "text-amber-50",
      imageBg:
        "bg-[url('/images/breakfast.webp')]",
    },
    {
      id: 2,
      title: "Healthy Energetic Lunch & Dinner",
      icon: <FaLeaf />,
      textColor: "text-emerald-50",
      imageBg:
        "bg-[url('/images/lunch.webp')]",
    },
    {
      id: 3,
      title: "Barbeque Hall Lover Food",
      icon: <FaFire />,
      textColor: "text-rose-50",
      imageBg:
        "bg-[url('/images/barbeque.webp')]",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f5f2ed] py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-[#262626]">
            Significant Services
          </h1>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ service }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative h-[500px] rounded-3xl overflow-hidden cursor-pointer
                 transition-shadow duration-500 shadow-lg hover:shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image (ONLY THIS ZOOMS) */}
      <div
        className={`absolute inset-0 ${service.imageBg} bg-cover bg-center
                    transition-transform duration-700 ease-out
                    ${isHovered ? "scale-110" : "scale-100"}`}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Bottom Content */}
      <div className="absolute bottom-0 w-full p-8 text-center">
        {/* Icon */}
        <div
          className={`mx-auto mb-4 w-20 h-20 rounded-full flex items-center justify-center
                      bg-white/20 backdrop-blur-md border border-white/30
                      transition-transform duration-500
                      ${isHovered ? "scale-110" : "scale-100"}`}
        >
          <span className="text-4xl text-white">{service.icon}</span>
        </div>

        {/* Title */}
        <h3 className={`text-xl font-bold mb-2 ${service.textColor}`}>
          {service.title}
        </h3>

        
      </div>
    </div>
  );
};

export default Experiences;
