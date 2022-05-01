import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import { IMAGES_URL } from "../resources/constants";

const Banner = ({ movie }) => {
  return (
    <Box
      sx={{
        height: "65vh",
        display: "flex",
        justifyContent: "flex-end",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${IMAGES_URL}${
            movie?.backdrop_path || movie?.poster_path
          })`,
          position: "absolute",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          height: "80vh",
          width: "100%",
          left: 0,
          top: 0,
          zIndex: 0,
          maskImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 1.0) 60%, transparent 100%)",
        }}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "20px",
          zIndex: "2",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", width: "50%" }}>
          <Typography variant="h2">{movie.title}</Typography>
          <Typography variant="h6" mt={5}>
            {movie.overview}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row", marginTop: "20px" }}>
          <Button
            variant="contained"
            sx={{
              textTransform: "none",
              backgroundColor: "#fff",
              padding: "5px 25px",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.8)",
              },
            }}
          >
            <PlayArrowIcon sx={{ fontSize: "45px" }} />
            <Typography fontSize="25px" ml="5px">
              Play
            </Typography>
          </Button>
          <Button
            variant="contained"
            sx={{
              textTransform: "none",
              marginLeft: "15px",
              backgroundColor: "rgba(158,158,158,0.6)",
              padding: "5px 25px",
              color: "#fff",
              "&:hover": {
                backgroundColor: "rgba(158,158,158,0.4)",
              },
            }}
          >
            <InfoOutlinedIcon sx={{ fontSize: "35px" }} />
            <Typography fontSize="25px" ml="5px">
              Learn more
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
