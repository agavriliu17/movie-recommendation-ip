import React from "react";

import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/system";
import { useSnackbar } from "notistack";

import AuthLayout from "./AuthLayout";
import { useNavigate } from "react-router-dom";
import {
  registerUser,
  validateEmail,
  validatePassword,
} from "../../resources/helpers/authHelper";
import UserContext from "../../resources/context/UserContext";

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
  const [loading, setLoading] = React.useState(false);
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

  const { setLoginMessage } = React.useContext(UserContext);
  const theme = useTheme();
  const { enqueueSnackbar } = useSnackbar();
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
        : !validatePassword(input.password)
        ? "The password should contain at least 1 special character"
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
      setLoading(true);
      try {
        setError({
          firstName: firstNameError,
          lastName: lastNameError,
          email: emailError,
          username: usernameError,
          password: passwordError,
          confirmPassword: confirmPasswordError,
        });
        const response = await registerUser(input);
        if (response) {
          setLoginMessage("Account created successfully!");
          navigate("/IP-Movie-streaming-website/login");
        }
      } catch (e) {
        setLoading(false);
        enqueueSnackbar(e.message, { variant: "error" });
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
      <Typography color={theme.palette.text.primary} variant="h4" mb="25px">
        Sign up
      </Typography>

      <Paper className={classes.inputContainer}>
        <TextField
          error={error.firstName === "" ? false : true}
          label="First Name"
          helperText={error.firstName}
          onChange={(event) => handleChangeInput(event, "firstName")}
          value={input.firstName}
          className={classes.inputField}
          variant="filled"
          InputLabelProps={{
            sx: {
              color: theme.palette.text.primary,
            },
          }}
        />
      </Paper>

      <Paper className={classes.inputContainer}>
        <TextField
          error={error.lastName === "" ? false : true}
          label="Last Name"
          onChange={(event) => handleChangeInput(event, "lastName")}
          value={input.lastName}
          helperText={error.lastName}
          className={classes.inputField}
          variant="filled"
          InputLabelProps={{
            sx: {
              color: theme.palette.text.primary,
            },
          }}
        />
      </Paper>

      <Paper className={classes.inputContainer}>
        <TextField
          error={error.email === "" ? false : true}
          label="Email address"
          helperText={error.email}
          onChange={(event) => handleChangeInput(event, "email")}
          value={input.email}
          className={classes.inputField}
          variant="filled"
          InputLabelProps={{
            sx: {
              color: theme.palette.text.primary,
            },
          }}
        />
      </Paper>

      <Paper className={classes.inputContainer}>
        <TextField
          error={error.username === "" ? false : true}
          label="Username"
          helperText={error.username}
          onChange={(event) => handleChangeInput(event, "username")}
          value={input.username}
          className={classes.inputField}
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
          error={error.password === "" ? false : true}
          label="Password"
          type="password"
          onChange={(event) => handleChangeInput(event, "password")}
          value={input.password}
          helperText={error.password}
          className={classes.inputField}
          variant="filled"
          InputLabelProps={{
            sx: {
              color: theme.palette.text.primary,
            },
          }}
        />
      </Paper>

      <Paper className={classes.inputContainer}>
        <TextField
          error={error.confirmPassword === "" ? false : true}
          label="Confirm password"
          type="password"
          onChange={(event) => handleChangeInput(event, "confirmPassword")}
          helperText={error.confirmPassword}
          value={input.confirmPassword}
          className={classes.inputField}
          variant="filled"
          InputLabelProps={{
            sx: {
              color: theme.palette.text.primary,
            },
          }}
        />
      </Paper>

      <Button
        variant="contained"
        className={classes.signUpButton}
        onClick={handleSignUp}
        fullWidth
        disabled={loading}
      >
        Sign up
      </Button>

      <Box className={classes.signInContainer}>
        <Typography color={theme.palette.text.primary}>
          Already a user?
        </Typography>
        <Button
          variant="text"
          disableFocusRipple
          disableElevation
          disableRipple
          className={classes.linkButton}
          onClick={() => navigate("/IP-Movie-streaming-website/login")}
        >
          <Typography
            sx={{ textTransform: "none", color: theme.palette.text.disabled }}
          >
            Sign in now.
          </Typography>
        </Button>
      </Box>
    </AuthLayout>
  );
};

export default Register;
