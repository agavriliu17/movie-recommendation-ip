import React from "react";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import ProtectedRoute from "../src/pages/ProtectedRoute";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { themeOptions } from "./theming/theme";

import Login from "./pages/authPages/Login";
import Register from "./pages/authPages/Register";
import ResetPassword from "./pages/authPages/ResetPassword";

import MyList from "./pages/user/MyList";
import Landing from "./pages/Landing";
import Home from "./pages/user/Home";
import Movie from "./pages/user/Movie";
import NotFound from "./pages/NotFound";
import AdminHome from "./pages/admin/AdminHome";
import Settings from "./pages/Settings";

const App = () => {
  const theme = createTheme(themeOptions);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/IP-Movie-streaming-website/"
            element={<ProtectedRoute />}
          >
            <Route path="/IP-Movie-streaming-website/home" element={<Home />} />
            <Route
              path="/IP-Movie-streaming-website/watch/:movieId"
              element={<Movie />}
            />
            <Route
              path="/IP-Movie-streaming-website/admin/home"
              element={<AdminHome />}
            />
            <Route
              path="/IP-Movie-streaming-website/settings"
              element={<Settings />}
            />
          </Route>

          <Route index element={<Landing />} />
          <Route path="/IP-Movie-streaming-website/login" element={<Login />} />
          <Route
            path="/IP-Movie-streaming-website/my_list"
            element={<MyList />}
          />
          <Route
            path="/IP-Movie-streaming-website/register"
            element={<Register />}
          />
          <Route
            path="/IP-Movie-streaming-website/reset-pass"
            element={<ResetPassword />}
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
