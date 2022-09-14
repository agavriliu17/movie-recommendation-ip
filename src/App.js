import React from "react";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import ProtectedRoute from "../src/pages/ProtectedRoute";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { themeOptions } from "./theming/theme";
import { SnackbarProvider } from "notistack";

import Login from "./pages/authPages/Login";
import Register from "./pages/authPages/Register";
import ResetPassword from "./pages/authPages/ResetPassword";
import ResetMail from "./pages/authPages/ResetMail";

import MyList from "./pages/user/MyList";
// import Landing from "./pages/Landing";
import Home from "./pages/user/Home";
import Movie from "./pages/user/Movie";
import NotFound from "./pages/NotFound";
import SearchMovies from "./pages/user/SearchMovies";
import AdminHome from "./pages/admin/AdminHome";
import Settings from "./pages/Settings";
import LandingPage from "./pages/user/landing/LandingPage";

const App = () => {
  const theme = createTheme(themeOptions);

  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={3} preventDuplicate>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<ProtectedRoute />}>
              <Route path="/home" element={<Home />} />
              <Route path="/watch/:movieId" element={<Movie />} />
              <Route path="/admin/home" element={<AdminHome />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/search/:genre" element={<SearchMovies />} />
              <Route path="/my_list" element={<MyList />} />
            </Route>

            <Route index path="/landing" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/reset-pass" element={<ResetPassword />} />
            <Route path="/reset-mail" element={<ResetMail />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </SnackbarProvider>
    </ThemeProvider>
  );
};

export default App;
