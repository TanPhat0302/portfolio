import { BaseInfo } from '@/Data/data'
import React from 'react'
import { FaDownload } from 'react-icons/fa'
import Image from "next/image"

const Hero = () => {
  return (
    <div id="hero" className='w-full pt-[40px] md:pt-[12vh] h-screen bg-[#0f0715] overflow-hidden relative'>
      <div className='flex justify-center flex-col w-4/5 h-full mx-auto'>
        <div className='grid grid-cols-center lg:grid-cols-2 items-center gap-12'>
          <div>
            <h1 className='text-2xl md:text-3xl lg:text-4xl mb-5 text-gray-300 font-semibold'>
              I am {BaseInfo.name}
            </h1>
            <h1 className='text-bg text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold
                 md:leading-[3rem] xl:leading-[4rem] text-white '>
              {BaseInfo.position}
            </h1>
            <p className='mt-6 text-sm md:text-base text-white text-opacity-60'>
              {BaseInfo.description}
            </p>
          <div className='flex flex-col gap-4 items-start'>
          <button className='px-6 py-1.5 md:px-8 md:py-2.5
                 text-white font-semibold text-sm md:text-lg
                 transition-all duration-200 rounded-lg mt-8 bg-[#673147]
                  hover:bg-[#bb3385] '>
                    <a href='/cv/Phat_resume.pdf' download="PhatMai_resume" className='flex items-center space-x-2'>
                      <span>Download CV</span>
                      <FaDownload />
                    </a>         
            </button>
            <button className='px-6 py-1.5 md:px-8 md:py-2.5
                 text-white font-semibold text-sm md:text-lg
                 transition-all duration-200 rounded-lg bg-[#673147]
                  hover:bg-[#bb3385] '>
                    <a href='/cv/Recommendation-letter.pdf' download="PhatMai_Recommendation_letter" className='flex items-center space-x-2'>
                      <span>Recommendation letter</span>
                      <FaDownload />
                    </a>         
            </button>
          </div>            
          </div>
          <div className='mx-auto overflow-hidden lg:block rounded-[3rem]
           border-[3.5px] border-[#58427c]-500 overflow-x-hidden'>
          <Image src={BaseInfo.profilePic} alt={BaseInfo.name} width={500} height={500}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero