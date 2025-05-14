"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const menuLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Accommodation", path: "/accommodation" },
  { label: "Gallery", path: "/gallery" },
  { label: "Courses", path: "/courses" },
];

function Menu() {
  const container = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const tl = useRef<gsap.core.Timeline | null>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const linkHoldersRef = useRef<(HTMLDivElement | null)[]>([]);

  // Store menu state in ref to avoid stale closures
  const menuStateRef = useRef(isMenuOpen);
  menuStateRef.current = isMenuOpen;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const colors = {
    green: "#c5fb45",
  };

  // Initialize animation timeline
  useGSAP(() => {
    // Clear any existing timeline
    if (tl.current) {
      tl.current.kill();
    }

    // Set initial state
    gsap.set(linkHoldersRef.current, { y: 75, opacity: 0 });
    if (overlayRef.current) {
      gsap.set(overlayRef.current, { 
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        opacity: 0,
        visibility: "hidden"
      });
    }

    // Create new timeline
    tl.current = gsap.timeline({ paused: true })
      .to(overlayRef.current, {
        visibility: "visible",
        duration: 0.01
      })
      .to(overlayRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.inOut"
      })
      .to(overlayRef.current, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1,
        ease: "power4.inOut"
      })
      .to(linkHoldersRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: "power4.out"
      }, "-=0.8");

    // Cleanup function
    return () => {
      tl.current?.kill();
    };
  }, { scope: container });

  // Control animation based on menu state
  useEffect(() => {
    if (!tl.current) return;

    if (isMenuOpen) {
      // Reset to initial state before playing opening animation
      gsap.set(linkHoldersRef.current, { y: 75, opacity: 0 });
      if (overlayRef.current) {
        gsap.set(overlayRef.current, { 
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          opacity: 0,
          visibility: "hidden"
        });
      }
      tl.current.play(0);
    } else {
      // Custom closing animation with fade and bounce
      gsap.to(linkHoldersRef.current, {
        y: 75,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "bounce.out",
        onComplete: () => {
          if (overlayRef.current) {
            gsap.to(overlayRef.current, {
              clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
              opacity: 0,
              duration: 0.3,
              ease: "power2.inOut",
              onComplete: () => {
                gsap.set(overlayRef.current, { visibility: "hidden" });
              }
            });
          }
        }
      });
    }
  }, [isMenuOpen]);

  // Handle page navigation
  useEffect(() => {
    const handleRouteChange = () => {
      if (menuStateRef.current) {
        setIsMenuOpen(false);
      }
    };

    // Close menu when navigating
    window.addEventListener('beforeunload', handleRouteChange);
    return () => {
      window.removeEventListener('beforeunload', handleRouteChange);
    };
  }, []);

  return (
    <div ref={container}>
      {/* Top Menu Bar */}
      <div className="menu-bar fixed top-0 left-0 h-8 w-full p-[2em] flex items-center justify-between z-10 bg-black">
      <div className="flex items-center justify-between w-full px-6 py-5 mr-9 ">
  {/* Keep your existing premium logo design exactly as is */}
  <Link href="/" className="group relative overflow-hidden">
    <div className="flex items-baseline">
      <span className="text-3xl font-bold text-[#c5fb45] mr-1">K</span>
      <span className="text-xl font-medium text-white tracking-[0.3em] uppercase group-hover:text-[#c5fb45] transition-all duration-500">
        unal&apos;s Academy
      </span>
      <div className="absolute bottom-0 left-0 h-px w-full bg-[#c5fb45] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"></div>
    </div>
  </Link>

  {/* Improved Menu Button */}
  <button
    onClick={toggleMenu}
    className="relative flex items-center gap-3 group"
    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
  >
    {/* Text label - always visible but with hover effect */}
    <span className={`text-sm font-medium text-white tracking-wider transition-all duration-300 mr-5 ${
      isMenuOpen ? 'text-[#c5fb45]' : 'group-hover:text-[#c5fb45]'
    }`}>
      {isMenuOpen ? "CLOSE" : "MENU"}
    </span>
    
    {/* Animated icon container - properly aligned */}
    <div className="relative w-6 h-5 flex flex-col justify-center">
      <span className={`absolute h-[1px] w-6 bg-white transition-all duration-300 ${
        isMenuOpen ? 'rotate-45 top-1/2' : 'top-0'
      }`}></span>
      <span className={`absolute h-[1px] w-6 bg-white transition-all duration-300 ${
        isMenuOpen ? '-rotate-45 top-1/2' : 'bottom-0'
      }`}></span>
    </div>
  </button>
</div>
      </div>

      {/* Menu Overlay */}
      <div
        ref={overlayRef}
        className="menu-overlay fixed top-0 left-0 w-full h-full p-[2em] flex flex-col z-20 "
        style={{ background: colors.green }}
      >
        {/* Overlay Header */}
       <div className="menu-overlay-bar flex justify-between items-center px-6 py-5 ">
  {/* Enhanced Logo */}
  <Link href="/" className="group relative">
  <span className="flex items-baseline">
    {/* Stylized initial */}
    <span className="text-3xl font-extrabold text-[#151e01]">K</span>
    
    {/* Rest of the name with sophisticated styling */}
    <span className="text-3xl  text-black tracking-tight  relative">
      <span className="relative z-10">unal&apos;s Academy</span>
      
      {/* Animated underline */}
      <span className="absolute bottom-0 left-0 h-0.5 w-full bg-[#587d00] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"></span>
    </span>
  </span>
</Link>
      

  {/* Improved Close Button */}
  <button
    onClick={toggleMenu}
    className="relative flex items-center gap-3 group mr-8  "
    aria-label="Close menu"
  >
    {/* Text label */}
    <span className="text-xl font-900   text-black tracking-wider transition-all duration-300 group-hover:text-[#22261b]">
      CLOSE
    </span>
    
    {/* Close icon (X) */}
    <div className="relative w-6 h-6 flex items-center justify-center">
      <span className="absolute h-[1px] w-6 bg-black transition-all duration-300 group-hover:bg-[#222618] rotate-45"></span>
      <span className="absolute h-[1px] w-6 bg-black transition-all duration-300 group-hover:bg-[#171910] -rotate-45"></span>
    </div>
  </button>
</div>

        {/* Menu Content */}
        <div className="menu-copy flex flex-col justify-between">
          {/* Links */}
          <div className="menu-links flex flex-col  space-y-6 ml-[48vh] mb-[18vh] ">
            {menuLinks.map((link, index) => (
              <div className="menu-link-items" key={index}>
                <div
                  ref={(el) => {
                    if (el) linkHoldersRef.current[index] = el;
                  }}
                  className="menu-link-item-holder relative "
                  onClick={toggleMenu}
                >
                  <Link
                    href={link.path}
                    className="text-black text-4xl md:text-6xl font-bold hover:text-green-700 transition-colors block py-2"
                  >
                    {link.label}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Info */}
          <div className="menu-info flex justify-between gap-8 mt-16 mb-8">
            <div className="menu-info-col flex flex-col justify-end space-y-4 text-white">
              <a className="hover:text-green-800 transition-colors" href="#">
                X ↗
              </a>
              <a className="hover:text-green-800 transition-colors" href="#">
                Instagram ↗
              </a>
              <a className="hover:text-green-800 transition-colors" href="#">
                Linkedin ↗
              </a>
              <a className="hover:text-green-800 transition-colors" href="#">
                Facebook ↗
              </a>
            </div>
            <div className="menu-info-col space-y-4 text-white">
              <p>info@kunal.com</p>
              <p>45599 9966 5566</p>
            </div>
          </div>
        </div>

        {/* Preview */}
        <div className="menu-preview text-black text-sm mt-8">
          <p>Preview</p>
        </div>
      </div>
    </div>
  );
}

export default Menu;