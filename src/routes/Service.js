import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import serviceImg from '../assets/luca-bravo-zAjdgNXsMeg-unsplash.jpg'
import TravelService from '../components/TravelService'
import Footer from '../components/Footer'
function Service() {
  return (
    <>
    <Navbar/>
    <Hero cName = 'hero-mid' heroImg = {serviceImg} title = "Service" btnclass = "hide"/>
    <TravelService/>
    <Footer/>
    </>
  )
}

export default Service
