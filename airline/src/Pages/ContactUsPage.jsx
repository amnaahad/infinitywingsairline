import React from 'react'
import ContactUsForm from '../components/ContactUsForm'
import Hero2 from '../components/Hero2'
import '../css/ContactForm.css'

const ContactUsPage = () => {
  return (
    <div>
      <Hero2
      pageName={'Contact US'}
      image={'src/assets/img/contact.jpeg'}
      />
      <ContactUsForm/>
    </div>
  )
}

export default ContactUsPage
