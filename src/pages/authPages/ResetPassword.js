import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import netflixBackground from "../../resources/images/netflix2.jpg";

const ResetPassword = () => {
  const [input, setInput] = useState({ password: "", confirmPassword: "" });
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorConfirmPassword, setErrorConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const handleChange = (eventent, key) => {
    setInput({ ...input, [key]: eventent.target.value });
  };
     
  const handleSubmit = (event) => {
    event.preventDefault();
  
    if(validate()){
        console.log(input);
  
        let input = {};
        input.password= "";
        input.confirmPassword= "";
        setInput({input});
        alert('Password reseted');
        navigate("/home");
    }
    
  }
  
  const validate = () =>{
      let isValid = true;
      if (!input.password) {
        isValid = false;
        setErrorPassword("Please enter your password.");
      }
      else {
        isValid = false;
        setErrorPassword(false);
      }
      if (!input.confirmPassword) {
        isValid = false;
        setErrorConfirmPassword("Please enter your confirm password.");
      }
      else
        if (input.password != input.confirmPassword) {
          isValid = false;
          setErrorConfirmPassword("Passwords don't match.");
        }
      else {
        isValid = false;
      setErrorConfirmPassword(false);
     
      }
  
  
      return isValid;
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
              mb="25px"
              variant="h4"
              fontFamily="sans-serif"
            >
              Reset Password
            </Typography>
            <Paper sx={{ backgroundColor: "rgb(51 51 51)", width: "100%" }}>
          <TextField
            sx={{
              width: "100%",
              color: "rgb(140 140 140)",
            }}
            label="Password"
            type="password"
            error={errorPassword}
            id="password"
            onChange={(ev) => handleChange(ev, "password")}
            value={input.password}
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
            
            id="confirm_password"
            label="Confirm Password"
            error={errorConfirmPassword}
            type="password"
            sx={{
              width: "100%",
              color: "rgb(140 140 140)",
            }}
            onChange={(ev) => handleChange(ev, "confirmPassword")}
            value={input.confirmPassword}
            variant="filled"

          />
        </Paper>
   
        
          <Button
              variant="contained"
              sx={{
                marginTop: "25px",
                width: "40%",
                textTransform: "none",
                marginBottom: "25px",
              }}
              onClick={handleSubmit}
            >
              Submit
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
export default ResetPassword;
