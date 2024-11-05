import SectionHeading from '@/components/Helper/SectionHeading'
import { BaseInfo, designer, webDev } from '@/Data/data'
import Image from 'next/image'
import React from 'react'
import { FaArrowDown, FaCss3Alt, FaJs } from 'react-icons/fa'
import { GiLevelEndFlag } from 'react-icons/gi'
import { SiCsharp, SiReact, SiTypescript } from 'react-icons/si'

const About = () => {
  return (
    <div className=" pt-16 pb-16 bg-[#050709] h-[88vh]">
      {/* Section heading */}
      <SectionHeading>About Me</SectionHeading>
      {/* Grid container */}
      <div className="w-[85%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mt-20">
        {/* Web Developer Section */}
        <div className="bg-[#141321] p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <div className="flex flex-row gap-4">
            {/* Image Side */}
            <div className=' min-w-[250px] min-h-[350px] mx-auto overflow-hidden lg:block rounded-[0.5rem]
           overflow-x-hidden'>
              <Image
                src={webDev.pic} alt={webDev.name} width={900} height={500}
              />
            </div>
            {/* Content Side */}
            <div>
              <h1 className="text-3xl font-semibold text-white mb-4 border-b border-gray-600 pb-2">
                Web Development
              </h1>
              <p className="text-gray-300 leading-relaxed">
                {webDev.description}
              </p>


              {/* programming language icons */}

              <div className='flex gap-4 mt-[3rem] justify-between'>
                <div className='flex flex-col items-center'>
                  <p className='flex flex-row text-white text-xl font-semibold'><GiLevelEndFlag />1</p>
                  <p className='text-white font-semibold'>Year Experience</p>
                </div>

                <div className="flex flex-col items-end gap-2 ">
                  <p className='text-white font-semibold'>Programming Language</p>
                  <div className='flex flex-row justify-end'>
                    <FaCss3Alt className="text-white w-10 h-10 transition-transform duration-300 hover:scale-110" />
                    <SiCsharp className="text-white w-10 h-10 transition-transform duration-300 hover:scale-110" />
                    <SiReact className="text-white w-10 h-10 transition-transform duration-300 hover:scale-110" />
                    <SiTypescript className="text-white w-10 h-10 transition-transform duration-300 hover:scale-110" />
                    <FaJs className="text-white w-10 h-10 transition-transform duration-300 hover:scale-110" />
                  </div>
                  {/* <div>
                  <span className='flex flex-row items-center gap-1 text-white'><IoIosCheckbox className='text-xl text-[#66424d]'/> Frontend Development</span>
                  <span className='flex flex-row items-center gap-1 text-white'><IoIosCheckbox className='text-xl text-[#bb3385]'/> Backend Development</span>
                  <span className='flex flex-row items-center gap-1 text-white'><IoIosCheckbox className='text-xl text-[#78184a]'/> Fullstack Development</span>
                  </div> */}
                
                </div>



              </div>


             

              <div className='pt-6 flex justify-center'>
                <button className='bg-[#595168] hover:bg-[#78184a]
                 transition-all duration-200 py-1.5 px-5 rounded-2xl flex items-center gap-2 text-white'>
                  More
                  <FaArrowDown className="text-white w-5 h-5" />
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* Designer Section */}
        <div className="bg-[#141321] p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <div className="flex flex-row gap-4">
            {/* Image Side */}
            <div className=' min-w-[250px] min-h-[350px] mx-auto overflow-hidden lg:block rounded-[0.5rem]
           overflow-x-hidden'>
              <Image
                src={designer.pic} alt={designer.name} width={900} height={500}
              />
            </div>
            {/* Content Side */}
            <div>
              <h1 className="text-3xl font-semibold text-white mb-4 border-b border-gray-600 pb-2">
                3D Designer
              </h1>
              <p className="text-gray-300 leading-relaxed">
                {designer.description}
              </p>

              <div className='flex flex-col items-end mt-[2px]'>
                <p className='text-white font-semibold items-end'>3D Model Projects</p>
                <div className="flex justify-end items-center mt-[0.8rem]  space-x-[-20px]">

                  <div className="border-2 relative w-10 h-20 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-110 hover:z-10">
                    <Image src={BaseInfo.profilePic} alt="Card 1" className="w-full h-full object-cover" width={200} height={200} />
                  </div>

                  <div className="border-2  relative w-10 h-20 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-110 hover:z-10">
                    <Image src={BaseInfo.profilePic} alt="Card 2" className="w-full h-full object-cover" width={200} height={200} />
                  </div>

                  <div className="border-2 relative w-10 h-20 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-110 hover:z-10">
                    <Image src={BaseInfo.profilePic} alt="Card 3" className="w-full h-full object-cover" width={200} height={200} />
                  </div>
                </div>
              </div>

              <div className='pt-6 flex justify-center'>
                <button className='bg-[#595168] hover:bg-[#78184a]
                 transition-all duration-200 py-1.5 px-5 rounded-2xl flex items-center gap-2 text-white'>
                  More
                  <FaArrowDown className="text-white w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

        </div>


      </div>
    </div>
  )
}

export default About
