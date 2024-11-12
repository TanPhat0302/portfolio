"use client";

import React, { useRef } from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Webdev from './WebDev/Webdev'
import Designer from './Designer/Designer'
import Contact from './Contact/Contact'

const Home = () => {
  const webdevRef = useRef<HTMLDivElement>(null)
  const designerRef = useRef<HTMLDivElement>(null)
  const scrollToWebdev = () => webdevRef.current?.scrollIntoView({ behavior: 'smooth' })
  const scrollToDesigner = () => designerRef.current?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div className='overflow-hidden'>
        <Hero/>
        <About scrollToWebdev={scrollToWebdev} scrollToDesigner={scrollToDesigner} />
        <Webdev/>
        <Designer/>
        <Contact/>
    </div>
  )
}

export default Home
