import React from "react";
import { NavLink } from "react-router-dom";
const Expdone = (props) => {
  return (
    <div className="work-card">
      <img src={props.imgsrc} alt="work1" />
      <h2 className="work-title">{props.title}</h2>
      <h4 className="work-title" style={{fontStyle:"italic"}}>{props.desg}</h4>
      <div className="pro-details">
        <p>{props.text}</p>
      </div>
      <div className="pro-btns">
        <NavLink to={props.view} className="btn" target="_blank">
          {props.view.length === 0 ? "Currently" : "Certificate"}
        </NavLink>
      </div>
    </div>
  );
};

export default Expdone;
