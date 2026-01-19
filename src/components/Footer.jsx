import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope
} from "react-icons/fa";

const Footer = () => {
  const EXACT_LAT = 27.76927071415024;
  const EXACT_LNG = 85.41123752602428;
  
  const googleMapsEmbedUrl = `https://maps.google.com/maps?q=${EXACT_LAT},${EXACT_LNG}&z=15&output=embed`;
  
  const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${EXACT_LAT},${EXACT_LNG}`;

  return (
    <footer className="bg-[#f5f2ed] text-gray-800 px-6 sm:px-8 lg:px-10 py-12">
      <div className="max-w-7xl mx-auto">

        {/* Brand Section - Top */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Verdora Resort
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            A sanctuary of calm where nature meets luxury in the heart of Chitwan, Nepal.
          </p>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-300 mb-12"></div>

        {/* Three Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12">

          {/* Column 1: Navigation */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Navigation
            </h3>
            <ul className="space-y-3 text-sm">
              <li><a href="/" className="text-gray-700 hover:text-[#ab8c55] transition-colors block py-1">Home</a></li>
              <li><a href="/about" className="text-gray-700 hover:text-[#ab8c55] transition-colors block py-1">About</a></li>
              <li><a href="/rooms" className="text-gray-700 hover:text-[#ab8c55] transition-colors block py-1">Rooms</a></li>
              <li><a href="/cafe" className="text-gray-700 hover:text-[#ab8c55] transition-colors block py-1">Cafe</a></li>
              <li><a href="/gallery" className="text-gray-700 hover:text-[#ab8c55] transition-colors block py-1">Gallery</a></li>
              <li><a href="/contact" className="text-gray-700 hover:text-[#ab8c55] transition-colors block py-1">Contact</a></li>
            </ul>
          </div>

          {/* Column 2: Contact & Social */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Contact Info
            </h3>
            <div className="space-y-4 text-sm mb-8">
              <div className="flex items-center justify-center gap-2">
                <FaMapMarkerAlt className="text-[#ab8c55]" size={14} />
                <span className="text-gray-700">Chitwan, Nepal</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <FaPhoneAlt className="text-[#ab8c55]" size={14} />
                <span className="text-gray-700">+977 9800000000</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <FaEnvelope className="text-[#ab8c55]" size={14} />
                <span className="text-gray-700">info@verdoraresort.com</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="border-t border-gray-300 pt-6">
              <p className="text-gray-600 text-sm mb-4">Follow Us</p>
              <div className="flex gap-3 justify-center">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-full bg-white border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-[#ab8c55] hover:text-white hover:border-[#ab8c55] transition-colors"
                >
                  <FaFacebookF size={14} />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full bg-white border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-[#ab8c55] hover:text-white hover:border-[#ab8c55] transition-colors"
                >
                  <FaInstagram size={14} />
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="w-9 h-9 rounded-full bg-white border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-[#ab8c55] hover:text-white hover:border-[#ab8c55] transition-colors"
                >
                  <FaTwitter size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Exact Location Map */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Find Us
            </h3>
            
            {/* Map Container with fixed aspect ratio */}
            <div className="border border-gray-300 rounded-lg overflow-hidden bg-white shadow-sm">
              <div className="relative pb-[50%] h-0"> 
                <iframe
                  title="Verdora Resort Exact Location"
                  src={googleMapsEmbedUrl}
                  className="absolute top-0 left-0 w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="eager"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Location Details */}
            <div className="mt-4 space-y-2">
              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#ab8c55] hover:text-gray-900 text-sm font-medium transition-colors"
              >
                <FaMapMarkerAlt className="w-3 h-3" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

        </div>

        {/* Divider before copyright */}
        <div className="h-px bg-gray-300 mb-6"></div>

        {/* Copyright Section - Single line with left and right content */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4">
          <div className="text-left">
            <p className="text-gray-600 text-sm">
              © 2025 Verdora Resort, Chitwan. All rights reserved.
            </p>
          </div>
          
          <div className="text-right">
            <p className="text-gray-500 text-xs">
              Crafted by <span className="text-gray-900 font-medium">S.A I.T Solution Nepal</span>
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;