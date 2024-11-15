"use client";

import React, { useRef } from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Webdev from './WebDev/Webdev'
import Designer from './Designer/Designer'
import Contact from './Contact/Contact'

const Home = () => {
  return (
    <div className='overflow-hidden'>
        <Hero/>
        <About />
        <Webdev/>
        <Designer/>
        <Contact/>
    </div>
  )
}

export default Home
