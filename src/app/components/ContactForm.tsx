import React from "react";

function ContactForm() {
  return (
    <section className="text-gray-400 body-font relative bg-black">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap lg:flex-nowrap justify-between">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0">
            <h2 className="text-3xl font-medium text-[#00ff00] mb-4">
              Get in Touch
            </h2>
            <p className="leading-relaxed text-lg text-gray-300">
              Have a question or want to discuss a project? We d love to hear from you. Reach out to us via email, phone, or visit our office.
            </p>
            <div className="mt-6">
              <p className="text-lg font-semibold text-gray-200">📍 Address:</p>
              <p className="text-gray-300">North Karahi,Karachi</p>
            </div>
            <div className="mt-4">
              <p className="text-lg font-semibold text-gray-200">📧 Email:</p>
              <a href="mailto:example@email.com" className="text-gray-300">
              digimorphix@gmail.com
              </a>
            </div>
            <div className="mt-4">
              <p className="text-lg font-semibold text-gray-200">📞 Phone:</p>
              <p className="text-gray-300">+92 314 2083121</p>
            </div>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-[#00ff00]">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-[#00ff00]">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-[#00ff00]">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                </svg>
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 w-full bg-gray-900 p-8 rounded-lg">
            <h2 className="text-2xl font-medium text-[#00ff00] mb-4">Contact Us</h2>
            <p className="leading-relaxed mb-6 text-gray-300">
              Fill out the form below and we will get back to you shortly.
            </p>
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-200">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-800 rounded border border-[#00ff00]  text-base outline-none text-gray-400 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-200">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-800 rounded border border-[#00ff00]  text-base outline-none text-gray-400 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-sm text-gray-200">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-800 rounded border border-[#00ff00]  text-base outline-none text-gray-400 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="w-full text-white bg-gray-600 border-0 py-2 px-6 focus:outline-none hover:bg-[#00ff00] rounded text-lg">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
