import React from "react";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";

import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import { comments } from "../resources/comments";

const Comments = () => {
  const [backendComments, setBackendComments] = React.useState([]);

  React.useEffect(() => {
    comments().then((data) => {
      setBackendComments(data);
    });
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        marginTop: "28px",
        flexDirection: "column",
      }}
    >
      {backendComments.map((comment, index) => (
        <Box
          key={`${comment.id}-${index}`}
          sx={{
            marginBottom: "25px",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
          }}
        >
          <Avatar sx={{ marginRight: "15px" }}>T</Avatar>
          <Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "baseline",
              }}
            >
              <Typography
                sx={{
                  marginRight: "8px",
                  fontSize: "20px",
                }}
              >
                {comment.user}
              </Typography>
              <Typography color="#b1b1b1">{comment.date}</Typography>
            </Box>

            <Typography color="#fff">{comment.message}</Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <IconButton>
                <ThumbUpAltIcon />
              </IconButton>
              <Typography>{comment.likes}</Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Comments;
