import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface FooterLink {
  text: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerSections: FooterSection[] = [
    {
      title: "Services",
      links: [
        { text: "Web Development", href: "/services" },
        { text: "SEO (Search Engine Optimization)", href: "/services" },
        { text: "SMM (Social Media Management)", href: "/services" },
        { text: "E-commerce Solutions", href: "/services" },
      ]
    },
    {
      title: "Company",
      links: [
        { text: "About Us", href: "/about" },
        { text: "Careers", href: "/about" },
        { text: "Blog", href: "/about" },
        { text: "Contact", href: "/contact" },
      ]
    }
  ];
  
  return (
    <footer className="text-gray-400 bg-black border-t border-primary_green/20">
      <div className="container px-5 py-16 mx-auto">
        <div className="flex flex-wrap justify-between md:text-left text-center">
          {/* Services Column */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-10">
            <h2 className="title-font font-semibold text-white tracking-wider text-sm mb-4 uppercase">
              Services
            </h2>
            <nav className="list-none space-y-3">
              {footerSections[0].links.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="hover:text-primary_green transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </nav>
          </div>
          
          {/* Company Column */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-10">
            <h2 className="title-font font-semibold text-white tracking-wider text-sm mb-4 uppercase">
              Company
            </h2>
            <nav className="list-none space-y-3">
              {footerSections[1].links.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="hover:text-primary_green transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </nav>
          </div>
          
          {/* Contact Column */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-10">
            <h2 className="title-font font-semibold text-white tracking-wider text-sm mb-4 uppercase">
              Contact Us
            </h2>
            <nav className="list-none space-y-3">
              <li className="flex md:justify-start justify-center items-center group">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-gray-500 group-hover:text-primary_green transition-colors duration-300">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <a href="mailto:bracklersofficial@gmail.com" className="hover:text-primary_green transition-all duration-300">bracklersofficial@gmail.com</a>
              </li>
              <li className="flex md:justify-start justify-center items-center group">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-gray-500 group-hover:text-primary_green transition-colors duration-300">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <a href="tel:+923142083121" className="hover:text-primary_green transition-all duration-300">+92 315 8445869</a>
              </li>
              <li className="flex md:justify-start justify-center items-center group">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-gray-500 group-hover:text-primary_green transition-colors duration-300">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span className="group-hover:text-primary_green transition-colors duration-300">Karachi, Pakistan</span>
              </li>
              
            </nav>
          </div>
          
          {/* Logo and Social Media */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-10 flex flex-col items-center md:items-start">
            <Link href="/" className="mb-4">
              <Image 
                src="/logo.png" 
                alt="Bracklers Logo" 
                width={120} 
                height={50} 
                className="w-[120px] h-auto rounded-lg"
              />
            </Link>
            <Link href="https://www.trustpilot.com/" target='_blank' className="mb-4">
              <Image 
                src="/trustpilot.png" 
                alt="Bracklers Logo" 
                width={120} 
                height={50} 
                className="w-[120px] h-auto rounded-lg"
              />
            </Link>
            <p className="text-sm text-gray-500 mb-4 md:text-left text-center">
              Transforming ideas into digital reality with innovative solutions.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-500 hover:text-primary_green transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5a5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5zm5.13.62a1.13 1.13 0 1 1-2.26 0a1.13 1.13 0 0 1 2.26 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className="bg-gray-950 border-t border-gray-800">
        <div className="container mx-auto px-5 py-4">
          <div className="flex flex-col sm:flex-row justify-center items-center">
            <p className="text-sm text-gray-500">
              © {currentYear} Bracklers — All Rights Reserved
            </p>
            <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-600 text-xs">
              <Link href="/privacy-policy" className="hover:text-primary_green mr-4 transition-colors duration-300">Privacy Policy</Link>
              <Link href="/terms-of-service" className="hover:text-primary_green transition-colors duration-300">Terms of Service</Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;