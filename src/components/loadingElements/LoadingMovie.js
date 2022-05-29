import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";

const LoadingMovie = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        marginTop: "10vh",
      }}
    >
      <Skeleton
        variant="rectangular"
        width={400}
        height={600}
        sx={{ borderRadius: "15px" }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "20px",
        }}
      >
        <Skeleton
          variant="rectangular"
          width={400}
          height={50}
          sx={{ marginBottom: "20px" }}
        />
        <Skeleton
          variant="rectangular"
          width={500}
          height={30}
          sx={{ marginTop: "5vh" }}
        />
        <Skeleton
          variant="rectangular"
          width={450}
          height={30}
          sx={{ marginTop: "10px" }}
        />
        <Skeleton
          variant="rectangular"
          width={430}
          height={30}
          sx={{ marginTop: "10px" }}
        />
        <Skeleton
          variant="rectangular"
          width={500}
          height={30}
          sx={{ marginTop: "10px" }}
        />
        <Skeleton
          variant="rectangular"
          width={450}
          height={30}
          sx={{ marginTop: "10px" }}
        />
      </Box>
    </Box>
  );
};

export default LoadingMovie;
