import React from 'react';
import './stylesheet/Hero2.css';
const Hero2 = ({heading,value}) => {
  return (
    <div className='heroimg'>
        <div className='heading'>
                <h1>{heading}</h1>
                <p>{value}</p>
        </div>
    </div>
  )
}

export default Hero2;