import React from "react";

import PageLayout from "../PageLayout";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useSnackbar } from "notistack";

import MovieListItem from "../../components/MovieListItem";
import LoadingMyList from "../../components/loadingElements/LoadingMyList";
import { getMyList } from "../../resources/helpers/movieApiHelper";
import UserContext from "../../resources/context/UserContext";

const MyList = () => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const { userData } = React.useContext(UserContext);
  const { enqueueSnackbar } = useSnackbar();

  React.useEffect(() => {
    (async function () {
      try {
        if (userData) {
          const movieData = await getMyList(userData.id);
          setData(movieData);

          setLoading(false);
        }
      } catch (e) {
        enqueueSnackbar("Failed to fetch your watchlist!", {
          variant: "error",
        });
        setLoading(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData]);

  return (
    <PageLayout>
      <Typography mb="20px" mt="10vh" textAlign="left" variant="h2">
        My list
      </Typography>
      {!loading ? (
        data ? (
          <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
            {data.movies.map((movie, index) => (
              <MovieListItem key={`${movie.title}-${index}`} movie={movie} />
            ))}
          </Box>
        ) : (
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant="h4">No movies here yet</Typography>
            <Typography variant="h6" mt="10px">
              You'll see here your favorite movies after you'll click the "Add
              to Watchlist" button in movie page.
            </Typography>
          </Box>
        )
      ) : (
        <LoadingMyList />
      )}
    </PageLayout>
  );
};

export default MyList;
