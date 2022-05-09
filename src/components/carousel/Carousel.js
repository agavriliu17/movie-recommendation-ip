import React from "react";
// import "../css/Carousel.css"
import Hover from "../carousel/Hover"
import { useEffect, useState } from "react";
import { IMAGES_URL } from "../../resources/constants"
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
const useStyles = makeStyles({
    img:
{
    width:"250px",
    height: "300px",
    transition: "500ms",
    marginBottom: "50px",
    zIndex: "-1",
    
    '&:hover':
    {
      height: "350px",
    
      marginBottom: "0px",
      transitionDuration: "500ms",
      zIndex: "-1",
    },
   
},
  
});
const Image = ({movie}) => {

  const navigate = useNavigate();

  const goToMovie = () => {
    navigate(`/watch/${movie.id}`);
  };

    const [hovervisibility,sethover]=useState(false);

        const popupClose =() =>
        {
          sethover(false);
        };

    const classes = useStyles(); 
    return (
       
      <>
        
         <Box className={classes.img}  onMouseEnter={() => sethover(true)} onMouseLeave={() => sethover(false)}  sx={{
          backgroundImage: `url(${IMAGES_URL}${
            movie?.backdrop_path || movie?.poster_path
          })`, 
          backgroundSize:"cover",
          backgroundPosition:"center"
         
         }} onClick={goToMovie}></Box>
        
         <Hover 
          visible={hovervisibility} showhover={hovervisibility}
          titlu={movie.title} durata={movie.release_date} rate={movie.vote_average}  
        ></Hover>
       
        </>
    );
  };
  
  export default Image;