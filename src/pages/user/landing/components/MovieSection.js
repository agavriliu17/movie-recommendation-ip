import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ShowcaseCard from "./ShowcaseCard";
import Chip from "@mui/material/Chip";
import RatingDisplay from "../../../../components/ratings/RatingDisplay";
import Fade from "react-reveal/Fade";
import Grid from "@mui/material/Grid";

import Link from "@mui/material/Link";

const MovieSection = ({ movie, goToMovie }) => {
  const handleMovieClick = () => {
    goToMovie(movie.id);
  };

  return (
    <Fade>
      <Grid
        sx={{
          marginBottom: "12vh",
        }}
        container
        spacing={8}
        justifyContent="center"
        alignContent="center"
      >
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            marginRight: "20px",
          }}
          xs={12}
          sm={6}
          item
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
                width: "fit-content",
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
                width: "fit-content",
              }}
              onClick={handleMovieClick}
            >
              Leave a comment...
            </Link>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          sm={5}
          sx={{ display: "flex", width: "100%", justifyContent: "center" }}
        >
          <ShowcaseCard movie={movie} />
        </Grid>
      </Grid>
    </Fade>
  );
};

export default MovieSection;
