import React from "react";
import { colors, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";

import bg1 from "../pictures/bg1.jpg";
import logo from "../pictures/logo.png";

export const COLORS = {
  primary: "#482884", // purple
  secondary: "#F9F871", // yellow
};

const scrollToBottom = () => {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth',
  });
};


const Start = () => {
  return (
    <Paper
      sx={{
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${bg1})`,
        backgroundSize: "cover",
        borderRadius: "0",
      }}
    >
      <Typography
        sx={{
          position: "absolute",
          zIndex: "1",
          left: "15%",
          top: "2vh",
          fontFamily: "Trispace",
          color: COLORS.secondary,
          opacitiy: "1",
          fontWeight: "normal",
          fontSize: "28px",
        }}
      >
        <Typography
          display="inline"
          sx={{
            fontFamily: "Trispace",
            color: COLORS.secondary,
            opacitiy: "1",
            fontWeight: "bolder",
            fontSize: "40px",
          }}
        >
          <img src={logo} width="40px" alt="Logo" />
          Movie&nbsp;
        </Typography>
        Streaming Website
      </Typography>

      <Box
        sx={{
          top: "0",
          maxWidth: "30%",
          height: "100vh",
          backgroundColor: "#48288450",
          marginLeft: "auto",
          marginRight: "auto",
          display: "flex",
          justifyContent: "flex-end",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Trispace",
            color: COLORS.secondary,
            fontWeight: "normal",
            fontSize: "20px",
            margin: "40px",
          }}
        >
          Get ready for a good time! Watch a wide variety of movies we prepared
          only for you!
        </Typography>
        <Box
          sx={{
            backgroundColor: "#004C2E",
            height: "2px",
            width: "70%",
            marginTop: "-25px",
          }}
        ></Box>
        <Box
          sx={{
            width: "70%",
            marginTop: "50px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Button
            variant="outlined"
            sx={{
              backgroundColor: COLORS.primary,
              color: COLORS.secondary,
              borderColor: COLORS.secondary,
              fontFamily: "Trispace",
              fontWeight: "bold",
              fontSize: "12px",
              "&:hover": {
                backgroundColor: COLORS.secondary,
                color: COLORS.primary,
                borderColor: COLORS.secondary,
              },
            }}
          >
            Log In
          </Button>
          <Button
            variant="outlined"
            sx={{
              backgroundColor: COLORS.secondary,
              color: COLORS.primary,
              borderColor: COLORS.secondary,
              fontFamily: "Trispace",
              fontWeight: "bold",
              fontSize: "12px",
              "&:hover": {
                backgroundColor: COLORS.primary,
                color: COLORS.secondary,
                borderColor: COLORS.secondary,
              },
            }}
          >
            Sign Up
          </Button>
        </Box>
        <Box
          sx=
          {{
            height: "200px",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "center",
          }}>
          <KeyboardArrowDownSharpIcon
            fontSize="large"
            sx={{
              color: COLORS.secondary,
            }}
            onClick={scrollToBottom}
          />
        </Box>
      </Box>
    </Paper>
  );
};

export default Start;
