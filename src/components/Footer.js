import React from 'react'
import './stylesheet/Footer.css';
import {FaHome, FaMailBulk, FaPhone, FaYoutube, FaLinkedin, FaGithub} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                    <div>
                        <p>My addresss........</p>
                    </div>
                </div>
                <div className='phone'>
                    <h4>
                <FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                +91-9018888168
                    </h4>
                </div>
                <div className='email'>
                    <h4>
                <FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                ujjwalsotra1121@gmail.com
                    </h4>
                </div>
            </div>
            <div className='right'>
                <h4>About the Company</h4>
                <p>Lorems aujisb xnnus bashoas xijibc asjbcshc absbcs sbcsbssicgsb</p>
                <div className='social'>
                <FaGithub size={30} style={{color:"#fff",marginRight:"2rem"}}/>
                <FaYoutube size={30} style={{color:"#fff",marginRight:"2rem"}}/>
                <FaLinkedin size={30} style={{color:"#fff",marginRight:"2rem"}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer