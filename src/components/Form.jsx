import { useState, useEffect, useRef } from 'react';

const BookingForm = () => {
    const [adults, setAdults] = useState('1 Adult');
    const [children, setChildren] = useState('1 Children');
    const [rooms, setRooms] = useState('1 Room');
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    const adultOptions = ['1 Adult', '2 Adults', '3 Adults', '4 Adults', '5 Adults'];
    const childrenOptions = ['0 Children', '1 Children', '2 Children', '3 Children', '4 Children'];
    const roomOptions = ['1 Room', '2 Rooms', '3 Rooms', '4 Rooms', '5 Rooms'];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
       <div className="relative min-h-[80vh] flex items-center justify-center p-6 " ref={sectionRef}>
        {/* Fixed Background Image */}
        <div className="absolute inset-0 -z-20">
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
                style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)'
                }}
            />
            <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Content Container - Perfectly centered */}
        <div className={`w-full max-w-6xl z-10 transition-all duration-1000 my-8 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                
                {/* Main Box with Backdrop Blur */}
                <div className="backdrop-blur-xl bg-white/10 rounded-2xl shadow-2xl overflow-hidden border border-white/20">
                    <div className="grid grid-cols-1 lg:grid-cols-12">
                        
                        {/* Left Part - Text */}
                        <div className="lg:col-span-5 p-8 md:p-10 text-white">
                            <h1 className="text-3xl md:text-4xl font-bold py-4">
                                Get the best deals
                            </h1>
                            <p className="text-lg leading-relaxed text-gray-200">
                                Get away from the hustle and bustle of the city & venture into wilderness safely from Shale hotel.
                            </p>
                        </div>

                        {/* Middle Part - Location */}
                        <div className="lg:col-span-3 p-8 md:p-10 text-white border-t lg:border-t-0 lg:border-x border-white/20">
                            <h1 className="text-xl font-semibold py-3">Location:</h1>
                            <p className="text-gray-200">73 Spring Ave, Latham, NY, USA</p>
                        </div>

                        {/* Right Part - Reservation */}
                        <div className="lg:col-span-4 p-8 md:p-10 text-white border-t lg:border-t-0 border-white/20">
                            <h1 className="text-xl font-semibold py-3">Reservation:</h1>
                            <div className="space-y-2 text-gray-200">
                                <span>(+220) 1122 0088</span><br/>
                                <span>support@example.com</span>
                            </div>
                        </div>
                    </div>

                    {/* Booking Form Section */}
                    <div className="p-8 md:p-10 border-t border-white/20">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-white">
                            
                            {/* Adult Dropdown */}
                            <div>
                                <div className="py-3 font-medium">Adults</div>
                                <select
                                    value={adults}
                                    onChange={(e) => setAdults(e.target.value)}
                                    className="w-full bg-white/20 text-white rounded-full p-3 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent backdrop-blur-sm"
                                >
                                    {adultOptions.map((option) => (
                                        <option key={option} value={option} className="bg-gray-800 text-white">
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Children Dropdown */}
                            <div>
                                <div className="py-3 font-medium">Children</div>
                                <select
                                    value={children}
                                    onChange={(e) => setChildren(e.target.value)}
                                    className="w-full bg-white/20 text-white rounded-full p-3 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent backdrop-blur-sm"
                                >
                                    {childrenOptions.map((option) => (
                                        <option key={option} value={option} className="bg-gray-800 text-white">
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Room Dropdown */}
                            <div>
                                <div className="py-3 font-medium">Rooms</div>
                                <select
                                    value={rooms}
                                    onChange={(e) => setRooms(e.target.value)}
                                    className="w-full bg-white/20 text-white rounded-full p-3 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent backdrop-blur-sm"
                                >
                                    {roomOptions.map((option) => (
                                        <option key={option} value={option} className="bg-gray-800 text-white">
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Book Now Button */}
                            <div className="relative">
                                <div className="py-2 font-medium invisible">Book</div>
                                <button className="relative overflow-hidden w-full h-[52px] rounded-full font-semibold text-base md:text-lg shadow-xl bg-[#262626] text-[#ab8c55] hover:bg-[#ab8c55] hover:text-[#262626] transition-all duration-700 ease-in-out group">
                                    <span className="absolute inset-0 bg-[#ab8c55] rounded-full scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-700 ease-in-out"></span>
                                    <span className="relative z-10 uppercase tracking-wider flex items-center justify-center gap-3">
                                        Book Now
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingForm;