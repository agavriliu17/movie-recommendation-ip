import React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Rating from "@mui/material/Rating";
import UserContext from "../../resources/context/UserContext";
import { updateRating } from "../../resources/helpers/ratingsHelper";
import { useSnackbar } from "notistack";

import { getMovieRating } from "../../resources/helpers/ratingsHelper";

import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import StarIcon from "@mui/icons-material/Star";

const RateButton = ({ title, movieId }) => {
  const [open, setOpen] = React.useState(false);
  const [rating, setRating] = React.useState(0);
  const { enqueueSnackbar } = useSnackbar();
  const { userData } = React.useContext(UserContext);

  React.useEffect(() => {
    (async function () {
      try {
        if (userData.id && movieId) {
          const data = await getMovieRating(movieId, userData.id);
          setRating(data);
        }
      } catch (e) {
        enqueueSnackbar("Failed to fetch movie rating!", { variant: "error" });
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleUpdateRating = async () => {
    try {
      const res = await updateRating(movieId, userData.id, rating);

      if (res) handleClose();
    } catch (e) {
      console.log(e);
    }
  };

  const removeRating = () => {
    setRating(0);
    handleClose();
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography
        ml="5px"
        fontSize="15px"
        mb="5px"
        textAlign="left"
        color="#b1b1b1"
      >
        Your rating:
      </Typography>
      {rating === 0 ? (
        <Button
          sx={{ height: "fit-content", textTransform: "none" }}
          onClick={handleOpen}
        >
          <StarOutlineOutlinedIcon sx={{ fontSize: "45px" }} />
          <Typography ml="5px" fontSize="25px">
            Rate
          </Typography>
        </Button>
      ) : (
        <Button
          sx={{
            height: "fit-content",
            textTransform: "none",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
          }}
          onClick={handleOpen}
        >
          <StarIcon sx={{ fontSize: "45px", color: "#5799ef" }} />
          <Typography
            ml="5px"
            fontSize="30px"
            textAlign="left"
            sx={{ color: "#5799ef" }}
          >
            {rating}
          </Typography>
          <Typography fontSize="22px" textAlign="left" color="#b1b1b1" ml="2px">
            /10
          </Typography>
        </Button>
      )}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "#1f1f1f",
            boxShadow: 24,
            p: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" color="#f5c518">
            Rate this
          </Typography>
          <Typography variant="h5" color="#fff">
            {title}
          </Typography>
          <Rating
            name="customized-10"
            max={10}
            value={rating}
            size="large"
            onChange={(event, newValue) => {
              setRating(newValue);
            }}
            sx={{
              marginTop: "25px",
              "& .MuiRating-iconFilled": {
                color: "#5799ef",
              },
            }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "75%",
              marginTop: "20px",
            }}
          >
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
              onClick={handleUpdateRating}
              variant="contained"
              fullWidth
            >
              Rate
            </Button>

            <Button
              sx={{
                height: "fit-content",
                textTransform: "none",
                marginTop: "10px",
                color: "#5799ef",
                "&:hover": {
                  backgroundColor: "rgba(87,153,239,0.2)",
                },
              }}
              disabled={rating === 0 ? true : false}
              onClick={removeRating}
              fullWidth
            >
              Remove rating
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default RateButton;
