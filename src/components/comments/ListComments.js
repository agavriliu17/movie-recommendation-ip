import React from "react";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { useSnackbar } from "notistack";
import LoadingComment from "../loadingElements/LoadingComment";
import moment from "moment";

import { getMovieComments } from "../../resources/helpers/commentsHelper";

const Comments = ({ movieId, shouldRefresh }) => {
  const [comments, setComments] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const { enqueueSnackbar } = useSnackbar();

  React.useEffect(() => {
    setLoading(true);

    (async function () {
      try {
        const data = await getMovieComments(movieId);
        setComments(data);

        setLoading(false);
      } catch (e) {
        setLoading(false);
        enqueueSnackbar("Could not fetch comments!", { variant: "error" });
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId, shouldRefresh]);

  return (
    <Box
      sx={{
        display: "flex",
        marginTop: "28px",
        flexDirection: "column",
      }}
    >
      {loading ? (
        <LoadingComment />
      ) : (
        comments.length > 0 &&
        comments
          .slice(0)
          .reverse()
          .map((comment, index) => (
            <Box
              key={`${comment.id}-${index}`}
              sx={{
                marginBottom: "25px",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
              }}
            >
              <Avatar sx={{ marginRight: "15px" }} />
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
                    {comment.userObj.username}
                  </Typography>
                  <Typography color="#b1b1b1">
                    {moment(comment.date).fromNow()}
                  </Typography>
                </Box>

                <Typography color="#fff">{comment.content}</Typography>
              </Box>
            </Box>
          ))
      )}
    </Box>
  );
};

export default Comments;
