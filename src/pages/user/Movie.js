import React, { Fragment } from "react";

import PageLayout from "../PageLayout";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import ListComments from "../../components/ListComments";
import RatingDisplay from "../../components/RatingDisplay";

import requests from "../../resources/requests";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import axios from "axios";

const Movie = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = React.useState({});

  React.useEffect(() => {
    (async function () {
      try {
        const movieData = await axios
          .get(requests.fetchMovie(movieId))
          .then((res) => res.data);

        setMovie(movieData);
      } catch (e) {
        console.error(e);
      }
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageLayout>
      <Box sx={{ width: "100%" }}>
        <Typography mb="20px" mt="10vh" textAlign="left" variant="h2">
          {movie.title}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          aspectRatio: "16/9",
        }}
      >
        <ReactPlayer
          controls
          url="https://www.youtube.com/watch?v=IE8HIsIrq4o&ab_channel=Netflix"
          width="100%"
          height="100%"
        />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
        <Typography ml="20px" fontSize="20px" mt={5} textAlign="left">
          {movie.overview}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
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
              Cast:
            </Typography>
            <Typography ml="20px" fontSize="15px" mt={1} textAlign="left">
              Ryan Reynolds, Mark Ruffalo, Jennifer Garner, more
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
        </Box>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Divider sx={{ marginBottom: "15px" }} />
        <RatingDisplay
          voteAverage={movie?.vote_average}
          voteCount={movie?.vote_count}
        />
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
        >
          {[...Array(5)].map((el, ind) => (
            <Box sx={{ marginLeft: "10px", marginRight: "10px" }} key={ind}>
              <Skeleton variant="rectangular" width={210} height={118} />
              <Skeleton width={210} height={40} />
            </Box>
          ))}
        </Box>
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
        <ListComments />
      </Box>
    </PageLayout>
  );
};

export default Movie;
