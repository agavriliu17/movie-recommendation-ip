import React from "react";

import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import { useParams } from "react-router-dom";

import requests from "../resources/requests";
import axios from "axios";

const Movie = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = React.useState({});

  React.useEffect(() => {
    (async function () {
      try {
        const movieData = await axios
          .get(requests.fetchMovie(movieId))
          .then((res) => res.data);

        setMovie(movieData);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  console.log(movie);
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
        {/* //TODO: */}
      </Container>
    </Paper>
  );
};

export default Movie;
