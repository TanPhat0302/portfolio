import React from 'react'
import { FaLayerGroup } from 'react-icons/fa'
import { IoPerson } from 'react-icons/io5'


const Contact = () => {
    return (
        <div>
            <div className='flex flex-col gap-4 md:mt-0 mt-10'>
            <div className=" bg-white rounded-lg justify-end px-5 py-1 flex flex-row gap-2 text-black text-3xl font-semibold bg-yellow uppercase border-b-2"
                        style={{ boxShadow: "2px 5px 8px rgba(0, 0, 0, 0.3)" }}
                    >
                        <FaLayerGroup/> contact
                    </div>
            <div className='flex flex-row justify-between gap-2'>
            <div className='flex flex-col gap-2 items-end '>
                    <p className='text-white '>Jonathan Svahn</p>
                    <p className='text-white lowercase'>jonathan.svahn@indevit.fi</p>
                    <p className='text-white '>+358 509182903</p>
                </div>

                <div className='flex flex-col items-center gap-1'>
                    <IoPerson className='text-[5rem] text-black bg-gray-200 p-2 rounded-[8px]' />
                    <p className='text-white text-[14px] font-semibold uppercase' >supervisor</p>
                </div>
            </div>

               
              
            </div>
        </div>
    )
}

export default Contact