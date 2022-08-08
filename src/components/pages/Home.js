import React from "react";
import austinS from "../../Assets/Images/austinS.jpg"
import { Box, CardContent, CardMedia } from "@mui/material";
import { ScopedCssBaseline } from "@mui/material";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import { createTheme, ThemeProvider } from "@mui/material/styles";


const theme = createTheme();

export default function Home() {

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
          }}>
          <Grid container direction="column" spacing={4}>
            <Grid item xs={6} marginTop={3} alignSelf="center">
              <Typography variant="h2" sx={{ minWidth: "100%" }}>
                Austin Slater
              </Typography>
            </Grid>
          </Grid>

          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Card sx={{ mx: "3rem" }} style={{ width: "29rem" }}>
              <CardMedia
                component="img"
                height="300"
                image={austinS}
                alt="austin-slater"
              />
              <CardContent>
                <Typography variant="h4">
                  Hello, and welcome to my personal page! I'm an aspiring full-stack developer continuing to upgrade this portfolio as my strength in coding becomes more polished. Please navigate through my from-scratch work of art and don't forget to contact for pointers!
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Box>
      </ScopedCssBaseline>
    </ThemeProvider>
  );
}
