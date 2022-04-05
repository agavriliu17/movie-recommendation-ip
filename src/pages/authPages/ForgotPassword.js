import React, { useState } from 'react';
import validator from 'validator';
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import netflixBackground from "../../resources/images/netflix2.jpg";
const ForgotPassword = () => {
  
  const navigate = useNavigate();
  const [input, setInput] = useState({ email: ""});
  const [error, setError] = useState(false);
  const handleChange = (event, key) => {
    setInput({ ...input, [key]: event.target.value });
  };
  const handleSubmit=(e)=>{
    if (input.email === "") {
      setError(true);
    } else 
    if(validateEmail(e))
    {
      alert('We\'ve sent you an confirmation email to ' + input.email);
      navigate("/reset-pass");
    }
    else setError(true);
  }
  const validateEmail = (e) => {
  
    if (validator.isEmail(input.email)) {
      return true;
    } else {
     return false;
    }
  }
  
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
              variant="h4"
              fontFamily="sans-serif"
            >
              Forgot Password
              
            </Typography>
            <Paper sx={{ backgroundColor: "rgb(51 51 51)", width: "100%",marginTop: "60px" }}>
              
              <TextField
                error={error}
                required
                id="outlined-required"
                label="Email"
                sx={{ width: "100%", color: "#8c8c8c" }}
                variant="filled"
                onChange={(ev) => handleChange(ev, "email")}
              />
            </Paper>
    <TextField
              sx={{ marginTop: "10px" }}
              label="Email"
              type="email" name="user_email"
               placeholder="email@someone.com"
            />
            <Button
              variant="contained"
              type="submit"
            value="Send"
            onClick={handleSubmit}
              sx={{
                marginTop: "15px",
                width: "40%",
                textTransform: "none",
                marginBottom: "15px",
              }}
            >
              Send email
            </Button>
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
                onClick={() => navigate("/login")}
              >
                <Typography sx={{ textTransform: "none", color: "#fff" }}>
                  Back to login
                </Typography>
              </Button>
            </Box>
      
  
    </Box>
    </Card>
    </Container>
    </Paper>
  );
};
export default ForgotPassword;
