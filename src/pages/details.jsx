import React from "react";
import "./details.css"
import { useLocation, useNavigate } from "react-router-dom";

export const Details = () => {
  const location = useLocation();
  // console.log('location',location)
  return (
    <div className="div">
      <h1>Details</h1>
      <div className="detail">
        <div className="image">
          <img src={location.state.image}/>
        </div>
        <div className="info">
        <h3>Title:{location.state.title}</h3>
        <h3>Genre:{location.state.genre}</h3>
        <h3>Director:{location.state.director}</h3>
        <h3>Released:{location.state.release}</h3>
        <h3>Year:{location.state.year}</h3>

        </div>
      </div>
      
    </div>
  )
}


