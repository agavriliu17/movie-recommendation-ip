import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { useNavigate } from "react-router-dom";

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
        <TextField
          error={error}
          required
          id="outlined-required"
          label="Email"
          defaultValue="email@someone.com"
          onChange={(ev) => handleChange(ev, "email")}
          value={input.email}
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          sx={{ marginTop: "15px" }}
          onChange={(ev) => handleChange(ev, "password")}
          value={input.password}
        />
        <Button
          variant="contained"
          sx={{ marginTop: "15px" }}
          onClick={handleSignIn}
        >
          Sign in
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
