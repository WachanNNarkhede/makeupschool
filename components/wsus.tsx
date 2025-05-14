'use client'; // Required for AOS since it uses browser APIs

import React from 'react';
// @ts-expect-error TS2307
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Wsus() {
  useEffect(() => {
    AOS.init({
      delay: 200,
      duration: 1000,
      
    });
  }, []);

  return (
    <section 
      style={{
        padding: '4rem 2rem',
        backgroundColor: '#1a1a1a'
      }}
      data-aos="fade-up"
    >
      <h2 
        style={{
          fontSize: '2.5rem',
          textAlign: 'center',
          marginBottom: '3rem',
          color: '#c5fb45'
        }}
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Why Choose KRUNAL&apos;S ACADEMY
      </h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {[
          {
            title: 'Expert Instructors',
            desc: 'Learn from industry professionals with years of experience'
          },
          {
            title: 'Hands-on Training',
            desc: 'Practical sessions with real-world applications'
          },
          {
            title: 'Modern Facilities',
            desc: 'State-of-the-art equipment and learning environment'
          },
          {
            title: 'Career Support',
            desc: 'Job placement assistance after course completion'
          }
        ].map((item, index) => (
          <div 
            key={index} 
            style={{
              backgroundColor: '#2a2a2a',
              padding: '2rem',
              borderRadius: '8px',
              borderTop: '4px solid #c5fb45'
            }}
            data-aos="fade-up"
            data-aos-delay={300 + (index * 100)}
          >
            <h3 style={{
              fontSize: '1.5rem',
              marginBottom: '1rem',
              color: '#c5fb45'
            }}>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Wsus;