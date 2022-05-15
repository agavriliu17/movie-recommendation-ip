import React from "react";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/system";
import { Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  main: {
    width: "250px",
    display: "flex",
    flexDirection: "column",
    margin: "0px",
    padding: "0px",
    transitionDuration: "500ms",
  },
  info: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  photo: {
    width: "200px",
  },
  text: {
    textAlign: "center",
  },
});

const Hover = ({ titlu, durata, rate, visible }, props) => {
  const [showhover, hovershow] = useState(true);

  const closezoom = (e) => {
    hovershow(false);
    props.onMouseLeave(false);
  };

  const openzoom = (e) => {
    hovershow(true);
    props.onMouseEnter(true);
  };
  useEffect(() => {
    hovershow(props.showhover);
  }, [props.showhover]);

  const classes = useStyles();
  return (
    <Box
      className={classes.main}
      style={{
        visibility: visible ? "visible" : "hidden",
        opacity: visible ? "1" : "0", //aici
        //  display: visible ? "block" : "contents"
      }}
      onMouseLeave={closezoom}
      onMouseEnter={openzoom}
    >
      <Box>
        <Box className={classes.title}>
          <Typography>{titlu}</Typography>
        </Box>
        <Box className={classes.info}>
          <Typography className={classes.text}>{durata}</Typography>
          <Typography className={classes.text}>{rate}</Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default Hover;
