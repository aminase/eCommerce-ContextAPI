import React from 'react'
import WomanImg from '../img/woman_hero.png'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className='bg-pink-200 h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24'>
      <div className='container mx-auto flex justify-around h-full '>
        <div className='flex flex-col justify-center'>
          <div>
            <div>New Trend </div>
          </div>
          <h1 className='text-[70px] leading-[1.1] font-light mb-4'>
            AUTUMN SALE STYLISH <br /> <span className='font-semibold '>WOMEN </span>
          </h1>
        </div>
        <div className='hidden lg:block'>
          <img src={WomanImg} alt='' />
        </div>
      </div>
    </section>
  )
}

export default Hero
