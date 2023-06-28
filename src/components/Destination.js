import React from 'react'
import destinationimg1 from '../assets/hugues-de-buyer-mimeure-oDcbtrD3Rrc-unsplash.jpg' 
import destinationimg2 from '../assets/ryan-geller-Fc_y1til6Zw-unsplash.jpg' 
import destinationimg3 from '../assets/chaitanya-rayampally-XhYP3T-telg-unsplash.jpg' 
import destinationimg4 from '../assets/mugi-jo-RwuxX4ARaWM-unsplash.jpg' 
import './DestinationStyles.css'
import DestinationData from './DestinationData'

const Destination = () => {
  return (
    <div className='destination'>
      <h1>Popular Destinations</h1>
      <p>Every journey begins with a single step.</p>
      <DestinationData heading = "Ooty (Udhagamandalam)" text = 'Ooty, officially known as Udhagamandalam, is a captivating hill station located in the Nilgiri Hills of Tamil Nadu, India. It is a popular tourist destination known for its mesmerizing natural beauty, pleasant climate, and colonial charm. Nestled at an elevation of around 2,240 meters, Ooty offers breathtaking views of rolling hills, dense forests, and sprawling tea plantations.'
      img1 = {destinationimg3} img2 = {destinationimg4} className= "first-des"/>

      <DestinationData heading = "Bora Bora, French Polynesia" text = 'Bora Bora, located in French Polynesia, is a dreamlike destination renowned for its unparalleled beauty and pristine natural surroundings. This tropical paradise is situated in the South Pacific Ocean and is often referred to as the "Pearl of the Pacific." Bora Bora is famous for its crystal-clear turquoise waters, powdery white sandy beaches, and breathtaking coral reefs.'
      img1 = {destinationimg1} img2 = {destinationimg2} className= "first-des-reverse"/>
    </div>
   
  )
}

export default Destination