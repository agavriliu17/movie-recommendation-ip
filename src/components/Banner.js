import React from "react";
import Box from "@mui/material/Box";
import bannerImage from "../resources/images/movieBanner.jpeg";

const Banner = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "550px",
        width: "100%",
        position: "relative",
      }}
    ></Box>
  );
};

export default Banner;
