import React from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Webdev from '../Webdev/Webdev'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero/>
      <About/>
      <Webdev/>
    </div>
  )
}

export default Home