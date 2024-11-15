import { webDev } from '@/Data/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowDown, FaCss3Alt, FaJs } from 'react-icons/fa'
import { GiLevelEndFlag } from 'react-icons/gi'
import { SiCsharp, SiReact, SiTypescript } from 'react-icons/si'


const AboutDev = () => {
  return (
    <div>
         <div className="bg-[#141321] p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <div className="flex flex-row gap-4">
            <div className='mx-auto overflow-hidden lg:block rounded-[0.5rem] overflow-x-hidden'>
              <Image src={webDev.pic} alt={webDev.name} width={900} height={500} 
              className='md:min-w-[250px] md:min-h-[350px] min-w-[100px] min-h-[210px] object-cover'/>
            </div>
            <div className=''>
              <h1 className="md:text-3xl text-xl font-semibold text-white mb-4 border-b border-gray-600 pb-2">
                Web Development
              </h1>
              <p className="text-gray-300 md:text-[16px] text-[10px] leading-relaxed">{webDev.description}</p>

              <div className='flex gap-4 mt-[3rem] justify-between'>
                <div className='flex flex-col items-center'>
                  <p className='flex flex-row text-white text-xl font-semibold'><GiLevelEndFlag />1</p>
                  <p className='text-white md:text-[16px] text-[10px] font-semibold'>Year Experience</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <p className='text-white md:text-[16px] text-[10px] font-semibold'>Programming Language</p>
                  <div className='flex flex-row justify-end'>
                    <FaCss3Alt className="text-white md:w-10 md:h-10 w-5 h-5 transition-transform duration-300 hover:scale-110" />
                    <SiCsharp className="text-white md:w-10 md:h-10 w-5 h-5 transition-transform duration-300 hover:scale-110" />
                    <SiReact className="text-white md:w-10 md:h-10 w-5 h-5 transition-transform duration-300 hover:scale-110" />
                    <SiTypescript className="text-white md:w-10 md:h-10 w-5 h-5 transition-transform duration-300 hover:scale-110" />
                    <FaJs className="text-white md:w-10 md:h-10 w-5 h-5 transition-transform duration-300 hover:scale-110" />
                  </div>
                </div>
              </div>

              <div className='pt-6 flex justify-center'>
              <Link href='#webdev'>
              <button className='bg-[#595168] hover:bg-[#78184a] transition-all duration-200 py-1.5 px-5 rounded-2xl flex items-center gap-2 text-white'>
                  More
                  <FaArrowDown className="text-white w-5 h-5" />
                </button>
              </Link>
               
              </div>

            </div>
          </div>
        </div>
    </div>
  )
}

export default AboutDev