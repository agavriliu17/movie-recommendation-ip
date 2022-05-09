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
      <Skeleton variant="rectangular" width={1920} height={250} />
      <Skeleton width={1920} height={250} />
    </Box>
  );
};

export default LoadingMovieCard;
