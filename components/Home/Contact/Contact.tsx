import React from 'react'
import ContactInfo from './ContactInfo'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <div id="contact" className='pt-20 pb-16 bg-[#050709]'>
          <div className='grid grid-cols-1 md:grid-cols-2 w-[85%] mx-auto items-center gap-10 mt-10'>
            {/* Contact form */}
            <div>
              <ContactForm/>
            </div>
            {/* Contact Info */}
            <div className='mx-auto'>
              <ContactInfo/>
            </div>
          </div>
    </div>

  )
}

export default Contact