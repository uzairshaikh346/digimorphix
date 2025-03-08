import React from 'react'
import { LampBanner } from '../components/lamp-banner'
import ServicesHeading from '../components/ServicesHeading'
import ServicesSection from '../components/ServicesSectionCards'

function Services() {
  return (
    <div>
      <LampBanner props="Services"/>
      <ServicesHeading/>
      <ServicesSection/>
    </div>
  )
}

export default Services
