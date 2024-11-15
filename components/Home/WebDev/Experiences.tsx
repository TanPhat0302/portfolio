import React from 'react'
import { FaLayerGroup } from 'react-icons/fa'
import { GoDotFill } from 'react-icons/go'

const Experiences = () => {
    return (
        <div>
            <div className='flex flex-col'>
                <div
                    className="flex flex-row rounded-lg px-5 gap-2 py-1 bg-white text-black text-3xl font-semibold bg-yellow uppercase border-b-2"
                    style={{ boxShadow: "2px 5px 8px rgba(0, 0, 0, 0.3)" }}
                >
                    <FaLayerGroup /> Indevit ab oy
                </div>
                <section className='flex justify-center pt-5'>
                    <div className='w-80'>
                        <ul className="space-y-3">
                            <li className='relative pl-6'>
                                <div className='absolute left-0 -top-0.5'>
                                    <GoDotFill className="text-white text-2xl" />
                                    <div className='absolute top-2 left-[11px] w-[2px] h-[10rem] bg-white'></div>
                                </div>
                                <div className='space-y-2 text-sm text-white'>
                                    <p>11/2023</p>
                                    <p className='text-[18px]'>Software Developer Intern</p>
                                </div>
                            </li>

                            <li className='relative pl-6'>
                                <div className='absolute left-0 -top-0.5'>
                                    <GoDotFill className="text-white text-2xl" />
                                </div>
                                <div className='space-y-2 text-sm text-white'>
                                    <p>4/2024</p>
                                    <p className='text-[18px]'>Junior Software Developer</p>
                                </div>
                            </li>
                            <li className='justify-center relative pl-6'>
                                <div className='absolute left-0 -top-0.5'>
                                    <GoDotFill className="text-white text-2xl" />
                                </div>
                                <div className='text-sm text-white'>
                                    <p>9/2024</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Experiences