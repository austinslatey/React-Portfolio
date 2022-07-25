import React from "react";
import recipease from '../../Assets/Images/newREADMEimg.png';
import travelbug from '../../Assets/Images/travelbug-preview.jpg';
import { Box, CardMedia } from '@mui/material';
import { CssBaseline } from '@mui/material';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();


export default function Projects() {
  // const background = <img
  //   className="background"
  //   alt="ocean"
  //   src="https://www.teahub.io/photos/full/87-879496_celinnyi-honeycomb-honey-honeycomb-background.jpg"
  //   ></img>
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box marginTop={3} marginBottom={3} sx={{ minHeight: "calc(100vh - 40px)", backgroundColor: "#90E0EF", borderTopLeftRadius: "8%", borderBottomRightRadius: "8%" }}>
        <Grid container direction="column">
        <Grid item xs={12} marginTop={3} alignSelf="center">
          <Typography variant="h2" sx={{ minWidth: '100%'}}>Projects Page</Typography>
        </Grid>
        </Grid>
        <div>
          <div className="container d-flex p-2">

            <div className="row">
              <div className="card col-sm-6" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">Horiseon-Industries</h5>
                  <p className="card-text">
                    I had the pleasure in refactoring css on this webpage.
                  </p>
                  <a
                    href="https://github.com/austinslatey/Horiseon-Industries"
                    className="btn btn-primary"
                  >
                    Click for github
                  </a>
                </div>
              </div>

              
              <div className="card col-sm-6" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src="https://www.rd.com/wp-content/uploads/2016/04/rock-paper-scissor-ft.jpg"
                  alt="Card cap"
                ></img>
                <div className="card-body">
                  <h3 className="card-title">Rock, Paper, Scissors with Javascript</h3>
                  <p className="card-text"></p>
                  <a
                    href="https://github.com/austinslatey/Rock-Paper-Scissors.js"
                    className="btn btn-primary"
                  >
                    Click for github
                  </a>
                </div>
              </div>
            </div>
            <div className="card col-sm-6" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">Group Project 1: Concert-Scout</h5>
                <p className="card-text">
                  Four developers, one mission. Third party API's
                </p>
                <a
                  href="https://austinslatey.github.io/concert-scout/"
                  className="btn btn-primary"
                >
                  Concert Scout link
                </a>
              </div>
            </div>
       
            <div className="card col-sm-6" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">Group Project 2: Travel-Bug</h5>
                <p className="card-text">
                  Four creative and intuitive developers vs. Full-Stack Web
                  Development
                </p>
                <img
                  className="card-img-top"
                  src={travelbug}
                  alt="Card cap"
                ></img>
                <a
                  href="https://travelbug-project.herokuapp.com/"
                  className="btn btn-primary"
                >
                  Check it out!
                </a>
              </div>
            </div>
            <div className="card col-sm-6" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src={recipease}
                  alt="Card cap"
                ></img>
                <div className="card-body">
                  <h3 className="card-title">RecipEase</h3>
                  <p className="card-text">Project one reunites for one last time!! Their duty is to create a User Interface involving MERN, called RecipEase.</p>
                  <p className="card-text">Just a bunch of hungry folks with a desire to be more organized with cooking and shopping</p>
                  <a
                    href=" https://thebestrecipease.herokuapp.com/#homepage"
                    className="btn btn-primary"
                  >
                    Our Website :D
                  </a>
                </div>
              </div>
          </div>
        </div>
        </Box>
      </ThemeProvider>
    );
}
