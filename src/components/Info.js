import React from "react";
import { colors, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";

import bg2 from "../pictures/bg2.jpg";
import logo from "../pictures/logo.png";

const Info = () => {
  return (
    <Paper
      sx={{
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${bg2})`,
        backgroundSize: "cover",
        borderRadius: "0",
      }}>

    </Paper>
  );
};

export default Info;
