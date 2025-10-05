"use client"
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { Play, Pause, Star, TrendingUp, ThumbsUp } from "lucide-react";

function ServiceSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

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

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const videoVariants = {
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

  const features = [
    {
      icon: <Star className="w-6 h-6" />,
      title: "High quality",
      subtitle: "creatives"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "See improved",
      subtitle: "ROAS"
    },
    {
      icon: <ThumbsUp className="w-6 h-6" />,
      title: "Trusted by 100s of",
      subtitle: "advertisers"
    }
  ];

  return (
    <div className="relative bg-white overflow-hidden flex items-center justify-center py-20 px-4" id="about">
      {/* Content Container */}
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Video Section - Left Side */}
          <motion.div
            variants={videoVariants}
            className="relative group cursor-pointer"
            onClick={handleVideoClick}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <video
                ref={videoRef}
                className="w-full h-auto rounded-3xl"
                poster="/video-thumbnail.jpg"
                loop
              >
                <source src="/your-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Play/Pause Button Overlay */}
              {!isPlaying && (
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center transition-all group-hover:bg-black/30">
                  <div className="bg-white rounded-full p-8 transform group-hover:scale-110 transition-transform shadow-xl">
                    <Play className="w-10 h-10 text-gray fill-gray ml-1" />
                  </div>
                </div>
              )}
              
              {isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white/90 rounded-full p-6 shadow-xl">
                    <Pause className="w-8 h-8 text-gray" />
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Text Section - Right Side */}
          <motion.div
            variants={textVariants}
            className="space-y-8"
          >
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                <span className="text-purple">Stop wasting your ad spend </span>
                <span className="text-gray">on low impact creatives.</span>
              </h1>
              <p className="text-gray/70 text-lg md:text-xl mt-6">
                We Create Ads that Perform and Drive Growth.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="bg-purple-100 rounded-full p-4 mb-3">
                    <div className="text-gray">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray text-base">
                    {feature.title}
                  </h3>
                  <p className="font-semibold text-gray text-base">
                    {feature.subtitle}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default ServiceSection;