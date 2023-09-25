import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Image from "../../assets/Logo.png";



const Nav = () => {

    const location = useLocation();
    const isHome = location.pathname === '/';

  return (
    <div>
    <div className={`${isHome ? 'absolute' : ''}  navbar px-24 py-8 bg-transparent `}>
        <div className="flex-1">
          <img src={Image} alt="" />
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 flex gap-10">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A] underline"
                  : ""
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/donation"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A] underline"
                  : ""
              }
            >
              Donation
            </NavLink>
            <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A] underline"
                  : ""
              }
            >
              Statistics
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
