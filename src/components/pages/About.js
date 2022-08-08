import React from "react";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ScopedCssBaseline } from "@mui/material";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";

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
          <Grid container direction="column" spacing={4}>
            <Grid item xs={6} marginTop={3} alignSelf="center">
              <Typography variant="h2" sx={{ minWidth: "100%" }}>
                A little about me
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            rowSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Typography mx={"4rem"} mt={4} variant="h4">
              Throughout my life, I've switched career roles a couple times now.
              First, I entered into the cooking universe. Here, I became skilled
              in cooking foods from scratch. This taught me to be paitent and
              delicate because the food we were serving was expensive. As cooks,
              were responsible to uphold the expectaion of quality food.
            </Typography>
            <Typography mx={"4rem"} mt={4} variant="h4">
              Secondly, I entered into the automotive buisness to become a spray
              technician. The service I provide is a product called Rhino
              Lining. This product offers durable protection to a truck's bed
              without having to install anything or drilling into the truck bed.
              I've been with this company for a little under two years, and
              realized quickly that this wasnt the job for me. I started to mess
              around with coding, and I fell in love!
            </Typography>
            <Typography mx={"4rem"} mt={4} variant="h4">
              I became so interested, I decided to enroll in a Web Development
              coding bootcamp at the University of Minnesota. It was a good
              decision to educate myself further into the vast world of coding.
              With the knowledge I've used, I plan to advance into a full-stack
              web development career opportunity to work with a organization
              that suits the company and I best.
            </Typography>
          </Grid>
        </Box>
      </ScopedCssBaseline>
    </ThemeProvider>
  );
}
