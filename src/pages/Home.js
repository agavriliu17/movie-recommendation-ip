import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "../css/Home.css"
import Typography from "@mui/material/Typography";
import r1 from "../pictures/recom1.jpg";
import r2 from "../pictures/recom2.jpg";
import r3 from "../pictures/recom3.jpg";
import r4 from "../pictures/movie.png";
import { Box } from "@mui/system";
import CustomPopup from "../components/CustomPopUp";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Home = () => {
  return <>
 
  <Box sx={{width:"100%", backgroundImage:"../pictures/movie.png"}}>
    
  </Box>

 <Typography
        sx={{
          fontFamily: "Trispace",
          color: "#F9F871",
          fontWeight: "bolder",
          fontSize: "20px",
          marginTop: "8vh",
          backgroundColor: "#482884",
          paddingBottom: "20px",
          paddingLeft: "20px",
          paddingTop: "20px"
        }}
      >
        Action non-stop:
      </Typography>
        <Carousel className="carusel"
       
        
        responsive={responsive}>
           <img src={r1}></img>
           <img src={r2}></img>
           <img src={r3}></img>
           <img src={r1}></img>
           <img src={r2}></img>
           <img src={r3}></img>
           <img src={r1}></img>
           <img src={r2}></img> 
        </Carousel>  


        <Typography
        sx={{
          fontFamily: "Trispace",
          color: "#F9F871",
          fontWeight: "bolder",
          fontSize: "20px",
          marginTop: "8vh",
          backgroundColor: "#482884",
          paddingBottom: "20px",
          paddingLeft: "20px",
          paddingTop: "20px"
        }}
      >
        Not for the faint hearth
      </Typography>
        <Carousel className="carusel"
       
        
        responsive={responsive}>
           <img src={r1}></img>
           <img src={r2}></img>
           <img src={r3}></img>
           <img src={r1}></img>
           <img src={r2}></img>
           <img src={r3}></img>
           <img src={r1}></img>
           <img src={r2}></img> 
        </Carousel>  
  </>;
};

export default Home;
