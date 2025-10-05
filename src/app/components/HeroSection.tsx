"use client";

import { motion } from "framer-motion";
import { Sparkles, Facebook, Instagram } from "lucide-react";

export default function HeroSection() {
  const floatingElements = [
    {
      id: 1,
      left: 10,
      top: 40,
      icon: <Facebook className="w-8 h-8 text-purple sm:inline-block hidden" />,
    },
    {
      id: 3,
      left: 85,
      top: 70,
      icon: (
        <Instagram className="w-8 h-8 text-purple hidden sm:inline-block" />
      ),
    },
  ];

  return (
    <div
      className="h-[40rem] w-full bg-white relative flex justify-center"
      style={{
        backgroundImage: `
        linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 1px, transparent 1px)
      `,
        backgroundSize: "40px 40px",
      }}
    >
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-gradient-radial from-transparent via-white/50 to-white"></div>

      <div id="hero" className="w-full relative min-h-screen ">
        {/* Animated background gradient */}
        <div className="relative container mx-auto pb-24 sm:pt-36 sm:pb-32 ">
          {/* Badge */}

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-center mb-6 z-50"
            style={{ color: "#313133" }}
          >
            <span
              className="bg-clip-text text-transparent bg-gradient-to-r"
              style={{
                backgroundImage: "linear-gradient(to right, #584596, #7c5fbd)",
              }}
            >
              Bracklers
            </span>{" "}
            – Your Partner <br /> in Digital Growth
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="z-50 text-lg md:text-xl text-center max-w-2xl px-8 md:px-0 mx-auto mb-8"
            style={{ color: "#313133", opacity: 0.8 }}
          >
            We build modern websites, creative designs, videos, SEO, and
            marketing solutions to help your brand grow smarter in the digital
            world.{" "}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="z-50 flex flex-col sm:flex-row gap-4 justify-center items-center"
          ></motion.div>

          {/* Floating elements */}
          <div className="absolute inset-0 pointer-events-none">
            {floatingElements.map((element) => (
              <motion.div
                key={element.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: 1,
                  duration: 0.5,
                  ease: "easeInOut",
                }}
              >
                <motion.div
                  className="absolute"
                  style={{
                    left: `${element.left}%`,
                    top: `${element.top}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [1, 0.8, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: 1 + element.id * 0.8,
                    ease: "easeInOut",
                  }}
                >
                  <div className="text-blue-500 w-6 h-6">{element.icon}</div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
