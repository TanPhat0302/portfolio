import React from 'react'
import SectionHeading from '../../Helper/SectionHeading'
import IndevitCard from '../../Helper/IndevitCard'
import { indevit } from '@/Data/data'
import Experiences from './Experiences'
import Techstack from './Techstack'
import Contact from './Contact'

const Webdev = () => {
    return (
        <div id="webdev" className='pt-36 pb-10 bg-[#050709] m-h-[88vh]'>
            <SectionHeading>Web development</SectionHeading>
            <div className='w-[88%] h-[full] mx-auto bg-[#141321] mt-20  relative rounded-lg'>
                <div className='flex flex-col justify-center items-center'>
                    <div className='absolute -left-[13rem] '>
                        <p className=' text-gray-300 md:text-[5.5rem] font-semibold uppercase transform rotate-0 md:-rotate-90'>
                            Experience</p>
                    </div>
                    <div className='flex flex-col w-[79%] gap-10'>
                        <div className='flex md:flex-row flex-col pt-4 md:gap-[12rem] gap-2'>
                            <p className='absolute -ml-[3%] text-white bg-[#B2A6BE] bg-yellow md:w-8 md:h-60 mb-[25%]'></p>
                            <Experiences />
                            <Techstack />
                            <Contact />
                        </div>
                        <div className="gap-5 mb-4 mx-auto flex md:flex-row flex-col">
                            <div>
                                <p className=' text-gray-300 md:text-[0rem] border-b-2 border-gray-300 text-[4rem] font-semibold uppercase'>
                                    Tasks
                                </p>
                            </div>
                            {indevit.tasks.map((task, index) => (
                                <IndevitCard key={index}>
                                    {task.description}
                                </IndevitCard>
                            ))}
                            <p className='text-white bg-[#B2A6BE] bg-yellow w-8 h-78'></p>
                        </div>
                    </div>
                    <div className='absolute -right-[12rem] '>
                        <div className='flex items-center transform rotate-90 gap-2'>
                            <span className='text-gray-300 md:text-[5.5rem] font-semibold uppercase'>Info</span>
                            <p className='text-[#B2A6BE] md:text-[3rem] font-semibold uppercase'>|</p>
                            <span className='text-gray-300 md:text-[5.5rem] font-semibold uppercase'>Tasks</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Webdev
