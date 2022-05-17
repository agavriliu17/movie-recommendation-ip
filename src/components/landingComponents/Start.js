import React from "react";
import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/system";
import backgroundImage from "../../resources/images/default_1920x1080.png";

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
          // border: "1px solid white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "30px", sm: "30px", md: "60px", lg: "60px" },
              marginTop: "10%",
            }}
          >
            Movie Streaming Website
          </Typography>
          <Typography sx={{ marginTop: "5%" }}>
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
            onClick={() => navigate("/Login")}
          >
            Login
          </Button>
          <Button
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
            onClick={() => navigate("/Register")}
          >
            Register
          </Button>
        </Box>
        <KeyboardArrowDownSharpIcon
          fontSize="large"
          sx={{
            color: theme.palette.secondary.main,
            marginTop: "20px",
          }}
          onClick={scrollToBottom}
        />
      </Box>
    </Paper>
  );
};

export default Start;
