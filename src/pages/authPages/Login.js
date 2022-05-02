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
import {motion} from 'framer-motion';


import logo from "../../resources/images/logo.png";

import { useNavigate } from "react-router-dom";
import neteflixBackground2 from "../../resources/images/bg2.jpg"

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
   
  };

  return (
    <Paper
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${neteflixBackground2})`,
        backgroundSize: "cover",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
        <Box
        className="title"
        sx={{
          position: "absolute",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          zIndex: "1",
          left: "5%",
          top: "2vh",
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
        <Fade in timeout={750}>
          <Card
            sx={{
              height: "fit-content",
              padding: "20px",
              backgroundColor: "rgba(	72, 40, 132,0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "10%"
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "80%"
               
              }}
            >
              <Typography
                color="#F9F871"
                mb="25px"
                variant="h4"
                fontFamily="Trispace"
              >
                Log in
              </Typography>
              <Paper
                sx={{
                  backgroundColor: "#F9F871",
                  width: "100%",
                  height: "55px",
                  marginBottom: "15px",
                  opacity: "65%",
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
                  sx={{ width: "100%", color: "#F9F871", height: "55px" }}
                  variant="filled"
                  InputLabelProps={{
                    sx: {
                      fontFamily:"Trispace",
                      color: "#482884",
                    },
                  }}
                />
              </Paper>
              <Paper
                sx={{
                  height: "55px",
                  backgroundColor: "#F9F871",
                  marginTop: "15px",
                  width: "100%",
                  marginBottom: "30px",
                  opacity: "65%",

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
                      fontFamily:"Trispace",
                      color: "#482884",
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
                 
                </Button>
              </Box>
              <Button
                variant="outlined"
                component={motion.div}
                whileHover={{
                scale: 1.2,
                 transition: { duration: 0.1 },
                boxShadow: "0px 0px 10px rgb(249, 248, 113)"
                }}
                whileTap={{ scale: 0.9 }}
                initial={{opacity: 0, y: '-100vw'}}
               animate={{opacity: 1, y: 0}}
               transition={{duration: 1.5 , type: "spring", stiffness: 60}}

                sx={{
                  marginTop: "25px",
                  width: "40%",
                 // textTransform: "none",
                  marginBottom: "25px",
                  color:"#F9F871",
                  backgroundColor:"#482884",
                  fontFamily: "Trispace",
                  fontWeight:"600",
                  borderColor:"#F9F871",
                  "&:hover": {
                    backgroundColor:"#F9F871",
                    color:"#482884",
                    borderColor:"#482884",
                    
                  },

                }}
                onClick={handleSignIn}
              >
                Sign in
              </Button>
              <Box
                sx={{
                  display: "flex",
                  width:"100%",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: "25px",
                }}
              >
              <Button
                  variant="text"

                  component={motion.div}
                  whileHover={{
                  scale: 1.2,
                   transition: { duration: 0.1 },
                  textShadow: "0px 0px 12px rgb(249, 248, 113)"
                  }}
                  whileTap={{ scale: 0.9 }}
                  initial={{opacity: 0, y: '100vw'}}
                 animate={{opacity: 1, y: 0}}
                 transition={{duration: 1 , type: "tween"}}

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
                  <Typography sx={{ textTransform: "none", color: "#F9F871",fontFamily:"Trispace" ,}}>
                    Forgot password?
                  </Typography>
                </Button>
               
                <Button
                  variant="text"
                  component={motion.div}
                  whileHover={{
                  scale: 1.2,
                   transition: { duration: 0.1 },
                  textShadow: "0px 0px 12px rgb(249, 248, 113)"
                  }}
                  whileTap={{ scale: 0.9 }}
                  initial={{opacity: 0, y: '100vw'}}
                 animate={{opacity: 1, y: 0}}
                 transition={{duration: 1 , type: "tween"}}

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
                  <Typography sx={{ textTransform: "none", color: "#F9F871",fontFamily:"Trispace" ,}}>
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
