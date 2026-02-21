import React from 'react'
import './Footer.css'
import logo_big from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'  
import pinterest_icon from '../Assets/pinterest_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
export const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={logo_big} alt="Logo" />
        <p>SHOPPER</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className='footer-social-icon'>
        <div className="footer-social-icon-item">
          <img src={instagram_icon} alt="Instagram" />
        </div>
        <div className="footer-social-icon-item">
          <img src={pinterest_icon} alt="Pinterest" />
        </div>
        <div className="footer-social-icon-item">
          <img src={whatsapp_icon} alt="WhatsApp  " />
        </div>
        <div className="footer-copyright">
          <hr/>
          copyright 2026. All rights reserved.
        </div>
      </div>
    </div>
  )
}
