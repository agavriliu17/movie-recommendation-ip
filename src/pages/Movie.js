import React from "react";

import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import { useParams } from "react-router-dom";

import requests from "../resources/requests";
import axios from "axios";
import ReactPlayer from "react-player";

import Nav from "../components/nav/Nav";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import ListComments from "./ListComments"


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
        <Box sx={{ height: "20vh" }} />
        <Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
          <ReactPlayer
            controls
            url="https://www.youtube.com/watch?v=IE8HIsIrq4o&ab_channel=Netflix"
            onReady={() => console.log("onReady callback")}
            onStart={() => console.log("onStart callback")}
            onPause={() => console.log("onPause callback")}
            onEnded={() => console.log("onEnded callback")}
            onError={() => console.log("onError callback")}
            width="100%"
          />
        </Box>
        <Box>

        </Box>
        <Box
         sx={{ display: "flex", flexDirection: "row", width: "100%" }}
        >
        
          <Typography ml="20px" fontSize="20px" mt={5} textAlign="left">
          {movie.overview}   
          </Typography>
          <Box
         sx={{ display: "flex", flexDirection: "column", width: "100%", padding:"20px" }}
        >
          <Box
         sx={{ display: "flex", flexDirection: "row", width: "100%" }}
        >
          <Typography ml="20px" fontSize="15px" mt={1} textAlign="left" color="gray">
          Year:  
          </Typography>
          <Typography ml="20px" fontSize="15px" mt={1} textAlign="left">
          2022 
          </Typography>
        </Box>
        <Box
         sx={{ display: "flex", flexDirection: "row", width: "100%" }}
        >
          <Typography ml="20px" fontSize="15px" mt={1} textAlign="left" color="gray">
          Runtime: 
          </Typography>
          <Typography ml="20px" fontSize="15px" mt={1} textAlign="left">
          1h 46m
          </Typography>
        </Box>
          <Box
         sx={{ display: "flex", flexDirection: "row", width: "100%"}}
        >
          <Typography ml="20px" fontSize="15px" mt={1} textAlign="left" color="gray">
          Cast:  
          </Typography>
          <Typography ml="20px" fontSize="15px" mt={1} textAlign="left">
          Ryan Reynolds, Mark Ruffalo, Jennifer Garner, more 
          </Typography>
        </Box>
        <Box
         sx={{ display: "flex", flexDirection: "row", width: "100%" }}
        >
          <Typography ml="20px" fontSize="15px" mt={1} textAlign="left" color="gray">
          Genres:  
          </Typography>
          <Typography ml="20px" fontSize="15px" mt={1} textAlign="left">
          Sci-Fi Movies, Family Movies, Action & Adventure 
          </Typography>
        </Box>
        <Box
         sx={{ display: "flex", flexDirection: "row", width: "100%" }}
        >
          <Typography ml="20px" fontSize="15px" mt={1} textAlign="left" color="gray">
          This movie is:  
          </Typography>
          <Typography ml="20px" fontSize="15px" mt={1} textAlign="left">
          Witty, Feel-Good, Exciting 
          </Typography>
        </Box>
          
        </Box>
          
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
    
          }}
        >
          <Typography ml="20px" fontSize="25px" mt={5} textAlign="left">
            Recommended
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              padding: "10px",
              flexWrap: "wrap",
              width: "100%",
              justifyContent: "center",
            }}
          >
            {[...Array(5)].map((el, ind) => (
              <Box sx={{ marginLeft: "10px", marginRight: "10px" }} key={ind}>
                <Skeleton variant="rectangular" width={210} height={118} />
                <Skeleton width={210} height={40} />
              </Box>
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
    
          }}
        >
        <Typography ml="20px" fontSize="25px" mt={5} textAlign="left">
            Comments
          </Typography>
           <ListComments/>
          </Box>
      </Container>
    </Paper>
  );
};

export default Movie;
