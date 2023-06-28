import React from 'react'
import aboutImg from '../assets/petar-avramoski-I3W2Ex0IV_8-unsplash.jpg'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs'
import Footer from '../components/Footer'

function About() {
  return (
    <>
    <Navbar/>
    <Hero cName = 'hero-mid' heroImg = {aboutImg} title = "About" btnclass = "hide"/>
    <AboutUs/>
    <Footer/>
    </>
    
  )
}
export default About;