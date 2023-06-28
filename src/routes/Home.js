import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Destination from '../components/Destination'
import Trip from '../components/Trip'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
    <Navbar/>
    <Hero cName = 'hero' heroImg = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80" title = "Experience the Wonders of Travel" text = "Choose your favourite destination" url = "/" btnclass = "show" buttonText = "Travel plan"/>
    <Destination/>
    <Trip/>
    <Footer/>
    </>
  )
}
export default Home
