import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

import Carousel from "react-multi-carousel";
import MovieCard from "./MovieCard";

const carouselConfig = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 10,
  },
  desktop_XL: {
    breakpoint: { max: 3000, min: 2500 },
    items: 9,
  },
  desktop_ML: {
    breakpoint: { max: 2500, min: 2000 },
    items: 8,
  },
  desktop: {
    breakpoint: { max: 2000, min: 1600 },
    items: 7,
  },
  tablet: {
    breakpoint: { max: 1600, min: 1400 },
    items: 6,
  },
  tablet_SM: {
    breakpoint: { max: 1400, min: 1300 },
    items: 5,
  },
  mobile: {
    breakpoint: { max: 1300, min: 1000 },
    items: 4,
  },
  smallMobile:
  {
    breakpoint: { max: 1000, min: 500 },
    items: 3,
  }
  ,
  extraSmallMobile:
  {
    breakpoint: { max: 500, min: 0 },
    items: 2,
  }
};

const containedConfig = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 8,
  },
  desktop_XL: {
    breakpoint: { max: 3000, min: 2500 },
    items: 5,
  },
  desktop_ML: {
    breakpoint: { max: 2500, min: 2000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 2000, min: 1600 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1600, min: 1400 },
    items: 6,
  },
  tablet_SM: {
    breakpoint: { max: 1400, min: 1000 },
    items: 5,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 4,
  },
};

const useStyles = makeStyles({
  carouselContainer: {
    height: "500px",
    zIndex: 0,
    width: "100%",
  },
});

const MoviesCarousel = ({ movieList, genreTitle, contained }) => {
  const classes = useStyles();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "95%" }}>
      <Typography color="#F9F871" variant="h3">
        {genreTitle}
      </Typography>
      <Carousel
        responsive={contained ? containedConfig : carouselConfig}
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
