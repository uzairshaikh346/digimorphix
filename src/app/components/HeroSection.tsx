"use client"
import { Mockups } from "./ClientReview";
import { FlipWords } from "./ui/flip-words";
import { motion } from "framer-motion";

const HeroSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const titleVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const mockupVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.8
      }
    }
  };

  return (
    <section className="relative bg-gradient-to-br overflow-hidden" id="home">
      {/* Main content */}
      <motion.div 
        className="min-h-screen"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center mx-auto">
          {/* Main heading */}
          <motion.div 
            className="flex flex-col md:flex-row justify-center text-lg my-7 md:my-10"
            variants={titleVariants}
          >
            <motion.h1 
              className=""
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-primary_green">MARKETIX</span>
            </motion.h1>
            <motion.h1 
              className=""
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <span className="mx-3 text-Light_gray hidden md:block">-</span>
            </motion.h1>
            <motion.h1 
              className=""
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <FlipWords words={["Transform Digital Landscapes","Drive Customer Engagement" , "Maximize Your Brand Impact"]} />
            </motion.h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p 
            className='text-Light_gray text-center'
            variants={itemVariants}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            At MarketIX, we grow your brand with SEO, Social Media, and Web Development — everything you need to thrive online.
          </motion.p>

          {/* CTA Button / Mockups */}
          <motion.div
            className="md:my-8 my-10"
            variants={mockupVariants}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <Mockups/>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;