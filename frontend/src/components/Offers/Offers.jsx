import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'
const Offers = () => {
  return (
    <div className='offers'>
      <div className='offer-left'>
        <h2>Get 50% Off</h2>
        <p>On your first order</p>
        <button>Check Now</button>
      </div>
      <div className='offer-right'>
        <img src={exclusive_image} alt="exclusive" />
      </div>
    </div>
  )
}
export default Offers;