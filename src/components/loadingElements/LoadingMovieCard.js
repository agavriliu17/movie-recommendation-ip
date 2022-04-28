import React from "react";

import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  mainCard: { marginLeft: "10px", marginRight: "10px" },
});

const LoadingMovieCard = () => {
  const classes = useStyles();

  return (
    <Box className={classes.mainCard}>
      <Skeleton variant="rectangular" width={210} height={118} />
      <Skeleton width={210} height={40} />
    </Box>
  );
};

export default LoadingMovieCard;
