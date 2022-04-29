import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "../css/Home.css"
import Typography from "@mui/material/Typography";
import r1 from "../pictures/recom1.jpg";
import r2 from "../pictures/recom2.jpg";
import r3 from "../pictures/recom3.jpg";
import r4 from "../pictures/movie.png";
import r5 from "../pictures/movie.png";
import r6 from "../pictures/play.png";
import { Box } from "@mui/system";
import Paper from "@mui/material/Paper"
import CustomPopup from "../components/CustomPopUp";
import Avatar from '@mui/material/Avatar';
import Image from "../components/Carousel";
import ReactPlayer from "react-player";
import sampleVideo from "../pictures/sampleVideo.mp4";
import Nav from "../components/Navbar";
import { useState } from "react";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};



const Home = () => {
  const [visibility, setVisibility] = useState(false);

  const popupCloseHandler = () => {
    setVisibility(false);
  };


  return <>
  
  <Nav></Nav>
  <button onClick={() => setVisibility(true)}>open</button>
      <CustomPopup
        onClose={popupCloseHandler}
        show={visibility}
      >
      </CustomPopup>
  <Paper sx={{
    display:"flex",
    alignItems: "center",
    justifyContent:"center",
    width:"100%",
    height:"500px",
     backgroundImage:`url(${r5})`}}>
    <Avatar
   
    alt="play" src={r6}> </Avatar>
  </Paper>
    
  <Carousel  className="most" 
       
        
       responsive={responsive}>
          <img src={r1}></img>
          <img src={r2}></img>
          <img src={r3}></img>
          <img src={r1}></img>
          <img src={r3}></img>
         
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
