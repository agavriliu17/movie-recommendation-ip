import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../css/Home.css";
import Typography from "@mui/material/Typography";
import r1 from "../pictures/recom1.jpg";
import r2 from "../pictures/recom2.jpg";
import r3 from "../pictures/recom3.jpg";
import r4 from "../pictures/movie.png";
import r5 from "../pictures/movie.png";
import r6 from "../pictures/play.png";
import { Box } from "@mui/system";
import Paper from "@mui/material/Paper";
import CustomPopup from "../components/CustomPopUp";
import Avatar from "@mui/material/Avatar";
import Image from "../components/Carousel";
import ReactPlayer from "react-player";
import sampleVideo from "../pictures/sampleVideo.mp4";
import Nav from "../components/Navbar";
import { Button } from "@mui/material";
import { useState } from "react";

import requests from "../resources/requests";
import axios from "axios";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Home = () => {
  const [visibility, setVisibility] = useState(false);

  const popupCloseHandler = () => {
    setVisibility(false);
  };

  const [topRatedData, setDataTop] = React.useState([]);
  const [horrorData,setDataHorror]=React.useState([]);
  const [actionData,setDataAction]=React.useState([]);
  const [documentariesData,setDatadocumentaries]=React.useState([]);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    (async function () {
      try {
        const topMovieData = await axios
          .get(requests.fetchTopRated)
          .then((res) => res.data.results);

        const toptimedData = await new Promise((resolve) => {
          setTimeout(() => resolve(topMovieData), 1000);
        });


        const horrorMovieData = await axios
          .get(requests.fetchHorrorMovies)
          .then((res) => res.data.results);

        const horrorTimedData = await new Promise((resolve) => {
          setTimeout(() => resolve(horrorMovieData), 1000);
        });

        const actionMovieData = await axios
          .get(requests.fetchActionMovies)
          .then((res) => res.data.results);

        const actionTimedData = await new Promise((resolve) => {
          setTimeout(() => resolve(actionMovieData), 1000);
        });

        const documentariesMovieData = await axios
          .get(requests.fetchDocumentaries)
          .then((res) => res.data.results);

        const documentariesTimedData = await new Promise((resolve) => {
          setTimeout(() => resolve(documentariesMovieData), 1000);
        });

        setDataTop(toptimedData);
        setDataHorror(horrorTimedData);
        setDataAction(actionTimedData);
        setDatadocumentaries(documentariesTimedData);
        setLoading(false);
        
      } catch (e) {
        console.error(e);

        setLoading(false);
      }
    })();
  }, []);

 
  const topRated = topRatedData.slice(0, 10);
  const horrormovies= horrorData.slice(0,10);
  const actionmovies=actionData.slice(0,10);
  const documentariesmovies=documentariesData.slice(0,10);


  var [title,setTitle]=useState();
  var [info,setInfo]=useState();
  var [added,setAdded]=useState();
  console.log(title);
  return (
    <>
      <Nav></Nav>

      <CustomPopup
        onClose={popupCloseHandler}
        show={visibility}
        title
        info
        added
      ></CustomPopup>

      <Paper
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "500px",
          backgroundImage: `url(${r5})`,
        }}
      >
        <Avatar sx={{ zIndex: "0", paddingTop: "100px" }} alt="play" src={r6}/>
         
        
      </Paper>

      {!loading && (
        <Carousel className="most" responsive={responsive}>
          {topRated.map((datas, key) => {
            return (
              <>
                <button
                  onClick={() => {
                    setVisibility(true);
                    setTitle(datas.title);
                    setInfo(datas.info);
                    setAdded=(datas.release_date);
                  }}
                  className="component"
                >
                  <Image movie={datas}></Image>
                </button>
              </>
            );
          })}
        </Carousel>
      )}
     
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
        For the brave:
      </Typography>
         {!loading && (
        <Carousel className="carusel" responsive={responsive}>
          {horrormovies.map((datas, key) => {
            return (
              <>
                <button
                  onClick={() => {
                    setVisibility(true);
                  }}
                  className="component"
                >
                  <Image movie={datas}></Image>
                </button>
              </>
            );
          })}
        </Carousel>
      )}


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
        Action non stop:
      </Typography>
         {!loading && (
        <Carousel className="carusel" responsive={responsive}>
          {actionmovies.map((datas, key) => {
            return (
              <>
                <button
                  onClick={() => {
                    setVisibility(true);
                  }}
                  className="component"
                >
                  <Image movie={datas}></Image>
                </button>
              </>
            );
          })}
        </Carousel>
      )}


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
        Documentaries:
      </Typography>
         {!loading && (
        <Carousel className="carusel" responsive={responsive}>
          {documentariesmovies.map((datas, key) => {
            return (
              <>
                <button
                  onClick={() => {
                    setVisibility(true);
                  }}
                  className="component"
                >
                  <Image movie={datas}></Image>
                </button>
              </>
            );
          })}
        </Carousel>
      )}
       
    </>
  );
};

export default Home;
