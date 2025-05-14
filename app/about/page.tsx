'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
// @ts-expect-error TS2307
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutPage = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<number | null>(null);

  useEffect(() => {
    AOS.init({
      delay: 200,
      duration: 1000,
    });
  }, []);

  const certificates = [
    { id: 1, title: 'Best Hair Artist Award 2015', image: '/person1.jpg' },
    { id: 2, title: 'Hair Avengers Award 2021', image: '/person1.jpg' },
    { id: 3, title: 'CIDESCO Certification 2020', image: '/person1.jpg' },
    { id: 4, title: 'VLCC Faculty Certification', image: '/person1.jpg' }
  ];

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center bg-black/70 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/11.webp" 
            alt="Academy Interior"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div 
          data-aos="fade-up"
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-[14vh] sm:text-[12vh] md:text-[10vh] lg:text-[9vh] font-extrabold mb-6 text-[#c5fb45] leading-tight tracking-tight">
            ABOUT <span>KRUNAL&apos;S</span> ACADEMY
          </h1>
          
          <div
            data-aos="zoom-in"
            data-aos-delay="300"
            className="mt-10"
          >
            <div className="w-20 h-1 bg-[#c5fb45] mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Academy Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div
            data-aos="fade-up"
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div   >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#c5fb45] -mt-40">The Academy</h2>
              <div className="space-y-6 text-lg">
                <p>
                  We are a professional School for beauty training academy in Pune, Maharashtra. With a Vision of expanding in Mumbai, Nagpur, Nashik etc.
                </p>
                <p>
                  We offer certified beauty courses in cosmetology - Hair, Skin, makeup, Nail and salon management with personality development and soft skills.
                </p>
                <p>
                  The education is designed to prepare students for exciting careers in beauty and fashion industry in India and abroad.
                </p>
              </div>
            </div>
            <div 
              data-aos="fade-left"
              className="relative h-80 md:h-96 rounded-lg overflow-hidden border border-[#c5fb45]/20"
            >
              <Image 
                src="/ourAcad.jpg" 
                alt="Academy Classroom"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Teachers Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <h2 
            data-aos="fade-up"
            className="text-3xl md:text-4xl font-bold mb-16 text-center text-[#c5fb45]"
          >
            Meet Our Expert Faculty
          </h2>

          {/* Kunal Gaikwad */}
          <div 
            data-aos="fade-right"
            className="grid md:grid-cols-2 gap-12 mb-24 items-center"
          >
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden border-2 border-[#c5fb45]/30">
              <Image 
                src="/kunal.jpg" 
                alt="Kunal Gaikwad"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#c5fb45]">Kunal Gaikwad</h3>
              <div className="space-y-6">
                <p>
                  With over 12 years of experience in the beauty industry, Kunal specializes in advanced hair techniques and salon management.
                </p>
                <div className="bg-[#1a1a1a] p-6 rounded-lg border-l-4 border-[#c5fb45]">
                  <h4 className="text-xl font-semibold mb-3 text-[#c5fb45]">Achievements:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-[#c5fb45] mr-2">•</span>
                      Won Best Hair Artist Award Pune, 2015
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#c5fb45] mr-2">•</span>
                      Won Hair Avengers Award 2021 on national level
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#c5fb45] mr-2">•</span>
                      Promoted to Regional Trainer Lakme in 2019
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#c5fb45] mr-2">•</span>
                      Handled 28 branches all over Maharashtra
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Pooja */}
          <div 
            data-aos="fade-left"
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="md:order-2 relative h-80 md:h-96 rounded-lg overflow-hidden border-2 border-[#c5fb45]/30">
              <Image 
                src="/pooja.jpg" 
                alt="Pooja"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:order-1">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#c5fb45]">Pooja</h3>
              <div className="space-y-6">
                <p className=''>
                  International certified skincare specialist with expertise in advanced dermatological treatments and cosmetology.
                </p>
                <div className="bg-[#1a1a1a] p-6 rounded-lg border-l-4 border-[#c5fb45]">
                  <h4 className="text-xl font-semibold mb-3 text-[#c5fb45]">Achievements:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-[#c5fb45] mr-2">•</span>
                      Completed CIDESCO International Course in 2020
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#c5fb45] mr-2">•</span>
                      Selected as Faculty trainer at VLCC, Pune
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#c5fb45] mr-2">•</span>
                      Specialized in advanced facial techniques
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#c5fb45] mr-2">•</span>
                      Trained over 500 students in skincare
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div
            data-aos="fade-up"
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#c5fb45] mb-4">
              Our Certifications
            </h2>
            <div className="w-20 h-0.5 bg-[#c5fb45] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                data-aos="fade-up"
                data-aos-delay={cert.id * 100}
                className="cursor-pointer"
                onClick={() => setSelectedCertificate(cert.id)}
              >
                <div className="relative h-60 rounded-lg overflow-hidden border border-[#c5fb45]/20 bg-[#0a0a0a] hover:border-[#c5fb45]/50 transition-all">
                  <Image 
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover opacity-90 hover:opacity-100 transition-opacity"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/40 hover:bg-black/20 transition-all flex items-end p-4">
                    <h3 className="text-white font-medium text-sm md:text-base">{cert.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div
            data-aos="fade-up"
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden border border-[#c5fb45]/20">
              <Image 
                src="/11.webp" 
                alt="Beauty Technology"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#c5fb45]">Innovation in Beauty</h2>
              <div className="space-y-6 text-lg">
                <p>
                  New technologies are being introduced into the beauty and wellness industry almost every day. This introduction of latest beauty products, equipments, and techniques has helped consumers to try out different beauty products and techniques.
                </p>
                <p>
                  The evolution of the beauty industry has just not made the lives of consumers easy but also extended its arms to business enthusiasts.
                </p>
                <p>
                  At our academy, we stay at the forefront of these innovations, ensuring our students learn the most current techniques in the industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-[#1a1a1a] rounded-lg overflow-hidden border border-[#c5fb45]/30">
            <button 
              onClick={() => setSelectedCertificate(null)}
              className="absolute top-4 right-4 z-10 bg-[#c5fb45] text-black w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#d4ff5e] transition-colors"
            >
              &times;
            </button>
            <div className="relative h-[70vh]">
              <Image 
                src={certificates.find(c => c.id === selectedCertificate)!.image}
                alt={certificates.find(c => c.id === selectedCertificate)!.title}
                fill
                className="object-contain"
              />
            </div>
            <div className="p-4 text-center border-t border-[#c5fb45]/20">
              <h3 className="text-xl font-semibold text-[#c5fb45]">
                {certificates.find(c => c.id === selectedCertificate)!.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutPage;