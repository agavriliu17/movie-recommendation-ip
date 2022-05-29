import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";

import Carousel from "react-multi-carousel";
import MovieCard from "./MovieCard";
import LoadingMovieCard from "../loadingElements/LoadingMovieCard";

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
    breakpoint: { max: 1600, min: 1200 },
    items: 2,
  },
  tablet_SM: {
    breakpoint: { max: 1200, min: 800 },
    items: 2,
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

const capitalizeFirstLetter = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();

const MoviesCarousel = ({ movieList, genreTitle, contained, loading }) => {
  const navigate = useNavigate();
  const classes = useStyles();

  const handleViewMore = () => navigate(`/search/${genreTitle}`);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "90%" }}>
      {genreTitle && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography color="#F9F871" variant="h3">
            {capitalizeFirstLetter(genreTitle)}
          </Typography>
          {genreTitle !== "Recommended" && (
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
                "&:hover": {
                  transition: "ease",
                  backgroundColor: "rgb(91,28,230)",
                  backgroundImage: "none",
                },
              }}
              onClick={handleViewMore}
            >
              View more
            </Button>
          )}
        </Box>
      )}
      <Carousel
        responsive={contained ? containedConfig : carouselConfig}
        className={classes.carouselContainer}
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={10000}
      >
        {movieList.map((movie, index) => {
          return loading ? (
            <LoadingMovieCard />
          ) : (
            <MovieCard movie={movie} key={`${movie.id}-${index}`} />
          );
        })}
      </Carousel>
    </Box>
  );
};

export default MoviesCarousel;
