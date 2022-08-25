import React from "react";
import "./About.css"
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ScopedCssBaseline } from "@mui/material";
import { Grid } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { palette } from '@mui/system';
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
                development all about. I quickly learned that this was a path I
                could see myself traveling down and I wanted to take it a step
                further. This intrigued me to sign up for the coding bootcamp at
                the University of Minnesota to learn Full-Stack web development.
                The rigorous six month course set me up with a lot of tools to
                be applied to the industry. I plan to continuiously bring to the
                team a strong effort and will to learn in the workplace.
              </p>
            </div>
            <article className="skillset">
              <List
                className="skillset-list"
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "#010c3f",
                  position: "relative",
                  overflow: "auto",
                  maxHeight: 300,
                  "& ul": { padding: 0 },
                }}
              >
                <ListItem className="list-item">
                  <ListItemText>HTML, Advanced CSS, and Git</ListItemText>
                </ListItem>
                <ListItem className="list-item">
                  <ListItemText>JavaScipt</ListItemText>
                </ListItem>
                <ListItem className="list-item">
                  <ListItemText>Web APIs</ListItemText>
                </ListItem>
                <ListItem className="list-item">
                  <ListItemText>Third-Party APIs</ListItemText>
                </ListItem>
                <ListItem className="list-item">
                  <ListItemText>Server-Side APIs</ListItemText>
                </ListItem>
                <ListItem className="list-item">
                  <ListItemText>Node JS</ListItemText>
                </ListItem>
                <ListItem className="list-item">
                  <ListItemText>OOP: Object-Oriented Programming </ListItemText>
                </ListItem>
                <ListItem className="list-item">
                  <ListItemText>Express.js</ListItemText>
                </ListItem>
                <ListItem className="list-item">
                  <ListItemText>SQL</ListItemText>
                </ListItem>
                <ListItem className="list-item">
                  <ListItemText>ORM: Object-Relational Mapping</ListItemText>
                </ListItem>
                <ListItem className="list-item">
                  <ListItemText>MVC: Model-View-Controller</ListItemText>
                </ListItem>
                <ListItem className="list-item">
                  <ListItemText>Computer Science for JavaScipt</ListItemText>
                </ListItem>
                <ListItem className="list-item">
                  <ListItemText>NoSQL</ListItemText>
                </ListItem>
                <ListItem className="list-item">
                  <ListItemText>
                  PWA: Progressive Web Applications
                  </ListItemText>
                </ListItem>
                <ListItem className="list-item">
                  <ListItemText>React and State</ListItemText>
                </ListItem>
                <ListItem className="list-item">
                  <ListItemText>
                    MERN: Appllo, GraphQL, React Router, Auth, and Heroku
                  </ListItemText>
                </ListItem>
              </List>
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
