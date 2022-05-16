import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

import Carousel from "react-multi-carousel";
import MovieCard from "./MovieCard";

const carouselConfig = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 8,
  },
  desktop_XL: {
    breakpoint: { max: 3000, min: 2500 },
    items: 7,
  },
  desktop_ML: {
    breakpoint: { max: 2500, min: 2000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 2000, min: 1600 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1600, min: 1200 },
    items: 4,
  },
  tablet_SM: {
    breakpoint: { max: 1200, min: 800 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const useStyles = makeStyles({
  carouselContainer: {
    padding: "0px 20px 10px 40px",
    height: "500px",
    zIndex: 0,
    width: "100%",
  },
});

const MoviesCarousel = ({ movieList, genreTitle }) => {
  const classes = useStyles();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "90%" }}>
      <Typography color="#F9F871" variant="h3">
        {genreTitle}
      </Typography>
      <Carousel
        responsive={carouselConfig}
        className={classes.carouselContainer}
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={10000}
      >
        {movieList.map((movie, index) => {
          return <MovieCard movie={movie} key={`${movie.id}-${index}`} />;
        })}
      </Carousel>
    </Box>
  );
};

export default MoviesCarousel;
