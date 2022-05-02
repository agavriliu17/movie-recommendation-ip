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
import data from "../resources/data.json"
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
  const [visibility, setVisibility] = useState(false);

  const popupCloseHandler = () => {
    setVisibility(false);
  };



  
return <>

  <Nav

  ></Nav>
 

     
  <Paper sx={{
    display:"flex",
    alignItems: "center",
    justifyContent:"center",
    width:"100%",
    height:"500px",
    backgroundImage:`url(${r5})`,
    
    }}>
    
    <Avatar sx={{zIndex:"0",paddingTop:"100px"}}
   
    alt="play" src={r6}> </Avatar>
  </Paper>
 

  <Carousel className="most" 
       
        
       responsive={responsive}>
         {data.most.map((data,key) =>{
           return (
         <Image title={data.title} duration={data.duration} rating={data.rating} image={data.image}></Image>
         
         
           );
        })}
        </Carousel>  
          
          {/* <img onClick={() => setVisibility(true)} src={r2}></img> */}
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
          paddingTop: "20px",
          textAlign:"left"
        }}
      >
        Action non-stop:
      </Typography>
        <Carousel className="carusel"
        
        responsive={responsive}>
           
         <Image></Image>
         <Image></Image>
         <Image></Image>
         <Image></Image>
         <Image></Image>
         <Image></Image>
         <Image></Image>
         <Image></Image>
         <Image></Image>
         <Image></Image>
           
          
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
          paddingTop: "20px",
          textAlign:"left"
        }}
      >
        Not for the faint hearth
      </Typography>
      <Carousel className="carusel"
       
        
       responsive={responsive}>
         <Image></Image>
         <Image></Image>
         <Image></Image>
         <Image></Image>
         <Image></Image>
         <Image></Image>
         <Image></Image>
         <Image></Image>
         <Image></Image>
         <Image></Image>
         
       </Carousel>  
      
  </>;
};

export default Home;
