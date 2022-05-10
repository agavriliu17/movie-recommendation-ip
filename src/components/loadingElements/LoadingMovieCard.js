import React from "react";

import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import { makeStyles } from "@mui/styles";
import { Paper } from "@mui/material";
const useStyles = makeStyles({
  mainCard: 
  {
    width: "100%",
    height: "300px",
   

},

});

const LoadingMovieCard = () => {
  const classes = useStyles();

  return (
   
   
    <Box className={classes.mainCard}>
      <Skeleton variant="rectangular" sx={{
        width:"100%",
        height:"100%",
        bgcolor:'grey.600'
      }}/>
 
    </Box>

      

   
    
  );
};

export default LoadingMovieCard;
