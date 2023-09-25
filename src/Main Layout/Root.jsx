import React from "react";
import Home from "../Pages/Home/Home";
import { Outlet, useLocation } from "react-router-dom";
import Nav from "../Components/NavBar/Nav";

const Root = () => {


  return (
    <div className="">
       <Nav></Nav>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
