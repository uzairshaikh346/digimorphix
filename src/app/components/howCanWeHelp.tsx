"use client"
import { motion } from "framer-motion";
import Image from 'next/image'
 const fadeUp = {
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

const HowCanWeHelp = () => {
  return (
   <div className="min-h-screen bg-black text-white flex items-center justify-center p-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Heading */}
          <motion.h1 
          className="text-5xl md:text-6xl font-bold my-14"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          HOW CAN <span className="text-primary_green">WE HELP YOU?</span>
        </motion.h1>
        
        {/* Hero Video Banner Container */}
        <motion.div className="rounded-3xl mb-12 relative overflow-hidden"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
         <Image
          className="w-full h-64 md:h-128  rounded-lg shadow-lg object-cover"
          height={1000}
          width={1000}
          src="/girlImage.jpg" alt="bracklers"

         />
        </motion.div>
        
        {/* Description Text */}
        <motion.div
         variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}>

        <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-4xl mx-auto leading-relaxed">
          At Bracklers, we are here to support your digital journey every step of the way. Whether you are 
          looking to improve your website&apos;s SEO, run targeted ad campaigns, or design a standout brand 
          identity — we have got you covered.
        </p>
        
        {/* Services List */}
        <div className="space-y-4 text-left max-w-md mx-auto mb-12">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-primary_green rounded-full"></div>
            <span className="text-gray-300">Need a new website?</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-primary_green rounded-full"></div>
            <span className="text-gray-300">Want to rank higher on Google?</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-primary_green rounded-full"></div>
            <span className="text-gray-300">Looking to increase sales through social media?</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-primary_green rounded-full"></div>
            <span className="text-gray-300">Want to build your online store?</span>
          </div>
        </div>
        </motion.div>
        
      
      </div>
    </div>
  );
};

export default HowCanWeHelp;
export {fadeUp}