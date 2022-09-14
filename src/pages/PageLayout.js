import React from "react";

import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Nav from "../components/nav/Nav";

import backgroundImage from "../resources/images/default_1920x1080.png";

const PageLayout = ({ children }) => {
  return (
    <Paper
      sx={{
        height: "100%",
        width: "100%",
        minHeight: "100vh",
        borderRadius: "0px",
        overflowX: "hidden",
        display: "flex",
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Nav />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {children}
      </Container>
    </Paper>
  );
};

export default PageLayout;
