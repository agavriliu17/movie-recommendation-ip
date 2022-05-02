import React from "react";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { themeOptions } from "./theming/theme";

import Login from "./pages/authPages/Login";
import Register from "./pages/authPages/Register";
import ResetPassword from "./pages/authPages/ResetPassword";

import Landing from "./pages/Landing";
import Home from "./pages/user/Home";
import Movie from "./pages/Movie";
import NotFound from "./pages/NotFound";
import AdminHome from "./pages/admin/AdminHome";

const App = () => {
  const theme = createTheme(themeOptions);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing />} />
          <Route path="home" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="reset-pass" element={<ResetPassword />} />
          <Route path="watch/:movieId" element={<Movie />} />
          <Route path="admin/home" element={<AdminHome />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
