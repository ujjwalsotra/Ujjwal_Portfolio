import './stylesheet/Workdone.css';
import React from 'react'
import { NavLink } from 'react-router-dom';

const Workdone = (props) => {
  return (
    <div className='project-card'>
    <img src={props.imgsrc} alt='Project1 Image'/>
    <h2 className='project-title'>{props.title}</h2>
    <div className='pro-details'>
        <p>{props.text}</p>
    </div>
        <div className='pro-btns'>
            <NavLink to={props.view} className="btn">Check It Out</NavLink>
        </div>
</div>
  )
}

export default Workdone