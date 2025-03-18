import React from 'react';

function Footer() {
  return (
    <div>
      <footer className="text-gray-300 body-font bg-slate-950">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap md:text-left text-center order-first">
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-300 tracking-widest text-sm mb-3">
                SERVICES
              </h2>
              <nav className="list-none mb-10">
                <li><a className="hover:text-gray-500">Web Development</a></li>
                <li><a className="hover:text-gray-500">SEO(Search engine optimization)</a></li>
                <li><a className="hover:text-gray-500">SMM(Social media management)</a></li>
                <li><a className="hover:text-gray-500">E-commerce Solutions</a></li>
              </nav>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-300 tracking-widest text-sm mb-3">
                COMPANY
              </h2>
              <nav className="list-none mb-10">
                <li><a className="hover:text-gray-500">About Us</a></li>
                <li><a className="hover:text-gray-500">Careers</a></li>
                <li><a className="hover:text-gray-500">Blog</a></li>
                <li><a className="hover:text-gray-500">Contact</a></li>
              </nav>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-300 tracking-widest text-sm mb-3">
                CONTACT US
              </h2>
              <nav className="list-none mb-10">
                <li><span className="hover:text-gray-500">Email: marketix@gmail.com</span></li>
                <li><span className="hover:text-gray-500">Phone: +92 314 2083121</span></li>
                <li><span className="hover:text-gray-500">Location: Karachi, Pakistan</span></li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-gray-950">
          <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
            <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
              © 2025 Digimorphix — All Rights Reserved
            </p>
           
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;