import React from "react";

import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";

import CustomCheckBox from "../../components/CustomCheckbox";
import AuthLayout from "./AuthLayout";

import UserContext from "../../resources/context/UserContext";
import { loginUser } from "../../resources/helpers/authHelper";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  inputContainer: {
    backgroundColor: "rgb(51 51 51)",
    width: "100%",
    height: "55px",
    marginBottom: "30px",
  },
  inputField: { width: "100%", height: "55px" },
  forgotSection: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rememberMe: { display: "flex", flexDirection: "row", alignItems: "center" },
  linkButton: {
    "&.MuiButtonBase-root:hover": {
      bgcolor: "transparent",
    },
  },
  signInButton: {
    margin: "25px 0px !important",
    textTransform: "none !important",
    width: "40%",
  },
  signUpContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: "25px",
  },
});

const Login = () => {
  const [input, setInput] = React.useState({ username: "", password: "" });
  const [error, setError] = React.useState({ username: "", password: "" });
  const { authenticateUser, isAuthenticated } = React.useContext(UserContext);

  const navigate = useNavigate();

  React.useEffect(() => {
    if (isAuthenticated) navigate("/home");
  }, [isAuthenticated, navigate]);

  const handleChange = (event, key) => {
    setInput({ ...input, [key]: event.target.value });
  };

  const handleSignIn = async () => {
    const usernameError =
      input.username === "" ? "Please provide an valid username" : "";

    const passwordError =
      input.password.length < 8
        ? "Your password must be at at least 8 characters long "
        : "";

    if (usernameError === "" && passwordError === "") {
      try {
        const response = await loginUser(input);
        if (response) authenticateUser();
      } catch (e) {
        console.log(e); //TODO: Show the user the error in some way
      }
    } else setError({ username: usernameError, password: passwordError });
  };

  const classes = useStyles();
  return (
    <AuthLayout>
      <Typography color="#fff" mb="25px" variant="h4" fontFamily="sans-serif">
        Sign in
      </Typography>
      <Paper className={classes.inputContainer}>
        <TextField
          error={error.username === "" ? false : true}
          required
          label="Username"
          helperText={error.username}
          onChange={(ev) => handleChange(ev, "username")}
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
          label="Password *"
          type="password"
          autoComplete="current-password"
          className={classes.inputField}
          helperText={error.password}
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
      <Box className={classes.forgotSection}>
        <Box className={classes.rememberMe}>
          <CustomCheckBox />
          <Typography color="#b3b3b3">Remember me</Typography>
        </Box>
        <Button
          variant="text"
          disableFocusRipple
          disableElevation
          disableRipple
          className={classes.linkButton}
          onClick={() => navigate("/reset-pass")}
        >
          <Typography sx={{ textTransform: "none", color: "#b3b3b3" }}>
            Forgot password?
          </Typography>
        </Button>
      </Box>
      <Button
        variant="contained"
        className={classes.signInButton}
        onClick={handleSignIn}
      >
        Sign in
      </Button>
      <Box className={classes.signUpContainer}>
        <Typography color="#b3b3b3">New on this app?</Typography>
        <Button
          variant="text"
          disableFocusRipple
          disableElevation
          disableRipple
          className={classes.linkButton}
          onClick={() => navigate("/register")}
        >
          <Typography sx={{ textTransform: "none", color: "#fff" }}>
            Sign up now.
          </Typography>
        </Button>
      </Box>
    </AuthLayout>
  );
};

export default Login;
