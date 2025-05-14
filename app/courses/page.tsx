'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
// @ts-expect-error TS2307
import AOS from 'aos';
import 'aos/dist/aos.css';

const CoursesPage = () => {
  useEffect(() => {
    AOS.init({
      delay: 200,
      duration: 1000,
    });
  }, []);

  const courses = [
    {
      title: "Hair Cutting",
      description: "Cutting is an Art of Carving, an Art of bringing out clients' imagination in actual form. At the end, confidence is the best hairstyle and only a Professional Hair Artist can achieve it.",
      image: "/coursespage.jpg",
      features: [
        "Basic to advanced cutting techniques",
        "Trend analysis and styling",
        "Client consultation skills",
        "Product knowledge",
        "Business fundamentals"
      ]
    },
    {
      title: "Skin Care",
      description: "Bringing out your hidden beauty and layering it with a positive attitude is done by a Professional skin expert. Skin Experts can relieve all your stress and make you feel energetic for your upcoming challenges. Being a skin expert means you can beautify the future.",
      image: "/coursespage.jpg",
      features: [
        "Facial treatments",
        "Skin analysis",
        "Chemical peels",
        "Microdermabrasion",
        "Anti-aging techniques"
      ]
    },
    {
      title: "Makeup Artistry",
      description: "Bringing out the face features and highlighting them with right colors is what a makeup artist does. A makeup artist can reveal your hidden beauty to the world.",
      image: "/coursespage.jpg",
      features: [
        "Bridal makeup",
        "Editorial makeup",
        "Special FX makeup",
        "Color theory",
        "Face shaping techniques"
      ]
    },
    {
      title: "Nail Artistry",
      description: "Nails are not just for cutting anymore. A Nail Artist can bring back life to your nails, adding that extra touch to your natural beauty.",
      image: "/coursespage.jpg",
      features: [
        "Manicure & pedicure",
        "Nail extensions",
        "Gel polish application",
        "Nail art designs",
        "Nail health & safety"
      ]
    },
    {
      title: "Barbering",
      description: "Barbering - a real art for Men's Look. Think of a style and our barber can sketch it on your head.",
      image: "/coursespage.jpg",
      features: [
        "Classic cuts & fades",
        "Beard grooming",
        "Straight razor shaving",
        "Modern styling techniques",
        "Men's grooming products"
      ]
    }
  ];
  return (
    <div className="bg-[#0a0a0a] text-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-black/70 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/coursespage.jpg" 
            alt="Beauty Academy Courses"
            fill
            className="object-cover opacity-70"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#c5fb45]">
            Our Professional Courses
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Master the art of beauty with our industry-leading programs
          </p>
          <div className="w-20 h-1 bg-[#c5fb45] mx-auto" data-aos="zoom-in" data-aos-delay="300"></div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {courses.map((course, index) => (
              <motion.div 
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                whileHover={{ y: -10 }}
                className="bg-[#1a1a1a] rounded-xl overflow-hidden shadow-lg border border-[#c5fb45]/20 hover:border-[#c5fb45]/50 transition-all flex flex-col"
              >
                <div className="relative h-60 flex-shrink-0">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                    <h2 className="text-2xl font-bold text-[#c5fb45]">{course.title}</h2>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-gray-300 mb-4">{course.description}</p>
                  <div className="border-t border-[#c5fb45]/20 pt-4 mb-6">
                    <h3 className="text-lg font-semibold text-[#c5fb45] mb-3">Course Highlights:</h3>
                    <ul className="space-y-2">
                      {course.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-[#c5fb45] mr-2">•</span>
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-auto text-center">
                    <motion.button
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: "#c5fb45",
                        color: "#0a0a0a"
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full max-w-xs mx-auto bg-transparent border-2 border-[#c5fb45] text-[#c5fb45] font-bold py-2 px-6 rounded-lg transition-all duration-300"
                    >
                      Enroll Now
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]">
        <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#c5fb45]">
            Start Your Beauty Career Today
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of successful graduates who transformed their passion into profession
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "#c5fb45",
                color: "#0a0a0a"
              }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-transparent border-2 border-[#c5fb45] text-[#c5fb45] font-bold py-3 px-8 rounded-lg transition-all duration-300"
            >
              Book a Consultation
            </motion.button>
            <motion.button
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "transparent",
                color: "#c5fb45"
              }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-[#c5fb45] border-2 border-[#c5fb45] text-[#0a0a0a] font-bold py-3 px-8 rounded-lg hover:bg-transparent hover:text-[#c5fb45] transition-all duration-300"
            >
              Download Brochure
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;