import React from "react";

import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  mainContainer: {
    height: "65vh",
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "column",
    width: "100%",
    marginLeft: "20px",
  },
});

const LoadingBanner = () => {
  const classes = useStyles();

  return (
    <Box className={classes.mainContainer}>
      <Skeleton
        variant="rectangular"
        width="25%"
        height={75}
        sx={{ marginBottom: 5 }}
      />

      <Skeleton variant="text" width="40%" />
      <Skeleton variant="text" width="40%" />
      <Skeleton variant="text" width="40%" />
      <Skeleton variant="text" width="25%" />

      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Skeleton width={150} height={100} />
        <Skeleton width={220} height={100} sx={{ marginLeft: "15px" }} />
      </Box>
    </Box>
  );
};

export default LoadingBanner;
