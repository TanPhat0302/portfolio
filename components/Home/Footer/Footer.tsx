import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='pt-10 pb-16 bg-[#0f0715]'>
        <div className='flex justify-center relative'>
        <div className='flex flex-row'>
          <Image src="/images/Eyes.svg" alt="Logo" width={170} height={170} className='ml-0 md:scale-[0.7] ml:scale-[0.5] ' />
          <Image src="/images/renegade.svg" alt="Logo" width={170} height={170} className='absolute ml-[8rem] md-[5rem] md:scale-[1] ml:scale-[0.8]' />
        </div>
        </div>
    </div>
  )
}

export default Footer