import React from 'react'
import './stylesheet/AboutContent.css';
import { Link } from 'react-router-dom';
import thisimg from '../media/img4.jpg';

const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>sdhvfbcf</h1>
            <p>loremabdhs sjibshbvdv</p>
            <Link to='/Contact' className='btn'>Contact Me</Link>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='img-stack top'>
                    <img src={thisimg} alt='imageajbdcjh' className='img'/>
                </div>
                <div className='img-stack bottom'>
                    <img src={thisimg} alt='imageajbdcjh' className='img'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent