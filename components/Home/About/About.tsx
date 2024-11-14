import SectionHeading from '@/components/Helper/SectionHeading'
import { BaseInfo, designer, model, webDev } from '@/Data/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowDown, FaCss3Alt, FaJs } from 'react-icons/fa'
import { GiLevelEndFlag } from 'react-icons/gi'
import { SiCsharp, SiReact, SiTypescript } from 'react-icons/si'


const About = () => {
  return (
    <div id="about" className="pt-40 pb-16 bg-[#050709] h-[88vh] ">
      <SectionHeading>About Me</SectionHeading>
      <div className="w-[85%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mt-20 ">
        <div className="bg-[#141321] p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <div className="flex flex-row gap-4">
            <div className='min-w-[250px] min-h-[350px] mx-auto overflow-hidden lg:block rounded-[0.5rem] overflow-x-hidden'>
              <Image src={webDev.pic} alt={webDev.name} width={900} height={500} />
            </div>
            <div>
              <h1 className="text-3xl font-semibold text-white mb-4 border-b border-gray-600 pb-2">
                Web Development
              </h1>
              <p className="text-gray-300 leading-relaxed">{webDev.description}</p>

              <div className='flex gap-4 mt-[3rem] justify-between'>
                <div className='flex flex-col items-center'>
                  <p className='flex flex-row text-white text-xl font-semibold'><GiLevelEndFlag />1</p>
                  <p className='text-white font-semibold'>Year Experience</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <p className='text-white font-semibold'>Programming Language</p>
                  <div className='flex flex-row justify-end'>
                    <FaCss3Alt className="text-white w-10 h-10 transition-transform duration-300 hover:scale-110" />
                    <SiCsharp className="text-white w-10 h-10 transition-transform duration-300 hover:scale-110" />
                    <SiReact className="text-white w-10 h-10 transition-transform duration-300 hover:scale-110" />
                    <SiTypescript className="text-white w-10 h-10 transition-transform duration-300 hover:scale-110" />
                    <FaJs className="text-white w-10 h-10 transition-transform duration-300 hover:scale-110" />
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

        {/* Designer Section */}
        <div className="bg-[#141321] p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <div className="flex flex-row gap-4">
            <div className='min-w-[250px] min-h-[350px] mx-auto overflow-hidden lg:block rounded-[0.5rem] overflow-x-hidden'>
              <Image src={designer.pic} alt={designer.name} width={900} height={500} />
            </div>
            <div>
              <h1 className="text-3xl font-semibold text-white mb-4 border-b border-gray-600 pb-2">
                3D Designer
              </h1>
              <p className="text-gray-300 leading-relaxed">{designer.description}</p>

              <div className='flex flex-col items-end mt-[2px]'>
                <p className='text-white font-semibold items-end'>3D Model Projects</p>
                <div className="flex justify-end items-center mt-[0.8rem] space-x-[-20px]">
                  <div className="border-2 relative w-10 h-20 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-110 hover:z-10">
                    <Image src={model.proj[0].img} alt="Card 1" className="w-full h-full object-cover" width={200} height={200} />
                  </div>
                  <div className="border-2 relative w-10 h-20 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-110 hover:z-10">
                    <Image src={model.proj[1].img} alt="Card 1" className="w-full h-full object-cover" width={200} height={200} />
                  </div>
                  <div className="border-2 relative w-10 h-20 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-110 hover:z-10">
                    <Image src={model.proj[2].img} alt="Card 1" className="w-full h-full object-cover" width={200} height={200} />
                  </div>
                  <div className="border-2 relative w-10 h-20 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-110 hover:z-10">
                    <Image src={model.proj[3].img} alt="Card 1" className="w-full h-full object-cover" width={200} height={200} />
                  </div>
                 
                </div>
              </div>

              <div className='pt-6 flex justify-center'>
                <Link href='#designer'>
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
    </div>
  )
}

export default About
