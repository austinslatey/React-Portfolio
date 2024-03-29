import * as React from "react";
import recipease from "./Assets/newREADMEimg.png";
import travelbug from "./Assets/travelbug-preview.jpg";
import concertScout from "./Assets/concert-scout.png";
import CardHeader from "@mui/material/CardHeader";
import { Box, CardActions, CardContent, CardMedia } from "@mui/material";
import { ScopedCssBaseline } from "@mui/material";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Stack from "@mui/material/Stack";

import "./Projects.css";

const theme = createTheme();

export default function Projects() {
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
          <Grid container direction="column" spacing={4}>
            <Grid item xs={6} marginTop={3} alignSelf="center">
              <h1 className="projects-title">Projects Page</h1>
            </Grid>
          </Grid>

          <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Card sx={{ mx: "5rem"  }} style={{ width: "29rem" }}>
              <CardHeader
                title="Group Project 1: Concert-Scout"
                subheader="January 26, 2022"
              />
              <CardMedia
                component="img"
                height="194"
                image={concertScout}
                alt="concert-scout"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Four developers with one mission, third party APIs.
                  The skills here learned by the team: HTML and Bulma CSS styling, JavaScript along with DOM, and server-side APIs
                </Typography>
              </CardContent>
              <CardActions>
                <Stack
                direction="column" 
                spacing={1}>
                  <a
                    href="https://austinslatey.github.io/concert-scout/"
                    className="btn btn-primary"
                  >
                    Concert Scout link
                  </a>
                </Stack>
              </CardActions>
            </Card>

            <Card sx={{ mx: "5rem" }} style={{ width: "29rem" }}>
              <CardHeader
                title="Group Project 2: Travel-Bug"
                subheader="March 13, 2022"
              />
              <CardMedia
                component="img"
                height="194"
                image={travelbug}
                alt="travel-bug"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  To collab with teammates to develop a full-stack web
                  application. Travel Bug is a webpage that hosts travel
                  locations posted by users that allows individual users to
                  browse for travel information and like locations to save to
                  their personal login page. It also, lets the user create new
                  location posts for other users to see in the homepage and lets
                  them rate 1-5 stars on their trip/experience going to that
                  location.
                </Typography>
              </CardContent>
              <CardActions>
                <Stack direction="column" spacing={1}>
                  <a
                    href="https://travelbug-project.herokuapp.com/"
                    className="btn btn-primary"
                  >
                    Travel-Bug Link
                  </a>
                </Stack>
              </CardActions>
            </Card>

            <Card sx={{ mx: "5rem" }} style={{ width: "29rem" }}>
              <CardHeader
                title="Group Project 3: RecipEase"
                subheader="March 13, 2022"
              />
              <CardMedia
                component="img"
                height="194"
                image={recipease}
                alt="recipease"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Project one reunites for one last time!! Their duty is to
                  create a User Interface involving MERN, called RecipEase. Just
                  a bunch of hungry folks with a desire to be more organized
                  with cooking and shopping
                </Typography>
              </CardContent>
              <CardActions>
                <Stack direction="row" spacing={2}>
                  <a
                    href="https://thebestrecipease.herokuapp.com/#homepage"
                    className="btn btn-primary"
                  >
                    RecipEase Link
                  </a>
                </Stack>
              </CardActions>
            </Card>
          </Grid>
        </Box>
      </ScopedCssBaseline>
    </ThemeProvider>
  );
}
