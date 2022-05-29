import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import ListComments from "./ListComments";
import CommentInput from "./CommentInput";

const Comments = ({ movieId }) => {
  const [refreshTrigger, setRefreshTrigger] = React.useState(true);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <Typography ml="20px" fontSize="25px" mt={5} textAlign="left">
        Comments
      </Typography>
      <CommentInput movieId={movieId} handleRefresh={setRefreshTrigger} />
      <ListComments movieId={movieId} shouldRefresh={refreshTrigger} />
    </Box>
  );
};

export default Comments;
