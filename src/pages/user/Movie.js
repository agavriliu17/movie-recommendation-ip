import React, { Fragment } from "react";

import PageLayout from "../PageLayout";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ListComments from "../../components/ListComments";
import RatingDisplay from "../../components/ratings/RatingDisplay";
import CommentInput from "../../components/CommentInput";
import Chip from "@mui/material/Chip";

import MoviesCarousel from "../../components/carousel/MoviesCarousel";

import requests from "../../resources/requests";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { IMAGES_URL } from "../../resources/constants";
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
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          marginTop: "10vh",
        }}
      >
        <img
          src={`${IMAGES_URL}${movie?.poster_path || movie?.backdrop_path}`}
          alt={movie.title}
          style={{
            display: "block",
            maxWidth: "400px",
            maxHeight: "600px",
            width: "auto",
            height: "auto",
            borderRadius: "15px",
          }}
        />
        <Box
          sx={{ display: "flex", flexDirection: "column", marginLeft: "20px" }}
        >
          <Typography mb="20px" textAlign="left" variant="h3" fontWeight="600">
            {movie.title}
          </Typography>
          {movie?.genres && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                marginBottom: "20px",
              }}
            >
              {movie.genres.map((genre, index) => (
                <Chip
                  label={genre.name}
                  // variant="outlined"
                  key={`${genre.id}-${index}`}
                  sx={{ margin: "0px 5px" }}
                  clickable
                />
              ))}
            </Box>
          )}
          <Typography fontSize="20px" mt={5} textAlign="left" color="#fff">
            {movie.overview}
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              marginTop: "10px",
            }}
          >
            <Typography fontSize="15px" mt={1} textAlign="left" color="gray">
              Release date:
            </Typography>
            <Typography ml="20px" fontSize="15px" mt={1} textAlign="left">
              {movie.release_date}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
            <Typography fontSize="15px" mt={1} textAlign="left" color="gray">
              Runtime:
            </Typography>
            <Typography ml="20px" fontSize="15px" mt={1} textAlign="left">
              {`${movie.runtime} min`}
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={{ width: "100%", marginTop: "25px" }}>
        <RatingDisplay
          voteAverage={movie?.vote_average}
          voteCount={movie?.vote_count}
        />
      </Box>

      {/* Hardcoded id for test purposes only */}
      {movieId === 238 && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginTop: "25px",
            width: "100%",
            height: "50%",
            aspectRatio: "16/9",
          }}
        >
          <Typography
            mb="20px"
            mt="20px"
            textAlign="left"
            variant="h3"
            fontWeight="600"
          >
            Trailer
          </Typography>
          <ReactPlayer
            controls
            url="https://www.youtube.com/watch?v=UaVTIH8mujA"
            width="100%"
            height="100%"
          />
        </Box>
      )}

      <Box sx={{ width: "100%", height: "500px", marginTop: "30px" }}>
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

      <Divider sx={{ marginTop: "5vh", width: "100%" }} />

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
