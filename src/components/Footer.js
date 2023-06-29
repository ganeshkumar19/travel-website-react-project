import './FooterStyles.css'
import {FaBehanceSquare, FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa"

import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='top'>
        <div>
          <h1>Tourista</h1>
          <p>Choose your favourite destination</p>
        </div>
        <div>
        <a href='/'><span><FaFacebookSquare/></span></a>
        <a href='/'><span><FaInstagramSquare/></span></a>
        <a href='/'><span><FaBehanceSquare/></span></a>
        <a href='/'><span><FaTwitterSquare/></span></a>
        </div>
      </div>
      <div className='bottom'>
        <div>
        <h4>Favourite destinations</h4>
        <a href='/'>Rome</a>
        <a href='/'>Greece</a>
        <a href='/'>India</a>
        <a href='/'>England</a>
        </div>
        <div>
        <h4>Customer Service</h4>
        <p>We are available from monday to saturday (9AM - 6PM)</p>
        </div>
        <div>
        <h4>Secure Payment</h4>
        <p>Your payment information is processed securely.</p>
        </div>
        <div>
        <h4>Contact Us</h4>
        <p>Just send us an e-mail at contact@Tourista.com for further queries</p>
        </div>
      </div>
    </div>
  )
}

export default Footer