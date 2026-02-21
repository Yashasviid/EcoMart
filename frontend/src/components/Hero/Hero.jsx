import React from 'react'
import './Hero.css'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-left'>
        <h2>NEW ARRIVALS ONLY</h2>

        <div>
          <div className='hand-hand-icon'>
            <p>New collections</p>
          <p>for everyone ! </p>
          </div>
        </div>

        <div className='hero-latest-btn'>
          <div>Latest collection</div>
          <img src={arrow_icon} alt="arrow" />
        </div>
      </div>

      <div className='hero-right'>
        <img src={hero_image} alt="hero" />
      </div>
    </div>
  )
}

export default Hero