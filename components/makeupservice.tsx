'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
// @ts-expect-error TS2307

import AOS from 'aos';
import 'aos/dist/aos.css';

function Makeupservice() {
  const [activeTab, setActiveTab] = useState<'courses' | 'services'>('courses');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [hoveredButton, setHoveredButton] = useState<number | null>(null);

  useEffect(() => {
    AOS.init({
      delay: 200,
      duration: 800,
      
      easing: 'ease-in-out-quad'
    });
  }, []);

  const coursesContent = [
    {
      title: 'Face Makeup Course',
      desc: 'Master the art of flawless complexion and contouring'
    },
    {
      title: 'Eye Makeup Masterclass',
      desc: 'Learn stunning eye looks from natural to dramatic'
    },
    {
      title: 'Eyebrow Design Program',
      desc: 'Perfect the techniques for beautiful brows'
    },
    {
      title: 'Hair Styling Certification',
      desc: 'Transform hair with cutting-edge techniques'
    }
  ];

  const servicesContent = [
    {
      title: 'Bridal Makeup Service',
      desc: 'Professional bridal makeup for your special day'
    },
    {
      title: 'Editorial Makeup',
      desc: 'High-fashion looks for photoshoots and events'
    },
    {
      title: 'Skincare Treatments',
      desc: 'Professional facials and skin rejuvenation'
    },
    {
      title: 'Hair Coloring',
      desc: 'Expert hair coloring and highlighting services'
    }
  ];

  const currentContent = activeTab === 'courses' ? coursesContent : servicesContent;

  return (
    <section 
      style={{
        padding: '4rem 2rem',
        backgroundColor: '#0a0a0a',
        position: 'relative'
      }}
    >
      {/* Tab Buttons */}
      <div 
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          marginBottom: '2rem'
        }}
        data-aos="fade-down"
      >
        <button
          onClick={() => setActiveTab('courses')}
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: activeTab === 'courses' ? '#c5fb45' : 'transparent',
            color: activeTab === 'courses' ? '#0a0a0a' : '#c5fb45',
            border: '1px solid #c5fb45',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={() => setHoveredButton(1)}
          onMouseLeave={() => setHoveredButton(null)}
          data-aos="fade-right"
          data-aos-delay="200"
        >
          Our Courses
        </button>
        <button
          onClick={() => setActiveTab('services')}
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: activeTab === 'services' ? '#c5fb45' : 'transparent',
            color: activeTab === 'services' ? '#0a0a0a' : '#c5fb45',
            border: '1px solid #c5fb45',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={() => setHoveredButton(2)}
          onMouseLeave={() => setHoveredButton(null)}
          data-aos="fade-left"
          data-aos-delay="200"
        >
          Our Services
        </button>
      </div>

      <h2 
        style={{
          fontSize: '2.5rem',
          textAlign: 'center',
          marginBottom: '3rem',
          color: '#c5fb45'
        }}
        data-aos="fade-up"
        data-aos-delay="300"
      >
        Our {activeTab === 'courses' ? 'Makeup Courses' : 'Beauty Services'}
      </h2>

      {/* Content with smooth transition */}
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto',
          transition: 'opacity 0.5s ease',
          opacity: 1
        }}
      >
        {currentContent.map((item, index) => (
          <div 
            key={index} 
            style={{
              backgroundColor: '#1a1a1a',
              padding: '2rem',
              borderRadius: '8px',
              textAlign: 'center',
              transition: 'transform 0.3s ease',
              transform: hoveredCard === index ? 'translateY(-5px)' : 'none'
            }}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
            data-aos="fade-up"
            data-aos-delay={400 + (index * 100)}
          >
            <div 
              style={{
                width: '80px',
                height: '80px',
                backgroundColor: '#c5fb45',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                color: '#0a0a0a',
                fontWeight: 'bold'
              }}
              data-aos="zoom-in"
              data-aos-delay={500 + (index * 100)}
            >
              {index + 1}
            </div>
            <h3 
              style={{
                fontSize: '1.5rem',
                marginBottom: '1rem',
                color: '#c5fb45'
              }}
            >
              {item.title}
            </h3>
            <p style={{ marginBottom: '1.5rem' }}>{item.desc}</p>
            <button 
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: hoveredButton === index + 3 ? '#c5fb45' : 'transparent',
                color: hoveredButton === index + 3 ? '#0a0a0a' : '#c5fb45',
                border: '1px solid #c5fb45',
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={() => setHoveredButton(index + 3)}
              onMouseLeave={() => setHoveredButton(null)}
              data-aos="fade-in"
              data-aos-delay={600 + (index * 100)}
            >
              Learn More
            </button>
          </div>
        ))}
      </div>

      {/* More Button */}
      <div 
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginTop: '2rem',
          paddingRight: '2rem'
        }}
        data-aos="fade-left"
        data-aos-delay="800"
      >
        <Link href={activeTab === 'courses' ? '/courses' : '/services'}>
          <button 
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: hoveredButton === 0 ? '#c5fb45' : 'transparent',
              color: hoveredButton === 0 ? '#0a0a0a' : '#c5fb45',
              border: '1px solid #c5fb45',
              borderRadius: '4px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={() => setHoveredButton(0)}
            onMouseLeave={() => setHoveredButton(null)}
          >
            More...
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Makeupservice;