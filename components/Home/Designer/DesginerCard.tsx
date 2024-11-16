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
            <div className='flex flex-col mt-[1rem] pl-[10rem] md:pl-0'>
                <div className="flex justify-center items-center space-x-1 border-[#dcdcdc] border-t-4 border-b-4">
                    <div className='w-20 h-28 pl-[20px] md:w-[110px] md:h-[250px]
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
                    <div className='w-20 h-28 md:w-[110px] md:h-[250px] overflow-hidden border bg-[#dcdcdc] border-[#dcdcdc]  transform skew-x-12 '></div>
                </div>
            </div>
            <div className='flex flex-row md:flex-col md:pl-0 pl-[8rem] justify-start gap-2 items-center mt-[2rem]'>
                <div className='mx-[100] p-4 pl-6 pr-6 md:pl-12 md:pr-12 bg-[#595168]  clip-corners'>
                    <div className='overflow-hidden rounded-full'>
                        <Image
                            src={BaseInfo.profilePic}
                            alt={BaseInfo.name}
                            width={60}
                            height={60}
                            className="object-cover md:w-full md:h-full min-w-[3rem] min-h-[3rem]"
                        />
                    </div>
                </div>
                <p className='text-white md:mt-0 mt-4 text-[20px] md:text-xl font-semibold'>Featured Artist</p>
            </div>
        </div>
    )
}

export default DesginerCard