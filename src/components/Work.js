import './stylesheet/Workdone.css';
import React from 'react'
import Workdone from './Workdone';
import ProjectCardData from './Workcardata';

const Work = () => {
  return (
    <div className='work-container'>
        <h1 className='project-heading'>Projects</h1>
        <div className='project-container'>
           {ProjectCardData.map((item,ind)=>{
                return (
                    <Workdone 
                    key={ind}
                    imgsrc={item.imgsrc}
                    title={item.title}
                    text={item.text}
                    view={item.view}
                    />
                )
           })}
        </div>
    </div>
  )
}

export default Work;