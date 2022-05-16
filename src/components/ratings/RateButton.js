import React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Rating from "@mui/material/Rating";

import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";

const RateButton = ({ title }) => {
  const [open, setOpen] = React.useState(false);
  const [rating, setRating] = React.useState(0);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const updateRating = () => {
    handleClose();
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
      <Button
        sx={{ height: "fit-content", textTransform: "none" }}
        onClick={handleOpen}
      >
        <StarOutlineOutlinedIcon sx={{ fontSize: "45px" }} />
        <Typography ml="5px" fontSize="25px">
          Rate
        </Typography>
      </Button>
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
              onClick={updateRating}
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
