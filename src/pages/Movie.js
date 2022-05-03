import React from "react";

import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import { useParams } from "react-router-dom";

import requests from "../resources/requests";
import axios from "axios";
import ReactPlayer from 'react-player';


import Nav from "../components/nav/Nav";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";

const Movie = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = React.useState({});

  React.useEffect(() => {
    (async function () {
      try {
        const movieData = await axios
          .get(requests.fetchMovie(movieId))
          .then((res) => res.data);

        setMovie(movieData);
      } catch (e) {
        console.error(e);
      }
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(movie);
  return (
    <Paper
      sx={{
        width: "100%",
        minHeight: "100vh",
        borderRadius: "0px",
        overflowX: "hidden",
        display: "flex",
      }}
    >
      <Nav />
      <Container 
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        {/* //TODO: */}
        <Box
        sx={{ display: "flex", flexDirection: "row", padding: "100px" }}
        >
        <ReactPlayer
        
        controls
        url="https://www.youtube.com/watch?v=TO-_3tck2tg&ab_channel=ImagineDragonsVEVO" 
        onReady={()=>console.log('onReady callback')}
        onStart={()=>console.log('onStart callback')}
        onPause={()=>console.log('onPause callback')}
        onEnded={()=>console.log('onEnded callback')}
        />
        </Box>
      
    
     <Typography ml="20px" fontSize="25px" mt={5}>
        For you
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "row", padding: "10px" }}>
        {[...Array(21)].map((el, ind) => (
          <Box sx={{ marginLeft: "10px", marginRight: "10px" }} key={ind}>
            <Skeleton variant="rectangular" width={210} height={118} />
            <Skeleton width={210} height={40} />
          </Box>
        ))}
      </Box>
      </Container>
      
    </Paper>
  );
};

export default Movie;
