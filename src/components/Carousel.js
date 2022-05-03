import React from "react";
import "../css/Carousel.css"
import r1 from "../pictures/recom3.jpg";
import Hover from "./Hover";
import { useEffect, useState } from "react";
import CustomPopup from "./CustomPopUp";
const Image = ({movie}) => {
    const [hovervisibility,sethover]=useState(false);

        const popupClose =() =>
        {
          sethover(false);
        };

       console.log(movie);
    return (
       
      <>
        
         <img  onMouseEnter={() => sethover(true)} onMouseLeave={() => sethover(false)} src={r1}></img>
        
         <Hover 
          visible={hovervisibility} showhover={hovervisibility}
          titlu={movie.title} durata={movie.title} rate={movie.title}  
        ></Hover>
       
        </>
    );
  };
  
  export default Image;