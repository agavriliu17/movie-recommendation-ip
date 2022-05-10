import React from "react";
import "react-multi-carousel/lib/styles.css";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Banner from "../../components/Banner";
import Nav from "../../components/nav/Nav";
import LoadingMovieCard from "../../components/loadingElements/LoadingMovieCard";
import LoadingBanner from "../../components/loadingElements/LoadingBanner";
import requests from "../../resources/requests";
import axios from "axios";
 import Carousel from "react-multi-carousel";
import Image from "../../components/carousel/Carousel";
import { useState } from "react";
import { makeStyles } from "@mui/styles";

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

const useStyles = makeStyles({
  carousel: {
  height:"500px",
  paddingLeft:"50px",
  paddingRight: "auto",
  paddingBottom: "20px",
  zIndex: 0,
},
most:
{
  display: "flex",
  height: "25%",
  paddingLeft:"1%",
  paddingLeft:"50px",
  paddingRight: "auto",
  paddingBottom: "20px",
  zIndex: "0"
},

component:
{
  background: "none",
  border: "none",
  padding: "0",
  font: "inherit",
  cursor: "pointer",
  outline: "inherit"
},

text:
{
  fontWeight: "bolder",
  fontSize: "20px",
  marginTop: "8vh",
  paddingBottom: "20px",
  paddingLeft: "20px",
  paddingTop: "20px",
  textAlign:"left"
},
body:
{
  backgroundColor: "#15171D"
},
  
});

const Home = () => {
  const [visibility, setVisibility] = useState(false);

  const popupCloseHandler = () => {
    setVisibility(false);
  };
  const [data, setData] = React.useState([]);
  const [topRatedData, setDataTop] = React.useState([]);
  const [horrorData,setDataHorror]=React.useState([]);
  const [actionData,setDataAction]=React.useState([]);
  const [documentariesData,setDatadocumentaries]=React.useState([]);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    (async function () {
      try {

        const movieData = await axios
        .get(requests.fetchNetflixOriginals)
        .then((res) => res.data.results);

      const timedData = await new Promise((resolve) => {
        setTimeout(() => resolve(movieData), 1000);
      });


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
        
        setData(timedData);
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

  const bannerMovie = data[Math.floor(Math.random() * data.length)];
  const topRated = topRatedData.slice(0, 10);
  const horrormovies= horrorData.slice(0,10);
  const actionmovies=actionData.slice(0,10);
  const documentariesmovies=documentariesData.slice(0,10);


  var [title,setTitle]=useState();
  var [info,setInfo]=useState();
  var [added,setAdded]=useState();
  console.log(title);


 
  const classes = useStyles();
  return (
    <Box className={classes.body}>
      <Nav />

     
       
       
      {loading ? <LoadingBanner /> : <Banner movie={bannerMovie} />}
        
        {loading ? <LoadingMovieCard/> :
        <Carousel className={classes.most} responsive={responsive}>
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
                  className={classes.component}
                >
                  <Image movie={datas}></Image>
                </button>
              </>
            );
          })}
        </Carousel>
      }


    <Typography
        className={classes.text}
      >
        For the brave:
      </Typography>
       {loading ? <LoadingMovieCard/> : <Carousel className={classes.carousel} responsive={responsive}>
          {horrormovies.map((datas, key) => {
            return (
              <>
                <button
                  onClick={() => {
                    setVisibility(true);
                  }}
                  className={classes.component}
                >
                  <Image movie={datas}></Image>
                </button>
              </>
            );
          })}
        </Carousel>
      }       
    

    <Typography
         className={classes.text}
      >
        Action non stop:
      </Typography>
      {loading ? <LoadingMovieCard/> : <Carousel className={classes.carousel} responsive={responsive}>
          {actionmovies.map((datas, key) => {
            return (
              <>
                <button
                  onClick={() => {
                    setVisibility(true);
                  }}
                  className={classes.component}
                >
                  <Image movie={datas}></Image>
                </button>
              </>
            );
          })}
        </Carousel>
      }


<Typography
        className={classes.text}
      >
        Documentaries:
      </Typography>
      {loading ? <LoadingMovieCard/> : <Carousel className={classes.carousel} responsive={responsive}>
          {documentariesmovies.map((datas, key) => {
            return (
              <>
                <button
                  onClick={() => {
                    setVisibility(true);
                  }}
                  className={classes.component}
                >
                  <Image movie={datas}></Image>
                </button>
              </>
            );
          })}
        </Carousel>
      }
    </Box>
  );
};

export default Home;
