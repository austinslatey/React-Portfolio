import React from "react";
import photography  from "./Assets/photo.jpg"

import "./Contact.css"

export default function Contact() {
  return (
    <div className="paper">
      <h1>Contact Page</h1>
      <img 
      src={photography} 
      alt="background-img"
      className="image"
      />
    </div>
  );
}
