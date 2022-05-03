import { IconButton, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { useState, useEffect } from "react";
import { comments as getCommets } from "../resources/comments";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';

const Comments = ({ currentUserId }) => {
    const [backendComments, setBackendCommets] = useState([]);
    

    console.log("backendComments", backendComments);

    useEffect(() => {
        getCommets().then((data) => {
            setBackendCommets(data);
        });
    }, []);
    return (
        <Paper>
            Comments
            {backendComments.map((comment) => (
               
                <Container
                    sx={{
                        display: "flex",
                        marginTop: "28px",
                    }}>
                    <Box>

                        <Box>{comment.date}</Box>
                        <Box
                            sx={{
                                marginRight: "8px",
                                fontSize: "20px",
                            }}>
                            {comment.user}
                        </Box>

                        <Box
                            sx={{

                            }}>{comment.message}</Box>


                        <IconButton>
                            <ThumbUpAltIcon
                           

                            onClick={() => {
                                comment.likes+=1;
                            }} />
                            </IconButton>



                        {comment.likes}

                    </Box>

                </Container>
            ))}
        </Paper>

    );
}

export default Comments;