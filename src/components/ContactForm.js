import '../css/ContactFormStyles.css'

import React from 'react'

function ContactForm() {
  return (
    <div className='form-container'>
      <h1>Send message to us</h1>
      <form>
        <input placeholder='Name' id= 'username'/>
        <input placeholder='Email' id= 'useremail'/>
        <input placeholder='Subject' id= 'usersubject'/>
        <textarea placeholder='message' rows= "4"></textarea>
        <button>Send Message</button>
      </form>
    </div>
  )
}

export default ContactForm
