import React, { useEffect, useState } from "react";
import "./Nav.css"; //Delete this file after all the css is moved here
//TODO: Remove unused imports
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import { grey } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
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
    fontSize: "14px",
    fontWeight: 200,
    margin: "5px 10px",
  },
});

//TODO: Move this file to components folder
const Nav = () => {
  const [show, handleShow] = useState(false);
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
    <div className={`nav ${show && "nav_black"}`}>
      {/* TODO: Use <Box> instead of <div> */}
      <div className="nav_contents">
        <img
          className="nav_logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />

        <Box>
          <Box className={classes.buttonGroup}>
            {/* TODO: Use Button from Mui, see docs for customization & props */}
            <Button className={classes.button}>Home</Button>
            <button className="button-nav">Series</button>
            <button className="button-nav">Films</button>
            <button className="button-nav">Latest</button>
            <button className="button-nav">My List</button>
          </Box>
          <div className="btn-icon">
            <IconButton sx={{ color: grey[50] }}>
              <SearchIcon />
            </IconButton>
            <IconButton sx={{ color: grey[50] }}>
              <NotificationsRoundedIcon />
            </IconButton>
          </div>
        </Box>

        <img
          className="nav_avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
        />
      </div>
    </div>
  );
};
export default Nav;
