import React from 'react'
import { LampBanner } from '../components/lamp-banner'
import Graphic from '../components/graphic'
import Webdevelopement from '../components/Webdevelopement'

function page() {
  return (
    <div>
            <LampBanner props="Our Work"/>
            <Webdevelopement/>
            <Graphic/>
      
    </div>
  )
}

export default page
