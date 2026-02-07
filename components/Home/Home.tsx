import React from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Properties from './Properties/Properties'
import Testimonials from './Testimonial/Testimonials'
import HowItWorks from './HowItWorks/HowItWorks'
import FAQs from './FAQs/FAQs'

const Home = () => {
  return (
    <div className='overflow-x-hidden'>
        <Hero/>
        <About/>
        <Properties/>
        <Testimonials />
        <HowItWorks />
        <FAQs />
    </div>
  )
}

export default Home