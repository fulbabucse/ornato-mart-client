import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar/Navbar";
// import Header from "../pages/shared/Header/Header";

const Root = () => {
  return (
    <div>
      {/* <Header></Header> */}
      <Navbar></Navbar>
      <div className="max-w-screen-xl mx-auto mt-3">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
