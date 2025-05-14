'use client';
import Head from 'next/head';
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Herohome from '../components/herohome';
import Wsus from '@/components/wsus';
import Makeupservice from '@/components/makeupservice';
import Testimonials from '@/components/testimonials';

export default function Home() {
  const [counter, setCounter] = useState<number>(0);
  const [loadingComplete, setLoadingComplete] = useState<boolean>(false);
  const followRef = useRef<HTMLDivElement>(null);
  const hideElementsRef = useRef<HTMLDivElement[]>([]);
  const contentRef = useRef<HTMLDivElement>(null);
  const titleLinesRef = useRef<HTMLParagraphElement[]>([]);

  const addToHideRefs = (el: HTMLDivElement | null) => {
    if (el) hideElementsRef.current.push(el);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const addToTitleLinesRefs = (el: HTMLParagraphElement | null) => {
    if (el) titleLinesRef.current.push(el);
  };

  useEffect(() => {
    // Preload the Orbitron font
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    const countInterval = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter >= 100) {
          clearInterval(countInterval);
          return 100;
        }
        return prevCounter + 1;
      });
    }, 25);

    return () => {
      clearInterval(countInterval);
      document.head.removeChild(link);
    };
  }, []);

  useEffect(() => {
    if (counter === 100) {
      revealAnimation();
    }
  }, [counter]);

  const revealAnimation = () => {
    if (!followRef.current || !contentRef.current) return;

    const tl = gsap.timeline({
      onComplete: () => {
        setLoadingComplete(true);
      }
    });

    tl.to(followRef.current, {
      width: '100%',
      ease: 'expo.inOut',
      duration: 1.2,
      delay: 0.7
    })
    .to(hideElementsRef.current, {
      opacity: 0,
      duration: 0.3
    })
    .to(hideElementsRef.current, {
      display: 'none',
      duration: 0.3
    })
    .to(followRef.current, {
      height: '100%',
      ease: 'expo.inOut',
      duration: 0.7,
      delay: 0.5
    })
    .to(contentRef.current, {
      width: '100%',
      ease: 'expo.inOut',
      duration: 0.7
    });
  };

  return (
    <>
      <Head>
        <title>KRUNAL&apos;S ACADEMY | The School Of Hair, Skin, Make up & Nail</title>
        <meta name="description" content="Empowering Beauty Professionals" />
        {/* Preconnect for fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>

      {/* Loading Animation */}
      {!loadingComplete && (
        <div className="fixed inset-0 z-50 bg-[#121212] flex items-center justify-center">
          <div 
            ref={followRef}
            className="follow absolute left-0 top-0 h-[2px] w-0 bg-[#c5fb45] z-10"
          ></div>
          <div 
            ref={addToHideRefs}
            className="hide absolute left-0 top-0 h-[2px] bg-white transition-all duration-400 ease-out" 
            style={{ width: `${counter}%` }}
          ></div>
          <p 
            ref={addToHideRefs}
            className="hide text-white font-medium transform -translate-y-4"
            style={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: '8rem', // Increased size to 8rem (128px)
              fontWeight: 700
            }}
          >
            {counter}%
          </p>
        </div>
      )}

      {/* Main Content */}
      <div 
        ref={contentRef}
        className={`content absolute left-0 top-0 h-full w-0 bg-[#0a0a0a] overflow-hidden ${loadingComplete ? 'w-full static' : ''}`}
        style={{
          color: '#ffffff',
          minHeight: '100vh',
          fontFamily: 'sans-serif'
        }}
      >
        {/* Hero Section */}
        <Herohome/>

        {/* Why Choose Us Section */}
        <Wsus/>

        {/* Makeup Services Section */}
        <Makeupservice/>

        {/* Testimonials Section */}
        <Testimonials/>

        {/* Highlights Section */}
        <section className="py-16 px-8 bg-[#1a1a1a]">
          <h2 className="text-4xl text-center mb-12 text-[#c5fb45]">
            Academy Highlights
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
            {[
              { number: '500+', label: 'Students Trained' },
              { number: '50+', label: 'Industry Experts' },
              { number: '10+', label: 'Years Experience' },
              { number: '95%', label: 'Placement Rate' }
            ].map((highlight, index) => (
              <div key={index}>
                <p className="text-4xl font-bold text-[#c5fb45] mb-2">
                  {highlight.number}
                </p>
                <p>{highlight.label}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}