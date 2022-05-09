import React from "react";

import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/system";

import CustomCheckBox from "../../components/CustomCheckbox";
import AuthLayout from "./AuthLayout";

import AppContext from "../../resources/context/AppContext";
import { useNavigate } from "react-router-dom";
import { validateEmail } from "../../resources/helpers/authHelper";

const useStyles = makeStyles({
  inputContainer: {
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

  const theme = useTheme();

  const [input, setInput] = React.useState({ email: "", password: "" });
  const [error, setError] = React.useState({ email: "", password: "" });
  const { authenticateUser } = React.useContext(AppContext);

  const navigate = useNavigate();

  const handleChange = (event, key) => {
    setInput({ ...input, [key]: event.target.value });
  };

  const handleSignIn = () => {
    const emailError =
      input.email === "" || !validateEmail(input.email)
        ? "Please provide an valid email"
        : "";

    const passwordError =
      input.password.length < 8
        ? "Your password must be at at least 8 characters long "
        : "";

    if (emailError === "" && passwordError === "") {
      authenticateUser();
      navigate("/home");
    } else setError({ email: emailError, password: passwordError });
  };

  const classes = useStyles();
  return (
    <AuthLayout>
      <Typography color={theme.palette.text.secondary} mb="25px" variant="h4">
        Sign in
      </Typography>
      <Paper className={classes.inputContainer}>
        <TextField
          error={error.email === "" ? false : true}
          required
          label="Email"
          defaultValue="email@someone.com"
          helperText={error.email}
          onChange={(ev) => handleChange(ev, "email")}
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
              color: theme.palette.text.primary,
            },
          }}
        />
      </Paper>
      <Box className={classes.forgotSection}>
        <Box className={classes.rememberMe}>
          <CustomCheckBox />
          <Typography color={theme.palette.text.secondary}>Remember me</Typography>
        </Box>
        <Button
          variant="text"
          disableFocusRipple
          disableElevation
          disableRipple
          className={classes.linkButton}
          onClick={() => navigate("/reset-pass")}
        >
          <Typography sx={{ textTransform: "none", color: theme.palette.text.secondary }}>
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
        <Typography color={theme.palette.text.secondary}>New on this app?</Typography>
        <Button
          variant="text"
          disableFocusRipple
          disableElevation
          disableRipple
          className={classes.linkButton}
          onClick={() => navigate("/register")}
        >
          <Typography sx={{ textTransform: "none", color: theme.palette.text.disabled }}>
            Sign up now.
          </Typography>
        </Button>
      </Box>
    </AuthLayout>
  );
};

export default Login;
