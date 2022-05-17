import React from "react";

import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/system";

import AuthLayout from "./AuthLayout";
import { useNavigate } from "react-router-dom";
import {
  registerUser,
  validateEmail,
} from "../../resources/helpers/authHelper";


const useStyles = makeStyles({
  inputContainer: {
    width: "100%",
    height: "55px",
    marginBottom: "30px",
  },
  inputField: { width: "100%", height: "55px" },
  signUpButton: {
    margin: "15px 0px !important",
    textTransform: "none !important",
    width: "40%",
  },
  signInContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: "25px",
  },
  linkButton: {
    "&.MuiButtonBase-root:hover": {
      bgcolor: "transparent",
    },
  },
});

const Register = () => {

  const theme = useTheme();

  const [input, setInput] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleChangeInput = (event, key) => {
    setInput({ ...input, [key]: event.target.value });
    
  };

  const handleSignUp = async () => {
    const firstNameError =
      input.firstName === "" ? "Please provide your first name" : "";

    const lastNameError =
      input.lastName === "" ? "Please provide your last name" : "";

    const emailError =
      input.email === "" || !validateEmail(input.email)
        ? "Please provide an valid email"
        : "";

    const usernameError =
      input.username < 4 ? "Please provide a valid username" : "";

    const passwordError =
      input.password.length < 8
        ? "Your password must be at at least 8 characters long "
        : "";

    const confirmPasswordError =
      input.confirmPassword !== input.password
        ? "The password provided does not match"
        : "";

    if (
      firstNameError === "" &&
      lastNameError === "" &&
      emailError === "" &&
      usernameError === "" &&
      passwordError === "" &&
      confirmPasswordError === ""
    ) {
      try {
        const response = await registerUser(input);
        if (response) navigate("/login");
      } catch (e) {
        console.log(e); //TODO: Show the user the error in some way
      }
    } else
      setError({
        firstName: firstNameError,
        lastName: lastNameError,
        email: emailError,
        username: usernameError,
        password: passwordError,
        confirmPassword: confirmPasswordError,
      });
  };

  const classes = useStyles();
  return (
    <AuthLayout>
      <Typography variant="h4" mb="25px" data-testid="Sign Up Title">
        Sign up
      </Typography>

      <Paper className={classes.inputContainer}>
        <TextField
          data-testid="First Name"
          error={error.firstName === "" ? false : true}
          label="First Name"
          helperText={error.firstName}
          onChange={(event) => handleChangeInput(event, "firstName")}
          value={input.firstName}
          className={classes.inputField}
          variant="filled"
        />
      </Paper>

      <Paper className={classes.inputContainer}>
        <TextField
          data-testid="Last Name"
          error={error.lastName === "" ? false : true}
          label="Last Name"
          onChange={(event) => handleChangeInput(event, "lastName")}
          value={input.lastName}
          helperText={error.lastName}
          className={classes.inputField}
          variant="filled"
        />
      </Paper>

      <Paper className={classes.inputContainer}>
        <TextField
          data-testid="Email"
          error={error.email === "" ? false : true}
          label="Email address"
          helperText={error.email}
          onChange={(event) => handleChangeInput(event, "email")}
          value={input.email}
          className={classes.inputField}
          variant="filled"
        />
      </Paper>

      <Paper className={classes.inputContainer}>
        <TextField
         data-testid="Username"
          error={error.username === "" ? false : true}
          label="Username"
          helperText={error.username}
          onChange={(event) => handleChangeInput(event, "username")}
          value={input.username}
          className={classes.inputField}
          variant="filled"
        />
      </Paper>

      <Paper className={classes.inputContainer}>
        <TextField
          data-testid="Password"
          error={error.password === "" ? false : true}
          label="Password"
          type="password"
          onChange={(event) => handleChangeInput(event, "password")}
          value={input.password}
          helperText={error.password}
          className={classes.inputField}
          variant="filled"
        />
      </Paper>

      <Paper className={classes.inputContainer}>
        <TextField
          data-testid="Confirm password"
          error={error.confirmPassword === "" ? false : true}
          label="Confirm password"
          type="password"
          onChange={(event) => handleChangeInput(event, "confirmPassword")}
          helperText={error.confirmPassword}
          value={input.confirmPassword}
          className={classes.inputField}
          variant="filled"
        />
      </Paper>

      <Button
        data-testid="Submit"
        variant="contained"
        className={classes.signUpButton}
        onClick={handleSignUp}
      >
        Sign up
      </Button>

      <Box className={classes.signInContainer}>
        <Typography>Already a user?</Typography>
        <Button
          variant="text"
          disableFocusRipple
          disableElevation
          disableRipple
          className={classes.linkButton}
          onClick={() => navigate("/login")}
        >
          <Typography sx={{ textTransform: "none" }}>
            Sign in now.
          </Typography>
        </Button>
      </Box>
    </AuthLayout>
  );
};

export default Register;
