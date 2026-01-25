import React, { useEffect, useRef, useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp, FaClock } from 'react-icons/fa';

const ContactForm = () => {
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);

    const contactDetails = {
        heading: "Contact Information",
        subtitle: "You can contact us to book a vacation at any time",
        description: "Have a question, comment, or special request? We're here to help! Get in touch with us today and let us exceed your expectations at Shale Hotel.",
        timing: {
            heading: "OUR TIMING:",
            weekdays: "Sun - Fri: 9:00 AM - 8:00 PM",
            weekends: "Saturday: 10:00 AM - 6:00 PM",
            holidays: "Public Holidays: 10:00 AM - 4:00 PM"
        },
        address: {
            city: "Kathmandu, Nepal",
            street: "Thamel, Kathmandu 44600, Nepal",
            phone: "+977 1 442 5555",
            mobile: "+977 980 123 4567",
            email: "info@shalehotel.com",
            whatsapp: "+977 980 987 6543"
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !visible) {
                    setVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        const element = sectionRef.current;
        if (element) observer.observe(element);

        return () => {
            if (element) observer.disconnect();
        };
    }, [visible]);

    return (
        <section
            ref={sectionRef}
            className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 bg-white"
        >
            <div className="max-w-6xl mx-auto">

                {/* Centered Contact Information Header */}
                <div className={`text-center mb-8 sm:mb-12 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <span className='text-[#ab8c55] font-semibold tracking-wider uppercase text-xs sm:text-sm'>Get In Touch</span>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 py-1 sm:py-4">
                        {contactDetails.heading}
                    </h1>
                </div>

                {/* Main Content */}
                <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-16">

                    {/* Left Side - Nepal Contact Details */}
                    <div className={`lg:w-1/2 space-y-6 sm:space-y-8 px-4 sm:px-6 md:px-8 lg:px-10 py-0 sm:py-6 md:py-8 lg:py-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        {/* Nepal Flag & Location */}
                        <div className="mb-4 sm:mb-6">
                            <p className="text-lg sm:text-xl text-[#ab8c55] font-medium mb-4 sm:mb-6">
                                {contactDetails.subtitle}
                            </p>
                            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                                {contactDetails.description}
                            </p>
                        </div>

                        {/* Address Details */}
                        <div className="space-y-4 sm:space-y-6">
                            <div className="flex items-start gap-3 sm:gap-4">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#ab8c55]/10 flex items-center justify-center flex-shrink-0 mt-1">
                                    <FaMapMarkerAlt className="text-[#ab8c55] text-sm sm:text-lg" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-semibold text-gray-700 text-sm sm:text-base mb-1">Address</h4>
                                    <p className="text-gray-600 text-sm sm:text-base">{contactDetails.address.street}</p>
                                    <p className="text-xs sm:text-sm text-gray-500 mt-1">Near Garden of Dreams, Thamel</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 sm:gap-4">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#ab8c55]/10 flex items-center justify-center flex-shrink-0">
                                    <FaPhone className="text-[#ab8c55] text-sm sm:text-lg" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-semibold text-gray-700 text-sm sm:text-base mb-1">Phone Numbers</h4>
                                    <div className="space-y-1">
                                        <a href={`tel:${contactDetails.address.phone}`} className="text-gray-600 hover:text-[#ab8c55] transition-colors block text-sm sm:text-base">
                                            {contactDetails.address.phone} (Landline)
                                        </a>
                                        <a href={`tel:${contactDetails.address.mobile}`} className="text-gray-600 hover:text-[#ab8c55] transition-colors block text-sm sm:text-base">
                                            {contactDetails.address.mobile} (Mobile)
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 sm:gap-4">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#ab8c55]/10 flex items-center justify-center flex-shrink-0">
                                    <FaEnvelope className="text-[#ab8c55] text-sm sm:text-lg" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-semibold text-gray-700 text-sm sm:text-base mb-1">Email & WhatsApp</h4>
                                    <div className="space-y-1">
                                        <a href={`mailto:${contactDetails.address.email}`} className="text-gray-600 hover:text-[#ab8c55] transition-colors block text-sm sm:text-base break-all">
                                            {contactDetails.address.email}
                                        </a>
                                        <div className="flex items-center gap-2 mt-1">
                                            <FaWhatsapp className="text-green-500 text-sm sm:text-base" />
                                            <a href={`https://wa.me/${contactDetails.address.whatsapp.replace('+', '')}`} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#ab8c55] transition-colors block text-sm sm:text-base">
                                                {contactDetails.address.whatsapp} (WhatsApp)
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Timing Section */}
                        <div className="pt-4 sm:pt-6 border-t border-gray-200 mt-4 sm:mt-6">
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4 flex items-center gap-2">
                                <FaClock className="text-[#ab8c55] text-sm sm:text-base" />
                                {contactDetails.timing.heading}
                            </h3>
                            <div className="space-y-1 sm:space-y-2">
                                <p className="text-gray-700 font-medium text-sm sm:text-base">{contactDetails.timing.weekdays}</p>
                                <p className="text-gray-700 font-medium text-sm sm:text-base">{contactDetails.timing.weekends}</p>
                                <p className="text-gray-700 font-medium text-sm sm:text-base">{contactDetails.timing.holidays}</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <div className={`lg:w-1/2 bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-lg border border-gray-100 transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-1 sm:mb-2">Ask before booking</h2>
                        <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8">Fill out the form below and we'll get back to you shortly</p>

                        <form className="space-y-4 sm:space-y-6">
                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                                <div className="flex-1">
                                    <label className="block text-gray-700 font-medium mb-1 sm:mb-2 text-sm sm:text-base">
                                        FIRST NAME <span className="text-[#ab8c55]">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ab8c55] focus:border-transparent transition-all text-sm sm:text-base"
                                        placeholder="Enter your first name"
                                    />
                                </div>
                                <div className="flex-1">
                                    <label className="block text-gray-700 font-medium mb-1 sm:mb-2 text-sm sm:text-base">
                                        LAST NAME <span className="text-[#ab8c55]">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ab8c55] focus:border-transparent transition-all text-sm sm:text-base"
                                        placeholder="Enter your last name"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                                <div className="flex-1">
                                    <label className="block text-gray-700 font-medium mb-1 sm:mb-2 text-sm sm:text-base">
                                        EMAIL <span className="text-[#ab8c55]">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ab8c55] focus:border-transparent transition-all text-sm sm:text-base"
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                                <div className="flex-1">
                                    <label className="block text-gray-700 font-medium mb-1 sm:mb-2 text-sm sm:text-base">
                                        PHONE NUMBER
                                    </label>
                                    <input
                                        type="tel"
                                        className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ab8c55] focus:border-transparent transition-all text-sm sm:text-base"
                                        placeholder="+977 980 XXXXXXX"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium mb-1 sm:mb-2 text-sm sm:text-base">
                                    MESSAGE <span className="text-[#ab8c55]">*</span>
                                </label>
                                <textarea
                                    rows={4}
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ab8c55] focus:border-transparent transition-all resize-none text-sm sm:text-base"
                                    placeholder="EX. I WANT TO STAY DURING THE WINTER SEASON OF NOV-DEC 2017 WITH A GROUP OF 4 PERSONS."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3 sm:py-4 rounded-lg bg-[#ab8c55] text-white font-semibold text-base sm:text-lg hover:bg-[#977a4a] transition-colors duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
                            >
                                Send Message
                            </button>

                            <p className="text-xs sm:text-sm text-gray-500 text-center mt-3 sm:mt-4">
                                We respond within 24 hours (Nepal Time)
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;