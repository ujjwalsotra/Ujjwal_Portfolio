import React from 'react'
import './stylesheet/Navbar.css';
import {Link } from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';
import {useState} from 'react';


const Navbar = () => {
    const [showNav,setShowNav]=useState(false);
    const handleClick=()=>{
        let newvalue=!showNav;
        setShowNav(newvalue);
    }
  return (
    <div className="header">
        <Link to="/">
            <h1>Ujjwal Sotra</h1>
        </Link>
        <ul className={showNav?'nav-menu':'nav-menuhide'}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="Project/">Project</Link>
            </li>
            <li>
                <Link to="About/">About</Link>
            </li>
            <li>
                <Link to="Contact/">Contact</Link>
            </li>
        </ul>
        <div className='hamburger' onClick={handleClick}>
            {showNav?(<FaTimes size={20} style={{color:"#fff"}}/>):   
            (<FaBars size={20} style={{color:"#fff"}}/>)
            }
        </div>
    </div>
  )
}

export default Navbar