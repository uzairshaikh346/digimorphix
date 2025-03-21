import React from 'react'
import Image from 'next/image'
import { LampBanner } from '../components/lamp-banner'
import AboutSection from '../components/aboutsection'
import AboutSectionCards from '../components/AboutSectionCards'

function page() {
  return (
    <div className='bg-black'>

      <LampBanner props="About Us"/>
      <AboutSection/>
      <Image src="/aboutsectionImg.jpg" height={1000} width={1000} alt='about us'
     className='w-full md:px-[300px]'/>

      <AboutSectionCards/>
    </div>
  )
}

export default page
