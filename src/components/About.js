import React from 'react'
import bg from '../assets/about.png.webp'

function About() {
  return (
    <div className='about-container'>
        <div className=' left-about-box'>
            <><img  src={bg}/></>
        </div>
        <div className=' right-about-box'>
        <div className='bar-title'> 
        <div className='line-style'></div>
        <p>about our gym</p>
        </div>
        <h1>SAFE BODY BUILDING PROPER SOLUTIONS THAT SAVES OUR VALUABLE TIME!</h1>
        <p>Brook presents your services with flexible, convenient and cdpose layouts. You can select your favorite layouts & elements for cular ts with unlimited ustomization possibilities. Pixel-perfect replication of the designers is intended</p>
        </div>
    </div>
  )
}

export default About