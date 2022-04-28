import React from "react";

import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";

import AuthLayout from "./AuthLayout";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  inputContainer: {
    backgroundColor: "rgb(51 51 51)",
    width: "100%",
    height: "55px",
    marginBottom: "30px",
  },
  inputField: { width: "100%", height: "55px" },
  submitButton: {
    margin: "15px 0px !important",
    textTransform: "none !important",
    width: "40%",
  },
  signInContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  linkButton: {
    "&.MuiButtonBase-root:hover": {
      bgcolor: "transparent",
    },
  },
});

const ResetPassword = () => {
  const [input, setInput] = React.useState({
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = React.useState({
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleChange = (event, key) => {
    setInput({ ...input, [key]: event.target.value });
  };

  const handleSubmit = () => {
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

  //TODO: We should also have an input for the email of the account
  // send an email and then show the reset password inputs
  const classes = useStyles();
  return (
    <AuthLayout>
      <Typography color="#fff" mb="25px" variant="h4" fontFamily="sans-serif">
        Reset Password
      </Typography>
      <Paper className={classes.inputContainer}>
        <TextField
          className={classes.inputField}
          label="Password"
          type="password"
          error={error.password === "" ? false : true}
          helperText={error.password}
          id="password"
          onChange={(ev) => handleChange(ev, "password")}
          value={input.password}
          variant="filled"
          InputLabelProps={{
            sx: {
              color: "#8c8c8c",
            },
          }}
        />
      </Paper>

      <Paper className={classes.inputContainer}>
        <TextField
          className={classes.inputField}
          label="Confirm Password"
          error={error.confirmPassword === "" ? false : true}
          type="password"
          helperText={error.confirmPassword}
          onChange={(ev) => handleChange(ev, "confirmPassword")}
          value={input.confirmPassword}
          variant="filled"
          InputLabelProps={{
            sx: {
              color: "#8c8c8c",
            },
          }}
        />
      </Paper>

      <Button
        variant="contained"
        className={classes.submitButton}
        onClick={handleSubmit}
      >
        Submit
      </Button>
      <Box className={classes.signInContainer}>
        <Button
          variant="text"
          disableFocusRipple
          disableElevation
          disableRipple
          className={classes.linkButton}
          onClick={() => navigate("/login")}
        >
          <Typography sx={{ textTransform: "none", color: "#fff" }}>
            Back to login
          </Typography>
        </Button>
      </Box>
    </AuthLayout>
  );
};
export default ResetPassword;
