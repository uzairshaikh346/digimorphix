import React from 'react'
import { FlipWordsDemo } from './BannerText'

function HeroSection() {
  return (
    <section className="text-gray-300 body-font bg-black md:px-10">
  <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">


    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className='text-[#00ff00] mb-5 font-bold '>MarketIX – Transforming Digital Landscapes</h1>
    <FlipWordsDemo/>
      {/* <h1 className="title-font sm:text-4xl text-xl mb-4 font-bold text-gray-300">
      Unlock the Power of Digital Marketing & Web Development
      </h1> */}
      <p className="mb-8 leading-relaxed mt-5">
      At MarketIX, we specialize in SEO, Social Media Marketing (SMM), and Web Development, helping businesses thrive in the digital era. Whether you are looking to rank higher on Google, engage your audience on social media, or build a stunning website, we have got you covered.
      </p>
     
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-full w-5/6">
      <img
        className="object-cover object-center rounded"
        alt="hero"
        src="/BannerGirl.png"
      />
    </div>
  </div>
</section>

  )
}

export default HeroSection
