import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Container from '@mui/material/Container';
import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";

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
      else
      if (!input.confirmPassword) {
        isValid = false;
        setErrorConfirmPassword("Please enter your confirm password.");
      }
      else
      if (typeof input.password!== "undefined" && typeof input.confirmPassword !== "undefined") {
          
        if (input.password != input.confirmPassword) {
          isValid = false;
          setErrorConfirmPassword("Passwords don't match.");
        }
      } 
  
  
      return isValid;
  }
  
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
  <div className="ResetPassword">
    <h1>Reset Password</h1>
    
    <div>
      <form onSubmit={handleSubmit}> 
        <div class="form-group">
          <TextField
            sx={{ marginTop: "10px" }}
            label="Password"
            type="password"
            error={errorPassword}
            id="password"
            placeholder="Enter password" 
            onChange={(ev) => handleChange(ev, "password")}
            value={input.password}
          />
          <div className="text-danger">{errorPassword}</div>
        </div>

        <div class="form-group">
          <TextField
            sx={{ marginTop: "10px" }}
            label="Confirm Password"
            error={errorConfirmPassword}
            id="confirm_password"
            placeholder="Enter confirm password" 
            name="confirm_password" 
            type="password"
            onChange={(ev) => handleChange(ev, "confirmPassword")}
            value={input.confirmPassword}
          />
          <div className="text-danger">{errorConfirmPassword}</div>
        </div>
   
        <Button
          variant="contained"
          sx={{ marginTop: "10px" }}
          onClick={handleSubmit}>Submit</Button>
      </form>
    </div>
  </div>
  <hr />
  <div className="auth-option text-center pt-2"><Link className="text-link" to="/login" >Back to Login</Link></div>
  </Box>
  </Container>
  );
        
};
export default ResetPassword;
