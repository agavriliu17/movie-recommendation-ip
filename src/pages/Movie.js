import React, { Fragment } from "react";

import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import { useParams } from "react-router-dom";

import requests from "../resources/requests";
import axios from "axios";
import ReactPlayer from "react-player";

import Divider from "@mui/material/Divider";
import Nav from "../components/nav/Nav";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import ListComments from "./ListComments";
import StarIcon from "@mui/icons-material/Star";

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

  console.log(movie);
  return (
    <Paper
      sx={{
        width: "100%",
        minHeight: "100vh",
        borderRadius: "0px",
        overflowX: "hidden",
        display: "flex",
      }}
    >
      <Nav />
      <Container
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Box sx={{ height: "10vh" }} />
        <Box sx={{ width: "100%" }}>
          <Typography mb="20px" textAlign="left" variant="h2">
            {movie.title}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
          <ReactPlayer
            controls
            url="https://www.youtube.com/watch?v=IE8HIsIrq4o&ab_channel=Netflix"
            onReady={() => console.log("onReady callback")}
            onStart={() => console.log("onStart callback")}
            onPause={() => console.log("onPause callback")}
            onEnded={() => console.log("onEnded callback")}
            onError={() => console.log("onError callback")}
            width="100%"
          />
        </Box>
        <Box></Box>
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
          <Box
            sx={{ display: "flex", flexDirection: "row", marginLeft: "15px" }}
          >
            <StarIcon sx={{ fontSize: "70px", color: "#f5c518" }} />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Typography ml="15px" fontSize="30px" textAlign="left">
                  {movie.vote_average}
                </Typography>
                <Typography
                  fontSize="25px"
                  textAlign="left"
                  color="#b1b1b1"
                  ml="2px"
                >
                  {"/10"}
                </Typography>
              </Box>
              <Typography
                ml="15px"
                fontSize="15px"
                textAlign="left"
                color="#b1b1b1"
              >
                {`${movie.vote_count} votes`}
              </Typography>
            </Box>
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
      </Container>
    </Paper>
  );
};

export default Movie;
