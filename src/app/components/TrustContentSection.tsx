import Link from "next/link";
import React from "react";

function TrustContentSection() {
  return (
    <section className="text-gray-300 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="/trustSectionImage.jpg"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#00ff00]">
            Trust Our Expertise for
            <br className="hidden lg:inline-block" />
            Unmatched Digital Solutions
          </h1>
          <p className="mb-8 leading-relaxed">
            At MarketIX, we provide innovative solutions that help businesses
            grow, optimize, and succeed in the digital world. With expertise in
            digital marketing, web development, and branding, we craft tailored
            strategies that boost your brand`s reach and impact. Whether you’re
            looking to increase visibility, drive traffic, or enhance customer
            experience, we deliver results that align with your goals.
          </p>
          <div className="flex justify-center">
                      <Link href="/contact">
            
            <button className="inline-flex text-white bg-[#00ff00] hover:bg-[#38c338] hover:rounded-2xl border-0 py-2 px-6 focus:outline-none rounded text-lg">
              Contact us!
            </button>
            </Link>
           
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustContentSection;
