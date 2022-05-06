import React from "react";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { IMAGES_URL } from "../resources/constants";

const MovieListItem = ({ movie }) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        margin: "20px 0px",
      }}
    >
      <img
        src={`${IMAGES_URL}${movie?.poster_path || movie?.backdrop_path}`}
        alt="movie_poster"
        height="250px"
        style={{ objectFit: "scale-down", borderRadius: "15px" }}
      />
      <Box sx={{ marginLeft: "15px", maxWidth: "75%" }}>
        <Typography variant="h4">{movie.title}</Typography>
        <Typography fontSize="18px" mt={3}>
          {movie.overview}
        </Typography>
      </Box>
    </Box>
  );
};

export default MovieListItem;
