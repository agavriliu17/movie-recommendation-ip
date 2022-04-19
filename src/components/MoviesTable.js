import React from "react";

import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

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

const rows = [
  {
    id: "1",
    movieTitle: "The Adam Project",
    director: "Shawn Levy",
    views: "1200",
    genre: ["Comedy", "Adventure"],
  },
  {
    id: "2",
    movieTitle: "CURS>R",
    director: "Toby Meakins",
    views: "5402",
    genre: ["Horror", "Mystery"],
  },
  {
    id: "3",
    movieTitle: "Metal Lords",
    director: "Kim Farrant",
    views: "7802",
    genre: ["Drama", "Music"],
  },
  {
    id: "4",
    movieTitle: "Against the Ice",
    director: "Peter Flinth",
    views: "5436",
    genre: ["Adventure", "Historical"],
  },
  {
    id: "5",
    movieTitle: "Deep Water",
    director: "Adrian Lyne",
    views: "1567",
    genre: ["Drama", "Thriller", "Mystery"],
  },
];

const MoviesTable = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Typography fontSize="20px" mb={1}>
        Top 5 movies
      </Typography>
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection
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
