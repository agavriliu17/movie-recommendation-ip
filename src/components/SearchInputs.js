import React from "react";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import OutlinedInput from "@mui/material/OutlinedInput";
import Fade from "@mui/material/Fade";
import { useTheme } from "@mui/material/styles";

import { MOVIE_GENRES } from "../resources/constants";

const SearchInputs = () => {
  const [input, setInput] = React.useState("");
  const [selectedTypes, setTypes] = React.useState("");
  const theme = useTheme();

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setTypes(value);
  };

  return (
    <Fade in timeout={500}>
      <Box sx={{ display: "flex", flexFlow: "column", alignItems: "center" }}>
        <Box
          sx={{
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "center",
          }}
        >
          <Paper
            sx={{
              minWidth: "300px",
              marginBottom: "5px",
              backgroundColor:
                theme.palette.mode === "light" ? "#fff" : "#2d333b",
            }}
          >
            <TextField
              placeholder="Search movies by title or genre"
              variant="outlined"
              fullWidth
              onChange={handleInputChange}
              value={input}
            />
          </Paper>

          <Box
            sx={{
              marginLeft: "10px",
              flexDirection: "row",
              display: "flex",
            }}
          >
            <Paper
              sx={{
                width: "150px",
                marginRight: "10px",
                marginBottom: "5px",
                backgroundColor:
                  theme.palette.mode === "light" ? "#fff" : "#2d333b",
              }}
            >
              <Select
                displayEmpty
                fullWidth
                input={<OutlinedInput placeholder="Chip" />}
                value={selectedTypes}
                onChange={handleChange}
                MenuProps={{
                  PaperProps: {
                    sx: {
                      maxHeight: 200,
                      backgroundColor:
                        theme.palette.mode === "light" ? "#fff" : "#2d333b",
                    },
                  },
                }}
              >
                <MenuItem value={""} disabled={selectedTypes === ""}>
                  Select type
                </MenuItem>
                {Object.keys(MOVIE_GENRES).map((type, index) => (
                  <MenuItem key={`${type}-${index}`} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </Select>
            </Paper>

            <Tooltip title="Search">
              <Button
                variant="contained"
                color="error"
                sx={{ marginBottom: "5px" }}
              >
                Search
              </Button>
            </Tooltip>
          </Box>
        </Box>
      </Box>
    </Fade>
  );
};

export default SearchInputs;
