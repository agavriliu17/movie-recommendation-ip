import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { motion } from "framer-motion";
import Typography from "@mui/material/Typography";

import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/system";

const transparentNavStyle = {
  backgroundColor: "transparent",
  backgroundImage:
    "linear-gradient(to bottom,rgba(72,40,132,0.6) 90%,rgba(0,0,0,0))",
  zIndex: 1100,
  boxShadow: "none",
  transitionTimingFunction: "ease !important",
  transition: "0.5s",
  transitionDelay: "0s",
  ".MuiAppBar-root": { backgroundColor: "#000000" },
};

const blackNavStyle = {
  transitionTimingFunction: "ease !important",
  transitionProperty: "background-color !important",
  transition: "0.5s",
  backgroundColor: "#000000",
  transitionDelay: "0s",
};

const LandingNavbar = () => {
  const [show, handleShow] = React.useState(false);
  const navigate = useNavigate();
  const theme = useTheme();
  React.useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  return (
    <AppBar
      sx={show ? blackNavStyle : transparentNavStyle}
      component={motion.div}
      initial={{
        y: "1000vh",
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 1.42,
      }}
    >
      <Toolbar disableGutters sx={{ justifyContent: { xs: "center" } }}>
        <Typography variant="h6" component="div" sx={{ marginLeft: "3%" }}>
          Movie Streaming Website
        </Typography>

        <Box
          sx={{
            flexGrow: 2.3,
            display: { xs: "none", md: "flex", lg: "flex", xl: "flex" },
          }}
        ></Box>

        <Box
          sx={{
            flexGrow: 0.3,
            mr: "2",
            display: { xs: "none", md: "flex", lg: "flex", xl: "flex" },
          }}
        >
          <Button
            sx={{
              marginRight: "5%",
              color: theme.palette.primary.contrastText,
              backgroundColor: theme.palette.primary.light,
              borderRadius: "30px",
            }}
            onClick={() => navigate("/IP-Movie-streaming-website/register")}
          >
            Register
          </Button>
          <Button
            sx={{
              marginLeft: "5%",
              color: theme.palette.primary.contrastText,
              backgroundColor: theme.palette.primary.light,
              borderRadius: "30px",
            }}
            onClick={() => navigate("/IP-Movie-streaming-website/login")}
          >
            Login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default LandingNavbar;
