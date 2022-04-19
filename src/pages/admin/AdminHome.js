import React from "react";

import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import MoviesTable from "../../components/MoviesTable";

const AdminHome = () => {
  return (
    <Paper
      sx={{
        width: "100%",
        minHeight: "100vh",
        borderRadius: "0px",
        overflowX: "hidden",
        display: "flex",
      }}
    >
      <Container
        sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <MoviesTable />
      </Container>
    </Paper>
  );
};

export default AdminHome;
