// components/StatsSection.jsx
import React from 'react';

const Stats = () => {
  const stats = [
    {
      prefix: "over",
      value: "32,100 m²",
      description: "We have enough space for you to relax and unwind according to your needs.",
      color: "text-blue-600"
    },
    {
      prefix: "more",
      value: "12K+",
      description: "More and more visitors are becoming our regular guests.",
      color: "text-green-600"
    },
    {
      prefix: "support",
      value: "24/7",
      description: "Care and round-the-clock support throughout your stay.",
      color: "text-purple-600"
    }
  ];

  return (
    <div className="relative z-30 -mt-32 md:-mt-36 lg:-mt-44 px-4 py-12 ">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl w-full">

        <div className="grid grid-cols-2 md:grid-cols-3 p-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`
                flex flex-col items-center text-center
                px-4 sm:px-6
                py-2 sm:py-4 md:py-6

                /* vertical borders */
                ${index === 0 ? "border-r border-gray-400" : ""}
                ${index === 1 ? "md:border-r border-gray-400" : ""}

                ${index === 2 ? "col-span-2 md:col-span-1 border-t border-gray-400 md:border-t-0" : ""}
              `}
            >
              {/* Prefix + Number */}
              <h3 className="flex items-baseline gap-2 mb-2 sm:mb-3">
                <span className="text-sm sm:text-lg md:text-xl font-semibold text-gray-500 uppercase tracking-wide">
                  {stat.prefix}
                </span>
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-normal text-gray-900">
                  {stat.value}
                </h1>
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed max-w-sm md:max-w-xs">
                {stat.description}
              </p>

              {/* Decorative Line */}
              <div
                className={`mt-4 sm:mt-5 md:mt-6 h-1 w-16 sm:w-20 rounded-full ${
                  stat.color.replace('text', 'bg')
                } opacity-60`}
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Stats;
