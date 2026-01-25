import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io5';

const BookingForm = ({ service, onClose, onSubmit }) => {
  const [bookingDetails, setBookingDetails] = useState({
    date: '',
    time: '',
    guests: 1,
    name: '',
    email: '',
    phone: '',
    specialRequests: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(bookingDetails);
  };

  return (
    <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-semibold text-gray-900">
            Reserve {service.name}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close booking form"
          >
            <IoIcons.IoClose className="text-2xl" />
          </button>
        </div>
        
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <FaIcons.FaCalendarDay className="inline mr-2" />
                Date
              </label>
              <input
                type="date"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ab8c55] focus:border-transparent"
                value={bookingDetails.date}
                onChange={(e) =>
                  setBookingDetails({ ...bookingDetails, date: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <FaIcons.FaClock className="inline mr-2" />
                Time
              </label>
              <input
                type="time"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ab8c55] focus:border-transparent"
                value={bookingDetails.time}
                onChange={(e) =>
                  setBookingDetails({ ...bookingDetails, time: e.target.value })
                }
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <FaIcons.FaUsers className="inline mr-2" />
              Number of Guests
            </label>
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() =>
                  setBookingDetails({
                    ...bookingDetails,
                    guests: Math.max(1, bookingDetails.guests - 1),
                  })
                }
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                aria-label="Decrease guests"
              >
                <FaIcons.FaMinus />
              </button>
              <span className="text-lg font-semibold">
                {bookingDetails.guests}
              </span>
              <button
                type="button"
                onClick={() =>
                  setBookingDetails({
                    ...bookingDetails,
                    guests: bookingDetails.guests + 1,
                  })
                }
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                aria-label="Increase guests"
              >
                <FaIcons.FaPlus />
              </button>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <FaIcons.FaUser className="inline mr-2" />
              Your Name
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ab8c55] focus:border-transparent"
              value={bookingDetails.name}
              onChange={(e) =>
                setBookingDetails({ ...bookingDetails, name: e.target.value })
              }
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <FaIcons.FaEnvelope className="inline mr-2" />
                Email
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ab8c55] focus:border-transparent"
                value={bookingDetails.email}
                onChange={(e) =>
                  setBookingDetails({ ...bookingDetails, email: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <FaIcons.FaPhone className="inline mr-2" />
                Phone
              </label>
              <input
                type="tel"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ab8c55] focus:border-transparent"
                value={bookingDetails.phone}
                onChange={(e) =>
                  setBookingDetails({ ...bookingDetails, phone: e.target.value })
                }
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <FaIcons.FaClipboardList className="inline mr-2" />
              Special Requests
            </label>
            <textarea
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ab8c55] focus:border-transparent h-24"
              value={bookingDetails.specialRequests}
              onChange={(e) =>
                setBookingDetails({
                  ...bookingDetails,
                  specialRequests: e.target.value,
                })
              }
              placeholder="Any special requirements or preferences..."
            />
          </div>
          
          <button
            type="submit"
            className="w-full py-3 bg-[#ab8c55] text-white font-semibold rounded-lg hover:bg-[#8a6a3f] transition-colors flex items-center justify-center gap-2"
          >
            <FaIcons.FaCheckCircle className="text-lg" />
            Reserve
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;