import React from 'react'
import SectionHeading from '../../Helper/SectionHeading'
import DesginerCard from './DesginerCard'
import Showcase from './Showcase'

const Designer = () => {

    return (
        <div id="designer" className='pt-40 pb-10 bg-[#050709] h-[88vh]'>
            <SectionHeading>3D design</SectionHeading>
            <div className='w-[80%] mx-auto flex flex-col mt-[3rem] rounded-lg overflow-hidden '>
                <div className='flex flex-row h-full bg-[#141321] gap-2 p-8' >
                    <DesginerCard/>
                    <div className='relative flex-1 bg-[#141321] pl-[4%] border-gray-600 mx-auto border-l-2'>
                        <Showcase/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Designer
