import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CustomCheckBox from "../../components/CustomCheckbox";
import Fade from "@mui/material/Fade";

import { useNavigate } from "react-router-dom";
import netflixBackground from "../../resources/images/netflix2.jpg";

export const validateEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

const Login = () => {
  const [input, setInput] = React.useState({ email: "", password: "" });
  const [error, setError] = React.useState({ email: "", password: "" });

  const navigate = useNavigate();

  const handleChange = (event, key) => {
    setInput({ ...input, [key]: event.target.value });
  };

  const handleSignIn = () => {
    if (input.email === "" || !validateEmail(input.email)) {
      setError({
        email: "Please provide an valid email",
        password: error.password,
      });
      // console.log(error);
    } else setError({ ...error, email: "" });
    if (input.password.length < 8) {
      setError({
        email: error.email,
        password: "Your password must be at at least 8 characters long ",
      });
      console.log(error);
    } else {
      setError({ ...error, password: "" });
      navigate("/home");
    }
    // if (error.email === "" && error.password === "") {
    //   navigate("/home");
    // }
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
        <Fade in timeout={750}>
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
                flexDirection: "column",
                alignItems: "center",
                width: "80%",
              }}
            >
              <Typography
                color="#fff"
                mb="25px"
                variant="h4"
                fontFamily="sans-serif"
              >
                Sign in
              </Typography>
              <Paper
                sx={{
                  backgroundColor: "rgb(51 51 51)",
                  width: "100%",
                  height: "55px",
                  marginBottom: "15px",
                }}
              >
                <TextField
                  error={error.email === "" ? false : true}
                  required
                  id="outlined-required"
                  label="Email"
                  defaultValue="email@someone.com"
                  helperText={error.email}
                  onChange={(ev) => handleChange(ev, "email")}
                  value={input.email}
                  sx={{ width: "100%", color: "#8c8c8c", height: "55px" }}
                  variant="filled"
                  InputLabelProps={{
                    sx: {
                      color: "#8c8c8c",
                    },
                  }}
                />
              </Paper>
              <Paper
                sx={{
                  height: "55px",
                  backgroundColor: "rgb(51 51 51)",
                  marginTop: "15px",
                  width: "100%",
                  marginBottom: "30px",
                }}
              >
                <TextField
                  error={error.password === "" ? false : true}
                  id="outlined-password-input"
                  label="Password *"
                  type="password"
                  autoComplete="current-password"
                  sx={{
                    width: "100%",
                    color: "rgb(140 140 140)",
                    height: "55px",
                  }}
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
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <CustomCheckBox />
                  <Typography color="#b3b3b3">Remember me</Typography>
                </Box>
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
                  onClick={() => navigate("/reset-pass")}
                >
                  <Typography sx={{ textTransform: "none", color: "#b3b3b3" }}>
                    Forgot password?
                  </Typography>
                </Button>
              </Box>
              <Button
                variant="contained"
                sx={{
                  marginTop: "25px",
                  width: "40%",
                  textTransform: "none",
                  marginBottom: "25px",
                }}
                onClick={handleSignIn}
              >
                Sign in
              </Button>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: "25px",
                }}
              >
                <Typography color="#b3b3b3">New on this app?</Typography>
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
                  onClick={() => navigate("/register")}
                >
                  <Typography sx={{ textTransform: "none", color: "#fff" }}>
                    Sign up now.
                  </Typography>
                </Button>
              </Box>
            </Box>
          </Card>
        </Fade>
      </Container>
    </Paper>
  );
};

export default Login;
