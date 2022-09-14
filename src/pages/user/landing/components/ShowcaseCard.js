import React from "react";

import { IMAGES_URL } from "../../../../resources/constants";
import Box from "@mui/material/Box";
import { Img } from "react-image";
import { motion } from "framer-motion";
import LoadingMovieCard from "../../../../components/loadingElements/LoadingMovieCard";

const ShowcaseCard = ({ movie, goToMovie }) => {
  const [hover, setHover] = React.useState(false);

  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);

  if (!movie?.posterPath) return null;

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
      <Img
        src={`${IMAGES_URL}${movie?.posterPath || movie?.backdropPath}`}
        alt={movie.title}
        style={{
          display: "block",
          maxWidth: "400px",
          maxHeight: "500px",
          width: "auto",
          height: "auto",
          boxShadow: hover
            ? "rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px"
            : "none",
        }}
        loader={<LoadingMovieCard />}
      />
    </Box>
  );
};

export default ShowcaseCard;
