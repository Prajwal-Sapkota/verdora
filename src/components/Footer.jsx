import { useState } from 'react';
import { FaFacebookF, FaDribbble, FaTwitter, FaBehance } from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Subscribed with email:', email);
    setEmail('');
  };

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Rooms', href: '/rooms' },
    { label: 'Cafe', href: '/cafe' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact Us', href: '/contact' },
  ];
  const socialIcons = [
    { icon: <FaFacebookF />, label: 'Fb' },
    { icon: <FaDribbble />, label: 'Dr' },
    { icon: <FaTwitter />, label: 'Tw' },
    { icon: <FaBehance />, label: 'Be' }
  ];

  return (
    <footer className="bg-[#f5f2ed] text-gray-800 py-12 px-12">
      <div className="max-w-8xl mx-auto">

        {/* Subscribe Section */}
        <div className="text-center py-6 ">
          <h2 className="text-3xl md:text-4xl font-bold  text-gray-900 ">
            Get the amazing offers into your inbox!
          </h2>

          {/* Subscribe Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto py-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-full bg-white border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#ab8c55]"
                required
              />

              {/* Subscribe Button with same effect */}
              <div className="relative">
                <button
                  type="submit"
                  className="relative overflow-hidden w-full h-[52px] rounded-full font-semibold text-base shadow-xl px-6 bg-[#262626] text-[#ab8c55] hover:bg-[#ab8c55] hover:text-[#262626] transition-all duration-700 ease-in-out group"
                >
                  <span className="absolute inset-0 bg-[#ab8c55] rounded-full scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-700 ease-in-out"></span>
                  <span className="relative z-10 uppercase tracking-wider">
                    SUBSCRIBE
                  </span>
                </button>
              </div>
            </div>
          </form>

          <p className="text-gray-600 text-sm">
            We are committed to protecting your privacy policy.
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-300 "></div>

        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-center py-4">

          {/* Column 1 - Copyright */}
          <div className="flex flex-col items-center md:items-start md:text-left">
            <p className="text-gray-600 text-sm ">
              © 2025 Verdora . All rights reserved. Crafted by S.A I.T Solution Nepal
            </p>
          </div>

          {/* Column 2 - Navigation Menu */}
          <div className="flex flex-col items-center">
            <ul className="flex flex-wrap justify-center gap-6 text-gray-700">
              {menuItems.map((item, index) => (
                <li key={index} className="relative">
                  <a
                    href={item.href}
                    className="hover:text-[#ab8c55] transition-colors px-1"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Social Icons */}
          <div className="flex flex-col items-center md:items-end">
            <div className="flex gap-6">
              {socialIcons.map((social, index) => (
                <div key={index} className="flex flex-col items-center">
                  <a
                    href="#"
                    className="w-6 h-6 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-[#ab8c55] transition-colors"
                  >
                    {social.icon}
                  </a>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;