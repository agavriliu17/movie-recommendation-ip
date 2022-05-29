import React from "react";

import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@mui/styles";
import AuthLayout from "./AuthLayout";
import { useNavigate } from "react-router-dom";
import {
  sendRequestReset,
  validatePassword,
} from "../../resources/helpers/authHelper";
import { useSnackbar } from "notistack";
import UserContext from "../../resources/context/UserContext";

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
  const [loading, setLoading] = React.useState(false);
  const [token, setToken] = React.useState("");
  const [input, setInput] = React.useState({
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = React.useState({
    password: "",
    confirmPassword: "",
  });
  const { setLoginMessage } = React.useContext(UserContext);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  React.useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const urlToken = urlParams.get("token");
    setToken(urlToken);
  }, []);

  const handleChange = (event, key) => {
    setInput({ ...input, [key]: event.target.value });
  };

  const handleResetPassword = async () => {
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

    if (passwordError === "" && confirmPasswordError === "") {
      setLoading(true);
      setError({
        password: passwordError,
        confirmPassword: confirmPasswordError,
      });
      try {
        const response = await sendRequestReset(input, token);
        if (response) {
          setLoginMessage("You've reset your password successfully!");
          navigate("/login");
        }
      } catch (e) {
        enqueueSnackbar(e.message, { variant: "error" });
      }
    } else {
      setLoading(false);
      setError({
        password: passwordError,
        confirmPassword: confirmPasswordError,
      });
    }
  };

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
        onClick={handleResetPassword}
        disabled={loading}
      >
        Submit
      </Button>
    </AuthLayout>
  );
};
export default ResetPassword;
