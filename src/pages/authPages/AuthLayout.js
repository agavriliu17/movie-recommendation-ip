import React from "react";

import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import netflixBackground from "../../resources/images/netflix2.jpg";

const useStyles = makeStyles({
  backdrop: {
    width: "100vw",
    height: "100vh",
    backgroundSize: "cover",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundImage: `url(${netflixBackground}) !important`,
  },
  mainCard: {
    height: "fit-content",
    padding: "20px",
    backgroundColor: "#48288475 !important",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "80%",
  },
});

const AuthLayout = ({ children }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.backdrop} data-testid="Auth Layout">
      <Container maxWidth="sm">
        <Fade in timeout={750}>
          <Card className={classes.mainCard}>
            <Box className={classes.contentContainer}>{children}</Box>
          </Card>
        </Fade>
      </Container>
    </Paper>
  );
};

export default AuthLayout;
