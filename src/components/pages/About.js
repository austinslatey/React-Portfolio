import React from "react";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ScopedCssBaseline } from "@mui/material";
import { Grid } from "@mui/material";
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const theme = createTheme();

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
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
            <Button variant="outlined" onClick={handleClickOpen} >
              Open cooking dialog
            </Button>
            <BootstrapDialog
              onClose={handleClose}
              aria-labelledby="customized-dialog-title"
              open={open}
            >
              <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                Cooking Experience
              </BootstrapDialogTitle>
              <DialogContent dividers>
                <Typography gutterBottom>
                  Throughout my life, I've switched career roles a couple times now.
                  First, I entered into the cooking universe. Here, I became skilled
                  in cooking foods from scratch.
                </Typography>
                <Typography gutterBottom>
                  This taught me to be paitent and
                  delicate because the food we were serving was expensive. As cooks,
                  were responsible to uphold the expectaion of quality food.
                </Typography>
                <Typography gutterBottom>
                  I'm able to apply this knowledge to programming by being attentive, particular, and delicate. By being diciplined, I'm able to polish code to look appealing and easily opperable for users.
                </Typography>
              </DialogContent>
              <DialogActions>
                <Button autoFocus onClick={handleClose}>
                  Close
                </Button>
              </DialogActions>
            </BootstrapDialog>
            <Button variant="outlined" onClick={handleClickOpen} >
              Open Spray Technician Dialog
            </Button>


            <BootstrapDialog
              onClose={handleClose}
              aria-labelledby="customized-dialog-title"
              open={open}
            >
              <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                Spray Technician Experience
              </BootstrapDialogTitle>
              <DialogContent dividers>
                <Typography gutterBottom>
                  I entered into the automotive buisness to become a spray
                  technician. The service I provide is a product called Rhino
                  Linings.
                </Typography>
                <Typography gutterBottom>
                  This product offers durable protection to a truck's bed
                  without having to install anything or drilling into the truck bed.
                  I was with this company for a little under two years, and
                  realized quickly that this wasnt the job for me.
                </Typography>
                <Typography gutterBottom>
                  I can apply this knowledge to coding for reasons such as being able to be a teamplayer, the ablility to think on the fly, and proper management skills.
                </Typography>
              </DialogContent>
              <DialogActions>
                <Button autoFocus onClick={handleClose}>
                  Close
                </Button>
              </DialogActions>
            </BootstrapDialog>

            <Button variant="outlined" onClick={handleClickOpen} >
              Open Web Development Dialog
            </Button>
            <BootstrapDialog
              onClose={handleClose}
              aria-labelledby="customized-dialog-title"
              open={open}
            >
              <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                Full-Stack Experience
              </BootstrapDialogTitle>
              <DialogContent dividers>
                <Typography gutterBottom>
                  Firstly, I started to mess around with Codecademy to see what the hype in coding all about.
                  I quickly learned that this was a path I could see myself traveling down and I wanted to take it a step further. 
                  This intrigued me to sign up for the coding bootcamp at the University of Minnesota to learn Full-Stack web development.
                  The rigorous six month course set me up with a lot of tools to be applied to the industry. 
                </Typography>
                <Typography gutterBottom>
                  To continuiously learn about development, I plan to bring as much as I can to the team I will be working with in an career based enviroment.
                </Typography>
                <Typography gutterBottom>
                  I can apply this knowledge to coding for reasons such as being able to be a teamplayer, the ablility to think on the fly, and proper management skills.
                </Typography>
              </DialogContent>
              <DialogActions>
                <Button autoFocus onClick={handleClose}>
                  Close
                </Button>
              </DialogActions>
            </BootstrapDialog>
          </Grid>
        </Box>
      </ScopedCssBaseline>
    </ThemeProvider>
  );
}
