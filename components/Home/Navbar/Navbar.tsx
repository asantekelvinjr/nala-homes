"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 justify-center hidden lg:flex
      backdrop-blur-md transition-colors duration-300
      border-b border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.12)]
      ${scrolled ? 'bg-black/30' : 'bg-none'}`}>
      <div className='w-[80%] mx-auto py-7 flex justify-between items-center'>
        {/* Logo */}
        <div className='flex items-center gap-4'>
          <Image src="/images/nala logo.png" width={30} height={30} alt='logo'/>
          <p className='text-white text-2xl font-semibold'>Nala Homes</p>
        </div>

        {/* Links */}
        <div className='flex gap-8 font-normal'>
          <a href="#" className='text-primary text-[18px]'>Home</a>
          <a href="#" className='text-white text-[18px]'>About</a>
          <a href="#" className='text-white text-[18px]'>Properties</a>
          <a href="#" className='text-white text-[18px]'>Agents</a>
        </div>

        {/* Contact Button */}
        <div>
          <button className='bg-primary text-white px-6 py-2 rounded-full hover:brightness-110 transition'>
            Contact
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
