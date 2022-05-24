import React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import CheckIcon from "@mui/icons-material/Check";

const AddMovieButton = () => {
  const [inWatchlist, setInWatchList] = React.useState(true);

  const handleWatchlist = () => setInWatchList(!inWatchlist);

  return (
    <Button
      sx={{
        height: "fit-content",
        textTransform: "none",
        backgroundColor: "#313131",
        color: "#fff",
        "&:hover": {
          backgroundColor: "#404040",
        },
      }}
      variant="contained"
      onClick={handleWatchlist}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {inWatchlist ? (
          <CheckIcon sx={{ marginRight: "5px" }} />
        ) : (
          <AddIcon sx={{ marginRight: "5px" }} />
        )}
        {inWatchlist ? "In Watchlist" : "Add to Watchlist"}
      </Box>
    </Button>
  );
};

export default AddMovieButton;
