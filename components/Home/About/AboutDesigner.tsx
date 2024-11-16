import { designer, model } from '@/Data/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowDown } from 'react-icons/fa'

const AboutDesigner = () => {
  return (
    <div>
        <div className="bg-[#141321] p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <div className="flex flex-row gap-4">
            <div className='mx-auto overflow-hidden lg:block rounded-[0.5rem] overflow-x-hidden'>
              <Image src={designer.pic} alt={designer.name} width={900} height={500} 
              className='md:min-w-[250px] md:min-h-[350px] min-w-[100px] min-h-[210px] object-cover'/>
            </div>
            <div>
              <h1 className="md:text-3xl text-xl font-semibold text-white mb-4 border-b border-gray-600 pb-2">
                3D Designer
              </h1>
              <p className="text-gray-300 md:text-[16px] text-[10px] leading-relaxed">{designer.description}</p>

              <div className='flex flex-col items-end mt-[2px]'>
                <p className='text-white md:text-[16px] text-[10px] font-semibold'>3D Model Projects</p>
                <div className="flex justify-end items-center mt-[0.8rem] space-x-[-20px]">
                  <div className="border-2 relative w-10 h-20 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-110 hover:z-10">
                    <Image src={model.proj[0].img} alt="Card 1" className="w-full h-full object-cover" width={200} height={200} />
                  </div>
                  <div className="border-2 relative w-10 h-20 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-110 hover:z-10">
                    <Image src={model.proj[1].img} alt="Card 1" className="w-full h-full object-cover" width={200} height={200} />
                  </div>
                  <div className="border-2 relative w-10 h-20 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-110 hover:z-10">
                    <Image src={model.proj[2].img} alt="Card 1" className="w-full h-full object-cover" width={200} height={200} />
                  </div>
                  <div className="border-2 relative w-10 h-20 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-110 hover:z-10">
                    <Image src={model.proj[3].img} alt="Card 1" className="w-full h-full object-cover" width={200} height={200} />
                  </div>
                 
                </div>
              </div>

              <div className='pt-6 flex justify-center'>
                <Link href='#designer'>
                <button className='bg-[#595168] hover:bg-[#78184a] transition-all duration-200 py-1.5 px-5 rounded-2xl flex items-center gap-2 text-white'>
                  More
                  <FaArrowDown className="text-white w-5 h-5" />
                </button>           
                </Link>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default AboutDesigner