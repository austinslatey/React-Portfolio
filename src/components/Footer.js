import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
// import Button from '@mui/material/Button';
import ButtonGroup from "@mui/material/ButtonGroup";
import Container from "@mui/material/Container";
// import Modal from '@mui/material/Modal'
// import { Typography } from '@mui/material';
import { Link } from "@mui/material";
// import IconButton from '@mui/material/IconButton';
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import ArticleIcon from "@mui/icons-material/Article";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// Potential use for styling

// const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 400,
//     bgcolor: 'background.paper',
//     border: '2px solid #000',
//     boxShadow: 24,
//     p: 4,
// };

export default function Footer() {
  // Potential use for state to open a modal
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  return (
    // Footer styling
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        minHeight: "30px",
        textAlign: "center",
        backgroundColor: "#010c3f",
      }}
    >
      <CssBaseline />
      <Container maxWidth="xs">
        <ButtonGroup variant="text" aria-label="text button group">
          <Link href="https://github.com/austinslatey" target="_blank">
            <GitHubIcon sx={{ fontSize: 40, mx: "1rem" }} />
          </Link>
          <Link href="mailto:austinslater58@gmail.com" target="_blank">
            <EmailIcon sx={{ fontSize: 40, mx: "1rem" }} />
          </Link>
          <Link
            href="https://docs.google.com/document/d/12YDeDfgEUPw26Muh4st21T-xn-W9CENCwYRsM5mlpVQ/edit?usp=sharing"
            target="_blank"
          >
            <ArticleIcon sx={{ fontSize: 40, mx: "1rem" }} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/austin-slater-1141b8225/"
            target="_blank"
          >
            <LinkedInIcon sx={{ fontSize: 40, mx: "1rem" }} />
          </Link>
        </ButtonGroup>
      </Container>
    </Box>
  );
}
