import TripData from './TripData'
import './TripStyles.css'
import trip1 from '../assets/chris-czermak-7ybKmhDTcz0-unsplash.jpg' 
import trip2 from '../assets/david-rodrigo-Fr6zexbmjmc-unsplash.jpg' 
import trip3 from '../assets/barry-li-sihe8Guf9ts-unsplash.jpg' 

import React from 'react'

function Trip() {
  return (
    <div className='trip'>
      <h2>Recent Trips</h2>
      <p>Choose your favourite desination using Google maps</p>
      <div className='trip-card'>
        <TripData heading = "Trip to Rome" text = 'Rome, often referred to as the "Eternal City," is a historic and iconic destination located in Italy. With a rich history spanning over 2,500 years, Rome is a treasure trove of ancient ruins, world-renowned art, and captivating architecture.' image= {trip1}/>
        <TripData heading = "Trip to Dubai" text = 'Dubai, the jewel of the United Arab Emirates, is a dynamic and futuristic city that offers a perfect blend of luxury, culture, and adventure. Known for its awe-inspiring skyscrapers, glamorous shopping malls, and stunning man-made attractions, Dubai is a playground for the modern traveler.' image= {trip2}/>
        <TripData heading = "Trip to Newzeland" text = 'New Zealand, a land of breathtaking landscapes and unparalleled natural beauty, is a dream destination for nature enthusiasts and adventure seekers. Nestled in the southwestern Pacific Ocean, this island nation offers a diverse range of experiences that will leave travelers in awe.' image= {trip3}/>
      </div>
    </div>
  )
}

export default Trip
