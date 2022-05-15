import React from "react";

import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

const LoadingMyList = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
      }}
    >
      {[...Array(4)].map((el, ind) => (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            margin: "20px 0px",
          }}
          key={`${ind}-movieListItem`}
        >
          <Skeleton
            variant="rectangular"
            width={180}
            height={250}
            sx={{ borderRadius: "15px" }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              justifyContent: "flex-start",
              marginLeft: "15px",
            }}
          >
            <Skeleton
              variant="rectangular"
              height={40}
              sx={{ width: "50%", marginTop: "15px" }}
            />
            <Skeleton
              variant="rectangular"
              height={120}
              sx={{ width: "75%", marginTop: "30px" }}
            />
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default LoadingMyList;
