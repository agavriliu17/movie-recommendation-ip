import React from "react";
import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import { useNavigate } from "react-router-dom";
import bg1 from "../../resources/images/netflix1.jpg";
import { motion } from "framer-motion";
import { useTheme } from "@mui/system";
import { InfoOutlined } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

const scrollToBottom = () => {
  window.scrollTo({
    top: document.documentElement.scrollHeight / 3,
    behavior: "smooth",
  });
};

const useStyles = makeStyles({
  mainBox: {
    width: "30%",
    top: "0",
    height: "90%",
    borderBottomLeftRadius: "50px",
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    border: "1px solid white",
  },
});

const Start = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const classes = useStyles();
  return (
    <Paper
      sx={{
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${bg1})`,
        backgroundSize: "cover",
        // background: "linear-gradient(-45deg, black, #10091D)",
        borderRadius: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        maskImage: "linear-gradient(to right bottom, black, transparent)",
        zIndex: "-1"
      }}
    >
      <Box
        sx={{
          width: "0%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            transformOrigin: "top left",
            transform: "rotate(-90deg)",
            fontSize: "10px",
            marginTop: "50px",
          }}
        >
          About
        </Typography>
        <Typography
          variant="h6"
          sx={{
            transformOrigin: "top left",
            transform: "rotate(-90deg)",
            fontSize: "10px",
            marginTop: "50px",
          }}
        >
          Contact
        </Typography>
      </Box>

      <Box
        sx={{
          width: "100%",
          height: "100%",
          // border: "1px solid white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Box>
          <Typography
            variant="h6"
            sx={{
              transform: "skewX(-20deg)",
              fontSize: "5vw",
            }}
          >
            Movie
          </Typography>
          <Typography
            variant="h6"
            sx={{
              transform: "skewX(20deg)",
              fontSize: "5vw",
            }}
          >
            Streaming Website
          </Typography>
        </Box>
        <Box sx={{
          width: "30%",
          borderLeft: "3px solid",
          padding: "10px",
          borderColor: theme.palette.primary.main
        }}>
          <Typography
            variant="h6"
            sx={{
              fontSize: "20px",
            }}
          >
            Get ready for a good time! Watch a wide variety of movies we
            prepared only for you!
          </Typography>
        </Box>
        <Box
          sx={{
            width: "60%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            marginTop: "20px"
          }}
        >
          <Button
            variant="outlined"
            sx={{
              borderRadius: "50px",
              color: theme.palette.text.primary,
              borderColor: theme.palette.text.primary,
            }}
            onClick={() => navigate("/Register")}
          >
            Sign Up
          </Button>
          <Button
            variant="outlined"
            sx={{
              borderRadius: "50px",
              color: theme.palette.text.primary,
              borderColor: theme.palette.text.primary,
            }}
            onClick={() => navigate("/Login")}
          >
            Sign In
          </Button>
        </Box>
        <KeyboardArrowDownSharpIcon
              fontSize="large"
              sx={{
                color: theme.palette.secondary.main,
                marginTop: "20px"
              }}
              onClick={scrollToBottom}
        />
      </Box>
    </Paper>
  );
};

export default Start;
