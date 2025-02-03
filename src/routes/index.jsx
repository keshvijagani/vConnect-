import React from "react";
import SignUp from "../pages/auth/signUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/auth/Login";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import TableData from "../components/TableData";
import MeetingData from "../components/MeetingData";

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tabledata" element={<TableData />} />
          <Route path="/meetingdata" element={<MeetingData />} />

          </Route>

          </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
