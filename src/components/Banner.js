import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddMovieButton from "./AddMovieButton";

import { IMAGES_URL } from "../resources/constants";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material";

const Banner = ({ movie }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const goToMovie = () => {
    navigate(`/watch/${movie.id}`);
  };

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
            movie?.backdropPath || movie?.posterPath
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: { xs: "80%", sm: "80%", md: "50%", lg: "50%" },
          }}
        >
          <Typography
            variant="h3"
            color="#F9F871"
            sx={{
              "@media screen and (max-width:550px)": {
                fontSize: "30spx",
              },
            }}
          >
            {movie?.name}
          </Typography>
          <Typography
            variant="h6"
            mt={5}
            color="#10091D"
            backgroundColor={theme.palette.text.disabled}
            paddingLeft="10px"
            sx={{
              "@media screen and (max-width:550px)": {
                fontSize: "12px",
              },
            }}
          >
            {movie?.description}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row", marginTop: "20px" }}>
          <Button
            variant="contained"
            sx={{
              height: "fit-content",
              backgroundImage:
                "linear-gradient(90deg, rgb(71, 16, 193), rgb(120, 87, 255) 92%, rgb(129, 155, 253) 100%)",
              color: "#fff",
              borderRadius: "25px",
              backgroundColor: "transparent",
              textTransform: "none",
              padding: "5px 20px",

              "&:hover": {
                transition: "ease",
                backgroundColor: "rgb(91,28,230)",
                backgroundImage: "none",
              },
            }}
            onClick={goToMovie}
          >
            <PlayArrowIcon sx={{ fontSize: "25px" }} />
            <Typography fontSize="20px" ml="5px">
              Play
            </Typography>
          </Button>
          <AddMovieButton />
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
