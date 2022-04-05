import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CustomCheckBox from "../../components/CustomCheckbox";

import { useNavigate } from "react-router-dom";
import netflixBackground from "../../resources/images/netflix2.jpg";

const Login = () => {
  const [input, setInput] = React.useState({ email: "", password: "" });
  const [error, setError] = React.useState(false);

  const navigate = useNavigate();

  const handleChange = (event, key) => {
    setInput({ ...input, [key]: event.target.value });
  };

  const handleSignIn = () => {
    if (input.email === "") {
      setError(true);
    } else navigate("/home");
  };

  return (
    <Paper
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${netflixBackground})`,
        // backgroundImage:
        //   "url(https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png)",
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
            <Paper sx={{ backgroundColor: "rgb(51 51 51)", width: "100%" }}>
              <TextField
                error={error}
                required
                id="outlined-required"
                label="Email"
                defaultValue="email@someone.com"
                onChange={(ev) => handleChange(ev, "email")}
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
                id="outlined-password-input"
                label="Password *"
                type="password"
                autoComplete="current-password"
                sx={{
                  width: "100%",
                  color: "rgb(140 140 140)",
                }}
                onChange={(ev) => handleChange(ev, "password")}
                value={input.password}
                variant="filled"
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
      </Container>
    </Paper>
  );
};

export default Login;
