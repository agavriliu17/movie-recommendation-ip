import React from "react";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { IMAGES_URL } from "../resources/constants";
import { useNavigate } from "react-router-dom";
const MovieListItem = ({ movie }) => {
  const navigate = useNavigate();

  const goToMovie = () => {
    navigate(`/watch/${movie.id}`);
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        margin: "20px 0px",
      }}
      onClick={goToMovie}
    >
      <img
        src={`${IMAGES_URL}${movie?.posterPath || movie?.backdropPath}`}
        alt="movie_poster"
        height="250px"
        style={{ objectFit: "scale-down", borderRadius: "15px" }}
      />
      <Box sx={{ marginLeft: "15px", maxWidth: "75%" }}>
        <Typography variant="h4">{movie.name}</Typography>
        <Typography fontSize="18px" mt={3}>
          {movie.description}
        </Typography>
      </Box>
    </Box>
  );
};

export default MovieListItem;
