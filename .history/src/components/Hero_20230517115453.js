import React from 'react'
import WomanImg from '../img/woman_hero.png'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className='bg-pink-200 h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24'>
      <div className='container mx-auto flex justify-around h-full '>
        <div className='flex'>
          <div>
            <div>New Trend </div>
          </div>
        </div>
        <div>
          <img src={WomanImg} alt='' />
        </div>
      </div>
    </section>
  )
}

export default Hero
