import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ShowcaseCard from "./ShowcaseCard";
import Chip from "@mui/material/Chip";
import { GODFATHER } from "../../../../resources/constants";
import RatingDisplay from "../../../../components/ratings/RatingDisplay";
import { useNavigate } from "react-router-dom";

import Link from "@mui/material/Link";

import Fade from "react-reveal/Fade";

const About = () => {
  const navigate = useNavigate();

  const goToMovie = () => {
    navigate(`/login`);
  };

  return (
    <Fade>
      <Container>
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
            <Typography color="#fff" fontSize="40px">
              Discover movies you'll truly enjoy
            </Typography>
            <Typography color="#F9F871" fontSize="25px" mt="10px">
              The Godfather (1972)
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                marginBottom: "20px",
              }}
            >
              {GODFATHER.type.map((genre, index) => (
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
              {GODFATHER.description}
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginTop: "30px",
              }}
            >
              <RatingDisplay
                voteAverage={GODFATHER.voteAverage}
                voteCount={GODFATHER.voteCount}
              />
              <Link
                sx={{
                  color: "#fff",
                  cursor: "pointer",
                  fontSize: "14px",
                  marginTop: "15px",
                }}
                onClick={goToMovie}
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
                onClick={goToMovie}
              >
                Leave a comment...
              </Link>
            </Box>
          </Box>
          <ShowcaseCard movie={GODFATHER} />
        </Box>
      </Container>
    </Fade>
  );
};

export default About;
