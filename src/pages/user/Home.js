import React from "react";
import "react-multi-carousel/lib/styles.css";
import Box from "@mui/material/Box";
import Banner from "../../components/Banner";
import Nav from "../../components/nav/Nav";
import LoadingBanner from "../../components/loadingElements/LoadingBanner";
import MoviesCarousel from "../../components/carousel/MoviesCarousel";
import { makeStyles } from "@mui/styles";

import { MOVIE_GENRES } from "../../resources/constants";
import * as apiHelper from "../../resources/helpers/movieApiHelper";

import backgroundImage from "../../resources/images/default_1920x1080.png";

const useStyles = makeStyles({
  most: {
    display: "flex",
    height: "25%",
    paddingLeft: "50px",
    paddingRight: "auto",
    paddingBottom: "20px",
    zIndex: "0",
    marginTop: "100px",
  },
  component: {
    background: "none",
    border: "none",
    padding: "0",
    font: "inherit",
    cursor: "pointer",
    outline: "inherit",
  },
  body: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

const Home = () => {
  // const [data, setData] = React.useState([]);
  const [topRatedData, setDataTop] = React.useState([]);
  const [horrorData, setDataHorror] = React.useState([]);
  const [actionData, setDataAction] = React.useState([]);
  const [documentariesData, setDataDocumentaries] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    (async function () {
      try {
        //TODO: Fix prediction
        // const movieData = await apiHelper.getPredictions();
        // setData(movieData);
        // console.log(movieData);

        const topMovieData = await apiHelper.getTopRated();
        setDataTop(topMovieData);

        const horrorMovieData = await apiHelper.getMoviesByGenre(
          MOVIE_GENRES.crime
        );
        setDataHorror(horrorMovieData.movies);

        const actionMovieData = await apiHelper.getMoviesByGenre(
          MOVIE_GENRES.action
        );
        setDataAction(actionMovieData.movies);

        const documentariesMovieData = await apiHelper.getMoviesByGenre(
          MOVIE_GENRES.documentary
        );
        setDataDocumentaries(documentariesMovieData.movies);

        setLoading(false);
      } catch (e) {
        console.error(e);

        setLoading(false);
      }
    })();
  }, []);

  // const bannerMovie = data[Math.floor(Math.random() * data.length)];
  const topRated = topRatedData.slice(0, 10);
  const horrorMovies = horrorData.slice(0, 10);
  const actionMovies = actionData.slice(0, 10);
  const documentariesMovies = documentariesData.slice(0, 10);

  const classes = useStyles();
  return (
    <Box className={classes.body}>
      <Nav />
      {loading ? <LoadingBanner /> : <Banner movie={topRated[0]} />}

      <MoviesCarousel movieList={topRated} loading={loading} />

      <MoviesCarousel
        movieList={horrorMovies}
        genreTitle={MOVIE_GENRES.horror}
        loading={loading}
      />

      <MoviesCarousel
        movieList={actionMovies}
        genreTitle={MOVIE_GENRES.action}
        loading={loading}
      />
      <MoviesCarousel
        movieList={documentariesMovies}
        genreTitle={MOVIE_GENRES.documentary}
        loading={loading}
      />
    </Box>
  );
};

export default Home;
