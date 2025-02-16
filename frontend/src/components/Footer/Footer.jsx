import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img className='img' src={assets.logo} alt="" />
            <p className='para'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio dolores vitae ea, nihil officia omnis sint deserunt animi laboriosam ullam!</p>
            <div className="footer-social-icons">
                <img className='fa' src={assets.facebook_icon} alt="" />
                <img className='li' src={assets.linkedin_icon} alt="" />
                <img className='tw' src={assets.twitter_icon} alt="" />

            </div>
        </div>
        <div className="content-content-center">
            <h2>COMPANY</h2>
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91 98564 76230</li>
                <li>contact@creamcrust.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>Copyright 2025 © CreamCrust.com - All Right Reserved</p>
    </div>
  )
}

export default Footer
