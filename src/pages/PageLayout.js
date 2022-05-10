import React from "react";

import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Nav from "../components/nav/Nav";

const PageLayout = ({ children }) => {
  return (
    <Paper
      sx={{
        width: "100%",
        minHeight: "100vh",
        borderRadius: "0px",
        overflowX: "hidden",
        display: "flex",
        backgroundColor: "#10091D"
      }}
    >
      <Nav />
      <Container
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        {children}
      </Container>
    </Paper>
  );
};

export default PageLayout;
