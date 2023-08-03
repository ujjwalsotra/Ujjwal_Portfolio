import React from 'react'
import { NavLink } from 'react-router-dom'
const Expdone = (props) => {
  return (
    <div className='work-card'>
    <img src={props.imgsrc} alt='work1 Image'/>
    <h2 className='work-title'>{props.title}</h2>
    <div className='pro-details'>
        <p>{props.text}</p>
    </div>
        <div className='pro-btns'>
            <NavLink to={props.view} className="btn" target='_blank'>Certificate</NavLink>
        </div>
</div>
  )
}

export default Expdone