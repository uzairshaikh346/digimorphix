import React from 'react'
import { LampBanner } from '../components/lamp-banner';
import ContactForm from '../components/ContactForm';

function Contact() {
  return (
    <div>
      <LampBanner props="Contact us"/>
      <ContactForm/>
    </div>
  )
}

export default Contact;