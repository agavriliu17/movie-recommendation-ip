import React from "react";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import TextField from "@mui/material/TextField";

import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const [input, setInput] = React.useState({
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = React.useState({
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleChangePass = (event, key) => {
    setInput({ ...input, [key]: event.target.value });
  };

  const handleSubmitPass = () => {
    const passwordError =
      input.password.length < 8
        ? "Your password must be at at least 8 characters long "
        : "";

    const confirmPasswordError =
      input.confirmPassword !== input.password
        ? "The password provided does not match"
        : "";

    if (passwordError === "" && confirmPasswordError === "") {
      alert("Password has been successfully reset");
      navigate("/login");
    } else {
      setError({
        password: passwordError,
        confirmPassword: confirmPasswordError,
      });
    }
  };

  return (
    <Card
      sx={{
        minWidth: "275",
        width: "100%",
        bgcolor: "#1f1f1f",
        padding: "2rem",
      }}
    >
      <Typography align="left" variant="h4" mb="2rem" component={"span"}>
        Password
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column" }} autoComplete="off">
        <TextField
          label="Current Password"
          type="password"
          variant="filled"
          InputLabelProps={{
            sx: {
              color: "#8c8c8c",
            },
          }}
          sx={{ margin: "10px 0px" }}
        />
        <TextField
          label="New Password"
          type="password"
          error={error.password === "" ? false : true}
          helperText={error.password}
          id="password"
          onChange={(ev) => handleChangePass(ev, "password")}
          value={input.password}
          variant="filled"
          InputLabelProps={{
            sx: {
              color: "#8c8c8c",
            },
          }}
          sx={{ margin: "10px 0px" }}
        />
        <TextField
          label="Confirm Password"
          error={error.confirmPassword === "" ? false : true}
          type="password"
          helperText={error.confirmPassword}
          onChange={(ev) => handleChangePass(ev, "confirmPassword")}
          value={input.confirmPassword}
          variant="filled"
          InputLabelProps={{
            sx: {
              color: "#8c8c8c",
            },
          }}
          sx={{ margin: "10px 0px" }}
        />
      </Box>
      <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button variant="contained" onClick={handleSubmitPass}>
          Save changes
        </Button>
      </CardActions>
    </Card>
  );
};

export default ChangePassword;
