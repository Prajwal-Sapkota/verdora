import React from 'react';

const News = () => {
    const newsItems = [
        {
            date: "April 18, 2024",
            title: "Discover Our Exclusive Spring Stay Packages",
            description: "You can immerse yourself in the beauty of the season and create cherished moments with your loved ones.",
            image: "/images/spring.avif"
        },
        {
            date: "April 18, 2024",
            title: "Introducing Our New Chef's Tasting Menu",
            description: "Prepare your taste buds for an unforgettable journey as we unveil our new Chef's Tasting Menu.",
            image: "/images/menu.avif"
        }
    ];

    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16 md:py-20">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-[#ab8c55] font-semibold tracking-wider uppercase text-sm">
                        NEWS
                    </span>
                    <h1 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-bold text-[#262626]">
                        Hotel News
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-12">
                    {newsItems.map((news, index) => (
                        <div key={index} className="group">
                            {/* Image Container */}
                            <div className="relative h-80 overflow-hidden rounded-lg mb-6">
                                <img
                                    src={news.image}
                                    alt={news.title}
                                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                />
                                {/* Date Overlay */}
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                                    <span className="text-[#262626] font-medium">
                                        {news.date}
                                    </span>
                                </div>
                            </div>

                            {/* Content Below Image */}
                            <div>
                                <h3 className="text-2xl font-bold text-[#262626] mb-4 group-hover:text-[#ab8c55] transition-colors duration-300">
                                    {news.title}
                                </h3>
                                <p className="text-[#262626]/80 text-lg leading-relaxed mb-6">
                                    {news.description}
                                </p>
                                <button className="text-[#ab8c55] font-semibold hover:text-[#262626] transition-colors duration-300 flex items-center gap-2">
                                    Read more
                                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Read All Button */}
                <div className="text-center">
                    <button className="group relative overflow-hidden px-8 py-4 rounded-full font-semibold text-base shadow-lg bg-[#ab8c55] text-white hover:bg-[#262626] transition-all duration-500">
                        <span className="relative z-10 flex items-center gap-2">
                            Read All
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default News;