import React from "react";
import Box from "@mui/material/Box";
import { Paper } from "@mui/material";
import { Button } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
import sampleVideo from "../pictures/sampleVideo.mp4";

export const COLORS = {
  primary: "#482884", // purple
  secondary: "#F9F871", // yellow
};

const Questions = () => {
  const navigate=useNavigate();
  return (
    <Paper
      sx={{
        width: "100%",
        height: "100vh",
        backgroundColor: "black",
        backgroundSize: "cover",
        borderRadius: "0",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        height="50%"
        width="100%"
        sx={{
          backgroundColor: "#10091D",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Trispace",
              color: COLORS.secondary,
              backgroundColor: "#004C2E30",
              padding: "20px",
              fontWeight: "normal",
              fontSize: "calc(0.2rem + 2vw)",
              borderLeft: "5px solid #004C2E",
            }}
          >
            Enjoy the premium quality of our services!
          </Typography>
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
            
            onClick={() => navigate("/register")} > 
            Sign Up
          </Button>
        </Box>
        <ReactPlayer url={sampleVideo} playing muted loop height="100%" />
      </Box>
      <Box
        height="50%"
        width="100%"
        sx={{
          backgroundColor: "black",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            height: "10%",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Trispace",
              color: COLORS.secondary,
              fontWeight: "normal",
              fontSize: "calc(0.2rem + 2vw)",
            }}
          >
            FAQ's
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "80%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Accordion
            sx={{
              width: "60%",
              backgroundColor: COLORS.secondary,
              color: COLORS.primary,
              marginTop: "10px",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Question 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Response</Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            sx={{
              width: "60%",
              backgroundColor: COLORS.secondary,
              color: COLORS.primary,
              marginTop: "10px",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Question 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Response</Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            sx={{
              width: "60%",
              backgroundColor: COLORS.secondary,
              color: COLORS.primary,
              marginTop: "10px",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Question 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Response</Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
    </Paper>
  );
};

export default Questions;
