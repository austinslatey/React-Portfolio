import React from 'react';

export default function Projects() {
  return (
    <div>
      <h1>Projects Page</h1>
      <div class="container d-flex p-2">
      <div class="row">
        <div class="card col-sm-6" style={{width: '18rem'}}>
          {/* <img class="card-img-top"
            src="https://dsm01pap001files.storage.live.com/y4mpfSHmkO2Cd8Ch9s0uMPjusMsZH7qSFQuwZwh8SABAk_yTAVW49LQST9UXNFkIg4kYWcBwUbQTiB3J2Ux5yeo35riVVhXhSyOr9uD1tAWkyhOLOjxUSk2rifjMOi2Z4mBLbbHay8yKUPY2k4y7eCdDpDit6u3_D3Z8HfOpeaBeT85htBo6l64umPcT0uiZ56X?width=256&height=122&cropmode=none"></img> */}
          <div class="card-body">
            <h5 class="card-title">Horiseon-Industries</h5>
            <p class="card-text">I had the pleasure in refactoring css on this webpage.</p>
            <a href="https://github.com/austinslatey/Horiseon-Industries" class="btn btn-primary">Click for github</a>
          </div>
        </div>
        {/* <div class="card col-sm-6" style={{width: '18rem'}}>
          <img class="card-img-top" src="https://www.rd.com/wp-content/uploads/2016/04/rock-paper-scissor-ft.jpg"
            alt="Card image cap"></img> */}
          {/* <div class="card-body">
            <h3 class="card-title">Rock, Paper, Scissors with Javascript</h3>
            <p class="card-text"></p>
            <a href="https://github.com/austinslatey/Rock-Paper-Scissors.js" class="btn btn-primary">Click for
              github</a>
          </div> */}
        </div>
        <div class="card col-sm-6" style={{width: '18rem'}}>
          {/* <img class="card-img-top"
            src="githubusercontent.com/93648326/149425101-bf29c067-c863-48dc-82ce-7acb6e5051c5.png"
            alt="Card image cap"></img> */}
          <div class="card-body">
            <h5 class="card-title">Group Project 1: Concert-Scout</h5>
            <p class="card-text">Four developers, one mission. Third party API's</p>
            <a href="https://austinslatey.github.io/concert-scout/" class="btn btn-primary">Concert Scout link</a>
          </div>
        </div>
        <div class="card col-sm-6" style={{width: '18rem'}}>
          {/* <img class="card-img-top" src="./Assets/travel-bug.png" alt="Card image cap"></img> */}
          <div class="card-body">
            <h5 class="card-title">Group Project 2: Travel-Bug</h5>
            <p class="card-text">Four creative and intuitive developers vs. Full-Stack Web Development</p>
            <a href="https://travelbug-project.herokuapp.com/" class="btn btn-primary">Check it out!</a>
          </div>
        </div>
      </div>
    </div>
  );
}
