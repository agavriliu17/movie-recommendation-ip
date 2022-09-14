import React from "react";

import { IMAGES_URL } from "../../resources/constants";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { Img } from "react-image";
import { motion } from "framer-motion";
import LoadingMovieCard from "../loadingElements/LoadingMovieCard";
import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const goToMovie = () => {
    navigate(`/watch/${movie.id}`);
  };

  if (!movie?.posterPath) return null;

  return (
    <Box
      onClick={goToMovie}
      component={motion.div}
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.3 },
      }}
    >
      <Img
        src={`${IMAGES_URL}${movie?.posterPath || movie?.backdropPath}`}
        alt={movie.title}
        className="img"
        //TODO: Add fallback image
        loader={<LoadingMovieCard />}
      />
    </Box>
  );
};

export default MovieCard;
