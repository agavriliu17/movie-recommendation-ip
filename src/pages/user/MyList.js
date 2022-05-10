import React from "react";

import PageLayout from "../PageLayout";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import MovieListItem from "../../components/MovieListItem";
import requests from "../../resources/requests";
import axios from "axios";
import { Skeleton } from "@mui/material";
import { useTheme } from "@mui/material";


const MyList = () => {

  const theme = useTheme();
  
  const [data, setData] = React.useState([]);
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

        setData(timedData);
        setLoading(false);
      } catch (e) {
        console.error(e);
        setLoading(false);
      }
    })();
  }, []);

  return (
    <PageLayout>
      <Typography mb="20px" mt="10vh" textAlign="left" variant="h2">
        My list
      </Typography>
      {!loading ? (
        <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
          {data.map((movie, index) => (
            <MovieListItem key={`${movie.title}-${index}`} movie={movie}   />
          ))}
        </Box>
      ) : (
        <Skeleton variant="rectangular" 
        sx={{width:"100%",height:"100%"}}
        
        />
      )}
    </PageLayout>
  );
};

export default MyList;
