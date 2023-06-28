import React from 'react'
import SignUpForm from '../components/SignUpForm'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import signupImg from '../assets/neom-LiDZooBvzt0-unsplash.jpg'
import Footer from '../components/Footer'

export default function Signup() {
  return (
    <>
    <Navbar/>
    <Hero cName = 'hero-last' heroImg = {signupImg} title = "Signup to Tourista" btnclass = "hide"/>
    <SignUpForm/>
    <Footer/>
    </>
  )
}
