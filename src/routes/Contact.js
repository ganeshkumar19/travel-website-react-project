import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import contactImg from '../assets/brady-stoeltzing-m8oAzXoedho-unsplash.jpg'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'

function Contact() {
  return (
    <>
    <Navbar/>
    <Hero cName = 'hero-last' heroImg = {contactImg} title = "Contact" btnclass = "hide"/>
    <ContactForm/>
    <Footer/>
    </>
  )
}

export default Contact
