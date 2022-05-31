import React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import CheckIcon from "@mui/icons-material/Check";
import { useSnackbar } from "notistack";
import UserContext from "../resources/context/UserContext";

import { addToMyList } from "../resources/helpers/movieApiHelper";

const AddMovieButton = ({ movieId }) => {
  const [inWatchlist, setInWatchList] = React.useState(false);
  const { userData } = React.useContext(UserContext);
  const { enqueueSnackbar } = useSnackbar();

  const handleWatchlist = async () => {
    try {
      const res = await addToMyList(userData.id, movieId);
      if (res) setInWatchList(!inWatchlist);
    } catch (e) {
      enqueueSnackbar("Failed to add to watchlist!", { variant: "error" });
    }
  };

  return (
    <Button
      sx={{
        textTransform: "none",
        marginLeft: "15px",
        backgroundColor: "rgba(158,158,158,0.6)",
        padding: "5px 25px",
        "&:hover": {
          backgroundColor: "rgba(158,158,158,0.4)",
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
