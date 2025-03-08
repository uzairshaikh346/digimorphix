import React from 'react'
import { LampBanner } from '../components/lamp-banner'
import AboutSection from '../components/aboutsection'
import AboutSectionCards from '../components/AboutSectionCards'

function page() {
  return (
    <div>
      <LampBanner props="About Us"/>
      <AboutSection/>
      <AboutSectionCards/>
    </div>
  )
}

export default page
