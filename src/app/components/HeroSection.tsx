"use client"
import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion';
import { ChevronRight, Code, TrendingUp, Zap, Play, ArrowRight, Sparkles, Globe, Rocket, Star } from 'lucide-react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
}

interface MousePosition {
  x: number;
  y: number;
}

const HeroSection = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const phrases = [
    "Transform Digital Landscapes",
    "Drive Customer Engagement", 
    "Maximize Your Brand Impact"
  ];

  // Particle system state
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Create particles
    const newParticles: Particle[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      speed: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.2,
    }));
    setParticles(newParticles);

    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [phrases.length]);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePosition({ x, y });
        mouseX.set(x);
        mouseY.set(y);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Mouse-based transforms
  const rotateX = useTransform(mouseY, [0, 800], [5, -5]);
  const rotateY = useTransform(mouseX, [0, 1200], [-5, 5]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0, rotateX: 90 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const titleVariants = {
    hidden: { scale: 0.5, opacity: 0, rotateY: 180 },
    visible: {
      scale: 1,
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-30, 30, -30],
      x: [-20, 20, -20],
      rotate: [0, 360, 0],
      scale: [1, 1.2, 1],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.3, 1],
      opacity: [0.3, 1, 0.3],
      rotate: [0, 180, 360],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const morphingVariants = {
    animate: {
      borderRadius: ["50%", "20%", "50%", "30%", "50%"],
      rotate: [0, 90, 180, 270, 360],
      scale: [1, 1.1, 0.9, 1.05, 1],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const glowVariants = {
    animate: {
      boxShadow: [
        "0 0 20px rgba(28, 159, 132, 0.3)",
        "0 0 40px rgba(28, 159, 132, 0.6)",
        "0 0 60px rgba(28, 159, 132, 0.4)",
        "0 0 20px rgba(28, 159, 132, 0.3)"
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section 
      ref={containerRef}
      className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900" 
      id="home"
      style={{ perspective: "1000px" }}
    >
      {/* Animated Particle Background */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute bg-primary_green rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              y: [-20, -40, -20],
              opacity: [particle.opacity, particle.opacity * 1.5, particle.opacity],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: particle.speed * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.id * 0.1,
            }}
          />
        ))}
      </div>

      {/* Dynamic Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Morphing Blobs */}
        <motion.div
          variants={morphingVariants}
          animate="animate"
          className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-primary_green/15 to-primary_green/15 blur-3xl"
          style={{ filter: "blur(60px)" }}
        />
        <motion.div
          variants={morphingVariants}
          animate="animate"
          style={{ animationDelay: '2s' }}
          className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-primary_green/10 to-primary_green/10 blur-3xl"
        />
        <motion.div
          variants={morphingVariants}
          animate="animate"
          style={{ animationDelay: '4s' }}
          className="absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-to-r from-primary_green/12 to-primary_green/12 blur-3xl"
        />

        {/* Floating Geometric Shapes */}
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-20 right-32 w-6 h-6 bg-primary_green/70 opacity-40"
          style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '1s' }}
          className="absolute top-60 left-20 w-8 h-8 border-2 border-primary_green/60 opacity-30 rotate-45"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '3s' }}
          className="absolute bottom-40 right-40 w-12 h-12 bg-gradient-to-r from-primary_green/40 to-transparent rounded-full opacity-25"
        />

        {/* Interactive Cursor Following Element */}
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-primary_green/5 to-primary_green/5 rounded-full blur-3xl pointer-events-none"
          animate={{
            x: mousePosition.x - 192,
            y: mousePosition.y - 192,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
        />

        {/* Animated Grid with Perspective */}
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(28, 159, 132, 0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(28, 159, 132, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: 'perspective(500px) rotateX(30deg)',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Floating Code Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.08, scale: 1 }}
          transition={{ duration: 2, delay: 1 }}
          whileHover={{ scale: 1.1, opacity: 0.15 }}
          className="absolute top-32 right-10 bg-black/30 backdrop-blur-sm p-6 rounded-xl font-mono text-primary_green text-sm transform rotate-3 hidden lg:block border border-primary_green/20 shadow-lg"
        >
          <motion.div animate={{ opacity: [0.3, 0.7, 0.3] }} transition={{ duration: 2, repeat: Infinity }}>
            const <span className="text-primary_green">magic</span> = () =&gt; &#123;
          </motion.div>
          <motion.div animate={{ opacity: [0.3, 0.7, 0.3] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} className="ml-4">
            return <span className="text-primary_green">growth</span>++;
          </motion.div>
          <motion.div animate={{ opacity: [0.3, 0.7, 0.3] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }}>
            &#125;
          </motion.div>
        </motion.div>

        {/* Animated Icons */}
        <motion.div
          variants={pulseVariants}
          animate="animate"
          className="absolute bottom-32 right-20 opacity-10"
        >
          <TrendingUp className="w-16 h-16 text-primary_green" />
        </motion.div>
        
        <motion.div
          variants={pulseVariants}
          animate="animate"
          style={{ animationDelay: '1s' }}
          className="absolute top-1/4 left-10 opacity-8"
        >
          <Globe className="w-20 h-20 text-primary_green" />
        </motion.div>

        <motion.div
          variants={pulseVariants}
          animate="animate"
          style={{ animationDelay: '2s' }}
          className="absolute top-2/3 right-10 opacity-12"
        >
          <Rocket className="w-14 h-14 text-primary_green" />
        </motion.div>
      </div>

      {/* Main Content with 3D Transform */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 min-h-screen"
        style={{
          rotateX: rotateX,
          rotateY: rotateY,
          transformStyle: "preserve-3d"
        }}
      >
        <div className="text-center mx-auto">
          {/* Floating Badge with Glow */}
          <motion.div
            variants={itemVariants}
            className="pt-20 mb-12"
          >
            <motion.div
              variants={glowVariants}
              animate="animate"
              className="inline-flex items-center px-6 py-3 bg-black/20 backdrop-blur-md border border-primary_green/20 rounded-full text-primary_green text-sm font-medium shadow-lg"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-4 h-4 mr-2" />
              </motion.div>
              Leading Digital Agency
              <ChevronRight className="w-4 h-4 ml-2" />
            </motion.div>
          </motion.div>

          {/* 3D Rotating Main Heading */}
          <motion.div
            className="flex flex-col md:flex-row justify-center items-center text-6xl sm:text-7xl lg:text-9xl my-10 md:my-6 font-bold"
            variants={titleVariants}
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.h1
              className="relative"
              whileHover={{ 
                scale: 1.1, 
                rotateY: 15,
                textShadow: "0 0 20px rgba(28, 159, 132, 0.8)"
              }}
              transition={{ duration: 0.3 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <span className="bg-gradient-to-r from-primary_green via-primary_green to-primary_green bg-clip-text text-transparent">
                Bracklers
              </span>
              {/* 3D Text Shadow Effect */}
              <motion.span
                className="absolute top-0 left-0 bg-gradient-to-r from-primary_green via-primary_green to-primary_green bg-clip-text text-transparent opacity-20 -z-10"
                style={{ transform: "translateZ(-10px) translateY(4px) translateX(4px)" }}
              >
                Bracklers
              </motion.span>
            </motion.h1>
            
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <span className="mx-6 text-gray-400 hidden md:block text-4xl">-</span>
            </motion.h1>
            
            {/* Rotating Text with Particle Effects */}
            <motion.h1
              className="text-2xl sm:text-3xl lg:text-5xl font-semibold flex items-center justify-center relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <motion.span
                key={currentPhrase}
                initial={{ opacity: 0, y: 50, rotateX: 90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, y: -50, rotateX: -90 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="bg-gradient-to-r from-gray-300 via-gray-200 to-gray-100 bg-clip-text text-transparent min-w-fit relative"
              >
                {phrases[currentPhrase]}
                {/* Sparkle Effects */}
                <motion.div
                  className="absolute -top-2 -right-2"
                  animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Star className="w-6 h-6 text-primary_green opacity-40" />
                </motion.div>
              </motion.span>
            </motion.h1>
          </motion.div>

          {/* Enhanced Description with Typewriter Effect */}
          <motion.p
            className="text-gray-300 text-center text-xl sm:text-2xl max-w-5xl mx-auto mb-16 leading-relaxed px-4 font-light"
            variants={itemVariants}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            At <motion.span 
              className="text-primary_green font-semibold"
              whileHover={{ scale: 1.1, textShadow: "0 0 10px rgba(28, 159, 132, 0.6)" }}
            >
              Bracklers
            </motion.span>, we grow your brand with SEO, Social Media, and Web Development — everything you need to thrive online.
          </motion.p>

          {/* Ultra Animated CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 mb-20 justify-center"
          >
            {/* Primary CTA with Holographic Effect */}
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                y: -8,
                rotateX: 10,
                boxShadow: "0 20px 40px rgba(28, 159, 132, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-10 py-5 bg-gradient-to-r from-primary_green via-primary_green to-primary_green rounded-2xl font-bold text-white text-lg shadow-2xl shadow-primary_green/30 transition-all duration-500 overflow-hidden"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Animated Background Gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary_green via-primary_green to-primary_green rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{
                  background: [
                    "linear-gradient(45deg, #1c9f84, #1c9f84, #1c9f84)",
                    "linear-gradient(135deg, #1c9f84, #1c9f84, #1c9f84)",
                    "linear-gradient(225deg, #1c9f84, #1c9f84, #1c9f84)",
                    "linear-gradient(315deg, #1c9f84, #1c9f84, #1c9f84)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              {/* Shimmer Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                animate={{
                  x: ["-100%", "100%"]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1
                }}
              />
              
              <span className="relative z-10 flex items-center justify-center">
                Get Started
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <ArrowRight className="w-6 h-6 ml-3" />
                </motion.div>
              </span>
            </motion.button>

            {/* Secondary CTA with Glass Morphism */}
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                y: -8,
                rotateX: 10,
                backdropFilter: "blur(20px)"
              }}
              whileTap={{ scale: 0.95 }}
              className="group px-10 py-5 bg-white/5 backdrop-blur-md border-2 border-primary_green/30 rounded-2xl font-bold text-gray-200 text-lg hover:bg-white/10 hover:border-primary_green/50 transition-all duration-500 shadow-xl"
            >
              <span className="flex items-center justify-center">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Play className="w-6 h-6 mr-3" />
                </motion.div>
                View Services
              </span>
            </motion.button>
          </motion.div>

          {/* 3D Stats with Floating Animation */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-12 text-center px-4"
          >
            {[
              { number: "50+", label: "Projects Delivered", color: "text-primary_green" },
              { number: "98%", label: "Client Satisfaction", color: "text-primary_green" },
              { number: "24/7", label: "Support Available", color: "text-primary_green" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                variants={itemVariants} 
                className="group relative"
                whileHover={{ 
                  scale: 1.1, 
                  y: -10,
                  rotateY: 15,
                  transformStyle: "preserve-3d"
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div
                  className="relative p-8 bg-black/20 backdrop-blur-md rounded-2xl border border-primary_green/20 shadow-xl"
                  animate={{
                    y: [0, -10, 0],
                    rotateX: [0, 5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                >
                  <div className={`text-4xl font-bold ${stat.color} mb-3 group-hover:scale-125 transition-transform duration-300`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-medium">{stat.label}</div>
                  
                  {/* Floating Particles around Stats */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-primary_green rounded-full opacity-60"
                      style={{
                        top: `${20 + i * 30}%`,
                        right: `${10 + i * 20}%`,
                      }}
                      animate={{
                        y: [-10, 10, -10],
                        opacity: [0.3, 0.8, 0.3],
                        scale: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2 + i,
                        repeat: Infinity,
                        delay: index * 0.2 + i * 0.3
                      }}
                    />
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Animated Bottom Gradient with Waves */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-40"
        animate={{
          background: [
            "linear-gradient(to top, rgba(0,0,0,0.9), transparent)",
            "linear-gradient(to top, rgba(28,159,132,0.1), transparent)",
            "linear-gradient(to top, rgba(0,0,0,0.9), transparent)"
          ]
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />
    </section>
  );
};

export default HeroSection;