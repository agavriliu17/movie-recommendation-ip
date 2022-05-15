import React from "react";
import Start from "../components/landingComponents/Start";
import Mail from "../components/landingComponents/Mail";
import Questions from "../components/landingComponents/Questions";
import { Paper } from "@mui/material";

const Landing = () => {
  return (
  <Paper>
    <Start />
    <Mail />
    <Questions />
  </Paper>
  );
}

export default Landing;
