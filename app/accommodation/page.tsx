'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import { FaWifi, FaUtensils, FaBed, FaShower, FaParking, FaTv } from 'react-icons/fa';
import { MdSecurity, MdAcUnit, MdLocalLaundryService } from 'react-icons/md';
import { IoIosPeople } from 'react-icons/io';
// @ts-expect-error TS2307
import AOS from 'aos';
import 'aos/dist/aos.css';

const AccommodationPage = () => {
  useEffect(() => {
    AOS.init({
      delay: 200,
      duration: 1000,
    });
  }, []);

  const amenities = [
    { icon: <FaBed className="text-2xl" />, name: 'Comfy Beds' },
    { icon: <FaShower className="text-2xl" />, name: 'Attached Bathroom' },
    { icon: <FaWifi className="text-2xl" />, name: 'High-Speed WiFi' },
    { icon: <FaUtensils className="text-2xl" />, name: 'Meal Options' },
    { icon: <MdSecurity className="text-2xl" />, name: '24/7 Security' },
    { icon: <MdAcUnit className="text-2xl" />, name: 'AC Rooms' },
    { icon: <FaParking className="text-2xl" />, name: 'Parking Space' },
    { icon: <FaTv className="text-2xl" />, name: 'TV Lounge' },
    { icon: <MdLocalLaundryService className="text-2xl" />, name: 'Laundry' },
    { icon: <IoIosPeople className="text-2xl" />, name: 'Common Areas' },
  ];

  const hostelRules = [
    "Check-in time: 12 PM | Check-out time: 10 AM",
    "Valid ID proof required at check-in",
    "No smoking in rooms",
    "Visitors allowed only in common areas",
    "Quiet hours from 10 PM to 7 AM",
    "Monthly rent must be paid in advance",
    "Damage deposit refundable upon check-out",
    "Weekly room cleaning included"
  ];

  return (
    <div className="bg-[#f8f8f8] text-gray-800 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-black/70 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/hostel-hero.jpg" 
            alt="Hostel Accommodation"
            fill
            className="object-cover opacity-70"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Student Accommodation
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Safe, comfortable and affordable living spaces for our outstation students
          </p>
          <div className="w-20 h-1 bg-[#c5fb45] mx-auto" data-aos="zoom-in" data-aos-delay="300"></div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#333]">
                Comfortable Living Near Campus
              </h2>
              <div className="space-y-5 text-lg text-gray-700">
                <p>
                  We understand that moving to a new city for education can be challenging. That&apos;s why we&apos;ve partnered with premium hostel facilities located within 1km radius of our academy to provide you with a home away from home.
                </p>
                <p>
                  Our carefully selected hostels offer modern amenities, 24/7 security, and a vibrant community of like-minded students - all at an affordable price of just ₹3,500 per month.
                </p>
                <div className="mt-8 p-6 bg-[#f0f7e8] rounded-lg border-l-4 border-[#c5fb45]" data-aos="fade-up" data-aos-delay="200">
                  <h3 className="text-xl font-semibold mb-3 text-[#2a5a03]">Pricing Details</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Monthly Rent:</span>
                      <span className="font-medium">₹3,500/-</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Security Deposit:</span>
                      <span className="font-medium">₹3,500/- (Refundable)</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Food (Optional):</span>
                      <span className="font-medium">₹2,500/- extra</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4" data-aos="fade-left">
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src="/hostelroom.jpg" 
                  alt="Hostel Room"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src="/commonarea.jpg" 
                  alt="Hostel Common Area"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src="/hostel2.jpg" 
                  alt="Hostel Bathroom"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src="/hostel3.jpg" 
                  alt="Hostel Kitchen"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#333]">
              Modern Amenities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need for comfortable student living
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {amenities.map((item, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center flex flex-col items-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="text-[#c5fb45] mb-3">{item.icon}</div>
                <h3 className="font-medium">{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#333]">
              Our Hostel Facilities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Take a virtual tour of our student accommodation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              '/hostelroom.jpg',
              '/hostelroom.jpg',
              '/hostelroom.jpg',
              '/hostelroom.jpg',
              '/hostel2.jpg',
              '/hostel3.jpg'
            ].map((img, index) => (
              <div 
                key={index}
                className="relative h-64 rounded-xl overflow-hidden shadow-lg group"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <Image 
                  src={img}
                  alt={`Hostel facility ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rules & Booking Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#333]">
              Hostel Rules
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <ul className="space-y-3">
                {hostelRules.map((rule, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#c5fb45] mr-2">•</span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div data-aos="fade-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#333]">
              Book Your Stay
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <form className="space-y-4">
                <div>
                  <label className="block mb-1 font-medium">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c5fb45]"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c5fb45]"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c5fb45]"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Course Enrolled In</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c5fb45]"
                    placeholder="Your course name"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Preferred Move-in Date</label>
                  <input 
                    type="date" 
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c5fb45]"
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-[#c5fb45] hover:bg-[#b4e83d] text-[#333] font-bold py-3 px-4 rounded-lg transition-colors"
                >
                  Request Booking
                </button>
              </form>
              <p className="mt-4 text-sm text-gray-600">
                Our team will contact you within 24 hours to confirm your booking
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#333]">
              Prime Location
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              All our hostels are within walking distance from the academy
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="h-96 bg-gray-200 rounded-xl overflow-hidden" data-aos="fade-right">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.265588856342!2d73.91455641541671!3d18.562061287384868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20Pune!5e0!3m2!1sen!2sin!4v1625069811807!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
            <div data-aos="fade-left">
              <h3 className="text-2xl font-bold mb-4 text-[#333]">Why Our Location Rocks</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-[#c5fb45] rounded-full p-2 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#333]" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Just 5-10 minute walk to academy</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#c5fb45] rounded-full p-2 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#333]" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Safe residential neighborhood</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#c5fb45] rounded-full p-2 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#333]" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Walking distance to markets, cafes and pharmacies</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#c5fb45] rounded-full p-2 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#333]" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Well-connected by public transport</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccommodationPage;