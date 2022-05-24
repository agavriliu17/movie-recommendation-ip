import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import backgroundImage from "../../resources/images/default_1920x1080.png";

export const COLORS = {
  primary: "#482884", // purple
  secondary: "#F9F871", // yellow
};

const Questions = () => {
  return (
    <Paper
      sx={{
        width: "100%",
        height: "auto",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        borderRadius: "0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      <Box
        width="100%"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            marginTop: "5%",
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
            More to know:
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "5%",
        }}
      >
        <Accordion sx={{ width: "60%", height: "100%", marginBottom: "3%" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ marginTop: "15px", marginBottom: "15px" }}>
              What is Movie Streaming Site:
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ marginBottom: "10px" }}>
              Movie Streaming Site is a project made by A6
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ width: "60%", height: "100%", marginBottom: "3%" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ marginTop: "15px", marginBottom: "15px" }}>
              What you can find on this website:
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ marginBottom: "10px" }}>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ width: "60%", height: "100%", marginBottom: "3%" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ marginTop: "15px", marginBottom: "15px" }}>
              Team:
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ marginBottom: "10px" }}>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Paper>
  );
};

export default Questions;
