import React from "react";

import PageLayout from "../PageLayout";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import MovieListItem from "../../components/MovieListItem";
import LoadingMyList from "../../components/loadingElements/LoadingMyList";
import { getMyList } from "../../resources/helpers/movieApiHelper";

const MyList = () => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    (async function () {
      try {
        const movieData = await getMyList(3);
        setData(movieData);

        setLoading(false);
      } catch (e) {
        console.error(e);
        setLoading(false);
      }
    })();
  }, []);

  return (
    <PageLayout>
      <Typography mb="20px" mt="10vh" textAlign="left" variant="h2">
        My list
      </Typography>
      {!loading ? (
        <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
          {data[0].movies.map((movie, index) => (
            <MovieListItem key={`${movie.title}-${index}`} movie={movie} />
          ))}
        </Box>
      ) : (
        <LoadingMyList />
      )}
    </PageLayout>
  );
};

export default MyList;
