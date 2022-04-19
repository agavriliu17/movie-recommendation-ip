import React from "react";
import ReactDOM from "react-dom";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Login from "./pages/authPages/Login";
import Register from "./pages/authPages/Register";
import ResetPassword from "./pages/authPages/ResetPassword";

import Landing from "./pages/Landing";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="reset-pass" element={<ResetPassword />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
