import React from "react";
// import hero from "../../public/images/hero.png"
import "./hero.css";

export default function Hero() {
   return (
      <section className="hero">
         <img src="images/hero.png" alt="hero" className="hero_image" />
         <div className="hero_text">
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by <br/> one-of-a-kind hosts—all without leaving home.
            </p>
         </div>
         
      </section>

   )
}