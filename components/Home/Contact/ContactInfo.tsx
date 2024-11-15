import { ContactData } from '@/Data/data'
import React from 'react'
import { FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { MdOutlineEmail } from 'react-icons/md'
import { SiSketchfab } from 'react-icons/si'

const ContactInfo = () => {
  return (
    <div className='flex flex-col md:flex-row gap-5 md:gap-10'>
      <div className='flex flex-col gap-5'>
        {/* Phone Section */}
        <div className='flex items-center space-x-4 md:space-x-8'>
          <div className='w-12 h-12 md:h-16 md:w-16 rounded-full bg-gradient-to-r from-emerald-500 flex items-center justify-center flex-col'>
            <FaPhone className='w-4 h-4 md:w-7 md:h-7 text-white' />
          </div>
          <div>
            <h1 className='text-white text-[0.98rem] md:text-lg font-bold'>Phone</h1>
            <h1 className='text-base text-white text-opacity-70'>
              {ContactData.phone}
            </h1>
          </div>
        </div>

        {/* Email Section */}
        <div className='flex items-center space-x-4 md:space-x-8'>
          <div className='w-12 h-12 md:h-16 md:w-16 rounded-full bg-gradient-to-r from-emerald-500 flex items-center justify-center flex-col'>
            <MdOutlineEmail className='w-4 h-4 md:w-7 md:h-7 text-white' />
          </div>
          <div>
            <h1 className='text-white text-[0.98rem] md:text-lg font-bold'>Email</h1>
            <h1 className='text-base text-white text-opacity-70'>
              {ContactData.email}
            </h1>
          </div>
        </div>

        {/* Address Section */}
        <div className='flex items-center space-x-4 md:space-x-8'>
          <div className='w-12 h-12 md:h-16 md:w-16 rounded-full bg-gradient-to-r from-emerald-500 flex items-center justify-center flex-col'>
            <FaLocationDot className='w-4 h-4 md:w-7 md:h-7 text-white' />
          </div>
          <div>
            <h1 className='text-white text-[0.98rem] md:text-lg font-bold'>Address</h1>
            <h1 className='text-base text-white text-opacity-70'>
              {ContactData.address}
            </h1>
          </div>
        </div>
      </div>

      {/* Column 2 */}
      <div className='flex flex-col gap-5'>
        {/* LinkedIn Section */}
        <div className='flex items-center space-x-4 md:space-x-8'>
          <div className='w-12 h-12 md:h-16 md:w-16 rounded-full bg-gradient-to-r from-emerald-500 flex items-center justify-center flex-col'>
            <FaLinkedin className='w-4 h-4 md:w-7 md:h-7 text-white' />
          </div>
          <div>
            <h1 className='text-white text-[0.98rem] md:text-lg font-bold'>LinkedIn</h1>
            <a
              href={ContactData.linkedin.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-white text-opacity-70"
            >
              {ContactData.linkedin.name}
            </a>
          </div>
        </div>

        {/* GitHub Section */}
        <div className='flex items-center space-x-4 md:space-x-8'>
          <div className='w-12 h-12 md:h-16 md:w-16 rounded-full bg-gradient-to-r from-emerald-500 flex items-center justify-center flex-col'>
            <FaGithub className='w-4 h-4 md:w-7 md:h-7 text-white' />
          </div>
          <div>
            <h1 className='text-white text-[0.98rem] md:text-lg font-bold'>GitHub</h1>
            <a
              href={ContactData.github.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-white text-opacity-70"
            >
              {ContactData.github.name}
            </a>
          </div>
        </div>

        {/* Sketchfab Section */}
        <div className='flex items-center space-x-4 md:space-x-8'>
          <div className='w-12 h-12 md:h-16 md:w-16 rounded-full bg-gradient-to-r from-emerald-500 flex items-center justify-center flex-col'>
            <SiSketchfab className='w-4 h-4 md:w-7 md:h-7 text-white' />
          </div>
          <div>
            <h1 className='text-white text-[0.98rem] md:text-lg font-bold'>Sketchfab</h1>
            <a
              href={ContactData.sketchfab.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-white text-opacity-70"
            >
              {ContactData.sketchfab.name}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo
