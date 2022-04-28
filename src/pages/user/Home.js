import React from "react";

import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

import LoadingMovieCard from "../../components/loadingElements/LoadingMovieCard";
import Banner from "../../components/Banner";
import Nav from "./../../components/Nav";

const Home = () => {
  return (
    <Paper
      sx={{
        width: "100%",
        minHeight: "100vh",
        borderRadius: "0px",
        overflowX: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Nav />
      <Banner />

      {/* TODO: Replace the components below with carousels */}
      <Typography ml="20px" fontSize="25px" mt={5}>
        Continue watching
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "row", padding: "10px" }}>
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
