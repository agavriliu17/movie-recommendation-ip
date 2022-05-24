import React from "react";
import "react-multi-carousel/lib/styles.css";
import Box from "@mui/material/Box";
import Banner from "../../components/Banner";
import Nav from "../../components/nav/Nav";
import LoadingMovieCard from "../../components/loadingElements/LoadingMovieCard";
import LoadingBanner from "../../components/loadingElements/LoadingBanner";
import requests from "../../resources/requests";
import axios from "axios";
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
  const [data, setData] = React.useState([]);
  const [topRatedData, setDataTop] = React.useState([]);
  const [horrorData, setDataHorror] = React.useState([]);
  const [actionData, setDataAction] = React.useState([]);
  const [documentariesData, setDataDocumentaries] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    (async function () {
      try {
        const movieData = await axios
          .get(requests.fetchNetflixOriginals)
          .then((res) => res.data.results);
        setData(movieData);

        const topMovieData = await apiHelper.getTopRated();
        setDataTop(topMovieData);

        const horrorMovieData = await apiHelper.getMoviesByGenre(
          MOVIE_GENRES.horror
        );
        setDataHorror(horrorMovieData);

        const actionMovieData = await apiHelper.getMoviesByGenre(
          MOVIE_GENRES.action
        );
        setDataAction(actionMovieData);

        const documentariesMovieData = await apiHelper.getMoviesByGenre(
          MOVIE_GENRES.crime
        );
        console.log(documentariesMovieData);
        setDataDocumentaries(documentariesMovieData);

        setLoading(false);
      } catch (e) {
        console.error(e);

        setLoading(false);
      }
    })();
  }, []);

  const bannerMovie = data[Math.floor(Math.random() * data.length)];
  const topRated = topRatedData.slice(0, 10);
  const horrormovies = horrorData.slice(0, 10);
  const actionmovies = actionData.slice(0, 10);
  const documentariesmovies = documentariesData.slice(0, 10);

  const classes = useStyles();
  return (
    <Box className={classes.body}>
      <Nav />
      {loading ? <LoadingBanner /> : <Banner movie={bannerMovie} />}

      {loading ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            width: "100%",
            marginTop: "25px",
          }}
        >
          {[...Array(4)].map((el, ind) => (
            <LoadingMovieCard key={`${ind}-top-rated`} />
          ))}
        </Box>
      ) : (
        <MoviesCarousel movieList={topRated} />
      )}

      {loading ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-evenly",
          }}
        >
          {[...Array(4)].map((el, ind) => (
            <LoadingMovieCard key={`${ind}-horror`} />
          ))}
        </Box>
      ) : (
        <MoviesCarousel movieList={horrormovies} genreTitle="Horror" />
      )}

      {loading ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-evenly",
          }}
        >
          {[...Array(4)].map((el, ind) => (
            <LoadingMovieCard key={`${ind}-action`} />
          ))}
        </Box>
      ) : (
        <MoviesCarousel movieList={actionmovies} genreTitle="Action" />
      )}

      {loading ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            width: "100%",
          }}
        >
          {[...Array(4)].map((el, ind) => (
            <LoadingMovieCard key={`${ind}-docs`} />
          ))}
        </Box>
      ) : (
        <MoviesCarousel
          movieList={documentariesmovies}
          genreTitle="Documentaries"
        />
      )}
    </Box>
  );
};

export default Home;
