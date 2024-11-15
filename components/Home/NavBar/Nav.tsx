"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { navLinks } from '@/constant/constant'
import { HiBars3BottomRight } from 'react-icons/hi2'
import Link from 'next/link'

type Props = {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);
  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      }
      if (window.scrollY < 90) {
        setNavBg(false);
      }
    };

    window.addEventListener("scroll", handler)

    return () => {
      window.removeEventListener("scroll", handler)
    }
  }, [])

  return (
    <div className={`fixed ${navBg ? 'bg-[#240b39]' : 'fixed'} h-[12vh] w-full z-[10] transition-all duration-200`}>
      <div className='flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[95%] mx-auto'>
        <div className='relative flex items-center'>
          <Image src="/images/Eyes.svg" alt="Logo" width={170} height={170} className='ml-0 md:scale-[0.7] ml:scale-[0.5] scale-[0.5]' />
          <Image src="/images/renegade.svg" alt="Logo" width={170} height={170} className='absolute md:ml-[8rem] md-[5rem] md:scale-[1] ml:scale-[0.8] scale-[0]' />
        </div>
        <div className='flex items-center space-x-10'>
          <div className='hidden lg:flex items-center space-x-8'>
            {navLinks.map((navlink) => {
              return (
                <button
                  key={navlink.id}
                  className='nav__link'>
                  <Link href={navlink.url}>
                    {navlink.label}
                  </Link>
                </button>
              );
            })}
          </div>
          <div className='flex items-center space-x-4'>
            <Link href="#contact">
              <button className='md:px-10 md:py-3 px-8 py-3 text-pink-900 font-semibold sm:text-base text-sm bg-white hover:bg-gray-300 transition-all duration-200 rounded-lg'>
                Contact me
              </button>
            </Link>
            <HiBars3BottomRight onClick={openNav} className='w-8 h-8 cursor-pointer text-white lg:hidden' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav
