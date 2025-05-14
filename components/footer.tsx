"use client";
import React, { useEffect } from "react";
import Link from "next/link";
// @ts-expect-error TS2307
import AOS from "aos";
import "aos/dist/aos.css";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Accommodation", path: "/accommodation" },
  { label: "Gallery", path: "/gallery" },
  { label: "Courses", path: "/courses" },
];

const socialLinks = [
  { label: "X", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Facebook", href: "#" },
];

function Footer() {
  useEffect(() => {
    AOS.init({
      delay: 200,
      duration: 800,
      easing: "ease-in-out-quad",
      
    });
  }, []);

  return (
    <footer className="relative bg-black text-white py-16 px-4 sm:px-8 h-40 overflow-hidden">
      {/* Neon background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#c5fb45]/5 to-transparent opacity-20 mt-16" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 z-10">
        {/* Logo/Branding */}
        <div className="flex flex-col items-center md:items-start" data-aos="fade-up">
          <Link
            href="/"
            className="text-3xl font-bold text-[#c5fb45] font-['Orbitron',_sans-serif] tracking-wide
              relative"
          >
            Krunal&apos;s Academy
          </Link>
          <p className="mt-4 text-gray-300 text-center md:text-left">
            Empowering Beauty Professionals Since 2010
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center md:items-start" data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-xl font-bold text-[#c5fb45] mb-4 font-['Orbitron',_sans-serif]">Explore</h3>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className="text-gray-300 hover:text-[#a3e635] transition-all duration-300
                    hover:shadow-[0_0_10px_#c5fb45] px-2 py-1 rounded"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-center md:items-start" data-aos="fade-up" data-aos-delay="400">
          <h3 className="text-xl font-bold text-[#c5fb45] mb-4 font-['Orbitron',_sans-serif]">Connect</h3>
          <ul className="space-y-2">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-gray-300 hover:text-[#a3e635] transition-all duration-300
                    hover:shadow-[0_0_10px_#c5fb45] px-2 py-1 rounded"
                >
                  {link.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Newsletter */}
        <div className="flex flex-col items-center md:items-start" data-aos="fade-up" data-aos-delay="600">
          <h3 className="text-xl font-bold text-[#c5fb45] mb-4 font-['Orbitron',_sans-serif]">Get in Touch</h3>
          <p className="text-gray-300 mb-2">info@kunal.com</p>
          <p className="text-gray-300 mb-4">45599 9966 5566</p>
          <div className="w-full max-w-xs">
            <input
              type="email"
              placeholder="Join our newsletter"
              className="w-full p-3 bg-[#1a1a1a] text-gray-300 border border-[#c5fb45]/30 rounded focus:outline-none
                focus:border-[#c5fb45] focus:shadow-[0_0_10px_#c5fb45] transition-all duration-300"
            />
            <button
              className="mt-3 w-full p-3 bg-[#c5fb45] text-black font-bold rounded hover:bg-[#a3e635]
                hover:shadow-[0_0_15px_#c5fb45] transition-all duration-300"
              data-aos="pulse"
              data-aos-delay="800"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div
        className="mt-12 text-center text-gray-300 border-t border-[#c5fb45]/20 pt-6"
        data-aos="fade-in"
        data-aos-delay="1000"
      >
        <p>&copy; {new Date().getFullYear()} Krunal&apos;s Academy. All rights reserved.</p>
      </div>

      {/* Decorative neon glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-[#c5fb45]/10 blur-3xl animate-pulse"
        data-aos="fade-in"
        data-aos-delay="1200"
      />
    </footer>
  );
}

export default Footer;