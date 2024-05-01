import React from 'react'
import './stylesheet/Expstyles.css';
import WorkCardData from './Expdata';
import Expdone from './Expdone';
const Exp = () => {
  return (
    <div className='work-container'>
    <h1 className='work-heading'>WORK EXPERIENCE</h1>
    <div className='work-container'>
       {WorkCardData.map((item,ind)=>{
            return (
                <Expdone 
                key={ind}
                imgsrc={item.imgsrc}
                title={item.title}
                desg={item.desg}
                text={item.text}
                view={item.view}
                />
            )
       })}
    </div>
</div>
  )
}

export default Exp