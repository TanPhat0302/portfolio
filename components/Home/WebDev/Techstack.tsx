import React from 'react'
import { FaLayerGroup } from 'react-icons/fa'

const Techstack = () => {
    return (
        <div>
            <div className='w-full gap-4 flex flex-col md:mt-0 mt-10'>
                <div className=" bg-white px-5 py-1 rounded-lg justify-center flex flex-row gap-2 text-black text-3xl font-semibold bg-yellow uppercase border-b-2"
                    style={{ boxShadow: "2px 5px 8px rgba(0, 0, 0, 0.3)" }}
                >
                    <FaLayerGroup /> Tech Stack
                </div>
                <div className='flex flex-col justify-center items-center gap-4'>
                <div className='flex mt-2 flex-row '>
                    <h1 className='text-white font-semibold'>Language:</h1>
                    <p className='text-white italic ml-2'> C# | Typescript | Javascript </p>
                </div>
                <div className='flex flex-row'>
                    <h1 className='text-white font-semibold'>Library:</h1>
                    <p className='text-white italic ml-2'> ReactTs | ReactJs | Fusion</p>
                </div>
                <div className='flex flex-row'>
                    <h1 className='text-white font-semibold'>Others: </h1>
                    <p className='text-white italic ml-2'>Azure | Azure CI/CD | Mssql</p>
                </div>
                </div>           
            </div>
        </div>
    )
}

export default Techstack