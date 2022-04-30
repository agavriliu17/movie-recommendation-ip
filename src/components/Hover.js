import React from "react";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import r1 from "../pictures/recom1.jpg";
import { Box } from "@mui/system";
import { Paper, Typography } from "@mui/material";
import "../css/Hover.css";
const Hover = (props) => {
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
      visibility: showhover ? "visible" : "hidden",
      opacity: showhover ? "1" : "0",
      // display: showhover ? "contents" : "none"
    }}
    onMouseLeave={closezoom}
    onMouseEnter={openzoom}
     >
      
      <Paper sx={{backgroundColor:"#15171D"}} >
         <Box className="title">
         <p>Movie title</p>
         </Box>
         <Box className="info">
            <p>Duration: 2h</p>
            <p>Rating: 4.5</p>
         </Box>
      </Paper>
     </Box>
   );
 };
  export default Hover;