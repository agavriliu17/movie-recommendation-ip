import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {
  GODFATHER,
  DUMB_AND_DUMBER,
  TAXI_DRIVER,
} from "../../../../resources/constants";

import MovieSection from "./MovieSection";
import Fade from "react-reveal/Fade";
import { useNavigate } from "react-router-dom";
import UserContext from "../../../../resources/context/UserContext";

const About = () => {
  const { isAuthenticated } = React.useContext(UserContext);
  const movies = [GODFATHER, DUMB_AND_DUMBER, TAXI_DRIVER];

  const navigate = useNavigate();

  const goToMovie = (id) => {
    if (isAuthenticated) {
      navigate(`/watch/${id}`);
    } else {
      navigate(`/login`);
    }
  };

  const goToHome = () => {
    navigate(`/home`);
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography color="#fff" variant="h2" mb="30px">
        Discover movies you'll truly enjoy
      </Typography>
      {movies.map((movie, index) => (
        <MovieSection
          movie={movie}
          key={`${movie.id}-${index}`}
          goToMovie={goToMovie}
        />
      ))}
      <Fade>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginBottom: "10vh",
          }}
        >
          <Button
            variant="contained"
            sx={{
              height: "fit-content",
              backgroundImage:
                "linear-gradient(90deg, rgb(71, 16, 193), rgb(120, 87, 255) 92%, rgb(129, 155, 253) 100%)",
              color: "#fff",
              borderRadius: "25px",
              backgroundColor: "transparent",
              textTransform: "none",
              padding: "5px 20px",

              "&:hover": {
                transition: "ease",
                backgroundColor: "rgb(91,28,230)",
                backgroundImage: "none",
              },
            }}
            onClick={goToHome}
          >
            <Typography fontSize="20px" ml="5px">
              Discover more movies
            </Typography>
          </Button>
        </Box>
      </Fade>
    </Container>
  );
};

export default About;
