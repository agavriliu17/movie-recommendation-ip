import React from "react";
import { Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import Image from "../../components/carousel/Carousel";
import LoadingMovieCard from "../../components/loadingElements/LoadingMovieCard";
import LoadingBanner from "../../components/loadingElements/LoadingBanner";
import requests from "../../resources/requests";
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

const useStyles = makeStyles({
  most: {
    display: "flex",
    height: "fit-content",
    paddingLeft: "1%",
    paddingLeft: "50px",
    paddingRight: "auto",
    paddingBottom: "20px",
    zIndex: "0",
    transform: "skewY(5deg)"
  },
  component: {
    background: "none",
    border: "none",
    padding: "0",
    font: "inherit",
    cursor: "pointer",
    outline: "inherit",
  },
});

const Mail = () => {
  const navigate = useNavigate();
  const [input, setInput] = React.useState({ email: "", password: "" });
  const [error, setError] = React.useState({ email: "", password: "" });

  const handleSignIn = () => {
    if (input.email === "" || !validateEmail(input.email)) {
      setError({
        email: "Please provide an valid email",
        password: error.password,
      });
      // console.log(error);
    } else {
      navigate("/register");
    }
  };

  const handleChange = (event, key) => {
    setInput({ ...input, [key]: event.target.value });
  };
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

  const classes = useStyles();
  return (
    <Paper
      sx={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#10091D",
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

     
     
        <Box sx={{width:"100%",height:"500px"}}>
        {loading ? <LoadingMovieCard/> :
        <Carousel className={classes.most} responsive={responsive}>
          {topRated.map((datas, key) => {
            return (
              <>
                <button
                  onClick={() => {
                    navigate("/register");
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

      <Paper
        sx={{
          backgroundColor: "#F9F871",
          height: "fit-content",
          width: "50%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <TextField
          error={error.email === "" ? false : true}
          required
          id="outlined-required"
          label="Email"
          defaultValue="email@someone.com"
          helperText={error.email}
          onChange={(ev) => handleChange(ev, "email")}
          value={input.email}
          sx={{ width: "100%", color: "#F9F871", height: "55px" }}
          variant="filled"
          InputLabelProps={{
            sx: {
              fontFamily: "Trispace",
              color: "#482884",
            },
          }}
        />
      </Paper>
      <Button
        variant="outlined"
        sx={{
          marginTop: "25px",
          height: "5%",
          color: COLORS.secondary,
          backgroundColor: COLORS.primary,
          borderColor: COLORS.secondary,
          fontSize: "calc(5px + .3vw)",
          "&:hover": {
            backgroundColor: COLORS.secondary,
            color: COLORS.primary,
            borderWidth: "2px",
            borderColor: COLORS.primary,
          },
        }}
        onClick={handleSignIn}
      >
        Get Started
      </Button>
      <Box
        sx={{
          height: "200px",
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
          }}
          onClick={scrollToBottom}
        />
      </Box>
    </Paper>
  );
};

export default Mail;
