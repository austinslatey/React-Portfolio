import React from "react";

export default function Home() {
  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };

  // const honeyImage = {
  //   backgroundImage: "../../assets/background"
  // }
  return (
    <div>
      {/* <h1>Hello! I'm Austin Slater!</h1> */}
      <div style={mystyle}>
        
      </div>
      <p style={mystyle}>
        Welcome to my portfolio. I'm
        currently enrolled in a full-stack web development course to increase my
        knowledge, so I made this portfolio from scratch using react. This
        portfolio displays my 'highlight reel' of coding programs for the world
        to see. Without further ado, navigate through the tabs to get to know a
        little about me!
      </p>
    </div>
  );
}
