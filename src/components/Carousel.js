import React from "react";
import "../css/Carousel.css"
import r1 from "../pictures/recom1.jpg";
import Hover from "./Hover";
import { useEffect, useState } from "react";
const Image = () => {
    const [hovervisibility,sethover]=useState(false);

        const popupClose =() =>
        {
          sethover(false);
        };
    return (
       
      <>
      
         <img onMouseEnter={() => sethover(true)} onMouseLeave={() => sethover(false)} src={r1}></img>
         <Hover
          onMouseLeave={popupClose}
          showhover={hovervisibility}
        ></Hover>
        
        </>
    );
  };
  
  export default Image;