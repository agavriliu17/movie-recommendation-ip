import React, { useState } from "react";
import Hover from "../carousel/Hover";
import { IMAGES_URL } from "../../resources/constants";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import { Paper } from "@mui/material";

const useStyles = makeStyles({
  img: {
    width: "250px",
    height: "300px",
    transition: "500ms",
    marginBottom: "25px",
    zIndex: "-1",
  },
});
const Image = ({ movie }) => {
  const [hovervisibility, sethover] = useState(false);
  const navigate = useNavigate();

  const goToMovie = () => {
    navigate(`/watch/${movie.id}`);
  };

  const classes = useStyles();
  return (
    <Paper sx={{ background: "none", boxShadow: "none" }}>
      <Box
        className={classes.img}
        onMouseEnter={() => sethover(true)}
        onMouseLeave={() => sethover(false)}
        sx={{
          backgroundImage: `url(${IMAGES_URL}${
            movie?.poster_path || movie?.backdrop_path
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        onClick={() => {
          goToMovie();
          window.location.reload(false);
        }}
      ></Box>

      <Hover
        visible={hovervisibility}
        showhover={hovervisibility}
        titlu={movie.title}
        durata={movie.release_date}
        rate={movie.vote_average}
      ></Hover>
    </Paper>
  );
};

export default Image;
