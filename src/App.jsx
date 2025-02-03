import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import MyNavbar from "./components/Navbar";
import MainRoutes from "./routes";
import SignUp from "./pages/auth/signUp";
import Login from "./pages/auth/Login";
import "./App.css";


const App = () => {
  return (
    <>
      <MainRoutes />
      {/* <Home/> */}
    </>
  );
};

export default App;
