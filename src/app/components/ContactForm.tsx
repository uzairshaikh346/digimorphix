"use client"
import { motion } from "framer-motion";
import { LocateIcon, Phone } from "lucide-react";
import { MailIcon } from "lucide-react";

function ContactForm() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const leftSideVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const rightSideVariants = {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const formFieldVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const socialIconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="text-gray-400 body-font relative bg-black my-10" id="contact">
      <motion.div 
        className="container px-5 py-24 mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="flex flex-wrap lg:flex-nowrap justify-between gap-5">
          {/* Left Side - Contact Info */}
          <motion.div 
            className="lg:w-1/2 w-full mb-10 lg:mb-0"
            variants={leftSideVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.h2 
              className="text-3xl font-medium text-primary_green mb-4"
              variants={itemVariants}
            >
              Get in Touch
            </motion.h2>
            <motion.p 
              className="leading-relaxed text-lg text-gray-300"
              variants={itemVariants}
            >
              Have a question or want to discuss a project? We d love to hear from you. Reach out to us via email, phone, or visit our office.
            </motion.p>
            
            <motion.div 
              className="mt-6"
              variants={itemVariants}
            >
              <p className="text-lg font-semibold text-gray-200 flex items-center gap-2"><LocateIcon size={15}/> Address:</p>
              <p className="text-gray-300">Gulshan-e-iqbal,Karachi</p>
            </motion.div>
            
            <motion.div 
              className="mt-4"
              variants={itemVariants}
            >
              <p className="text-lg font-semibold text-gray-200 flex items-center gap-2"><MailIcon size={15}/> Email:</p>
              <a href="mailto:marketix29@gmail.com" className="text-gray-300 hover:text-[#00ff00] transition-colors duration-200">
                bracklersofficial@gmail.com
              </a>
            </motion.div>
            
            <motion.div 
              className="mt-4"
              variants={itemVariants}
            >
              <p className="text-lg font-semibold text-gray-200 flex items-center gap-2"><Phone size={15}/> Phone:</p>
              <p className="text-gray-300">+92 3158445869</p>
            </motion.div>
            
            <motion.div 
              className="mt-6 flex space-x-4"
              variants={itemVariants}
            >
              <motion.a 
                href="#" 
                className="text-gray-500 hover:text-[#00ff00] transition-colors duration-200"
                variants={socialIconVariants}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-500 hover:text-[#00ff00] transition-colors duration-200"
                variants={socialIconVariants}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-500 hover:text-primary_green transition-colors duration-200"
                variants={socialIconVariants}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div 
            className="lg:w-1/2 w-full bg-gray-900 p-8 rounded-lg"
            variants={rightSideVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.h2 
              className="text-2xl font-medium text-primary_green mb-4"
              variants={itemVariants}
            >
              Contact Us
            </motion.h2>
            <motion.p 
              className="leading-relaxed mb-6 text-gray-300"
              variants={itemVariants}
            >
              Fill out the form below and we will get back to you shortly.
            </motion.p>
            form
            <form action="https://formsubmit.co/" method="POST" className="flex flex-wrap -m-2">
              <motion.div 
                className="p-2 w-1/2"
                variants={formFieldVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
              >
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-200">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-gray-800 rounded border border-primary_green focus:border-[#00ff00] focus:ring-2 focus:ring-primtext-primary_green focus:ring-opacity-20 text-base outline-none text-gray-400 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </motion.div>
              
              <motion.div 
                className="p-2 w-1/2"
                variants={formFieldVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
              >
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-200">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-gray-800 rounded border border-primary_green focus:border-[#00ff00] focus:ring-2 focus:ring-primtext-primary_green focus:ring-opacity-20 text-base outline-none text-gray-400 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </motion.div>
              
              <motion.div 
                className="p-2 w-full"
                variants={formFieldVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
              >
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-sm text-gray-200">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    className="w-full bg-gray-800 rounded border border-primary_green text-primary_green focus:border-primtext-primary_green focus:ring-2 focus:ring-primtext-primary_green focus:ring-opacity-20 text-base outline-none py-2 px-3 leading-8 transition-colors duration-200 ease-in-out resize-none"
                  />
                </div>
              </motion.div>
              
              <motion.div 
                className="p-2 w-full"
                variants={formFieldVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
              >
                <motion.button 
                  className="w-full text-white bg-gray-600 border-0 py-2 px-6 focus:outline-none hover:bg-primary_green rounded text-lg transition-colors duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                >
                  Send Message
                </motion.button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default ContactForm;