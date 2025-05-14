"use client";
import React, { useEffect } from "react";
// @ts-expect-error TS2307
import AOS from "aos";
import "aos/dist/aos.css";

function Abouthome() {
  useEffect(() => {
    AOS.init({
      delay: 200,
      duration: 800,
      easing: "ease-in-out-quad",
      
    });
  }, []);

  return (
    <section className="relative py-24 px-4 sm:px-8 h-60 bg-black text-white flex flex-col items-center overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent top-0 via-[#c5fb45]/5 to-transparent opacity-10" />

      <h2
        className="text-5xl sm:text-6xl font-bold text-center top-0  text-[#c5fb45] tracking-tight font-['Playfair_Display',_serif]"
        data-aos="fade-up"
      >
        About Krunal&apos;s Academy
      </h2>

      {/* Decorative divider */}
      <div className="w-32 h-1 bg-[#c5fb45]/80 mb-12" data-aos="fade-in" data-aos-delay="200" />

      <div className="max-w-5xl w-full flex flex-col gap-10 z-10">
        <p
          className="text-xl sm:text-2xl text-gray-200 leading-relaxed text-center p-6 bg-[#c5fb45]/5 rounded-lg transition-all duration-300 hover:text-[#a3e635]"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Founded in 2010, Krunal&apos;s Academy has been at the forefront of beauty education, empowering
          thousands of students to become successful professionals in the industry.
        </p>
        <p
          className="text-xl sm:text-2xl text-gray-200 leading-relaxed text-center p-6 bg-[#c5fb45]/5 rounded-lg transition-all duration-300 hover:text-[#a3e635]"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          Our mission is to provide world-class training in hair, skin, makeup, and nail artistry,
          combining traditional techniques with modern innovations.
        </p>
        <p
          className="text-xl sm:text-2xl text-gray-200 leading-relaxed text-center p-6 bg-[#c5fb45]/5 rounded-lg transition-all duration-300 hover:text-[#a3e635]"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          With state-of-the-art facilities and industry-expert instructors, we create an environment
          where creativity and professionalism thrive.
        </p>
      </div>

      {/* Decorative glow */}
      <div
        className="mt-16 w-24 h-24 rounded-full bg-[#c5fb45]/10 blur-3xl animate-pulse"
        data-aos="fade-in"
        data-aos-delay="1000"
      />
    </section>
  );
}

export default Abouthome;