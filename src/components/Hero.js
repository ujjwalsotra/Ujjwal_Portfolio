import './stylesheet/Hero.css';
import React from 'react'
import introimg from "../media/img1.jpg"
import {Link} from 'react-router-dom'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className="intro-img" src={introimg} alt='intro image of mine'/>
        </div>
        <div className='content'>
            <p>Hello everyone</p>
            <h1>CSE Undergraduate & Developer </h1>
            <div>
                <Link to='Project/' className='btn'>Project</Link>
                <Link to='Contact/' className='btn-white'>Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Hero