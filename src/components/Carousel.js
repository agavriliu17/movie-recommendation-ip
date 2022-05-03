import React from "react";
import "../css/Carousel.css"
import r1 from "../pictures/recom3.jpg";
import Hover from "./Hover";
import { useEffect, useState } from "react";
import CustomPopup from "./CustomPopUp";
import { IMAGES_URL } from "../resources/constants";
import { Box } from "@mui/material";
const Image = ({movie}) => {
    const [hovervisibility,sethover]=useState(false);

        const popupClose =() =>
        {
          sethover(false);
        };

     
    return (
       
      <>
        
         <Box className="img"  onMouseEnter={() => sethover(true)} onMouseLeave={() => sethover(false)}  sx={{
          backgroundImage: `url(${IMAGES_URL}${
            movie?.backdrop_path || movie?.poster_path
          })`, 
          backgroundSize:"cover",
          backgroundPosition:"center"
         
         }}></Box>
        
         <Hover 
          visible={hovervisibility} showhover={hovervisibility}
          titlu={movie.title} durata={movie.release_date} rate={movie.vote_average}  
        ></Hover>
       
        </>
    );
  };
  
  export default Image;