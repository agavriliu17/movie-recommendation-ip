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
import { sendMail } from "../../resources/helpers/authHelper";

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
  },
  signUpContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: "25px",
  },
});

const ResetPassword = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const [input, setInput] = React.useState({
    email: "",
  });

  const handleChangeInput = (event, key) => {
    setInput({ ...input, [key]: event.target.value });
  };

  const handleChangePassword = async () => {
    try {
      const response = await sendMail(input);
      if (response) navigate("/IP-Movie-streaming-website/reset-pass");
    } catch (e) {
      console.log(e);
    }
  };

  const classes = useStyles();
  return (
    <AuthLayout>
      <Typography color={theme.palette.text.primary} mb="25px" variant="h4">
        Forgot password?
      </Typography>
      <Typography color={theme.palette.text.primary} mb="25px">
        No worries, we'll send you reset instructions
      </Typography>
      <Paper className={classes.inputContainer}>
        <TextField
          label="Email address"
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
      <Button
        variant="contained"
        className={classes.signUpButton}
        onClick={handleChangePassword}
        fullWidth
      >
        Send
      </Button>
      <Box className={classes.signUpContainer}>
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
            Go back to login
          </Typography>
        </Button>
      </Box>
    </AuthLayout>
  );
};

export default ResetPassword;
