import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";

const LoadingComment = () => {
  return (
    <Box>
      {[...Array(3)].map((el, ind) => (
        <Box
          sx={{
            marginBottom: "25px",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
          }}
          key={`${ind}-loading-comment`}
        >
          <Skeleton
            variant="circular"
            width={40}
            height={40}
            sx={{ marginRight: "15px" }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <Skeleton variant="rectangle" width={80} height={20} />
            <Skeleton
              variant="rectangle"
              height={80}
              sx={{ width: "100%", marginTop: "10px" }}
            />
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default LoadingComment;
