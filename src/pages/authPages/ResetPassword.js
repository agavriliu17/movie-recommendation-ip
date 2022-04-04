import React from 'react';
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Container from '@mui/material/Container';
import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';

class ResetPassword extends React.Component {
    constructor() {
    super();
    this.state = {
      input: {},
      errors: {}
    };
     
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }
     
  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
  
    this.setState({
      input
    });
  }
     
  handleSubmit(event) {
    event.preventDefault();
  
    if(this.validate()){
        console.log(this.state);
  
        let input = {};
        input["password"] = "";
        input["confirm_password"] = "";
        this.setState({input:input});
  
        alert('Password reseted');
    }
  }
  
  validate(){
      let input = this.state.input;
      let errors = {};
      let isValid = true;
      if (!input["password"]) {
        isValid = false;
        errors["password"] = "Please enter your password.";
      }
  
      if (!input["confirm_password"]) {
        isValid = false;
        errors["confirm_password"] = "Please enter your confirm password.";
      }
  
      if (typeof input["password"] !== "undefined" && typeof input["confirm_password"] !== "undefined") {
          
        if (input["password"] != input["confirm_password"]) {
          isValid = false;
          errors["password"] = "Passwords don't match.";
        }
      } 
  
      this.setState({
        errors: errors
      });
  
      return isValid;
  }
     
  render() {
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
        <form onSubmit={this.handleSubmit}> 
          <div class="form-group">
            <TextField
              sx={{ marginTop: "10px" }}
              error={this.state.errors.password}
              id="password"
              placeholder="Enter password" 
              name="password" 
              onChange={this.handleChange}
              type="password"
              value={this.state.input.password}
              class="form-control" 
            />
            <div className="text-danger">{this.state.errors.password}</div>
          </div>
  
          <div class="form-group">
            <TextField
              sx={{ marginTop: "10px" }}
              error={this.state.errors.confirm_password}
              id="confirm_password"
              placeholder="Enter confirm password" 
              name="confirm_password" 
              type="password"
              onChange={this.handleChange}
              value={this.state.input.confirm_password}
              class="form-control" 
            />
            <div className="text-danger">{this.state.errors.confirm_password}</div>
          </div>
     
          <Button
            variant="contained"
            sx={{ marginTop: "10px" }}
            onClick={this.handleSubmit}>Submit</Button>
        </form>
      </div>
    </div>
    <hr />
    <div className="auth-option text-center pt-2"><Link className="text-link" to="/login" >Back to Login</Link></div>
    </Box>
    </Container>
    );
  }
}
  
export default ResetPassword;
