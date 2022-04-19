import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import classNames from "classnames";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import { useNavigate } from "react-router-dom";

import { grey } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  nav: {
    position: "fixed",
    top: "0",
    padding: "10px",
    width: "100%",
    height: "30px",
    zIndex: "1",
    transitionTimingFunction: "ease-in",
    transition: "all 0.5s",
  },
  navBlack: {
    backgroundColor: "#111",
  },
  navContents: {
    display: "flex",
    justifyContent: "space-between",
    position: "fixed",
  },
  navLogo: {
    position: "fixed",
    top: "2px",
    left: "0",
    width: "80px",
    objectFit: "contain",
    paddingLeft: "20px",
    cursor: "pointer",
  },
  navAvatar: {
    position: "fixed",
    right: "20px",
    width: "30px",
    cursor: "pointer",
  },
  buttonGroup: {
    position: "fixed",
    paddingLeft: "130px",
  },
  button: {
    background: "none",
    color: "#fff",
    border: "none",
    outline: "none",
    padding: "0px",
    fontSize: "16px",
    fontWeight: "100",
    margin: "2px 10px",
    textTransform: "capitalize",
    "&:hover": {
      background: "none",
      cursor: "pointer",
      color: "#cfcfcf",
    },
  },
  buttonActive: {
    fontWeight: "550",
  },
  buttonIcon: {
    position: "fixed",
    right: "55px",
    top: "5px",
  },
});

const Nav = () => {
  const [show, handleShow] = useState(false);
  const navigate = useNavigate();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  const classes = useStyles();

  return (
    <Box className={classNames(classes.nav, show && classes.navBlack)}>
      <Box className={classes.navContents}>
        <img
          className={classes.navLogo}
          src="https://www.psdstamps.com/wp-content/uploads/2020/01/movies-stamp-png.png"
          alt=""
        />

        <Box>
          <Box className={classes.buttonGroup}>
            <Button
              className={classNames(classes.button, classes.buttonActive)}
            >
              Home
            </Button>
            <Button
              className={classes.button}
              onClick={() => navigate("/series")}
            >
              Series
            </Button>
            <Button className={classes.button}>Films</Button>
            <Button className={classes.button}>Latest</Button>
            <Button className={classes.button}>My List</Button>
          </Box>
          <Box className={classes.buttonIcon}>
            <IconButton sx={{ color: grey[50] }}>
              <SearchIcon />
            </IconButton>
            <IconButton sx={{ color: grey[50] }}>
              <NotificationsRoundedIcon />
            </IconButton>
          </Box>
        </Box>

        <img
          className={classes.navAvatar}
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
        />
      </Box>
    </Box>
  );
};
export default Nav;
