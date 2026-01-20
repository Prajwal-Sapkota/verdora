import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowRight,
  FaWhatsapp,
  FaYoutube
} from "react-icons/fa";
import { SiX } from "react-icons/si";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const EXACT_LAT = 27.76927071415024;
  const EXACT_LNG = 85.41123752602428;

  const googleMapsEmbedUrl = `https://maps.google.com/maps?q=${EXACT_LAT},${EXACT_LNG}&z=15&output=embed&markers=${EXACT_LAT},${EXACT_LNG}`;
  const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${EXACT_LAT},${EXACT_LNG}`;

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Rooms & Suites", href: "/rooms" },
    { label: "Dining Experience", href: "/cafe" },
    { label: "Wellness & Spa", href: "/services" },
    { label: "Gallery", href: "/gallery" },
    { label: "Special Offers", href: "/offers" },
  ];

  const contactInfo = [
    { icon: <FaMapMarkerAlt />, text: "Chitwan, Nepal", detail: "Amrit Marg, Sauraha" },
    { icon: <FaPhoneAlt />, text: "+977 980-000-0000", detail: "24/7 Reception" },
    { icon: <FaEnvelope />, text: "reservations@verdoraresort.com", detail: "Primary Contact" },
    { icon: <FaWhatsapp />, text: "+977 981-000-0000", detail: "WhatsApp Business" },
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, label: "Facebook", href: "#", color: "hover:bg-[#1877F2]" },
    { icon: <FaInstagram />, label: "Instagram", href: "#", color: "hover:bg-gradient-to-br from-purple-600 via-pink-600 to-yellow-500" },
    { icon: <SiX />, label: "X", href: "#", color: "hover:bg-black" },
    { icon: <FaYoutube />, label: "YouTube", href: "#", color: "hover:bg-[#FF0000]" },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#f9f7f3] to-[#f5f2ed] text-gray-800 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#8a6a3f] to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-16 relative z-10">
        {/* Top Section with Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="group">
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-2">
                Verdora <span className="text-[#8a6a3f]">Resort</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#8a6a3f] to-[#ab8c55] transform group-hover:w-32 transition-all duration-500"></div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              A sanctuary of calm where nature meets luxury in the heart of Chitwan, Nepal.
              Experience unparalleled hospitality amidst pristine natural beauty.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6 pb-3 border-b border-[#8a6a3f]/20">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="group flex items-center space-x-2 text-gray-600 hover:text-[#8a6a3f] transition-all duration-300 py-2"
                >
                  <span className="font-medium text-sm">{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6 pb-3 border-b border-[#8a6a3f]/20">
              Stay Updated
            </h3>
            <p className="text-gray-600 mb-6 text-sm">
              Subscribe to our newsletter for exclusive offers and updates from Verdora Resort.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#8a6a3f] focus:ring-2 focus:ring-[#8a6a3f]/20 transition-all duration-300 pr-12"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-[#8a6a3f] text-white rounded-md hover:bg-[#6a4a2f] transition-colors duration-300"
                >
                  <FaArrowRight />
                </button>
              </div>
              {subscribed && (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-2 rounded-lg text-sm animate-pulse">
                  Thank you for subscribing! Check your email for confirmation.
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-12"></div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-8">
              Contact Information
            </h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="p-3 bg-white rounded-xl shadow-sm border border-gray-100 group-hover:border-[#8a6a3f]/30 group-hover:shadow-md transition-all duration-300">
                    <div className="text-[#8a6a3f]">{info.icon}</div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{info.text}</p>
                    <p className="text-sm text-gray-500 mt-1">{info.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className="mt-10">
              <p className="text-gray-600 mb-4">Connect with us</p>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className={`w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-700 hover:text-white ${social.color} hover:border-transparent transition-all duration-300 hover:scale-110 shadow-sm`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Our Location
              </h3>
              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 text-[#8a6a3f] hover:text-[#6a4a2f] font-medium transition-colors duration-300"
              >
                <FaMapMarkerAlt />
                <span>Get Directions</span>
                <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>

            {/* Interactive Map Card */}
            <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="relative h-80">
                <iframe
                  title="Verdora Resort Location"
                  src={googleMapsEmbedUrl}
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                {/* Map Overlay Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              

              {/* Location Info Bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-white/95 to-white/90 backdrop-blur-sm p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900">Exact Coordinates</p>
                    <p className="text-sm text-gray-600">{EXACT_LAT}, {EXACT_LNG}</p>
                  </div>
                  <span className="px-3 py-1 bg-[#8a6a3f]/10 text-[#8a6a3f] text-xs font-medium rounded-full">
                    Chitwan, Nepal
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8">
          <div className="text-center md:text-left">
            <p className="text-gray-600 text-sm">
              © 2025 Verdora Resort, Chitwan. All rights reserved.
            </p>

          </div>

          <div className="text-center md:text-right">
            <div className="flex items-center justify-center md:justify-end space-x-4">
              <p className="text-gray-500 text-xs mt-3">
                Crafted by <span className="text-gray-900 font-medium">S.A I.T Solution Nepal</span>
              </p>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;