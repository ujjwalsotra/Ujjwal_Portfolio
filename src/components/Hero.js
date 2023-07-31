import './stylesheet/Hero.css';
import React from 'react'
import introimg from "../media/img1.png"
import {Link} from 'react-router-dom'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className="intro-img" src={introimg} alt='intro image of mine'/>
        </div>
        <div className='content'>
            <p>lorem jsjnbjsnc</p>
            <h1>React Develop</h1>
            <div>
                <Link to='Project/' className='btn'>Project</Link>
                <Link to='Contact/' className='btn-white'>Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Hero