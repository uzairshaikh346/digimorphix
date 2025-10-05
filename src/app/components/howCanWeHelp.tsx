"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function ImageCarousel() {
  const slides = [
    {
      id: 1,
      image: '/webMockups/a1.png',
      label: 'Social Feed Content'
    },
    {
      id: 2,
      image: '/webMockups/a2.png',
      label: 'Website Graphics'
    },
    {
      id: 3,
      image: '/webMockups/a3.png',
      label: 'Social Media Ad'
    },
    {
      id: 4,
      image: '/webMockups/a4.png',
      label: 'Brand Design'
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getVisibleSlides = () => {
    const visible = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + slides.length) % slides.length;
      visible.push({ ...slides[index], position: i });
    }
    return visible;
  };

  const handleDotClick = (index:number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 overflow-hidden">
      <div className="max-w-7xl w-full">
        <div className="relative h-[700px] flex items-center justify-center" style={{ perspective: '2000px' }}>
          <div className="absolute inset-0 flex items-center justify-center gap-4">
            <AnimatePresence initial={false} custom={direction}>
              {getVisibleSlides().map((slide) => {
                const isCenter = slide.position === 0;
                const isLeft = slide.position === -1;
                const isRight = slide.position === 1;
                
                return (
                  <motion.div
                    key={`${slide.id}-${currentIndex}`}
                    custom={direction}
                    initial={{ 
                      opacity: 0,
                      scale: 0.6,
                      x: direction > 0 ? 500 : -500,
                      rotateY: direction > 0 ? 60 : -60
                    }}
                    animate={{ 
                      opacity: isCenter ? 1 : 0.5,
                      scale: isCenter ? 1.1 : 0.85,
                      x: isLeft ? -280 : isRight ? 280 : 0,
                      y: isCenter ? -20 : 0,
                      rotateY: isLeft ? -35 : isRight ? 35 : 0,
                      rotateX: -10,
                      zIndex: isCenter ? 30 : 10,
                    }}
                    exit={{ 
                      opacity: 0,
                      scale: 0.6,
                      x: direction > 0 ? -500 : 500,
                      rotateY: direction > 0 ? -60 : 60
                    }}
                    transition={{ 
                      duration: 0.7,
                      ease: [0.43, 0.13, 0.23, 0.96]
                    }}
                    className="absolute"
                    style={{ 
                      transformStyle: 'preserve-3d',
                      transformOrigin: 'center center'
                    }}
                  >
                    <div className="flex flex-col items-center">
                      <div className={`relative rounded-2xl overflow-hidden transition-all duration-700 ${
                        isCenter ? 'w-[320px] h-[580px]' : 'w-[280px] h-[500px]'
                      }`}
                      style={{
                        transform: 'rotateX(-5deg)',
                        transformStyle: 'preserve-3d',
                      }}
                      >
                        <img 
                          src={slide.image}
                          alt={slide.label}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {isCenter && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.7, duration: 0.9 }}
                          className="mt-8 text-center"
                        >
                          <h3 className="text-gray-800 text-xl font-semibold">
                            {slide.label}
                          </h3>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {slides.map((_, idx) => (
            <motion.button
              key={idx}
              onClick={() => handleDotClick(idx)}
              className={`h-2 rounded-full transition-all duration-300`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}