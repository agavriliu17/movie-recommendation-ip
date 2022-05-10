import React from "react";

import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  mainContainer: {
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "column",
    width: "100%",
    height: "80vh"
  },
});

const LoadingBanner = () => {
  const classes = useStyles();

  return (
    <Box className={classes.mainContainer}>
     <Skeleton variant="rectangular" 
     sx={{width:"100%",height:"100%"}}
     
     />
    </Box>
  );
};

export default LoadingBanner;
