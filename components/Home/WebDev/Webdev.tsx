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
            <div className='w-[80%] mx-auto bg-[#0f0715] mt-20  relative rounded-lg'>
                <div className='w-[10%] absolute bottom-[3rem]'>
                    <p className='text-gray-300 text-[5.5rem] font-semibold uppercase transform -rotate-90'>Experience</p>
                </div>
                <div className='flex flex-row gap-2'>
                    <p className='text-white bg-[#614051]  ml-[9%] bg-yellow w-10 h-60 mb-[25%]'></p>
                    <div className='flex flex-row mx-auto pt-4 gap-[5rem]'>
                        <Experiences />
                        <Techstack />
                        <Contact/>
                    </div>
                    <div className='absolute right-0 bottom-0 mr-[10%] w-10 h-[55%] bg-[#614051]'></div>
                    <div className="absolute left-[13%] gap-2 bottom-6 flex flex-row">
                        {indevit.tasks.map((task, index) => (
                            <IndevitCard key={index}>
                                {task.description}
                            </IndevitCard>
                        ))}
                    </div>
                    <div className='absolute w-[35%] -right-[12%] bottom-0'>
                        <p className='text-gray-300 text-[5.5rem] font-semibold uppercase transform rotate-90'>Tasks</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Webdev
