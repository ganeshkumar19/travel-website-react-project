import './ServiceStyles.css'

import React from 'react'

function ServiceData(props) {
  return (
    <div className='s-card'>
      <div className='s-image'>
       <img src= {props.image} alt='service'/>
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  )
}

export default ServiceData
