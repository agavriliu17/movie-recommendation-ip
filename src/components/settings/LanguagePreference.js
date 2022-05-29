import React from "react";

import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";

const LanguagePreference = () => {
  const [state, setState] = React.useState({
    same: true,
    en: false,
    ro: false,
  });
  const handleChangeForm = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { same, en, ro } = state;
  return (
    <Card
      sx={{
        minWidth: "275",
        width: "100%",
        bgcolor: "#1f1f1f",
        padding: "2rem",
      }}
    >
      <Typography align="left" variant="h4" mb="2rem">
        Display Language
      </Typography>
      <Typography ml="20px" mt="10px" fontSize="15px" color="#fff">
        Choose which language you want to use in the app.
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "20px",
        }}
      >
        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={same}
                  onChange={handleChangeForm}
                  name="same"
                  sx={{ color: "#fff" }}
                />
              }
              label="Same as device language"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={en}
                  onChange={handleChangeForm}
                  name="en"
                  sx={{ color: "#fff" }}
                />
              }
              label="English (US)"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={ro}
                  onChange={handleChangeForm}
                  name="ro"
                  sx={{ color: "#fff" }}
                />
              }
              label="Romana"
            />
          </FormGroup>
        </FormControl>
      </Box>
      <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button variant="contained">Save changes</Button>
      </CardActions>
    </Card>
  );
};

export default LanguagePreference;
