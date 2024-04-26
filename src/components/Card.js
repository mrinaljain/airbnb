import React from "react";
// import star from "./images/star.png"
// import person from "images/person.png"
import "./card.css";

export default function Card(props) {
   console.log(props);
   //destructuring object
   const { img, status, rating } = props;
   const textStyle = {
      backgroundImage: 'url("images/person.png")',
   };
   return (
      <div className="card">
         <div className="card_image" style={textStyle}>
            {props.openSpots === 0 && <span className="card_tag">SOLD OUT</span>}
         </div>
         <div className="card_content">
            <div className="ratting_row"> 
               <img src="images/star.png" /> 
               <span>{props.rating}</span>
               <span className="ratting_count">({props.ratingCount})</span> .
               <span className="country">{props.country}</span>
            </div>
            <h2>{props.title}</h2>
            <span><strong>From ${props.rate}</strong> / person</span>
         </div>
      </div>
   )
}