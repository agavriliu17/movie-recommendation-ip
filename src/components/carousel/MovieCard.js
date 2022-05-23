import React from "react";

import { IMAGES_URL } from "../../resources/constants";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const MovieCard = ({ movie }) => {
  const [hover, setHover] = React.useState(false);
  const navigate = useNavigate();

  const goToMovie = () => {
    navigate(`/IP-Movie-streaming-website/watch/${movie.id}`);
  };

  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);

  return (
    <Box
      onClick={goToMovie}
      component={motion.div}
      whileHover={{
        scale: 1.3,
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
          maxWidth: "80%",
          maxHeight: "auto",
          width: "auto",
          height: "auto",
          boxShadow: hover
            ? "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px"
            : "none",
        }}
        loading="lazy"
      />
    </Box>
  );
};

export default MovieCard;
