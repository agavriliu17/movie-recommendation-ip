import React from "react";

import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

import Banner from "../../components/Banner";
import Nav from "../../components/nav/Nav";
import LoadingMovieCard from "../../components/loadingElements/LoadingMovieCard";
import LoadingBanner from "../../components/loadingElements/LoadingBanner";

import requests from "../../resources/requests";
import axios from "axios";

const Home = () => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    (async function () {
      try {
        const movieData = await axios
          .get(requests.fetchNetflixOriginals)
          .then((res) => res.data.results);

        const timedData = await new Promise((resolve) => {
          setTimeout(() => resolve(movieData), 1000);
        });

        setData(timedData);
        setLoading(false);
      } catch (e) {
        console.error(e);
        setLoading(false);
      }
    })();
  }, []);

  const bannerMovie = data[Math.floor(Math.random() * data.length)];

  return (
    <Paper
      sx={{
        width: "100%",
        minHeight: "100vh",
        borderRadius: "0px",
        overflowX: "hidden",
        display: "flex",
        flexDirection: "column",
        zIndex: 2,
      }}
    >
      <Nav />
      {loading ? <LoadingBanner /> : <Banner movie={bannerMovie} />}

      {/* TODO: Replace the components below with carousels */}
      <Typography ml="20px" fontSize="25px" mt={5}>
        Continue watching
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          padding: "10px",
          zIndex: 2,
        }}
      >
        {[...Array(21)].map((el, ind) => (
          <LoadingMovieCard key={ind} />
        ))}
      </Box>

      <Typography ml="20px" fontSize="25px" mt={5}>
        For you
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "row", padding: "10px" }}>
        {[...Array(21)].map((el, ind) => (
          <LoadingMovieCard key={ind} />
        ))}
      </Box>

      <Typography ml="20px" fontSize="25px" mt={5}>
        Just Added
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "row", padding: "10px" }}>
        {[...Array(21)].map((el, ind) => (
          <LoadingMovieCard key={ind} />
        ))}
      </Box>

      <Typography ml="20px" fontSize="25px" mt={5}>
        Popular
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "row", padding: "10px" }}>
        {[...Array(21)].map((el, ind) => (
          <LoadingMovieCard key={ind} />
        ))}
      </Box>

      <Typography ml="20px" fontSize="25px" mt={5}>
        Action
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "row", padding: "10px" }}>
        {[...Array(21)].map((el, ind) => (
          <LoadingMovieCard key={ind} />
        ))}
      </Box>
    </Paper>
  );
};

export default Home;
