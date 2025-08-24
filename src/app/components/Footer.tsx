import React from 'react';
import Link from 'next/link';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="text-gray-400 bg-black border-t border-gray-900">
      <div className="container px-5 py-16 mx-auto">
        <div className="flex flex-wrap justify-between md:text-left text-center">
          {/* Services Column */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-10">
            <h2 className="title-font font-semibold text-white tracking-wider text-sm mb-4 uppercase">
              Services
            </h2>
            <nav className="list-none space-y-3">
              <li><Link href="/services" className="hover:text-[#00FF00] transition-colors duration-200">Web Development</Link></li>
              <li><Link href="/services" className="hover:text-[#00FF00] transition-colors duration-200">SEO (Search Engine Optimization)</Link></li>
              <li><Link href="/services" className="hover:text-[#00FF00] transition-colors duration-200">SMM (Social Media Management)</Link></li>
              <li><Link href="/services" className="hover:text-[#00FF00] transition-colors duration-200">E-commerce Solutions</Link></li>
            </nav>
          </div>
          
          {/* Company Column */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-10">
            <h2 className="title-font font-semibold text-white tracking-wider text-sm mb-4 uppercase">
              Company
            </h2>
            <nav className="list-none space-y-3">
              <li><Link href="/about" className="hover:text-[#00FF00] transition-colors duration-200">About Us</Link></li>
              <li><Link href="/about" className="hover:text-[#00FF00] transition-colors duration-200">Careers</Link></li>
              <li><Link href="/about" className="hover:text-[#00FF00] transition-colors duration-200">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-[#00FF00] transition-colors duration-200">Contact</Link></li>
            </nav>
          </div>
          
          {/* Contact Column */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-10">
            <h2 className="title-font font-semibold text-white tracking-wider text-sm mb-4 uppercase">
              Contact Us
            </h2>
            <nav className="list-none space-y-3">
              <li className="flex md:justify-start justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-gray-500">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <a href="mailto:marketix29@gmail.com" className="hover:text-[#00FF00] transition-colors duration-200">abcd@gmail.com</a>
              </li>
              <li className="flex md:justify-start justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-gray-500">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <a href="tel:+923142083121" className="hover:text-[#00FF00] transition-colors duration-200">+92 312 345678</a>
              </li>
              <li className="flex md:justify-start justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-gray-500">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>Karachi, Pakistan</span>
              </li>
            </nav>
          </div>
          
          {/* Logo and Social Media */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-10 flex flex-col items-center md:items-start">
            <Link href="/">
              <img src="/logo.png" alt="MarketIX Logo" className="w-[120px] rounded-lg mb-4" />
            </Link>
            <p className="text-sm text-gray-500 mb-4 md:text-left text-center">
              Transforming ideas into digital reality with innovative solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-[#00FF00]">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-[#00FF00]">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-[#00FF00]">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className="bg-gray-950">
        <div className="container mx-auto px-5 py-4">
          <div className="flex flex-col sm:flex-row justify-center items-center">
            <p className="text-sm text-gray-500">
              © {currentYear} MarketIX — All Rights Reserved
            </p>
            <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-600 text-xs">
              <Link href="/privacy-policy" className="hover:text-gray-400 mr-4">Privacy Policy</Link>
              <Link href="/terms-of-service" className="hover:text-gray-400">Terms of Service</Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;