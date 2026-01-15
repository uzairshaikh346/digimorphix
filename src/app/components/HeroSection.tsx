"use client";
import { motion } from "framer-motion";
import { Facebook, Instagram } from "lucide-react";

export default function HeroSection() {
  const floatingElements = [
    {
      id: 1,
      left: { mobile: 5, desktop: 10 },
      top: { mobile: 20, desktop: 40 },
      icon: <Facebook className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />,
    },
    {
      id: 3,
      left: { mobile: 85, desktop: 85 },
      top: { mobile: 25, desktop: 70 },
      icon: <Instagram className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />,
    },
  ];

  return (
    <div
      className="min-h-screen w-full bg-white relative flex justify-center px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `
        linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 1px, transparent 1px)
      `,
        backgroundSize: "40px 40px",
      }}
    >
      {/* Radial gradient overlay */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-gradient-radial from-transparent via-white/50 to-white"></div>

      <div id="hero" className="w-full relative">
        <div className="relative container mx-auto py-16 sm:py-24 lg:py-36 flex items-center min-h-screen">
          <div className="w-full">
            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 sm:mb-6 z-50 leading-tight"
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
              – Your Partner{" "}
              <br className="hidden sm:block" />
              <span className="sm:hidden">in </span>
              <span className="hidden sm:inline">in </span>
              Digital Growth
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="z-50 text-base sm:text-lg md:text-xl text-center max-w-2xl mx-auto mb-6 sm:mb-8 px-4"
              style={{ color: "#313133", opacity: 0.8 }}
            >
              We build modern websites, creative designs, videos, SEO, and
              marketing solutions to help your brand grow smarter in the digital
              world.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="z-50 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
            >
              {/* Add your CTA buttons here */}
            </motion.div>
          </div>

          {/* Floating elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
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
                    left: `${element.left.mobile}%`,
                    top: `${element.top.mobile}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: 1 + element.id * 0.8,
                    ease: "easeInOut",
                  }}
                >
                  <div className="text-blue-500">
                    {element.icon}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
