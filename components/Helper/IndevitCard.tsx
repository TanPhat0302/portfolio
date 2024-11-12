import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode;
}

const IndevitCard = ({ children }: Props) => {
  return (
    <div className='text-white bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-4 border border-white border-opacity-20 shadow-lg w-[16%] leading-relaxed pb-[2rem] text-[13.5px]'>
      {children}
    </div>
  )
}

export default IndevitCard