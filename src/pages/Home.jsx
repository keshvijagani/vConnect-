import React from "react";
import { Link, Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import MyNavbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <MyNavbar />
      <div className="d-flex gap-3">
        <Sidebar />
        <div className="main_layout_container">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Home;
