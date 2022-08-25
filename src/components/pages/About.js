import React from "react";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ScopedCssBaseline } from "@mui/material";
import { Grid } from "@mui/material";
// import PropTypes from 'prop-types';
//import Button from '@mui/material/Button';
// import { styled } from '@mui/material/styles';
// import Dialog from '@mui/material/Dialog';
// import DialogTitle from '@mui/material/DialogTitle';

//import DialogActions from '@mui/material/DialogActions';
// import IconButton from '@mui/material/IconButton';
// import CloseIcon from '@mui/icons-material/Close';




const theme = createTheme();

export default function About() {
  return (
    <ThemeProvider theme={theme}>
      <ScopedCssBaseline>
        <Box
          marginTop={3}
          marginBottom={3}
          sx={{
            flexGrow: 1,
            minHeight: "calc(100vh - 40px)",
            backgroundColor: "#90E0EF",
            borderTopLeftRadius: "8%",
            borderBottomRightRadius: "8%",
          }}
        >
          <div className="container">
            <header>
              <h1 className="about-title">About Me</h1>
            </header>
            <div className="about-explanation">
              <h3 className="sub-heading">A little bit about myself</h3>
              <p classname="about-intro">
                I started to mess around with Codecademy to see what the hype in
                development all about. I quickly learned that this was a path I could
                see myself traveling down and I wanted to take it a step further. This
                intrigued me to sign up for the coding bootcamp at the University of
                Minnesota to learn Full-Stack web development. The rigorous six month
                course set me up with a lot of tools to be applied to the industry. I
                plan to continuiously bring to the team a strong effort and will to
                learn in the workplace.
              </p>
            </div>
            <article className="skillset">
              <h3 className="skillset-heading">Skillsets</h3>
              <ul className="skillset-list">
                <li>HTML, Advanced CSS, and Git</li>
                <li>JavaScipt</li>
                <li>Web APIs</li>
                <li>Third-Party APIs</li>
                <li>Server-Side APIs</li>
                <li>Node JS</li>
                <li>Object-Oriented Programming(OOP)</li>
                <li>Express.js</li>
                <li>SQL</li>
                <li>Object-Relational Mapping(ORM)</li>
                <li>Model-View-Controller(MVC)</li>
                <li>Computer Science for JavaScipt</li>
                <li>NoSQL</li>
                <li>Progressive Web Applications (PWA)</li>
                <li>React and State</li>
                <li>MERN: Appllo, GraphQL, React Router, Auth, and Heroku</li>
              </ul>
            </article>
            <article>
              <h3 className="certificates-heading">Certificates</h3>
            </article>
          </div>
        </Box>
      </ScopedCssBaseline>
    </ThemeProvider>
  );
}
