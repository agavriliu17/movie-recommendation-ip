import React from "react";
import { Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import { useNavigate } from "react-router-dom";
import requests from "../../resources/requests";
import axios from "axios";
import MoviesCarousel from "../../components/carousel/MoviesCarousel";
import backgroundImage from "../../resources/images/default_1920x1080.png";
import LoadingMovieCard from "../../components/loadingElements/LoadingMovieCard";
export const COLORS = {
  primary: "#482884", // purple
  secondary: "#F9F871", // yellow
};

const scrollToBottom = () => {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: "smooth",
  });
};

export const validateEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

const Mail = () => {
  const [topRatedData, setDataTop] = React.useState([]);
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

      

      
        setDataTop(toptimedData);
        
        setLoading(false);
      } catch (e) {
        console.error(e);

        setLoading(false);
      }
    })();
  }, []);

 
  const topRated = topRatedData.slice(0, 10);
 


  return (
    <Paper
      sx={{
        width: "100%",
        height: "auto",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        borderRadius: "0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Trispace",
          color: "#F9F871",
          fontWeight: "bolder",
          fontSize: "20px",
          marginTop: "8vh",
        }}
      >
        All the movies you love! And more.
      </Typography>

      {loading ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            width: "100%",
            marginTop: "25px",
          }}
        >
          {[...Array(4)].map((el, ind) => (
            <LoadingMovieCard key={`${ind}-top-rated`} />
          ))}
        </Box>
      ) : (
        <MoviesCarousel movieList={topRated} />
      )}
     
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "center",
        }}
      >
        <KeyboardArrowDownSharpIcon
          fontSize="large"
          sx={{
            color: COLORS.secondary,
            paddingTop:"-100px"
          }}
          onClick={scrollToBottom}
        />
      </Box>
    </Paper>
  );
};

export default Mail;
