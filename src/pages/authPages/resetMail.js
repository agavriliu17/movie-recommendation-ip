import React from "react";
import { BASE_URL } from "../../resources/constants"
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";

import { useTheme } from "@mui/system";

import CustomCheckBox from "../../components/CustomCheckbox";
import AuthLayout from "./AuthLayout";
import axios from 'axios';
import UserContext from "../../resources/context/UserContext";
import { loginUser } from "../../resources/helpers/authHelper";
import { useNavigate } from "react-router-dom";
import {
    sendMail
  } from "../../resources/helpers/authHelper";
  
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

const ResetMail = () => {
 

const theme = useTheme();
  const navigate = useNavigate();

  const [input, setInput] = React.useState({
    email: "",
  });



  const handleChangeInput = (event, key) => {
    setInput({ ...input, [key]: event.target.value });
  };
  
  const handleChangePassword=async ()=>
  {
      try{
          const response=await sendMail(input);
          if (response) navigate("/IP-Movie-streaming-website/reset-pass")
      }
      catch(e)
      {
          console.log(e);
      }
  }


  const classes = useStyles();
  return (
    <AuthLayout>
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
      >
        Send
      </Button>
    </AuthLayout>
  );
};

export default ResetMail;
