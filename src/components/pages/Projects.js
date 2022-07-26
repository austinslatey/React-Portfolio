import * as React from "react";
import recipease from "../../Assets/Images/newREADMEimg.png";
import travelbug from "../../Assets/Images/travelbug-preview.jpg";
import concertScout from "../../Assets/Images/concert-scout.png";
import CardHeader from "@mui/material/CardHeader";
import { Box, CardActions, CardContent, CardMedia, Link } from "@mui/material";
import { CssBaseline } from "@mui/material";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { maxWidth } from "@mui/system";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const theme = createTheme();

export default function Projects() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        marginTop={3}
        marginBottom={3}
        sx={{
          minHeight: "calc(100vh - 40px)",
          backgroundColor: "#90E0EF",
          borderTopLeftRadius: "8%",
          borderBottomRightRadius: "8%",
        }}
      >
        <Grid container direction="column">
          <Grid item xs={12} marginTop={3} alignSelf="center">
            <Typography variant="h2" sx={{ minWidth: "100%" }}>
              Projects Page
            </Typography>
          </Grid>
        </Grid>
        <Grid marginTop={10} container direction="row">
          <Card item xs={{ maxWidth: 150 }} style={{ width: "18rem" }}>
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
              </Typography>
            </CardContent>
            <CardActions>
              <Stack direction="row" spacing={2}>
                <a
                  href="https://austinslatey.github.io/concert-scout/"
                  className="btn btn-primary"
                >
                  Concert Scout link
                </a>
              </Stack>
            </CardActions>
          </Card>
        </Grid>
        <Card className="card col-sm-6" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Group Project 2: Travel-Bug</h5>
            <p className="card-text">
              Four creative and intuitive developers vs. Full-Stack Web
              Development
            </p>
            <img className="card-img-top" src={travelbug} alt="Card cap"></img>
            <a
              href="https://travelbug-project.herokuapp.com/"
              className="btn btn-primary"
            >
              Check it out!
            </a>
          </div>
        </Card>

        <Card className="card col-sm-6" style={{ width: "18rem" }}>
          <img className="card-img-top" src={recipease} alt="Card cap"></img>
          <div className="card-body">
            <h3 className="card-title">RecipEase</h3>
            <p className="card-text">
              Project one reunites for one last time!! Their duty is to create a
              User Interface involving MERN, called RecipEase.
            </p>
            <p className="card-text">
              Just a bunch of hungry folks with a desire to be more organized
              with cooking and shopping
            </p>
            <a
              href=" https://thebestrecipease.herokuapp.com/#homepage"
              className="btn btn-primary"
            >
              Our Website :D
            </a>
          </div>
        </Card>
      </Box>
    </ThemeProvider>
  );
}
