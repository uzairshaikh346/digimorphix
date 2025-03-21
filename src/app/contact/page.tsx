import React from 'react'
import { LampBanner } from '../components/lamp-banner';
import ContactForm from '../components/ContactForm';
import Image from 'next/image';

function Contact() {
  return (
    <div className='bg-black'>
      <LampBanner props="Contact us"/>
      <Image src="/contactSectionImg.jpg" height={1000} width={1000} alt='contact us'
            className='w-full md:px-[300px]'/>
      <ContactForm/>
    </div>
  )
}

export default Contact;