import React, { useState } from 'react';
import '../css/Signup.css'

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Reset form fields
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    });
  };

  return (
    <>
    <h2 className='sigup-heading'>Sign up To Create Your New Memories</h2>
    <form className='form' onSubmit={handleSubmit}>
      <label htmlFor="firstName" className='label'>First Name:</label>
      <input
        className='input'
        type="text"
        id="firstName"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        required
      />

      <label htmlFor="lastName" className='label'>Last Name:</label>
      <input
        className='input'
        type="text"
        id="lastName"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        required
      />

      <label htmlFor="email" className='label'>Email:</label>
      <input
        className='input'
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label htmlFor="password" className='label'>Password:</label>
      <input
        className='input'
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
      />

      <button type="submit" className='button'>Sign Up</button>
    </form>
    </>
  );
};

export default SignUpForm;