import React from "react";

import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

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
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h1">404</Typography>
        <Typography fontFamily="monospace" fontWeight="400" mt={2}>
          Click{" "}
          <Link
            onClick={() => navigate(-1)}
            sx={{
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            here
          </Link>{" "}
          to go back.
        </Typography>
      </Container>
    </Paper>
  );
};

export default NotFound;
