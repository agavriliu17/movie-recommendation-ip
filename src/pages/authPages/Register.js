import React from "react";
import Container from '@mui/material/Container';
import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import netflixBackground from "../../resources/images/netflix2.jpg";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [input, setInput] = useState({ firstName: "", lastName: "", email: "", password: "", confirmPassword: "" });
  const [errorFirstName, setErrorFirstName] = useState(false);
  const [errorLastName, setErrorLastName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorConfirmPassword, setErrorConfirmPassword] = useState(false);

  const handleChangeInput = (event, key) => {
    setInput({ ...input, [key]: event.target.value });
  };

  const checkPasswords = (input) => {
    if (input.password === input.confirmPassword) {
      return true;
    }
    return false;
  };

  const navigate = useNavigate();

  const handleSignUp = () => {

    if (input.firstName === "") {
      setErrorFirstName(true);
    }
    else { setErrorFirstName(false); }

    if (input.lastName === "") {
      setErrorLastName(true);
    }
    else { setErrorLastName(false); }

    if (input.email === "") {
      setErrorEmail(true);
    }
    else { setErrorEmail(false); }

    if (input.password === "") {
      setErrorPassword(true);
    }
    else { setErrorPassword(false); }

    if (input.confirmPassword === "") {
      setErrorConfirmPassword(true);
    }
    else { setErrorConfirmPassword(false); }

    if (checkPasswords(input) === true) {
      setErrorConfirmPassword(false);
    }
    else { setErrorConfirmPassword(true); }
  };

  return (
    <Paper
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${netflixBackground})`,
        backgroundSize: "cover",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Container maxWidth="sm">
        <Card
          sx={{
            height: "fit-content",
            padding: "20px",
            backgroundColor: "rgba(0,0,0,0.75)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              color="#fff"
              mb="25px"
              variant="h4"
              fontFamily="sans-serif"
              sx={{
                display: "flex",
                flexDirection: "left",
              }}
            >
              Sign up
            </Typography>

            <Paper sx={{ backgroundColor: "rgb(51 51 51)", width: "100%" }}>
              <TextField
                error={errorFirstName}
                id="1"
                label="First Name"
                onChange={(event) => handleChangeInput(event, "firstName")}
                value={input.firstName}
                sx={{ width: "100%", color: "#8c8c8c" }}
                variant="filled"
              />
            </Paper>

            <Paper
              sx={{
                backgroundColor: "rgb(51 51 51)",
                height: "fit-content",
                marginTop: "15px",
                width: "100%",
              }}
            >
            <TextField
              error={errorLastName}
              id="2"
              label="Last Name"
              onChange={(event) => handleChangeInput(event, "lastName")}
              value={input.lastName}
              sx={{ width: "100%", color: "#8c8c8c" }}
              variant="filled"
            />
            </Paper>

            <Paper
              sx={{
                backgroundColor: "rgb(51 51 51)",
                height: "fit-content",
                marginTop: "15px",
                width: "100%",
              }}
            >
            <TextField
              error={errorEmail}
              id="3"
              label="Email address"
              onChange={(event) => handleChangeInput(event, "email")}
              value={input.email}
              sx={{ width: "100%", color: "#8c8c8c" }}
              variant="filled"
            />
            </Paper>

            <Paper
              sx={{
                backgroundColor: "rgb(51 51 51)",
                height: "fit-content",
                marginTop: "15px",
                width: "100%",
              }}
            >
            <TextField
              error={errorPassword}
              id="4"
              label="Password"
              type="password"
              onChange={(event) => handleChangeInput(event, "password")}
              value={input.password}
              sx={{ width: "100%", color: "#8c8c8c" }}
              variant="filled"
            />
            </Paper>

            <Paper
              sx={{
                backgroundColor: "rgb(51 51 51)",
                height: "fit-content",
                marginTop: "15px",
                width: "100%",
              }}
            >
            <TextField
              error={errorConfirmPassword}
              id="5"
              label="Confirm password"
              type="password"
              onChange={(event) => handleChangeInput(event, "confirmPassword")}
              value={input.confirmPassword}
              sx={{ width: "100%", color: "#8c8c8c" }}
              variant="filled"
            />
            </Paper>

            <Button
             variant="contained"
             sx={{
               marginTop: "25px",
               background: "red",
               color:"white",
               padding: "10px 90px",
               textTransform: "none",
               marginBottom: "25px",
             }}
              onClick={handleSignUp}
            >
              Sign up
            </Button>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginTop: "25px",
              }}
            >
              <Typography color="#b3b3b3">Already a user?</Typography>
              <Button
                variant="text"
                disableFocusRipple
                disableElevation
                disableRipple
                sx={{
                  "&.MuiButtonBase-root:hover": {
                    bgcolor: "transparent",
                  },
                }}
                onClick={() => navigate("/login")}
              >
                <Typography sx={{ textTransform: "none", color: "#fff" }}>
                  Sign in now.
                </Typography>
              </Button>
            </Box>
            
          </Box>
        </Card>
      </Container>
    </Paper>
  );
};

export default Register;
