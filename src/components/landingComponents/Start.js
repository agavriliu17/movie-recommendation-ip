import React from "react";

import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";

import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/system";
import backgroundImage from "../../resources/images/default_1920x1080.png";
import { motion } from "framer-motion";

const scrollToBottom = () => {
  window.scrollTo({
    top: (document.documentElement.scrollHeight + 10) / 3,
    behavior: "smooth",
  });
};

const Start = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <Paper
      sx={{
        width: "100%",
        height: { xs: "150vh", sm: "150vh", md: "150vh", lg: "100vh" },
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        borderRadius: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        zIndex: "-1",
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
      ></Box>

      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Box
          component={motion.div}
          initial={{
            x: "-200vh",
          }}
          animate={{
            x: 0,
          }}
          transition={{
            delay: 3,
            duration: 1,
          }}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            component={motion.div}
            initial={{
              scale: 1.1,
            }}
            animate={{
              scale: 0.9,
            }}
            transition={{
              delay: 2,
              duration: 2,
              yoyo: Infinity,
            }}
            sx={{
              fontSize: { xs: "30px", sm: "30px", md: "60px", lg: "60px" },
              marginTop: "10%",
            }}
          >
            Movie Streaming Website
          </Typography>
          <Typography
            component={motion.div}
            initial={{
              scale: 0.9,
            }}
            animate={{
              scale: 1.1,
            }}
            transition={{
              delay: 3,
              duration: 2,
              yoyo: Infinity,
            }}
            sx={{ marginTop: "5%" }}
          >
            An interesting project about movies{" "}
          </Typography>
        </Box>

        <Box
          sx={{
            width: "60%",
            display: "flex",
            flexDirection: { md: "row", xs: "column", sm: "column" },
            alignItems: "center",
            justifyContent: "space-evenly",
            marginTop: "20px",
          }}
        >
          <Button
            component={motion.div}
            initial={{
              scale: 0,
            }}
            animate={{
              visibility: "visible",
              scale: 1,
            }}
            transition={{
              delay: 2,
              duration: 1,
            }}
            variant="outlined"
            sx={{
              borderRadius: "30px",
              color: theme.palette.text.primary,
              borderColor: theme.palette.primary.main,
              backgroundColor: theme.palette.primary.main,
              height: "50px",
              width: "300px",
              marginLeft: "3%",
              marginRight: "3%",
              marginTop: "5%",
              "&:hover": {
                transform: "skew(20deg)",
              },
            }}
            onClick={() => navigate("/IP-Movie-streaming-website/Login")}
          >
            Login
          </Button>
          <Button
            component={motion.div}
            initial={{
              scale: 0,
            }}
            animate={{
              visibility: "visible",
              scale: 1,
            }}
            transition={{
              delay: 2,
              duration: 1,
            }}
            variant="outlined"
            sx={{
              borderRadius: "30px",
              color: theme.palette.text.primary,
              borderColor: theme.palette.primary.main,
              backgroundColor: theme.palette.primary.main,
              height: "50px",
              width: "300px",
              marginLeft: "3%",
              marginRight: "3%",
              marginTop: "5%",
            }}
            onClick={() => navigate("/IP-Movie-streaming-website/Register")}
          >
            Register
          </Button>
        </Box>
        <Box
          sx={{
            "&:hover": {
              transform: "rotate(45deg)",
            },
          }}
          component={motion.div}
          initial={{
            rotate: 360,
          }}
          animate={{
            rotate: 0,
          }}
          transition={{
            duration: 1,
            yoyo: 3.5,
          }}
        >
          <KeyboardArrowDownSharpIcon
            fontSize="large"
            sx={{
              color: theme.palette.secondary.main,
              marginTop: "20px",
            }}
            onClick={scrollToBottom}
          />
        </Box>
      </Box>
    </Paper>
  );
};

export default Start;
