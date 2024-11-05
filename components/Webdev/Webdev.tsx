import React from 'react'
import Image from 'next/image'
import SectionHeading from '../Helper/SectionHeading'
import { BaseInfo } from '@/Data/data'
import ModelCard from '../Helper/ModelCard'

const Webdev = () => {
    return (
        <div className='pt-10 pb-10 bg-[#050709] h-[88vh]'>
            <SectionHeading>3D design</SectionHeading>
            <div className='w-[85%] mx-auto flex flex-col mt-[3rem] rounded-lg overflow-hidden'>
                <div className='flex flex-row h-full bg-[#141321]'>
                    <div className='flex flex-col items-center justify-between mb-[1rem] px-[3rem] w-[35%] h-full'>
                        {/* <h1 className='text-white text-3xl mt-[2rem] mb-[2rem] border-b border-gray-600 pb-2 w-full text-center'>
                            Lorem Ipsum
                        </h1>

                        <p className='text-white text-xl '>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>

                        <div className='flex flex-col items-center'>
                            <p className='text-white text-xl'>Main tool</p>
                            <Image src='/images/blender_logo.svg' alt='blender' width={150} height={100} />
                        </div> */}

                        <p className='text-white text-xl font-semibold items-center mt-[1rem] border-b border-gray-600 px-20 pb-2'>Project Model</p>
                        <div className='flex flex-col mt-[1rem] justify-start items-start'>
                            <div className="flex justify-end items-center bg-[#] space-x-1.5 border-[#dcdcdc] border-t-4 border-b-4">                               
                                <div className='w-40 h-56 
      sm:w-48 sm:h-64 md:w-[110px] md:h-[250px]
      overflow-hidden border bg-[#dcdcdc]
        border-[#dcdcdc] skew-x-12 '></div>
                                <ModelCard>
                                    <Image
                                        src={BaseInfo.profilePic}
                                        alt="Card 1"
                                        className="w-full h-full object-cover transform scale-150"
                                        width={400}
                                        height={400}
                                    />
                                </ModelCard>
                                <ModelCard>
                                    <Image
                                        src={BaseInfo.profilePic}
                                        alt="Card 1"
                                        className="w-full h-full object-cover transform scale-150"
                                        width={400}
                                        height={400}
                                    />
                                </ModelCard>
                                <ModelCard>
                                    <Image
                                        src={BaseInfo.profilePic}
                                        alt="Card 1"
                                        className="w-full h-full object-cover transform scale-150"
                                        width={400}
                                        height={400}
                                    />
                                </ModelCard>
                                <ModelCard>
                                    <Image
                                        src={BaseInfo.profilePic}
                                        alt="Card 1"
                                        className="w-full h-full object-cover transform scale-150"
                                        width={400}
                                        height={400}
                                    />
                                </ModelCard>
                                <div className='w-40 h-56 
      sm:w-48 sm:h-64 md:w-[110px] md:h-[250px]
      overflow-hidden border bg-[#dcdcdc]
        border-[#dcdcdc]  transform skew-x-12 '></div>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-[65%] h-[50%]">
                        <video
                            src="/videos/test.mkv"
                            autoPlay
                            loop
                            muted
                            preload="auto"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute top-0 left-0 w-full h-full flex justify-center">
                            <div className="relative w-2/5 h-12 bg-black bg-opacity-50 clip-trapezium flex items-center justify-center">
                                <p className="text-white text-2xl font-bold ">
                                    Showcase
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Webdev
