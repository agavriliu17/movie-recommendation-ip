import React from "react";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import r1 from "../pictures/recom1.jpg";
import { Box } from "@mui/system";
import { Paper, Typography } from "@mui/material";
import "../css/Hover.css";
const Hover = ({titlu,durata,rate,visible},props) => {
   const [showhover, hovershow] = useState(true);

   const closezoom = (e) => {
     hovershow(false);
     props.onMouseLeave(false);
   };
   
   const openzoom =(e) =>
   {
     hovershow(true);
     props.onMouseEnter(true);
   }
   useEffect(() => {
     hovershow(props.showhover);
   }, [props.showhover]);
 
   return (
     <Box className="main"
     style={{
      visibility: visible ? "visible" : "hidden",
      opacity: visible ? "1" : "0", //aici
    //  display: visible ? "block" : "contents"
    }}
    onMouseLeave={closezoom}
    onMouseEnter={openzoom}
     >
    
      <Box sx={{backgroundColor:"#15171D"}} >
         <Box className="title">
         <p>{titlu}</p>
         </Box>
         <Box className="info">
            <p>{durata}</p>
            <p>{rate}</p>
         </Box>
      </Box>
     </Box>
   );
 };
  export default Hover;