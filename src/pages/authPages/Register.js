import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import background from "../../pictures/bg2.jpg";
import logo from "../../pictures/logo.png";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export const COLORS = {
  primary: "#482884", // purple
  secondary: "#F9F871", // yellow
};

const Register = () => {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
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
    } else {
      setErrorFirstName(false);
    }

    if (input.lastName === "") {
      setErrorLastName(true);
    } else {
      setErrorLastName(false);
    }

    if (input.email !== "test.mail@mail.com") {
      setErrorEmail(true);
      alert("Invalid email address");
    } else {
      setErrorEmail(false);
    }

    if (input.password === "") {
      setErrorPassword(true);
    } else {
      setErrorPassword(false);
    }

    if (input.confirmPassword === "") {
      setErrorConfirmPassword(true);
    } else {
      setErrorConfirmPassword(false);
    }

    if (checkPasswords(input) === true) {
      setErrorConfirmPassword(false);
    } else {
      setErrorConfirmPassword(true);
    }
  };

  return (
    <Paper
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "column",
        alignItems: "flex-start",
        borderRadius: 0,
      }}
    >
      <Box
        className="title"
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginLeft: "15%",
        }}
      >
        <Typography
          display="inline"
          sx={{
            fontFamily: "Trispace",
            color: "#F9F871",
            fontWeight: "bolder",
            fontSize: "calc(1rem + 2vw)",
          }}
        >
          <img src={logo} width="30px" alt="Logo" />
          Movie&nbsp;
        </Typography>
        <Typography
          sx={{
            fontFamily: "Trispace",
            color: "#F9F871",
            fontWeight: "normal",
            fontSize: "calc(0.2rem + 2vw)",
          }}
        >
          Streaming Website
        </Typography>
      </Box>

      <Container maxWidth="sm">
        <Card
          sx={{
            height: "90%",
            padding: "20px",
            backgroundColor: "rgba(72,40,132,0.25)",
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
              width: "60%",
            }}
          >
            <Typography
              color="#F9F871"
              mb="25px"
              variant="h4"
              fontFamily="trispace"
              sx={{
                display: "flex",
                flexDirection: "left",
              }}
            >
              Sign Up
            </Typography>

            <Paper sx={{ backgroundColor: "#F9F871", width: "130%" }}>
              <TextField
                error={errorFirstName}
                id="1"
                label="First Name"
                onChange={(event) => handleChangeInput(event, "firstName")}
                value={input.firstName}
                sx={{ 
                  width: "100%", 
                  color: "#8c8c8c", 
                  input: { color: COLORS.primary },
                  "& label": {
                    color: COLORS.primary,
                    "&.Mui-focused": {
                      color: COLORS.primary,
                    }
                  }
                }}
                variant="filled"
              />
            </Paper>

            <Paper
              sx={{
                backgroundColor: "#F9F871",
                height: "fit-content",
                marginTop: "20px",
                width: "130%",
              }}
            >
              <TextField
                error={errorLastName}
                id="2"
                label="Last Name"
                onChange={(event) => handleChangeInput(event, "lastName")}
                value={input.lastName}
                sx={{ 
                  width: "100%", 
                  color: "#8c8c8c", 
                  input: { color: COLORS.primary },
                  "& label": {
                    color: COLORS.primary,
                    "&.Mui-focused": {
                      color: COLORS.primary,
                    }
                  }
                }}
                variant="filled"
              />
            </Paper>

            <Paper
              sx={{
                backgroundColor: "#F9F871",
                height: "fit-content",
                marginTop: "20px",
                width: "130%",
              }}
            >
              <TextField
                error={errorEmail}
                id="3"
                label="Email address"
                onChange={(event) => handleChangeInput(event, "email")}
                value={input.email}
                sx={{ 
                  width: "100%", 
                  color: "#8c8c8c", 
                  input: { color: COLORS.primary },
                  "& label": {
                    color: COLORS.primary,
                    "&.Mui-focused": {
                      color: COLORS.primary,
                    }
                  }
                }}
                variant="filled"
              />
            </Paper>

            <Paper
              sx={{
                backgroundColor: "#F9F871",
                height: "fit-content",
                marginTop: "20px",
                width: "130%",
              }}
            >
              <TextField
                error={errorPassword}
                id="4"
                label="Password"
                type="password"
                onChange={(event) => handleChangeInput(event, "password")}
                value={input.password}
                sx={{ 
                  width: "100%", 
                  color: "#8c8c8c", 
                  input: { color: COLORS.primary },
                  "& label": {
                    color: COLORS.primary,
                    "&.Mui-focused": {
                      color: COLORS.primary,
                    }
                  }
                }}
                variant="filled"
              />
            </Paper>

            <Paper
              sx={{
                backgroundColor: "#F9F871",
                height: "fit-content",
                marginTop: "20px",
                width: "130%",
              }}
            >
              <TextField
                error={errorConfirmPassword}
                id="5"
                label="Confirm password"
                type="password"
                onChange={(event) =>
                  handleChangeInput(event, "confirmPassword")
                }
                value={input.confirmPassword}
                sx={{ 
                  width: "100%", 
                  color: "#8c8c8c", 
                  input: { color: COLORS.primary },
                  "& label": {
                    color: COLORS.primary,
                    "&.Mui-focused": {
                      color: COLORS.primary,
                    }
                  }
                }}
                variant="filled"
              />
            </Paper>

            <Button
              variant="outlined"
              sx={{
                backgroundColor: COLORS.secondary,
                color: COLORS.primary,
                borderColor: COLORS.secondary,
                fontFamily: "Trispace",
                fontWeight: "bold",
                fontSize: "calc(0.3rem + 1vw)",
                marginTop: "20px",
                "&:hover": {
                  backgroundColor: COLORS.primary,
                  color: COLORS.secondary,
                  borderColor: COLORS.secondary,
                },
              }}
              onClick={handleSignUp}
            >
              Sign Up
            </Button>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginTop: "30px",
              }}
            >
              <Typography
                color="#F9F871"
                sx={{ fontSize: "calc(0.6rem + 0.8vw)" }}
              >
                Already an user?
              </Typography>
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
                <Typography
                  sx={{
                    textTransform: "none",
                    color: "#ad8ce6",
                    fontSize: "calc(0.6rem + 0.8vw)",
                  }}
                >
                  Log in now.
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
