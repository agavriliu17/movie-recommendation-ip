import React from "react";
import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import { useNavigate } from "react-router-dom";
import bg1 from "../pictures/bg1.jpg";
import logo from "../pictures/logo.png";
import "../css/Start.css";

export const COLORS = {
  primary: "#482884", // purple
  secondary: "#F9F871", // yellow
};




const scrollToBottom = () => {
  window.scrollTo({
    top: document.documentElement.scrollHeight/3,
    behavior: "smooth",
  });
};




const Start = () => {
  const navigate=useNavigate();
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
      <Box
        className="title"
        sx={{
          position: "absolute",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          zIndex: "1",
          left: "15%",
          top: "2vh",
        }}
      >
        <Typography
          display="inline"
          sx={{
            fontFamily: "Trispace",
            color: COLORS.secondary,
            fontWeight: "bolder",
            fontSize: "calc(1rem + 2vw)",
          }}
        >
          {/* <img src={logo} alt="Logo" 
          sx={{
            width: "10px",
            }}/> */}
          Movie&nbsp;
        </Typography>
        <Typography
          sx={{
            fontFamily: "Trispace",
            color: COLORS.secondary,
            fontWeight: "normal",
            fontSize: "calc(0.2rem + 2vw)",
          }}
        >
          Streaming Website
        </Typography>
      </Box>
      <Box
        className="mainBox"
        sx={{
          top: "0",
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
          className="moto"
          sx={{
            fontFamily: "Trispace",
            color: COLORS.secondary,
            fontWeight: "normal",
            fontSize: "calc(0.4rem + 1vw)",
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
              fontSize: "calc(0.01rem + 1vw)",
              "&:hover": {
                backgroundColor: COLORS.secondary,
                color: COLORS.primary,
                borderColor: COLORS.primary,
              },
            }}
            
            onClick={() => navigate("/Login")}
          >
            Log In
          </Button>
          <Button
            variant="outlined"
            sx={{
              backgroundColor: COLORS.secondary,
              color: COLORS.primary,
              borderColor: COLORS.primary,
              fontFamily: "Trispace",
              fontWeight: "bold",
              fontSize: "calc(0.01rem + 1vw)",
              "&:hover": {
                backgroundColor: COLORS.primary,
                color: COLORS.secondary,
                borderColor: COLORS.secondary,
              },
            }}
            onClick={() => navigate("/Register")}
          >
            Sign Up
          </Button>
        </Box>
        <Box
          sx={{
            height: "200px",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "center",
          }}
        >
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