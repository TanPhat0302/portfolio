import React from 'react'
import Image from 'next/image'
import { BaseInfo, model } from '@/Data/data'
import ModelCard from '../../Helper/ModelCard'
import { SiSketchfab } from 'react-icons/si'

const DesginerCard = () => {
    return (
        <div className='flex  flex-col items-center justify-between mb-[1rem] w-[35%] h-full '>
            <p className='flex flex-row gap-2 justify-center text-white text-xl font-semibold items-center border-b border-gray-600 px-20 pb-2'>
                <SiSketchfab className='text-3xl' /> 3D Project Model</p>
            <div className='flex  flex-col mt-[1rem] items-center'>
                <div className="flex justify-center items-center space-x-1 border-[#dcdcdc] border-t-4 border-b-4">
                    <div className='w-40 h-56 pl-[20px] sm:w-10 sm:h-64 md:w-[110px] md:h-[250px]
                                 border bg-[#dcdcdc] border-[#dcdcdc] skew-x-12 '>

                    </div>
                    {model.proj.map((project, index) => (
                        <a key={index} href={project.link} target='_blank'>
                            <ModelCard >\
                                <Image
                                    src={project.img}
                                    alt={`Card ${index + 1}`}
                                    className="w-full h-full object-cover transform scale-150"
                                    width={400}
                                    height={400}
                                />
                            </ModelCard>
                        </a>
                    ))}
                    <div className='w-40 h-56 sm:w-48 sm:h-64 md:w-[110px] md:h-[250px] overflow-hidden border bg-[#dcdcdc] border-[#dcdcdc]  transform skew-x-12 '></div>
                </div>
            </div>
            <div className='flex flex-col justify-start items-center mt-[2rem]'>
                <div className='mx-[100] p-4 pl-12 pr-12 bg-[#595168]  clip-corners'>
                    <div className='overflow-hidden rounded-full'>
                        <Image
                            src={BaseInfo.profilePic}
                            alt={BaseInfo.name}
                            width={60}
                            height={60}
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
                <p className='text-white text-xl font-semibold mt-2'>Featured Artist</p>
            </div>
        </div>
    )
}

export default DesginerCard