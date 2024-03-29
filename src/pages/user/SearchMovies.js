import React from "react";

import Box from "@mui/material/Box";
import PageLayout from "../PageLayout";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";

import { useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

import {
  getMoviesByGenre,
  getMoviesByName,
} from "../../resources/helpers/movieApiHelper";
import MovieCard from "../../components/carousel/MovieCard";
import LoadingMovieCard from "../../components/loadingElements/LoadingMovieCard";
import { MOVIE_GENRES, SEARCH_LENGTH } from "../../resources/constants";
import SearchInputs from "../../components/SearchInputs";
import { capitalizeFirstLetter } from "../../components/carousel/MoviesCarousel";

const SearchMovies = () => {
  const { genre } = useParams();
  const [genreMovies, setGenreMovies] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [page, setPage] = React.useState(1);
  const { enqueueSnackbar } = useSnackbar();
  const [pagesCount, setPagesCount] = React.useState(10);

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

        const searchedMovies = reqGenre
          ? await getMoviesByGenre(MOVIE_GENRES[reqGenre], page, SEARCH_LENGTH)
          : await getMoviesByName(genre, page, SEARCH_LENGTH);
        //TODO: Fix after backend implementation
        setGenreMovies(searchedMovies.movies);

        const count = searchedMovies.count;
        if (count % SEARCH_LENGTH === 0) {
          setPagesCount(count / SEARCH_LENGTH);
        } else {
          setPagesCount(Math.ceil(count / SEARCH_LENGTH));
        }
        setLoading(false);
      } catch (e) {
        enqueueSnackbar("Failed to search", { variant: "error" });

        setLoading(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      {genreMovies.length > 0 && (
        <Typography fontSize="20px" mt="20px">
          Showing results for "{capitalizeFirstLetter(genre)}":
        </Typography>
      )}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          marginTop: "20px",
          width: "100%",
          justifyContent: "center",
        }}
      >
        {loading ? (
          [...Array(SEARCH_LENGTH)].map((el, ind) => (
            <Box key={`${ind}-${genre}_`} sx={{ margin: "40px 30px" }}>
              <LoadingMovieCard />
            </Box>
          ))
        ) : genreMovies.length > 0 ? (
          genreMovies.map((movie, index) => (
            <Box key={`${movie.id}-${index}`} sx={{ margin: "40px 30px" }}>
              <MovieCard movie={movie} />
            </Box>
          ))
        ) : (
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Typography variant="h6">
              Seems we haven't found any movies according to your search
            </Typography>
          </Box>
        )}
      </Box>
      {genreMovies.length > 0 && (
        <Pagination
          count={pagesCount}
          page={page}
          onChange={handleChange}
          size="large"
          sx={{ margin: "5vh" }}
        />
      )}
    </PageLayout>
  );
};

export default SearchMovies;
