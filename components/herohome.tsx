'use client';

import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';

function Herohome() {
  const [isHoveredPrimary, setIsHoveredPrimary] = useState(false);
  const [isHoveredSecondary, setIsHoveredSecondary] = useState(false);

  return (
    <section style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '0 2rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
    
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 2,
        opacity: 0.7
      }}>
        <Spline
          scene="https://prod.spline.design/nMe-3-DRUZN3v5ua/scene.splinecode"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </div>

      
      <div style={{
        
        padding: '2rem',
        borderRadius: '8px',
        maxWidth: '1200px',
        zIndex: 3
      }}>
        <h1 style={{
          fontSize: '4rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
          color: '#c5fb45'
        }}>KRUNAL&apos;S ACADEMY</h1>
        <p style={{
          fontSize: '1.5rem',
          maxWidth: '800px',
          marginBottom: '2rem',
          color: '#ffffff'
        }}>The School Of Hair, Skin, Make up & Nail</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button 
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: isHoveredPrimary ? '#d4ff5e' : '#c5fb45',
              color: '#0a0a0a',
              border: 'none',
              borderRadius: '4px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transform: isHoveredPrimary ? 'scale(1.05)' : 'scale(1)',
              boxShadow: isHoveredPrimary ? '0 0 15px rgba(197, 251, 69, 0.5)' : 'none',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={() => setIsHoveredPrimary(true)}
            onMouseLeave={() => setIsHoveredPrimary(false)}
          >
            Explore Courses
          </button>
          <button 
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: isHoveredSecondary ? 'rgba(197, 251, 69, 0.1)' : 'transparent',
              color: '#c5fb45',
              border: '2px solid #c5fb45',
              borderRadius: '4px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transform: isHoveredSecondary ? 'scale(1.05)' : 'scale(1)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={() => setIsHoveredSecondary(true)}
            onMouseLeave={() => setIsHoveredSecondary(false)}
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}

export default Herohome;