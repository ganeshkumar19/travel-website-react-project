import React, { Component } from 'react'
import './DestinationStyles.css'
import destinationimg1 from '../assets/hugues-de-buyer-mimeure-oDcbtrD3Rrc-unsplash.jpg' 
import destinationimg2 from '../assets/ryan-geller-Fc_y1til6Zw-unsplash.jpg' 

class DestinationData extends Component {
  render() {
    return (
      <div className= {this.props.className}>
      <div className='des-text'>
        <h2>{this.props.heading}</h2>
        <p>{this.props.text}</p>
      </div>
      <div className='image'>
        <img alt='img' src= {this.props.img1}/>
        <img alt='img' src= {this.props.img2}/>
      </div>
    </div>
    )
  }
}

export default DestinationData