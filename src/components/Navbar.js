import React from "react";
import logo from "../airbnb.svg"
import "./navbar.css";

export default function Navbar (){
   return (
      <nav className="nav">
         <img src={logo} alt="logo" className="logo" />
      </nav>
   )
}