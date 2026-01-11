// components/StatsSection.jsx
import React from 'react';
import { 
  FaMountain, 
  FaUsers, 
  FaHeadset, 
  FaCrown 
} from 'react-icons/fa';

const Stats = () => {
  const stats = [
    {
      icon: FaMountain,
      prefix: "over",
      value: "32,100 m²",
      description: "We have enough space for you to relax and unwind according to your needs."
    },
    {
      icon: FaUsers,
      prefix: "more",
      value: "12K guests",
      description: "More and more visitors are becoming our regular guests."
    },
    {
      icon: FaHeadset,
      prefix: "support",
      value: "24/7",
      description: "Care and round-the-clock support throughout your stay."
    },

  ];

  return (
    <div className="py-4 sm:py-12 px-6 sm:px-8 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group relative p-4 sm:p-6 rounded-lg border-l-4 border-gray-300
                  hover:border-l-[#ab8c55] hover:shadow-sm transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  {/* Icon Container */}
                  <div className="relative flex-shrink-0">
                    <div className="relative w-10 h-10 overflow-hidden">
                      {/* Default Icon Position */}
                      <div className="absolute left-0 transition-transform duration-500 
                        group-hover:-translate-x-full">
                        <Icon className="w-6 h-6 text-gray-500" />
                      </div>
                      
                      {/* Hover Icon Position */}
                      <div className="absolute left-full transition-transform duration-500 
                        group-hover:left-0">
                        <Icon className="w-6 h-6 text-[#ab8c55]" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    {/* Prefix + Value */}
                    <div className="flex items-baseline gap-1 mb-1">
                      <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                        {stat.prefix}
                      </span>
                      <span className="text-xl sm:text-2xl font-bold text-[#262626]">
                        {stat.value}
                      </span>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-600 text-sm">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Stats;