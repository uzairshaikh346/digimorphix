"use client"
import { motion } from "framer-motion";

function ServiceSection() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3
      }
    }
  };

 const headingVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const mediaVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const reverseTextVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const reverseMediaVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="relative bg-black overflow-hidden flex items-center justify-center" id="about">
      {/* Geometric Pattern Background */}
      <div className="absolute inset-0 opacity-10"></div>

      {/* Content Container */}
      <motion.div 
        className="relative z-10 text-center px-6 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {/* Main Heading */}
        <motion.h1 
          className="text-2xl md:text-3xl lg:text-5xl font-bold mb-12 leading-tight"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <span className="text-Light_gray">TRUST OUR </span>
          <span className="text-primary_green">EXPERTISE</span>
          <span className="text-white"> FOR</span>
          <br />
          <span className="text-Light_gray">UNMATCHED </span>
          <span className="text-primary_green">DIGITAL SOLUTIONS</span>
        </motion.h1>

        {/* Website Development Section */}
        <motion.section 
          className="text-white flex items-center md:my-24 "
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="container py-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div 
                className="space-y-6 flex flex-col justify-center"
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.4 }}
              >
                <h1 className="text-3xl md:text-4xl font-bold">
                  Website <span className="text-primary_green">Development</span>
                </h1>
                <p className="text-gray-300 text-lg leading-relaxed">
                  At MarketIX, We specialize in SEO, Social Media Marketing (SMM), 
                  and Web Development, helping businesses thrive in the digital era. 
                  Whether you are looking to rank higher on Google, engage your audience 
                  on social media, or build a stunning website, we have got you covered.
                </p>
                <div className="flex gap-4"></div>
              </motion.div>

              {/* Right Content - Video */}
              <motion.div 
                className="relative flex justify-center items-center"
                variants={mediaVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.4 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <video
                  className="w-full h-auto max-w-lg rounded-lg shadow-lg object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/videos/webdev.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Graphic Design & UI/UX Section */}
        <motion.section 
          className="text-white flex items-center md:my-24"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="container py-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Content - Video */}
              <motion.div 
                className="relative flex justify-center items-center"
                variants={reverseMediaVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.4 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <video
                  className="w-full h-auto max-w-lg rounded-lg shadow-lg object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/videos/graphicDesignPromo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </motion.div>
              
              {/* Right Content - Text */}
              <motion.div 
                className="space-y-6 flex flex-col justify-center"
                variants={reverseTextVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.4 }}
              >
                <h1 className="text-3xl md:text-4xl font-bold">
                  Graphic Design & <span className="text-primary_green">UI/UX</span>
                </h1>
                <p className="text-gray-300 text-lg leading-relaxed">
                  At MarketIX, We specialize in SEO, Social Media Marketing (SMM), 
                  and Web Development, helping businesses thrive in the digital era. 
                  Whether you are looking to rank higher on Google, engage your audience 
                  on social media, or build a stunning website, we have got you covered.
                </p>
                <div className="flex gap-4"></div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Video Editing Section */}
        <motion.section 
          className="text-white flex items-center md:my-24"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="container py-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div 
                className="space-y-6 flex flex-col justify-center"
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.4 }}
              >
                <h1 className="text-3xl md:text-4xl font-bold">
                  Video Editing{" "}
                  <span className="text-primary_green">Content Creators</span>
                </h1>
                <p className="text-gray-300 text-lg leading-relaxed">
                  AI, Marketing, Web Development, SEO, Social Media Marketing (SMM),
                  and more! Helping businesses thrive in the digital era. Whether you
                  are looking to rank higher or build an alluring website, we have
                  got you covered.
                </p>
                <div className="flex gap-4"></div>
              </motion.div>

              {/* Right Content - Video */}
              <motion.div 
                className="relative flex justify-center items-center"
                variants={mediaVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.4 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <video
                  className="w-full h-auto max-w-lg rounded-lg shadow-lg object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/videos/videoEditing.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
}

export default ServiceSection;