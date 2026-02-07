import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='navbar fixed top-0 left-0 w-full z-50 justify-center hidden lg:flex backdrop-blur-xs overflow-x-hidden
          border border-white/30 dark:border-white/10
          shadow-[0_8px_30px_rgb(0,0,0,0.12)]'>
        <div className='w-[80%] mx-auto py-7 flex justify-between items-center
          '>
            <div className='flex items-center gap-4'>
               <Image src="/images/nala logo.png" width={30} height={30} alt='logo'/>
               <p className='text-white text-2xl'>Nala Homes</p>
            </div>

            <div className='flex gap-8 font-normal'>
                <a href="" className='text-primary text-[18px] '>Home</a>
                <a href="" className='text-white text-[18px]'>About</a>
                <a href="" className='text-white text-[18px]'>Properties</a>
                <a href="" className='text-white text-[18px]'>Agents</a>


            </div>

            <div>
               <button className='bg-primary text-white px-6 py-2 rounded-full'>Contact</button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar