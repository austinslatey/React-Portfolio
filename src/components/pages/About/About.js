import React from "react";
import "./About.css";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ScopedCssBaseline } from "@mui/material";
import { Grid } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
//import Stack from "@mui/material/Stack";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

import UofM from "./Assets/UofM.png";
import ReactCertificate from "./Assets/reactCertificate.png";
import JavascriptCertificate from "./Assets/javaScriptCertificate.png";

const theme = createTheme();

export default function About() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <ThemeProvider theme={theme}>
      <ScopedCssBaseline>
        <Box
          marginTop={3}
          marginBottom={3}
          sx={{
            flexGrow: 1,
            minHeight: "calc(100vh - 40px)",
            backgroundColor: "#010c3f",
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
                be applied to the industry. I also took two courses on
                Codecademy to expand my knowledge in some areas. The courses I
                completed were JavaScipt and React. The certificates are below.
                I plan to continuiously bring to the team a strong effort and
                will to learn in the workplace.
              </p>
            </div>
            <article className="skillset">
              <List
                className="skillset-list"
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "#010c3f",
                  position: "center",
                  overflow: "auto",
                  maxHeight: 300,
                  mx: "30rem",
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
                  <ListItemText>PWA: Progressive Web Applications</ListItemText>
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
              <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Card sx={{  
                  mx: "auto", 
                  width: 400,
                  p: 1,
                  m: 1,
                   }}>
                  <CardHeader
                    title="University of Minnesota: Full-Stack Bootcamp"
                    subheader="May, 2022"
                  />
                  <CardMedia
                    component="img"
                    height="350"
                    image={UofM}
                    alt="UofM Certificate"
                  />
                  <CardActions>
                    <Button onClick={handleOpen}>Open Certificate</Button>
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <img
                        src={UofM}
                        alt="UofM Certificate"
                        sx={{
                         
                          width: 200,
                  
                        }}
                      />
                    </Modal>
                  </CardActions>
                </Card>

                <Card sx={{  
                  mx: "auto", 
                  width: 400,
                  p: 1,
                  m: 1, 
                  }}>
                  <CardHeader
                    title="CodeCademy: React Certificate"
                    subheader="Aug, 2022"
                  />
                  <CardMedia
                    component="img"
                    height="350"
                    image={ReactCertificate}
                    alt="React Certificate"
                  />
                  <CardActions>
                    <a href={ReactCertificate}>React Certificate</a>
                  </CardActions>
                </Card>

                <Card sx={{ 
                    mx: "auto", 
                    width: 450,
                    p: 1,
                    m: 1,
                 }}>
                  <CardHeader
                    title="CodeCademy: JavaScript Certificate"
                    subheader="Aug, 2022"
                  />
                  <CardMedia
                    component="img"
                    height="350"
                    image={JavascriptCertificate}
                    alt="JavaScript Certificate"
                  />
                  <CardActions>
                    <a href={JavascriptCertificate}>Javascript Certificate</a>
                  </CardActions>
                </Card>
              </Grid>
            </article>
          </div>
        </Box>
      </ScopedCssBaseline>
    </ThemeProvider>
  );
}
