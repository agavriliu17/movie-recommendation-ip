import React from "react";

import { IMAGES_URL } from "../../resources/constants";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const MovieCard = ({ movie }) => {
  const [hover, setHover] = React.useState(false);
  const navigate = useNavigate();

  const goToMovie = () => {
    navigate(`/watch/${movie.id}`);
  };

  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);

  return (
    <Box
      onClick={goToMovie}
      component={motion.div}
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.3 },
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={`${IMAGES_URL}${movie?.poster_path || movie?.backdrop_path}`}
        alt={movie.title}
        style={{
          display: "block",
          maxWidth: "300px",
          maxHeight: "400px",
          width: "auto",
          height: "auto",
          boxShadow: hover
            ? "rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px"
            : "none",
        }}
        loading="lazy"
      />
    </Box>
  );
};

export default MovieCard;
