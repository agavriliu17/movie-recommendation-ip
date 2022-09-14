import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";

const RatingDisplay = ({ voteAverage, voteCount }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography fontSize="15px" mb="5px" textAlign="left" color="#b1b1b1">
        Average rating:
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <StarIcon sx={{ fontSize: "70px", color: "#f5c518" }} />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Typography
              fontSize="30px"
              textAlign="left"
              sx={{ color: "#F9F871" }}
            >
              {voteAverage}
            </Typography>
            <Typography
              fontSize="25px"
              textAlign="left"
              color="#b1b1b1"
              ml="2px"
            >
              /10
            </Typography>
          </Box>
          <Typography
            ml="15px"
            fontSize="15px"
            textAlign="left"
            color="#b1b1b1"
          >
            {`${voteCount} votes`}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default RatingDisplay;
