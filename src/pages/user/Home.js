import React from "react";
import "react-multi-carousel/lib/styles.css";
import Box from "@mui/material/Box";
import Banner from "../../components/Banner";
import Nav from "../../components/nav/Nav";
import LoadingBanner from "../../components/loadingElements/LoadingBanner";
import MoviesCarousel from "../../components/carousel/MoviesCarousel";
import UserContext from "../../resources/context/UserContext";
import { makeStyles } from "@mui/styles";
import { useSnackbar } from "notistack";

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
    height: "100%",
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
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
  const { userData } = React.useContext(UserContext);
  const [loading, setLoading] = React.useState(true);
  const { enqueueSnackbar } = useSnackbar();

  React.useEffect(() => {
    (async function () {
      try {
        if (userData) {
          const movieData = await apiHelper.getPredictions(3);
          setData(movieData.movies);
          setLoading(false);
        }
      } catch (e) {
        enqueueSnackbar("Failed to fetch recommendations!", {
          variant: "error",
        });

        try {
          const movieData = await apiHelper.getBannerMovie();
          setData(movieData);
          setLoading(false);
        } catch (e) {
          enqueueSnackbar("Failed to fetch movies!", {
            variant: "error",
          });
          setLoading(false);
        }
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData]);

  React.useEffect(() => {
    (async function () {
      try {
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
      } catch (e) {
        enqueueSnackbar("Failed to fetch movies!", { variant: "error" });
        setLoading(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const bannerMovie = data[Math.floor(Math.random() * data.length)];
  const topRated = topRatedData.slice(0, 10);
  const horrorMovies = horrorData.slice(0, 10);
  const actionMovies = actionData.slice(0, 10);
  const documentariesMovies = documentariesData.slice(0, 10);

  const classes = useStyles();
  return (
    <Box className={classes.body}>
      <Nav />
      {loading ? <LoadingBanner /> : <Banner movie={bannerMovie} />}

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
