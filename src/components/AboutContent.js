import React from 'react'
import './stylesheet/AboutContent.css';
import { Link } from 'react-router-dom';
import thisimg from '../media/img7.jpg';
import imgtopsec from '../media/img8.jpg'

const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1 style={{color:"black"}}>Konichiwa</h1>
            <p>DevOps Engineer at Amazon. Ex- GlobalLogic, Samsung.
            CSE Undergrad. BIT, Mesra
            C++, React, Git, Github,
            Data Structures and algorithms
            Open for software roles.
            </p>
            <Link to='/Contact' className='btn'>Contact Me</Link>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='img-stack top'>
                    <img src={thisimg} alt='Random tech pic' className='img'/>
                </div>
                <div className='img-stack bottom'>
                    <img src={imgtopsec} alt='random tech pic' className='img'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent