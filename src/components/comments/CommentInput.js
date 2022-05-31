import React from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import UserContext from "../../resources/context/UserContext";
import { useSnackbar } from "notistack";
import { postComment } from "../../resources/helpers/commentsHelper";

const CommentInput = ({ movieId, handleRefresh }) => {
  const [value, setValue] = React.useState("");
  const [showButtons, setShowButtons] = React.useState(false);
  const { userData } = React.useContext(UserContext);
  const { enqueueSnackbar } = useSnackbar();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleComment = async () => {
    setValue("");
    setShowButtons(false);
    try {
      await postComment(value, movieId, userData.id);

      handleRefresh((prev) => prev + 1);
    } catch (e) {
      enqueueSnackbar("Could not post comment!", {
        variant: "error",
      });
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        margin: "25px 0px",
      }}
    >
      <Avatar sx={{ marginRight: "15px" }} />
      <Box sx={{ display: "flex", width: "100%", flexDirection: "column" }}>
        <TextField
          multiline
          maxRows={4}
          value={value}
          onChange={handleChange}
          sx={{ width: "100%" }}
          onFocus={() => setShowButtons(true)}
        />
        {showButtons && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              marginTop: "10px",
            }}
          >
            <Button
              variant="outlined"
              sx={{ marginRight: "10px", textTransform: "none" }}
              onClick={() => setShowButtons(false)}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              sx={{ textTransform: "none" }}
              disabled={value !== "" ? false : true}
              onClick={handleComment}
            >
              Comment
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default CommentInput;
