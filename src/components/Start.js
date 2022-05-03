import React from "react";
import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import { useNavigate } from "react-router-dom";
import bg1 from "../pictures/bg1.jpg";
import { motion } from "framer-motion";

import "../css/Start.css";
import { InfoOutlined } from "@mui/icons-material";

export const COLORS = {
  primary: "#482884", // purple
  secondary: "#F9F871", // yellow
};

const scrollToBottom = () => {
  window.scrollTo({
    top: document.documentElement.scrollHeight / 3,
    behavior: "smooth",
  });
};

const Start = () => {
  const navigate = useNavigate();
  return (
    <Paper
      sx={{
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${bg1})`,
        backgroundSize: "cover",
        borderRadius: "0",
      }}
      component={motion.div}
      whileHover={{
        transition: { duration: 0.1 },
       
      }}
      initial={{ opacity: 0, y: "-10vw" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.1, type: "spring", stiffness:110 }}
    
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
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 1.5, type: "tween" }}
        >
          <Typography
            sx={{
              fontFamily: "Trispace",
              color: COLORS.secondary,
              fontWeight: "normal",
              fontSize: "calc(0.2rem + 2vw)",
            }}
          >
            Movie Streaming Website
          </Typography>
        </motion.div>
      </Box>
      <motion.div
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        transition={{ delay: 1, type: "tween" }}
      >
        <Box
          className="mainBox"
          sx={{
            top: "0",
            height: "95vh",
            borderBottomLeftRadius: "50px",
            backgroundColor: "#48288450",
            marginLeft: "auto",
            marginRight: "auto",
            display: "flex",
            justifyContent: "flex-end",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* <motion.div
            className="ball"
            animate={{ 
              x: [-20, 20],
              y: [0, 30], 
              transition: {
                x: {
                  yoyo: Infinity,
                  duration: 3
                },
                y: {
                  yoyo: Infinity,
                  duration: 1.5,
                  ease: "easeOut"
                }
              }
            }}
            transition={{ delay: 1.5, type: "spring" }}
          ></motion.div> */}
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
            Get ready for a good time! Watch a wide variety of movies we
            prepared only for you!
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
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, type: "spring" }}
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
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, type: "spring" }}
            >
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
            </motion.div>
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
      </motion.div>
    </Paper>
  );
};

export default Start;
