import React from 'react'
import { LampBanner } from '../components/lamp-banner';
import ContactForm from '../components/ContactForm';
import Image from 'next/image';

function Contact() {
  return (
    <div>
      <LampBanner props="Contact us"/>
      <Image src="/ContactsectionImg.jpg" height={1000} width={1000} alt='about us'
            className='w-full'/>
      <ContactForm/>
    </div>
  )
}

export default Contact;