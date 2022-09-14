import React from "react";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import OutlinedInput from "@mui/material/OutlinedInput";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

import { capitalizeFirstLetter } from "./carousel/MoviesCarousel";

import { MOVIE_GENRES } from "../resources/constants";

const SearchInputs = () => {
  const [input, setInput] = React.useState("");
  const [selectedTypes, setTypes] = React.useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setTypes(value);
  };

  const handleSearch = () => {
    if (selectedTypes !== "" && input === "") {
      setInput("");
      navigate(`/search/${selectedTypes}`);
    } else if (input !== "") {
      navigate(`/search/${input}`);
    }
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
              backgroundColor: "#2d333b",
            }}
          >
            <TextField
              placeholder="Search movies by title or genre"
              variant="outlined"
              fullWidth
              onChange={handleInputChange}
              value={input}
              sx={{ color: "#fff" }}
            />
          </Paper>

          <Box
            sx={{
              marginLeft: "10px",
              flexDirection: "row",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Paper
              sx={{
                width: "150px",
                marginRight: "10px",
                marginBottom: "5px",
                backgroundColor: "#2d333b",
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
                      backgroundColor: "#2d333b",
                    },
                  },
                }}
                sx={{ color: "#fff" }}
              >
                <MenuItem
                  value={""}
                  disabled={selectedTypes === ""}
                  sx={{ color: "#fff" }}
                >
                  Select type
                </MenuItem>
                {Object.keys(MOVIE_GENRES).map((type, index) => (
                  <MenuItem
                    key={`${type}-${index}`}
                    value={type}
                    sx={{ color: "#fff" }}
                  >
                    {capitalizeFirstLetter(type)}
                  </MenuItem>
                ))}
              </Select>
            </Paper>

            <Button
              variant="contained"
              onClick={handleSearch}
              sx={{
                height: "fit-content",
                backgroundImage:
                  "linear-gradient(90deg, rgb(71, 16, 193), rgb(120, 87, 255) 92%, rgb(129, 155, 253) 100%)",
                color: "#fff",
                borderRadius: "25px",
                backgroundColor: "transparent",
                textTransform: "none",
                padding: "5px 20px",

                "&:hover": {
                  transition: "ease",
                  backgroundColor: "rgb(91,28,230)",
                  backgroundImage: "none",
                },
              }}
            >
              <Typography fontSize="20px">Search</Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </Fade>
  );
};

export default SearchInputs;
