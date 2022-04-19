import React from "react";
import { Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";

import bg2 from "../pictures/bg2.jpg";
import r1 from "../pictures/recom1.jpg";
import r2 from "../pictures/recom2.jpg";
import r3 from "../pictures/recom3.jpg";
import "../css/Mail.css";

const Mail = () => {
  return (
    <Paper
      sx={{
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${bg2})`,
        backgroundSize: "cover",
        borderRadius: "0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Trispace",
          color: "#F9F871",
          fontWeight: "bolder",
          fontSize: "20px",
          marginTop: "8vh",
        }}
      >
        All the movies you love! And more.
      </Typography>

      <Box className="movieList">
        <img src={r1} alt="recom2" />
        <img src={r2} alt="recom2" />
        <img src={r3} alt="recom3" />
      </Box>

      <Box className="email">
        <TextField
          id="email"
          variant="outlined"
          label="Email"
        ></TextField>
      </Box>
    </Paper>
  );
};

export default Mail;
