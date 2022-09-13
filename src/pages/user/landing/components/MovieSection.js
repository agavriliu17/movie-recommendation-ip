import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ShowcaseCard from "./ShowcaseCard";
import Chip from "@mui/material/Chip";
import RatingDisplay from "../../../../components/ratings/RatingDisplay";
import Fade from "react-reveal/Fade";

import Link from "@mui/material/Link";

const MovieSection = ({ movie, goToMovie }) => {
  const handleMovieClick = () => {
    goToMovie(movie.id);
  };

  return (
    <Fade>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          marginBottom: "10vh",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginRight: "20px",
            maxWidth: "50%",
          }}
        >
          <Typography color="#F9F871" fontSize="25px" mt="10px">
            {movie.name}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              marginBottom: "20px",
            }}
          >
            {movie.type.map((genre, index) => (
              <Chip
                label={genre.name}
                key={`${genre.id}-${index}`}
                size="small"
                sx={{
                  margin: index === 0 ? "0px 5px 5px 0px" : "0px 5px",
                  ".MuiChip-label": { fontSize: "14px" },
                }}
              />
            ))}
          </Box>

          <Typography color="#fff" fontSize="16px" mt="10px">
            {movie.description}
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginTop: "30px",
            }}
          >
            <RatingDisplay
              voteAverage={movie.voteAverage}
              voteCount={movie.voteCount}
            />
            <Link
              sx={{
                color: "#fff",
                cursor: "pointer",
                fontSize: "14px",
                marginTop: "15px",
              }}
              onClick={handleMovieClick}
            >
              Seen it? Add your rating
            </Link>
            <Link
              sx={{
                color: "#fff",
                cursor: "pointer",
                fontSize: "14px",
                marginTop: "10px",
              }}
              onClick={handleMovieClick}
            >
              Leave a comment...
            </Link>
          </Box>
        </Box>
        <ShowcaseCard movie={movie} />
      </Box>
    </Fade>
  );
};

export default MovieSection;
