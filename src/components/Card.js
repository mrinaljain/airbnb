import React from "react";
// import star from "./images/star.png"
// import person from "images/person.png"
import "./card.css";

export default function Card(props) {
   //destructuring object
   // const { img, status, rating } = props;
   console.log(props.cardItem);
   let card = props.cardItem;
   const textStyle = {
      backgroundImage: 'url("images/person.png")',
   };
   let badgeText;
   if(card.openSpots === 0){
      badgeText = "SOLD OUT";
   } else if (card.location === "Online"){
      badgeText = "ONLINE";
   }
   return (
      <div className="card">
         <div className="card_image" style={textStyle}>
            {badgeText && <span className="card_tag">{badgeText}</span>}
            {/* <span className="card_tag" style={{ display: badgeText ? 'block' : 'none' }}>{badgeText}</span> */}
         </div>
         <div className="card_content">
            <div className="ratting_row"> 
               <img src="images/star.png" /> 
               <span>{card.stats.rating}</span>
               <span className="ratting_count">({card.stats.reviewCount})</span> .
               <span className="country">{card.location}</span>
            </div>
            <h2>{card.title}</h2>
            <span><strong>From ${card.price}</strong> / person</span>
         </div>
      </div>
   )
}