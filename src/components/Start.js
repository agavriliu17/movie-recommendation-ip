import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import { Stack } from "@mui/material";
import { Button } from "@mui/material";
import { grey } from "@mui/material/colors";

const Start = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        background: grey[900],
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundImage: `url(${"https://cdn.wallpapersafari.com/95/98/3vRqDI.jpg"})`,
      }}
    >
      <Typography sx={{ fontSize: "30px", color: "white", padding: "30px" }}>
        <LocalMoviesIcon />
        Movie Streaming App
      </Typography>

      <Typography
        sx={{
          fontSize: "30px",
          color: "white",
          padding: "30px",
          textAlign: "center",
          marginTop: "10%",
          textDecorationLine: "overline",
          "&:hover": {
            textDecorationLine: "overline",
          },
        }}
      >
        The Place where you can see movies
      </Typography>

      <Stack
        direction="row"
        spacing={10}
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "10%",
        }}
      >
        <Button
          variant="contained"
          sx={{
            height: "40px",
            color: grey[100],
            border: "1px solid white",
            background: "black",
            "&:hover": {
              color: "black",
              borderColor: "black",
              background: "white",
            },
          }}
        >
          Log in
        </Button>
        <Button
          variant="contained"
          sx={{
            color: "black",
            borderColor: "black",
            background: "white",
            "&:hover": {
              height: "40px",
              color: grey[100],
              border: "1px solid white",
              background: "black",
            },
          }}
        >
          Sign In
        </Button>
      </Stack>
    </Box>
  );
};

export default Start;
