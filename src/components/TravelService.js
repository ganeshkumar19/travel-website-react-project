import ServiceData from './ServiceData'
import '../css/ServiceStyles.css'
import service1 from '../assets/robin-stickel-tzl1UCXg5Es-unsplash.jpg' 
import service2 from '../assets/kam-idris-kyt0PkBSCNQ-unsplash.jpg' 
import service3 from '../assets/erik-odiin-jbQvJx2EWnU-unsplash.jpg' 



import React from 'react'

function TravelService() {
  return (
    <div className='service'>
      <h2>Services</h2>
      <p>Experience the world like never before with our exceptional travel services.</p>
    <div className='service-card'>
      <ServiceData heading = 'Food Accomadation' text = 'Indulge in a worry-free travel experience where every aspect of your journey is taken care of, including food and accommodation. With our comprehensive packages, we offer top-notch hospitality and comfortable stays, ensuring that you savor every moment of your trip. Immerse yourself in a culinary delight as we curate exquisite dining experiences that cater to your taste buds and dietary preferences' image={service1} />
      <ServiceData heading = 'Rooms Accomadation' text = 'Elevate your travel experience with our all-inclusive packages, where luxurious room accommodations are seamlessly integrated into your itinerary. We pride ourselves on handpicking exceptional accommodations that cater to your comfort and preferences. Immerse yourself in a world of elegance and relaxation as you step into our carefully curated selection of rooms.' image={service2} />
      <ServiceData heading = 'Travel Guides' text = 'Experience the ultimate convenience and peace of mind with our all-inclusive packages, where we not only provide exceptional accommodations but also offer complimentary travel guides to enhance your journey. Our dedicated team of expert guides is passionate about sharing their in-depth knowledge of the destination, ensuring you have an immersive and enlightening experience.' image={service3} />

    </div>
    </div>
  )
}

export default TravelService
