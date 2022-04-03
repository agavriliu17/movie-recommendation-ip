import React from "react";
import Container from '@mui/material/Container';
import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Register = () => {
  const [input, setInput] = useState({ firstName: "", lastName: "", email: "", password: "", confirmPassword: "" });
  const [errorFirstName, setErrorFirstName] = useState(false);
  const [errorLastName, setErrorLastName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorConfirmPassword, setErrorConfirmPassword] = useState(false);

  const handleChangeImput = (eventent, key) => {
    setInput({ ...input, [key]: eventent.target.value });
  };

  const checkPasswords = (input) => {
    if (input.password === input.confirmPassword) {
      return true;
    }
    return false;
  };

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
    
    <Container maxWidth="sm">
      
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >

    <div className="SignUp">
      <h1>Sign Up</h1>
    </div>
        <TextField
          error={errorFirstName}
          id="1"
          label="First Name"
          onChange={(event) => handleChangeImput(event, "firstName")}
          value={input.firstName}
        />

        <TextField
          sx={{ marginTop: "10px" }}
          error={errorLastName}
          id="2"
          label="Last Name"
          onChange={(event) => handleChangeImput(event, "lastName")}
          value={input.lastName}
        />

        <TextField
          sx={{ marginTop: "10px" }}
          error={errorEmail}
          id="3"
          label="Email address"
          onChange={(event) => handleChangeImput(event, "email")}
          value={input.email}
        />
        <TextField
          sx={{ marginTop: "10px" }}
          error={errorPassword}
          id="4"
          label="Password"
          type="password"
          onChange={(event) => handleChangeImput(event, "password")}
          value={input.password}
        />
        <TextField
          sx={{ marginTop: "10px" }}
          error={errorConfirmPassword}
          id="5"
          label="Confrim password"
          type="password"
          onChange={(event) => handleChangeImput(event, "confirmPassword")}
          value={input.confirmPassword}
        />

        <Button
          variant="contained"
          sx={{ marginTop: "10px" }}
          onClick={handleSignUp}
        >
          Sign up
        </Button>
        <div className="Login">
          Already a user?
        <Link to="/login" >
        Sign in now.
          </Link>
      </div>
      </Box>

    </Container>
  );
};

export default Register;
