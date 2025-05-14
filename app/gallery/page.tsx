'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

type Photo = {
  id: number;
  src: string;
  alt: string;
  category: string;
};

const photos: Photo[] = [
  { id: 1, src: '/imagegallary.jpg', alt: 'Classroom session', category: 'Academy' },
  { id: 2, src: '/imagegallary.jpg', alt: 'Students working', category: 'Academy' },
  { id: 3, src: '/imagegallary.jpg', alt: 'Hair styling demo', category: 'Hair' },
  { id: 4, src: '/imagegallary.jpg', alt: 'Hair coloring', category: 'Hair' },
  { id: 5, src: '/imagegallary.jpg', alt: 'Makeup application', category: 'Makeup' },
  { id: 6, src: '/imagegallary.jpg', alt: 'Bridal makeup', category: 'Makeup' },
  { id: 7, src: '/imagegallary.jpg', alt: 'Workshop event', category: 'Events' },
  { id: 8, src: '/imagegallary.jpg', alt: 'Award ceremony', category: 'Events' },
  { id: 9, src: '/imagegallary.jpg', alt: 'Skincare treatment', category: 'Skincare' },
  { id: 10, src: '/imagegallary.jpg', alt: 'Facial demo', category: 'Skincare' },
  { id: 11, src: '/imagegallary.jpg', alt: 'Student showcase', category: 'Students' },
  { id: 12, src: '/imagegallary.jpg', alt: 'Graduation day', category: 'Students' },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<Photo | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...new Set(photos.map(photo => photo.category))];
  const filteredPhotos = activeCategory === "All" 
    ? photos 
    : photos.filter(photo => photo.category === activeCategory);

  const handlePrev = () => {
    if (!selectedImage) return;
    const currentIndex = photos.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
    setSelectedImage(photos[prevIndex]);
  };

  const handleNext = () => {
    if (!selectedImage) return;
    const currentIndex = photos.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % photos.length;
    setSelectedImage(photos[nextIndex]);
  };

  return (
    <div className="bg-[#0a0a0a] text-gray-100 min-h-screen pt-20"> {/* Added pt-20 for navbar spacing */}
      {/* Decorative pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/pattern.png')] bg-repeat bg-[length:300px]"></div>
      </div>

      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> {/* Adjusted py-12 */}
        {/* Title with proper spacing */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#c5fb45] pt-8" 
        >
          Our Gallery
        </motion.h2>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {categories.map(category => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full text-sm md:text-base transition-all ${
                activeCategory === category 
                  ? 'bg-[#c5fb45] text-[#0a0a0a] font-bold' 
                  : 'bg-[#1a1a1a] text-gray-300 border border-[#c5fb45]/30'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Photo Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {filteredPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="relative overflow-hidden rounded-xl aspect-square cursor-pointer group"
              onClick={() => setSelectedImage(photo)}
              style={{
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                border: '1px solid rgba(197, 251, 69, 0.2)'
              }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover absolute inset-0"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white font-medium">{photo.category}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Improved Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-6xl h-full max-h-[90vh] flex flex-col">
            {/* Top bar with close button */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl text-[#c5fb45]">{selectedImage.category}</h3>
              <button 
                onClick={() => setSelectedImage(null)}
                className="bg-[#c5fb45] text-[#0a0a0a] w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#d4ff5e] transition-colors"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>
            
            {/* Main image container */}
            <div className="relative flex-grow">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                priority
              />
              
              {/* Navigation arrows */}
              <button 
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#c5fb45] text-[#0a0a0a] w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#d4ff5e] transition-colors z-10"
              >
                <FaChevronLeft className="text-xl" />
              </button>
              
              <button 
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#c5fb45] text-[#0a0a0a] w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#d4ff5e] transition-colors z-10"
              >
                <FaChevronRight className="text-xl" />
              </button>
            </div>
            
            {/* Caption */}
            <div className="mt-4 text-center">
              <p className="text-white bg-black/50 px-4 py-2 rounded-lg inline-block">
                {selectedImage.alt}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;