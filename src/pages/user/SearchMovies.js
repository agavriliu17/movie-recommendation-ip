import React from "react";

import Box from "@mui/material/Box";
import PageLayout from "../PageLayout";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";

import { useParams } from "react-router-dom";

import { getMoviesByGenre } from "../../resources/helpers/movieApiHelper";
import MovieCard from "../../components/carousel/MovieCard";
import LoadingMovieCard from "../../components/loadingElements/LoadingMovieCard";
import { MOVIE_GENRES, SEARCH_LENGTH } from "../../resources/constants";
import SearchInputs from "../../components/SearchInputs";

const SearchMovies = () => {
  const { genre } = useParams();
  const [genreMovies, setGenreMovies] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    setLoading(true);
    (async function () {
      try {
        const reqGenre = Object.keys(MOVIE_GENRES).find(
          (gen) => gen.toUpperCase() === genre.toUpperCase()
        );

        const searchedMovies = await getMoviesByGenre(
          MOVIE_GENRES[reqGenre],
          page,
          SEARCH_LENGTH
        );
        setGenreMovies(searchedMovies);

        setLoading(false);
      } catch (e) {
        console.error(e);

        setLoading(false);
      }
    })();
  }, [genre, page]);

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <PageLayout>
      <Box sx={{ width: "100%" }}>
        <Typography align="left" variant="h4" sx={{ marginTop: "10vh" }}>
          Search movies
        </Typography>
      </Box>
      <Box sx={{ display: "flex", width: "100%", margin: "25px 0px" }}>
        <SearchInputs />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          marginTop: "10vh",
          width: "100%",
          justifyContent: "center",
        }}
      >
        {loading
          ? [...Array(SEARCH_LENGTH)].map((el, ind) => (
              <Box key={`${ind}-${genre}_`} sx={{ margin: "40px 30px" }}>
                <LoadingMovieCard />
              </Box>
            ))
          : genreMovies.length > 0 &&
            genreMovies.map((movie, index) => (
              <Box key={`${movie.id}-${index}`} sx={{ margin: "40px 30px" }}>
                <MovieCard movie={movie} />
              </Box>
            ))}
      </Box>
      <Pagination
        count={10}
        page={page}
        onChange={handleChange}
        size="large"
        sx={{ marginBottom: "5vh" }}
      />
    </PageLayout>
  );
};

export default SearchMovies;