import React, { Fragment } from "react";

import PageLayout from "../PageLayout";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ListComments from "../../components/ListComments";
import RatingDisplay from "../../components/RatingDisplay";
import CommentInput from "../../components/CommentInput";
import MoviesCarousel from "../../components/carousel/MoviesCarousel";

import requests from "../../resources/requests";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import axios from "axios";
import LoadingMovieCard from "../../components/loadingElements/LoadingMovieCard";

const Movie = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = React.useState({});
  const [topRatedData, setDataTop] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    // window.scrollTo(0);
    (async function () {
      try {
        const movieData = await axios
          .get(requests.fetchMovie(movieId))
          .then((res) => res.data);
        setMovie(movieData);

        const topMovieData = await axios
          .get(requests.fetchTopRated)
          .then((res) => res.data.results);

        const toptimedData = await new Promise((resolve) => {
          setTimeout(() => resolve(topMovieData), 1000);
        });
        setDataTop(toptimedData);
        setLoading(false);
      } catch (e) {
        console.error(e);
      }
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const topRated = topRatedData.slice(0, 10);

  return (
    <PageLayout>
      <Box sx={{ width: "100%" }}>
        <Typography mb="20px" mt="10vh" textAlign="center" variant="h2">
          {movie.title}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          height: "50%",
          aspectRatio: "16/9",
        }}
      >
        <ReactPlayer
          controls
          url="https://www.youtube.com/watch?v=IE8HIsIrq4o&ab_channel=Netflix"
          width="100%"
          height="100%"
        />
        {/* <img
          src={`${IMAGES_URL}${movie?.poster_path || movie?.backdrop_path}`}
          alt="movie_poster"
          width="100%"
          height="100%"
        /> */}
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            padding: "20px",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
            <Typography
              ml="20px"
              fontSize="15px"
              mt={1}
              textAlign="left"
              color="gray"
            >
              Release date:
            </Typography>
            <Typography ml="20px" fontSize="15px" mt={1} textAlign="left">
              {movie.release_date}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
            <Typography
              ml="20px"
              fontSize="15px"
              mt={1}
              textAlign="left"
              color="gray"
            >
              Runtime:
            </Typography>
            <Typography ml="20px" fontSize="15px" mt={1} textAlign="left">
              {`${movie.runtime} min`}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
            <Typography
              ml="20px"
              fontSize="15px"
              mt={1}
              textAlign="left"
              color="gray"
            >
              Genres:
            </Typography>
            {movie.genres && (
              <Typography ml="20px" fontSize="15px" mt={1} textAlign="left">
                {movie.genres.map((genre, ind) => {
                  if (ind === movie.genres.length - 2) {
                    return (
                      <Fragment key={genre.id}>{` ${genre.name}`}</Fragment>
                    );
                  }
                  return movie.genres.length === ind + 1 ? (
                    <Fragment key={genre.id}>{` & ${genre.name}`}</Fragment>
                  ) : (
                    <Fragment key={genre.id}>{`${genre.name}, `}</Fragment>
                  );
                })}
              </Typography>
            )}
          </Box>
          <Box sx={{ width: "100%" }}>
            <Divider sx={{ marginBottom: "15px" }} />
            <RatingDisplay
              voteAverage={movie?.vote_average}
              voteCount={movie?.vote_count}
            />
          </Box>
        </Box>
        <Typography ml="20px" fontSize="20px" mt={5} textAlign="center">
          {movie.overview}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <Typography ml="20px" fontSize="25px" mt={5} textAlign="left">
          Recommended
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            padding: "10px",
            flexWrap: "wrap",
            width: "100%",
            justifyContent: "center",
          }}
        ></Box>
      </Box>
      <Box sx={{ width: "100%", height: "500px" }}>
        {loading ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            {[...Array(4)].map((el, ind) => (
              <LoadingMovieCard />
            ))}
          </Box>
        ) : (
          // TODO: Fix layout
          <MoviesCarousel movieList={topRated} genreTitle="Recommended" />
        )}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <Typography ml="20px" fontSize="25px" mt={5} textAlign="left">
          Comments
        </Typography>
        <CommentInput />
        <ListComments />
      </Box>
    </PageLayout>
  );
};

export default Movie;
