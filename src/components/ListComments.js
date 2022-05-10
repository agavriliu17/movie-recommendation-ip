import { IconButton, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { useState, useEffect } from "react";
import { comments as getCommets } from "../resources/comments";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";

const Comments = ({ currentUserId }) => {
  const [backendComments, setBackendCommets] = useState([]);

  useEffect(() => {
    getCommets().then((data) => {
      setBackendCommets(data);
    });
  }, []);
  return (
    <Box>
      <Container
        sx={{
          display: "flex",
          marginTop: "28px",
          flexDirection: "column",
        }}
      >
        {backendComments.map((comment, index) => (
          <Box key={`${comment.id}-${index}`} sx={{ marginBottom: "25px" }}>
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

            <Typography>{comment.message}</Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <IconButton
                onClick={() => {
                  comment.likes += 1;
                }}
              >
                <ThumbUpAltIcon />
              </IconButton>
              <Typography>{comment.likes}</Typography>
            </Box>
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export default Comments;
