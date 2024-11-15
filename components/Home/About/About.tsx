import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import AboutDev from './AboutDev'
import AboutDesigner from './AboutDesigner'


const About = () => {
  return (
    <div id="about" className="pt-40 pb-16 bg-[#050709] h-[88vh] ">
      <SectionHeading>About Me</SectionHeading>
      <div className="w-[86%] mx-auto flex flex-col md:flex-row gap-10 items-start mt-20 ">
        <AboutDev />
        <AboutDesigner />
      </div>
    </div>
  )
}

export default About
