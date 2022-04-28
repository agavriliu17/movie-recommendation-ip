import React from "react";

import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import axios from "axios";

const columns = [
  {
    field: "movieTitle",
    headerName: "Title",
    flex: 1,
    disableColumnMenu: true,
  },
  {
    field: "director",
    headerName: "Directed by",
    flex: 0.5,
    sortable: false,
    // width: 150,
  },
  {
    field: "views",
    headerName: "Views",
    // type: "number",
    flex: 0.5,
    align: "left",
    // width: 150,
  },
  {
    field: "genre",
    headerName: "Genre",
    flex: 0.5,
    sortable: false,
    // width: 110,
  },
];

const MoviesTable = () => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    (async function () {
      try {
        const movieData = await axios
          .get("http://localhost:3000/rows")
          .then((res) => res.data);

        const timedData = await new Promise((resolve) => {
          setTimeout(() => resolve(movieData), 3000);
        });

        setData(timedData);
        setLoading(false);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <Typography fontSize="20px" mb={1}>
        Top 5 movies
      </Typography>
      <DataGrid
        rows={data}
        columns={columns}
        checkboxSelection
        loading={loading}
        disableSelectionOnClick
        autoHeight
        hideFooter
        disableColumnSelector
        sx={{
          "& .MuiDataGrid-iconSeparator": {
            display: "none",
          },
        }}
        initialState={{
          sorting: {
            sortModel: [
              {
                field: "views",
                sort: "desc",
              },
            ],
          },
        }}
      />
    </Box>
  );
};

export default MoviesTable;
